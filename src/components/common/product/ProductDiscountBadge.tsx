import { Box } from '@mui/material';
import CustomNumeralNumericFormat from '@/src/utils/CustomNumeralNumericFormat';

interface ProductDiscountBadgeProps {
    discountPercent: number;
    size?: 'small' | 'medium';
}

export const ProductDiscountBadge = ({
    discountPercent,
    size = 'medium',
}: ProductDiscountBadgeProps) => {
    const isSmall = size === 'small';

    return (
        <Box
            component="span"
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: isSmall ? 23 : 30,
                px: isSmall ? 0.8 : 1.25,
                borderRadius: isSmall ? 0.75 : 1,
                bgcolor: '#e53935',
                color: '#fff',
                fontSize: isSmall ? '0.7rem' : '0.8rem',
                fontWeight: 800,
                lineHeight: 1.4,
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(229,57,53,0.2)',
            }}
        >
            <CustomNumeralNumericFormat
                value={discountPercent}
                prefix={isSmall ? '  - ' : ' - '}
                suffix="%"
                dir="ltr"
            />
        </Box>
    );
};
