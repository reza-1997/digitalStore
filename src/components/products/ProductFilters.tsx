'use client';

import { useEffect, useMemo, useState } from 'react';

import {
    Box,
    Typography,
    Checkbox,
    Slider,
    Button,
    Tooltip,
    Chip,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

import type {
    ProductsPageDict,
    Product,
    Category,
    Brand,
} from '@/src/types';

interface ProductFiltersProps {
    lang: 'fa' | 'en';
    dict: ProductsPageDict;
    categories: Category[];
    brands: Brand[];
    products: Product[];
    onFilter: (filteredProducts: Product[]) => void;
}

interface AvailabilityFilter {
    inStock: boolean;
    outOfStock: boolean;
}

interface FilterState {
    availability: AvailabilityFilter;
    categories: string[];
    brands: string[];
    colors: string[];
    priceRange: [number, number];
}

interface ActiveFilter {
    label: string;
    key: string;
    type: 'availability' | 'category' | 'brand' | 'color' | 'price';
}

export const ProductFilters = ({
    lang,
    dict,
    categories,
    brands,
    products,
    onFilter,
}: ProductFiltersProps) => {
    const isRtl = lang === 'fa';

    // Calculate price boundaries
    const maxPrice = useMemo(
        () => Math.max(0, ...products.map((product) => product.price)) + 10,
        [products]
    );

    // Filter states
    const [availability, setAvailability] = useState<AvailabilityFilter>({
        inStock: false,
        outOfStock: false,
    });

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([
        0,
        maxPrice,
    ]);

    const [expandedPanel, setExpandedPanel] = useState<string | false>(
        ''
    );

    // Keep price range valid when products change
    useEffect(() => {
        setPriceRange(([min, max]) => [
            Math.min(min, maxPrice),
            Math.min(max, maxPrice),
        ]);
    }, [maxPrice]);

    // Extract unique product colors
    const uniqueColors = useMemo(() => {
        const colors = new Map<string, string>();

        products.forEach((product) => {
            product.colors.forEach((color) => {
                if (!colors.has(color.value)) {
                    colors.set(color.value, color.name[lang]);
                }
            });
        });

        return Array.from(colors, ([value, name]) => ({
            value,
            name,
        }));
    }, [products, lang]);

    // Calculate category product counts
    const categoryCounts = useMemo(
        () =>
            categories.map((category) => ({
                ...category,
                count: products.filter(
                    (product) => product.categorySlug === category.slug
                ).length,
            })),
        [categories, products]
    );

    // Calculate brand product counts
    const brandCounts = useMemo(
        () =>
            brands.map((brand) => ({
                ...brand,
                count: products.filter(
                    (product) => product.brand[lang] === brand.name[lang]
                ).length,
            })),
        [brands, products, lang]
    );

    // Build the current filter state
    const currentFilters: FilterState = {
        availability,
        categories: selectedCategories,
        brands: selectedBrands,
        colors: selectedColors,
        priceRange,
    };

    // Apply filters to products
    const getFilteredProducts = (filters: FilterState): Product[] => {
        let filtered = [...products];

        // Availability
        if (filters.availability.inStock && !filters.availability.outOfStock) {
            filtered = filtered.filter((product) => product.inStock);
        } else if (
            !filters.availability.inStock &&
            filters.availability.outOfStock
        ) {
            filtered = filtered.filter((product) => !product.inStock);
        }

        // Categories
        if (filters.categories.length > 0) {
            filtered = filtered.filter((product) =>
                filters.categories.includes(product.categorySlug)
            );
        }

        // Brands
        if (filters.brands.length > 0) {
            const selectedBrandNames = brands
                .filter((brand) => filters.brands.includes(brand.slug))
                .map((brand) => brand.name[lang]);

            filtered = filtered.filter((product) =>
                selectedBrandNames.includes(product.brand[lang])
            );
        }

        // Colors
        if (filters.colors.length > 0) {
            filtered = filtered.filter((product) =>
                product.colors.some((color) =>
                    filters.colors.includes(color.value)
                )
            );
        }

        // Price
        filtered = filtered.filter((product) => {
            const price = product.discountPrice ?? product.price;

            return (
                price >= filters.priceRange[0] &&
                price <= filters.priceRange[1]
            );
        });

        return filtered;
    };

    // Apply current filters
    const applyFilters = (filters: FilterState = currentFilters) => {
        onFilter(getFilteredProducts(filters));
    };

    // Build active filter chips
    const activeFilters = useMemo<ActiveFilter[]>(() => {
        const filters: ActiveFilter[] = [];

        if (availability.inStock && !availability.outOfStock) {
            filters.push({
                label: dict.filters.inStock,
                key: 'inStock',
                type: 'availability',
            });
        } else if (!availability.inStock && availability.outOfStock) {
            filters.push({
                label: dict.filters.outOfStock,
                key: 'outOfStock',
                type: 'availability',
            });
        }

        selectedCategories.forEach((slug) => {
            const category = categories.find((item) => item.slug === slug);

            if (category) {
                filters.push({
                    label: category.name[lang],
                    key: slug,
                    type: 'category',
                });
            }
        });

        selectedBrands.forEach((slug) => {
            const brand = brands.find((item) => item.slug === slug);

            if (brand) {
                filters.push({
                    label: brand.name[lang],
                    key: slug,
                    type: 'brand',
                });
            }
        });

        selectedColors.forEach((value) => {
            const color = uniqueColors.find((item) => item.value === value);

            if (color) {
                filters.push({
                    label: color.name,
                    key: value,
                    type: 'color',
                });
            }
        });

        if (priceRange[0] > 0 || priceRange[1] < maxPrice) {
            filters.push({
                label: `$${priceRange[0]} - $${priceRange[1]}`,
                key: 'price',
                type: 'price',
            });
        }

        return filters;
    }, [
        availability,
        selectedCategories,
        selectedBrands,
        selectedColors,
        priceRange,
        categories,
        brands,
        uniqueColors,
        maxPrice,
        dict,
        lang,
    ]);

    // Remove an individual filter and apply the updated state
    const removeFilter = (filter: ActiveFilter) => {
        const nextFilters: FilterState = {
            ...currentFilters,
        };

        switch (filter.type) {
            case 'availability':
                nextFilters.availability = {
                    inStock: false,
                    outOfStock: false,
                };

                setAvailability(nextFilters.availability);
                break;

            case 'category':
                nextFilters.categories = selectedCategories.filter(
                    (slug) => slug !== filter.key
                );

                setSelectedCategories(nextFilters.categories);
                break;

            case 'brand':
                nextFilters.brands = selectedBrands.filter(
                    (slug) => slug !== filter.key
                );

                setSelectedBrands(nextFilters.brands);
                break;

            case 'color':
                nextFilters.colors = selectedColors.filter(
                    (value) => value !== filter.key
                );

                setSelectedColors(nextFilters.colors);
                break;

            case 'price':
                nextFilters.priceRange = [0, maxPrice];

                setPriceRange(nextFilters.priceRange);
                break;
        }

        applyFilters(nextFilters);
    };

    // Remove all filters and immediately show all products
    const removeAllFilters = () => {
        const defaultFilters: FilterState = {
            availability: {
                inStock: false,
                outOfStock: false,
            },
            categories: [],
            brands: [],
            colors: [],
            priceRange: [0, maxPrice],
        };

        setAvailability(defaultFilters.availability);
        setSelectedCategories(defaultFilters.categories);
        setSelectedBrands(defaultFilters.brands);
        setSelectedColors(defaultFilters.colors);
        setPriceRange(defaultFilters.priceRange);

        applyFilters(defaultFilters);
    };

    // Handle accordion expansion
    const handleAccordionChange =
        (panel: string) =>
            (_event: React.SyntheticEvent, isExpanded: boolean) => {
                setExpandedPanel(isExpanded ? panel : false);
            };

    // Reusable accordion styles
    const accordionSx = {
        mb: 2,
        boxShadow: 'none',
        '&:before': {
            display: 'none',
        },
    };

    const summarySx = {
        minHeight: 48,
        '& .MuiAccordionSummary-content': {
            margin: 0,
        },
    };

    const renderFilterTitle = (title: string) => (
        <Typography
            variant="h6"
            sx={{
                fontWeight: 700,
                color: 'text.primary',
            }}
        >
            {title}
        </Typography>
    );

    // Reusable checkbox handler
    const toggleSelection = (
        value: string,
        selected: string[],
        setter: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        setter((previous) =>
            previous.includes(value)
                ? previous.filter((item) => item !== value)
                : [...previous, value]
        );
    };

    return (
        <Box
            sx={{
                p: 3,
                backgroundColor: 'background.paper',
                borderRadius: 2,
                height: 'fit-content',
            }}
        >
            {/* Active Filters */}
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

            {/* Availability */}
            <Accordion
                expanded={expandedPanel === 'availability'}
                onChange={handleAccordionChange('availability')}
                disableGutters
                sx={accordionSx}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={summarySx}
                >
                    {renderFilterTitle(dict.filters.availability)}
                </AccordionSummary>

                <AccordionDetails sx={{ pt: 0 }}>
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
                                    checked={availability[key]}
                                    onChange={(event) =>
                                        setAvailability((previous) => ({
                                            ...previous,
                                            [key]: event.target.checked,
                                        }))
                                    }
                                />

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        cursor: 'pointer',
                                        userSelect: 'none',
                                    }}
                                    onClick={() =>
                                        setAvailability((previous) => ({
                                            ...previous,
                                            [key]: !previous[key],
                                        }))
                                    }
                                >
                                    {label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* Categories */}
            <Accordion
                expanded={expandedPanel === 'productType'}
                onChange={handleAccordionChange('productType')}
                disableGutters
                sx={accordionSx}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={summarySx}
                >
                    {renderFilterTitle(dict.filters.productType)}
                </AccordionSummary>

                <AccordionDetails sx={{ pt: 0 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.5,
                        }}
                    >
                        {categoryCounts.map((category) => (
                            <Box
                                key={category.id}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: isRtl ? 'row-reverse' : 'row',
                                    gap: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        flex: 1,
                                    }}
                                >
                                    <Checkbox
                                        checked={selectedCategories.includes(category.slug)}
                                        onChange={() =>
                                            toggleSelection(
                                                category.slug,
                                                selectedCategories,
                                                setSelectedCategories
                                            )
                                        }
                                    />

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            cursor: 'pointer',
                                            userSelect: 'none',
                                        }}
                                        onClick={() =>
                                            toggleSelection(
                                                category.slug,
                                                selectedCategories,
                                                setSelectedCategories
                                            )
                                        }
                                    >
                                        {category.name[lang]}
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="body2"
                                    sx={{ color: 'text.disabled' }}
                                >
                                    ({category.count})
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* Brands */}
            <Accordion
                expanded={expandedPanel === 'brand'}
                onChange={handleAccordionChange('brand')}
                disableGutters
                sx={accordionSx}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={summarySx}
                >
                    {renderFilterTitle(dict.filters.brand)}
                </AccordionSummary>

                <AccordionDetails sx={{ pt: 0 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.5,
                        }}
                    >
                        {brandCounts.map((brand) => (
                            <Box
                                key={brand.slug}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: isRtl ? 'row-reverse' : 'row',
                                    gap: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        flex: 1,
                                    }}
                                >
                                    <Checkbox
                                        checked={selectedBrands.includes(brand.slug)}
                                        onChange={() =>
                                            toggleSelection(
                                                brand.slug,
                                                selectedBrands,
                                                setSelectedBrands
                                            )
                                        }
                                    />

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            cursor: 'pointer',
                                            userSelect: 'none',
                                        }}
                                        onClick={() =>
                                            toggleSelection(
                                                brand.slug,
                                                selectedBrands,
                                                setSelectedBrands
                                            )
                                        }
                                    >
                                        {brand.name[lang]}
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="body2"
                                    sx={{ color: 'text.disabled' }}
                                >
                                    ({brand.count})
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* Colors */}
            <Accordion
                expanded={expandedPanel === 'colors'}
                onChange={handleAccordionChange('colors')}
                disableGutters
                sx={accordionSx}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={summarySx}
                >
                    {renderFilterTitle(dict.filters.colors)}
                </AccordionSummary>

                <AccordionDetails sx={{ pt: 0 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1.5,
                        }}
                    >
                        {uniqueColors.map((color) => {
                            const isSelected = selectedColors.includes(color.value);

                            return (
                                <Tooltip
                                    key={color.value}
                                    title={color.name}
                                    arrow
                                >
                                    <Box
                                        component="button"
                                        type="button"
                                        aria-label={color.name}
                                        aria-pressed={isSelected}
                                        onClick={() =>
                                            toggleSelection(
                                                color.value,
                                                selectedColors,
                                                setSelectedColors
                                            )
                                        }
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
                                            outline: isSelected
                                                ? '2px solid'
                                                : 'none',
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
                </AccordionDetails>
            </Accordion>

            {/* Price Range */}
            <Accordion
                expanded={expandedPanel === 'priceRange'}
                onChange={handleAccordionChange('priceRange')}
                disableGutters
                sx={accordionSx}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={summarySx}
                >
                    {renderFilterTitle(dict.filters.priceRange)}
                </AccordionSummary>

                <AccordionDetails sx={{ pt: 0 }}>
                    <Box sx={{ px: 1 }}>
                        <Slider
                            value={priceRange}
                            onChange={(_, value) =>
                                setPriceRange(value as [number, number])
                            }
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
                                ${priceRange[0]}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{ color: 'text.secondary' }}
                            >
                                ${priceRange[1]}
                            </Typography>
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* Apply Filters */}
            <Button
                variant="contained"
                fullWidth
                onClick={() => applyFilters()}
                sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    mt: 2,
                }}
            >
                {dict.filters.apply}
            </Button>
        </Box>
    );
};

