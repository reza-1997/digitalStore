'use client';

import { Box, Container, Skeleton } from '@mui/material';

export const MegaMenuSkeleton = () => {
    return (
        <Container maxWidth="xl" disableGutters>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    gap: 4,
                }}
            >
                {/* Left side: Subcategories accordion items skeleton */}
                <Box sx={{ width: 400, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {/* Category Title Skeleton */}
                    <Skeleton variant="text" width={140} height={32} sx={{ borderRadius: 1 }} />

                    {/* Subcategory Accordion Items Skeletons */}
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                p: 1.5,
                                borderRadius: 1,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                bgcolor: 'action.hover',
                            }}
                        >
                            <Skeleton variant="text" width="65%" height={24} />
                            <Skeleton variant="circular" width={20} height={20} />
                        </Box>
                    ))}
                </Box>

                {/* Right side: Banner image preview skeleton */}
                <Box>
                    <Skeleton
                        variant="rectangular"
                        sx={{
                            width: 600,
                            minHeight: 280,
                            borderRadius: 0.5,
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
};