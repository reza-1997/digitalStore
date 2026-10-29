'use client';

import { Box, Skeleton } from '@mui/material';

export const ProductCardHorizontalSkeleton = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                width: '100%',
                height: { xs: 180, sm: 190, lg: 195 },
                bgcolor: 'background.paper',
                borderRadius: 1,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
            }}
        >
            {/* Image Skeleton (Left side) */}
            <Box
                sx={{
                    flex: '0 0 42%',
                    width: '42%',
                    height: '100%',
                }}
            >
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    animation="wave"
                />
            </Box>

            {/* Content Skeleton (Right side) */}
            <Box
                sx={{
                    flex: '1 1 58%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: { xs: 1.25, sm: 1.75 },
                    gap: 1.2,
                }}
            >
                {/* Brand skeleton */}
                <Skeleton variant="text" width="35%" height={16} animation="wave" />

                {/* Title skeleton (2 lines) */}
                <Skeleton variant="text" width="90%" height={20} animation="wave" />
                <Skeleton variant="text" width="65%" height={20} animation="wave" />

                {/* Rating skeleton */}
                <Skeleton variant="text" width="45%" height={18} animation="wave" />

                {/* Price skeleton */}
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                    <Skeleton variant="text" width="30%" height={24} animation="wave" />
                    <Skeleton variant="text" width="20%" height={20} animation="wave" />
                </Box>
            </Box>
        </Box>
    );
};