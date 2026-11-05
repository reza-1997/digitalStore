import { Box, Skeleton } from '@mui/material';

export const CategoryHeroSliderSkeleton = () => (
    <Box
        sx={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
        }}
    >
        <Skeleton
            variant="rectangular"
            width="100%"
            height={250}
            sx={{
                borderRadius: 0,
            }}
        />
    </Box>
);
