'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import {
    Box,
    Collapse,
    List,
    ListItemButton,
    ListItemText,
    Typography,
    useTheme,
} from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon,
    ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';

import { useGetProductsBySubcategorySlugQuery } from '@/src/lib/api/apiSlice';
import type { Category, NavbarDict, Subcategory, Brand, Product } from '@/src/types';
import { BRANDS } from '@/src/data/mockData';
import { SubcategoryAccordionSkeleton } from './Skeleton/SubcategoryAccordionSkeleton';

interface SubcategoryAccordionItemProps {
    sub: Subcategory;
    category: Category | null;
    lang: 'fa' | 'en';
    isExpanded: boolean;
    onToggle: (slug: string) => void;
    onBrandHover: (image: string | null) => void;
    onBrandTitleHover: (title: string | null) => void;
    onLinkHover: (link: string | null) => void;
    onSubcategoryCaptionHover: (title: string | null) => void;
    onBrandProductsHover: (products: Product[] | null) => void;
    dict: NavbarDict;
}

export const SubcategoryAccordionItem = ({
    sub,
    category,
    lang,
    isExpanded,
    onToggle,
    onBrandHover,
    onBrandTitleHover,
    onLinkHover,
    onSubcategoryCaptionHover,
    onBrandProductsHover,
    dict,
}: SubcategoryAccordionItemProps) => {
    const { data: currentSubProducts = [], isLoading: isProductsLoading } =
        useGetProductsBySubcategorySlugQuery(sub.slug, { skip: !sub.slug });

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

    const isRtl = lang === 'fa';
    const theme = useTheme();

    if (isProductsLoading) {
        return <SubcategoryAccordionSkeleton />;
    }

    return (
        <Box sx={{ borderRadius: 1, overflow: 'hidden' }}>
            <ListItemButton
                onClick={() => onToggle(sub.slug)}
                sx={{
                    py: 1.5,
                    px: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
                onMouseEnter={() => {
                    onSubcategoryCaptionHover(null);
                    onBrandHover(null);
                    onBrandTitleHover(null);
                    onLinkHover(null);
                    onBrandProductsHover(null);

                    onBrandHover(sub.image ?? null);
                    onBrandTitleHover(sub.name[lang] ?? null);
                    onLinkHover(`/${lang}/category/${category?.slug}/${sub.slug}`);
                    onSubcategoryCaptionHover(dict.category?.viewAll);
                }}
            >
                <ListItemText
                    primary={sub.name[lang]}
                    sx={{
                        textAlign: isRtl ? 'right' : 'left',
                        '& .MuiListItemText-primary': {
                            direction: isRtl ? 'rtl' : 'ltr',
                            textAlign: isRtl ? 'right' : 'left',
                            fontWeight: isExpanded ? 700 : 500,
                        },
                    }}
                />

                {isExpanded ? (
                    <ExpandMoreIcon fontSize="small" />
                ) : (
                    <ChevronLeftIcon
                        fontSize="small"
                        sx={{
                            transform: isRtl ? 'none' : 'rotate(180deg)',
                        }}
                    />
                )}
            </ListItemButton>

            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ py: 1, px: 2 }}>
                    {brands.map((brand) => {
                        const brandName = brand.name[lang];

                        // Define link and products first before usage
                        const brandViewAllLink = `/${lang}/category/${category?.slug}/${sub.slug}?brand=${brand.slug}`;

                        const brandProducts = currentSubProducts.filter(
                            (product) =>
                                product.brand?.en?.toLowerCase() === brand.name.en.toLowerCase() ||
                                product.brand?.fa === brand.name.fa ||
                                product.brand?.en?.toLowerCase() === brand.slug.toLowerCase()
                        );

                        return (
                            <ListItemButton
                                key={brand.slug}
                                component={Link}
                                href={brandViewAllLink}
                                onClick={() => {
                                    onBrandProductsHover(null);
                                }}
                                onMouseEnter={() => {
                                    onSubcategoryCaptionHover(null);
                                    onBrandHover(null);
                                    onBrandTitleHover(null);
                                    onLinkHover(null);

                                    // Pass brand products and view more link to parent
                                    onBrandProductsHover(brandProducts);
                                    onLinkHover(brandViewAllLink);
                                    onBrandTitleHover(brandName);
                                }}
                                sx={{
                                    borderRadius: 1,
                                    '&:hover': {
                                        bgcolor: theme.palette.action.selected,
                                        width: '100%',
                                        color: 'primary.main',
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={brandName}
                                    sx={{
                                        textAlign: isRtl ? 'right' : 'left',
                                        '& .MuiListItemText-primary': {
                                            direction: isRtl ? 'rtl' : 'ltr',
                                            textAlign: isRtl ? 'right' : 'left',
                                            fontSize: '1rem',
                                        },
                                    }}
                                />
                            </ListItemButton>
                        );
                    })}

                    {brands.length === 0 && (
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ p: 1, display: 'block' }}
                        >
                            {dict.brand.error}
                        </Typography>
                    )}
                </List>
            </Collapse>
        </Box>
    );
};