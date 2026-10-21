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
        // shape: {
        //     borderRadius: 8, // انحنای استاندارد و مدرن محصولات EcoFlow
        // },
        // components: {
        //     MuiButton: {
        //         styleOverrides: {
        //             root: {
        //                 borderRadius: 8,
        //                 padding: '10px 24px',
        //                 boxShadow: 'none',
        //                 '&:hover': {
        //                     boxShadow: 'none',
        //                 },
        //             },
        //         },
        //     },
        //     MuiCard: {
        //         styleOverrides: {
        //             root: {
        //                 borderRadius: 12,
        //                 boxShadow: mode === 'light'
        //                     ? '0px 2px 12px rgba(0, 0, 0, 0.04)'
        //                     : '0px 2px 12px rgba(0, 0, 0, 0.4)',
        //             },
        //         },
        //     },
        // },
    });