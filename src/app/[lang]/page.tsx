import { BrandSlider } from '@/src/components/home/BrandSlider';
import { CategoryBannerProducts } from '@/src/components/home/CategoryBannerProducts';
import { FeaturedProductsSlider } from '@/src/components/home/FeaturedProducts';
import { FeaturesBar } from '@/src/components/home/FeaturesBar';
import { HeroBanner } from '@/src/components/home/HeroBanner';
import { NewArrivalsSlider } from '@/src/components/home/NewArrivalsSlider';
import { OverEarBanner } from '@/src/components/home/OverEarBanner';
import { PromoBannersGrid } from '@/src/components/home/PromoBannersGrid';
import { SmartphoneBanner } from '@/src/components/home/SmartphoneBanner';
import { TopDiscountedProducts } from '@/src/components/home/TopDiscountedProducts';
import { TestimonialSlider } from '@/src/components/common/testimonial';
import { TESTIMONIALS } from '@/src/data/testimonials';
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
                <HeroBanner dict={dict} lang={lang} />
                <BrandSlider lang={lang} />
                <FeaturedProductsSlider dict={dict} lang={lang} />
                <FeaturesBar lang={lang} dict={dict} />
                <CategoryBannerProducts dict={dict} lang={lang} />
                <OverEarBanner dict={dict} lang={lang} />
                <NewArrivalsSlider dict={dict} lang={lang} />
                <PromoBannersGrid dict={dict} lang={lang} />
                <TopDiscountedProducts dict={dict} lang={lang} />
                <SmartphoneBanner dict={dict} lang={lang} />
                <TestimonialSlider dict={dict} lang={lang} testimonials={TESTIMONIALS} />
            </Container>
        </Box>
    );
}

export default Home;