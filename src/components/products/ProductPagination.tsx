import { Box, Pagination } from '@mui/material';

interface ProductPaginationProps {
    page: number;
    count: number;
    onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const ProductPagination = ({ page, count, onChange }: ProductPaginationProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 4,
            }}
        >
            <Pagination
                count={count}
                page={page}
                onChange={onChange}
                color="primary"
                size="large"
                shape="rounded"
            />
        </Box>
    );
};
