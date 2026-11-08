'use client';

import { useGetFilteredProductsQuery } from '@/src/lib/api/apiSlice';
import type { Dictionary } from '@/src/lang/dictionary';
import { ProductSlider } from '@/src/components/common/product';


interface FeaturedProductsSliderProps {
    lang: 'fa' | 'en';
    dict: Dictionary;
}

/**
 * FeaturedProductsSlider Component
 * Uses the reusable ProductSlider to display featured products.
 */
export const FeaturedProductsSlider = ({ lang, dict: dictionary }: FeaturedProductsSliderProps) => {
    const dict = dictionary.productCard;
    // Fetch featured products using RTK Query
    const { data: products = [], isLoading, isError } = useGetFilteredProductsQuery({ isFeatured: true });

    if (!isLoading && (isError || !products || products.length === 0)) {
        return null;
    }

    return (
        <ProductSlider
            lang={lang}
            dict={dictionary}
            title={dict.featuredTitle}
            products={products}
            isLoading={isLoading}
        />
    );
};