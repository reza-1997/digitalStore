'use client';

import Link from 'next/link';
import { Box, colors, IconButton, Tooltip } from '@mui/material';
import {
    Search as SearchIcon,
    PersonOutlined as UserIcon,
    ShoppingBagOutlined as CartIcon,
    WbSunnyOutlined as SunIcon,
    DarkModeOutlined as MoonIcon,
} from '@mui/icons-material';

import { LanguageSwitcher } from './LanguageSwitcher';
import type { NavbarDict } from '@/src/types';
import { color } from 'motion';

interface NavbarActionsProps {
    lang: 'fa' | 'en';
    dict: NavbarDict;
    cartCount: number;
    mode: 'light' | 'dark';
    onSearchClick: () => void;
    onToggleTheme: () => void;
    onLanguageChange: () => void;
    color: string
}

/**
 * NavbarActions Component
 * Renders quick action icons (Search, Account, Cart, Theme, and Language toggle).
 */
export const NavbarActions = ({
    lang,
    dict,
    cartCount,
    mode,
    onSearchClick,
    onToggleTheme,
    onLanguageChange,
    color
}: NavbarActionsProps) => {

    const actionButtonSx = {
        borderRadius: 2,
        color: color,
        '&:hover': {
            backgroundColor: 'action.hover',
            color: "secondary.main"
        },
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 0.25, sm: 0.75 },
                flexShrink: 0,
            }}
        >
            {/* Search Trigger */}
            <Tooltip title={dict.tooltip.search}>
                <IconButton
                    aria-label={dict.aria.search}
                    onClick={onSearchClick}
                    sx={actionButtonSx}
                >
                    <SearchIcon />
                </IconButton>
            </Tooltip>

            {/* Account Profile Link */}
            <Tooltip title={dict.tooltip.account}>
                <IconButton
                    component={Link}
                    href={`/${lang}/account`}
                    aria-label={dict.aria.account}
                    sx={actionButtonSx}
                >
                    <UserIcon />
                </IconButton>
            </Tooltip>

            {/* Cart Link with Badge Counter */}
            <Tooltip title={dict.tooltip.cart}>
                <IconButton
                    component={Link}
                    href={`/${lang}/cart`}
                    aria-label={`${dict.aria.cart}: ${cartCount}`}
                    sx={actionButtonSx}
                >
                    <Box component="span" sx={{ position: 'relative', display: 'flex' }}>
                        <CartIcon />
                        {cartCount > 0 && (
                            <Box
                                component="span"
                                sx={{
                                    position: 'absolute',
                                    top: -7,
                                    right: -9,
                                    minWidth: 17,
                                    height: 17,
                                    px: 0.4,
                                    borderRadius: 10,
                                    bgcolor: color,
                                    color: color === "#ffffff" ? "black" : "#ffffff",
                                    fontSize: 10,
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

            {/* Light/Dark Color Mode Toggle */}
            <Tooltip
                title={mode === 'dark' ? dict.tooltip.lightMode : dict.tooltip.darkMode}
            >
                <IconButton
                    onClick={onToggleTheme}
                    aria-label={dict.aria.toggleTheme}
                    sx={actionButtonSx}
                >
                    {mode === 'dark' ? (
                        <SunIcon color="warning" />
                    ) : (
                        <MoonIcon color="info" />
                    )}
                </IconButton>
            </Tooltip>

            {/* Language Switcher */}
            <LanguageSwitcher
                lang={lang}
                tooltipTitle={dict.tooltip.changeLanguage}
                ariaLabel={dict.aria.changeLanguage}
                onLanguageChange={onLanguageChange}
            />
        </Box>
    );
};