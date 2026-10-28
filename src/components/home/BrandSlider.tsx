'use client';

import { SyntheticEvent, useState } from 'react';
import Link from 'next/link';
import { Box, Typography, Container, Skeleton, useTheme } from '@mui/material';
import {
    KeyboardArrowLeft as PrevIcon,
    KeyboardArrowRight as NextIcon,
} from '@mui/icons-material';

// Import Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { useGetAllBrandsQuery } from '@/src/lib/api/apiSlice';
import { getImageUrl } from '@/src/utils/imageUrl';

interface BrandSliderProps {
    lang: 'fa' | 'en';
}

/**
 * BrandSlider Component
 * Displays an interactive carousel of brand logos matching EcoFlow design style.
 */
export const BrandSlider = ({ lang }: BrandSliderProps) => {

    const isRtl = lang === 'fa';
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    // Fetch brands using RTK Query
    const { data: brands = [], isLoading, isError } = useGetAllBrandsQuery();

    if (isLoading) {
        return (
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} variant="rectangular" width={120} height={100} sx={{ borderRadius: 2 }} />
                    ))}
                </Box>
            </Container>
        );
    }

    if (isError || !brands || brands.length === 0) {
        return null;
    }

    return (
        <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                width: '95vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-47.5vw',
                marginRight: '-47.5vw',
                py: { xs: 3, md: 6 },
                bgcolor: 'background.default',
                overflow: 'visible',

                /* Custom Navigation Buttons */
                '& .custom-brand-prev, & .custom-brand-next': {
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 20,

                    width: { xs: 36, sm: 40, md: 45 },
                    height: { xs: 36, sm: 40, md: 45 },

                    borderRadius: '50%',
                    bgcolor: 'rgba(0, 0, 0, 0.25)',
                    backdropFilter: 'blur(4px)',
                    color: theme.palette.text.primary,

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    cursor: 'pointer',
                    transition: 'opacity 0.25s ease, background-color 0.25s ease',

                    // Always visible on touch devices
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

                '& .custom-brand-prev': {
                    left: { xs: "-4px", sm:"-8px" , md: "-15px", lg: "-22px", xl: '-30px' },
                },

                '& .custom-brand-next': {
                    right: { xs: "-4px", sm:"-8px" , md: "-15px", lg: "-22px", xl: '-30px' },
                },
            }}
        >
            <Container maxWidth="xl" sx={{ position: 'relative' }}>
                <Swiper
                    key={lang}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation={{
                        nextEl: '.custom-brand-next',
                        prevEl: '.custom-brand-prev',
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={brands.length > 5}
                    breakpoints={{
                        640: { slidesPerView: 4 },
                        768: { slidesPerView: 6 },
                        1024: { slidesPerView: 8 },
                    }}
                >
                    {brands.map((brand) => {
                        const brandName = brand.name[lang] || brand.name.en;
                        const brandLogo = getImageUrl(`${brand.slug}.svg`);
                        const brandLink = `/${lang}/category/all?brand=${brand.slug}`;

                        return (
                            <SwiperSlide key={brand.slug}>
                                <Box
                                    component={Link}
                                    href={brandLink}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        textDecoration: 'none',
                                        p: 2,
                                        borderRadius: 2,
                                        transition: 'transform 0.2s ease, background-color 0.2s ease',
                                        '&:hover': {
                                            bgcolor: 'action.hover',
                                            transform: 'translateY(-4px)',
                                            '& img': {
                                                opacity: 1,
                                            },
                                        },
                                    }}
                                >
                                    {/* Brand Logo Image */}
                                    <Box
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            mb: 1.5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            position: 'relative',
                                        }}
                                    >
                                        {brandLogo && (
                                        <Box
                                            component="img"
                                            src={brandLogo}
                                            alt={brandName}
                                            sx={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                objectFit: 'contain',
                                                opacity: 0.8,
                                                transition: 'opacity 0.2s ease',
                                            }}
                                            onError={(e: SyntheticEvent<HTMLImageElement>) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                        )}
                                    </Box>

                                    {/* Brand Name */}
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontWeight: 600,
                                            color: 'text.primary',
                                            fontSize: '0.85rem',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            maxWidth: '100%',
                                        }}
                                    >
                                        {brandName}
                                    </Typography>
                                </Box>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {/* Custom Navigation Arrows */}
                <Box className="custom-brand-prev">
                    <PrevIcon fontSize="large" />
                </Box>
                <Box className="custom-brand-next">
                    <NextIcon fontSize="large" />
                </Box>
            </Container>
        </Box>
    );
};