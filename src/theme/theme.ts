import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') =>
    createTheme({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    // تم روشن به سبک EcoFlow
                    primary: {
                        main: '#000000',
                        light: '#2C2C2C',
                        dark: '#000000',
                        contrastText: '#FFFFFF'
                    },
                    secondary: {
                        main: '#0066FF', // آبی مدرن تکنولوژی EcoFlow
                        light: '#3385FF',
                        dark: '#0047B3',
                        contrastText: '#FFFFFF'
                    },
                    background: {
                        default: '#FFFFFF',
                        paper: '#F7F8FA' // خاکستری بسیار ملایم برای تفکیک کارت‌ها و بخش‌ها
                    },
                    text: {
                        primary: '#111827',
                        secondary: '#5E646E'
                    },
                    divider: '#E5E7EB',
                    action: {
                        hover: 'rgba(0, 0, 0, 0.04)',
                        selected: 'rgba(0, 0, 0, 0.08)',
                    }
                }
                : {
                    // تم تاریک بر اساس استایل EcoFlow High-Tech
                    primary: {
                        main: '#FFFFFF',
                        light: '#FFFFFF',
                        dark: '#E0E0E0',
                        contrastText: '#000000'
                    },
                    secondary: {
                        main: '#2979FF', // آبی آکسیون برای محیط تاریک
                        light: '#5393FF',
                        dark: '#1C54B2',
                        contrastText: '#FFFFFF'
                    },
                    background: {
                        default: '#0A0B0D', // مشکی مدرن و عمیق
                        paper: '#14171C'    // کارت‌ها و پنل‌های تاریک
                    },
                    text: {
                        primary: '#F9FAFB',
                        secondary: '#9CA3AF'
                    },
                    divider: 'rgba(255, 255, 255, 0.12)',
                    action: {
                        hover: 'rgba(255, 255, 255, 0.08)',
                        selected: 'rgba(255, 255, 255, 0.16)',
                    }
                }),
        },
        typography: {
            fontFamily: 'var(--font-geist-sans), "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            // h1: { fontWeight: 700, tracking: '-0.02em' },
            // h2: { fontWeight: 700, tracking: '-0.01em' },
            // h3: { fontWeight: 600 },
            // button: {
            //     textTransform: 'none',
            //     fontWeight: 600,
            //     letterSpacing: '0.01em',
            // },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: ({ theme, ownerState }) => {
                        if (ownerState.variant !== 'contained') {
                            return {};
                        }

                        const colorKey =
                            !ownerState.color ||
                            ownerState.color === 'inherit'
                                ? 'primary'
                                : ownerState.color;
                        const paletteEntry = (
                            theme.palette as unknown as Record<
                                string,
                                { main: string; dark: string } | string
                            >
                        )[colorKey];

                        if (
                            !paletteEntry ||
                            typeof paletteEntry !== 'object'
                        ) {
                            return {};
                        }

                        const { main, dark } = paletteEntry;
                        const fill = dark ?? main;

                        return {
                            // Components may override these vars in `sx` to use
                            // custom before/after hover colors — the theme only
                            // provides the slide animation, not the colors.
                            '--button-bg': main,
                            '--button-hover-fill': fill,
                            backgroundColor: 'var(--button-bg)',
                            backgroundImage:
                                'linear-gradient(to bottom, var(--button-hover-fill), var(--button-hover-fill))',
                            backgroundSize: '100% 0%',
                            backgroundPosition: 'top',
                            backgroundRepeat: 'no-repeat',
                            transition:
                                'background-size 600ms cubic-bezier(0.22, 1, 0.36, 1), background-color 600ms ease',
                            '&:hover, &:focus-visible': {
                                backgroundColor: 'var(--button-bg)',
                                backgroundSize: '100% 100%',
                            },
                            '&.Mui-disabled': {
                                backgroundColor:
                                    theme.palette.action.disabledBackground,
                                backgroundImage: 'none',
                            },
                        };
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        // Same slide mechanism as MuiButton — components may
                        // override these vars in `sx` for custom hover colors.
                        // Defaults preserve the stock look: transparent bg
                        // with an action.hover fill on hover.
                        '--button-bg': 'transparent',
                        '--button-hover-fill': theme.palette.action.hover,
                        backgroundColor: 'var(--button-bg)',
                        backgroundImage:
                            'linear-gradient(to bottom, var(--button-hover-fill), var(--button-hover-fill))',
                        backgroundSize: '100% 0%',
                        backgroundPosition: 'top',
                        backgroundRepeat: 'no-repeat',
                        transition:
                            'background-size 600ms cubic-bezier(0.22, 1, 0.36, 1), background-color 600ms ease',
                        '&:hover, &:focus-visible': {
                            backgroundColor: 'var(--button-bg)',
                            backgroundSize: '100% 100%',
                        },
                        '&.Mui-disabled': {
                            backgroundImage: 'none',
                        },
                    }),
                },
            },
        },
     
    });