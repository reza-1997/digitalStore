import { fakeBaseQuery, createApi } from '@reduxjs/toolkit/query/react';



import {
    Product,
    Category,
    Subcategory,
    Collection,
    Brand,
} from '@/src/types';

import {
    CATEGORIES,
    SUBCATEGORIES,
    COLLECTIONS,
    BRANDS,
} from '@/src/data/mockData';
import { PRODUCTS } from '@/src/data/dataProducts';

// --------------------------------------------------
// API types
// --------------------------------------------------

export interface ApiError {
    status: number;
    message: string;
}

export interface ProductFilters {
    isFeatured?: boolean;
    isNewArrival?: boolean;
    brand?: string;
    collectionSlug?: string;
}

export interface SearchResults {
    products: Product[];
    categories: Category[];
    subcategories: Subcategory[];
}

// --------------------------------------------------
// Helpers
// --------------------------------------------------

const wait = (ms = 300): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

const normalize = (value: string): string =>
    value.trim().toLocaleLowerCase();

const includesText = (
    value: string | undefined,
    term: string
): boolean => normalize(value ?? "").includes(term);

const notFound = (entity: string): ApiError => ({
    status: 404,
    message: `${entity} not found`,
});

// --------------------------------------------------
// RTK Query API
// --------------------------------------------------

