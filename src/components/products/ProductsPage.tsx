'use client';

import { useState } from 'react';
import {
    Badge,
    Box,
    Button,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

import { CategoryHeroSlider } from './CategoryHeroSlider';
import { ProductFilters } from './ProductFilters';
import { ProductFiltersDrawer } from './ProductFiltersDrawer';
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
const EMPTY_ARRAY: never[] = [];

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
    const categories = categoriesQuery.data ?? EMPTY_ARRAY;
    const subcategories = subcategoriesQuery.data ?? EMPTY_ARRAY;
    const brands = brandsQuery.data ?? EMPTY_ARRAY;
    const colors = colorsQuery.data ?? EMPTY_ARRAY;
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
    const selectedCategorySlug =
        filterState.filters.categories.length === 1
            ? filterState.filters.categories[0]
            : undefined;
    const selectedSubcategories = selectedCategorySlug
        ? subcategories.filter(
              (subcategory) =>
                  subcategory.categorySlug === selectedCategorySlug &&
                  filterState.filters.subcategories.includes(subcategory.slug)
          )
        : [];
    const selectedSubcategoryLabel =
        selectedSubcategories.length === 1
            ? selectedSubcategories[0].name[lang]
            : undefined;
    const [displayProducts, setDisplayProducts] =
        useState<Product[]>(filteredProducts);

    // Pagination state
    const [page, setPage] = useState(1);
    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
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
    const [prevFilteredProducts, setPrevFilteredProducts] =
        useState(filteredProducts);
    if (prevFilteredProducts !== filteredProducts) {
        setPrevFilteredProducts(filteredProducts);
        setPage(1);
    }

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
                    selectedCategorySlug={selectedCategorySlug}
                    selectedSubcategoryLabel={selectedSubcategoryLabel}
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
                            <Grid
                                size={{ xs: 12, lg: 3 }}
                                sx={{ display: { xs: 'none', lg: 'block' } }}
                            >
                                <ProductFilters
                                    lang={lang}
                                    dict={dict}
                                    colors={colors}
                                    filterState={filterState}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, lg: 9 }}>
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
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        <Badge
                                            badgeContent={
                                                filterState.activeFilters.length
                                            }
                                            color="primary"
                                            invisible={
                                                filterState.activeFilters
                                                    .length === 0
                                            }
                                            sx={{
                                                display: {
                                                    xs: 'inline-flex',
                                                    lg: 'none',
                                                },
                                            }}
                                        >
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                startIcon={<FilterListIcon />}
                                                onClick={() =>
                                                    setIsFilterDrawerOpen(true)
                                                }
                                                sx={{ textTransform: 'none' }}
                                            >
                                                {dict.filters.title}
                                            </Button>
                                        </Badge>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.secondary',
                                                textAlign: isRtl
                                                    ? 'right'
                                                    : 'left',
                                            }}
                                        >
                                            {displayProducts.length}{' '}
                                            {dict.productsCount}
                                        </Typography>
                                    </Box>

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

            <ProductFiltersDrawer
                lang={lang}
                dict={dict}
                colors={colors}
                filterState={filterState}
                open={isFilterDrawerOpen}
                onClose={() => setIsFilterDrawerOpen(false)}
            />
        </Box>
    );
};
