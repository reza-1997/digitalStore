'use client';

import { useId, useState } from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import {
    KeyboardArrowLeft as PrevIcon,
    KeyboardArrowRight as NextIcon,
} from '@mui/icons-material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { Product, ProductCardDict } from '@/src/types';
import { ProductCard } from './product/ProductCard';


interface ProductSliderProps {
    lang: 'fa' | 'en';
    dict: ProductCardDict;
    title: string;
    products: Product[];
    isLoading?: boolean;
}

/**
 * ProductSlider Component
 * Reusable carousel component displaying products using Swiper.
 */
export const ProductSlider = ({
    lang,
    dict,
    title,
    products = [],
    isLoading = false,
}: ProductSliderProps) => {

    const isRtl = lang === 'fa';
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    // Unique selectors so multiple sliders on a page don't share navigation buttons
    const navId = useId().replace(/[^a-zA-Z0-9_-]/g, '');
    const prevClass = `slider-prev-${navId}`;
    const nextClass = `slider-next-${navId}`;

    if (!isLoading && (!products || products.length === 0)) {
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
                '& .slider-prev, & .slider-next': {
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

                // In RTL, "previous" sits on the right and "next" on the left
                '& .slider-prev': {
                    [isRtl ? 'right' : 'left']: { xs: 8, sm: 8, md: 5, lg: 5, xl: -35 },
                },

                '& .slider-next': {
                    [isRtl ? 'left' : 'right']: { xs: 8, sm: 8, md: 5, lg: 5, xl: -35 },
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
                    {title}
                </Typography>

                <Swiper
                    key={lang}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{
                        nextEl: `.${nextClass}`,
                        prevEl: `.${prevClass}`,
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
                <Box className={`slider-prev ${prevClass}`}>
                    {isRtl ? <NextIcon /> : <PrevIcon />}
                </Box>
                <Box className={`slider-next ${nextClass}`}>
                    {isRtl ? <PrevIcon /> : <NextIcon />}
                </Box>
            </Container>
        </Box>
    );
};