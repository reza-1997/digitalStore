'use client';

import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ProductImage from '@/src/components/common/product/ProductImage';

interface ProductGalleryProps {
    images: string[];
    /** When set (e.g. a selected color variant), overrides the active slide image. */
    overrideImage?: string | null;
    alt: string;
    activeIndex: number;
    onSelect: (index: number) => void;
    isRtl: boolean;
}

export const ProductGallery = ({
    images,
    overrideImage,
    alt,
    activeIndex,
    onSelect,
    isRtl,
}: ProductGalleryProps) => {
    const hasMultiple = images.length > 1;
    const safeIndex = Math.min(Math.max(activeIndex, 0), images.length - 1);
    const displaySrc = overrideImage || images[safeIndex];
    const PrevIcon = isRtl ? ChevronRightIcon : ChevronLeftIcon;
    const NextIcon = isRtl ? ChevronLeftIcon : ChevronRightIcon;

    const goTo = (direction: -1 | 1) => {
        onSelect((safeIndex + direction + images.length) % images.length);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: 1,
                    borderColor: 'divider',
                    bgcolor: 'action.hover',
                }}
            >
                <ProductImage
                    key={displaySrc}
                    src={displaySrc}
                    alt={alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 55vw"
                    style={{ objectFit: 'contain' }}
                />

                {hasMultiple && (
                    <>
                        <IconButton
                            aria-label="Previous image"
                            onClick={() => goTo(-1)}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                insetInlineStart: 8,
                                transform: 'translateY(-50%)',
                                bgcolor: 'background.paper',
                                border: 1,
                                borderColor: 'divider',
                                boxShadow: 1,
                                '&:hover': { bgcolor: 'background.paper' },
                                zIndex: 2,
                            }}
                        >
                            <PrevIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Next image"
                            onClick={() => goTo(1)}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                insetInlineEnd: 8,
                                transform: 'translateY(-50%)',
                                bgcolor: 'background.paper',
                                border: 1,
                                borderColor: 'divider',
                                boxShadow: 1,
                                '&:hover': { bgcolor: 'background.paper' },
                                zIndex: 2,
                            }}
                        >
                            <NextIcon />
                        </IconButton>
                    </>
                )}
            </Box>

            {hasMultiple && (
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        mt: 1.5,
                        overflowX: 'auto',
                        pb: 0.5,
                    }}
                >
                    {images.map((src, index) => {
                        const isActive =
                            !overrideImage && index === safeIndex;
                        return (
                            <Box
                                key={`${src}-${index}`}
                                component="button"
                                type="button"
                                onClick={() => onSelect(index)}
                                aria-label={`View image ${index + 1}`}
                                aria-pressed={isActive}
                                sx={{
                                    flexShrink: 0,
                                    width: 72,
                                    height: 72,
                                    p: 0.5,
                                    borderRadius: 1.5,
                                    border: 2,
                                    borderColor: isActive
                                        ? 'primary.main'
                                        : 'divider',
                                    bgcolor: 'background.paper',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    transition:
                                        'border-color 200ms ease, box-shadow 200ms ease',
                                    '&:hover': {
                                        borderColor: isActive
                                            ? 'primary.main'
                                            : 'text.secondary',
                                    },
                                    '&:focus-visible': {
                                        outline: '2px solid',
                                        outlineColor: 'primary.main',
                                        outlineOffset: 2,
                                    },
                                }}
                            >
                                <ProductImage
                                    src={src}
                                    alt=""
                                    fill
                                    sizes="72px"
                                    style={{ objectFit: 'contain' }}
                                />
                            </Box>
                        );
                    })}
                </Box>
            )}
        </Box>
    );
};
