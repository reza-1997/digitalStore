'use client';

import { useCallback, useMemo, useState } from 'react';
import { Box, Grid } from '@mui/material';

import type { Dictionary } from '@/src/lang/dictionary';
import type { Product } from '@/src/types';
import { ProductGallery } from './ProductGallery';
import { ProductInfo } from './ProductInfo';

interface ProductDetailsSectionProps {
    product: Product;
    lang: 'fa' | 'en';
    dict: Dictionary;
}

export const ProductDetailsSection = ({
    product,
    lang,
    dict,
}: ProductDetailsSectionProps) => {
    const isRtl = lang === 'fa';
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [selectedColorSlug, setSelectedColorSlug] = useState<
        string | null
    >(null);

    const selectedColor = useMemo(
        () =>
            product.colors.find((color) => color.slug === selectedColorSlug) ??
            null,
        [product.colors, selectedColorSlug]
    );

    const handleImageSelect = useCallback((index: number) => {
        setActiveImageIndex(index);
        setSelectedColorSlug(null);
    }, []);

    const handleColorSelect = useCallback((slug: string | null) => {
        setSelectedColorSlug(slug);
    }, []);

    const galleryImages = product.images;

    return (
        <Grid
            container
            spacing={{ xs: 3, lg: 5 }}
            sx={{ alignItems: 'flex-start' }}
        >
            <Grid size={{ xs: 12, lg: 7 }}>
                <Box
                    sx={{
                        position: { lg: 'sticky' },
                        top: { lg: 90 },
                    }}
                >
                    <ProductGallery
                        images={galleryImages}
                        overrideImage={selectedColor?.image}
                        alt={product.title[lang]}
                        activeIndex={activeImageIndex}
                        onSelect={handleImageSelect}
                        isRtl={isRtl}
                    />
                </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }}>
                <ProductInfo
                    product={product}
                    lang={lang}
                    dict={dict}
                    selectedColor={selectedColor}
                    onColorSelect={handleColorSelect}
                />
            </Grid>
        </Grid>
    );
};
