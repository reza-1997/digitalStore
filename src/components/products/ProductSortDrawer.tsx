'use client';

import {
    Box,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export interface SortOption {
    value: string;
    label: string;
}

interface ProductSortDrawerProps {
    open: boolean;
    onClose: () => void;
    isRtl: boolean;
    title: string;
    options: SortOption[];
    value: string;
    onSelect: (value: string) => void;
}

export const ProductSortDrawer = ({
    open,
    onClose,
    isRtl,
    title,
    options,
    value,
    onSelect,
}: ProductSortDrawerProps) => (
    <Drawer
        anchor="bottom"
        open={open}
        onClose={onClose}
        slotProps={{
            paper: {
                sx: {
                    borderRadius: '20px 20px 0 0',
                    maxHeight: '70vh',
                    overflowY: 'auto',
                },
            },
        }}
    >
        <Box
            aria-hidden="true"
            sx={{
                width: 40,
                height: 4,
                borderRadius: 2,
                bgcolor: 'grey.300',
                mx: 'auto',
                mt: 1.5,
                mb: 0.5,
            }}
        />
        <Typography
            variant="subtitle1"
            sx={{
                fontWeight: 700,
                px: 2,
                py: 1.5,
                textAlign: isRtl ? 'right' : 'left',
            }}
        >
            {title}
        </Typography>
        <Divider />
        <List disablePadding>
            {options.map((option) => (
                <ListItemButton
                    key={option.value}
                    selected={value === option.value}
                    onClick={() => onSelect(option.value)}
                >
                    <ListItemText primary={option.label} />
                    {value === option.value && (
                        <CheckIcon color="primary" fontSize="small" />
                    )}
                </ListItemButton>
            ))}
        </List>
    </Drawer>
);
