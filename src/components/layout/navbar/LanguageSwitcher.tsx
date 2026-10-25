'use client';

import { Button, Tooltip } from '@mui/material';
import { Language as GlobeIcon } from '@mui/icons-material';

interface LanguageSwitcherProps {
    lang: 'fa' | 'en';
    tooltipTitle: string;
    ariaLabel: string;
    onLanguageChange: () => void;
}

/**
 * LanguageSwitcher Component
 * Handles switching application locale between Persian and English.
 */
export const LanguageSwitcher = ({
    lang,
    tooltipTitle,
    ariaLabel,
    onLanguageChange,
}: LanguageSwitcherProps) => {


    return (
        <Tooltip title={tooltipTitle}>
            <Button
                onClick={onLanguageChange}
                color="inherit"
                aria-label={ariaLabel}
                sx={{
                    minWidth: 0,
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 5,
                    gap: 1,
                    px: { xs: 1, sm: 1.5 },
                    ":hover": {
                        color: "secondary.main"
                    }
                }}
            >
                <GlobeIcon fontSize="small" sx={{ mb: 0.2 }} />
                {lang}
            </Button>
        </Tooltip>
    );
};