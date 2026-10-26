import { Product } from '@/src/types';

export interface ProductCalculationsResult {
    minPrice: number;
    maxDiscount: number;
}

/**
 * Calculates the lowest price and the maximum discount percentage from a product list.
 */
export const getProductPricingSummary = (products: Product[]): ProductCalculationsResult => {
    if (!products || products.length === 0) {
        return { minPrice: 0, maxDiscount: 0 };
    }

    let lowestPrice = Infinity;
    let highestDiscount = 0;

    products.forEach((product: Product) => {
        const price = product.price;
        const discountPrice = product.discountPrice;

        // Determine effective price
        const effectivePrice = discountPrice !== undefined ? discountPrice : price;
        if (effectivePrice < lowestPrice) {
            lowestPrice = effectivePrice;
        }

        // Calculate discount percentage if valid discount exists
        if (discountPrice !== undefined && price > 0 && price > discountPrice) {
            const discountPercentage = Math.round(((price - discountPrice) / price) * 100);
            if (discountPercentage > highestDiscount) {
                highestDiscount = discountPercentage;
            }
        }
    });

    return {
        minPrice: lowestPrice === Infinity ? 0 : lowestPrice,
        maxDiscount: highestDiscount > 0 ? highestDiscount : 0,
    };
};