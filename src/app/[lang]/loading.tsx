import { Box, Container, Skeleton } from '@mui/material';

export default function Loading() {
    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', py: 8 }}>
            <Container maxWidth="xl">
                {/* Skeleton for Header or Hero title */}
                <Skeleton variant="text" width="40%" height={60} sx={{ mb: 2 }} />
                <Skeleton variant="text" width="60%" height={30} sx={{ mb: 4 }} />

                {/* Skeleton for content cards */}
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
                    <Skeleton variant="rectangular" height={300} sx={{ borderRadius: 3 }} />
                    <Skeleton variant="rectangular" height={300} sx={{ borderRadius: 3 }} />
                    <Skeleton variant="rectangular" height={300} sx={{ borderRadius: 3 }} />
                </Box>
            </Container>
        </Box>
    );
}