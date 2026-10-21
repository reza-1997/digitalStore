'use client';

import { Box, Typography, IconButton } from '@mui/material';
import { KeyboardArrowDown as ChevronDownIcon } from '@mui/icons-material';
import type { Category, NavbarDict } from '@/src/types';

interface NavCategoryItemProps {
    category: Category;
    lang: 'fa' | 'en';
    dict: NavbarDict;
    isActive: boolean;
    isMenuOpen: boolean;
    onMouseEnter: (event: React.MouseEvent<HTMLElement>, category: Category) => void;
    onMouseLeave: () => void;
}

/**
 * NavCategoryItem Component
 * Renders individual desktop navbar navigation item with animated indicator line and arrow.
 */
export const NavCategoryItem = ({
    category,
    lang,
    dict,
    isActive,
    isMenuOpen,
    onMouseEnter,
    onMouseLeave,
}: NavCategoryItemProps) => {
    return (
        <Box
            onMouseLeave={onMouseLeave}
            onMouseEnter={(e) => onMouseEnter(e, category)}
            sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                height: '100%',
                cursor: 'pointer',
            }}
        >
            <Typography
                color="inherit"
                aria-owns={isMenuOpen ? 'mouse-over-popover' : undefined}
                sx={{
                    fontWeight: 600,
                    fontSize: { md: '0.78rem', lg: '1rem' },
                    color: 'inherit',
                    transition: 'color 0.2s ease',
                }}
            >
                {category.name[lang]}
            </Typography>

            {/* Rotating Arrow Indicator */}
            <IconButton
                size="small"
                disableRipple
                aria-label={`${dict.aria.categorySubmenu}: ${category.name[lang]}`}
                sx={{ ml: -0.25, p: 0.25, color: 'inherit' }}
            >
                <ChevronDownIcon
                    fontSize="small"
                    sx={{
                        transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease-in-out',
                    }}
                />
            </IconButton>

            {/* Smooth Active Slide-In Bottom Line */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: -1,
                    left: 0,
                    right: 0,
                    height: '2px',
                    bgcolor: 'text.primary',
                    zIndex: 2,
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: lang === 'fa' ? 'right' : 'left',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            />
        </Box>
    );
};