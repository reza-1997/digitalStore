import { Breadcrumbs as MuiBreadcrumbs, Typography, Link } from '@mui/material';
import NextLink from 'next/link';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    lang: 'fa' | 'en';
    items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {

    return (
        <MuiBreadcrumbs
            aria-label="breadcrumb"
            sx={{
                color: 'common.white',
                '& .MuiBreadcrumbs-separator': {
                    color: 'common.white',
                },
            }}
        >
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                if (isLast) {
                    return (
                        <Typography
                            key={item.label}
                            color="common.white"
                            sx={{
                                fontWeight: 600,
                            }}
                        >
                            {item.label}
                        </Typography>
                    );
                }

                return (
                    <Link
                        key={item.label}
                        component={NextLink}
                        href={item.href || '/'}
                        underline="hover"
                        sx={{
                            color: 'common.white',
                            opacity: 0.9,
                            '&:hover': {
                                opacity: 1,
                            },
                        }}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </MuiBreadcrumbs>
    );
};
