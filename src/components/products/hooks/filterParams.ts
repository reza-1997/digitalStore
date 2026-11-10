import type { ProductFilterState } from './filterTypes';
import type { UseProductFiltersOptions } from './filterTypes';

const FILTER_QUERY_KEYS = [
    'availability',
    'category',
    'subcategory',
    'brand',
    'color',
    'minPrice',
    'maxPrice',
] as const;

const unique = (values: string[]) => [...new Set(values)];

const getValidSlugs = (params: URLSearchParams, key: string, valid: string[]) =>
    unique(params.getAll(key).filter((value) => valid.includes(value)));

const getPrice = (value: string | null, fallback: number, maxPrice: number) => {
    if (value === null || value.trim() === '') {
        return fallback;
    }

    const parsed = Number(value);
    return Number.isFinite(parsed)
        ? Math.min(Math.max(parsed, 0), maxPrice)
        : fallback;
};

export const parseFilters = (
    params: URLSearchParams,
    options: Pick<
        UseProductFiltersOptions,
        'categories' | 'subcategories' | 'brands' | 'colors'
    >,
    maxPrice: number
): ProductFilterState => {
    const categorySlugs = getValidSlugs(
        params,
        'category',
        options.categories.map((category) => category.slug)
    );
    const requestedSubcategories = getValidSlugs(
        params,
        'subcategory',
        options.subcategories.map((subcategory) => subcategory.slug)
    );
    const subcategoryItems = requestedSubcategories
        .map((slug) =>
            options.subcategories.find((subcategory) => subcategory.slug === slug)
        )
        .filter((subcategory) => subcategory !== undefined);
    const selectedSubcategories = categorySlugs.length
        ? subcategoryItems
            .filter((subcategory) =>
                categorySlugs.includes(subcategory.categorySlug)
            )
            .map((subcategory) => subcategory.slug)
        : subcategoryItems.map((subcategory) => subcategory.slug);
    const selectedCategories = categorySlugs.length
        ? categorySlugs
        : unique(
            subcategoryItems.map((subcategory) => subcategory.categorySlug)
        );
    const minPrice = getPrice(params.get('minPrice'), 0, maxPrice);
    const maxSelectedPrice = getPrice(
        params.get('maxPrice'),
        maxPrice,
        maxPrice
    );

    return {
        availability: {
            inStock: params.getAll('availability').includes('inStock'),
            outOfStock: params.getAll('availability').includes('outOfStock'),
        },
        categories: selectedCategories,
        subcategories: selectedSubcategories,
        brands: getValidSlugs(
            params,
            'brand',
            options.brands.map((brand) => brand.slug)
        ),
        colors: getValidSlugs(
            params,
            'color',
            options.colors.map((color) => color.slug)
        ),
        priceRange:
            minPrice <= maxSelectedPrice
                ? [minPrice, maxSelectedPrice]
                : [0, maxPrice],
    };
};

export const updateFilterUrl = (
    filters: ProductFilterState,
    historyMode: 'push' | 'replace',
    maxPrice: number
) => {
    const params = new URLSearchParams(window.location.search);
    FILTER_QUERY_KEYS.forEach((key) => params.delete(key));

    filters.categories.forEach((slug) => params.append('category', slug));
    filters.subcategories.forEach((slug) =>
        params.append('subcategory', slug)
    );
    filters.brands.forEach((slug) => params.append('brand', slug));
    filters.colors.forEach((slug) => params.append('color', slug));

    if (filters.availability.inStock) {
        params.append('availability', 'inStock');
    }
    if (filters.availability.outOfStock) {
        params.append('availability', 'outOfStock');
    }

    if (filters.priceRange[0] > 0) {
        params.set('minPrice', String(filters.priceRange[0]));
    }
    if (filters.priceRange[1] < maxPrice) {
        params.set('maxPrice', String(filters.priceRange[1]));
    }

    const query = params.toString();
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ''
        }${window.location.hash}`;

    if (historyMode === 'replace') {
        window.history.replaceState(null, '', nextUrl);
    } else {
        window.history.pushState(null, '', nextUrl);
    }
};
