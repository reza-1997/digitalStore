
import { Box, Container, Grid } from '@mui/material';

import type { FooterDict } from '@/src/types';

import FooterInformation from './FooterInformation';
import FooterLinkColumn from './FooterLinkColumn';
import FooterContact from './FooterContact';

interface FooterMainSectionProps {
    dict: FooterDict;
    isRtl: boolean;
}

const FooterMainSection = ({
    dict,
    isRtl,
}: FooterMainSectionProps) => {
    const linkColumns = [
        {
            key: 'products',
            title: dict.products.title,
            links: [
                dict.products.pricesDrop,
                dict.products.newProducts,
                dict.products.bestSellers,
                dict.products.sitemap,
                dict.products.stores,
            ],
        },
        {
            key: 'company',
            title: dict.company.title,
            links: [
                dict.company.delivery,
                dict.company.legalNotice,
                dict.company.terms,
                dict.company.securePayment,
                dict.company.contactUs,
                dict.company.aboutUs,
            ],
        },
        {
            key: 'account',
            title: dict.account.title,
            links: [
                dict.account.orderTracking,
                dict.account.signIn,
                dict.account.createAccount,
                dict.account.discount,
                dict.account.wishlist,
            ],
        },
    ];

    return (
        <Box sx={{ backgroundColor: 'background.default', py: 8, px: 3 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <FooterInformation
                            dict={dict.information}
                            isRtl={isRtl}
                        />
                    </Grid>

                    {linkColumns.map(({ key, title, links }) => (
                        <Grid
                            key={key}
                            size={{ xs: 12, sm: 6, md: 2 }}
                        >
                            <FooterLinkColumn
                                title={title}
                                links={links}
                                isRtl={isRtl}
                            />
                        </Grid>
                    ))}

                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FooterContact
                            dict={dict.contact}
                            isRtl={isRtl}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FooterMainSection;
