
import { Box, Typography } from '@mui/material';

import type { FooterDict } from '@/src/types';

interface FooterContactProps {
    dict: FooterDict['contact'];
    isRtl: boolean;
}

const FooterContact = ({ dict, isRtl }: FooterContactProps) => {
    const details = [
        { value: dict.storeName, strong: true },
        { value: dict.address },
        { value: dict.phone },
        { value: dict.email },
    ];

    return (
        <Box>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 700,
                    mb: 3,
                    textAlign: isRtl ? 'right' : 'left',
                    color: 'text.primary',
                }}
            >
                {dict.title}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {details.map(({ value, strong }, index) => (
                    <Typography
                        key={`${value}-${index}`}
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            fontWeight: strong ? 600 : 400,
                            textAlign: isRtl ? 'right' : 'left',
                        }}
                    >
                        {value}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default FooterContact;
