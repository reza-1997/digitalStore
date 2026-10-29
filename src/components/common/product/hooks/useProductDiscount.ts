export interface ProductDiscountResult {
    hasDiscount: boolean;
    finalPrice: number;
    discountPercent: number;
}

export const useProductDiscount = (
    price: number,
    discountPrice: number | null | undefined,
    _discountPercent?: number,
): ProductDiscountResult => {
    const hasDiscount =
        discountPrice != null &&
        discountPrice >= 0 &&
        discountPrice < price &&
        price > 0;

    const finalPrice = hasDiscount ? discountPrice! : price;

    const discountPercent = hasDiscount
        ? _discountPercent || Math.round(((price - finalPrice) / price) * 100)
        : 0;

    return { hasDiscount, finalPrice, discountPercent };
};
