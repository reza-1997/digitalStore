import { Suspense } from 'react';
import { Box, Container } from '@mui/material';

import { ProductsPage } from '@/src/components/products/ProductsPage';
import { ProductsPageLoading } from '@/src/components/products/ProductsPageLoading';
import en from '@/src/lang/en.json';
import fa from '@/src/lang/fa.json';

interface ProductsPageParams {
    params: Promise<{
        lang: 'fa' | 'en';
    }>;
}

export default async function Page({ params }: ProductsPageParams) {
    const { lang } = await params;
    const dictionary = lang === 'fa' ? fa : en;

    return (
        <Suspense
            fallback={
                <Box sx={{ backgroundColor: 'background.default', py: 8, px: 3 }}>
                    <Container maxWidth="xl">
                        <ProductsPageLoading />
                    </Container>
                </Box>
            }
        >
            <ProductsPage
                lang={lang}
                dict={dictionary.productsPage}
                productCardDict={dictionary.productCard}
            />
        </Suspense>
    );
}
