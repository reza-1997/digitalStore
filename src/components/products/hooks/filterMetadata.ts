import { getBrandSlug } from '@/src/utils/productLinks';
import type { Dictionary } from '@/src/lang/dictionary';
import type {
    Brand,
    Category,
    ColorOption,
    Product,
    Subcategory,
} from '@/src/types';
import type {
    ActiveFilter,
    ProductFilterState,
} from './filterTypes';

interface ActiveFiltersInput {
    filters: ProductFilterState;
    categories: Category[];
    subcategories: Subcategory[];
    brands: Brand[];
    colors: ColorOption[];
    maxPrice: number;
    dict: Dictionary['productsPage'];
    lang: 'fa' | 'en';
}

export const buildActiveFilters = ({
    filters,
    categories,
    subcategories,
    brands,
    colors,
    maxPrice,
    dict,
    lang,
}: ActiveFiltersInput): ActiveFilter[] => {
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
};

interface CategoryCountsInput {
    categories: Category[];
    subcategories: Subcategory[];
    products: Product[];
    lang: 'fa' | 'en';
    selectedSubcategories: string[];
    onToggleSubcategory: (subcategorySlug: string, categorySlug: string) => void;
}

export const buildCategoryCounts = ({
    categories,
    subcategories,
    products,
    lang,
    selectedSubcategories,
    onToggleSubcategory,
}: CategoryCountsInput) =>
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
                checked: selectedSubcategories.includes(subcategory.slug),
                onToggle: () =>
                    onToggleSubcategory(subcategory.slug, category.slug),
            })),
    }));

export const buildBrandCounts = ({
    brands,
    products,
}: {
    brands: Brand[];
    products: Product[];
}) =>
    brands.map((brand) => ({
        ...brand,
        count: products.filter(
            (product) =>
                getBrandSlug(product.brand, brands) === brand.slug
        ).length,
    }));
