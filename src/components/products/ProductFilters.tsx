'use client';

import { useRef, useState } from 'react';

import {
    Box,
    Button,
    Checkbox,
    Chip,
    Slider,
    Tooltip,
    Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { FilterAccordion } from './FilterAccordion';
import { CategorySubcategoryFilterList } from './CategorySubcategoryFilterList';
import { FilterOptionList } from './FilterOptionList';
import { useProductFilters } from './hooks/useProductFilters';

import type { ColorOption } from '@/src/types';
import type { Dictionary } from '@/src/lang/dictionary';

interface ProductFiltersProps {
    lang: 'fa' | 'en';
    dict: Dictionary;
    colors: ColorOption[];
    filterState: ReturnType<typeof useProductFilters>;
    inDrawer?: boolean;
}

export const ProductFilters = ({
    lang,
    dict: dictionary,
    colors,
    filterState,
    inDrawer = false,
}: ProductFiltersProps) => {
    const dict = dictionary.productsPage;
    const isRtl = lang === 'fa';
    const initialCategorySlug = filterState.filters.categories[0];
    const [expandedPanel, setExpandedPanel] = useState<string | false>(
        initialCategorySlug ? 'productType' : false
    );
    const [expandedCategorySlug, setExpandedCategorySlug] = useState<
        string | false
    >(initialCategorySlug ?? false);
    const priceRangeHistoryPushed = useRef(false);
    const {
        filters,
        maxPrice,
        categoryCounts,
        brandCounts,
        activeFilters,
        toggleCategory,
        toggleBrand,
        toggleColor,
        toggleAvailability,
        setPriceRange,
        removeFilter,
        removeAllFilters,
    } = filterState;

    return (
        <Box
            sx={{
                p: 3,
                backgroundColor: inDrawer ? 'transparent' : 'background.paper',
                borderRadius: inDrawer ? 0 : 2,
                height: 'fit-content',
            }}
        >
            {activeFilters.length > 0 && (
                <Box sx={{ mb: 3 }}>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            fontWeight: 600,
                            mb: 2,
                            color: 'text.primary',
                            textAlign: isRtl ? 'right' : 'left',
                        }}
                    >
                        {dict.filters.activeFilters}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                            mb: 2,
                        }}
                    >
                        {activeFilters.map((filter) => (
                            <Chip
                                key={`${filter.type}-${filter.key}`}
                                label={filter.label}
                                onDelete={() => removeFilter(filter)}
                                deleteIcon={<CloseIcon />}
                                size="small"
                                color="primary"
                                variant="outlined"
                                sx={
                                    isRtl
                                        ? { '& .MuiChip-deleteIcon': { ml: 0.5 } }
                                        : undefined
                                }
                            />
                        ))}
                    </Box>

                    <Button
                        variant="text"
                        size="small"
                        onClick={removeAllFilters}
                        sx={{
                            textTransform: 'none',
                            color: 'error.main',
                        }}
                    >
                        {dict.filters.removeAll}
                    </Button>
                </Box>
            )}

            <FilterAccordion
                panel="availability"
                title={dict.filters.availability}
                expandedPanel={expandedPanel}
                setExpandedPanel={setExpandedPanel}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    {(
                        [
                            ['inStock', dict.filters.inStock],
                            ['outOfStock', dict.filters.outOfStock],
                        ] as const
                    ).map(([key, label]) => (
                        <Box
                            key={key}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: isRtl ? 'row-reverse' : 'row',
                                justifyContent: isRtl ? 'flex-end' : 'flex-start',
                                gap: 1,
                            }}
                        >
                            <Checkbox
                                checked={filters.availability[key]}
                                onChange={(event) =>
                                    toggleAvailability(key, event.target.checked)
                                }
                            />
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    cursor: 'pointer',
                                    userSelect: 'none',
                                    transition: 'color 0.2s ease',
                                    '&:hover': {
                                        color: 'secondary.dark',
                                    },
                                }}
                                onClick={() =>
                                    toggleAvailability(
                                        key,
                                        !filters.availability[key]
                                    )
                                }
                            >
                                {label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </FilterAccordion>

            <FilterAccordion
                panel="productType"
                title={dict.filters.productType}
                expandedPanel={expandedPanel}
                setExpandedPanel={setExpandedPanel}
            >
                <CategorySubcategoryFilterList
                    isRtl={isRtl}
                    subcategoriesLabel={dict.filters.subcategories}
                    categories={categoryCounts.map((category) => ({
                        key: category.slug,
                        label: category.name[lang],
                        count: category.count,
                        checked: filters.categories.includes(category.slug),
                        onToggle: () => toggleCategory(category.slug),
                        subcategories: category.subcategories,
                    }))}
                    expandedCategory={expandedCategorySlug}
                    setExpandedCategory={setExpandedCategorySlug}
                />
            </FilterAccordion>

            <FilterAccordion
                panel="brand"
                title={dict.filters.brand}
                expandedPanel={expandedPanel}
                setExpandedPanel={setExpandedPanel}
            >
                <FilterOptionList
                    isRtl={isRtl}
                    options={brandCounts.map((brand) => ({
                        key: brand.slug,
                        label: brand.name[lang],
                        count: brand.count,
                        checked: filters.brands.includes(brand.slug),
                        onToggle: () => toggleBrand(brand.slug),
                    }))}
                />
            </FilterAccordion>

            <FilterAccordion
                panel="colors"
                title={dict.filters.colors}
                expandedPanel={expandedPanel}
                setExpandedPanel={setExpandedPanel}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1.5,
                    }}
                >
                    {colors.map((color) => {
                        const isSelected = filters.colors.includes(color.slug);
                        const colorName = color.name[lang];

                        return (
                            <Tooltip key={color.slug} title={colorName} arrow>
                                <Box
                                    component="button"
                                    type="button"
                                    aria-label={colorName}
                                    aria-pressed={isSelected}
                                    onClick={() => toggleColor(color.slug)}
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        p: 0,
                                        borderRadius: '50%',
                                        backgroundColor: color.value,
                                        border: '2px solid',
                                        borderColor: isSelected
                                            ? 'primary.main'
                                            : 'grey.300',
                                        outline: isSelected ? '2px solid' : 'none',
                                        outlineColor: 'primary.main',
                                        outlineOffset: 2,
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s',
                                        '&:hover': {
                                            transform: 'scale(1.1)',
                                        },
                                    }}
                                />
                            </Tooltip>
                        );
                    })}
                </Box>
            </FilterAccordion>

            <FilterAccordion
                panel="priceRange"
                title={dict.filters.priceRange}
                expandedPanel={expandedPanel}
                setExpandedPanel={setExpandedPanel}
            >
                <Box sx={{ px: 1 }}>
                    <Slider
                        value={filters.priceRange}
                        onChange={(_, value) => {
                            setPriceRange(
                                value as [number, number],
                                priceRangeHistoryPushed.current
                                    ? 'replace'
                                    : 'push'
                            );
                            priceRangeHistoryPushed.current = true;
                        }}
                        onChangeCommitted={() => {
                            priceRangeHistoryPushed.current = false;
                        }}
                        valueLabelDisplay="auto"
                        min={0}
                        max={maxPrice}
                        step={1}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: 1,
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                        >
                            ${filters.priceRange[0]}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                        >
                            ${filters.priceRange[1]}
                        </Typography>
                    </Box>
                </Box>
            </FilterAccordion>
        </Box>
    );
};
