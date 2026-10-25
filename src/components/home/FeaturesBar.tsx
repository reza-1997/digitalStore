
'use client';

import { Box, Container, Typography } from '@mui/material';
import {
    LocalShippingOutlined as ShippingIcon,
    AutorenewOutlined as ReturnIcon,
    PaymentOutlined as PaymentIcon,
    CardGiftcardOutlined as GiftIcon,
    SupportAgentOutlined as SupportIcon,
} from '@mui/icons-material';

import type { FeaturesBarDict } from '@/src/types';

interface FeaturesBarProps {
    lang: 'fa' | 'en';
    dict: FeaturesBarDict;
}

export const FeaturesBar = ({ lang, dict }: FeaturesBarProps) => {
    const isRtl = lang === 'fa';

    const features = [
        {
            icon: ShippingIcon,
            title: dict.shipping.title,
            subtitle: dict.shipping.subtitle,
        },
        {
            icon: ReturnIcon,
            title: dict.returns.title,
            subtitle: dict.returns.subtitle,
        },
        {
            icon: PaymentIcon,
            title: dict.payment.title,
            subtitle: dict.payment.subtitle,
        },
        {
            icon: GiftIcon,
            title: dict.gifts.title,
            subtitle: dict.gifts.subtitle,
        },
        {
            icon: SupportIcon,
            title: dict.support.title,
            subtitle: dict.support.subtitle,
        },
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Box
                sx={{
                    border: '1.5px solid',
                    borderColor: 'primary.main',
                    borderRadius: 1,
                    pt: { xs: 3, md: 5 },
                    pb: { xs: 3, md: 2 },
                    px: { xs: 2, md: 4 },
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                }}
            >

                <Box
                    sx={{
                        overflowX: { xs: 'auto', lg: 'visible' },
                        overflowY: 'hidden',
                        mx: { xs: 0.5, md: 0 },
                        px: { xs: 1, md: 0 },
                        pb: 3,
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'thin',
                        '&::-webkit-scrollbar': {
                            height: 5,
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'transparent',
                            border: 'none',
                            boxShadow: 'none',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'action.disabled',
                            border: 'none',
                            borderRadius: 10,
                            boxShadow: 'none',
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: { xs: 'nowrap', lg: 'nowrap' },
                            alignItems: 'center',
                            justifyContent: { xs: 'flex-start', lg: 'space-between' },
                            gap: { xs: 3, lg: 2 },
                            width: { xs: 'max-content', lg: '100%' },
                        }}
                    >
                        {features.map((item, index) => {
                            const IconComponent = item.icon;

                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        flex: {
                                            xs: '0 0 260px',
                                            sm: '0 0 280px',
                                            md: '0 0 300px',
                                            lg: '1 1 0',
                                        },
                                        minWidth: 0,
                                        textAlign: isRtl ? 'right' : 'left',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: 'text.primary',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <IconComponent sx={{ fontSize: '2.5rem' }} />
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: '0.95rem',
                                                color: 'text.primary',
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {item.title}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 400,
                                                fontSize: '0.8rem',
                                                color: 'text.secondary',
                                                mt: 0.5,
                                            }}
                                        >
                                            {item.subtitle}
                                        </Typography>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>

            </Box>
        </Container>
    );
};
