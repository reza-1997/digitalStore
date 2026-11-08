'use client';

import { useGetFilteredProductsQuery } from '@/src/lib/api/apiSlice';
import type { Dictionary } from '@/src/lang/dictionary';
import { ProductSlider } from '@/src/components/common/product';

interface NewArrivalsSliderProps {
    lang: 'fa' | 'en';
    dict: Dictionary;
}

/**
 * NewArrivalsSlider Component
 * Displays newly arrived products using the reusable ProductSlider.
 */
export const NewArrivalsSlider = ({ lang, dict: dictionary }: NewArrivalsSliderProps) => {
    const dict = dictionary.productCard;
    // Fetch products filtered by isNewArrival using RTK Query
    const { data: products = [], isLoading, isError } = useGetFilteredProductsQuery({ isNewArrival: true });

    if (!isLoading && (isError || !products || products.length === 0)) {
        return null;
    }

    return (
        <ProductSlider
            lang={lang}
            dict={dictionary}
            title={dict.newArrivalsTitle}
            products={products}
            isLoading={isLoading}
        />
    );
};