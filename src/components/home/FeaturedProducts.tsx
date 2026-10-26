'use client';

import { useGetFilteredProductsQuery } from '@/src/lib/api/apiSlice';
import type { ProductCardDict } from '@/src/types';
import { ProductSlider } from '../common/ProductSlider';


interface FeaturedProductsSliderProps {
    lang: 'fa' | 'en';
    dict: ProductCardDict;
}

/**
 * FeaturedProductsSlider Component
 * Uses the reusable ProductSlider to display featured products.
 */
export const FeaturedProductsSlider = ({ lang, dict }: FeaturedProductsSliderProps) => {
    // Fetch featured products using RTK Query
    const { data: products = [], isLoading, isError } = useGetFilteredProductsQuery({ isFeatured: true });

    if (!isLoading && (isError || !products || products.length === 0)) {
        return null;
    }

    return (
        <ProductSlider
            lang={lang}
            dict={dict}
            title={dict.featuredTitle}
            products={products}
            isLoading={isLoading}
        />
    );
};