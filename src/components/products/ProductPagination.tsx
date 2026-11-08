import {
    Box,
    Pagination,
    PaginationItem,
    type PaginationRenderItemParams,
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface ProductPaginationProps {
    page: number;
    count: number;
    onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
    lang: 'fa' | 'en';
}

export const ProductPagination = ({ page, count, onChange, lang }: ProductPaginationProps) => {

    const isRtl = lang === 'fa';

    const renderItem = (item: PaginationRenderItemParams) => (
        <PaginationItem
            {...item}
            slots={
                isRtl
                    ? {
                          previous: NavigateNextIcon,
                          next: NavigateBeforeIcon,
                      }
                    : undefined
            }
        />
    );

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
                dir={isRtl ? 'rtl' : 'ltr'}
                page={page}
                onChange={onChange}
                color="primary"
                size="large"
                shape="rounded"
                renderItem={renderItem}
            />
        </Box>
    );
};
