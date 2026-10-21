'use client';

import { Box, Skeleton } from '@mui/material';

export const NavbarSkeleton = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
            }}
        >
            {/* Category Items Skeletons */}
            {Array.from({ length: 5 }).map((_, index) => (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                    }}
                >
                    <Skeleton
                        variant="text"
                        width={80}
                        height={24}
                        sx={{ borderRadius: 1 }}
                    />
                    <Skeleton
                        variant="circular"
                        width={16}
                        height={16}
                    />
                </Box>
            ))}
        </Box>
    );
};