import Link from 'next/link';
import {
    Box,
    Typography,
} from '@mui/material';

import { FOOTER_LINK_SX } from './footer.constants';

interface FooterLinkColumnProps {
    title: string;
    links: string[];
    isRtl: boolean;
}

const FooterLinkColumn = ({
    title,
    links,
    isRtl,
}: FooterLinkColumnProps) => {
    return (
        <Box>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 700,
                    mb: 2,
                    textAlign: isRtl ? 'right' : 'left',
                }}
            >
                {title}
            </Typography>

            <Box
                component="ul"
                sx={{
                    listStyle: 'none',
                    p: 0,
                    m: 0,
                }}
            >
                {links.map((item, index) => (
                    <Box
                        component="li"
                        key={`${item}-${index}`}
                        sx={{ mb: 1 }}
                    >
                        <Link
                            href="#"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                            }}
                        >
                            <Typography
                                sx={FOOTER_LINK_SX}
                            >
                                {item}
                            </Typography>
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default FooterLinkColumn;