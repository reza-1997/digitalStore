
import { Box, Typography } from '@mui/material';

import type { FooterDict } from '@/src/types';

import AppDownloadLinks from './AppDownloadLinks';

interface FooterInformationProps {
    dict: FooterDict['information'];
    isRtl: boolean;
}

const FooterInformation = ({
    dict,
    isRtl,
}: FooterInformationProps) => (
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

        <Typography
            variant="body2"
            sx={{
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.6,
                textAlign: isRtl ? 'right' : 'left',
            }}
        >
            {dict.welcome}
        </Typography>

        <AppDownloadLinks
            isRtl={isRtl}
            appStore={dict.appStore}
            googlePlay={dict.googlePlay}
        />
    </Box>
);

export default FooterInformation;
