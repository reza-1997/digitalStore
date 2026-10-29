
'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { Box, Typography } from '@mui/material';
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';

interface ProductImageProps extends Omit<ImageProps, 'src'> {
    src?: string | null;
    fallbackLabel?: string;
}

export default function ProductImage({
    src,
    alt,
    fallbackLabel = 'Image unavailable',
    fill = true,
    sizes = '(max-width: 600px) 100vw, 50vw',
    ...imageProps
}: ProductImageProps) {
    const [hasError, setHasError] = useState(false);
    const imageSrc = src?.trim();

    if (!imageSrc || hasError) {
        return (
            <Box
                className={imageProps.className}
                role="img"
                aria-label={alt || fallbackLabel}
                sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    bgcolor: 'action.hover',
                    color: 'text.disabled',
                    overflow: 'hidden',
                }}
            >
                <ImageNotSupportedOutlinedIcon sx={{ fontSize: 42 }} />
                <Typography variant="caption" sx={{ px: 1, textAlign: 'center' }}>
                    {fallbackLabel}
                </Typography>
            </Box>
        );
    }

    return (
        <Image
            {...imageProps}
            src={imageSrc}
            alt={alt}
            fill={fill}
            sizes={sizes}
            unoptimized
            onError={(event) => {
                console.error('ProductImage failed:', imageSrc, event.currentTarget.src);
                setHasError(true);
            }}
            style={{
                objectFit: 'cover',
                transition: 'opacity 0.5s ease',
                ...imageProps.style,
            }}
        />
    );
}