export const apiSlice = createApi({
    reducerPath: "api",

    baseQuery: fakeBaseQuery<ApiError>(),

    tagTypes: [
        "Product",
        "Category",
        "Subcategory",
        "Collection",
        "Brand"
    ],

    endpoints: (builder) => ({
        // ----------------------------------------------
        // Products
        // ----------------------------------------------

        getAllProducts: builder.query<Product[], void>({
            async queryFn() {
                await wait();

                return { data: PRODUCTS };
            },

            providesTags: (result) => [
                { type: "Product", id: "LIST" },
                ...(result ?? []).map((product) => ({
                    type: "Product" as const,
                    id: product.slug,
                })),
            ],
        }),

        getProductBySlug: builder.query<Product, string>({
            async queryFn(slug) {
                await wait();

                const product = PRODUCTS.find(
                    (item) => item.slug === slug
                );

                if (!product) {
                    return { error: notFound("Product") };
                }

                return { data: product };
            },

            providesTags: (_result, _error, slug) => [
                { type: "Product", id: slug },
            ],
        }),

        getProductsByCategorySlug: builder.query<Product[], string>({
            async queryFn(categorySlug) {
                await wait();

                const products = PRODUCTS.filter(
                    (product) => product.categorySlug === categorySlug
                );

                return { data: products };
            },

            providesTags: (_result, _error, categorySlug) => [
                { type: "Product", id: `CATEGORY-${categorySlug}` },
                { type: "Product", id: "LIST" },
            ],
        }),

        getProductsBySubcategorySlug: builder.query<Product[], string>({
            async queryFn(subcategorySlug) {
                await wait();

                const products = PRODUCTS.filter(
                    (product) =>
                        product.subcategorySlug === subcategorySlug
                );

                return { data: products };
            },

            providesTags: (_result, _error, subcategorySlug) => [
                { type: "Product", id: `SUBCATEGORY-${subcategorySlug}` },
                { type: "Product", id: "LIST" },
            ],
        }),

        getFilteredProducts: builder.query<Product[], ProductFilters>({
            async queryFn(filters) {
                await wait();

                let result = [...PRODUCTS];

                if (filters.isFeatured !== undefined) {
                    result = result.filter(
                        (product) => product.isFeatured === filters.isFeatured
                    );
                }

                if (filters.isNewArrival !== undefined) {
                    result = result.filter(
                        (product) => product.isNewArrival === filters.isNewArrival
                    );
                }

                if (filters.brand?.trim()) {
                    const brand = normalize(filters.brand);

                    result = result.filter(
                        (product) =>
                            normalize(product.brand.en) === brand ||
                            normalize(product.brand.fa) === brand
                    );
                }

                const collectionSlug = filters.collectionSlug;

                if (collectionSlug) {
                    result = result.filter((product) =>
                        product.collectionSlugs.includes(collectionSlug)
                    );
                }


                return { data: result };
            },

            providesTags: [{ type: "Product", id: "LIST" }],
        }),

        // ----------------------------------------------
        // Categories
        // ----------------------------------------------

        getAllCategories: builder.query<Category[], void>({
            async queryFn() {
                await wait();

                return { data: CATEGORIES };
            },

            providesTags: (result) => [
                { type: "Category", id: "LIST" },
                ...(result ?? []).map((category) => ({
                    type: "Category" as const,
                    id: category.slug,
                })),
            ],
        }),

        getCategoryBySlug: builder.query<Category, string>({
            async queryFn(slug) {
                await wait();

                const category = CATEGORIES.find(
                    (item) => item.slug === slug
                );

                if (!category) {
                    return { error: notFound("Category") };
                }

                return { data: category };
            },

            providesTags: (_result, _error, slug) => [
                { type: "Category", id: slug },
            ],
        }),

        // ----------------------------------------------
        // Subcategories
        // ----------------------------------------------

        getAllSubcategories: builder.query<Subcategory[], void>({
            async queryFn() {
                await wait();

                return { data: SUBCATEGORIES };
            },

            providesTags: (result) => [
                { type: "Subcategory", id: "LIST" },
                ...(result ?? []).map((subcategory) => ({
                    type: "Subcategory" as const,
                    id: subcategory.slug,
                })),
            ],
        }),

        getSubcategoryBySlug: builder.query<Subcategory, string>({
            async queryFn(slug) {
                await wait();

                const subcategory = SUBCATEGORIES.find(
                    (item) => item.slug === slug
                );

                if (!subcategory) {
                    return { error: notFound("Subcategory") };
                }

                return { data: subcategory };
            },

            providesTags: (_result, _error, slug) => [
                { type: "Subcategory", id: slug },
            ],
        }),

        getSubcategoriesByCategorySlug: builder.query<Subcategory[], string>({
            async queryFn(categorySlug) {
                await wait();

                const subcategories = SUBCATEGORIES.filter(
                    (item) => item.categorySlug === categorySlug
                );

                return { data: subcategories };
            },

            providesTags: (_result, _error, categorySlug) => [
                { type: "Subcategory", id: `CATEGORY-${categorySlug}` },
                { type: "Subcategory", id: "LIST" },
            ],
        }),

        // ----------------------------------------------
        // Collections
        // ----------------------------------------------

        getAllCollections: builder.query<Collection[], void>({
            async queryFn() {
                await wait();

                return { data: COLLECTIONS };
            },

            providesTags: (result) => [
                { type: "Collection", id: "LIST" },
                ...(result ?? []).map((collection) => ({
                    type: "Collection" as const,
                    id: collection.slug,
                })),
            ],
        }),
        // --- Brands Endpoints ---
        getAllBrands: builder.query<Brand[], void>({
            async queryFn() {
                await wait();
                return { data: BRANDS };
            },
            providesTags: ['Brand'],
        }),

        // getBrandsBySubcategorySlug: builder.query<Brand[], string>({
        //     async queryFn(subcategorySlug) {
        //         await wait();
        //         const filtered = BRANDS.filter(
        //             (brand) => brand.isActive && brand.subcategorySlugs.includes(subcategorySlug)
        //         );
        //         return { data: filtered };
        //     },
        //     providesTags: (_result, _error, subcategorySlug) => [
        //         { type: 'Brand', id: `SUBCATEGORY-${subcategorySlug}` },
        //     ],
        // }),

        // ----------------------------------------------
        // Advanced search
        // ----------------------------------------------

        searchAll: builder.query<SearchResults, string>({
            async queryFn(searchTerm) {
                await wait();

                const term = normalize(searchTerm);

                if (!term) {
                    return {
                        data: {
                            products: [],
                            categories: [],
                            subcategories: [],
                        },
                    };
                }

                const products = PRODUCTS.filter((product) => {
                    const matchesTitle =
                        includesText(product.title.en, term) ||
                        includesText(product.title.fa, term);

                    const matchesSlug = includesText(product.slug, term);

                    const matchesBrand =
                        includesText(product.brand.en, term) ||
                        includesText(product.brand.fa, term);

                    const matchesSpecifications = product.specifications.some(
                        (specification) =>
                            includesText(specification.key.en, term) ||
                            includesText(specification.key.fa, term) ||
                            includesText(specification.value.en, term) ||
                            includesText(specification.value.fa, term)
                    );

                    return (
                        matchesTitle ||
                        matchesSlug ||
                        matchesBrand ||
                        matchesSpecifications
                    );
                });

                const categories = CATEGORIES.filter(
                    (category) =>
                        includesText(category.name.en, term) ||
                        includesText(category.name.fa, term) ||
                        includesText(category.slug, term)
                );

                const subcategories = SUBCATEGORIES.filter(
                    (subcategory) =>
                        includesText(subcategory.name.en, term) ||
                        includesText(subcategory.name.fa, term) ||
                        includesText(subcategory.slug, term)
                );

                return {
                    data: {
                        products,
                        categories,
                        subcategories,
                    },
                };
            },
        }),
    }),

});

// --------------------------------------------------
// Generated React hooks
// --------------------------------------------------

export const {
    useGetAllProductsQuery,
    useGetProductBySlugQuery,
    useGetProductsByCategorySlugQuery,
    useGetProductsBySubcategorySlugQuery,
    useGetFilteredProductsQuery,
    useGetAllCategoriesQuery,
    useGetCategoryBySlugQuery,
    useGetAllSubcategoriesQuery,
    useGetSubcategoryBySlugQuery,
    useGetSubcategoriesByCategorySlugQuery,
    useGetAllCollectionsQuery,
    useSearchAllQuery,
    useGetAllBrandsQuery,
    // useGetBrandsBySubcategorySlugQuery
} = apiSlice;
