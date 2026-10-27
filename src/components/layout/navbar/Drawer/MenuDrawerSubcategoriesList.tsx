'use client';

import Link from 'next/link';
import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import { useGetSubcategoriesByCategorySlugQuery } from '@/src/lib/api/apiSlice';
import type { Category, NavbarDict, ProductCardDict } from '@/src/types';
import { SubcategoriesListSkeleton } from '../Skeleton/MenuDrawerSubcategoriesListSkeleton';
import { BrandsList } from './MenuDrawerBrandsList';


interface SubcategoriesListProps {
    category: Category;
    lang: 'fa' | 'en';
    expandedSubSlug: string | null;
    onSubAccordionChange: (subSlug: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
    expandedBrandSlug: string | null;
    onBrandAccordionChange: (brandSlug: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
    onClose: () => void;
    dict: NavbarDict;
    dictProductCard: ProductCardDict
    theme: any;
}

// Component to render subcategories and their brands inside category accordion
export function SubcategoriesList({
    category,
    lang,
    expandedSubSlug,
    onSubAccordionChange,
    expandedBrandSlug,
    onBrandAccordionChange,
    onClose,
    dict,
    theme,
    dictProductCard
}: SubcategoriesListProps) {
    // Fetch subcategories for the selected category
    const { data: subcategories = [], isLoading: isSubCategoriesLoading } = useGetSubcategoriesByCategorySlugQuery(
        category.slug,
        { skip: !category.slug }
    );

    // Show skeleton while subcategories are loading
    if (isSubCategoriesLoading) {
        return <SubcategoriesListSkeleton />;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, pl: 1 }}>
            {subcategories.map((sub) => {
                const isSubExpanded = expandedSubSlug === sub.slug;

                return (
                    <Accordion
                        key={sub.id}
                        expanded={isSubExpanded}
                        onChange={onSubAccordionChange(sub.slug)}
                        elevation={0}
                        disableGutters
                        sx={{
                            bgcolor: 'action.hover',
                            borderRadius: 1,
                            overflow: 'hidden',
                            '&:before': { display: 'none' },
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 1.5 }}>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                {sub.name[lang]}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ px: 1.5, pt: 0.1, pb: 2, bgcolor: 'background.paper' }}>
                            {/* View All Subcategory Link */}
                            <Box sx={{ my: 1.5 }}>
                                <Typography
                                    component={Link}
                                    href={`/${lang}/category/${category.slug}/${sub.slug}`}
                                    onClick={onClose}
                                    variant="caption"
                                    color="primary"
                                    sx={{
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        display: 'block',
                                        transition: 'color 0.2s',
                                        '&:hover': {
                                            color: theme.palette.secondary.light,
                                        },
                                    }}
                                >
                                    {dict.category?.viewAll || (lang === 'fa' ? 'مشاهده همه محصولات ساب‌کتگوری' : 'View all subcategory products')}
                                </Typography>
                            </Box>

                            <BrandsList
                                categorySlug={category.slug}
                                sub={sub}
                                lang={lang}
                                expandedBrandSlug={expandedBrandSlug}
                                onBrandAccordionChange={onBrandAccordionChange}
                                onClose={onClose}
                                theme={theme}
                                dict={dict}
                                dictProductCard={dictProductCard}
                            />
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </Box>
    );
}