import Link from 'next/link';
import { Box, Typography, Chip, useTheme } from '@mui/material';

import type { Testimonial, TestimonialDict } from '@/src/types';
import { ProductRating } from '../product';
import CustomNumeralNumericFormat from '@/src/utils/CustomNumeralNumericFormat';

interface TestimonialCardProps {
    testimonial: Testimonial;
    lang: 'fa' | 'en';
    dict: TestimonialDict;
}

export const TestimonialCard = ({
    testimonial,
    lang,
    dict,
}: TestimonialCardProps) => {
    const isRtl = lang === 'fa';
    const theme = useTheme();

    const userName = isRtl ? testimonial.userNameFa : testimonial.userName;
    const review = isRtl ? testimonial.reviewFa : testimonial.review;
    const purchaseDate = isRtl ? testimonial.purchaseDateFa : testimonial.purchaseDate;

    return (
        <Box
            component={Link}
            href={`/${lang}/product/${testimonial.productSlug}`}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'background.default',
                borderRadius: 1,
                p: 3,
                textDecoration: 'none',
                border: 1,
                borderColor: 'divider',
                transition: 'all 0.3s ease',
                '&:hover': {
                    boxShadow:
                        theme.palette.mode === 'dark'
                            ? '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.12)'
                            : '0 8px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.04)',
                    // borderColor: 'secondary.main',
                },
            }}
        >
            {/* Rating */}
            <Box
                sx={{
                    display: 'flex',
                    alignSelf: 'flex-start',
                    mb: 2,
                }}
            >

                <ProductRating
                    rating={testimonial.rating}
                    isRtl={isRtl}
                    showRatingValue={false}
                    size="small"
                />
                <Typography
                    variant="caption"
                    sx={{
                        color: 'text.secondary',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        mr: isRtl ? 0 : 0.5,
                        ml: isRtl ? 0.5 : 0,
                    }}
                >
                    <CustomNumeralNumericFormat
                        prefix="("
                        suffix=")"
                        value={testimonial.rating}
                    />
                </Typography>
            </Box>

            {/* Review Text */}
            <Typography
                variant="body2"
                sx={{
                    color: 'text.primary',
                    mb: 2,
                    lineHeight: 1.6,
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4,
                    overflow: 'hidden',
                    textAlign: isRtl ? 'right' : 'left',
                }}
            >
                {review}
            </Typography>

            {/* User Info */}
            <Box
                sx={{
                    mt: 'auto',
                    pt: 2,
                    borderTop: 1,
                    borderColor: 'divider',
                }}
            >
                <Typography
                    variant="subtitle2"
                    sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        mb: 0.5,
                        textAlign: isRtl ? 'right' : 'left',
                    }}
                >
                    {userName}
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        color: 'text.secondary',
                        fontSize: '0.75rem',
                        textAlign: isRtl ? 'right' : 'left',
                    }}
                >
                    {testimonial.userId}
                </Typography>
            </Box>

            {/* Product Info */}
            <Box
                sx={{
                    mt: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    flexWrap: 'wrap',
                }}
            >
                <Chip
                    label={`${dict.purchased} ${dict.on} ${purchaseDate}`}
                    size="small"
                    sx={{
                        backgroundColor: 'secondary.main',
                        color: 'secondary.contrastText',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                    }}
                />
            </Box>
        </Box>
    );
};
