import { Box, IconButton, Tooltip } from '@mui/material';
import type { ProductCardAction } from '@/src/utils/productCardActions';
import type { Product } from '@/src/types';

interface ProductActionButtonsProps {
    actions: ProductCardAction[];
    product: Product;
    isRtl: boolean;
    placement?: 'left' | 'right';
    buttonSize?: 'small' | 'medium';
    iconSize?: number | { xs: number; sm: number; md: number };
    position?: 'top-left' | 'top-right';
}

export const ProductActionButtons = ({
    actions,
    product,
    isRtl,
    placement = 'right',
    buttonSize = 'medium',
    iconSize = { xs: 17, sm: 17, md: 21 },
    position = 'top-right',
}: ProductActionButtonsProps) => {
    const isSmall = buttonSize === 'small';
    const isTopLeft = position === 'top-left';

    return (
        <Box
            className="action-buttons"
            sx={{
                position: 'absolute',
                top: isSmall ? 8 : 12,
                [isRtl ? 'left' : 'right']: isSmall ? 5 : 12,
                [isRtl ? 'right' : 'left']: isTopLeft ? (isSmall ? 8 : 12) : 'auto',
                zIndex: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: isSmall ? 0.5 : 1,
                opacity: { xs: 1, sm: 1, md: 0 },
                visibility: {
                    xs: 'visible',
                    sm: 'visible',
                    md: 'hidden',
                },
                transform: {
                    xs: 'none',
                    sm: 'none',
                    md: `translateX(${isRtl ? (isSmall ? '-8px' : '-12px') : (isSmall ? '8px' : '12px')})`,
                },
                transition:
                    'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease',

                '@media (hover: hover) and (pointer: fine)': {
                    '&:hover': {
                        opacity: 1,
                        visibility: 'visible',
                        transform: 'translateX(0)',
                    },
                },

                '@media (hover: none), (pointer: coarse)': {
                    opacity: 1,
                    visibility: 'visible',
                    transform: 'none',
                },
            }}
        >
            {actions.map(({ label, Icon, onClick }) => (
                <Tooltip
                    key={label}
                    title={label}
                    placement={isRtl ? (placement === 'left' ? 'right' : 'left') : placement}
                >
                    <IconButton
                        size={buttonSize}
                        aria-label={label}
                        onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            onClick?.(product);
                        }}
                        sx={{
                            width: isSmall ? { xs: 30, sm: 30, md: 40 } : undefined,
                            height: isSmall ? { xs: 30, sm: 30, md: 40 } : undefined,
                            bgcolor: 'background.paper',
                            color: 'text.primary',
                            boxShadow: isSmall ? '0 2px 8px rgba(0,0,0,0.12)' : '0 3px 10px rgba(0,0,0,0.12)',
                            p: isSmall ? undefined : 1.2,
                            flexShrink: 0,

                            '&:hover': {
                                bgcolor: 'text.primary',
                                color: 'background.paper',
                            },
                        }}
                    >
                        <Icon
                            fontSize={isSmall ? undefined : 'small'}
                            sx={isSmall ? { fontSize: iconSize } : undefined}
                        />
                    </IconButton>
                </Tooltip>
            ))}
        </Box>
    );
};
