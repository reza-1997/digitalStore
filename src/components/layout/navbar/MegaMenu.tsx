'use client';

import { useState, useMemo, RefObject } from 'react';
import Link from 'next/link';
import {
    Box,
    Container,
    Typography,
    Popover,
    Paper,
    List,
    useTheme,
} from '@mui/material';

import type { Category, NavbarDict, Product } from '@/src/types';
import { useGetSubcategoriesByCategorySlugQuery } from '@/src/lib/api/apiSlice';
import { SubcategoryAccordionItem } from './SubcategoryAccordionItem';
import { MegaMenuSkeleton } from './Skeleton/MegaMenuSkeleton';

interface MegaMenuProps {
    open: boolean;
    dict: NavbarDict;
    anchorEl: HTMLElement | null;
    category: Category | null;
    lang: 'fa' | 'en';
    handleLeave: () => void;
    closeTimer: RefObject<ReturnType<typeof setTimeout> | null>;
    setHoveredCategoryCaptionOnImage: (title: string | null) => void;
    hoveredCategoryCaptionOnImage: string | null;
    hoveredChangeLinkInPopover: string | null;
    setHoveredChangeLinkInPopover: (link: string | null) => void;
}

export const MegaMenu = ({
    open,
    anchorEl,
    category,
    lang,
    handleLeave,
    closeTimer,
    dict,
    setHoveredCategoryCaptionOnImage,
    hoveredCategoryCaptionOnImage,
    hoveredChangeLinkInPopover,
    setHoveredChangeLinkInPopover,
}: MegaMenuProps) => {

    const { data: subCategories, isLoading: isSubCategoriesLoading } =
        useGetSubcategoriesByCategorySlugQuery(category?.slug || '', {
            skip: !category?.slug,
        });

    const theme = useTheme();

    const [expandedSubSlug, setExpandedSubSlug] = useState<string | null>(null);
    const [hoveredProductImage, setHoveredProductImage] = useState<string | null>(null);
    const [hoveredProductTitleOnImage, setHoveredProductTitleOnImage] = useState<string | null>(null);

    // State for brand products grid preview 
    const [hoveredBrandProducts, setHoveredBrandProducts] = useState<Product[] | null>(null);

    // Track hovered individual product card slug for smooth image fade swap
    const [hoveredCardProductSlug, setHoveredCardProductSlug] = useState<string | null>(null);

    const subCategoriesWithBrands = useMemo(() => {
        if (!subCategories) return [];
        return subCategories.map((sub) => ({ ...sub }));
    }, [subCategories]);

    const handleAccordionToggle = (subSlug: string) => {
        setExpandedSubSlug(expandedSubSlug === subSlug ? null : subSlug);
    };

    const handleResetHover = () => {
        handleLeave();
        setHoveredProductImage(null);
        setHoveredProductTitleOnImage(null);
        setHoveredChangeLinkInPopover(null);
        setHoveredCategoryCaptionOnImage(null);
        setHoveredBrandProducts(null);
        setHoveredCardProductSlug(null);
    };

    return (
        <Popover
            id="mouse-over-popover"
            open={open}
            anchorEl={anchorEl}
            disablePortal
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            sx={{
                pointerEvents: 'none',
                zIndex: 1300,
            }}
            slotProps={{
                paper: {
                    onMouseEnter: () => {
                        if (closeTimer.current) {
                            clearTimeout(closeTimer.current);
                            closeTimer.current = null;
                        }
                    },
                    onMouseLeave: handleResetHover,
                    sx: {
                        pointerEvents: 'auto',
                        width: '100vw',
                        maxWidth: '100vw',
                        left: '0 !important',
                        right: '0 !important',
                        mt: 0,
                        py: { xs: 3, md: 5 },
                        px: { xs: 2, md: 6 },
                        borderRadius: 0,
                        overflow: 'hidden',
                        backgroundColor: 'background.default',
                        backgroundImage: 'none',
                        boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.12)',
                    },
                },
            }}
        >
            <Container maxWidth="xl" disableGutters>
                {isSubCategoriesLoading ? (
                    <MegaMenuSkeleton />
                ) : (
                    <Box
                        sx={{
                            flexDirection: 'row',
                            display: 'flex',
                            justifyContent: 'space-between',
                            position: 'relative',
                        }}
                    >
                        {/* Left Column: Subcategories & Brands Accordion */}
                        <Box sx={{ width: 380, maxHeight: '60vh', overflowY: 'auto', pr: 1 }}>
                            <Typography
                                component={Link}
                                href={`/${lang}/category/${category?.slug}`}
                                onMouseEnter={() => {
                                    setHoveredBrandProducts(null);
                                    setHoveredChangeLinkInPopover(null);
                                    setHoveredProductImage(category?.image?.[0] ?? null);
                                    setHoveredProductTitleOnImage(category?.name[lang] ?? null);
                                    setHoveredChangeLinkInPopover(`/${lang}/category/${category?.slug}`);
                                }}
                                variant="subtitle1"
                                color="primary"
                                sx={{
                                    mb: 2,
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                }}
                            >
                                {category?.name[lang]}
                            </Typography>

                            <List
                                component="nav"
                                disablePadding
                                sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
                            >
                                {subCategoriesWithBrands.map((sub) => {
                                    const isExpanded =
                                        expandedSubSlug === sub.slug ||
                                        (!expandedSubSlug &&
                                            sub.slug === subCategories?.[0]?.slug);

                                    return (
                                        <SubcategoryAccordionItem
                                            key={sub.id}
                                            sub={sub}
                                            category={category}
                                            lang={lang}
                                            isExpanded={isExpanded}
                                            onToggle={handleAccordionToggle}
                                            onBrandHover={setHoveredProductImage}
                                            onBrandTitleHover={setHoveredProductTitleOnImage}
                                            onLinkHover={setHoveredChangeLinkInPopover}
                                            onSubcategoryCaptionHover={
                                                setHoveredCategoryCaptionOnImage
                                            }
                                            onBrandProductsHover={setHoveredBrandProducts}
                                            dict={dict}
                                        />
                                    );
                                })}
                            </List>
                        </Box>

                        {/* Right Column: Dynamic Preview Area */}
                        <Box sx={{ flexGrow: 1, pl: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            {/* View More / View All Header Link */}
                            {(hoveredChangeLinkInPopover) && (
                                <Typography
                                    component={Link}
                                    href={hoveredChangeLinkInPopover}
                                    variant="body2"
                                    color="primary"
                                    sx={{
                                        mb: 2,
                                        fontWeight: 700,
                                        textDecoration: 'none',
                                        '&:hover': { color: theme.palette.secondary.light },
                                    }}
                                >
                                    {hoveredBrandProducts && (dict.brand.view)}
                                </Typography>
                            )}

                            {hoveredBrandProducts && hoveredBrandProducts.length > 0 ? (
                                /* Brand Products Grid with Fixed Card Widths */
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: 2,
                                        width: '100%',
                                        maxWidth: 900,
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    {hoveredBrandProducts.slice(0, 4).map((product) => {
                                        const modelSpec = product.specifications?.find(
                                            (spec) => spec.key.en.toLowerCase() === 'model'
                                        );
                                        const modelText = modelSpec ? modelSpec.value[lang] : '';

                                        const isCardHovered = hoveredCardProductSlug === product.slug;
                                        const hasSecondImage = Boolean(product.images?.[1]);

                                        return (
                                            <Paper
                                                key={product.slug}
                                                component={Link}
                                                href={`/${lang}/product/${product.slug}`}
                                                onMouseEnter={() => setHoveredCardProductSlug(product.slug)}
                                                onMouseLeave={() => setHoveredCardProductSlug(null)}
                                                elevation={0}
                                                sx={{
                                                    flex: '0 0 160px',
                                                    p: 1,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                    bgcolor: theme.palette.action.selected,
                                                    borderRadius: 1,
                                                    textDecoration: 'none',
                                                    transition: 'transform 0.2s ease-in-out',
                                                    '&:hover': {
                                                        bgcolor: theme.palette.grey[50],
                                                    },
                                                }}
                                            >
                                                {/* Image Container for Smooth Cross-Fade Transition */}
                                                <Box
                                                    sx={{
                                                        position: 'relative',
                                                        width: '100%',
                                                        height: 160,
                                                        mb: 1.5,
                                                        display: 'grid',
                                                        placeItems: 'center',
                                                    }}
                                                >
                                                    {/* Default Primary Image */}
                                                    <Box
                                                        component="img"
                                                        src={product.images?.[0]}
                                                        alt={product.title[lang]}
                                                        sx={{
                                                            gridArea: '1 / 1',
                                                            height: 160,
                                                            width: 150,
                                                            objectFit: 'contain',
                                                            transition: 'opacity 0.4s ease-in-out',
                                                            opacity: isCardHovered && hasSecondImage ? 0 : 1,
                                                        }}
                                                    />

                                                    {/* Secondary Image (Fades in on Hover) */}
                                                    {hasSecondImage && (
                                                        <Box
                                                            component="img"
                                                            src={product.images[1]}
                                                            alt={product.title[lang]}
                                                            sx={{
                                                                gridArea: '1 / 1',
                                                                height: 150,
                                                                width: 150,
                                                                objectFit: 'contain',
                                                                transition: 'opacity 0.4s ease-in-out',
                                                                opacity: isCardHovered ? 1 : 0,
                                                            }}
                                                        />
                                                    )}
                                                </Box>

                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: 'text.primary',
                                                        mb: 0.5,
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: 'vertical',
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    {product.title[lang]}
                                                </Typography>
                                                {modelText && (
                                                    <Typography variant="caption" color="text.secondary">
                                                        {modelText}
                                                    </Typography>
                                                )}
                                            </Paper>
                                        );
                                    })}
                                </Box>
                            ) : (
                                /* Default Single Banner Preview */
                                <Paper
                                    component={Link}
                                    href={hoveredChangeLinkInPopover ?? `/${lang}/category/${category?.slug}`}
                                    elevation={0}
                                    sx={{
                                        position: 'relative',
                                        height: 380,
                                        width: '100%',
                                        maxWidth: 700,
                                        borderRadius: 1,
                                        overflow: 'hidden',
                                        backgroundImage: hoveredProductImage
                                            ? `url(${hoveredProductImage})`
                                            : category?.image
                                                ? `url(${category?.image})`
                                                : 'none',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        p: 3,
                                        textDecoration: 'none',
                                        transition: 'background-image 0.3s ease-in-out',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            inset: 0,
                                            background:
                                                'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
                                        },
                                        '&:hover': {
                                            'h6, span': {
                                                color: theme.palette.secondary.light,
                                            },
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            zIndex: 1,
                                            color: '#fff',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 800, mb: 0.5 }}
                                        >
                                            {hoveredProductTitleOnImage
                                                ? hoveredProductTitleOnImage
                                                : category?.name[lang]}
                                        </Typography>

                                        <Typography variant="caption">
                                            {hoveredCategoryCaptionOnImage}
                                        </Typography>
                                    </Box>
                                </Paper>
                            )}
                        </Box>
                    </Box>
                )}
            </Container>
        </Popover>
    );
};