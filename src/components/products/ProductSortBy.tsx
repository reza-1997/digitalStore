'use client';

import { useState, useEffect, useCallback } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';

import type { ProductsPageDict, Product } from '@/src/types';

interface ProductSortByProps {
    lang: 'fa' | 'en';
    dict: ProductsPageDict;
    products: Product[];
    onSort: (sortedProducts: Product[]) => void;
}

export const ProductSortBy = ({ lang, dict, products, onSort }: ProductSortByProps) => {
    const isRtl = lang === 'fa';
    const [sortBy, setSortBy] = useState('alphabetical');

    // Apply sort logic
    const applySort = useCallback(
        (sortValue: string, productList: Product[]) => {
            let sorted = [...productList];

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
                    <MenuItem value="alphabetical">{dict.sortOptions.alphabetical}</MenuItem>
                    <MenuItem value="alphabeticalDesc">{dict.sortOptions.alphabeticalDesc}</MenuItem>
                    <MenuItem value="priceLow">{dict.sortOptions.priceLow}</MenuItem>
                    <MenuItem value="priceHigh">{dict.sortOptions.priceHigh}</MenuItem>
                    <MenuItem value="popular">{dict.sortOptions.popular}</MenuItem>
                    <MenuItem value="highestDiscount">{dict.sortOptions.highestDiscount}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
