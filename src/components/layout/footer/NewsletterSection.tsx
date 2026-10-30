
'use client';

import { useState } from 'react';

import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
} from '@mui/material';

import type { FooterDict } from '@/src/types';

import { NEWSLETTER_FIELD_SX } from './footer.constants';

interface NewsletterSectionProps {
    dict: FooterDict['newsletter'];
    isRtl: boolean;
}

const NewsletterSection = ({
    dict,
    isRtl,
}: NewsletterSectionProps) => {
    const [email, setEmail] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubscribe = () => {
        console.log('Subscribed:', email);
        setEmail('');
        setTermsAccepted(false);
    };

    return (
        <Box sx={{ backgroundColor: 'secondary.dark', py: 6, px: 3 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4} sx={{ alignItems: "center" }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: 'secondary.contrastText',
                                fontWeight: 800,
                                mb: 2,
                                textAlign: isRtl ? 'right' : 'left',
                            }}
                        >
                            {dict.title}
                        </Typography>

                        <Typography
                            sx={{
                                color: 'secondary.contrastText',
                                opacity: 0.9,
                                textAlign: isRtl ? 'right' : 'left',
                            }}
                        >
                            {dict.subtitle}
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                maxWidth: 500,
                                ml: isRtl ? 'auto' : 0,
                                mr: isRtl ? 0 : 'auto',
                            }}
                        >
                            <TextField
                                fullWidth
                                type="email"
                                placeholder={dict.emailPlaceholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={NEWSLETTER_FIELD_SX}
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    flexWrap: 'wrap',
                                }}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={termsAccepted}
                                            onChange={(e) =>
                                                setTermsAccepted(e.target.checked)
                                            }
                                            sx={{
                                                color: 'secondary.contrastText',
                                                '&.Mui-checked': {
                                                    color: 'secondary.contrastText',
                                                },
                                            }}
                                        />
                                    }
                                    label={dict.termsLabel}
                                    sx={{
                                        color: 'secondary.contrastText',
                                        '& .MuiTypography-root': {
                                            fontSize: '0.875rem',
                                        },
                                    }}
                                />

                                <Button
                                    variant="contained"
                                    onClick={handleSubscribe}
                                    disabled={!termsAccepted || !email.trim()}
                                    sx={{
                                        backgroundColor: 'secondary.contrastText',
                                        color: 'secondary.dark',
                                        fontWeight: 700,
                                        px: 4,
                                        py: 1.2,
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255,255,255,0.9)',
                                        },
                                        '&:disabled': {
                                            backgroundColor: 'rgba(255,255,255,0.3)',
                                            color: 'rgba(0,0,0,0.3)',
                                        },
                                    }}
                                >
                                    {dict.subscribeButton}
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsletterSection;
