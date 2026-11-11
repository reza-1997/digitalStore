'use client';

import {
    useCallback,
    useLayoutEffect,
    useRef,
    useState,
    type MouseEvent as ReactMouseEvent,
} from 'react';
import {
    Box,
    Dialog,
    Fade,
    IconButton,
    useMediaQuery,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';

import type { Dictionary } from '@/src/lang/dictionary';
import ProductImage from '@/src/components/common/product/ProductImage';

interface ProductGalleryProps {
    images: string[];
    /** When set (e.g. a selected color variant), overrides the active slide image. */
    overrideImage?: string | null;
    alt: string;
    activeIndex: number;
    onSelect: (index: number) => void;
    isRtl: boolean;
    dict: Dictionary;
}

const ZOOM_FACTOR = 2.5;
const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

interface ZoomGeometry {
    left: number;
    top: number;
    width: number;
    height: number;
}

export const ProductGallery = ({
    images,
    overrideImage,
    alt,
    activeIndex,
    onSelect,
    isRtl,
    dict,
}: ProductGalleryProps) => {
    const t = dict.productDetails;
    const hasMultiple = images.length > 1;
    const safeIndex = Math.min(Math.max(activeIndex, 0), images.length - 1);
    const displaySrc = overrideImage || images[safeIndex];
    const PrevIcon = isRtl ? ChevronRightIcon : ChevronLeftIcon;
    const NextIcon = isRtl ? ChevronLeftIcon : ChevronRightIcon;

    const canHoverZoom = useMediaQuery('(hover: hover) and (pointer: fine)');
    const [isZoomVisible, setIsZoomVisible] = useState(false);
    const [zoom, setZoom] = useState<ZoomGeometry | null>(null);
    const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
    const imageBoxRef = useRef<HTMLDivElement | null>(null);
    const previewRef = useRef<HTMLDivElement | null>(null);
    const pendingPoint = useRef<{ x: number; y: number } | null>(null);

    const updateZoom = useCallback((clientX: number, clientY: number) => {
        const img = imageBoxRef.current?.querySelector('img');
        const preview = previewRef.current;
        if (!img) return;
        if (!preview) {
            // Preview is not mounted yet (first mouse-enter); retry after mount.
            pendingPoint.current = { x: clientX, y: clientY };
            return;
        }

        const rect = img.getBoundingClientRect();
        const { naturalWidth, naturalHeight } = img;
        if (!naturalWidth || !naturalHeight || !rect.width) return;

        // object-fit: cover — the image is scaled so it fully covers the
        // container and the overflow is cropped. The rendered image can be
        // larger than the container on one axis, producing negative offsets.
        const fitScale = Math.max(
            rect.width / naturalWidth,
            rect.height / naturalHeight
        );
        const paintW = naturalWidth * fitScale;
        const paintH = naturalHeight * fitScale;
        const offsetX = (rect.width - paintW) / 2;
        const offsetY = (rect.height - paintH) / 2;

        const fx = clamp(
            (clientX - rect.left - offsetX) / paintW,
            0,
            1
        );
        const fy = clamp(
            (clientY - rect.top - offsetY) / paintH,
            0,
            1
        );

        const width = paintW * ZOOM_FACTOR;
        const height = paintH * ZOOM_FACTOR;
        // Center the cursor point, but clamp so the enlarged image always
        // covers the whole preview — near the image edges there is no image
        // beyond the boundary, so the viewport must stop at the edge instead
        // of revealing empty space.
        setZoom({
            left: clamp(
                preview.clientWidth / 2 - fx * width,
                preview.clientWidth - width,
                0
            ),
            top: clamp(
                preview.clientHeight / 2 - fy * height,
                preview.clientHeight - height,
                0
            ),
            width,
            height,
        });
    }, []);

    // Flush the pending point once the preview has mounted so the first
    // hover already shows the correct region instead of an empty panel.
    useLayoutEffect(() => {
        if (!isZoomVisible || !pendingPoint.current) return;
        const { x, y } = pendingPoint.current;
        pendingPoint.current = null;
        updateZoom(x, y);
    }, [isZoomVisible, updateZoom]);

    const handleMouseEnter = (event: ReactMouseEvent) => {
        if (!canHoverZoom) return;
        setIsZoomVisible(true);
        updateZoom(event.clientX, event.clientY);
    };

    const handleMouseMove = (event: ReactMouseEvent) => {
        if (!canHoverZoom || !isZoomVisible) return;
        updateZoom(event.clientX, event.clientY);
    };

    const handleMouseLeave = () => {
        setIsZoomVisible(false);
    };

    const goTo = (direction: -1 | 1) => {
        onSelect((safeIndex + direction + images.length) % images.length);
    };

    const navButtonSx = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
        boxShadow: 1,
        '&:hover': { bgcolor: 'background.paper' },
        zIndex: 2,
    } as const;

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                ref={imageBoxRef}
                sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: 1,
                    borderColor: 'divider',
                    bgcolor: 'action.hover',
                    cursor: 'zoom-in',
                }}
                onClick={() => setIsFullscreenOpen(true)}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <ProductImage
                    key={displaySrc}
                    src={displaySrc}
                    alt={alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 55vw"
                    style={{ objectFit: 'cover' }}
                />

                {/* Hover zoom preview */}
                <Fade
                    in={canHoverZoom && isZoomVisible}
                    timeout={150}
                    unmountOnExit
                >
                    <Box
                        ref={previewRef}
                        sx={{
                            position: 'absolute',
                            top: 12,
                            insetInlineEnd: 12,
                            zIndex: 3,
                            width: '34%',
                            maxWidth: 340,
                            minWidth: 200,
                            aspectRatio: '1 / 1',
                            borderRadius: 2,
                            border: 1,
                            borderColor: 'divider',
                            bgcolor: 'background.paper',
                            boxShadow: 3,
                            overflow: 'hidden',
                            pointerEvents: 'none',
                        }}
                    >
                        {zoom && displaySrc && (
                            <Box
                                component="img"
                                src={displaySrc}
                                alt=""
                                sx={{
                                    position: 'absolute',
                                    left: zoom.left,
                                    top: zoom.top,
                                    width: zoom.width,
                                    height: zoom.height,
                                    maxWidth: 'none',
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                }}
                            />
                        )}
                    </Box>
                </Fade>

                {/* Fullscreen button */}
                <IconButton
                    aria-label={t.viewFullscreen}
                    onClick={(event) => {
                        event.stopPropagation();
                        setIsFullscreenOpen(true);
                    }}
                    sx={{
                        position: 'absolute',
                        top: 12,
                        insetInlineStart: 12,
                        zIndex: 2,
                        bgcolor: 'background.paper',
                        border: 1,
                        borderColor: 'divider',
                        boxShadow: 1,
                        '&:hover': { bgcolor: 'background.paper' },
                    }}
                >
                    <FullscreenIcon fontSize="small" />
                </IconButton>

                {hasMultiple && (
                    <>
                        <IconButton
                            aria-label="Previous image"
                            onClick={(event) => {
                                event.stopPropagation();
                                goTo(-1);
                            }}
                            sx={{
                                ...navButtonSx,
                                insetInlineStart: 8,
                            }}
                        >
                            <PrevIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Next image"
                            onClick={(event) => {
                                event.stopPropagation();
                                goTo(1);
                            }}
                            sx={{
                                ...navButtonSx,
                                insetInlineEnd: 8,
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
                                    style={{ objectFit: 'cover' }}
                                />
                            </Box>
                        );
                    })}
                </Box>
            )}

            {/* Fullscreen viewer */}
            <Dialog
                open={isFullscreenOpen}
                onClose={() => setIsFullscreenOpen(false)}
                maxWidth="lg"
                fullWidth
                slotProps={{
                    paper: {
                        sx: {
                            bgcolor: 'rgba(0,0,0,0.92)',
                            boxShadow: 'none',
                            m: { xs: 1, sm: 3 },
                            borderRadius: 2,
                            overflow: 'hidden',
                        },
                    },
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: { xs: '70vh', sm: '80vh' },
                    }}
                >
                    <ProductImage
                        src={displaySrc}
                        alt={alt}
                        fill
                        sizes="90vw"
                        style={{ objectFit: 'cover' }}
                    />
                    <IconButton
                        aria-label={t.closeViewer}
                        onClick={() => setIsFullscreenOpen(false)}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            insetInlineEnd: 8,
                            color: 'common.white',
                            '&:hover': {
                                bgcolor: 'rgba(255,255,255,0.15)',
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Dialog>
        </Box>
    );
};
