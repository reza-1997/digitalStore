import { Product, ProductCardDict } from "@/src/types";
import { DiscountedProduct } from "../home/TopDiscountedProducts";



import {
    FavoriteBorder as WishlistIcon,
    CompareArrows as CompareIcon,
    VisibilityOutlined as QuickViewIcon,
    ShoppingBagOutlined as CartIcon,
} from '@mui/icons-material';
import { Box, IconButton, Rating, Tooltip, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import CustomNumeralNumericFormat from "@/src/utils/CustomNumeralNumericFormat";
import ProductImage from "./ProductImage";
import { useState } from "react";
import { ProductCardHorizontalSkeleton } from "./ProductCardHorizontalSkeleton";


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

    if (isLoading) {
        return <ProductCardHorizontalSkeleton />;
    }

    const isRtl = lang === 'fa';
    const theme = useTheme();

    const [isImageHovered, setIsImageHovered] = useState(false);

    const brandName =
        product.brand?.[lang] || product.brand?.en || '';

    const productTitle =
        product.title?.[lang] || product.title?.en || '';

    const primaryImage = product.images?.[0];
    const secondaryImage = product.images?.[1];

    const hasSecondaryImage =
        Boolean(secondaryImage) &&
        secondaryImage !== primaryImage;

    const hasDiscount =
        product.discountPrice != null &&
        product.discountPrice >= 0 &&
        product.discountPrice < product.price &&
        product.price > 0;

    const finalPrice = hasDiscount
        ? product.discountPrice!
        : product.price;


    const discountPercent = hasDiscount
        ? product._discountPercent || Math.round(
            ((product.price - finalPrice) / product.price) * 100,
        )
        : 0;

    const productHref = `/${lang}/product/${product.slug}`;

    const brandHref =
        `/${lang}/category/${product.categorySlug}/` +
        `${product.subcategorySlug}?brand=${encodeURIComponent(brandName)}`;

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
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isRtl ? 'flex-start' : 'flex-start',
                        flexWrap: 'wrap',
                        gap: 0.4,
                        direction: isRtl ? 'rtl' : 'ltr',
                        mt: 0.25,
                        minWidth: 0,
                    }}
                >
                    <Rating
                        value={Number(product.rating) || 0}
                        precision={0.1}
                        readOnly
                        size="small"
                        sx={{
                            fontSize: { xs: '0.85rem', sm: '0.80rem', md: '1rem' },
                            color: '#f5a623',
                        }}
                    />
                    <Typography
                        component="span"
                        sx={{
                            fontSize: '0.72rem',
                            color: 'text.secondary',
                            whiteSpace: 'nowrap',
                            direction: 'ltr',
                        }}
                    >
                        <CustomNumeralNumericFormat
                            prefix="("
                            suffix=")"
                            value={product.reviewsCount}
                        />
                    </Typography>
                </Box>

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
                        <Box
                            component="span"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: 23,
                                px: 0.8,
                                borderRadius: 0.75,
                                bgcolor: '#e53935',
                                color: '#fff',
                                fontSize: '0.7rem',
                                fontWeight: 800,
                                whiteSpace: 'nowrap',
                                boxShadow:
                                    '0 2px 8px rgba(229,57,53,0.2)',
                            }}
                        >
                            <CustomNumeralNumericFormat
                                value={discountPercent}
                                prefix="  - "
                                suffix="%"
                                dir="ltr"
                            />
                        </Box>
                    )}

                    {product.isNewArrival && (
                        <Box
                            className="new-arrival-badge"
                            component="span"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: 23,
                                px: 0.8,
                                borderRadius: 0.75,
                                bgcolor: 'success.main',
                                color: 'success.contrastText',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                whiteSpace: 'nowrap',
                                opacity: 0,
                                visibility: 'hidden',
                                transform: 'translateY(-4px)',
                                transition:
                                    'opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease',

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
            {/* Product actions */}
            <Box
                className="action-buttons"
                sx={{
                    position: 'absolute',
                    top: 8,
                    right: isRtl ? 'auto' : 5,
                    left: isRtl ? 5 : 'auto',
                    zIndex: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.5,

                    opacity: { xs: 1, sm: 1, md: 0 },
                    visibility: {
                        xs: 'visible',
                        sm: 'visible',
                        md: 'hidden',
                    },
                    transform: {
                        xs: 'none',
                        sm: 'none',
                        md: `translateX(${isRtl ? '-8px' : '8px'})`,
                    },

                    transition:
                        'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease',

                    '@media (hover: hover) and (pointer: fine)': {
                        '&:hover': {
                            opacity: 1,
                            visibility: 'visible',
                            transform: 'translateX(0)',
                        },
                    },

                    '@media (hover: none), (pointer: coarse)': {
                        opacity: 1,
                        visibility: 'visible',
                        transform: 'none',
                    },
                }}
            >
                {actions.map(({ label, Icon, onClick }) => (
                    <Tooltip
                        key={label}
                        title={label}
                        placement={isRtl ? 'right' : 'left'}
                    >
                        <IconButton
                            size="small"
                            aria-label={label}
                            onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                onClick?.(product);
                            }}
                            sx={{
                                width: { xs: 30, sm: 30, md: 40 },
                                height: { xs: 30, sm: 30, md: 40 },
                                bgcolor: 'background.paper',
                                color: 'text.primary',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                                flexShrink: 0,

                                '&:hover': {
                                    bgcolor: 'text.primary',
                                    color: 'background.paper',
                                },
                            }}
                        >
                            <Icon sx={{ fontSize: { xs: 17, sm: 17, md: 21 } }} />
                        </IconButton>
                    </Tooltip>
                ))}
            </Box>
        </Box>
    );
};