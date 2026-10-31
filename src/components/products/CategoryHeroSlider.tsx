'use client';

import { Box, Typography, useTheme, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { Category } from '@/src/types';

interface CategoryHeroSliderProps {
    lang: 'fa' | 'en';
    categories: Category[];
}

export const CategoryHeroSlider = ({ lang, categories }: CategoryHeroSliderProps) => {
    const isRtl = lang === 'fa';
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: '100vw',
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)',
            }}
        >
            <Swiper
                key={lang}
                dir={isRtl ? 'rtl' : 'ltr'}
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={categories.length > 1}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                style={{
                    width: '100%',
                    height: '250px',
                }}
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.id}>
                        <Link
                            href={`/${lang}/products?category=${category.slug}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '250px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                }}
                            >
                                {/* Background Image */}
                                <Box
                                    component="img"
                                    src={category.image && category.image[0] || ''}
                                    alt={category.name[lang]}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />

                                {/* Gradient Overlay - More Intense */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 35%, rgba(0,0,0,0.6) 60%)`,
                                        opacity: 0.9,
                                    }}
                                />

                                {/* Category Name */}
                                <Container
                                    maxWidth="xl"
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: 2,
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: 'common.white',
                                            fontWeight: 800,
                                            textAlign: 'center',
                                            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
                                            fontSize: { xs: '1.25rem', md: '1.5rem', lg: '1.75rem' },
                                        }}
                                    >
                                        {category.name[lang]}
                                    </Typography>
                                </Container>
                            </Box>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};
