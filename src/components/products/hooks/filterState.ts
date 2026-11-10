import type { Subcategory } from '@/src/types';
import type {
    ActiveFilter,
    AvailabilityFilter,
    ProductFilterState,
} from './filterTypes';

const withoutSubcategoriesOf = (
    subcategories: string[],
    allSubcategories: Subcategory[],
    categorySlug: string
) =>
    subcategories.filter(
        (slug) =>
            allSubcategories.find((item) => item.slug === slug)
                ?.categorySlug !== categorySlug
    );

export const toggleCategoryFilter = (
    filters: ProductFilterState,
    categorySlug: string,
    subcategories: Subcategory[]
): ProductFilterState => {
    const isSelected = filters.categories.includes(categorySlug);
    return {
        ...filters,
        categories: isSelected
            ? filters.categories.filter((slug) => slug !== categorySlug)
            : [...filters.categories, categorySlug],
        subcategories: isSelected
            ? withoutSubcategoriesOf(
                filters.subcategories,
                subcategories,
                categorySlug
            )
            : filters.subcategories,
    };
};

export const toggleSubcategoryFilter = (
    filters: ProductFilterState,
    subcategorySlug: string,
    categorySlug: string
): ProductFilterState => {
    const isSelected = filters.subcategories.includes(subcategorySlug);
    return {
        ...filters,
        categories: filters.categories.includes(categorySlug)
            ? filters.categories
            : [...filters.categories, categorySlug],
        subcategories: isSelected
            ? filters.subcategories.filter((slug) => slug !== subcategorySlug)
            : [...filters.subcategories, subcategorySlug],
    };
};

export const toggleSlugFilter = <K extends 'brands' | 'colors'>(
    filters: ProductFilterState,
    key: K,
    slug: string
): ProductFilterState => ({
    ...filters,
    [key]: filters[key].includes(slug)
        ? filters[key].filter((item) => item !== slug)
        : [...filters[key], slug],
});

export const setAvailabilityFilter = (
    filters: ProductFilterState,
    key: keyof AvailabilityFilter,
    checked: boolean
): ProductFilterState => ({
    ...filters,
    availability: { ...filters.availability, [key]: checked },
});

export const removeActiveFilterFromState = (
    filters: ProductFilterState,
    filter: ActiveFilter,
    subcategories: Subcategory[],
    maxPrice: number
): ProductFilterState => {
    switch (filter.type) {
        case 'availability':
            return {
                ...filters,
                availability: { inStock: false, outOfStock: false },
            };
        case 'category':
            return {
                ...filters,
                categories: filters.categories.filter(
                    (slug) => slug !== filter.key
                ),
                subcategories: withoutSubcategoriesOf(
                    filters.subcategories,
                    subcategories,
                    filter.key
                ),
            };
        case 'subcategory':
            return {
                ...filters,
                subcategories: filters.subcategories.filter(
                    (slug) => slug !== filter.key
                ),
            };
        case 'brand':
            return {
                ...filters,
                brands: filters.brands.filter((slug) => slug !== filter.key),
            };
        case 'color':
            return {
                ...filters,
                colors: filters.colors.filter((slug) => slug !== filter.key),
            };
        case 'price':
            return { ...filters, priceRange: [0, maxPrice] };
    }
};

export const clearedFilters = (maxPrice: number): ProductFilterState => ({
    availability: { inStock: false, outOfStock: false },
    categories: [],
    subcategories: [],
    brands: [],
    colors: [],
    priceRange: [0, maxPrice],
});
