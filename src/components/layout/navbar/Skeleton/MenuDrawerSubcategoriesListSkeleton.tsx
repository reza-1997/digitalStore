
'use client';

import { Box, Skeleton } from '@mui/material';

// Skeleton loader for subcategories list
export const SubcategoriesListSkeleton = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 1 }}>
            <Skeleton variant="rounded" width="100%" height={45} />
            <Skeleton variant="rounded" width="100%" height={45} />
        </Box>
    );
};