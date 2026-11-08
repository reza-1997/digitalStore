
import { Box, Typography } from '@mui/material';

import type { Dictionary } from '@/src/lang/dictionary';

import AppDownloadLinks from './AppDownloadLinks';

interface FooterInformationProps {
    dict: Dictionary;
    isRtl: boolean;
}

const FooterInformation = ({
    dict: dictionary,
    isRtl,
}: FooterInformationProps) => {
    const dict = dictionary.footer.information;
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
};

export default FooterInformation;
