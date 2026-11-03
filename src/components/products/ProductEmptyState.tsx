'use client';

import { Box, Typography } from '@mui/material';

interface ProductEmptyStateProps {
    message: string;
    isRtl: boolean;
}

export const ProductEmptyState = ({
    message,
    isRtl,
}: ProductEmptyStateProps) => (
    <Box
        sx={{
            minHeight: 320,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: isRtl ? 'right' : 'left',
        }}
    >
        <Typography variant="h6" color="text.secondary">
            {message}
        </Typography>
    </Box>
);
