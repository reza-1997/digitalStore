
import { Box } from '@mui/material';

import type { Dictionary } from '@/src/lang/dictionary';

import NewsletterSection from './NewsletterSection';
import FooterMainSection from './FooterMainSection';
import FooterBottom from './FooterBottom';

interface FooterProps {
    lang: 'fa' | 'en';
    dict: Dictionary;
}

const Footer = ({ lang, dict: dictionary }: FooterProps) => {
    const isRtl = lang === 'fa';

    return (
        <Box component="footer" sx={{ width: '100%' }}>
            <NewsletterSection
                dict={dictionary}
                isRtl={isRtl}
            />

            <FooterMainSection
                dict={dictionary}
                isRtl={isRtl}
            />

            <FooterBottom
                dict={dictionary}
                isRtl={isRtl}
            />
        </Box>
    );
};

export default Footer;
