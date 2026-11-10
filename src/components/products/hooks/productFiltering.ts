import { getBrandSlug } from '@/src/utils/productLinks';
import type { Brand, Product, Subcategory } from '@/src/types';
import type { ProductFilterState } from './filterTypes';

export const applyProductFilters = (
    products: Product[],
    filters: ProductFilterState,
    subcategories: Subcategory[],
    brands: Brand[]
): Product[] => {
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
};
