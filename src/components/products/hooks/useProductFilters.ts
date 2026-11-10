'use client';

import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { parseFilters, updateFilterUrl } from './filterParams';
import {
    clearedFilters,
    removeActiveFilterFromState,
    setAvailabilityFilter,
    toggleCategoryFilter,
    toggleSlugFilter,
    toggleSubcategoryFilter,
} from './filterState';
import { applyProductFilters } from './productFiltering';
import {
    buildActiveFilters,
    buildBrandCounts,
    buildCategoryCounts,
} from './filterMetadata';
import type {
    ActiveFilter,
    AvailabilityFilter,
    ProductFilterState,
    UseProductFiltersOptions,
} from './filterTypes';

export type {
    ActiveFilter,
    AvailabilityFilter,
    ProductFilterState,
    UseProductFiltersOptions,
} from './filterTypes';

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

    const filteredProducts = useMemo(
        () => applyProductFilters(products, filters, subcategories, brands),
        [products, filters, subcategories, brands]
    );

    const activeFilters = useMemo<ActiveFilter[]>(
        () =>
            buildActiveFilters({
                filters,
                categories,
                subcategories,
                brands,
                colors,
                maxPrice,
                dict,
                lang,
            }),
        [
            filters,
            categories,
            subcategories,
            brands,
            colors,
            maxPrice,
            dict,
            lang,
        ]
    );

    const updateFilters = useCallback(
        (
            nextFilters: ProductFilterState,
            historyMode: 'push' | 'replace' = 'push'
        ) => {
            updateFilterUrl(nextFilters, historyMode, maxPrice);
        },
        [maxPrice]
    );

    const toggleCategory = useCallback(
        (categorySlug: string) =>
            updateFilters(
                toggleCategoryFilter(filters, categorySlug, subcategories)
            ),
        [filters, subcategories, updateFilters]
    );

    const toggleSubcategory = useCallback(
        (subcategorySlug: string, categorySlug: string) =>
            updateFilters(
                toggleSubcategoryFilter(
                    filters,
                    subcategorySlug,
                    categorySlug
                )
            ),
        [filters, updateFilters]
    );

    const toggleBrand = useCallback(
        (slug: string) =>
            updateFilters(toggleSlugFilter(filters, 'brands', slug)),
        [filters, updateFilters]
    );

    const toggleColor = useCallback(
        (slug: string) =>
            updateFilters(toggleSlugFilter(filters, 'colors', slug)),
        [filters, updateFilters]
    );

    const toggleAvailability = useCallback(
        (key: keyof AvailabilityFilter, checked: boolean) =>
            updateFilters(setAvailabilityFilter(filters, key, checked)),
        [filters, updateFilters]
    );

    const setPriceRange = useCallback(
        (
            priceRange: [number, number],
            historyMode: 'push' | 'replace' = 'replace'
        ) =>
            updateFilters(
                { ...filters, priceRange },
                historyMode
            ),
        [filters, updateFilters]
    );

    const removeFilter = useCallback(
        (filter: ActiveFilter) =>
            updateFilters(
                removeActiveFilterFromState(
                    filters,
                    filter,
                    subcategories,
                    maxPrice
                )
            ),
        [filters, maxPrice, subcategories, updateFilters]
    );

    const removeAllFilters = useCallback(
        () => updateFilters(clearedFilters(maxPrice)),
        [maxPrice, updateFilters]
    );

    const categoryCounts = useMemo(
        () =>
            buildCategoryCounts({
                categories,
                subcategories,
                products,
                lang,
                selectedSubcategories: filters.subcategories,
                onToggleSubcategory: toggleSubcategory,
            }),
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
        () => buildBrandCounts({ brands, products }),
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
