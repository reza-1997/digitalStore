import { Box, Container, Typography, Button } from '@mui/material';

export default function NotFound() {
    return (
        <Box
            component="section"
            sx={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundColor: 'background.default',
                py: 8,
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 800,
                        fontSize: { xs: '5rem', md: '7rem' },
                        color: 'secondary.main',
                        mb: 1,
                        lineHeight: 1,
                    }}
                >
                    404
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    Page Not Found / صفحه مورد نظر پیدا نشد
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </Typography>

                <Button
                    variant="contained"
                    href="/"
                    sx={{
                        px: 4,
                        py: 1.5,
                        fontWeight: 600,
                        borderRadius: 2,
                    }}
                >
                    Back to Home / بازگشت به صفحه اصلی
                </Button>
            </Container>
        </Box>
    );
}