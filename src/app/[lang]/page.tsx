import { BrandSlider } from '@/src/components/home/BrandSlider';
import { CategoryBannerProducts } from '@/src/components/home/CategoryBannerProducts';
import { FeaturedProductsSlider } from '@/src/components/home/FeaturedProducts';
import { FeaturesBar } from '@/src/components/home/FeaturesBar';
import { HeroBanner } from '@/src/components/home/HeroBanner';
import { NewArrivalsSlider } from '@/src/components/home/NewArrivalsSlider';
import { OverEarBanner } from '@/src/components/home/OverEarBanner';
import { PromoBannersGrid } from '@/src/components/home/PromoBannersGrid';
import { TopDiscountedProducts } from '@/src/components/home/TopDiscountedProducts';
import { getDictionary, hasLocale } from '@/src/lang/getDictionary';
import { Box, Container } from '@mui/material';
import { notFound } from 'next/navigation';

const Home = async ({ params }: PageProps<'/[lang]'>) => {
    const { lang } = await params;
    if (!hasLocale(lang)) notFound();

    const dict = await getDictionary(lang);

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
            <Container maxWidth="xl" disableGutters>
                <HeroBanner dict={dict.heroBanner} lang={lang} />
                <BrandSlider lang={lang} />
                <FeaturedProductsSlider dict={dict.productCard} lang={lang} />
                <FeaturesBar lang={lang} dict={dict.featuresBar} />
                <CategoryBannerProducts dict={dict.categoryBannerProducts} lang={lang} dictProductCard={dict.productCard} />
                <OverEarBanner dict={dict.overEarBanner} lang={lang} />
                <NewArrivalsSlider dict={dict.productCard} lang={lang} />
                <PromoBannersGrid dict={dict.promoBanners} lang={lang} />
                <TopDiscountedProducts dict={dict.productCard} lang={lang} />
            </Container>
        </Box>
    );
}

export default Home;