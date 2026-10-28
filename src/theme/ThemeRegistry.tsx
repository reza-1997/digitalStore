
'use client';

import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import { useServerInsertedHTML } from 'next/navigation';

import { getTheme } from './theme';

type ThemeMode = 'light' | 'dark';

interface AppContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
}

const AppContext = createContext<AppContextType>({
    mode: 'light',
    toggleTheme: () => { },
});

export const useColorMode = () => useContext(AppContext);

export default function ThemeRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mode, setMode] = useState<ThemeMode>('light');

    // Tracks whether the initial theme has been resolved.
    const [isThemeReady, setIsThemeReady] = useState(false);


    // Initialize from saved preference or system preference.
    useEffect(() => {
        const mediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
        );

        const savedMode = localStorage.getItem('theme');

        // localStorage/matchMedia are client-only; reading them after mount avoids hydration mismatches.
        /* eslint-disable react-hooks/set-state-in-effect */
        if (savedMode === 'light' || savedMode === 'dark') {
            setMode(savedMode);
        } else {
            setMode(
                mediaQuery.matches ? 'dark' : 'light'
            );
        }

        setIsThemeReady(true);
        /* eslint-enable react-hooks/set-state-in-effect */

        // Follow system changes only while no manual preference exists.
        const handleSystemThemeChange = (
            event: MediaQueryListEvent
        ) => {
            const savedPreference = localStorage.getItem('theme');

            if (
                savedPreference !== 'light' &&
                savedPreference !== 'dark'
            ) {
                setMode(event.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener(
            'change',
            handleSystemThemeChange
        );

        return () => {
            mediaQuery.removeEventListener(
                'change',
                handleSystemThemeChange
            );
        };
    }, []);

    // Toggle the theme and persist the user's explicit choice.
    const toggleTheme = useCallback(() => {
        setMode((currentMode) => {
            const nextMode =
                currentMode === 'light' ? 'dark' : 'light';

            localStorage.setItem('theme', nextMode);
            return nextMode;
        });
    }, []);

    // Persist changes after initialization.
    useEffect(() => {
        if (!isThemeReady) return;

        localStorage.setItem('theme', mode);
    }, [mode, isThemeReady]);

    // Build the MUI theme.
    const theme = useMemo(
        () => getTheme(mode),
        [mode]
    );

    // Emotion cache for Next.js App Router.
    const [{ cache, flush }] = useState(() => {
        const cache = createCache({
            key: 'mui',
        });

        cache.compat = true;

        const prevInsert = cache.insert;
        let inserted: string[] = [];

        cache.insert = (...args) => {
            const serialized = args[1];

            if (
                cache.inserted[serialized.name] === undefined
            ) {
                inserted.push(serialized.name);
            }

            return prevInsert(...args);
        };

        const flush = () => {
            const prevInserted = inserted;
            inserted = [];

            return prevInserted;
        };

        return {
            cache,
            flush,
        };
    });

    useServerInsertedHTML(() => {
        const names = flush();

        if (names.length === 0) {
            return null;
        }

        let styles = '';

        for (const name of names) {
            styles += cache.inserted[name];
        }

        return (
            <style
                key={cache.key}
                data-emotion={`${cache.key} ${names.join(' ')}`}
                dangerouslySetInnerHTML={{
                    __html: styles,
                }}
            />
        );
    });

    const contextValue = useMemo(
        () => ({
            mode,
            toggleTheme,
        }),
        [mode, toggleTheme]
    );

    return (
        <CacheProvider value={cache}>
            <AppContext.Provider value={contextValue}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </AppContext.Provider>
        </CacheProvider>
    );
}
