'use client';

import { Box, Skeleton } from '@mui/material';

export const SubcategoryAccordionSkeleton = () => {
    return (
        <Box sx={{ p: 1.5, display: 'flex', flexDirection: 'column', gap: 1.5 }}>

            {/* Nested Brand Skeletons (Simulating expanded state or items loading) */}
            <Box sx={{ pl: 3, display: 'flex', flexDirection: 'column', gap: 1 }}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton
                        key={index}
                        variant="text"
                        width={`${45 + index * 15}%`}
                        height={20}
                        sx={{ borderRadius: 1 }}
                    />
                ))}
            </Box>
        </Box>
    );
};