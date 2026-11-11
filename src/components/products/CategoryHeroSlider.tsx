'use client';

import { CategoryHero } from '@/src/components/common';
import type { Category } from '@/src/types';

interface CategoryHeroSliderProps {
    lang: 'fa' | 'en';
    categories: Category[];
    selectedCategorySlug?: string;
    selectedSubcategoryLabel?: string;
    breadcrumbs?: Array<{ label: string; href?: string }>;
}

export const CategoryHeroSlider = (props: CategoryHeroSliderProps) => (
    <CategoryHero variant="categories" {...props} />
);
