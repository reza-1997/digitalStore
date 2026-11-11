import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Box, Container } from '@mui/material';

import { PRODUCTS } from '@/src/data/dataProducts';
import { CATEGORIES, SUBCATEGORIES } from '@/src/data/mockData';
import en from '@/src/lang/en.json';
import fa from '@/src/lang/fa.json';
import { getProductListingHref } from '@/src/utils/productLinks';
import { CategoryHero } from '@/src/components/common';
import { ProductDetailsSection } from '@/src/components/product-details';

interface ProductPageParams {
    params: Promise<{
        lang: 'fa' | 'en';
        slug: string;
    }>;
}

export default function Page({ params }: ProductPageParams) {
    return (
        <Suspense
            fallback={
                <Box sx={{ minHeight: '70vh', backgroundColor: 'background.default' }} />
            }
        >
            <ProductDetailsPage params={params} />
        </Suspense>
    );
}

async function ProductDetailsPage({ params }: ProductPageParams) {
    const { lang, slug } = await params;
    const dictionary = lang === 'fa' ? fa : en;

    const product = PRODUCTS.find((item) => item.slug === slug);
    if (!product) {
        notFound();
    }

    const category = CATEGORIES.find(
        (item) => item.slug === product.categorySlug
    );
    const subcategory = SUBCATEGORIES.find(
        (item) => item.slug === product.subcategorySlug
    );

    const breadcrumbs = [
        {
            label: dictionary.productsPage.breadcrumbs.home,
            href: `/${lang}`,
        },
        {
            label: dictionary.productsPage.breadcrumbs.products,
            href: `/${lang}/products`,
        },
        ...(category
            ? [
                  {
                      label: category.name[lang],
                      href: getProductListingHref(lang, {
                          category: category.slug,
                      }),
                  },
              ]
            : []),
        ...(subcategory
            ? [
                  {
                      label: subcategory.name[lang],
                      href: getProductListingHref(lang, {
                          category: product.categorySlug,
                          subcategory: subcategory.slug,
                      }),
                  },
              ]
            : []),
        { label: product.title[lang] },
    ];

    const heroImage =
        subcategory?.image || category?.image?.[0] || undefined;

    return (
        <Box sx={{ backgroundColor: 'background.default' }}>
            <CategoryHero
                variant="static"
                lang={lang}
                image={heroImage}
                breadcrumbs={breadcrumbs}
                breadcrumbsSx={{
                    '& .MuiTypography-root, & .MuiLink-root, & .MuiBreadcrumbs-separator':
                    {
                        fontSize: { xs: '0.85rem', sm: '1rem' },
                    },
                }}
            />
            <Container
                maxWidth="xl"
                sx={{ py: { xs: 3, md: 5 } }}
            >
                <ProductDetailsSection
                    product={product}
                    lang={lang}
                    dict={dictionary}
                />
            </Container>
        </Box>
    );
}
