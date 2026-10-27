'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import {
    Box,
    List,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import { useGetProductsBySubcategorySlugQuery } from '@/src/lib/api/apiSlice';
import { BRANDS } from '@/src/data/mockData';
import type { Subcategory, Brand, NavbarDict, ProductCardDict } from '@/src/types';
import { BrandsListSkeleton } from '../Skeleton/MenuDrawerBrandsListSkeleton';
import { ProductCardHorizontal } from '@/src/components/common/ProductCardHorizontal';



interface BrandsListProps {
    categorySlug: string;
    sub: Subcategory;
    lang: 'fa' | 'en';
    expandedBrandSlug: string | null;
    onBrandAccordionChange: (brandSlug: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
    onClose: () => void;
    theme: any;
    dict: NavbarDict;
    dictProductCard: ProductCardDict
}

// Component to render filtered brands and their top products inside subcategory accordion
export function BrandsList({
    categorySlug,
    sub,
    lang,
    expandedBrandSlug,
    onBrandAccordionChange,
    onClose,
    theme,
    dict,
    dictProductCard
}: BrandsListProps) {
    // Fetch products belonging to the selected subcategory
    const { data: currentSubProducts = [], isLoading: isProductsLoading } = useGetProductsBySubcategorySlugQuery(
        sub.slug,
        { skip: !sub.slug }
    );

    // Extract unique brands that have active products in this subcategory
    const brands = useMemo(() => {
        const brandMap = new Map<string, Brand>();

        currentSubProducts.forEach((product) => {
            const matchedBrand = BRANDS.find(
                (b) =>
                    b.slug.toLowerCase() === product.brand?.en?.toLowerCase() ||
                    b.name.en.toLowerCase() === product.brand?.en?.toLowerCase() ||
                    b.name.fa === product.brand?.fa
            );

            if (matchedBrand && !brandMap.has(matchedBrand.slug)) {
                brandMap.set(matchedBrand.slug, matchedBrand);
            }
        });

        return Array.from(brandMap.values());
    }, [currentSubProducts]);

    // Show skeleton while products are loading
    if (isProductsLoading) {
        return <BrandsListSkeleton />;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {brands.map((brand) => {
                const isBrandExpanded = expandedBrandSlug === brand.slug;
                const brandName = brand.name[lang];

                // Filter products that belong to the current brand
                const brandProducts = currentSubProducts.filter(
                    (product) =>
                        product.brand?.en?.toLowerCase() === brand.name.en.toLowerCase() ||
                        product.brand?.fa === brand.name.fa ||
                        product.brand?.en?.toLowerCase() === brand.slug.toLowerCase()
                );

                const brandViewMoreLink = `/${lang}/category/${categorySlug}/${sub.slug}?brand=${brand.slug}`;

                return (
                    <Accordion
                        key={brand.slug}
                        expanded={isBrandExpanded}
                        onChange={onBrandAccordionChange(brand.slug)}
                        elevation={0}
                        disableGutters
                        sx={{
                            bgcolor: 'transparent',
                            borderRadius: 0,
                            border: 'none',
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                            overflow: 'hidden',
                            '&:before': { display: 'none' },
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                {brandName}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ px: 1, pt: 0, pb: 2 }}>
                            {/* View More Link */}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1.5 }}>
                                <Typography
                                    component={Link}
                                    href={brandViewMoreLink}
                                    onClick={onClose}
                                    variant="caption"
                                    color="primary"
                                    sx={{
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        transition: 'color 0.2s',
                                        '&:hover': {
                                            color: theme.palette.secondary.light,
                                        },
                                    }}
                                >
                                    {dict.brand.view}
                                </Typography>
                            </Box>

                            {/* Display top 2 brand products */}
                            <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                {brandProducts.slice(0, 2).map((product) => {
                                    return (
                                        <ProductCardHorizontal dict={dictProductCard} lang={lang} product={product} isLoading={isProductsLoading} />
                                    );
                                })}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                );
            })}

            {brands.length === 0 && (
                <Typography variant="caption" color="text.secondary" sx={{ p: 1, display: 'block' }}>
                    {dict.brand.error}
                </Typography>
            )}
        </Box>
    );
}