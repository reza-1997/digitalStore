import type { Dictionary } from '@/src/lang/dictionary';
import type {
    Brand,
    Category,
    ColorOption,
    Product,
    Subcategory,
} from '@/src/types';

export interface AvailabilityFilter {
    inStock: boolean;
    outOfStock: boolean;
}

export interface ProductFilterState {
    availability: AvailabilityFilter;
    categories: string[];
    subcategories: string[];
    brands: string[];
    colors: string[];
    priceRange: [number, number];
}

export interface ActiveFilter {
    label: string;
    key: string;
    type:
    | 'availability'
    | 'category'
    | 'subcategory'
    | 'brand'
    | 'color'
    | 'price';
}

export interface UseProductFiltersOptions {
    lang: 'fa' | 'en';
    dict: Dictionary['productsPage'];
    categories: Category[];
    subcategories: Subcategory[];
    brands: Brand[];
    colors: ColorOption[];
    products: Product[];
}
