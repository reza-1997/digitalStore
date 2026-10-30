import { Box, Rating, Typography } from '@mui/material';
import CustomNumeralNumericFormat from '@/src/utils/CustomNumeralNumericFormat';

interface ProductRatingProps {
    rating: number;
    reviewsCount?: number;
    isRtl: boolean;
    showRatingValue?: boolean;
    size?: 'small' | 'medium';
}

export const ProductRating = ({
    rating,
    reviewsCount,
    isRtl,
    showRatingValue = true,
    size = 'medium',
}: ProductRatingProps) => {
    const isSmall = size === 'small';

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                gap: isSmall ? 0.4 : 0.75,
                direction: isRtl ? 'rtl' : 'ltr',
                mt: isSmall ? 0.25 : 0,
                minWidth: 0,
            }}
        >
            <Rating
                value={Number(rating) || 0}
                precision={0.1}
                readOnly
                size={isSmall ? 'small' : 'small'}
                sx={{
                    fontSize: isSmall
                        ? { xs: '0.85rem', sm: '0.80rem', md: '1rem' }
                        : '1.1rem',
                    color: '#f5a623',
                    '& .MuiRating-iconEmpty': {
                        color: 'action.disabled',
                    },
                }}
            />

            {showRatingValue && (
                <Typography
                    component="span"
                    sx={{
                        fontSize: isSmall ? '0.72rem' : '0.82rem',
                        fontWeight: isSmall ? 400 : 700,
                        color: isSmall ? 'text.secondary' : 'text.primary',
                        fontVariantNumeric: 'tabular-nums',
                        whiteSpace: 'nowrap',
                        mr: isSmall ? 0 : (isRtl ? 1.5 : 0),
                    }}
                >
                    <CustomNumeralNumericFormat value={rating} />
                </Typography>
            )}

            {reviewsCount != null && (
                <Typography
                    component="span"
                    sx={{
                        fontSize: isSmall ? '0.72rem' : '0.8rem',
                        color: 'text.secondary',
                        fontVariantNumeric: 'tabular-nums',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <CustomNumeralNumericFormat
                        prefix="("
                        suffix=")"
                        value={reviewsCount}
                    />
                </Typography>
            )}
        </Box>
    );
};
