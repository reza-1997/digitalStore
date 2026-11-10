'use client';

import { useMemo, useState } from 'react';
import {
    Box,
    Button,
    Chip,
    Divider,
    Grid,
    IconButton,
    Stack,
    Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import CheckIcon from '@mui/icons-material/Check';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import type { Dictionary } from '@/src/lang/dictionary';
import type { Product, ProductColor } from '@/src/types';
import { ProductRating } from '@/src/components/common/product/ProductRating';
import { useProductDiscount } from '@/src/components/common/product/hooks/useProductDiscount';
import CustomNumeralNumericFormat from '@/src/utils/CustomNumeralNumericFormat';

interface ProductInfoProps {
    product: Product;
    lang: 'fa' | 'en';
    dict: Dictionary;
    selectedColor: ProductColor | null;
    onColorSelect: (slug: string | null) => void;
}

const BENEFIT_ICONS = [
    LocalShippingIcon,
    AssignmentReturnIcon,
    VerifiedUserIcon,
    SupportAgentIcon,
];

const PRICE_FORMAT = { prefix: '$', thousandSeparator: true } as const;

export const ProductInfo = ({
    product,
    lang,
    dict,
    selectedColor,
    onColorSelect,
}: ProductInfoProps) => {
    const t = dict.productDetails;
    const isRtl = lang === 'fa';
    const { hasDiscount, finalPrice } = useProductDiscount(
        product.price,
        product.discountPrice
    );

    const stock = selectedColor?.stock ?? product.stock;
    const isAvailable = product.inStock && stock > 0;
    const maxQuantity = Math.max(1, Math.min(stock, 99));

    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const [inWishlist, setInWishlist] = useState(false);
    const [inCompare, setInCompare] = useState(false);
    const [linkCopied, setLinkCopied] = useState(false);

    const benefits = useMemo(
        () => [
            {
                icon: BENEFIT_ICONS[0],
                title: t.benefits.shipping,
                desc: t.benefits.shippingDesc,
            },
            {
                icon: BENEFIT_ICONS[1],
                title: t.benefits.returns,
                desc: t.benefits.returnsDesc,
            },
            {
                icon: BENEFIT_ICONS[2],
                title: t.benefits.payment,
                desc: t.benefits.paymentDesc,
            },
            {
                icon: BENEFIT_ICONS[3],
                title: t.benefits.support,
                desc: t.benefits.supportDesc,
            },
        ],
        [t]
    );

    const handleQuantity = (delta: number) => {
        setQuantity((prev) =>
            Math.min(Math.max(prev + delta, 1), maxQuantity)
        );
    };

    const handleAddToCart = () => {
        setAddedToCart(true);
        window.setTimeout(() => setAddedToCart(false), 1600);
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setLinkCopied(true);
            window.setTimeout(() => setLinkCopied(false), 1600);
        } catch {
            setLinkCopied(false);
        }
    };

    const shareButtons = [
        { label: t.copyLink, icon: linkCopied ? CheckIcon : ContentCopyIcon, onClick: handleCopyLink },
        { label: 'Facebook', icon: FacebookIcon, onClick: () => {} },
        { label: 'Telegram', icon: TelegramIcon, onClick: () => {} },
        { label: 'X', icon: XIcon, onClick: () => {} },
    ];

    return (
        <Stack spacing={{ xs: 2.5, md: 3 }} sx={{ minWidth: 0 }}>
            {/* Brand */}
            <Typography
                variant="overline"
                sx={{
                    color: 'secondary.main',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    lineHeight: 1.4,
                }}
            >
                {product.brand[lang]}
            </Typography>

            {/* Title */}
            <Typography
                component="h1"
                sx={{
                    fontSize: { xs: '1.4rem', sm: '1.7rem', md: '2rem' },
                    fontWeight: 700,
                    lineHeight: 1.35,
                    color: 'text.primary',
                }}
            >
                {product.title[lang]}
            </Typography>

            {/* Price + Rating */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 1.5,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.25 }}>
                    <Typography
                        component="span"
                        sx={{
                            fontSize: { xs: '1.5rem', md: '1.75rem' },
                            fontWeight: 800,
                            color: 'text.primary',
                            fontVariantNumeric: 'tabular-nums',
                        }}
                    >
                        <CustomNumeralNumericFormat
                            {...PRICE_FORMAT}
                            value={finalPrice}
                        />
                    </Typography>
                    {hasDiscount && (
                        <>
                            <Typography
                                component="span"
                                sx={{
                                    color: 'text.secondary',
                                    textDecoration: 'line-through',
                                    fontSize: '0.95rem',
                                    fontVariantNumeric: 'tabular-nums',
                                }}
                            >
                                <CustomNumeralNumericFormat
                                    {...PRICE_FORMAT}
                                    value={product.price}
                                />
                            </Typography>
                            <Chip
                                size="small"
                                label={
                                    <CustomNumeralNumericFormat
                                        {...PRICE_FORMAT}
                                        value={
                                            Math.round(
                                                ((product.price -
                                                    finalPrice) /
                                                    product.price) *
                                                    100
                                            )
                                        }
                                        suffix="%"
                                    />
                                }
                                sx={{
                                    bgcolor: 'error.main',
                                    color: 'error.contrastText',
                                    fontWeight: 700,
                                    fontSize: '0.75rem',
                                    height: 24,
                                }}
                            />
                        </>
                    )}
                </Box>

                <ProductRating
                    rating={product.rating}
                    reviewsCount={product.reviewsCount}
                    isRtl={isRtl}
                    size="medium"
                />
            </Box>

            <Divider />

            {/* Description */}
            {product.description?.[lang] && (
                <Box>
                    <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 700, mb: 0.75 }}
                    >
                        {t.description}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.8 }}
                    >
                        {product.description[lang]}
                    </Typography>
                </Box>
            )}

            {/* Color variants */}
            {product.colors.length > 0 && (
                <Box>
                    <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 700, mb: 1 }}
                    >
                        {t.color}
                        {selectedColor && (
                            <Box
                                component="span"
                                sx={{
                                    color: 'text.secondary',
                                    fontWeight: 400,
                                    ms: 1,
                                }}
                            >
                                : {selectedColor.name[lang]}
                            </Box>
                        )}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {product.colors.map((color) => {
                            const isSelected =
                                selectedColor?.slug === color.slug;
                            return (
                                <Box
                                    key={color.slug}
                                    component="button"
                                    type="button"
                                    onClick={() =>
                                        onColorSelect(
                                            isSelected ? null : color.slug
                                        )
                                    }
                                    title={color.name[lang]}
                                    aria-label={color.name[lang]}
                                    aria-pressed={isSelected}
                                    sx={{
                                        width: 34,
                                        height: 34,
                                        borderRadius: '50%',
                                        border: 2,
                                        borderColor: isSelected
                                            ? 'primary.main'
                                            : 'divider',
                                        bgcolor: color.value,
                                        cursor: 'pointer',
                                        p: 0,
                                        position: 'relative',
                                        transition:
                                            'border-color 200ms ease, transform 200ms ease',
                                        '&:hover': { transform: 'scale(1.08)' },
                                        '&:focus-visible': {
                                            outline: '2px solid',
                                            outlineColor: 'primary.main',
                                            outlineOffset: 2,
                                        },
                                        '&::after': isSelected
                                            ? {
                                                  content: '""',
                                                  position: 'absolute',
                                                  inset: -7,
                                                  borderRadius: '50%',
                                                  border: '1px solid',
                                                  borderColor: 'primary.main',
                                              }
                                            : undefined,
                                    }}
                                />
                            );
                        })}
                    </Box>
                </Box>
            )}

            {/* Stock status */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    flexWrap: 'wrap',
                }}
            >
                <Box
                    sx={{
                        width: 9,
                        height: 9,
                        borderRadius: '50%',
                        bgcolor: isAvailable ? 'success.main' : 'error.main',
                    }}
                />
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 600,
                        color: isAvailable
                            ? 'success.main'
                            : 'error.main',
                    }}
                >
                    {isAvailable ? t.inStock : t.outOfStock}
                </Typography>
                {isAvailable && stock <= 10 && (
                    <Typography variant="body2" color="text.secondary">
                        ({t.onlyLeftInStock.replace('{count}', String(stock))})
                    </Typography>
                )}
            </Box>

            <Divider />

            {/* Quantity + purchase */}
            <Box>
                <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, mb: 1 }}
                >
                    {t.quantity}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        flexWrap: 'wrap',
                    }}
                >
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            border: 1,
                            borderColor: 'divider',
                            borderRadius: 2,
                            overflow: 'hidden',
                        }}
                    >
                        <IconButton
                            size="small"
                            onClick={() => handleQuantity(-1)}
                            disabled={quantity <= 1 || !isAvailable}
                            aria-label="Decrease quantity"
                            sx={{ borderRadius: 0 }}
                        >
                            <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Typography
                            component="span"
                            sx={{
                                minWidth: 40,
                                textAlign: 'center',
                                fontWeight: 600,
                                fontVariantNumeric: 'tabular-nums',
                                userSelect: 'none',
                            }}
                        >
                            <CustomNumeralNumericFormat
                                {...PRICE_FORMAT}
                                value={quantity}
                                thousandSeparator={false}
                            />
                        </Typography>
                        <IconButton
                            size="small"
                            onClick={() => handleQuantity(1)}
                            disabled={quantity >= maxQuantity || !isAvailable}
                            aria-label="Increase quantity"
                            sx={{ borderRadius: 0 }}
                        >
                            <AddIcon fontSize="small" />
                        </IconButton>
                    </Box>

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={!isAvailable}
                        onClick={handleAddToCart}
                        startIcon={
                            addedToCart ? (
                                <CheckIcon />
                            ) : undefined
                        }
                        sx={{ flex: 1, minWidth: 160 }}
                    >
                        {addedToCart ? t.addedToCart : t.addToCart}
                    </Button>

                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        disabled={!isAvailable}
                        onClick={handleAddToCart}
                        sx={{ flex: 1, minWidth: 140 }}
                    >
                        {t.buyNow}
                    </Button>
                </Box>
            </Box>

            {/* Wishlist / Compare */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Button
                    variant="outlined"
                    color="inherit"
                    size="small"
                    onClick={() => setInWishlist((v) => !v)}
                    startIcon={
                        inWishlist ? (
                            <FavoriteIcon color="error" />
                        ) : (
                            <FavoriteBorderIcon />
                        )
                    }
                    sx={{ textTransform: 'none' }}
                >
                    {t.wishlist}
                </Button>
                <Button
                    variant="outlined"
                    color="inherit"
                    size="small"
                    onClick={() => setInCompare((v) => !v)}
                    startIcon={
                        <CompareArrowsIcon
                            sx={{
                                color: inCompare
                                    ? 'primary.main'
                                    : 'inherit',
                            }}
                        />
                    }
                    sx={{ textTransform: 'none' }}
                >
                    {t.compare}
                </Button>
            </Box>

            {/* Benefits */}
            <Grid container spacing={1.5}>
                {benefits.map(({ icon: Icon, title, desc }) => (
                    <Grid key={title} size={{ xs: 6 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1.25,
                                alignItems: 'flex-start',
                                p: 1.25,
                                borderRadius: 2,
                                border: 1,
                                borderColor: 'divider',
                                height: '100%',
                            }}
                        >
                            <Icon
                                sx={{
                                    color: 'secondary.main',
                                    fontSize: 22,
                                    mt: '2px',
                                }}
                            />
                            <Box sx={{ minWidth: 0 }}>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        display: 'block',
                                        fontWeight: 700,
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.5 }}
                                >
                                    {desc}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Share */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    flexWrap: 'wrap',
                }}
            >
                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontWeight: 600, me: 1 }}
                >
                    {t.share}
                </Typography>
                {shareButtons.map(({ label, icon: Icon, onClick }) => (
                    <IconButton
                        key={label}
                        size="small"
                        aria-label={label}
                        onClick={onClick}
                        sx={{
                            border: 1,
                            borderColor: 'divider',
                            color: 'text.secondary',
                            '&:hover': {
                                color: 'primary.main',
                                borderColor: 'primary.main',
                            },
                        }}
                    >
                        <Icon sx={{ fontSize: 18 }} />
                    </IconButton>
                ))}
            </Box>

            {/* Specifications */}
            {product.specifications.length > 0 && (
                <>
                    <Divider />
                    <Box>
                        <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 700, mb: 1 }}
                        >
                            {t.specifications}
                        </Typography>
                        <Box
                            component="dl"
                            sx={{ m: 0, display: 'grid', gap: 0.75 }}
                        >
                            {product.specifications.map((spec, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        gap: 2,
                                        py: 0.5,
                                    }}
                                >
                                    <Typography
                                        component="dt"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {spec.key[lang]}
                                    </Typography>
                                    <Typography
                                        component="dd"
                                        variant="body2"
                                        sx={{
                                            m: 0,
                                            fontWeight: 500,
                                            textAlign: 'end',
                                        }}
                                    >
                                        {spec.value[lang]}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </>
            )}
        </Stack>
    );
};
