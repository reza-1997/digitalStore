'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

import { CategoryHeroSlider } from './CategoryHeroSlider';
import { ProductFilters } from './ProductFilters';
import { ProductEmptyState } from './ProductEmptyState';
import { ProductFetchError } from './ProductFetchError';
import { ProductsPageLoading } from './ProductsPageLoading';
import { ProductSortBy } from './ProductSortBy';
import { ProductPagination } from './ProductPagination';
import { CategoryHeroSliderSkeleton } from './CategoryHeroSliderLoading';
import { useProductFilters } from './hooks/useProductFilters';
import {
    useGetAllBrandsQuery,
    useGetAllCategoriesQuery,
    useGetAllColorsQuery,
    useGetAllProductsQuery,
    useGetAllSubcategoriesQuery,
} from '@/src/lib/api/apiSlice';
import {
    ProductCard,
} from '@/src/components/common/product';

import type { Product, ProductsPageDict, ProductCardDict } from '@/src/types';

interface ProductsPageProps {
    lang: 'fa' | 'en';
    dict: ProductsPageDict;
    productCardDict: ProductCardDict;
}

const EMPTY_PRODUCTS: Product[] = [];

export const ProductsPage = ({
    lang,
    dict,
    productCardDict,
}: ProductsPageProps) => {
    const isRtl = lang === 'fa';
    const productsQuery = useGetAllProductsQuery();
    const categoriesQuery = useGetAllCategoriesQuery();
    const subcategoriesQuery = useGetAllSubcategoriesQuery();
    const brandsQuery = useGetAllBrandsQuery();
    const colorsQuery = useGetAllColorsQuery();

    const products = productsQuery.data ?? EMPTY_PRODUCTS;
    const categories = categoriesQuery.data ?? [];
    const subcategories = subcategoriesQuery.data ?? [];
    const brands = brandsQuery.data ?? [];
    const colors = colorsQuery.data ?? [];
    const isLoading = [
        productsQuery.isLoading,
        categoriesQuery.isLoading,
        subcategoriesQuery.isLoading,
        brandsQuery.isLoading,
        colorsQuery.isLoading,
    ].some(Boolean);
    const isError = [
        productsQuery.isError,
        categoriesQuery.isError,
        subcategoriesQuery.isError,
        brandsQuery.isError,
        colorsQuery.isError,
    ].some(Boolean);

    const filterState = useProductFilters({
        lang,
        dict,
        categories,
        subcategories,
        brands,
        colors,
        products,
    });
    const filteredProducts = filterState.filteredProducts;
    const [displayProducts, setDisplayProducts] =
        useState<Product[]>(filteredProducts);

    // Pagination state
    const [page, setPage] = useState(1);
    const itemsPerPage = 12; // Number of products per page

    // Calculate pagination
    const totalPages = Math.ceil(displayProducts.length / itemsPerPage);
    const paginatedProducts = displayProducts.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const handleSort = (sorted: Product[]) => {
        setDisplayProducts(sorted);
        setPage(1); // Reset to first page when sorting
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Reset to first page when filters change
    useEffect(() => {
        setPage(1);
    }, [filteredProducts]);

    const handleRetry = () => {
        void productsQuery.refetch();
        void categoriesQuery.refetch();
        void subcategoriesQuery.refetch();
        void brandsQuery.refetch();
        void colorsQuery.refetch();
    };

    return (
        <Box component="main" sx={{ width: '100%' }}>

            {isLoading ?
                < CategoryHeroSliderSkeleton /> :
                <CategoryHeroSlider
                    lang={lang}
                    categories={categories}
                    selectedCategorySlug={
                        filterState.filters.categories.length === 1
                            ? filterState.filters.categories[0]
                            : undefined
                    }
                    breadcrumbs={[
                        { label: dict.breadcrumbs.home, href: `/${lang}` },
                        { label: dict.breadcrumbs.products },
                    ]}
                />
            }
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    py: 8,
                    px: 3,
                }}
            >
                <Container maxWidth="xl">
                    {isError ? (
                        <ProductFetchError
                            message={dict.productLoadError}
                            retryLabel={dict.retry}
                            onRetry={handleRetry}
                            isRtl={isRtl}
                        />
                    ) : isLoading ? (
                        <ProductsPageLoading />
                    ) : (
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 3 }}>
                                <ProductFilters
                                    lang={lang}
                                    dict={dict}
                                    colors={colors}
                                    filterState={filterState}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 9 }}>
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
                                        {displayProducts.length}{' '}
                                        {dict.productsCount}
                                    </Typography>

                                    <ProductSortBy
                                        lang={lang}
                                        dict={dict}
                                        products={filteredProducts}
                                        onSort={handleSort}
                                    />
                                </Box>

                                {displayProducts.length > 0 ? (
                                    <>
                                        <Grid container spacing={3}>
                                            {paginatedProducts.map((product) => (
                                                <Grid
                                                    key={product.slug}
                                                    size={{
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 4,
                                                        lg: 3,
                                                    }}
                                                >
                                                    <ProductCard
                                                        product={product}
                                                        lang={lang}
                                                        dict={productCardDict}
                                                        isLoading={false}
                                                    />
                                                </Grid>
                                            ))}
                                        </Grid>

                                        {totalPages > 1 && (
                                            <ProductPagination
                                                page={page}
                                                count={totalPages}
                                                onChange={handlePageChange}
                                            />
                                        )}
                                    </>
                                ) : (
                                    <ProductEmptyState
                                        message={dict.noProductsFound}
                                        isRtl={isRtl}
                                    />
                                )}
                            </Grid>
                        </Grid>
                    )}
                </Container>
            </Box>
        </Box>
    );
};
