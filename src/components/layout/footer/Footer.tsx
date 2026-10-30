
import { Box } from '@mui/material';

import type { FooterDict } from '@/src/types';

import NewsletterSection from './NewsletterSection';
import FooterMainSection from './FooterMainSection';
import FooterBottom from './FooterBottom';

interface FooterProps {
    lang: 'fa' | 'en';
    dict: FooterDict;
}

const Footer = ({ lang, dict }: FooterProps) => {
    const isRtl = lang === 'fa';

    return (
        <Box component="footer" sx={{ width: '100%' }}>
            <NewsletterSection
                dict={dict.newsletter}
                isRtl={isRtl}
            />

            <FooterMainSection
                dict={dict}
                isRtl={isRtl}
            />

            <FooterBottom
                dict={dict.social}
                isRtl={isRtl}
            />
        </Box>
    );
};

export default Footer;
