'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
    Backdrop,
} from '@mui/material';

import { Menu as MenuIcon } from '@mui/icons-material';

import { useGetAllCategoriesQuery } from '@/src/lib/api/apiSlice';
import { useColorMode } from '@/src/theme/ThemeRegistry';

import SearchDialog from './SearchDialog';
import { MegaMenu } from './MegaMenu';
import { NavbarSkeleton } from './Skeleton/NavbarSkeleton';
import MenuDrawer from './Drawer/MenuDrawerMain';

import { NavCategoryItem } from './NavCategoryItem';
import { NavbarActions } from './NavbarActions';
import type { Category, NavbarDict, ProductCardDict } from '@/src/types';

interface NavbarProps {
    lang: 'fa' | 'en';
    dictNavbar: NavbarDict;
    dictProductCard: ProductCardDict,
    cartCount?: number;
}

/**
 * Main Navbar Component
 * Orchestrates layout header, navigation links, dynamic color switching,
 * mega menu overlays, and mobile menu drawer.
 */
export const Navbar = ({
    lang,
    dictNavbar,
    cartCount = 5,
    dictProductCard
}: NavbarProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const { mode, toggleTheme } = useColorMode();

    // Drawer and Search Modal States
    const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    // Mega Menu Hover & Position States
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [activeMenu, setActiveMenu] = useState<Category | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Dynamic Preview Link & Caption States
    const [hoveredCategoryCaptionOnImage, setHoveredCategoryCaptionOnImage] = useState<string | null>(null);
    const [hoveredChangeLinkInPopover, setHoveredChangeLinkInPopover] = useState<string | null>(null);

    // Hero Slide Background Tone State
    const [isLightSlide, setIsLightSlide] = useState(false);

    // Fetch Dynamic Categories via RTK Query
    const {
        data: categories = [],
        isLoading: isCategoriesLoading,
        isError: isCategoriesError,
    } = useGetAllCategoriesQuery();

    /**
     * Cancel a pending MegaMenu close
     */
    const cancelClose = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };

    /**
     * Handle mouse enter on category items (Opens MegaMenu)
     */
    const handleEnter = (
        event: React.MouseEvent<HTMLElement>,
        item: Category
    ) => {
        cancelClose();
        setAnchorEl(event.currentTarget);
        setActiveMenu(item);
        setHoveredCategoryCaptionOnImage(dictNavbar.category.viewAll);
        setHoveredChangeLinkInPopover(`/${lang}/category/${item?.slug}`);
    };

    /**
     * Handle mouse leave from category items (Closes MegaMenu with delay)
     */
    const handleLeave = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
        }

        closeTimer.current = setTimeout(() => {
            setAnchorEl(null);
            setActiveMenu(null);
            setHoveredCategoryCaptionOnImage(null);
            setHoveredChangeLinkInPopover(null);
            closeTimer.current = null;
        }, 300);
    };

    const open = Boolean(anchorEl);

    /**
     * Handle Locale Route Switch
     */
    const handleLanguageChange = () => {
        const segments = pathname.split('/');
        const nextLang = lang === 'fa' ? 'en' : 'fa';

        if (segments[1] === 'fa' || segments[1] === 'en') {
            segments[1] = nextLang;
            router.push(segments.join('/'));
            return;
        }

        router.push(`/${nextLang}`);
    };

    /**
     * Listen to hero slider background changes for dynamic text contrast
     */
    useEffect(() => {
        const handleSlideChange = (event: Event) => {
            const customEvent = event as CustomEvent<{ isLightSlide: boolean }>;
            setIsLightSlide(customEvent.detail.isLightSlide);
        };

        window.addEventListener('heroSlideChange', handleSlideChange);
        return () => {
            window.removeEventListener('heroSlideChange', handleSlideChange);
        };
    }, []);

    // Determine adaptive text & icon color based on background tone and menu open state
    const navbarTextColor = open || isLightSlide ? theme.palette.text.primary : '#ffffff';

    // Base action button style
    const actionButtonSx = {
        color: navbarTextColor,
        borderRadius: 2,
        '&:hover': {
            backgroundColor: 'action.hover',
        },
    };

    return (
        <>
            {/* Global Backdrop Overlay when MegaMenu is Open */}
            <Backdrop
                open={open}
                sx={{
                    zIndex: 1250,
                    backgroundColor: 'rgba(0, 0, 0, 0.35)',
                    backdropFilter: 'blur(2px)',
                }}
                onClick={() => {
                    setAnchorEl(null);
                    setActiveMenu(null);
                }}
            />

            {/* Transparent Floating Header AppBar */}
            <AppBar
                position="absolute"
                elevation={0}
                color="transparent"
                sx={{
                    color: navbarTextColor,
                    backgroundColor: open ? 'background.default' : 'transparent',
                    backgroundImage: 'none',
                    boxShadow: 'none',
                    borderBottom: '1px solid',
                    borderColor: open ? 'divider' : 'transparent',
                    transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
                    // Keep the navbar behind the mobile drawer.
                    zIndex: menuDrawerOpen ? theme.zIndex.appBar : 1400,

                    // Hide navbar content while the mobile drawer is open.
                    visibility: menuDrawerOpen ? 'hidden' : 'visible',
                }}
            >
                <Box
                    sx={{
                        maxWidth: 1440,
                        mx: 'auto',
                        width: '100%',
                        px: { xs: 2, sm: 3, lg: 5 },
                    }}
                >
                    <Toolbar
                        disableGutters
                        sx={{
                            minHeight: { xs: 68, md: 80 },
                            justifyContent: 'space-between',
                            gap: 2,
                            color: navbarTextColor,
                        }}
                    >
                        {/* Left Section: Mobile Menu Trigger, Brand Logo, & Category Links */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: { xs: 1.5, lg: 4 },
                                minWidth: 0,
                                height: { xs: 68, md: 80 },
                            }}
                        >
                            {/* Mobile Hamburger Drawer Button */}
                            {isMobile && (
                                <IconButton
                                    aria-label={dictNavbar.aria.openMenu}
                                    onClick={() => setMenuDrawerOpen(true)}
                                    sx={actionButtonSx}
                                >
                                    <MenuIcon />
                                </IconButton>
                            )}

                            {/* Main Brand Logo Link */}
                            <Typography
                                component={Link}
                                href={`/${lang}`}
                                sx={{
                                    textDecoration: 'none',
                                    fontWeight: 800,
                                    letterSpacing: lang === 'fa' ? 0 : '-0.7px',
                                    whiteSpace: 'nowrap',
                                    color: navbarTextColor,
                                    fontSize: { xs: '1rem', sm: '1.4rem', md: '1.1rem',lg: '1.8rem'}, 
                                }}
                            >
                                {dictNavbar.logo}
                            </Typography>

                            {/* Desktop Category Navigation */}
                            {!isMobile && (
                                <Box
                                    component="nav"
                                    aria-label={dictNavbar.aria.navigation}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2.5,
                                        height: '100%',
                                    }}
                                >
                                    {/* Loading State Skeleton */}
                                    {isCategoriesLoading && <NavbarSkeleton />}

                                    {/* Category Items List */}
                                    {!isCategoriesLoading &&
                                        !isCategoriesError &&
                                        categories.map((item) => {
                                            const category = item as Category;
                                            const isActive = activeMenu?.id === category.id;

                                            return (
                                                <NavCategoryItem
                                                    key={category.id}
                                                    category={category}
                                                    lang={lang}
                                                    dict={dictNavbar}
                                                    isActive={isActive}
                                                    isMenuOpen={open}
                                                    onMouseEnter={handleEnter}
                                                    onMouseLeave={handleLeave}
                                                />
                                            );
                                        })}

                                    {/* Error State Fallback */}
                                    {isCategoriesError && (
                                        <Typography variant="caption" color="error">
                                            {dictNavbar.category.error}
                                        </Typography>
                                    )}
                                </Box>
                            )}
                        </Box>

                        {/* Right Section: Quick Action Controls */}
                        <NavbarActions
                            lang={lang}
                            dict={dictNavbar}
                            cartCount={cartCount}
                            mode={mode}
                            onSearchClick={() => setSearchOpen(true)}
                            onToggleTheme={toggleTheme}
                            onLanguageChange={handleLanguageChange}
                            color={navbarTextColor}
                        />
                    </Toolbar>
                </Box>
            </AppBar>

            {/* Search Modal Dialog Component */}
            <SearchDialog
                open={searchOpen}
                lang={lang}
                dict={{
                    ...dictNavbar.search,
                    submitSearch: dictNavbar.aria.submitSearch,
                }}
                onClose={() => setSearchOpen(false)}
            />

            {/* Mobile Drawer Navigation Component */}
            <MenuDrawer
                open={menuDrawerOpen}
                lang={lang}
                logo={dictNavbar.logo}
                dict={dictNavbar}
                categories={categories as Category[]}
                cartCount={cartCount}
                mode={mode}
                categoriesError={isCategoriesError}
                onClose={() => setMenuDrawerOpen(false)}
                onSearch={() => setSearchOpen(true)}
                onToggleTheme={toggleTheme}
                onChangeLanguage={handleLanguageChange}
                dictProductCard={dictProductCard}
            />

            {/* Desktop Mega Menu Overlay Popover */}
            <MegaMenu
                open={open}
                anchorEl={anchorEl}
                category={activeMenu}
                lang={lang}
                handleLeave={handleLeave}
                cancelClose={cancelClose}
                dict={dictNavbar}
                dictProductCard={dictProductCard}
                hoveredCategoryCaptionOnImage={hoveredCategoryCaptionOnImage}
                setHoveredCategoryCaptionOnImage={setHoveredCategoryCaptionOnImage}
                hoveredChangeLinkInPopover={hoveredChangeLinkInPopover}
                setHoveredChangeLinkInPopover={setHoveredChangeLinkInPopover}
            />
        </>
    );
};