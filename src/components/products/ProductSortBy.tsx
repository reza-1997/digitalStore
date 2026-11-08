'use client';

import { useState, useEffect, useCallback } from 'react';
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

import { ProductSortDrawer } from './ProductSortDrawer';
import type { SortOption } from './ProductSortDrawer';

import type { Product } from '@/src/types';
import type { Dictionary } from '@/src/lang/dictionary';

interface ProductSortByProps {
    lang: 'fa' | 'en';
    dict: Dictionary;
    products: Product[];
    onSort: (sortedProducts: Product[]) => void;
}

export const ProductSortBy = ({ lang, dict: dictionary, products, onSort }: ProductSortByProps) => {
    const dict = dictionary.productsPage;
    const isRtl = lang === 'fa';
    const [sortBy, setSortBy] = useState('alphabetical');
    const [isSortDrawerOpen, setIsSortDrawerOpen] = useState(false);

    const sortOptions: SortOption[] = [
        { value: 'alphabetical', label: dict.sortOptions.alphabetical },
        { value: 'alphabeticalDesc', label: dict.sortOptions.alphabeticalDesc },
        { value: 'priceLow', label: dict.sortOptions.priceLow },
        { value: 'priceHigh', label: dict.sortOptions.priceHigh },
        { value: 'popular', label: dict.sortOptions.popular },
        { value: 'highestDiscount', label: dict.sortOptions.highestDiscount },
    ];

    // Apply sort logic
    const applySort = useCallback(
        (sortValue: string, productList: Product[]) => {
            const sorted = [...productList];

            switch (sortValue) {
                case 'alphabetical':
                    sorted.sort((a, b) => a.title[lang].localeCompare(b.title[lang]));
                    break;
                case 'alphabeticalDesc':
                    sorted.sort((a, b) => b.title[lang].localeCompare(a.title[lang]));
                    break;
                case 'priceLow':
                    sorted.sort((a, b) => {
                        const priceA = a.discountPrice || a.price;
                        const priceB = b.discountPrice || b.price;
                        return priceA - priceB;
                    });
                    break;
                case 'priceHigh':
                    sorted.sort((a, b) => {
                        const priceA = a.discountPrice || a.price;
                        const priceB = b.discountPrice || b.price;
                        return priceB - priceA;
                    });
                    break;
                case 'popular':
                    sorted.sort((a, b) => b.rating - a.rating);
                    break;
                case 'highestDiscount':
                    sorted.sort((a, b) => {
                        const discountA = a.discountPrice ? ((a.price - a.discountPrice) / a.price) * 100 : 0;
                        const discountB = b.discountPrice ? ((b.price - b.discountPrice) / b.price) * 100 : 0;
                        return discountB - discountA;
                    });
                    break;
                default:
                    break;
            }

            onSort(sorted);
        },
        [lang, onSort]
    );

    const handleSortChange = (value: string) => {
        setSortBy(value);
        applySort(value, products);
    };

    // Re-apply sort when products change (e.g., after filtering)
    useEffect(() => {
        applySort(sortBy, products);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products, sortBy]);

    const currentSortLabel =
        sortOptions.find((option) => option.value === sortBy)?.label ??
        dict.sortBy;

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 2,
                flexWrap: 'wrap',
            }}
        >
            {/* Desktop sort select */}
            <Box
                sx={{
                    display: { xs: 'none', lg: 'flex' },
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        textAlign: isRtl ? 'right' : 'left',
                    }}
                >
                    {dict.sortBy}
                </Typography>

                <FormControl
                    size="small"
                    sx={{
                        minWidth: 200,
                    }}
                >
                    <InputLabel>{dict.sortBy}</InputLabel>
                    <Select
                        label={dict.sortBy}
                        value={sortBy}
                        onChange={(e) => handleSortChange(e.target.value)}
                        sx={{
                            textAlign: isRtl ? 'right' : 'left',
                        }}
                    >
                        {sortOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            {/* Mobile sort button */}
            <Button
                variant="outlined"
                size="small"
                startIcon={<SortIcon />}
                onClick={() => setIsSortDrawerOpen(true)}
                sx={{
                    display: { xs: 'inline-flex', lg: 'none' },
                    textTransform: 'none',
                }}
            >
                {currentSortLabel}
            </Button>

            <ProductSortDrawer
                open={isSortDrawerOpen}
                onClose={() => setIsSortDrawerOpen(false)}
                isRtl={isRtl}
                title={dict.sortBy}
                options={sortOptions}
                value={sortBy}
                onSelect={(value) => {
                    handleSortChange(value);
                    setIsSortDrawerOpen(false);
                }}
            />
        </Box>
    );
};
