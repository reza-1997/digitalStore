'use client';

import Link from 'next/link';
import { Box, Typography, Container, Button, Skeleton, useTheme } from '@mui/material';
import { ArrowForward as ArrowRightIcon, ArrowBack as ArrowLeftIcon } from '@mui/icons-material';

import { useGetAllCategoriesQuery, useGetProductsByCategorySlugQuery } from '@/src/lib/api/apiSlice';
import type { CategoryBannerProductsDict, Product, ProductCardDict } from '@/src/types';
import { useMemo } from 'react';
import { ProductCard } from '@/src/components/common/product';

// Deterministic Fisher-Yates shuffle (mulberry32 PRNG seeded from a string hash)
const seededShuffle = <T,>(items: T[], seedText: string): T[] => {
    let seed = 0;
    for (let i = 0; i < seedText.length; i++) {
        seed = (Math.imul(31, seed) + seedText.charCodeAt(i)) | 0;
    }
    const random = () => {
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
};

interface CategoryBannerProductsProps {
    lang: 'fa' | 'en';
    dict: CategoryBannerProductsDict;
    dictProductCard: ProductCardDict;
    onToggleWishlist?: (product: Product) => void;
    onCompare?: (product: Product) => void;
    onQuickView?: (product: Product) => void;
    onAddToCart?: (product: Product) => void;

}

export const CategoryBannerProducts = ({
    lang,
    dict,
    dictProductCard,
    onToggleWishlist,
    onCompare,
    onQuickView,
    onAddToCart,
}: CategoryBannerProductsProps) => {
    const isRtl = lang === 'fa';
    const theme = useTheme();

    // Fetch all categories to target category index 4 (index 3 or based on data structure, here using index 4 for 5th item)
    const { data: categories = [], isLoading: isCategoryLoading } = useGetAllCategoriesQuery();

    // Get category item (5th category index4)
    const gamingCategory = categories[4] || categories[0];
    const categorySlug = gamingCategory?.slug || 'gaming-consoles';
    const categoryName = gamingCategory?.name[lang] || gamingCategory?.name.en || 'Gaming & Consoles';
    const bannerImage = gamingCategory?.image?.[4]
    const bannerImage2 = gamingCategory?.image?.[3]


    // Fetch products belonging to this category
    const { data: products = [], isLoading: isProductsLoading } = useGetProductsByCategorySlugQuery(categorySlug);

    // Pick 4 shuffled products; the shuffle is seeded so server and client renders match
    const randomProducts = useMemo(() => {
        if (!products.length) return [];
        return seededShuffle(products, products.map((product) => product.slug).join('|')).slice(0, 4);
    }, [products]);

    if (isCategoryLoading || isProductsLoading) {
        return (
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Skeleton variant="rectangular" width="100%" height={380} sx={{ borderRadius: 2, mb: 4 }} />
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} variant="rectangular" width={240} height={350} sx={{ borderRadius: 2 }} />
                    ))}
                </Box>
            </Container>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
            {/* Promotional Banner Section */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 320, sm: 380, md: 440 },
                    borderRadius: 2,
                    overflow: 'hidden',
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    mb: 4,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: isRtl
                            ? 'linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)'
                            : 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
                    },
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        px: { xs: 4, md: 8 },
                        maxWidth: { xs: '100%', sm: 500, md: 600 },
                        color: '#fff',
                        textAlign: isRtl ? 'right' : 'left',
                    }}
                >
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: '#E0A96D',
                            fontWeight: 700,
                            letterSpacing: 1.2,
                            mb: 1,
                            textTransform: 'uppercase',
                        }}
                    >
                        {dict.tagline}
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' },
                            lineHeight: 1.2,
                            mb: 2,
                        }}
                    >
                        {categoryName}
                    </Typography>
                    <Button
                        component={Link}
                        href={`/${lang}/category/${categorySlug}`}
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: '#fff',
                            color: '#000',
                            fontWeight: 700,
                            px: 4,
                            py: 1.2,
                            borderRadius: 8,
                            textTransform: 'none',
                            '&:hover': {
                                bgcolor: 'secondary.main',
                                color: '#fff',
                            },
                        }}
                    >
                        {dict.shopNow}
                    </Button>
                </Box>
            </Box>

            {/* Products Grid & See More Card Section */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(5, 1fr)',
                    },
                    gap: 2.5,
                }}
            >
                {/* 4 Random Products */}
                {randomProducts.map((product) => (
                    <Box key={product.slug} sx={{ display: 'flex' }}>
                        <ProductCard
                            product={product}
                            lang={lang}
                            dict={dictProductCard}
                            isLoading={false}
                            onToggleWishlist={onToggleWishlist}
                            onCompare={onCompare}
                            onQuickView={onQuickView}
                            onAddToCart={onAddToCart}
                        />
                    </Box>
                ))}

                {/* See More Card */}
                <Box
                    component={Link}
                    href={`/${lang}/category/${categorySlug}`}
                    sx={{
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2,
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundImage: `url(${bannerImage2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        minHeight: 360,
                        // On sm, span across both columns to take full width
                        gridColumn: { sm: 'span 2', md: 'auto' },
                        '&:hover': {
                            boxShadow:
                                theme.palette.mode === 'dark'
                                    ? '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.12)'
                                    : '0 8px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.04)',
                            '& .see-more-icon': {
                                transform: isRtl ? 'translateX(-6px)' : 'translateX(6px)',
                            },
                        },
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: '#fff',
                            fontSize: '1.2rem',
                        }}
                    >
                        {dict.seeMore}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                        }}
                    >
                        <span>{dict.exploreMore}</span>
                        <Box
                            className="see-more-icon"
                            sx={{
                                display: 'flex',
                                transition: 'transform 0.3s ease',
                                color: '#fff',

                            }}
                        >
                            {isRtl ? <ArrowLeftIcon fontSize="small" /> : <ArrowRightIcon fontSize="small" />}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};