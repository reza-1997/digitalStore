'use client';

import Link from 'next/link';
import {
    Box,
    Typography,
    IconButton,
    Tooltip,
    Rating,
} from '@mui/material';
import {
    FavoriteBorder as WishlistIcon,
    CompareArrows as CompareIcon,
    VisibilityOutlined as QuickViewIcon,
    ShoppingBagOutlined as CartIcon,
} from '@mui/icons-material';

import type { Product, ProductCardDict } from '@/src/types';
import CustomNumeralNumericFormat from '@/src/utils/CustomNumeralNumericFormat';
import { ProductCardSkeleton } from './ProductCardSkeleton';

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

    if (isLoading) {
        return <ProductCardSkeleton />;
    }

    const isRtl = lang === 'fa';

    const brandName = product.brand[lang] || product.brand.en;
    const productTitle = product.title[lang] || product.title.en;

    const primaryImage = product.images?.[0];
    const secondaryImage = product.images?.[1] || primaryImage;
    const hasSecondaryImage = secondaryImage !== primaryImage;

    // Validate the discount before displaying discount UI.
    const hasDiscount =
        product.discountPrice != null &&
        product.discountPrice >= 0 &&
        product.discountPrice < product.price &&
        product.price > 0;

    const finalPrice = hasDiscount
        ? product.discountPrice!
        : product.price;

    // Calculate the actual discount percentage.
    const discountPercent = hasDiscount
        ? Math.round(
            ((product.price - finalPrice) / product.price) * 100,
        )
        : 0;

    const actions = [
        {
            label: dict.wishlist,
            Icon: WishlistIcon,
            onClick: onToggleWishlist,
        },
        {
            label: dict.compare,
            Icon: CompareIcon,
            onClick: onCompare,
        },
        {
            label: dict.quickView,
            Icon: QuickViewIcon,
            onClick: onQuickView,
        },
        {
            label: dict.addToCart,
            Icon: CartIcon,
            onClick: onAddToCart,
        },
    ];

    const productHref = `/${lang}/product/${product.slug}`;
    const brandHref = `/${lang}/category/${product.categorySlug}/${product.subcategorySlug}?brand=${encodeURIComponent(brandName)}`;

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
                borderColor: 'divider',
                borderRadius: 1,
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease',

                '&:hover': {
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
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

                    '&:hover .primary-image': {
                        opacity: hasSecondaryImage ? 0 : 1,
                    },

                    '&:hover .secondary-image': {
                        opacity: hasSecondaryImage ? 1 : 0,
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
                    {/* Discount badge: always visible */}
                    {hasDiscount && (
                        <Box
                            component="span"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: 30,
                                px: 1.25,
                                borderRadius: 1,
                                bgcolor: '#e53935',
                                color: '#fff',
                                fontSize: '0.8rem',
                                fontWeight: 800,
                                lineHeight: 1.4,
                                whiteSpace: 'nowrap',
                                boxShadow: '0 2px 8px rgba(229,57,53,0.2)',
                            }}
                        >
                            <CustomNumeralNumericFormat
                                value={discountPercent}
                                prefix={" - "}
                                dir={lang === "fa" ? "ltr" : "ltr"}
                                suffix={"%"}
                            />
                        </Box>
                    )}

                    {/* New badge: below the discount badge */}
                    {product.isNewArrival && (
                        <Box
                            className="new-arrival-badge"
                            component="span"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: 30,
                                px: 1.25,
                                borderRadius: 1,
                                bgcolor: 'success.main',
                                color: 'success.contrastText',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                lineHeight: 1.4,
                                whiteSpace: 'nowrap',

                                // Hidden by default on desktop.
                                opacity: 0,
                                visibility: 'hidden',
                                transform: 'translateY(-4px)',

                                transition:
                                    'opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease',

                                // Always visible on mobile and touch devices.
                                '@media (max-width: 899.95px)': {
                                    opacity: 1,
                                    visibility: 'visible',
                                    transform: 'translateY(0)',
                                },

                                '@media (hover: none), (pointer: coarse)': {
                                    opacity: 1,
                                    visibility: 'visible',
                                    transform: 'translateY(0)',
                                },
                            }}
                        >
                            {dict.newArrival}
                        </Box>
                    )}
                </Box>
            )}

            {/* Product action buttons */}
            <Box
                className="action-buttons"
                sx={{
                    position: 'absolute',
                    top: 12,
                    [isRtl ? 'left' : 'right']: 12,
                    zIndex: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,

                    // Always visible on mobile and tablet.
                    opacity: { xs: 1, sm: 1, md: 0 },
                    visibility: {
                        xs: 'visible',
                        sm: 'visible',
                        md: 'hidden',
                    },
                    transform: {
                        xs: 'translateX(0)',
                        sm: 'translateX(0)',
                        md: `translateX(${isRtl ? '-12px' : '12px'})`,
                    },
                    transition:
                        'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease',

                    '@media (hover: none), (pointer: coarse)': {
                        opacity: 1,
                        visibility: 'visible',
                        transform: 'translateX(0)',
                    },
                }}
            >
                {actions.map(({ label, Icon, onClick }) => (
                    <Tooltip
                        key={label}
                        title={label}
                        placement={isRtl ? 'left' : 'right'}
                    >
                        <IconButton
                            size="medium"
                            aria-label={label}
                            onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                onClick?.(product);
                            }}
                            sx={{
                                bgcolor: 'background.paper',
                                color: 'text.primary',
                                boxShadow:
                                    '0 3px 10px rgba(0,0,0,0.12)',
                                p: 1.2,
                                '&:hover': {
                                    bgcolor: 'primary.main',
                                    color: '#fff',
                                },
                            }}
                        >
                            <Icon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                ))}
            </Box>

            {/* Product images */}
            <Box
                component={Link}
                href={productHref}
                aria-label={productTitle}
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
                <Box
                    component="img"
                    src={primaryImage}
                    alt={productTitle}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="primary-image"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 1,
                        transition: 'opacity 0.35s ease',
                    }}
                />

                <Box
                    component="img"
                    src={secondaryImage}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="secondary-image"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0,
                        transition: 'opacity 0.35s ease',
                        pointerEvents: 'none',
                    }}
                />
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
                        color: "text.secondary",
                        '&:hover': {
                            color: 'primary.main',
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
                            color: 'primary.main',
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
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 0.75,
                        minHeight: 24,
                        direction: isRtl ? 'rtl' : 'ltr',
                    }}
                >
                    <Rating
                        name={`product-rating-${product.slug}`}
                        value={Number(product.rating) || 0}
                        precision={0.1}
                        readOnly
                        size="small"
                        aria-label={
                            lang === 'fa'
                                ? `امتیاز ${product.rating} از ۵`
                                : `Rating ${product.rating} out of 5`
                        }
                        sx={{
                            fontSize: "1.1rem",
                            color: '#f5a623',
                            '& .MuiRating-iconEmpty': {
                                color: 'action.disabled',
                            },
                        }}
                    />

                    <Typography
                        component="span"
                        sx={{
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            color: 'text.primary',
                            fontVariantNumeric: 'tabular-nums',
                            whiteSpace: 'nowrap',
                            mr: lang === "fa" ? 1.5 : 0
                        }}
                    >
                        <CustomNumeralNumericFormat value={product.rating} />
                    </Typography>

                    <Typography
                        component="span"
                        sx={{
                            fontSize: '0.8rem',
                            color: 'text.secondary',
                            fontVariantNumeric: 'tabular-nums',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <CustomNumeralNumericFormat suffix=')' prefix='(' value={product.reviewsCount} />
                    </Typography>
                </Box>

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
                    {/* Final price */}
                    <Typography
                        component="span"
                        variant="h6"
                        sx={{
                            fontWeight: 800,
                            color: hasDiscount
                                ? '#e53935'
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
                        <CustomNumeralNumericFormat prefix='$' value={finalPrice} />
                    </Typography>

                    {/* Original price */}
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
                            <CustomNumeralNumericFormat prefix='$' value={product.price} />
                        </Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
};