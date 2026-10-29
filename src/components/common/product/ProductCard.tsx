'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Box, Typography, useTheme } from '@mui/material';
import type { Product, ProductCardDict } from '@/src/types';
import CustomNumeralNumericFormat from '@/src/utils/CustomNumeralNumericFormat';
import ProductImage from './ProductImage';
import { ProductCardSkeleton } from './ProductCardSkeleton';
import { getProductCardActions } from '@/src/utils/productCardActions';
import { useProductDiscount } from './hooks/useProductDiscount';
import { ProductDiscountBadge } from './ProductDiscountBadge';
import { ProductNewArrivalBadge } from './ProductNewArrivalBadge';
import { ProductRating } from './ProductRating';
import { ProductActionButtons } from './ProductActionButtons';

interface ProductCardProps {
    product: Product;
    lang: 'fa' | 'en';
    dict: ProductCardDict;
    onToggleWishlist?: (product: Product) => void;
    onCompare?: (product: Product) => void;
    onQuickView?: (product: Product) => void;
    onAddToCart?: (product: Product) => void;
    isLoading: boolean;
}

export const ProductCard = ({
    product,
    lang,
    dict,
    onToggleWishlist,
    onCompare,
    onQuickView,
    onAddToCart,
    isLoading,
}: ProductCardProps) => {
    const theme = useTheme();
    const isRtl = lang === 'fa';

    // Keep hooks before conditional returns.
    const [isImageHovered, setIsImageHovered] = useState(false);

    if (isLoading) {
        return <ProductCardSkeleton />;
    }

    const brandName = product.brand[lang] || product.brand.en;
    const productTitle = product.title[lang] || product.title.en;

    const primaryImage = product.images?.[0];
    const secondaryImage = product.images?.[1];

    const hasPrimaryImage = Boolean(primaryImage?.trim());
    const hasSecondaryImage =
        Boolean(secondaryImage?.trim()) &&
        secondaryImage !== primaryImage;

    const { hasDiscount, finalPrice, discountPercent } = useProductDiscount(
        product.price,
        product.discountPrice,
    );

    const actions = getProductCardActions(
        dict,
        onToggleWishlist,
        onCompare,
        onQuickView,
        onAddToCart,
    );

    const productHref = `/${lang}/product/${product.slug}`;
    const brandHref =
        `/${lang}/category/${product.categorySlug}/${product.subcategorySlug}` +
        `?brand=${encodeURIComponent(brandName)}`;

    return (
        <Box
            component="article"
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                minWidth: 0,
                height: '100%',
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease',

                '&:hover': {
                    boxShadow:
                        theme.palette.mode === 'dark'
                            ? '0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.12)'
                            : '0 8px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
                },

                // Desktop hover interactions.
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
            {/* Discount and new-arrival badges */}
            {(hasDiscount || product.isNewArrival) && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 12,
                        [isRtl ? 'right' : 'left']: 12,
                        zIndex: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 0.75,
                        pointerEvents: 'none',
                    }}
                >
                    {hasDiscount && (
                        <ProductDiscountBadge discountPercent={discountPercent} />
                    )}

                    {product.isNewArrival && (
                        <ProductNewArrivalBadge label={dict.newArrival} />
                    )}
                </Box>
            )}

            {/* Product action buttons */}
            <ProductActionButtons
                actions={actions}
                product={product}
                isRtl={isRtl}
                buttonSize="medium"
            />

            {/* Product images */}
            <Box
                component={Link}
                href={productHref}
                aria-label={productTitle}
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
                onFocus={() => setIsImageHovered(true)}
                onBlur={() => setIsImageHovered(false)}
                sx={{
                    position: 'relative',
                    display: 'block',
                    width: '100%',
                    height: 250,
                    minHeight: 250,
                    maxHeight: 250,
                    flexShrink: 0,
                    bgcolor: 'background.default',
                    overflow: 'hidden',
                    textDecoration: 'none',
                }}
            >
                {hasPrimaryImage && (
                    <ProductImage
                        src={primaryImage}
                        alt={productTitle}
                        className="primary-image"
                        sizes="(max-width: 600px) 100vw, 300px"
                        fallbackLabel={
                            lang === 'fa'
                                ? 'تصویر موجود نیست'
                                : 'Image unavailable'
                        }
                        style={{
                            opacity:
                                isImageHovered && hasSecondaryImage
                                    ? 0
                                    : 1,
                            zIndex: 1,
                            transition: 'opacity 0.5s ease',
                        }}
                    />
                )}

                {hasSecondaryImage && (
                    <ProductImage
                        src={secondaryImage}
                        alt=""
                        aria-hidden
                        className="secondary-image"
                        sizes="(max-width: 600px) 100vw, 300px"
                        fallbackLabel={
                            lang === 'fa'
                                ? 'تصویر موجود نیست'
                                : 'Image unavailable'
                        }
                        style={{
                            opacity: isImageHovered ? 1 : 0,
                            zIndex: 2,
                            transition: 'opacity 0.5s ease',
                            pointerEvents: 'none',
                        }}
                    />
                )}

                {!hasPrimaryImage && (
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'action.hover',
                            color: 'text.secondary',
                            fontSize: '0.85rem',
                        }}
                    >
                        {lang === 'fa'
                            ? 'تصویر موجود نیست'
                            : 'Image unavailable'}
                    </Box>
                )}
            </Box>

            {/* Product information */}
            <Box
                sx={{
                    p: { xs: 1.5, sm: 2 },
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    gap: 1,
                    textAlign: isRtl ? 'right' : 'left',
                }}
            >
                {/* Brand */}
                <Typography
                    component={Link}
                    href={brandHref}
                    variant="body2"
                    sx={{
                        fontWeight: 500,
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                        lineHeight: 1.5,
                        textDecoration: 'none',
                        width: 'fit-content',
                        color: 'text.secondary',
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
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                        fontWeight: 700,
                        fontSize: {
                            xs: '1rem',
                            sm: '1.05rem',
                            md: '1.1rem',
                        },
                        lineHeight: 1.55,
                        minHeight: '3.1em',
                        color: 'text.primary',
                        textDecoration: 'none',
                        overflowWrap: 'anywhere',
                        '&:hover': {
                            color: theme.palette.secondary.main,
                        },
                        '&:focus-visible': {
                            outline: '2px solid',
                            outlineColor: 'primary.main',
                            outlineOffset: 2,
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
                    showRatingValue
                    size="medium"
                />

                {/* Prices */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'baseline',
                        flexWrap: 'wrap',
                        columnGap: 1,
                        rowGap: 0.5,
                        mt: 0.75,
                    }}
                >
                    <Typography
                        component="span"
                        variant="h6"
                        sx={{
                            fontWeight: 800,
                            color: hasDiscount
                                ? theme.palette.secondary.main
                                : 'text.primary',
                            fontSize: {
                                xs: '1.1rem',
                                sm: '1.2rem',
                                md: '1.3rem',
                            },
                            lineHeight: 1.4,
                            fontVariantNumeric: 'tabular-nums',
                            overflowWrap: 'anywhere',
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
                                    xs: '0.8rem',
                                    sm: '0.875rem',
                                },
                                fontVariantNumeric: 'tabular-nums',
                                overflowWrap: 'anywhere',
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
        </Box>
    );
};