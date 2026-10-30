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

import type { Testimonial, TestimonialDict } from '@/src/types';
import { TestimonialCard } from './TestimonialCard';

interface TestimonialSliderProps {
    lang: 'fa' | 'en';
    dict: TestimonialDict;
    testimonials: Testimonial[];
}

/**
 * TestimonialSlider Component
 * Carousel component displaying customer testimonials using Swiper.
 */
export const TestimonialSlider = ({
    lang,
    dict,
    testimonials = [],
}: TestimonialSliderProps) => {
    const isRtl = lang === 'fa';
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    // Unique selectors so multiple sliders on a page don't share navigation buttons
    const navId = useId().replace(/[^a-zA-Z0-9_-]/g, '');
    const prevClass = `testimonial-prev-${navId}`;
    const nextClass = `testimonial-next-${navId}`;

    if (!testimonials || testimonials.length === 0) {
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
                '& .testimonial-prev, & .testimonial-next': {
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
                '& .testimonial-prev': {
                    [isRtl ? 'right' : 'left']: { xs: 8, sm: 8, md: 5, lg: 5, xl: -35 },
                },

                '& .testimonial-next': {
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
                    {dict.title}
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
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={testimonials.length > 3}
                    breakpoints={{
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} style={{ height: 'auto', display: 'flex' }}>
                            <TestimonialCard testimonial={testimonial} lang={lang} dict={dict} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Arrows */}
                <Box className={`testimonial-prev ${prevClass}`}>
                    {isRtl ? <NextIcon /> : <PrevIcon />}
                </Box>
                <Box className={`testimonial-next ${nextClass}`}>
                    {isRtl ? <PrevIcon /> : <NextIcon />}
                </Box>
            </Container>
        </Box>
    );
};
