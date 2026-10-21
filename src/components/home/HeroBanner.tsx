'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Button, Typography, Container, useTheme, Skeleton } from '@mui/material';
import {
    KeyboardArrowLeft as PrevIcon,
    KeyboardArrowRight as NextIcon,
} from '@mui/icons-material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import type { HeroBannerDict } from '@/src/types';
import { useGetAllCategoriesQuery } from '@/src/lib/api/apiSlice';

interface HeroBannerProps {
    lang: 'fa' | 'en';
    dict: HeroBannerDict;
}

/**
 * HeroBanner Component
 * Full-width hero banner with category slides, auto-play timer, and progress line pagination.
 */
export const HeroBanner = ({ lang, dict }: HeroBannerProps) => {
    const isRtl = lang === 'fa';

    const [isHovered, setIsHovered] = useState(false);
    const [, setActiveIndex] = useState(0);

    const { data: categories = [], isLoading, isError } = useGetAllCategoriesQuery();

    if (isLoading) {
        return (
            <Box
                sx={{
                    width: '100vw',
                    height: { xs: '53vh', sm: '53vh', md: '53vh', lg: '70vh' },
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Skeleton variant="rectangular" width="100%" height="100%" />
            </Box>
        );
    }

    if (isError || !categories || categories.length === 0) {
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
                overflow: 'hidden',
                bgcolor: 'background.default',

                '& .swiper': {
                    width: '100%',
                    height: { xs: '53vh', sm: '53vh', md: '53vh', lg: '70vh' },
                    minHeight: 400,
                },

                '& .swiper-pagination': {
                    bottom: '20px !important',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1.5,
                },

                '& .swiper-pagination-bullet': {
                    width: '16px',
                    height: '5px',
                    borderRadius: '2px',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    opacity: 1,
                    overflow: 'hidden',
                    position: 'relative',
                    margin: '0 !important',
                    transition: 'all 0.4s ease-in-out',
                },

                '& .swiper-pagination-bullet-active': {
                    width: '48px',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: '0%',
                        backgroundColor: '#ffffff',
                        animation: 'progressAnimation 4s linear forwards',
                    },
                },

                '@keyframes progressAnimation': {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' },
                },
            }}
        >
            <Swiper
                key={lang}
                dir={isRtl ? 'rtl' : 'ltr'}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={categories.length > 1}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);

                    const isLightSlide = swiper.realIndex === 2;
                    window.dispatchEvent(
                        new CustomEvent('heroSlideChange', { detail: { isLightSlide } })
                    );
                }}
            >
                {categories.map((category: any) => {
                    const categoryName = category.name[lang];
                    const categorySlug = category.slug;
                    const imageUrl = category.image[1];

                    return (
                        <SwiperSlide key={category.id}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    backgroundImage: `url(${imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        inset: 0,
                                        background: isRtl
                                            ? 'linear-gradient(to left, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)'
                                            : 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                                    },
                                }}
                            >
                                <Container
                                    maxWidth="xl"
                                    sx={{
                                        position: 'relative',
                                        zIndex: 2,
                                        px: { xs: 3, md: 8 },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            maxWidth: { xs: '100%', sm: 500, md: 600 },
                                            color: '#fff',
                                            textAlign: isRtl ? 'right' : 'left',
                                        }}
                                    >
                                        {/* Subtitle / Tagline */}
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                color: '#E0A96D',
                                                fontWeight: 700,
                                                letterSpacing: isRtl ? 0 : 1,
                                                mb: 1,
                                                fontSize: { xs: '0.8rem', sm: '0.95rem' },
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            {dict.featuredCategory}
                                        </Typography>

                                        {/* Category Title */}
                                        <Typography
                                            variant="h2"
                                            component="h1"
                                            sx={{
                                                fontWeight: 800,
                                                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.2rem' },
                                                lineHeight: 1.15,
                                                mb: 1.5,
                                                letterSpacing: isRtl ? 0 : '-1px',
                                            }}
                                        >
                                            {categoryName}
                                        </Typography>

                                        {/* Category Description */}
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 400,
                                                opacity: 0.9,
                                                mb: 3,
                                                fontSize: { xs: '0.9rem', sm: '1.1rem' },
                                                lineHeight: 1.4,
                                                maxWidth: 480,
                                            }}
                                        >
                                            {`${dict.descriptionPrefix} ${categoryName} ${dict.descriptionSuffix}`}
                                        </Typography>

                                        {/* Call-to-action Button */}
                                        <Button
                                            component={Link}
                                            href={`/${lang}/category/${categorySlug}`}
                                            variant="contained"
                                            size="medium"
                                            sx={{
                                                bgcolor: '#ffffff',
                                                color: '#000000',
                                                fontWeight: 700,
                                                px: 3.5,
                                                py: 1.2,
                                                borderRadius: 8,
                                                fontSize: '0.95rem',
                                                textTransform: 'none',
                                                boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                                                '&:hover': {
                                                    bgcolor: '#000000',
                                                    color: '#ffffff',
                                                    boxShadow: '0 6px 20px rgba(0,0,0,0.35)',
                                                },
                                            }}
                                        >
                                            {dict.shopNow}
                                        </Button>
                                    </Box>
                                </Container>
                            </Box>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* Custom Navigation Prev Button */}
            <Box
                className="custom-swiper-button-prev"
                sx={{
                    position: 'absolute',
                    left: { xs: '12px', md: '28px' },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    bgcolor: 'rgba(0, 0, 0, 0.50)',
                    backdropFilter: 'blur(4px)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease-in-out',
                    opacity: isHovered ? 1 : 0,
                    visibility: isHovered ? 'visible' : 'hidden',
                    '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.55)',
                        transform: 'translateY(-50%) scale(1.06)',
                    },
                }}
            >
                {isRtl ? <NextIcon fontSize="large" /> : <PrevIcon fontSize="large" />}
            </Box>

            {/* Custom Navigation Next Button */}
            <Box
                className="custom-swiper-button-next"
                sx={{
                    position: 'absolute',
                    right: { xs: '12px', md: '28px' },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    bgcolor: 'rgba(0, 0, 0, 0.50)',
                    backdropFilter: 'blur(4px)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease-in-out',
                    opacity: isHovered ? 1 : 0,
                    visibility: isHovered ? 'visible' : 'hidden',
                    '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.55)',
                        transform: 'translateY(-50%) scale(1.06)',
                    },
                }}
            >
                {isRtl ? <PrevIcon fontSize="large" /> : <NextIcon fontSize="large" />}
            </Box>
        </Box>
    );
};