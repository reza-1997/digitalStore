'use client';

import { useEffect, useRef, useState } from 'react';

import { Fade, IconButton, useTheme } from '@mui/material';
import { KeyboardArrowUp as ArrowUpIcon } from '@mui/icons-material';

interface ScrollToTopButtonProps {
    lang: 'fa' | 'en';
}

const SCROLL_THRESHOLD = 400;

export const ScrollToTopButton = ({ lang }: ScrollToTopButtonProps) => {
    const theme = useTheme();
    const [visible, setVisible] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > SCROLL_THRESHOLD);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        const start = window.scrollY;
        const duration = 1000;
        const startTime = performance.now();
        const easeInOutCubic = (t: number) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            window.scrollTo(0, start * (1 - easeInOutCubic(progress)));
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    return (
        <Fade
            in={visible}
            onEntered={() => {
                // Fade leaves an inline `transition: opacity …` on the node
                // after entering, which would override the theme's
                // background-size transition and make hover snap instantly.
                if (buttonRef.current) {
                    buttonRef.current.style.transition = '';
                }
            }}
        >
            <IconButton
                ref={buttonRef}
                onClick={scrollToTop}
                aria-label={lang === 'fa' ? 'بازگشت به بالا' : 'Scroll to top'}
                sx={{
                    position: 'fixed',
                    bottom: 60,
                    insetInlineEnd: 40,
                    zIndex: theme.zIndex.speedDial,
                    width: 48,
                    height: 48,
                    p: 0,
                    overflow: 'hidden',
                    borderRadius: '50%',
                    color: 'primary.contrastText',
                    boxShadow: theme.shadows[4],
                    '--button-bg': theme.palette.primary.main,
                    '--button-hover-fill': theme.palette.secondary.main,
                }}
            >
                <ArrowUpIcon />
            </IconButton>
        </Fade>
    );
};
