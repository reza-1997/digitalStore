 import { Product, ProductCardDict } from "@/src/types";
import { DiscountedProduct } from "../../home/TopDiscountedProducts";

import { Box, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import CustomNumeralNumericFormat from "@/src/utils/CustomNumeralNumericFormat";
import ProductImage from "./ProductImage";
import { useState } from "react";
import { ProductCardHorizontalSkeleton } from "./ProductCardHorizontalSkeleton";
import { getProductCardActions } from "@/src/utils/productCardActions";
import { useProductDiscount } from './hooks/useProductDiscount';
import { ProductDiscountBadge } from './ProductDiscountBadge';
import { ProductNewArrivalBadge } from './ProductNewArrivalBadge';
import { ProductRating } from './ProductRating';
import { ProductActionButtons } from './ProductActionButtons';


interface ProductCardHorizontalProps {
    product: DiscountedProduct;
    lang: 'fa' | 'en';
    dict: ProductCardDict;
    onToggleWishlist?: (product: Product) => void;
    onCompare?: (product: Product) => void;
    onQuickView?: (product: Product) => void;
    onAddToCart?: (product: Product) => void;
    isLoading: boolean;
}
export const ProductCardHorizontal = ({
    product,
    lang,
    dict,
    onToggleWishlist,
    onCompare,
    onQuickView,
    onAddToCart,
    isLoading
}: ProductCardHorizontalProps) => {
    const theme = useTheme();
    const [isImageHovered, setIsImageHovered] = useState(false);

    if (isLoading) {
        return <ProductCardHorizontalSkeleton />;
    }

    const isRtl = lang === 'fa';

    const brandName =
        product.brand?.[lang] || product.brand?.en || '';

    const productTitle =
        product.title?.[lang] || product.title?.en || '';

    const primaryImage = product.images?.[0];
    const secondaryImage = product.images?.[1];

    const hasSecondaryImage =
        Boolean(secondaryImage) &&
        secondaryImage !== primaryImage;

    const { hasDiscount, finalPrice, discountPercent } = useProductDiscount(
        product.price,
        product.discountPrice,
        product._discountPercent,
    );

    const productHref = `/${lang}/product/${product.slug}`;

    const brandHref =
        `/${lang}/category/${product.categorySlug}/` +
        `${product.subcategorySlug}?brand=${encodeURIComponent(brandName)}`;

    const actions = getProductCardActions(
        dict,
        onToggleWishlist,
        onCompare,
        onQuickView,
        onAddToCart,
    );

    return (
        <Box
            component="article"
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                width: '100%',
                height: { xs: 180, sm: 190, lg: 195 },
                minWidth: 0,
                bgcolor: 'background.paper',
                borderRadius: 1,
                overflow: 'hidden',
                direction: isRtl ? 'rtl' : 'ltr',
                transition:
                    'box-shadow 0.3s ease, border-color 0.3s ease',

                '&:hover': {
                    borderColor: 'divider',
                    boxShadow:
                        theme.palette.mode === 'dark'
                            ? '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.12)'
                            : '0 8px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.04)',
                },

                '@media (hover: hover) and (pointer: fine)': {
                    '&:hover .action-buttons': {
                        opacity: 1,
                        visibility: 'visible',
                        transform: 'translateX(0)',
                    },

                    '&:hover .new-arrival-badge': {
                        opacity: 1,
                        visibility: 'visible',
                        transform: 'translateY(0)',
                    },
                },
            }}
        >
            {/* Product image fills the left panel */}
            <Box
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
                component={Link}
                href={productHref}
                aria-label={productTitle}
                sx={{
                    position: 'relative',
                    display: 'block',
                    flex: '0 0 42%',
                    width: '42%',
                    minWidth: 0,
                    height: '100%',
                    alignSelf: 'stretch',
                    overflow: 'hidden',
                    bgcolor: 'background.paper',
                    textDecoration: 'none',
                }}
            >
                {primaryImage && (
                    <ProductImage
                        src={primaryImage}
                        alt={productTitle}
                        className="primary-image"
                        sizes="(max-width: 600px) 42vw, 200px"
                        style={{
                            opacity: isImageHovered && hasSecondaryImage ? 0 : 1,
                            zIndex: 1,
                            transition: 'opacity 0.6s ease',
                        }}
                        fallbackLabel={isRtl ? 'تصویر موجود نیست' : 'Image unavailable'}
                    />
                )}

                {hasSecondaryImage && (
                    <ProductImage
                        src={secondaryImage}
                        alt=""
                        aria-hidden
                        className="secondary-image"
                        sizes="(max-width: 600px) 42vw, 200px"
                        style={{
                            opacity: isImageHovered ? 1 : 0,
                            zIndex: 2,
                            transition: 'opacity 0.6s ease',
                            pointerEvents: 'none',
                        }}
                        fallbackLabel={isRtl ? 'تصویر موجود نیست' : 'Image unavailable'}
                    />
                )}
            </Box>

            {/* Product information */}
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flex: '1 1 58%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    minWidth: 0,
                    height: '100%',
                    pt: { xs: 1.25, sm: 1.75 },
                    pr: isRtl ? { xs: 1.25, sm: 1.75 } : { xs: 2, sm: 5 },
                    pl: isRtl ? { xs: 2, sm: 5 } : { xs: 1.25, sm: 1.75 },
                    gap: 0.65,
                    textAlign: isRtl ? 'right' : 'left',
                    overflow: 'hidden',
                }}
            >
                {/* Brand */}
                <Typography
                    component={Link}
                    href={brandHref}
                    variant="body2"
                    noWrap
                    sx={{
                        display: 'block',
                        width: 'fit-content',
                        maxWidth: '100%',
                        fontWeight: 500,
                        fontSize: { xs: '0.7rem', sm: '0.8rem' },
                        color: 'text.secondary',
                        textDecoration: 'none',

                        '&:hover': {
                            color: 'secondary.dark',
                            textDecoration: 'underline',
                        },
                    }}
                >
                    {brandName}
                </Typography>

                {/* Product title */}
                <Typography
                    component={Link}
                    href={productHref}
                    variant="subtitle1"
                    sx={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                        overflow: 'hidden',
                        overflowWrap: 'anywhere',
                        minHeight: '2.7em',
                        maxHeight: '4.05em',
                        width: {
                            xs: 'calc(100% - 34px)',
                            sm: '100%',
                        },
                        fontWeight: 600,
                        fontSize: {
                            xs: '0.78rem',
                            sm: '0.88rem',
                            md: '0.9rem',
                        },
                        lineHeight: 1.35,
                        color: 'text.primary',
                        textDecoration: 'none',
                        textAlign: isRtl ? 'right' : 'left',
                        alignSelf: isRtl ? 'flex-end' : 'flex-start',

                        '&:hover': {
                            color: 'secondary.main',
                        },
                    }}
                >
                    {productTitle}
                </Typography>

                {/* Rating and review count */}
                <ProductRating
                    rating={product.rating}
                    reviewsCount={product.reviewsCount}
                    isRtl={isRtl}
                    showRatingValue={false}
                    size="small"
                />

                {/* Pricing */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'baseline',
                        // flexWrap: 'wrap',
                        gap: 0.75,
                        mt: 1.5,
                        direction: isRtl ? 'rtl' : 'ltr',
                        minWidth: 0,
                    }}
                >
                    <Typography
                        component="span"
                        variant="h6"
                        sx={{
                            fontWeight: 800,
                            color: hasDiscount ? 'secondary.main' : 'text.primary',
                            fontSize: {
                                xs: '0.9rem',
                                sm: '1.05rem',
                            },
                            lineHeight: 1.3,
                            whiteSpace: 'nowrap',
                            direction: 'ltr',
                        }}
                    >
                        <CustomNumeralNumericFormat
                            prefix="$"
                            value={finalPrice}
                        />
                    </Typography>

                    {hasDiscount && (
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                textDecoration: 'line-through',
                                fontSize: {
                                    xs: '0.68rem',
                                    sm: '0.78rem',
                                },
                                whiteSpace: 'nowrap',
                                direction: 'ltr',
                            }}
                        >
                            <CustomNumeralNumericFormat
                                prefix="$"
                                value={product.price}
                            />
                        </Typography>
                    )}
                </Box>
            </Box>

            {/* Discount and new-arrival badges */}
            {(hasDiscount || product.isNewArrival) && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 8,
                        left: isRtl ? 'auto' : 8,
                        right: isRtl ? 8 : 'auto',
                        zIndex: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 0.5,
                        pointerEvents: 'none',
                    }}
                >
                    {hasDiscount && (
                        <ProductDiscountBadge
                            discountPercent={discountPercent}
                            size="small"
                        />
                    )}

                    {product.isNewArrival && (
                        <ProductNewArrivalBadge
                            label={dict.newArrival}
                            size="small"
                        />
                    )}
                </Box>
            )}
            {/* Product actions */}
            <ProductActionButtons
                actions={actions}
                product={product}
                isRtl={isRtl}
                buttonSize="small"
                placement="left"
            />
        </Box>
    );
};