import { Box, Checkbox, Typography } from '@mui/material';

import type { FilterOption } from './filterTypes';

export const FilterOptionList = ({
    options,
    isRtl,
}: {
    options: FilterOption[];
    isRtl: boolean;
}) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {options.map((option) => (
            <Box
                key={option.key}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: isRtl ? 'row-reverse' : 'row',
                        gap: 1,
                    }}
                >
                    <Checkbox
                        checked={option.checked}
                        onChange={option.onToggle}
                    />
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            cursor: 'pointer',
                            userSelect: 'none',
                            transition: 'color 0.2s ease',
                            '&:hover': {
                                color: 'secondary.dark',
                            },
                        }}
                        onClick={option.onToggle}
                    >
                        {option.label}
                    </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                    ({option.count})
                </Typography>
            </Box>
        ))}
    </Box>
);
