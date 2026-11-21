'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
    Alert,
    Box,
    Button,
    Rating,
    Stack,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Tabs,
    TextField,
    Typography,
} from '@mui/material';

import type { Dictionary } from '@/src/lang/dictionary';
import type { Product } from '@/src/types';
import { TESTIMONIALS } from '@/src/data/testimonials';
import ProductImage from '@/src/components/common/product/ProductImage';
import { ProductRating } from '@/src/components/common/product/ProductRating';

interface ProductDetailsTabsProps {
    product: Product;
    lang: 'fa' | 'en';
    dict: Dictionary;
}

interface UserReview {
    id: string;
    name: string;
    rating: number;
    text: string;
    date: string;
}

const initialForm = { name: '', review: '', rating: 0 };

export const ProductDetailsTabs = ({
    product,
    lang,
    dict,
}: ProductDetailsTabsProps) => {
    const t = dict.productDetails;
    const rt = t.reviews;
    const isRtl = lang === 'fa';

    const [tab, setTab] = useState(0);
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    const [userReviews, setUserReviews] = useState<UserReview[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState<{ name?: string; review?: string; rating?: string }>({});
    const [successMsg, setSuccessMsg] = useState<string | null>(null);

    const productReviews = useMemo(
        () =>
            TESTIMONIALS.filter((r) => r.productSlug === product.slug).map(
                (r) => ({
                    id: r.id,
                    name: lang === 'fa' ? r.userNameFa : r.userName,
                    rating: r.rating,
                    text: lang === 'fa' ? r.reviewFa : r.review,
                    date: lang === 'fa' ? r.purchaseDateFa : r.purchaseDate,
                })
            ),
        [product.slug, lang]
    );

    const allReviews = [...userReviews, ...productReviews];

    const handleTabChange = (_: unknown, value: number) => {
        setTab(value);
        sectionRefs.current[value]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    useEffect(() => {
        const STICKY_OFFSET = 100;
        const updateActiveTab = () => {
            let active = 0;
            sectionRefs.current.forEach((el, index) => {
                if (el && el.getBoundingClientRect().top <= STICKY_OFFSET) {
                    active = index;
                }
            });
            setTab(active);
        };
        updateActiveTab();
        window.addEventListener('scroll', updateActiveTab, { passive: true });
        return () => window.removeEventListener('scroll', updateActiveTab);
    }, []);

    const handleSubmit = () => {
        const next: typeof errors = {};
        if (!form.name.trim()) next.name = rt.nameRequired;
        if (!form.review.trim()) next.review = rt.reviewRequired;
        if (form.rating <= 0) next.rating = rt.ratingRequired;
        setErrors(next);
        if (Object.keys(next).length > 0) return;

        setUserReviews((prev) => [
            {
                id: `user-${Date.now()}`,
                name: form.name.trim(),
                rating: form.rating,
                text: form.review.trim(),
                date: new Date().toLocaleDateString(
                    lang === 'fa' ? 'fa-IR' : 'en-US',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                ),
            },
            ...prev,
        ]);
        setForm(initialForm);
        setErrors({});
        setShowForm(false);
        setSuccessMsg(rt.reviewSubmitted);
    };

    return (
        <Box>
            <Box
                sx={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1100,
                    backgroundColor: 'background.default',
                }}
            >
                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                    aria-label={t.description}
                    variant="fullWidth"
                    sx={{
                        minHeight: 48,
                        borderBottom: 1,
                        borderColor: 'divider',
                        '& .MuiTab-root': {
                            minHeight: 48,
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                        },
                        '& .MuiTabIndicator-root': {
                            height: 3,
                            borderRadius: '3px 3px 0 0',
                        },
                    }}
                >
                    <Tab label={t.tabs.introduction} />
                    <Tab label={t.tabs.details} />
                    <Tab label={t.tabs.reviews} />
                </Tabs>
            </Box>

            <Box sx={{ pt: { xs: 2.5, md: 3.5 } }}>
                <Box
                    ref={(el: HTMLElement | null) => {
                        sectionRefs.current[0] = el;
                    }}
                    sx={{ scrollMarginTop: '60px' }}
                >
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            mb: { xs: 2.5, md: 3.5 },
                            color: 'text.primary',
                        }}
                    >
                        {t.tabs.introduction}
                    </Typography>
                    <Stack spacing={{ xs: 4, md: 6 }}>
                        {product.introduction?.sections.map((section, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    alignItems: { md: 'center' },
                                    gap: { xs: 2.5, md: 4 },
                                }}
                            >
                                {section.image && (
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: '100%',
                                            flex: { md: '0 0 44%' },
                                            aspectRatio: '4 / 3',
                                            borderRadius: 2,
                                            overflow: 'hidden',
                                            bgcolor: 'action.hover',
                                            order: { md: index % 2 === 1 ? 2 : 0 },
                                        }}
                                    >
                                        <ProductImage
                                            src={section.image}
                                            alt={section.title[lang]}
                                            fill
                                            sizes="(max-width: 900px) 100vw, 44vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </Box>
                                )}
                                <Box sx={{ flex: { md: '1 1 auto' }, minWidth: 0 }}>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 1.25,
                                            color: 'text.primary',
                                        }}
                                    >
                                        {section.title[lang]}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            lineHeight: 1.9,
                                            color: 'text.secondary',
                                        }}
                                    >
                                        {section.content[lang]}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </Box>

                <Box
                    ref={(el: HTMLElement | null) => {
                        sectionRefs.current[1] = el;
                    }}
                    sx={{ scrollMarginTop: '60px', mt: { xs: 4, md: 6 } }}
                >
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            mb: { xs: 2.5, md: 3.5 },
                            color: 'text.primary',
                        }}
                    >
                        {t.tabs.details}
                    </Typography>
                    <TableContainer
                        sx={{
                            overflowX: 'auto',
                        }}
                    >
                        <Table
                            size="small"
                            sx={{
                                minWidth: { xs: 480, sm: 'auto' },
                                '& .MuiTableCell-root': {
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                    py: 1.5,
                                    px: 2,
                                    verticalAlign: 'top',
                                },
                                '& .MuiTableRow-root:last-child .MuiTableCell-root': {
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                },
                            }}
                        >
                            <TableBody>
                                {product.specifications.map((spec, index) => (
                                    <TableRow key={index} hover>
                                        <TableCell
                                            sx={{
                                                width: '38%',
                                                color: 'text.secondary',
                                                fontWeight: 500,
                                                textAlign: 'start',
                                            }}
                                        >
                                            {spec.key[lang]}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                fontWeight: 500,
                                                color: 'text.primary',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {spec.value[lang]}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                <Box
                    ref={(el: HTMLElement | null) => {
                        sectionRefs.current[2] = el;
                    }}
                    sx={{ scrollMarginTop: '60px', mt: { xs: 4, md: 6 } }}
                >
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            mb: { xs: 2.5, md: 3.5 },
                            color: 'text.primary',
                        }}
                    >
                        {t.tabs.reviews}
                    </Typography>
                    <Stack spacing={2.5}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: { xs: 2, md: 3 },
                                flexWrap: 'wrap',
                                p: { xs: 2, md: 2.5 },
                                border: 1,
                                borderColor: 'divider',
                                borderRadius: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    minWidth: { xs: '100%', sm: 110 },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '2.4rem',
                                        fontWeight: 800,
                                        lineHeight: 1.1,
                                        color: 'text.primary',
                                        fontVariantNumeric: 'tabular-nums',
                                    }}
                                >
                                    {product.rating.toFixed(1)}
                                </Typography>
                                <ProductRating
                                    rating={product.rating}
                                    reviewsCount={product.reviewsCount}
                                    isRtl={isRtl}
                                    size="small"
                                />
                            </Box>
                            <Box sx={{ flex: '1 1 180px', minWidth: 0 }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 700, color: 'text.primary' }}
                                >
                                    {rt.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'text.secondary', mt: 0.25 }}
                                >
                                    {allReviews.length > 0
                                        ? `${allReviews.length} ${t.tabs.reviews}`
                                        : rt.noReviews}
                                </Typography>
                            </Box>
                            {!showForm && (
                                <Button
                                    variant="contained"
                                    onClick={() => setShowForm(true)}
                                    sx={{ borderRadius: 999, px: 3 }}
                                >
                                    {rt.writeReview}
                                </Button>
                            )}
                        </Box>

                        {successMsg && (
                            <Alert severity="success" onClose={() => setSuccessMsg(null)}>
                                {successMsg}
                            </Alert>
                        )}

                        {showForm && (
                            <Box
                                sx={{
                                    p: { xs: 2, md: 3 },
                                    border: 1,
                                    borderColor: 'divider',
                                    borderRadius: 2,
                                    bgcolor: 'background.paper',
                                }}
                            >
                                <Stack spacing={2.5}>
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{ fontWeight: 600, mb: 0.5, color: 'text.primary' }}
                                        >
                                            {rt.yourRating}
                                        </Typography>
                                        <Rating
                                            value={form.rating}
                                            onChange={(_, value) =>
                                                setForm((f) => ({ ...f, rating: value ?? 0 }))
                                            }
                                            precision={1}
                                            size="large"
                                            sx={{ color: '#f5a623' }}
                                        />
                                        {errors.rating && (
                                            <Typography
                                                variant="caption"
                                                color="error"
                                                sx={{ display: 'block', mt: 0.5 }}
                                            >
                                                {errors.rating}
                                            </Typography>
                                        )}
                                    </Box>
                                    <TextField
                                        label={rt.namePlaceholder}
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm((f) => ({ ...f, name: e.target.value }))
                                        }
                                        size="small"
                                        fullWidth
                                        error={Boolean(errors.name)}
                                        helperText={errors.name}
                                    />
                                    <TextField
                                        label={rt.reviewPlaceholder}
                                        value={form.review}
                                        onChange={(e) =>
                                            setForm((f) => ({ ...f, review: e.target.value }))
                                        }
                                        multiline
                                        minRows={4}
                                        fullWidth
                                        error={Boolean(errors.review)}
                                        helperText={errors.review}
                                    />
                                    <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'flex-end' }}>
                                        <Button
                                            variant="text"
                                            onClick={() => {
                                                setShowForm(false);
                                                setErrors({});
                                            }}
                                        >
                                            {rt.cancel}
                                        </Button>
                                        <Button variant="contained" onClick={handleSubmit}>
                                            {rt.submitReview}
                                        </Button>
                                    </Box>
                                </Stack>
                            </Box>
                        )}

                        <Stack spacing={1.5}>
                            {allReviews.length === 0 && !showForm && (
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'text.secondary', textAlign: 'center', py: 2 }}
                                >
                                    {rt.noReviews}
                                </Typography>
                            )}
                            {allReviews.map((review) => (
                                <Box
                                    key={review.id}
                                    sx={{
                                        p: { xs: 2, md: 2.5 },
                                        border: 1,
                                        borderColor: 'divider',
                                        borderRadius: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1.25,
                                            flexWrap: 'wrap',
                                            mb: 1,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: '50%',
                                                bgcolor: 'secondary.main',
                                                color: 'secondary.contrastText',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 700,
                                                fontSize: '0.9rem',
                                                flexShrink: 0,
                                            }}
                                        >
                                            {review.name.trim().charAt(0).toUpperCase()}
                                        </Box>
                                        <Box sx={{ minWidth: 0 }}>
                                            <Typography
                                                variant="body2"
                                                sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.3 }}
                                            >
                                                {review.name}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                sx={{ color: 'text.secondary' }}
                                            >
                                                {review.date}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ ms: 'auto' }}>
                                            <Rating
                                                value={review.rating}
                                                readOnly
                                                size="small"
                                                sx={{ color: '#f5a623' }}
                                            />
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        sx={{ lineHeight: 1.8, color: 'text.secondary' }}
                                    >
                                        {review.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};
