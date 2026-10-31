'use client';

import { Box, Container, Typography, Select, MenuItem, Grid, FormControl, InputLabel } from '@mui/material';

import { CategoryHeroSlider } from './CategoryHeroSlider';
import { ProductFilters } from './ProductFilters';
import { ProductCard } from '@/src/components/common/product';

import type { Product, Category, ProductsPageDict, ProductCardDict } from '@/src/types';

interface ProductsPageProps {
    lang: 'fa' | 'en';
    dict: ProductsPageDict;
    productCardDict: ProductCardDict;
    categories: Category[];
    products: Product[];
}

export const ProductsPage = ({
    lang,
    dict,
    productCardDict,
    categories,
    products,
}: ProductsPageProps) => {
    const isRtl = lang === 'fa';

    return (
        <Box component="main" sx={{ width: '100%' }}>
            {/* Category Hero Slider with Gradient - Full Width */}
            <CategoryHeroSlider lang={lang} categories={categories} />

            {/* Main Content */}
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    py: 8,
                    px: 3,
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={4}>
                        {/* Filters Sidebar */}
                        <Grid size={{ xs: 12, md: 3 }}>
                            <ProductFilters lang={lang} dict={dict} />
                        </Grid>

                        {/* Products Grid */}
                        <Grid size={{ xs: 12, md: 9 }}>
                            {/* Sort By and Products Count */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: 4,
                                    flexWrap: 'wrap',
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
                                    {products.length} {dict.productsCount}
                                </Typography>

                                <FormControl
                                    size="small"
                                    sx={{
                                        minWidth: 200,
                                        ml: isRtl ? 'auto' : 0,
                                        mr: isRtl ? 0 : 'auto',
                                    }}
                                >
                                    <InputLabel>{dict.sortBy}</InputLabel>
                                    <Select
                                        label={dict.sortBy}
                                        defaultValue="alphabetical"
                                        sx={{
                                            textAlign: isRtl ? 'right' : 'left',
                                        }}
                                    >
                                        <MenuItem value="alphabetical">
                                            {isRtl ? 'الفبایی (الف-ی)' : 'Alphabetically, A-Z'}
                                        </MenuItem>
                                        <MenuItem value="alphabetical-desc">
                                            {isRtl ? 'الفبایی (ی-الف)' : 'Alphabetically, Z-A'}
                                        </MenuItem>
                                        <MenuItem value="price-low">
                                            {isRtl ? 'قیمت: کم به زیاد' : 'Price: Low to High'}
                                        </MenuItem>
                                        <MenuItem value="price-high">
                                            {isRtl ? 'قیمت: زیاد به کم' : 'Price: High to Low'}
                                        </MenuItem>
                                        <MenuItem value="newest">
                                            {isRtl ? 'جدیدترین' : 'Newest'}
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            {/* Products Grid */}
                            <Grid container spacing={3}>
                                {products.map((product) => (
                                    <Grid key={product.slug} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                        <ProductCard
                                            product={product}
                                            lang={lang}
                                            dict={productCardDict}
                                            isLoading={false}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};
