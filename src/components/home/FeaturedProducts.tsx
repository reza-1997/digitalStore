'use client';

import React, { useState } from 'react';
import { Box, Typography, Container, Skeleton, useTheme } from '@mui/material';
import {
    KeyboardArrowLeft as PrevIcon,
    KeyboardArrowRight as NextIcon,
} from '@mui/icons-material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { useGetFilteredProductsQuery } from '@/src/lib/api/apiSlice';
import type { ProductCardDict } from '@/src/types';
import { ProductCard } from '../common/ProductCard';

interface FeaturedProductsSliderProps {
    lang: 'fa' | 'en';
    dict: ProductCardDict;
}

/**
 * FeaturedProductsSlider Component
 * Carousel displaying featured products using Swiper.
 */
export const FeaturedProductsSlider = ({ lang, dict }: FeaturedProductsSliderProps) => {

    const isRtl = lang === 'fa';
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    // Fetch featured products using RTK Query
    const { data: products = [], isLoading, isError } = useGetFilteredProductsQuery({ isFeatured: true });


    if (isError || !products || products.length === 0) {
        return null;
    }

    return (
        <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                py: { xs: 4, md: 6 },
                bgcolor: 'background.default',
                overflow: 'visible',

                /* Custom Navigation Arrows */
                '& .featured-prev, & .featured-next': {
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 20,

                    width: { xs: 36, sm: 40, md: 44 },
                    height: { xs: 36, sm: 40, md: 44 },

                    borderRadius: '50%',
                    bgcolor: 'rgba(0, 0, 0, 0.25)',
                    backdropFilter: 'blur(4px)',
                    color: theme.palette.text.primary,

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    cursor: 'pointer',
                    transition: 'opacity 0.25s ease, background-color 0.25s ease',

                    // Keep arrows visible on mobile
                    opacity: { xs: 1, md: isHovered ? 1 : 0 },
                    visibility: { xs: 'visible', md: isHovered ? 'visible' : 'hidden' },

                    '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.4)',
                    },

                    '&.swiper-button-disabled': {
                        opacity: 0.35,
                        pointerEvents: 'none',
                    },
                },

                '& .featured-prev': {
                    left: { xs: 8, sm: 8, md: 5, lg: 5, xl: -35 },
                },

                '& .featured-next': {
                    right: { xs: 8, sm: 8, md: 5, lg: 5, xl: -35 },
                },
            }}
        >
            <Container maxWidth="xl" sx={{ position: 'relative' }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 800,
                        color: theme.palette.text.primary,
                        mb: 4,
                        textAlign: isRtl ? 'right' : 'left',
                        fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                >
                    {dict.featuredTitle}
                </Typography>

                <Swiper
                    key={lang}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.featured-next',
                        prevEl: '.featured-prev',
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={products.length > 3}
                    breakpoints={{
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 5 },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.slug} style={{ height: 'auto', display: 'flex' }}>
                            <ProductCard product={product} lang={lang} dict={dict} isLoading={isLoading} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Arrows */}
                <Box className="featured-prev">
                    <PrevIcon />
                </Box>
                <Box className="featured-next">
                    <NextIcon />
                </Box>
            </Container>
        </Box>
    );
};