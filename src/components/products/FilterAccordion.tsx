import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
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
            backgroundColor: 'background.default',
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
                sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                        color: 'secondary.dark',
                    },
                }}
            >
                {title}
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ pt: 0 }}>{children}</AccordionDetails>
    </Accordion>
);
