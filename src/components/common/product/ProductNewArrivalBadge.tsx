import { Box } from '@mui/material';

interface ProductNewArrivalBadgeProps {
    label: string;
    size?: 'small' | 'medium';
}

export const ProductNewArrivalBadge = ({
    label,
    size = 'medium',
}: ProductNewArrivalBadgeProps) => {
    const isSmall = size === 'small';

    return (
        <Box
            className="new-arrival-badge"
            component="span"
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: isSmall ? 23 : 30,
                px: isSmall ? 0.8 : 1.25,
                borderRadius: isSmall ? 0.75 : 1,
                bgcolor: 'success.main',
                color: 'success.contrastText',
                fontSize: isSmall ? '0.7rem' : '0.8rem',
                fontWeight: isSmall ? 700 : 700,
                lineHeight: 1.4,
                whiteSpace: 'nowrap',
                opacity: 0,
                visibility: 'hidden',
                transform: 'translateY(-4px)',
                transition:
                    'opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease',

                '@media (max-width: 899.95px)': {
                    opacity: 1,
                    visibility: 'visible',
                    transform: 'translateY(0)',
                },

                '@media (hover: none), (pointer: coarse)': {
                    opacity: 1,
                    visibility: 'visible',
                    transform: 'translateY(0)',
                },
            }}
        >
            {label}
        </Box>
    );
};
