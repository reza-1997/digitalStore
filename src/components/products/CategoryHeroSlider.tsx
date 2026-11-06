'use client';

import { Box, Container } from '@mui/material';
import Link from 'next/link';

import type { Category } from '@/src/types';
import { getProductListingHref } from '@/src/utils/productLinks';
import { Breadcrumbs } from '@/src/components/common';

interface CategoryHeroSliderProps {
    lang: 'fa' | 'en';
    categories: Category[];
    selectedCategorySlug?: string;
    breadcrumbs?: Array<{ label: string; href?: string }>;
}

export const CategoryHeroSlider = ({
    lang,
    categories,
    selectedCategorySlug,
    breadcrumbs,
}: CategoryHeroSliderProps) => {
    const isRtl = lang === 'fa';
    const selectedCategory = categories.find(
        (category) => category.slug === selectedCategorySlug
    );
    const visibleCategories = selectedCategory
        ? [selectedCategory]
        : categories;
    const visibleBreadcrumbs =
        selectedCategory && breadcrumbs
            ? [
                ...breadcrumbs.map((item, index) =>
                    index === breadcrumbs.length - 1
                        ? { ...item, href: item.href ?? `/${lang}/products` }
                        : item
                ),
                { label: selectedCategory.name[lang] },
            ]
            : breadcrumbs;

    return (
        <Box
            sx={{
                width: '100vw',
                position: 'relative',
                ...(isRtl
                    ? { right: 0, left: 'auto', transform: 'none' }
                    : { left: '50%', transform: 'translateX(-50%)' }),
                py: 0,
                marginTop: '-64px',
                zIndex: 1,
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    '& .category-hero-link': {
                        color: 'inherit',
                        lineHeight: 0,
                        overflow: 'hidden',
                        textDecoration: 'none',
                        border: 0,
                        boxShadow: 'none',
                        verticalAlign: 'top',
                        '&:hover': {
                            textDecoration: 'none',
                            border: 0,
                            boxShadow: 'none',
                        },
                    },
                    '& .category-hero-label': {
                        opacity: 0,
                        transform: 'translateY(18px)',
                        transition:
                            'opacity 450ms ease, transform 550ms cubic-bezier(0.22, 1, 0.36, 1)',
                    },
                    '& .category-hero-link:hover .category-hero-label, & .category-hero-link:focus-visible .category-hero-label':
                    {
                        opacity: 1,
                        transform: 'translateY(10px)',
                    },
                    '& .category-hero-image': {
                        transition: selectedCategory
                            ? 'none'
                            : 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
                    },
                    ...(!selectedCategory && {
                        '& .category-hero-link:hover .category-hero-image, & .category-hero-link:focus-visible .category-hero-image':
                        {
                            transform: 'scale(1.09)',
                        },
                    }),
                }}
            >
                {/* Categories Grid with Diagonal Cut - Full Width */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                    }}
                >
                    {visibleCategories.map((category, index) => (
                        <Link
                            key={category.id}
                            href={getProductListingHref(lang, {
                                category: category.slug,
                            })}
                            aria-label={category.name[lang]}
                            className="category-hero-link"
                            style={{
                                textDecoration: 'none',
                                flex: selectedCategory
                                    ? 1
                                    : index === 0 ||
                                        index === visibleCategories.length - 1
                                        ? 2
                                        : 1.5,
                                display: 'block',
                                marginLeft:
                                    !selectedCategory && index > 0 && !isRtl
                                        ? '-90px'
                                        : 0,
                                marginRight:
                                    !selectedCategory && index > 0 && isRtl
                                        ? '-90px'
                                        : 0,
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: { xs: 250, md: 300 },
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    clipPath: selectedCategory
                                        ? 'none'
                                        : isRtl
                                            ? index === 0
                                                // In RTL, the first item is rightmost: keep its outer edge straight and cut its left edge diagonally.
                                                ? 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
                                                : index === visibleCategories.length - 1
                                                    // The leftmost item's right edge meets its neighbor diagonally.
                                                    ? 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
                                                    : 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)'
                                            : index === 0

                                                ? 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
                                                : index === visibleCategories.length - 1
                                                    ? 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
                                                    : 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)',
                                }}
                            >
                                {/* Background Image */}
                                <Box
                                    component="img"
                                    className="category-hero-image"
                                    src={category.image && category.image[0] || ''}
                                    alt=""
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                    }}
                                />

                                {/* Gradient Overlay */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.9    ) 90%)',
                                    }}
                                />
                                <Box
                                    className="category-hero-label"
                                    sx={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'common.white',
                                        fontSize: { xs: '1.25rem', md: '2rem' },
                                        fontWeight: 700,
                                        lineHeight: 1.3,
                                        zIndex: 2,
                                        textAlign: 'center',
                                        pointerEvents: 'none',
                                        pt: 12,
                                    }}
                                >
                                    {category.name[lang]}
                                </Box>
                            </Box>
                        </Link>
                    ))}
                </Box>

                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        left: 0,
                        height: '38%',
                        zIndex: 1,
                        pointerEvents: 'none',
                        background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.48), rgba(0,0,0,0))',
                    }}
                />
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        left: 0,
                        height: '42%',
                        zIndex: 1,
                        pointerEvents: 'none',
                        background:
                            'linear-gradient(to top, rgba(0,0,0,0.58), rgba(0,0,0,0))',
                    }}
                />

                {visibleBreadcrumbs && (
                    <Box
                        sx={{
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            left: 0,
                            zIndex: 3,
                            py: 2,
                            background:
                                'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0))',
                        }}
                    >
                        <Container maxWidth="xl">
                            <Breadcrumbs
                                lang={lang}
                                items={visibleBreadcrumbs}
                            />
                        </Container>
                    </Box>
                )}
            </Box>
        </Box>
    );
};