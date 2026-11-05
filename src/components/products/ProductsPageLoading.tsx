import { Box, Grid, Skeleton, Typography } from '@mui/material';

import { ProductCardSkeleton } from '@/src/components/common/product';

export const ProductsPageLoading = () => (
    <>
        <Box
            sx={{
                backgroundColor: 'background.default',
                py: 8,
                px: 3,
            }}
        >
            <Grid container spacing={4}>
                {/* Filters skeleton */}
                <Grid size={{ xs: 12, md: 3 }}>
                    <Box
                        sx={{
                            p: 3,
                            backgroundColor: 'background.paper',
                            borderRadius: 2,
                            height: 'fit-content',
                        }}
                    >
                        {Array.from({ length: 5 }, (_, index) => (
                            <Box key={index} sx={{ mb: 2 }}>
                                <Skeleton
                                    variant="rectangular"
                                    width="100%"
                                    height={48}
                                    sx={{ borderRadius: 1, mb: 1 }}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                    {Array.from({ length: 3 }, (_, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                            }}
                                        >
                                            <Skeleton variant="circular" width={20} height={20} />
                                            <Skeleton
                                                variant="text"
                                                width={index === 4 ? 60 : 100}
                                                height={20}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 9 }}>
                    {/* Sort and count skeleton */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 4,
                            flexWrap: 'wrap',
                            gap: 2,
                        }}
                    >
                        <Skeleton variant="text" width={120} height={24} />
                        <Skeleton variant="rectangular" width={150} height={36} sx={{ borderRadius: 1 }} />
                    </Box>

                    {/* Products skeleton */}
                    <Grid container spacing={3}>
                        {Array.from({ length: 8 }, (_, index) => (
                            <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                <ProductCardSkeleton />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </>
);
