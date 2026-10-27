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
        const { price, discountPrice } = product;

        // Same validation as ProductCard: ignore null, negative, or non-reducing discounts
        const hasDiscount =
            discountPrice != null &&
            discountPrice >= 0 &&
            discountPrice < price &&
            price > 0;

        const effectivePrice = hasDiscount ? discountPrice : price;
        if (effectivePrice < lowestPrice) {
            lowestPrice = effectivePrice;
        }

        if (hasDiscount) {
            const discountPercentage = Math.round(((price - discountPrice) / price) * 100);
            if (discountPercentage > highestDiscount) {
                highestDiscount = discountPercentage;
            }
        }
    });

    return {
        minPrice: lowestPrice === Infinity ? 0 : lowestPrice,
        maxDiscount: highestDiscount,
    };
};