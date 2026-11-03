import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Checkbox,
    Typography,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FilterAccordionProps {
    panel: string;
    title: string;
    expandedPanel: string | false;
    setExpandedPanel: React.Dispatch<React.SetStateAction<string | false>>;
    children: React.ReactNode;
}

export const FilterAccordion = ({
    panel,
    title,
    expandedPanel,
    setExpandedPanel,
    children,
}: FilterAccordionProps) => (
    <Accordion
        expanded={expandedPanel === panel}
        onChange={(_, isExpanded) =>
            setExpandedPanel(isExpanded ? panel : false)
        }
        disableGutters
        sx={{
            mb: 2,
            boxShadow: 'none',
            '&:before': { display: 'none' },
        }}
    >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
                minHeight: 48,
                '& .MuiAccordionSummary-content': { margin: 0 },
            }}
        >
            <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: 'text.primary' }}
            >
                {title}
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ pt: 0 }}>{children}</AccordionDetails>
    </Accordion>
);

interface FilterOption {
    key: string;
    label: string;
    count: number;
    checked: boolean;
    onToggle: () => void;
}

export const FilterOptionList = ({
    options,
    isRtl,
}: {
    options: FilterOption[];
    isRtl: boolean;
}) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {options.map((option) => (
            <Box
                key={option.key}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: isRtl ? 'row-reverse' : 'row',
                        gap: 1,
                    }}
                >
                    <Checkbox
                        checked={option.checked}
                        onChange={option.onToggle}
                    />
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            cursor: 'pointer',
                            userSelect: 'none',
                        }}
                        onClick={option.onToggle}
                    >
                        {option.label}
                    </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                    ({option.count})
                </Typography>
            </Box>
        ))}
    </Box>
);
