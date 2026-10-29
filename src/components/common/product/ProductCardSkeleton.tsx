'use client';

import { Box, Skeleton } from '@mui/material';

/**
 * ProductCardSkeleton Component
 * Renders a loading placeholder mirroring the precise layout of the ProductCard.
 */
export const ProductCardSkeleton = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                minWidth: 0,
                height: '100%',
                minHeight: 420,
                borderColor: 'divider',
                borderRadius: 1,
                overflow: 'hidden',
                bgcolor: 'background.paper',
            }}
        >
            {/* Product image placeholder */}
            <Skeleton
                variant="rectangular"
                width="100%"
                height={250}
                sx={{ flexShrink: 0 }}
            />

            {/* Product information placeholder */}
            <Box
                sx={{
                    p: { xs: 1.5, sm: 2 },
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    gap: 1.5,
                }}
            >
                {/* Brand placeholder */}
                <Skeleton variant="text" width="40%" height={20} />

                {/* Product title placeholder (2 lines) */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <Skeleton variant="text" width="100%" height={24} />
                    <Skeleton variant="text" width="70%" height={24} />
                </Box>

                {/* Rating placeholder */}
                <Skeleton variant="text" width="50%" height={22} />

                {/* Prices placeholder */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        mt: 'auto',
                    }}
                >
                    <Skeleton variant="text" width="35%" height={28} />
                    <Skeleton variant="text" width="25%" height={20} />
                </Box>
            </Box>
        </Box>
    );
};