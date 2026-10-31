'use client';

import { Box, Typography, Checkbox, FormControlLabel, Divider } from '@mui/material';
import type { ProductsPageDict } from '@/src/types';

interface ProductFiltersProps {
    lang: 'fa' | 'en';
    dict: ProductsPageDict;
}

export const ProductFilters = ({ lang, dict }: ProductFiltersProps) => {
    const isRtl = lang === 'fa';

    return (
        <Box
            sx={{
                p: 3,
                backgroundColor: 'background.paper',
                borderRadius: 2,
                height: 'fit-content',
            }}
        >
            {/* Availability Filter */}
            <Box sx={{ mb: 4 }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: 'text.primary',
                        textAlign: isRtl ? 'right' : 'left',
                    }}
                >
                    {dict.filters.availability}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5,
                    }}
                >
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                }}
                            >
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {dict.filters.inStock}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                                    (12)
                                </Typography>
                            </Box>
                        }
                        sx={{
                            ml: isRtl ? 0 : 'auto',
                            mr: isRtl ? 'auto' : 0,
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label={
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                }}
                            >
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {dict.filters.outOfStock}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                                    (2)
                                </Typography>
                            </Box>
                        }
                        sx={{
                            ml: isRtl ? 0 : 'auto',
                            mr: isRtl ? 'auto' : 0,
                        }}
                    />
                </Box>
            </Box>

            <Divider sx={{ mb: 4 }} />

            {/* Brand Filter */}
            <Box>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: 'text.primary',
                        textAlign: isRtl ? 'right' : 'left',
                    }}
                >
                    {dict.filters.brand}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5,
                    }}
                >
                    {[
                        { name: 'Samsung', count: 8 },
                        { name: 'Apple', count: 6 },
                        { name: 'Sony', count: 4 },
                        { name: 'Bose', count: 3 },
                        { name: 'Logitech', count: 5 },
                        { name: 'Razer', count: 2 },
                    ].map((brand) => (
                        <FormControlLabel
                            key={brand.name}
                            control={<Checkbox />}
                            label={
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '100%',
                                    }}
                                >
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {brand.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                                        ({brand.count})
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                ml: isRtl ? 0 : 'auto',
                                mr: isRtl ? 'auto' : 0,
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};
