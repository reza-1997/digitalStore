
import { Box, IconButton } from '@mui/material';

import { SOCIAL_LINKS, SOCIAL_ICON_SX } from './footer.constants';

interface SocialLinksProps {
    isRtl: boolean;
}

const SocialLinks = ({ isRtl }: SocialLinksProps) => (
    <Box
        sx={{
            display: 'flex',
            gap: 1.5,
            justifyContent: isRtl ? 'flex-end' : 'flex-start',
        }}
    >
        {SOCIAL_LINKS.map(({ name, Icon }) => (
            <IconButton
                key={name}
                aria-label={name}
                sx={SOCIAL_ICON_SX}
            >
                <Icon />
            </IconButton>
        ))}
    </Box>
);

export default SocialLinks;
