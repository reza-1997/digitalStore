'use client';

import { useState } from 'react';
import Link from 'next/link';

import {
    Alert,
    Box,
    Divider,
    Drawer,
    IconButton,
    Tooltip,
    List,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Skeleton,
    useTheme,
} from '@mui/material';

import {
    Close as CloseIcon,
    Search as SearchIcon,
    PersonOutlined as UserIcon,
    ShoppingBagOutlined as CartIcon,
    WbSunnyOutlined as SunIcon,
    DarkModeOutlined as MoonIcon,
    Language as GlobeIcon,
    ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';

import type { Category, NavbarDict } from '@/src/types';
import { SubcategoriesList } from './MenuDrawerSubcategoriesList';


interface MenuDrawerProps {
    open: boolean;
    lang: 'fa' | 'en';
    logo: string;
    dict: NavbarDict;
    categories: Category[];
    cartCount: number;
    mode: 'light' | 'dark';
    categoriesError: boolean;
    categoriesLoading?: boolean;
    onClose: () => void;
    onSearch: () => void;
    onToggleTheme: () => void;
    onChangeLanguage: () => void;
}

// Main mobile navigation drawer component with nested accordions and loading states
export default function MenuDrawer({
    open,
    lang,
    logo,
    dict,
    categories,
    cartCount,
    mode,
    categoriesError,
    categoriesLoading = false,
    onClose,
    onSearch,
    onToggleTheme,
    onChangeLanguage,
}: MenuDrawerProps) {
    const isRtl = lang === 'fa';
    const theme = useTheme();

    const [expandedCategorySlug, setExpandedCategorySlug] = useState<string | null>(null);
    const [expandedSubSlug, setExpandedSubSlug] = useState<string | null>(null);
    const [expandedBrandSlug, setExpandedBrandSlug] = useState<string | null>(null);

    const closeAndRun = (action: () => void) => {
        onClose();
        action();
    };

    // Handle category accordion toggle state
    const handleCategoryAccordionChange = (categorySlug: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpandedCategorySlug(isExpanded ? categorySlug : null);
        setExpandedSubSlug(null);
        setExpandedBrandSlug(null);
    };

    // Handle subcategory accordion toggle state
    const handleSubAccordionChange = (subSlug: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpandedSubSlug(isExpanded ? subSlug : null);
        setExpandedBrandSlug(null);
    };

    // Handle brand accordion toggle state
    const handleBrandAccordionChange = (brandSlug: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpandedBrandSlug(isExpanded ? brandSlug : null);
    };

    return (
        <Drawer
            anchor={isRtl ? 'right' : 'left'}
            open={open}
            onClose={onClose}
            slotProps={{
                paper: {
                    sx: {
                        width: { xs: '100vw', sm: 380 },
                        maxWidth: '100vw',
                        p: 2,
                        backgroundImage: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                    },
                },
            }}
        >
            {/* Top Bar: Logo & Tooltipped Action Icons */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pb: 2,
                }}
            >
                <Box
                    component={Link}
                    href={`/${lang}`}
                    onClick={onClose}
                    sx={{
                        color: 'text.primary',
                        textDecoration: 'none',
                        fontWeight: 800,
                        fontSize: '1.1rem',
                    }}
                >
                    {logo}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Tooltip title={dict.tooltip.search}>
                        <IconButton aria-label={dict.aria?.search || 'Search'} onClick={() => closeAndRun(onSearch)} size="small">
                            <SearchIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title={dict.tooltip.account}>
                        <IconButton component={Link} href={`/${lang}/account`} onClick={onClose} aria-label={dict.aria?.account || 'Account'} size="small">
                            <UserIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title={dict.tooltip.cart}>
                        <IconButton component={Link} href={`/${lang}/cart`} onClick={onClose} aria-label={dict.aria?.cart || 'Cart'} size="small">
                            <Box component="span" sx={{ position: 'relative', display: 'flex' }}>
                                <CartIcon />
                                {cartCount > 0 && (
                                    <Box
                                        component="span"
                                        sx={{
                                            position: 'absolute',
                                            top: -6,
                                            right: -8,
                                            minWidth: 15,
                                            height: 15,
                                            px: 0.3,
                                            borderRadius: 10,
                                            bgcolor: 'primary.main',
                                            color: 'primary.contrastText',
                                            fontSize: 9,
                                            fontWeight: 700,
                                            display: 'grid',
                                            placeItems: 'center',
                                        }}
                                    >
                                        {cartCount > 99 ? '99+' : cartCount}
                                    </Box>
                                )}
                            </Box>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title={dict.aria?.closeMenu || 'Close'}>
                        <IconButton aria-label={dict.aria?.closeMenu || 'Close'} onClick={onClose} size="small" sx={{ ml: 1 }}>
                            <CloseIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

            <Divider />

            {/* Scrollable Content (Categories & Accordions) */}
            <Box sx={{ flexGrow: 1, overflowY: 'auto', py: 2 }}>
                {categoriesError && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {dict.errors.categories}
                    </Alert>
                )}

                {/* Show loading skeleton for categories if they are fetching */}
                {categoriesLoading ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Skeleton variant="rounded" width="100%" height={50} />
                        <Skeleton variant="rounded" width="100%" height={50} />
                        <Skeleton variant="rounded" width="100%" height={50} />
                    </Box>
                ) : (
                    <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {categories.map((category) => {
                            const isCategoryExpanded = expandedCategorySlug === category.slug;

                            return (
                                <Accordion
                                    key={category.id}
                                    expanded={isCategoryExpanded}
                                    onChange={handleCategoryAccordionChange(category.slug)}
                                    elevation={0}
                                    disableGutters
                                    sx={{
                                        bgcolor: 'transparent',
                                        '&:before': { display: 'none' },
                                        borderBottom: '1px solid',
                                        borderColor: 'divider',
                                        pb: 1,
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        sx={{ px: 1, '& .MuiAccordionSummary-content': { my: 1 } }}
                                    >
                                        <Typography sx={{ fontWeight: 600 }}>{category.name[lang]}</Typography>
                                    </AccordionSummary>

                                    <AccordionDetails sx={{ px: 1, pt: 0, pb: 2 }}>
                                        {/* View All Category Link */}
                                        <Box sx={{ mb: 1.5, pl: 1 }}>
                                            <Typography
                                                component={Link}
                                                href={`/${lang}/category/${category.slug}`}
                                                onClick={onClose}
                                                variant="body2"
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
                                                {dict.category?.viewAll}
                                            </Typography>
                                        </Box>

                                        <SubcategoriesList
                                            category={category}
                                            lang={lang}
                                            expandedSubSlug={expandedSubSlug}
                                            onSubAccordionChange={handleSubAccordionChange}
                                            expandedBrandSlug={expandedBrandSlug}
                                            onBrandAccordionChange={handleBrandAccordionChange}
                                            onClose={onClose}
                                            dict={dict}
                                            theme={theme}
                                        />
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                    </List>
                )}
            </Box>

            <Divider />

            {/* Footer Settings: Theme & Language Buttons with Tooltips */}
            <Box sx={{ pt: 2, pb: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Tooltip title={mode === 'dark' ? dict.tooltip.lightMode : dict.tooltip.darkMode}>
                    <IconButton
                        onClick={onToggleTheme}
                        aria-label={dict.aria?.toggleTheme || 'Toggle theme'}
                        sx={{ display: 'flex', gap: 1, borderRadius: 2, px: 2 }}
                    >
                        {mode === 'dark' ? <SunIcon color="warning" /> : <MoonIcon color="info" />}
                    </IconButton>
                </Tooltip>

                <Tooltip title={dict.tooltip.changeLanguage}>
                    <IconButton
                        onClick={onChangeLanguage}
                        aria-label={dict.aria?.changeLanguage || 'Change language'}
                        sx={{ display: 'flex', gap: 1, borderRadius: 2, px: 2 }}
                    >
                        <GlobeIcon />
                        <Typography variant="body2" sx={{ textTransform: 'uppercase', fontWeight: 700 }}>
                            {lang}
                        </Typography>
                    </IconButton>
                </Tooltip>
            </Box>
        </Drawer>
    );
}