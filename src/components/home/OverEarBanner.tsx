'use client';

import Link from 'next/link';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';

import { getImageUrl } from '@/src/utils/imageUrl';
import type { OverEarBannerDict } from '@/src/types';
import CustomNumeralNumericFormat from '@/src/utils/CustomNumeralNumericFormat';

interface OverEarBannerProps {
    lang: 'fa' | 'en';
    dict: OverEarBannerDict;
}

export const OverEarBanner = ({ lang, dict }: OverEarBannerProps) => {
    const isRtl = lang === 'fa';
    const theme = useTheme();

    const bannerImage = getImageUrl('overEarBannerModel.jpg');
    const bannerImageInDark = getImageUrl('overEarBannerModelInDark.png');
    const subcategoryHref = `/${lang}/category/headphones/over-ear-headphones`;

    const contentAlignment = isRtl ? 'flex-end' : 'flex-start';

    return (
        <Box
            sx={{
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                overflow: 'hidden',
                backgroundImage:
                    theme.palette.mode === 'dark'
                        ? `url(${bannerImageInDark})`
                        : `url(${bannerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: { xs: '25% 75%', sm: '25% 75%', md: "center" },
                backgroundAttachment: 'fixed',
                minHeight: { xs: '60vh', md: '70vh' },
                display: 'flex',
                alignItems: 'center',
                my: 4,
            }}
        >
            <Box
                sx={{
                    display:
                        theme.palette.mode === 'dark'
                            ? 'none'
                            : { xs: 'block', sm: 'block', md: 'none' },
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(255, 255, 255, 0.4)',
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            />
            <Container
                maxWidth="xl"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    py: 8,
                }}
            >
                <Box
                    sx={{
                        ml: { xs: 'auto', md: '50%' },
                        mr: { xs: 'auto', md: 'auto' },
                        width: '100%',
                        maxWidth: 580,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        direction: 'ltr',
                    }}
                >
                    {/* Badge */}
                    <Box
                        component="span"
                        sx={{
                            alignSelf: contentAlignment,
                            direction: isRtl ? 'rtl' : 'ltr',
                            textAlign: isRtl ? 'right' : 'left',
                            bgcolor: theme.palette.secondary.main,
                            color: '#fff',
                            fontSize: { xs: '0.75rem', sm: '0.85rem' },
                            fontWeight: 700,
                            px: 1.5,
                            py: 0.6,
                            borderRadius: 0.5,
                            letterSpacing: 0.5,
                            mb: 2,
                            textTransform: 'uppercase',
                            boxShadow: '0 2px 8px rgba(229,57,53,0.3)',
                        }}
                    >
                        {dict.badge}
                    </Box>

                    {/* Title */}
                    <Typography
                        variant="h1"
                        component="h2"
                        sx={{
                            width: '100%',
                            fontWeight: 800,
                            fontSize: { xs: '2rem', sm: '2.8rem', md: '3.5rem' },
                            color: 'text.primary',
                            lineHeight: 1.5,
                            mb: 3,
                            direction: isRtl ? 'rtl' : 'ltr',
                            textAlign: isRtl ? 'right' : 'left',
                        }}
                    >
                        {dict.title}
                    </Typography>

                    {/* Starting At Price */}
                    <Box
                        sx={{
                            alignSelf: contentAlignment,
                            display: 'flex',
                            alignItems: 'center',
                            direction: isRtl ? 'rtl' : 'ltr',
                            gap: 1.5,
                            mb: 4,
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '1.1rem', sm: '1.3rem' },
                                color: 'text.secondary',
                                fontWeight: 500,
                            }}
                        >
                            {dict.startingAt}
                        </Typography>

                        <Typography
                            variant="h5"
                            component="span"
                            sx={{
                                color: theme.palette.secondary.dark,
                                fontWeight: 800,
                                fontSize: { xs: '1.5rem', sm: '1.85rem' },
                            }}
                        >
                            <CustomNumeralNumericFormat prefix="$" value={151.99} />
                        </Typography>
                    </Box>

                    {/* Shop Now Button */}
                    <Button
                        component={Link}
                        href={subcategoryHref}
                        variant="contained"
                        size="large"
                        sx={{
                            alignSelf: contentAlignment,
                            direction: isRtl ? 'rtl' : 'ltr',
                            bgcolor: theme.palette.secondary.light,
                            color: '#ffff',
                            fontWeight: 700,
                            px: 4.5,
                            py: 1.6,
                            borderRadius: 8,
                            fontSize: '1rem',
                            textTransform: 'none',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.background.default
                            },
                        }}
                    >
                        {dict.shopNow}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};
