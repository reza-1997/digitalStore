'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
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

    const theme = useTheme();

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
                    py: 5,
                    px: { xs: 2, md: 4 },
                    bgcolor: 'background.paper',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 3,
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
                                flex: { xs: '1 1 100%', sm: '1 1 45%', lg: '1 1 18%' },
                                minWidth: 200,
                                textAlign: isRtl ? 'right' : 'left',
                            }}
                        >
                            <Box
                                sx={{
                                    color: 'text.primary',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.5rem',
                                    flexShrink: 0,
                                }}
                            >
                                <IconComponent sx={{ fontSize: '2.5rem', stroke: 'currentColor', strokeWidth: 0.1 }} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
        </Container>
    );
};