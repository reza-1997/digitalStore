'use client';

import Link from 'next/link';
import {
    Box,
    Typography,
    Button,
    Container,
    useTheme,
} from '@mui/material';

import ProductImage from '@/src/components/common/product/ProductImage';

import type { SmartphoneBannerDict } from '@/src/types';
import { getImageUrl } from '@/src/utils/imageUrl';

interface SmartphoneBannerProps {
    lang: 'fa' | 'en';
    dict: SmartphoneBannerDict;
}

export const SmartphoneBanner = ({
    lang,
    dict,
}: SmartphoneBannerProps) => {
    const isRtl = lang === 'fa';
    const theme = useTheme();

    const productSlug = 'samsung-galaxy-s25-ultra';
    const productTitle =
        lang === 'fa'
            ? 'سامسونگ گلکسی S25 اولترا'
            : 'Samsung Galaxy S25 Ultra';

    const productImage = getImageUrl('SamsungS25Ultra.png');

    return (
        <Container maxWidth="xl" sx={{ py: { xs: 2, md: 3 } }}>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                    minHeight: { xs: 175, sm: 165, md: 150 },
                    px: { xs: 2, sm: 3, md: 6 },
                    py: 0,
                    overflow: 'hidden',
                    isolation: 'isolate',
                    borderRadius: 2,
                    border: 1,
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    direction: isRtl ? 'rtl' : 'ltr',
                }}
            >
                {/* Product image */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        [isRtl ? 'left' : 'right']: { xs: -50, sm: '12%', md: '20%' },
                        [isRtl ? 'right' : 'left']: 'auto',
                        width: {
                            xs: '65%',
                            sm: '45%',
                            md: '38%',
                        },
                        overflow: 'hidden',
                        pointerEvents: 'none',
                        zIndex: 0,
                        opacity: { xs: 0.8, sm: 1, md: 1 },

                        '& > *': {
                            width: '100%',
                            height: '100%',
                        },

                        '& img': {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        },
                    }}
                >
                    <ProductImage
                        src={productImage}
                        alt={productTitle}
                        sizes="(max-width: 600px) 65vw, (max-width: 900px) 45vw, 38vw"
                        fallbackLabel={
                            isRtl
                                ? 'تصویر موجود نیست'
                                : 'Image unavailable'
                        }
                    />
                </Box>

                {/* Text and mobile button */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: {
                            xs: '78%',
                            sm: '60%',
                            md: '50%',
                        },
                        maxWidth: {
                            xs: '78%',
                            sm: '60%',
                            md: '50%',
                        },
                        minWidth: 0,
                        py: { xs: 2, sm: 2, md: 2 },
                    }}
                >
                    {/* Badge */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            width: '100%',
                            mb: { xs: 1, sm: 1.25 },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'inline-flex',
                                alignSelf: isRtl ? 'flex-start' : 'flex-end',
                                px: { xs: 1, sm: 1.5 },
                                py: 0.5,
                                borderRadius: 0.5,
                                bgcolor: 'secondary.main',
                                color: 'secondary.contrastText',
                                fontWeight: 700,
                                fontSize: {
                                    xs: '0.7rem',
                                    sm: '0.7rem',
                                    md: '0.8rem',
                                },
                                lineHeight: 1.5,
                                letterSpacing: 0.3,
                                textTransform: 'uppercase',
                                direction: isRtl ? 'rtl' : 'ltr',
                                textAlign: isRtl ? 'right' : 'left',
                            }}
                        >
                            {dict.badge}
                        </Box>
                    </Box>

                    {/* Product title */}
                    <Typography
                        component="h2"
                        sx={{
                            width: '100%',
                            fontWeight: 800,
                            fontSize: {
                                xs: '1.5rem',
                                sm: '1.5rem',
                                md: '1.75rem',
                            },
                            lineHeight: 1.3,
                            color: 'text.primary',
                            overflowWrap: 'break-word',
                            mb: { xs: 1.5, sm: 1.5, md: 0 },
                        }}
                    >
                        {productTitle}
                    </Typography>

                    {/* Button below text on xs only */}
                    <Button
                        component={Link}
                        href={`/${lang}/product/${productSlug}`}
                        variant="contained"
                        sx={{
                            display: { xs: 'inline-flex', sm: 'none' },
                            alignSelf: 'flex-start',
                            position: 'relative',
                            zIndex: 2,
                            bgcolor: theme.palette.secondary.light,
                            color: '#fff',
                            fontWeight: 700,
                            px: 2,
                            py: 0.7,
                            borderRadius: 8,
                            fontSize: '0.7rem',
                            whiteSpace: 'nowrap',
                            textTransform: 'uppercase',
                            boxShadow: 'none',
                            '&:hover': {
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.background.default,
                                boxShadow: 'none',
                            },
                        }}
                    >
                        {dict.shopNow}
                    </Button>
                </Box>

                {/* Button on the right for sm and above */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        display: { xs: 'none', sm: 'flex' },
                        alignItems: 'center',
                        justifyContent: isRtl ? 'flex-start' : 'flex-end',
                        flex: '0 0 auto',
                        ml: isRtl ? 2 : 0,
                        mr: isRtl ? 0 : 2,
                    }}
                >
                    <Button
                        component={Link}
                        href={`/${lang}/product/${productSlug}`}
                        variant="contained"
                        sx={{
                            bgcolor: theme.palette.secondary.light,
                            color: '#fff',
                            fontWeight: 700,
                            px: { sm: 3, md: 4 },
                            py: { sm: 1.2, md: 1.4 },
                            borderRadius: 8,
                            fontSize: { sm: '0.85rem', md: '0.9rem' },
                            whiteSpace: 'nowrap',
                            textTransform: 'uppercase',
                            boxShadow: 'none',
                            transition: 'background-color 0.2s ease',
                            '&:hover': {
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.background.default,
                                boxShadow: 'none',
                            },
                        }}
                    >
                        {dict.shopNow}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
