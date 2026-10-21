import { HeroBanner } from '@/src/components/home/HeroBanner';
import { getDictionary } from '@/src/lang/getDictionary';
import { Box, Container } from '@mui/material';

interface HomePageProps {
    params: Promise<{
        lang: 'fa' | 'en';
    }>;
}

const Home = async ({ params }: HomePageProps) => {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
            <Container maxWidth="xl" disableGutters>
                <HeroBanner dict={dict.heroBanner} lang={lang} />
            </Container>
        </Box>
    );
}

export default Home;