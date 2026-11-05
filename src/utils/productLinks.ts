import { BRANDS, SUBCATEGORIES } from '@/src/data/mockData';
import type { Brand, LocalizedText } from '@/src/types';

interface ProductListingFilters {
    category?: string;
    subcategory?: string;
    brand?: string;
}

export const getProductListingHref = (
    lang: 'fa' | 'en',
    filters: ProductListingFilters
) => {
    const searchParams = new URLSearchParams();
    const subcategory = filters.subcategory
        ? SUBCATEGORIES.find((item) => item.slug === filters.subcategory)
        : undefined;
    const category = subcategory?.categorySlug ?? filters.category;

    if (category) {
        searchParams.set('category', category);
    }

    if (filters.subcategory) {
        searchParams.set('subcategory', filters.subcategory);
    }

    if (filters.brand) {
        searchParams.set('brand', filters.brand);
    }

    const query = searchParams.toString();

    return `/${lang}/products${query ? `?${query}` : ''}`;
};

export const getBrandSlug = (
    name: LocalizedText,
    brandCatalog: Brand[] = BRANDS
) => {
    const brand = brandCatalog.find(
        (item) =>
            item.slug.toLowerCase() === name.en.toLowerCase() ||
            item.name.en.toLowerCase() === name.en.toLowerCase() ||
            item.name.fa === name.fa
    );

    return (
        brand?.slug ??
        name.en
            .toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
    );
};
