'use client';

import { useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

import { CategoryHeroSlider } from './CategoryHeroSlider';
import { ProductFilters } from './ProductFilters';
import { ProductSortBy } from './ProductSortBy';
import { ProductCard } from '@/src/components/common/product';

import type { Product, Category, Brand, ProductsPageDict, ProductCardDict } from '@/src/types';

interface ProductsPageProps {
    lang: 'fa' | 'en';
    dict: ProductsPageDict;
    productCardDict: ProductCardDict;
    categories: Category[];
    brands: Brand[];
    products: Product[];
}

export const ProductsPage = ({
    lang,
    dict,
    productCardDict,
    categories,
    brands,
    products,
}: ProductsPageProps) => {
    const isRtl = lang === 'fa';
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    const [displayProducts, setDisplayProducts] = useState<Product[]>(products);

    // Handle filter changes
    const handleFilter = (filtered: Product[]) => {
        setFilteredProducts(filtered);
        setDisplayProducts(filtered);
    };

    // Handle sort changes (sort on filtered products)
    const handleSort = (sorted: Product[]) => {
        setDisplayProducts(sorted);
    };

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
                            <ProductFilters
                                lang={lang}
                                dict={dict}
                                categories={categories}
                                brands={brands}
                                products={products}
                                onFilter={handleFilter}
                            />
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
                                    {displayProducts.length} {dict.productsCount}
                                </Typography>

                                <ProductSortBy
                                    lang={lang}
                                    dict={dict}
                                    products={filteredProducts}
                                    onSort={handleSort}
                                />
                            </Box>

                            {/* Products Grid */}
                            <Grid container spacing={3}>
                                {displayProducts.map((product) => (
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
