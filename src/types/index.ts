export interface LocalizedText {
    en: string;
    fa: string;
}

export interface Category {
    id: string;
    slug: string; // e.g. 'pc', 'mobile', 'earbuds'
    name: LocalizedText;
    iconName: string;
    image?: string[];
}

export interface Subcategory {
    id: string;
    categorySlug: string; // References Category.slug
    slug: string; // e.g. 'mechanical-keyboards', 'wireless-earbuds'
    name: LocalizedText;
    image: string; // Added image for subcategory display in mega menu or cards
}

export interface Collection {
    id: string;
    slug: string; // e.g. 'new-arrivals', 'special-offers', 'bestsellers'
    title: LocalizedText;
    subtitle: LocalizedText;
    bannerImage: string;
}

export interface Product {
    id: string;
    slug: string; // e.g. 'luxe-pro-wireless-keyboard'
    title: LocalizedText;
    description: LocalizedText;
    price: number;
    discountPrice?: number;
    stock: number;
    inStock: boolean;
    brand: LocalizedText;
    tags: string[];
    images: string[];
    categorySlug: string;
    subcategorySlug: string;
    collectionSlugs: string[];
    isFeatured: boolean;
    isNewArrival: boolean;
    specifications: ProductSpecification[];
    rating: number;
    reviewsCount: number;
    colors: ProductColor[];
}
export interface ProductColor {
    name: LocalizedText; // e.g. { en: "Matte Black", fa: "مشکی مات" }
    value: string;       // e.g. "#0B0B0B" (Hex code for UI display)
    slug: string;        // e.g. "matte-black"
    image: string;       // Dedicated image for this specific color variant
    stock: number;       // Stock inventory count specifically for this color
}

export interface ColorOption {
    name: LocalizedText;
    value: string;
    slug: string;
}

export interface ProductSpecification {
    key: LocalizedText;
    value: LocalizedText;
}

export interface Brand {
    slug: string;
    name: LocalizedText;
    // logoUrl: string;
}
export interface Testimonial {
    id: string;
    userName: string;
    userNameFa: string;
    userId: string;
    review: string;
    reviewFa: string;
    productSlug: string;
    rating: number;
    purchaseDate: string;
    purchaseDateFa: string;
}

