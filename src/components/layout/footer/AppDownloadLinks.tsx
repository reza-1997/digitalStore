
import { Box, Button } from '@mui/material';
import {
    Apple as AppleIcon,
    Android as AndroidIcon,
} from '@mui/icons-material';

import { APP_BUTTON_SX } from './footer.constants';

interface AppDownloadLinksProps {
    isRtl: boolean;
    appStore: string;
    googlePlay: string;
}

const AppDownloadLinks = ({
    isRtl,
    appStore,
    googlePlay,
}: AppDownloadLinksProps) => {
    const apps = [
        { label: appStore, Icon: AppleIcon },
        { label: googlePlay, Icon: AndroidIcon },
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {apps.map(({ label, Icon }) => (
                <Button
                    key={label}
                    startIcon={!isRtl && <Icon />}
                    endIcon={isRtl && <Icon />}
                    sx={APP_BUTTON_SX}
                >
                    {label}
                </Button>
            ))}
        </Box>
    );
};

export default AppDownloadLinks;
