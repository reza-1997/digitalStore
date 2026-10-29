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

export interface ProductSpecification {
    key: LocalizedText;
    value: LocalizedText;
}

export type NavbarDict = {
    logo: string;

    aria: {
        navigation: string;
        openMenu: string;
        closeMenu: string;
        search: string;
        account: string;
        cart: string;
        toggleTheme: string;
        changeLanguage: string;
        categorySubmenu: string;
        submitSearch: string;
        home: string;
    };

    tooltip: {
        search: string;
        account: string;
        cart: string;
        lightMode: string;
        darkMode: string;
        changeLanguage: string;
    };

    search: {
        title: string;
        placeholder: string;
        submit: string;
    };

    menu: {
        home: string;
        search: string;
        account: string;
        cart: string;
        lightMode: string;
        darkMode: string;
        changeLanguage: string;
    };

    category: {
        loading: string;
        error: string;
        viewAll: string;
    };

    errors: {
        categories: string;
    };

    brand: {
        view: string,
        error: string
    }
};

export interface Brand {
    slug: string;
    name: LocalizedText;
    // logoUrl: string;
}

export interface HeroBannerDict {
    featuredCategory: string;
    descriptionPrefix: string;
    descriptionSuffix: string;
    shopNow: string;
}
export interface ProductCardDict {
    newArrival: string;
    addToCart: string;
    wishlist: string;
    compare: string;
    quickView: string;
    featuredTitle: string;
    newArrivalsTitle: string;
    topDealsTitle: string;
    seeAll: string;
}
export interface FeaturesBarDict {
    shipping: {
        title: string;
        subtitle: string;
    };
    returns: {
        title: string;
        subtitle: string;
    };
    payment: {
        title: string;
        subtitle: string;
    };
    gifts: {
        title: string;
        subtitle: string;
    };
    support: {
        title: string;
        subtitle: string;
    };
}

export interface CategoryBannerProductsDict {
    seeMore: string;
    exploreMore: string;
    shopNow: string;
    tagline: string;
}
export interface OverEarBannerDict {
    badge: string;
    title: string;
    startingAt: string;
    shopNow: string;
}
export interface PromoBannerDict {
    badge: string;
    fitnessTitle: string;
    gamingTitle: string;
    startingAt: string;
    shopNow: string;
}

export interface SmartphoneBannerDict {
    badge: string;
    shopNow: string;
}
