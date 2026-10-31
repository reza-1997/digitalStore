import { ProductsPage } from '@/src/components/products/ProductsPage';
import { CATEGORIES } from '@/src/data/mockData';
import { PRODUCTS } from '@/src/data/dataProducts';

interface ProductsPageParams {
    params: Promise<{
        lang: 'fa' | 'en';
    }>;
}

export default async function Page({ params }: ProductsPageParams) {
    const { lang } = await params;

    // Import dictionaries based on language
    const dict = require(`@/src/lang/${lang}.json`).productsPage;
    const productCardDict = require(`@/src/lang/${lang}.json`).productCard;

    return (
        <ProductsPage
            lang={lang}
            dict={dict}
            productCardDict={productCardDict}
            categories={CATEGORIES}
            products={PRODUCTS}
        />
    );
}
