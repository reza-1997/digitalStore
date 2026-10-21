'use client';

import { Box, Skeleton } from '@mui/material';

// Skeleton loader for brands list and their products
export const BrandsListSkeleton = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, py: 1 }}>
            {Array.from({ length: 2 }).map((_, index) => (
                <Box key={index} sx={{ py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
                    <Skeleton variant="text" width="40%" height={24} sx={{ mb: 1 }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, pl: 1 }}>
                        <Skeleton variant="rounded" width="100%" height={60} />
                        <Skeleton variant="rounded" width="100%" height={60} />
                    </Box>
                </Box>
            ))}
        </Box>
    );
};