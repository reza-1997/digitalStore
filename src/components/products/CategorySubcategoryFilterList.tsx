import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Checkbox,
    Typography,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { FilterOptionList } from './FilterOptionList';
import type { CategoryFilterOption } from './filterTypes';

export const CategorySubcategoryFilterList = ({
    categories,
    subcategoriesLabel,
    expandedCategory,
    setExpandedCategory,
    isRtl,
}: {
    categories: CategoryFilterOption[];
    subcategoriesLabel: string;
    expandedCategory: string | false;
    setExpandedCategory: React.Dispatch<React.SetStateAction<string | false>>;
    isRtl: boolean;
}) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {categories.map((category) => (
            <Accordion
                key={category.key}
                expanded={expandedCategory === category.key}
                onChange={(_, isExpanded) =>
                    setExpandedCategory(isExpanded ? category.key : false)
                }
                disableGutters
                sx={{
                    boxShadow: 'none',
                    '&:before': { display: 'none' },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        px: 0,
                        minHeight: 44,
                        '& .MuiAccordionSummary-content': {
                            my: 0,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        },
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
                            checked={category.checked}
                            onClick={(event) => event.stopPropagation()}
                            onChange={() => {
                                category.onToggle();
                                setExpandedCategory(category.key);
                            }}
                        />
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                transition: 'color 0.2s ease',
                                '&:hover': {
                                    color: 'secondary.dark',
                                },
                            }}
                        >
                            {category.label}
                        </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                        ({category.count})
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        pt: 0,
                        pb: 1,
                        pl: isRtl ? 0 : 2,
                        pr: isRtl ? 2 : 0,
                    }}
                >
                    <Typography
                        variant="caption"
                        sx={{
                            display: 'block',
                            mb: 0.5,
                            color: 'text.secondary',
                            textAlign: isRtl ? 'right' : 'left',
                        }}
                    >
                        {subcategoriesLabel}
                    </Typography>
                    <FilterOptionList
                        options={category.subcategories}
                        isRtl={isRtl}
                    />
                </AccordionDetails>
            </Accordion>
        ))}
    </Box>
);
