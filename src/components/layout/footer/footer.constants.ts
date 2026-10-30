
import {
    Facebook as FacebookIcon,
    YouTube as YouTubeIcon,
    X as XIcon,
    Instagram as InstagramIcon,
    Pinterest as PinterestIcon,
} from '@mui/icons-material';

export const SOCIAL_LINKS = [
    { name: 'Facebook', Icon: FacebookIcon },
    { name: 'YouTube', Icon: YouTubeIcon },
    { name: 'X', Icon: XIcon },
    { name: 'Instagram', Icon: InstagramIcon },
    { name: 'Pinterest', Icon: PinterestIcon },
];

export const FOOTER_LINK_SX = {
    textDecoration: 'none',
    color: 'text.secondary',
    transition: 'color 0.2s',
    '&:hover': {
        color: 'secondary.main',
    },
};

export const SOCIAL_ICON_SX = {
    backgroundColor: 'background.paper',
    color: 'text.primary',
    '&:hover': {
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
    },
};

export const APP_BUTTON_SX = {
    justifyContent: 'flex-start',
    color: 'text.secondary',
    textTransform: 'none',
    '&:hover': {
        color: 'secondary.main',
    },
};

export const NEWSLETTER_FIELD_SX = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '& .MuiOutlinedInput-root': {
        color: 'secondary.contrastText',
        '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.3)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'secondary.contrastText',
        },
    },
    '& .MuiOutlinedInput-input': {
        color: 'secondary.contrastText',
    },
};
