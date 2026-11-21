'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
    Box,
    Button,
    Chip,
    Divider,
    IconButton,
    Link as MuiLink,
    Stack,
    Tooltip,
    Typography,
    useTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import CheckIcon from '@mui/icons-material/Check';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import type { Dictionary } from '@/src/lang/dictionary';
import type { Product, ProductColor } from '@/src/types';
import { ProductRating } from '@/src/components/common/product/ProductRating';
import { useProductDiscount } from '@/src/components/common/product/hooks/useProductDiscount';
import CustomNumeralNumericFormat from '@/src/utils/CustomNumeralNumericFormat';
import {
    getBrandSlug,
    getProductListingHref,
} from '@/src/utils/productLinks';

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
    const theme = useTheme();
    const { hasDiscount, finalPrice } = useProductDiscount(
        product.price,
        product.discountPrice
    );

    const stock = selectedColor?.stock ?? product.stock;
    const isAvailable = product.inStock && stock > 0;
    const maxQuantity = Math.max(1, Math.min(stock, 99));
    const brandHref = getProductListingHref(lang, {
        brand: getBrandSlug(product.brand),
    });

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
        { label: 'Facebook', icon: FacebookIcon, onClick: () => { } },
        { label: 'Instagram', icon: InstagramIcon, onClick: () => { } },
        { label: 'X', icon: XIcon, onClick: () => { } },
        { label: 'WhatsApp', icon: WhatsAppIcon, onClick: () => { } },
        { label: 'Pinterest', icon: PinterestIcon, onClick: () => { } },
    ];

    return (
        <Stack spacing={{ xs: 2.5, md: 3 }} sx={{ minWidth: 0 }}>
            {/* Brand + Title */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 0.5, sm: 0.75 },
                }}
            >
                <MuiLink
                    component={Link}
                    href={brandHref}
                    underline="none"
                    sx={{
                        color: 'secondary.main',
                        fontSize: isRtl ? '0.95rem' : '0.80rem',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        lineHeight: 1.4,
                        width: 'fit-content',
                        transition: 'color 200ms ease',
                        '&:hover': { color: 'primary.main' },
                        '&:focus-visible': {
                            outline: '2px solid',
                            outlineColor: 'primary.main',
                            outlineOffset: 2,
                            borderRadius: 0.5,
                        },
                    }}
                >
                    {product.brand[lang]}
                </MuiLink>

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
            </Box>

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
                        sx={{ fontWeight: 700, mb: 0.75, color: 'text.primary' }}
                    >
                        {t.description}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ lineHeight: 1.8, color: 'text.secondary' }}
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
                        sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}
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
                    <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary' }}
                    >
                        ({t.onlyLeftInStock.replace('{count}', String(stock))})
                    </Typography>
                )}
            </Box>

            <Divider />

            {/* Quantity + purchase */}
            <Box>
                <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}
                >
                    {t.quantity}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 0.75, sm: 1 },
                        flexWrap: 'wrap',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: { xs: 0.75, sm: 1 },
                            flex: '1 1 204px',
                            minWidth: 204,
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
                                flexShrink: 0,
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
                            disabled={!isAvailable}
                            onClick={handleAddToCart}
                            startIcon={
                                addedToCart ? (
                                    <CheckIcon />
                                ) : undefined
                            }
                            sx={{
                                flex: '1 1 88px',
                                minWidth: 88,
                                height: { xs: 44, sm: 48 },
                                borderRadius: 999,
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap',
                                px: { xs: 0.75, sm: 2 },
                                fontSize: { xs: '0.7rem', sm: '0.875rem' },
                                '--button-hover-fill': theme.palette.secondary.dark,
                                ":hover": {
                                    color: '#ffff',
                                    fontWeight: '900'
                                }
                            }}
                        >
                            {addedToCart ? t.addedToCart : t.addToCart}
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: 0.75,
                            flex: '0 0 auto',
                            justifyContent: { xs: 'flex-end', sm: 'flex-start' },
                            ms: 'auto',
                        }}
                    >
                        <Tooltip
                            title={dict.productCard.wishlist}
                            placement='top-start'
                        >
                            <IconButton
                                aria-label={dict.productCard.wishlist}
                                onClick={() => setInWishlist((v) => !v)}
                                sx={{
                                    width: { xs: 44, sm: 48 },
                                    height: { xs: 44, sm: 48 },
                                    flexShrink: 0,
                                    borderRadius: '50%',
                                    border: 1,
                                    borderColor: 'divider',
                                    color: 'text.primary',
                                    transition:
                                        'border-color 200ms ease, color 200ms ease',
                                    '&:hover': {
                                        borderColor: 'secondary.main',
                                        color: 'secondary.main',
                                    },
                                }}
                            >
                                {inWishlist ? (
                                    <FavoriteIcon
                                        color="error"
                                        sx={{ fontSize: 22 }}
                                    />
                                ) : (
                                    <FavoriteBorderIcon sx={{ fontSize: 22 }} />
                                )}
                            </IconButton>
                        </Tooltip>
                        <Tooltip
                            title={dict.productCard.compare}
                            placement='top-start'
                        >
                            <IconButton
                                aria-label={dict.productCard.compare}
                                onClick={() => setInCompare((v) => !v)}
                                sx={{
                                    width: { xs: 44, sm: 48 },
                                    height: { xs: 44, sm: 48 },
                                    flexShrink: 0,
                                    borderRadius: '50%',
                                    border: 1,
                                    borderColor: 'divider',
                                    color: 'text.primary',
                                    transition:
                                        'border-color 200ms ease, color 200ms ease',
                                    '&:hover': {
                                        borderColor: 'secondary.main',
                                        color: 'secondary.main',
                                    },
                                }}
                            >
                                <CompareArrowsIcon
                                    sx={{
                                        fontSize: 22,
                                        color: inCompare
                                            ? 'primary.main'
                                            : 'inherit',
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>

                <Button
                    variant="contained"
                    disabled={!isAvailable}
                    onClick={handleAddToCart}
                    sx={{
                        width: '100%',
                        mt: 1.5,
                        height: { xs: 44, sm: 48 },
                        borderRadius: 999,
                        textTransform: 'uppercase',
                        '--button-hover-fill': theme.palette.secondary.dark,
                        bgcolor: 'text.secondary',
                        color: 'background.default',
                        ":hover": {
                            color: '#ffff',
                            fontWeight: '900'
                        }
                    }}
                >
                    {t.buyNow}
                </Button>
            </Box>

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
                    sx={{ fontWeight: 600, me: 1, color: 'text.secondary' }}
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

            {/* Benefits */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {benefits.map(({ icon: Icon, title, desc }, index) => (
                    <Box
                        key={title}
                        sx={{
                            display: 'flex',
                            gap: 1.5,
                            alignItems: 'flex-start',
                            py: index === 0 ? 0 : 1.5,
                        }}
                    >
                        <Icon
                            sx={{
                                color: 'secondary.main',
                                fontSize: 26,
                                mt: '2px',
                            }}
                        />
                        <Box sx={{ minWidth: 0 }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 700,
                                    color: 'text.primary',
                                    lineHeight: 1.4,
                                }}
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{
                                    display: 'block',
                                    color: 'text.secondary',
                                    lineHeight: 1.6,
                                    mt: 0.25,
                                }}
                            >
                                {desc}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Stack>
    );
};
