'use client';

import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { getBrandSlug } from '@/src/utils/productLinks';
import type {
    Brand,
    Category,
    ColorOption,
    Product,
    ProductsPageDict,
    Subcategory,
} from '@/src/types';

export interface AvailabilityFilter {
    inStock: boolean;
    outOfStock: boolean;
}

export interface ProductFilterState {
    availability: AvailabilityFilter;
    categories: string[];
    subcategories: string[];
    brands: string[];
    colors: string[];
    priceRange: [number, number];
}

export interface ActiveFilter {
    label: string;
    key: string;
    type:
    | 'availability'
    | 'category'
    | 'subcategory'
    | 'brand'
    | 'color'
    | 'price';
}

interface UseProductFiltersOptions {
    lang: 'fa' | 'en';
    dict: ProductsPageDict;
    categories: Category[];
    subcategories: Subcategory[];
    brands: Brand[];
    colors: ColorOption[];
    products: Product[];
}

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

const parseFilters = (
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

const updateFilterUrl = (
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

export const useProductFilters = ({
    lang,
    dict,
    categories,
    subcategories,
    brands,
    colors,
    products,
}: UseProductFiltersOptions) => {
    const searchParams = useSearchParams();
    const search = searchParams.toString();
    const maxPrice = useMemo(
        () => Math.max(0, ...products.map((product) => product.price)) + 10,
        [products]
    );
    const filters = useMemo(
        () =>
            parseFilters(
                new URLSearchParams(search),
                { categories, subcategories, brands, colors },
                maxPrice
            ),
        [search, categories, subcategories, brands, colors, maxPrice]
    );

    const filteredProducts = useMemo(() => {
        let result = products;

        if (filters.availability.inStock && !filters.availability.outOfStock) {
            result = result.filter((product) => product.inStock);
        } else if (
            !filters.availability.inStock &&
            filters.availability.outOfStock
        ) {
            result = result.filter((product) => !product.inStock);
        }

        if (filters.categories.length) {
            result = result.filter((product) => {
                if (!filters.categories.includes(product.categorySlug)) {
                    return false;
                }

                const categorySubcategories = filters.subcategories.filter(
                    (slug) =>
                        subcategories.find((item) => item.slug === slug)
                            ?.categorySlug === product.categorySlug
                );

                return (
                    !categorySubcategories.length ||
                    categorySubcategories.includes(product.subcategorySlug)
                );
            });
        }

        if (filters.brands.length) {
            result = result.filter((product) =>
                filters.brands.includes(getBrandSlug(product.brand, brands))
            );
        }

        if (filters.colors.length) {
            result = result.filter((product) =>
                product.colors.some((color) =>
                    filters.colors.includes(color.slug)
                )
            );
        }

        return result.filter((product) => {
            const price = product.discountPrice ?? product.price;
            return price >= filters.priceRange[0] && price <= filters.priceRange[1];
        });
    }, [products, filters, subcategories, brands]);

    const activeFilters = useMemo<ActiveFilter[]>(() => {
        const active: ActiveFilter[] = [];

        if (filters.availability.inStock && !filters.availability.outOfStock) {
            active.push({
                label: dict.filters.inStock,
                key: 'inStock',
                type: 'availability',
            });
        } else if (
            !filters.availability.inStock &&
            filters.availability.outOfStock
        ) {
            active.push({
                label: dict.filters.outOfStock,
                key: 'outOfStock',
                type: 'availability',
            });
        }

        filters.categories.forEach((slug) => {
            const category = categories.find((item) => item.slug === slug);
            if (category) {
                active.push({
                    label: category.name[lang],
                    key: slug,
                    type: 'category',
                });
            }
        });

        filters.subcategories.forEach((slug) => {
            const subcategory = subcategories.find((item) => item.slug === slug);
            if (subcategory) {
                active.push({
                    label: subcategory.name[lang],
                    key: slug,
                    type: 'subcategory',
                });
            }
        });

        filters.brands.forEach((slug) => {
            const brand = brands.find((item) => item.slug === slug);
            if (brand) {
                active.push({
                    label: brand.name[lang],
                    key: slug,
                    type: 'brand',
                });
            }
        });

        filters.colors.forEach((slug) => {
            const color = colors.find((item) => item.slug === slug);
            if (color) {
                active.push({
                    label: color.name[lang],
                    key: slug,
                    type: 'color',
                });
            }
        });

        if (filters.priceRange[0] > 0 || filters.priceRange[1] < maxPrice) {
            active.push({
                label: `$${filters.priceRange[0]} - $${filters.priceRange[1]}`,
                key: 'price',
                type: 'price',
            });
        }

        return active;
    }, [
        filters,
        categories,
        subcategories,
        brands,
        colors,
        maxPrice,
        dict,
        lang,
    ]);

    const updateFilters = useCallback(
        (nextFilters: ProductFilterState, historyMode: 'push' | 'replace' = 'push') => {
            updateFilterUrl(nextFilters, historyMode, maxPrice);
        },
        [maxPrice]
    );

    const toggleCategory = useCallback(
        (categorySlug: string) => {
            const isSelected = filters.categories.includes(categorySlug);
            const nextCategories = isSelected
                ? filters.categories.filter((slug) => slug !== categorySlug)
                : [...filters.categories, categorySlug];

            updateFilters({
                ...filters,
                categories: nextCategories,
                subcategories: isSelected
                    ? filters.subcategories.filter(
                        (slug) =>
                            subcategories.find((item) => item.slug === slug)
                                ?.categorySlug !== categorySlug
                    )
                    : filters.subcategories,
            });
        },
        [filters, subcategories, updateFilters]
    );

    const toggleSubcategory = useCallback(
        (subcategorySlug: string, categorySlug: string) => {
            const isSelected = filters.subcategories.includes(subcategorySlug);
            updateFilters({
                ...filters,
                categories: filters.categories.includes(categorySlug)
                    ? filters.categories
                    : [...filters.categories, categorySlug],
                subcategories: isSelected
                    ? filters.subcategories.filter(
                        (slug) => slug !== subcategorySlug
                    )
                    : [...filters.subcategories, subcategorySlug],
            });
        },
        [filters, updateFilters]
    );

    const toggleBrand = useCallback(
        (slug: string) =>
            updateFilters({
                ...filters,
                brands: filters.brands.includes(slug)
                    ? filters.brands.filter((item) => item !== slug)
                    : [...filters.brands, slug],
            }),
        [filters, updateFilters]
    );

    const toggleColor = useCallback(
        (slug: string) =>
            updateFilters({
                ...filters,
                colors: filters.colors.includes(slug)
                    ? filters.colors.filter((item) => item !== slug)
                    : [...filters.colors, slug],
            }),
        [filters, updateFilters]
    );

    const toggleAvailability = useCallback(
        (key: keyof AvailabilityFilter, checked: boolean) =>
            updateFilters({
                ...filters,
                availability: { ...filters.availability, [key]: checked },
            }),
        [filters, updateFilters]
    );

    const setPriceRange = useCallback(
        (
            priceRange: [number, number],
            historyMode: 'push' | 'replace' = 'replace'
        ) => updateFilters({ ...filters, priceRange }, historyMode),
        [filters, updateFilters]
    );

    const removeFilter = useCallback(
        (filter: ActiveFilter) => {
            switch (filter.type) {
                case 'availability':
                    updateFilters({
                        ...filters,
                        availability: { inStock: false, outOfStock: false },
                    });
                    break;
                case 'category':
                    updateFilters({
                        ...filters,
                        categories: filters.categories.filter(
                            (slug) => slug !== filter.key
                        ),
                        subcategories: filters.subcategories.filter(
                            (slug) =>
                                subcategories.find((item) => item.slug === slug)
                                    ?.categorySlug !== filter.key
                        ),
                    });
                    break;
                case 'subcategory':
                    updateFilters({
                        ...filters,
                        subcategories: filters.subcategories.filter(
                            (slug) => slug !== filter.key
                        ),
                    });
                    break;
                case 'brand':
                    updateFilters({
                        ...filters,
                        brands: filters.brands.filter(
                            (slug) => slug !== filter.key
                        ),
                    });
                    break;
                case 'color':
                    updateFilters({
                        ...filters,
                        colors: filters.colors.filter(
                            (slug) => slug !== filter.key
                        ),
                    });
                    break;
                case 'price':
                    updateFilters({
                        ...filters,
                        priceRange: [0, maxPrice],
                    });
                    break;
            }
        },
        [filters, maxPrice, subcategories, updateFilters]
    );

    const removeAllFilters = useCallback(
        () =>
            updateFilters({
                availability: { inStock: false, outOfStock: false },
                categories: [],
                subcategories: [],
                brands: [],
                colors: [],
                priceRange: [0, maxPrice],
            }),
        [maxPrice, updateFilters]
    );

    const categoryCounts = useMemo(
        () =>
            categories.map((category) => ({
                ...category,
                count: products.filter(
                    (product) => product.categorySlug === category.slug
                ).length,
                subcategories: subcategories
                    .filter(
                        (subcategory) =>
                            subcategory.categorySlug === category.slug
                    )
                    .map((subcategory) => ({
                        key: subcategory.slug,
                        label: subcategory.name[lang],
                        count: products.filter(
                            (product) =>
                                product.categorySlug === category.slug &&
                                product.subcategorySlug === subcategory.slug
                        ).length,
                        checked: filters.subcategories.includes(
                            subcategory.slug
                        ),
                        onToggle: () =>
                            toggleSubcategory(subcategory.slug, category.slug),
                    })),
            })),
        [
            categories,
            subcategories,
            products,
            lang,
            filters.subcategories,
            toggleSubcategory,
        ]
    );

    const brandCounts = useMemo(
        () =>
            brands.map((brand) => ({
                ...brand,
                count: products.filter(
                    (product) =>
                        getBrandSlug(product.brand, brands) === brand.slug
                ).length,
            })),
        [brands, products]
    );

    return {
        filters,
        maxPrice,
        filteredProducts,
        categoryCounts,
        brandCounts,
        activeFilters,
        toggleCategory,
        toggleSubcategory,
        toggleBrand,
        toggleColor,
        toggleAvailability,
        setPriceRange,
        removeFilter,
        removeAllFilters,
    };
};
