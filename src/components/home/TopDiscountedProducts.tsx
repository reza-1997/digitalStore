'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
    Box,
    Typography,
    Container,
    Button,
    Grid,
    useTheme,
} from '@mui/material';
import {
    KeyboardArrowLeft as PrevIcon,
    KeyboardArrowRight as NextIcon,
} from '@mui/icons-material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { useGetAllProductsQuery } from '@/src/lib/api/apiSlice';
import type { Product, ProductCardDict } from '@/src/types';
import { ProductCardHorizontal } from '../common/ProductCardHorizontal';



interface TopDiscountedProductsProps {
    lang: 'fa' | 'en';
    dict: ProductCardDict;
    onToggleWishlist?: (product: Product) => void;
    onCompare?: (product: Product) => void;
    onQuickView?: (product: Product) => void;
    onAddToCart?: (product: Product) => void;
}

export type DiscountedProduct = Product & {
    _discountPercent?: number;
};

export const TopDiscountedProducts = ({
    lang,
    dict,
    onToggleWishlist,
    onCompare,
    onQuickView,
    onAddToCart,
}: TopDiscountedProductsProps) => {

    const isRtl = lang === 'fa';
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    const {
        data: allProducts = [],
        isLoading,
        isError,
    } = useGetAllProductsQuery();

    // Select the six highest discount percentages.
    const topDiscountedProducts = useMemo<DiscountedProduct[]>(() => {
        return allProducts
            .filter(
                (product) =>
                    product.discountPrice != null &&
                    product.discountPrice >= 0 &&
                    product.discountPrice < product.price &&
                    product.price > 0
            )
            .map((product) => ({
                ...product,
                _discountPercent: Math.round(
                    ((product.price - product.discountPrice!) /
                        product.price) *
                    100
                ),
            }))
            .sort(
                (a, b) =>
                    b._discountPercent - a._discountPercent
            )
            .slice(0, 6);
    }, [allProducts]);

    if (!isLoading && (isError || topDiscountedProducts.length === 0)) {
        return null;
    }

    const dealsHref = `/${lang}/deals`;

    const cardProps = {
        lang,
        dict,
        onToggleWishlist,
        onCompare,
        onQuickView,
        onAddToCart,
        isLoading
    };

    return (
        <Box
            component="section"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                py: { xs: 4, md: 6 },
                bgcolor: 'background.default',
                position: 'relative',

                '& .top-deals-prev, & .top-deals-next': {
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: 36, sm: 40 },
                    height: { xs: 36, sm: 40 },
                    borderRadius: '50%',
                    bgcolor: 'rgba(0, 0, 0, 0.25)',
                    backdropFilter: 'blur(4px)',
                    color: 'text.primary',
                    cursor: 'pointer',
                    transition:
                        'opacity 0.25s ease, background-color 0.25s ease',
                    opacity: { xs: 1, md: isHovered ? 1 : 0 },
                    visibility: {
                        xs: 'visible',
                        md: isHovered ? 'visible' : 'hidden',
                    },

                    '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.4)',
                    },

                    '&.swiper-button-disabled': {
                        opacity: 0.35,
                        pointerEvents: 'none',
                    },
                },

                '& .top-deals-prev': {
                    left: { xs: -15, sm: -24 },
                },

                '& .top-deals-next': {
                    right: { xs: -15, sm: -24 },
                },
            }}
        >
            <Container maxWidth="xl" sx={{ position: 'relative' }}>
                {/* Section header */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                        mb: 4,
                        direction: isRtl ? 'rtl' : 'ltr',
                    }}
                >
                    <Typography
                        component="h2"
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            color: 'text.primary',
                            fontSize: {
                                xs: '1.25rem',
                                sm: '1.6rem',
                                md: '2rem',
                            },
                        }}
                    >
                        {dict.topDealsTitle}
                    </Typography>

                    <Button
                        component={Link}
                        href={dealsHref}
                        variant="text"
                        sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 700,
                            fontSize: {
                                xs: '0.85rem',
                                sm: '0.95rem',
                            },
                            textTransform: 'none',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,

                            '&:hover': {
                                bgcolor: 'transparent',
                                color: theme.palette.secondary.main,
                                textDecoration: 'underline',
                            },
                        }}
                    >
                        {dict.seeAll} {isRtl ? '←' : '→'}
                    </Button>
                </Box>

                {/* Desktop grid */}
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Grid container spacing={2.5}>
                        {topDiscountedProducts.map((product) => (
                            <Grid
                                size={{ xs: 12, sm: 6, md: 4 }}
                                key={product.slug}
                            >
                                <ProductCardHorizontal
                                    product={product}
                                    {...cardProps}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Mobile and tablet slider */}
                <Box
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        position: 'relative',
                    }}
                >
                    <Swiper
                        key={lang}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.top-deals-next',
                            prevEl: '.top-deals-prev',
                        }}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 12,
                            },
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                        }}
                    >
                        {topDiscountedProducts.map((product) => (
                            <SwiperSlide
                                key={product.slug}
                                style={{
                                    height: 'auto',
                                    display: 'flex',
                                }}
                            >
                                <ProductCardHorizontal
                                    product={product}
                                    {...cardProps}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Slider navigation */}
                    <Box className="top-deals-prev">
                        <PrevIcon />
                    </Box>

                    <Box className="top-deals-next">
                        <NextIcon />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};



