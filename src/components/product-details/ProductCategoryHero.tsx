'use client';

import { Box, Container } from '@mui/material';

import { Breadcrumbs } from '@/src/components/common';

interface ProductCategoryHeroProps {
    lang: 'fa' | 'en';
    image?: string;
    breadcrumbs: Array<{ label: string; href?: string }>;
}

export const ProductCategoryHero = ({
    lang,
    image,
    breadcrumbs,
}: ProductCategoryHeroProps) => {
    const isRtl = lang === 'fa';

    return (
        <Box
            sx={{
                width: '100vw',
                position: 'relative',
                ...(isRtl
                    ? { right: 0, left: 'auto', transform: 'none' }
                    : { left: '50%', transform: 'translateX(-50%)' }),
                py: 0,
                marginTop: '-64px',
                zIndex: 1,
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 250, md: 300 },
                    overflow: 'hidden',
                }}
            >
                {image && (
                    <Box
                        component="img"
                        src={image}
                        alt=""
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />
                )}

                {/* Gradient Overlay */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.9) 90%)',
                    }}
                />

                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        left: 0,
                        height: '38%',
                        zIndex: 1,
                        pointerEvents: 'none',
                        background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.48), rgba(0,0,0,0))',
                    }}
                />
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        left: 0,
                        height: '42%',
                        zIndex: 1,
                        pointerEvents: 'none',
                        background:
                            'linear-gradient(to top, rgba(0,0,0,0.58), rgba(0,0,0,0))',
                    }}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        left: 0,
                        zIndex: 3,
                        py: 2,
                        background:
                            'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0))',
                    }}
                >
                    <Container maxWidth="xl">
                        <Breadcrumbs
                            lang={lang}
                            items={breadcrumbs}
                        />
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};
