'use client';

import { Box, Drawer, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { ProductFilters } from './ProductFilters';
import { useProductFilters } from './hooks/useProductFilters';

import type { ColorOption, ProductsPageDict } from '@/src/types';

interface ProductFiltersDrawerProps {
    lang: 'fa' | 'en';
    dict: ProductsPageDict;
    colors: ColorOption[];
    filterState: ReturnType<typeof useProductFilters>;
    open: boolean;
    onClose: () => void;
}

export const ProductFiltersDrawer = ({
    lang,
    dict,
    colors,
    filterState,
    open,
    onClose,
}: ProductFiltersDrawerProps) => {
    const isRtl = lang === 'fa';

    return (
        <Drawer
            anchor={isRtl ? 'right' : 'left'}
            open={open}
            onClose={onClose}
            sx={{ zIndex: 1500 }}
            slotProps={{
                paper: {
                    sx: {
                        width: { xs: '100%', sm: 380 },
                        maxWidth: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'background.paper',
                    },
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 2,
                    py: 1.5,
                    borderBottom: 1,
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {dict.filters.title}
                </Typography>
                <IconButton onClick={onClose} aria-label={dict.filters.title} size="small">
                    <CloseIcon />
                </IconButton>
            </Box>

            <Box sx={{ flex: 1, overflowY: 'auto' }}>
                <ProductFilters
                    lang={lang}
                    dict={dict}
                    colors={colors}
                    filterState={filterState}
                    inDrawer
                />
            </Box>
        </Drawer>
    );
};
