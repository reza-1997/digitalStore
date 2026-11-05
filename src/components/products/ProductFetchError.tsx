'use client';

import { Box, Button, Typography } from '@mui/material';

interface ProductFetchErrorProps {
    message: string;
    retryLabel: string;
    onRetry: () => void;
    isRtl: boolean;
}

export const ProductFetchError = ({
    message,
    retryLabel,
    onRetry,
    isRtl,
}: ProductFetchErrorProps) => (
    <Box
        role="alert"
        sx={{
            minHeight: 320,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            textAlign: 'center',
        }}
    >
        <Typography variant="h6" sx={{ color: 'error.main' }}>
            {message}
        </Typography>
        <Button
            variant="contained"
            onClick={onRetry}
            sx={{ textTransform: 'none' }}
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            {retryLabel}
        </Button>
    </Box>
);
