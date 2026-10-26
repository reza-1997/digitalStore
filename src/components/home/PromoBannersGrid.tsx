'use client';

import Link from 'next/link';
import { Box, Typography, Button, Container, useTheme, Skeleton } from '@mui/material';

import { getImageUrl } from '@/src/utils/imageUrl';
import type { PromoBannerDict } from '@/src/types';
import CustomNumeralNumericFormat from '@/src/utils/CustomNumeralNumericFormat';
import { useGetProductsBySubcategorySlugQuery } from '@/src/lib/api/apiSlice';
import { getProductPricingSummary } from '@/src/utils/productCalculations';

interface PromoBannersGridProps {
    lang: 'fa' | 'en';
    dict: PromoBannerDict;
}

export const PromoBannersGrid = ({ lang, dict }: PromoBannersGridProps) => {
    const isRtl = lang === 'fa';
    const theme = useTheme();

    // Fetch products for fitness-bands
    const { data: fitnessProducts = [], isLoading: isLoadingFitness } = useGetProductsBySubcategorySlugQuery('fitness-bands')

    // Fetch products for gaming-mice
    const { data: gamingProducts = [], isLoading: isLoadingGaming } = useGetProductsBySubcategorySlugQuery('gaming-mice')

    // Calculate metrics using the shared utility function
    const fitnessMetrics = getProductPricingSummary(fitnessProducts);
    const gamingMetrics = getProductPricingSummary(gamingProducts);

    const fitnessHref = `/${lang}/category/watches/fitness-bands`;
    const gamingHref = `/${lang}/category/pc/gaming-mice`;

    // Hardcoded images without background
    const fitnessImage = getImageUrl('fitnessBandPromo.png');
    const gamingImage = getImageUrl('gamingMousePromo.png');

    return (
        <Container maxWidth="xl" sx={{ my: 6 }}>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: 3,
                }}
            >
                {/* Banner 1: Fitness Bands */}
                <Box
                    sx={{
                        position: 'relative',
                        bgcolor: theme.palette.background.paper,
                        borderRadius: 2,
                        overflow: 'hidden',
                        p: { xs: 3, sm: 5 },
                        display: 'flex',
                        alignItems: 'flex-start',
                        minHeight: 280,
                    }}
                >
                    {/* Content Left */}
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            width: { xs: '55%', sm: '52%' },
                            maxWidth: { xs: '55%', sm: '52%' },
                            alignSelf: 'stretch',
                            direction: isRtl ? 'rtl' : 'ltr',
                            textAlign: isRtl ? 'right' : 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                            minWidth: 0,
                        }}
                    >
                        {/* Discount: fixed at the top */}
                        <Box
                            sx={{
                                minHeight: 32,
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                mb: 1.5,
                            }}
                        >
                            {fitnessMetrics.maxDiscount > 0 && (
                                <Box
                                    component="span"
                                    sx={{
                                        bgcolor: theme.palette.secondary.main,
                                        color: '#fff',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        px: 1.2,
                                        py: 0.4,
                                        borderRadius: 0.5,
                                        textTransform: 'uppercase',
                                        direction: isRtl ? 'rtl' : 'ltr',
                                        boxShadow: '0 2px 8px rgba(53, 62, 229, 0.3)',
                                    }}
                                >
                                    {isRtl
                                        ? `تخفیف ویژه تا ${fitnessMetrics.maxDiscount}٪`
                                        : `UP TO ${fitnessMetrics.maxDiscount}% OFF`}
                                </Box>
                            )}
                        </Box>

                        {/* Title */}
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{
                                fontWeight: 800,
                                color: 'text.primary',
                                fontSize: { xs: 26, sm: 30, md: 34 },
                                lineHeight: 1.5,
                                mb: 2,
                            }}
                        >
                            {dict.fitnessTitle}
                        </Typography>

                        {/* Starting price */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                direction: isRtl ? 'rtl' : 'ltr',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: 1,
                                mb: 2,
                                width: '100%',
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{ color: 'text.secondary', fontWeight: 500 }}
                            >
                                {dict.startingAt}
                            </Typography>

                            {isLoadingFitness ? (
                                <Skeleton width={60} height={25} />
                            ) : (
                                <Typography
                                    variant="h6"
                                    component="span"
                                    sx={{
                                        color: 'secondary.dark',
                                        fontWeight: 800,
                                        direction: 'ltr',
                                        unicodeBidi: 'isolate',
                                    }}
                                >
                                    <CustomNumeralNumericFormat
                                        prefix="$"
                                        value={fitnessMetrics.minPrice}
                                    />
                                </Typography>
                            )}
                        </Box>

                        {/* Button: fixed at the bottom */}
                        <Box sx={{ mt: 'auto', pt: 1 }}>
                            <Button
                                component={Link}
                                href={fitnessHref}
                                variant="text"
                                sx={{
                                    color: 'text.primary',
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    p: 0,
                                    textTransform: 'uppercase',
                                    direction: isRtl ? 'rtl' : 'ltr',
                                    alignSelf: 'flex-start',
                                    '&:hover': {
                                        bgcolor: 'transparent',
                                        color: 'secondary.main',
                                    },
                                }}
                            >
                                {dict.shopNow} {isRtl ? '←' : '→'}
                            </Button>
                        </Box>
                    </Box>

                    {/* Linked Product Image Right with Hover Zoom Effect */}
                    <Box
                        component={Link}
                        href={fitnessHref}
                        sx={{
                            position: 'absolute',
                            top: { xs: -5, sm: 10 },
                            right: isRtl ? "auto" : -50,
                            left: isRtl ? -50 : 'auto',
                            width: { xs: 300, sm: 300, md: 300 },
                            height: { xs: 300, sm: 300, md: 300 },
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            zIndex: 1,
                        }}
                    >
                        <Box
                            component="img"
                            src={fitnessImage}
                            alt="Fitness Bands"
                            sx={{
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                objectPosition: 'top center',
                                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                transformOrigin: 'top center',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        />
                    </Box>
                </Box>

                {/* Banner 2: Gaming Mice */}
                <Box
                    sx={{
                        position: 'relative',
                        bgcolor: theme.palette.background.paper,
                        borderRadius: 3,
                        overflow: 'hidden',
                        p: { xs: 3, sm: 5 },
                        display: 'flex',
                        alignItems: 'flex-start',
                        minHeight: 280,
                    }}
                >
                    {/* Content Left */}
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            width: { xs: '55%', sm: '52%' },
                            maxWidth: { xs: '55%', sm: '52%' },
                            alignSelf: 'stretch',
                            direction: isRtl ? 'rtl' : 'ltr',
                            textAlign: isRtl ? 'right' : 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                            minWidth: 0,
                        }}
                    >
                        {/* Discount: fixed at the top */}
                        <Box
                            sx={{
                                minHeight: 32,
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                mb: 1.5,
                            }}
                        >
                            {gamingMetrics.maxDiscount > 0 && (
                                <Box
                                    component="span"
                                    sx={{
                                        bgcolor: 'secondary.main',
                                        color: '#fff',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        px: 1.2,
                                        py: 0.4,
                                        borderRadius: 0.5,
                                        textTransform: 'uppercase',
                                        direction: isRtl ? 'rtl' : 'ltr',
                                        boxShadow: '0 2px 8px rgba(53, 62, 229, 0.3)',
                                    }}
                                >
                                    {isRtl
                                        ? `تخفیف ویژه تا ${gamingMetrics.maxDiscount}٪`
                                        : `UP TO ${gamingMetrics.maxDiscount}% OFF`}
                                </Box>
                            )}
                        </Box>

                        {/* Title */}
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{
                                fontWeight: 800,
                                color: 'text.primary',
                                fontSize: { xs: 26, sm: 30, md: 34 },
                                lineHeight: 1.5,
                                mb: 2,
                            }}
                        >
                            {dict.gamingTitle}
                        </Typography>

                        {/* Starting price */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                direction: isRtl ? 'rtl' : 'ltr',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: 1,
                                mb: 2,
                                width: '100%',
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{ color: 'text.secondary', fontWeight: 500 }}
                            >
                                {dict.startingAt}
                            </Typography>

                            {isLoadingGaming ? (
                                <Skeleton width={60} height={25} />
                            ) : (
                                <Typography
                                    variant="h6"
                                    component="span"
                                    sx={{
                                        color: 'secondary.dark',
                                        fontWeight: 800,
                                        direction: 'ltr',
                                        unicodeBidi: 'isolate',
                                    }}
                                >
                                    <CustomNumeralNumericFormat
                                        prefix="$"
                                        value={gamingMetrics.minPrice}
                                    />
                                </Typography>
                            )}
                        </Box>

                        {/* Button: fixed at the bottom */}
                        <Box sx={{ mt: 'auto', pt: 1 }}>
                            <Button
                                component={Link}
                                href={gamingHref}
                                variant="text"
                                sx={{
                                    color: 'text.primary',
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    p: 0,
                                    textTransform: 'uppercase',
                                    direction: isRtl ? 'rtl' : 'ltr',
                                    alignSelf: 'flex-start',
                                    '&:hover': {
                                        bgcolor: 'transparent',
                                        color: 'secondary.main',
                                    },
                                }}
                            >
                                {dict.shopNow} {isRtl ? '←' : '→'}
                            </Button>
                        </Box>
                    </Box>

                    {/* Linked Product Image Right with Hover Zoom Effect */}
                    <Box
                        component={Link}
                        href={gamingHref}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: isRtl ? 'auto' : { xs: -125, sm: -110 },
                            left: isRtl ? { xs: -125, sm: -110 } : 'auto',
                            width: 400,
                            height: 400,
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            zIndex: 1,
                        }}
                    >
                        <Box
                            component="img"
                            src={gamingImage}
                            alt="Gaming Mice"
                            sx={{
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                objectPosition: 'top center',
                                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                transformOrigin: 'top center',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};