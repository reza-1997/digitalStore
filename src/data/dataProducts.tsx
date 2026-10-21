import type { Product } from '@/src/types';

/**
 * Researched real product/model names grouped by the existing 25 subcategories (6 each = 150).
 * IMPORTANT:
 * - Product pages/manufacturer source URLs are placed in `images` as provisional source references.
 *   They are NOT direct image-file URLs and will not render in a normal <img src> unless replaced
 *   with the official product image CDN URL for each exact model.
 * - Price, stock, rating, reviewsCount, and color options are demo-store values, not verified live data.
 * - Check exact SKU/region and compatibility before publishing.
 */
export const PRODUCTS: Product[] = [
    {
        id: 'p-m-1-1',
        slug: 'samsung-galaxy-s25-ultra',
        title: { en: 'Samsung Galaxy S25 Ultra', fa: 'سامسونگ گلکسی S25 اولترا' },
        description: { en: 'The Samsung Galaxy S25 Ultra is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'سامسونگ گلکسی S25 اولترا از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Samsung', fa: 'سامسونگ' },
        tags: ['smartphones', 'mobile', 'samsung'],
        images: [
            'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'smartphones',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: true,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Samsung', fa: 'سامسونگ' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Galaxy S25 Ultra', fa: 'Galaxy S25 Ultra' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Smartphones', fa: 'گوشی‌های هوشمند' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '6.9-inch Dynamic AMOLED 2X display; 200 MP main camera; Galaxy AI', fa: 'نمایشگر Dynamic AMOLED 2X با اندازه ۶.۹ اینچ؛ دوربین اصلی ۲۰۰ مگاپیکسل؛ Galaxy AI' } }
        ],
        rating: 4.5,
        reviewsCount: 12,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-1-2',
        slug: 'samsung-galaxy-s25-plus',
        title: { en: 'Samsung Galaxy S25+', fa: 'سامسونگ گلکسی S25 پلاس' },
        description: { en: 'The Samsung Galaxy S25+ is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'سامسونگ گلکسی S25 پلاس از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Samsung', fa: 'سامسونگ' },
        tags: ['smartphones', 'mobile', 'samsung'],
        images: [
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'smartphones',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Samsung', fa: 'سامسونگ' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Galaxy S25+', fa: 'Galaxy S25+' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Smartphones', fa: 'گوشی‌های هوشمند' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '6.7-inch Dynamic AMOLED 2X display; Snapdragon 8 Elite for Galaxy', fa: 'نمایشگر Dynamic AMOLED 2X با اندازه ۶.۷ اینچ؛ Snapdragon 8 Elite for Galaxy' } }
        ],
        rating: 4.5,
        reviewsCount: 5,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-1-3',
        slug: 'samsung-galaxy-a56-5g',
        title: { en: 'Samsung Galaxy A56 5G', fa: 'سامسونگ گلکسی A56 5G' },
        description: { en: 'The Samsung Galaxy A56 5G is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'سامسونگ گلکسی A56 5G از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Samsung', fa: 'سامسونگ' },
        tags: ['smartphones', 'mobile', 'samsung'],
        images: [
            'https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'smartphones',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Samsung', fa: 'سامسونگ' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Galaxy A56 5G', fa: 'Galaxy A56 5G' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Smartphones', fa: 'گوشی‌های هوشمند' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '6.7-inch Super AMOLED display; 5G connectivity', fa: 'نمایشگر Super AMOLED با اندازه ۶.۷ اینچ؛ اتصال 5G' } }
        ],
        rating: 4.5,
        reviewsCount: 8,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-1-4',
        slug: 'apple-iphone-16-pro',
        title: { en: 'Apple iPhone 16 Pro', fa: 'اپل آیفون 16 پرو' },
        description: { en: 'The Apple iPhone 16 Pro is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'اپل آیفون 16 پرو از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Apple', fa: 'اپل' },
        tags: ['smartphones', 'mobile', 'apple'],
        images: [
            'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'smartphones',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Apple', fa: 'اپل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'iPhone 16 Pro', fa: 'iPhone 16 Pro' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Smartphones', fa: 'گوشی‌های هوشمند' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'A18 Pro chip; Pro camera system; 6.3-inch Super Retina XDR display', fa: 'تراشه A18 Pro؛ سیستم دوربین Pro؛ نمایشگر Super Retina XDR با اندازه ۶.۳ اینچ' } }
        ],
        rating: 4.8,
        reviewsCount: 20,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-1-5',
        slug: 'apple-iphone-16',
        title: { en: 'Apple iPhone 16', fa: 'اپل آیفون 16' },
        description: { en: 'The Apple iPhone 16 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'اپل آیفون 16 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Apple', fa: 'اپل' },
        tags: ['smartphones', 'mobile', 'apple'],
        images: [
            'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'smartphones',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Apple', fa: 'اپل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'iPhone 16', fa: 'iPhone 16' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Smartphones', fa: 'گوشی‌های هوشمند' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'A18 chip; 48 MP Fusion camera; Super Retina XDR display', fa: 'تراشه A18؛ دوربین Fusion با وضوح ۴۸ مگاپیکسل؛ نمایشگر Super Retina XDR' } }
        ],
        rating: 4.6,
        reviewsCount: 15,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-1-6',
        slug: 'google-pixel-9-pro',
        title: { en: 'Google Pixel 9 Pro', fa: 'گوگل پیکسل 9 پرو' },
        description: { en: 'The Google Pixel 9 Pro is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'گوگل پیکسل 9 پرو از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Google', fa: 'گوگل' },
        tags: ['smartphones', 'mobile', 'google'],
        images: [
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'smartphones',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Google', fa: 'گوگل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Pixel 9 Pro', fa: 'Pixel 9 Pro' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Smartphones', fa: 'گوشی‌های هوشمند' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Google Tensor G4; Pro camera system; OLED display', fa: 'Google Tensor G4؛ سیستم دوربین Pro؛ نمایشگر OLED' } }
        ],
        rating: 4.7,
        reviewsCount: 9,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-2-1',
        slug: 'anker-735-charger-nano-ii-65w',
        title: { en: 'Anker 735 Charger (Nano II 65W)', fa: 'شارژر Anker 735 (Nano II 65W)' },
        description: { en: 'The Anker 735 Charger (Nano II 65W) is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'شارژر Anker 735 (Nano II 65W) از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Anker', fa: 'انکر' },
        tags: ['fast-chargers', 'mobile', 'anker'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1619681077755-901c0e86b866?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'fast-chargers',
        collectionSlugs: ['bestsellers', 'special-offers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Anker', fa: 'انکر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: '735 Charger (Nano II 65W)', fa: '735 شارژر (Nano II 65W)' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Fast Chargers', fa: 'شارژرهای سریع' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '65W max; 2 USB-C ports and 1 USB-A port; GaN II', fa: 'حداکثر ۶۵ وات؛ دو درگاه USB-C و یک USB-A؛ فناوری GaN II' } }
        ],
        rating: 4.5,
        reviewsCount: 7,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-2-2',
        slug: 'anker-nano-3-30w-511',
        title: { en: 'Anker Nano 3 30W (511)', fa: 'شارژر Anker Nano 3 سی وات' },
        description: { en: 'The Anker Nano 3 30W (511) is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'شارژر Anker Nano 3 سی وات از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Anker', fa: 'انکر' },
        tags: ['fast-chargers', 'mobile', 'anker'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1619681077755-901c0e86b866?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'fast-chargers',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Anker', fa: 'انکر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Nano 3 30W (511)', fa: 'Nano 3 30W (511)' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Fast Chargers', fa: 'شارژرهای سریع' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '30W USB-C fast charging; compact wall charger', fa: 'شارژ سریع USB-C با توان ۳۰ وات؛ شارژر دیواری جمع‌وجور' } }
        ],
        rating: 4.6,
        reviewsCount: 4,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-2-3',
        slug: 'anker-prime-100w-gan-wall-charger',
        title: { en: 'Anker Prime 100W GaN Wall Charger', fa: 'شارژر دیواری Anker Prime صد وات' },
        description: { en: 'The Anker Prime 100W GaN Wall Charger is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'شارژر دیواری Anker Prime صد وات از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Anker', fa: 'انکر' },
        tags: ['fast-chargers', 'mobile', 'anker'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1619681077755-901c0e86b866?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'fast-chargers',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Anker', fa: 'انکر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Prime 100W GaN Wall Charger', fa: 'Prime 100W GaN شارژر دیواری' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Fast Chargers', fa: 'شارژرهای سریع' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '100W GaN charging; multi-device USB-C charging', fa: 'شارژ GaN با توان ۱۰۰ وات؛ شارژ چند دستگاه از طریق USB-C' } }
        ],
        rating: 4.8,
        reviewsCount: 11,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-2-4',
        slug: 'ugreen-nexode-65w-usb-c-charger',
        title: { en: 'UGREEN Nexode 65W USB-C Charger', fa: 'شارژر UGREEN Nexode 65W' },
        description: { en: 'The UGREEN Nexode 65W USB-C Charger is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'شارژر UGREEN Nexode 65W از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'UGREEN', fa: 'یوگرین' },
        tags: ['fast-chargers', 'mobile', 'ugreen'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1619681077755-901c0e86b866?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'fast-chargers',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'UGREEN', fa: 'یوگرین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Nexode 65W USB-C Charger', fa: 'Nexode 65W USB-C شارژر' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Fast Chargers', fa: 'شارژرهای سریع' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '65W USB-C PD fast charger; compact GaN design', fa: 'شارژر سریع USB-C PD با توان ۶۵ وات؛ طراحی جمع‌وجور GaN' } }
        ],
        rating: 4.4,
        reviewsCount: 3,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-2-5',
        slug: 'belkin-boostcharge-pro-65w-dual-usb-c-gan-wall-charger',
        title: { en: 'Belkin BoostCharge Pro 65W Dual USB-C GaN Wall Charger', fa: 'شارژر Belkin BoostCharge Pro 65W' },
        description: { en: 'The Belkin BoostCharge Pro 65W Dual USB-C GaN Wall Charger is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'شارژر Belkin BoostCharge Pro 65W از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Belkin', fa: 'بلکین' },
        tags: ['fast-chargers', 'mobile', 'belkin'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1619681077755-901c0e86b866?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'fast-chargers',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Belkin', fa: 'بلکین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'BoostCharge Pro 65W Dual USB-C GaN Wall Charger', fa: 'BoostCharge Pro 65W دوگانه USB-C GaN شارژر دیواری' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Fast Chargers', fa: 'شارژرهای سریع' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Dual USB-C ports; up to 65W total output', fa: 'دو درگاه USB-C؛ توان خروجی مجموع تا ۶۵ وات' } }
        ],
        rating: 4.5,
        reviewsCount: 6,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-2-6',
        slug: 'samsung-45w-power-adapter-ep-t4511',
        title: { en: 'Samsung 45W Power Adapter (EP-T4511)', fa: 'آداپتور ۴۵ وات سامسونگ' },
        description: { en: 'The Samsung 45W Power Adapter (EP-T4511) is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'آداپتور ۴۵ وات سامسونگ از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Samsung', fa: 'سامسونگ' },
        tags: ['fast-chargers', 'mobile', 'samsung'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1619681077755-901c0e86b866?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'fast-chargers',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Samsung', fa: 'سامسونگ' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: '45W Power Adapter (EP-T4511)', fa: '45W آداپتور برق (EP-T4511)' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Fast Chargers', fa: 'شارژرهای سریع' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB-C Super Fast Charging 2.0; 45W output', fa: 'شارژ سریع USB-C Super Fast Charging 2.0؛ خروجی ۴۵ وات' } }
        ],
        rating: 4.9,
        reviewsCount: 25,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-3-1',
        slug: 'anker-737-power-bank-powercore-24k',
        title: { en: 'Anker 737 Power Bank (PowerCore 24K)', fa: 'پاوربانک Anker 737 (PowerCore 24K)' },
        description: { en: 'The Anker 737 Power Bank (PowerCore 24K) is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پاوربانک Anker 737 (PowerCore 24K) از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Anker', fa: 'انکر' },
        tags: ['power-banks', 'mobile', 'anker'],
        images: [
            'https://images.unsplash.com/photo-1609592424104-16d55427d057?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595949139467-6a45749f7cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'power-banks',
        collectionSlugs: ['bestsellers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Anker', fa: 'انکر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: '737 Power Bank (PowerCore 24K)', fa: '737 پاوربانک (PowerCore 24K)' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Power Banks', fa: 'پاوربانک‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '24,000mAh capacity; up to 140W USB-C output', fa: 'ظرفیت ۲۴۰۰۰ میلی‌آمپر ساعت؛ خروجی USB-C تا ۱۴۰ وات' } }
        ],
        rating: 4.8,
        reviewsCount: 19,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1609592424104-16d55427d057?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1595949139467-6a45749f7cf0?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-3-2',
        slug: 'anker-power-bank-20k-30w',
        title: { en: 'Anker Power Bank 20K 30W', fa: 'پاوربانک Anker 20K 30W' },
        description: { en: 'The Anker Power Bank 20K 30W is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پاوربانک Anker 20K 30W از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Anker', fa: 'انکر' },
        tags: ['power-banks', 'mobile', 'anker'],
        images: [
            'https://images.unsplash.com/photo-1609592424104-16d55427d057?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595949139467-6a45749f7cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'power-banks',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Anker', fa: 'انکر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Power Bank 20K 30W', fa: 'پاوربانک 20K 30W' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Power Banks', fa: 'پاوربانک‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '20,000mAh capacity; 30W USB-C output', fa: 'ظرفیت ۲۰۰۰۰ میلی‌آمپر ساعت؛ خروجی USB-C سی وات' } }
        ],
        rating: 4.5,
        reviewsCount: 8,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1609592424104-16d55427d057?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1595949139467-6a45749f7cf0?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-3-3',
        slug: 'anker-nano-power-bank-10k-30w',
        title: { en: 'Anker Nano Power Bank 10K 30W', fa: 'پاوربانک Anker Nano 10K 30W' },
        description: { en: 'The Anker Nano Power Bank 10K 30W is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پاوربانک Anker Nano 10K 30W از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Anker', fa: 'انکر' },
        tags: ['power-banks', 'mobile', 'anker'],
        images: [
            'https://images.unsplash.com/photo-1609592424104-16d55427d057?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595949139467-6a45749f7cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'power-banks',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Anker', fa: 'انکر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Nano Power Bank 10K 30W', fa: 'Nano پاوربانک 10K 30W' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Power Banks', fa: 'پاوربانک‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '10,000mAh capacity; 30W USB-C charging', fa: 'ظرفیت ۱۰۰۰۰ میلی‌آمپر ساعت؛ شارژ USB-C سی وات' } }
        ],
        rating: 4.6,
        reviewsCount: 14,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1609592424104-16d55427d057?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1595949139467-6a45749f7cf0?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-3-4',
        slug: 'baseus-blade-hd-100w-power-bank',
        title: { en: 'Baseus Blade HD 100W Power Bank', fa: 'پاوربانک Baseus Blade HD 100W' },
        description: { en: 'The Baseus Blade HD 100W Power Bank is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پاوربانک Baseus Blade HD 100W از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Baseus', fa: 'بیسوس' },
        tags: ['power-banks', 'mobile', 'baseus'],
        images: [
            'https://images.unsplash.com/photo-1609592424104-16d55427d057?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595949139467-6a45749f7cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'power-banks',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Baseus', fa: 'بیسوس' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Blade HD 100W Power Bank', fa: 'Blade HD 100W پاوربانک' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Power Banks', fa: 'پاوربانک‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '20,000mAh class; up to 100W USB-C output (model-dependent)', fa: 'رده ظرفیت ۲۰۰۰۰ میلی‌آمپر ساعت؛ خروجی USB-C تا ۱۰۰ وات (بسته به مدل)' } }
        ],
        rating: 4.7,
        reviewsCount: 16,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1609592424104-16d55427d057?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1595949139467-6a45749f7cf0?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-3-5',
        slug: 'ugreen-nexode-power-bank-20000mah-130w',
        title: { en: 'UGREEN Nexode Power Bank 20000mAh 130W', fa: 'پاوربانک UGREEN Nexode 20000mAh 130W' },
        description: { en: 'The UGREEN Nexode Power Bank 20000mAh 130W is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پاوربانک UGREEN Nexode 20000mAh 130W از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'UGREEN', fa: 'یوگرین' },
        tags: ['power-banks', 'mobile', 'ugreen'],
        images: [
            'https://images.unsplash.com/photo-1609592424104-16d55427d057?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595949139467-6a45749f7cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'power-banks',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'UGREEN', fa: 'یوگرین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Nexode Power Bank 20000mAh 130W', fa: 'Nexode پاوربانک 20000mAh 130W' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Power Banks', fa: 'پاوربانک‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '20,000mAh capacity; high-output USB-C charging', fa: 'ظرفیت ۲۰۰۰۰ میلی‌آمپر ساعت؛ شارژ USB-C پرتوان' } }
        ],
        rating: 4.8,
        reviewsCount: 10,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1609592424104-16d55427d057?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1595949139467-6a45749f7cf0?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-3-6',
        slug: 'belkin-boostcharge-10k-usb-c-power-bank',
        title: { en: 'Belkin BoostCharge 10K USB-C Power Bank', fa: 'پاوربانک Belkin BoostCharge 10K' },
        description: { en: 'The Belkin BoostCharge 10K USB-C Power Bank is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پاوربانک Belkin BoostCharge 10K از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Belkin', fa: 'بلکین' },
        tags: ['power-banks', 'mobile', 'belkin'],
        images: [
            'https://images.unsplash.com/photo-1609592424104-16d55427d057?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595949139467-6a45749f7cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'power-banks',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Belkin', fa: 'بلکین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'BoostCharge 10K USB-C Power Bank', fa: 'BoostCharge 10K USB-C پاوربانک' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Power Banks', fa: 'پاوربانک‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '10,000mAh capacity; USB-C charging', fa: 'ظرفیت ۱۰۰۰۰ میلی‌آمپر ساعت؛ شارژ USB-C' } }
        ],
        rating: 4.5,
        reviewsCount: 5,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1609592424104-16d55427d057?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1595949139467-6a45749f7cf0?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-4-1',
        slug: 'spigen-ultra-hybrid-for-iphone-16-pro',
        title: { en: 'Spigen Ultra Hybrid for iPhone 16 Pro', fa: 'قاب Spigen Ultra Hybrid برای iPhone 16 Pro' },
        description: { en: 'The Spigen Ultra Hybrid for iPhone 16 Pro is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'قاب Spigen Ultra Hybrid برای iPhone 16 Pro از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Spigen', fa: 'اسپیگن' },
        tags: ['cases-protectors', 'mobile', 'spigen'],
        images: [
            'https://images.unsplash.com/photo-1601593346740-92561df0e7b2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'cases-protectors',
        collectionSlugs: ['bestsellers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Spigen', fa: 'اسپیگن' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Ultra Hybrid for iPhone 16 Pro', fa: 'قاب هیبریدی برای آیفون 16 Pro' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Cases Protectors', fa: 'قاب‌ها و محافظ‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Clear hybrid case; model-specific cutouts and button covers', fa: 'قاب هیبریدی شفاف؛ برش‌ها و پوشش دکمه متناسب با مدل' } }
        ],
        rating: 4.6,
        reviewsCount: 12,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1601593346740-92561df0e7b2?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-4-2',
        slug: 'spigen-tough-armor-for-iphone-16',
        title: { en: 'Spigen Tough Armor for iPhone 16', fa: 'قاب Spigen Tough Armor برای iPhone 16' },
        description: { en: 'The Spigen Tough Armor for iPhone 16 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'قاب Spigen Tough Armor برای iPhone 16 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Spigen', fa: 'اسپیگن' },
        tags: ['cases-protectors', 'mobile', 'spigen'],
        images: [
            'https://images.unsplash.com/photo-1601593346740-92561df0e7b2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'cases-protectors',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Spigen', fa: 'اسپیگن' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Tough Armor for iPhone 16', fa: 'محافظ مقاوم برای آیفون 16' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Cases Protectors', fa: 'قاب‌ها و محافظ‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Dual-layer protective case; model-specific fit', fa: 'قاب محافظ دولایه؛ متناسب با مدل دستگاه' } }
        ],
        rating: 4.5,
        reviewsCount: 7,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1601593346740-92561df0e7b2?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-4-3',
        slug: 'esr-classic-hybrid-case-for-iphone-16-pro',
        title: { en: 'ESR Classic Hybrid Case for iPhone 16 Pro', fa: 'قاب ESR Classic Hybrid برای iPhone 16 Pro' },
        description: { en: 'The ESR Classic Hybrid Case for iPhone 16 Pro is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'قاب ESR Classic Hybrid برای iPhone 16 Pro از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'ESR', fa: 'ای‌اس‌آر' },
        tags: ['cases-protectors', 'mobile', 'esr'],
        images: [
            'https://images.unsplash.com/photo-1601593346740-92561df0e7b2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'cases-protectors',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'ESR', fa: 'ای‌اس‌آر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Classic Hybrid Case for iPhone 16 Pro', fa: 'Classic Hybrid قاب برای آیفون 16 Pro' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Cases Protectors', fa: 'قاب‌ها و محافظ‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Clear hybrid protection; MagSafe versions available', fa: 'محافظت هیبریدی شفاف؛ نسخه‌های سازگار با MagSafe موجودند' } }
        ],
        rating: 4.4,
        reviewsCount: 5,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1601593346740-92561df0e7b2?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-4-4',
        slug: 'otterbox-commuter-series-for-iphone-16',
        title: { en: 'OtterBox Commuter Series for iPhone 16', fa: 'قاب OtterBox Commuter برای iPhone 16' },
        description: { en: 'The OtterBox Commuter Series for iPhone 16 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'قاب OtterBox Commuter برای iPhone 16 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'OtterBox', fa: 'آترباکس' },
        tags: ['cases-protectors', 'mobile', 'otterbox'],
        images: [
            'https://images.unsplash.com/photo-1601593346740-92561df0e7b2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'cases-protectors',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'OtterBox', fa: 'آترباکس' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Commuter Series for iPhone 16', fa: 'Commuter Series برای آیفون 16' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Cases Protectors', fa: 'قاب‌ها و محافظ‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Protective multi-layer case designed for iPhone 16', fa: 'قاب محافظ چندلایه مخصوص iPhone 16' } }
        ],
        rating: 4.7,
        reviewsCount: 10,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1601593346740-92561df0e7b2?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-4-5',
        slug: 'belkin-screenforce-temperedglass-for-iphone',
        title: { en: 'Belkin ScreenForce TemperedGlass for iPhone', fa: 'محافظ صفحه Belkin ScreenForce' },
        description: { en: 'The Belkin ScreenForce TemperedGlass for iPhone is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'محافظ صفحه Belkin ScreenForce از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Belkin', fa: 'بلکین' },
        tags: ['cases-protectors', 'mobile', 'belkin'],
        images: [
            'https://images.unsplash.com/photo-1601593346740-92561df0e7b2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'cases-protectors',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Belkin', fa: 'بلکین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'ScreenForce TemperedGlass for iPhone', fa: 'ScreenForce محافظ شیشه‌ای صفحه‌نمایش برای آیفون' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Cases Protectors', fa: 'قاب‌ها و محافظ‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Tempered-glass screen protection; device fit depends on exact version', fa: 'محافظ صفحه شیشه حرارت‌دیده؛ سازگاری وابسته به نسخه دقیق دستگاه' } }
        ],
        rating: 4.5,
        reviewsCount: 8,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1601593346740-92561df0e7b2?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-4-6',
        slug: 'zagg-invisibleshield-glass-elite-for-iphone',
        title: { en: 'ZAGG InvisibleShield Glass Elite for iPhone', fa: 'محافظ صفحه ZAGG InvisibleShield Glass Elite' },
        description: { en: 'The ZAGG InvisibleShield Glass Elite for iPhone is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'محافظ صفحه ZAGG InvisibleShield Glass Elite از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'ZAGG', fa: 'زگ' },
        tags: ['cases-protectors', 'mobile', 'zagg'],
        images: [
            'https://images.unsplash.com/photo-1601593346740-92561df0e7b2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'cases-protectors',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'ZAGG', fa: 'زگ' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'InvisibleShield Glass Elite for iPhone', fa: 'InvisibleShield Glass Elite برای آیفون' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Cases Protectors', fa: 'قاب‌ها و محافظ‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Tempered-glass screen protector; select exact phone model', fa: 'محافظ صفحه شیشه حرارت‌دیده؛ انتخاب بر اساس مدل دقیق گوشی' } }
        ],
        rating: 4.8,
        reviewsCount: 15,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1601593346740-92561df0e7b2?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-5-1',
        slug: 'anker-bio-braided-usb-c-to-usb-c-cable-240w',
        title: { en: 'Anker Bio-Braided USB-C to USB-C Cable 240W', fa: 'کابل Anker Bio-Braided USB-C به USB-C 240W' },
        description: { en: 'The Anker Bio-Braided USB-C to USB-C Cable 240W is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کابل Anker Bio-Braided USB-C به USB-C 240W از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Anker', fa: 'انکر' },
        tags: ['cables-adapters', 'mobile', 'anker'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'cables-adapters',
        collectionSlugs: ['bestsellers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Anker', fa: 'انکر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Bio-Braided USB-C to USB-C Cable 240W', fa: 'Bio-Braided USB-C به کابل USB-C 240W' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Cables Adapters', fa: 'کابل‌ها و مبدل‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB-C to USB-C; up to 240W power delivery on compatible devices', fa: 'USB-C به USB-C؛ پشتیبانی تا ۲۴۰ وات روی دستگاه‌های سازگار' } }
        ],
        rating: 4.7,
        reviewsCount: 22,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-5-2',
        slug: 'anker-powerline-iii-usb-c-to-lightning-cable',
        title: { en: 'Anker PowerLine III USB-C to Lightning Cable', fa: 'کابل Anker PowerLine III USB-C به Lightning' },
        description: { en: 'The Anker PowerLine III USB-C to Lightning Cable is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کابل Anker PowerLine III USB-C به Lightning از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Anker', fa: 'انکر' },
        tags: ['cables-adapters', 'mobile', 'anker'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'cables-adapters',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Anker', fa: 'انکر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'PowerLine III USB-C to Lightning Cable', fa: 'PowerLine III USB-C به لایتنینگ کابل' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Cables Adapters', fa: 'کابل‌ها و مبدل‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB-C to Lightning cable for compatible Apple devices', fa: 'کابل USB-C به Lightning برای دستگاه‌های سازگار اپل' } }
        ],
        rating: 4.6,
        reviewsCount: 11,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-5-3',
        slug: 'ugreen-usb-c-to-usb-c-100w-cable',
        title: { en: 'UGREEN USB-C to USB-C 100W Cable', fa: 'کابل UGREEN USB-C به USB-C صد وات' },
        description: { en: 'The UGREEN USB-C to USB-C 100W Cable is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کابل UGREEN USB-C به USB-C صد وات از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'UGREEN', fa: 'یوگرین' },
        tags: ['cables-adapters', 'mobile', 'ugreen'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'cables-adapters',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'UGREEN', fa: 'یوگرین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'USB-C to USB-C 100W Cable', fa: 'USB-C به USB-C 100W کابل' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Cables Adapters', fa: 'کابل‌ها و مبدل‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB-C charging cable; up to 100W on compatible chargers', fa: 'کابل شارژ USB-C؛ تا ۱۰۰ وات با شارژر سازگار' } }
        ],
        rating: 4.5,
        reviewsCount: 9,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-5-4',
        slug: 'belkin-boostcharge-usb-c-to-usb-c-cable-100w',
        title: { en: 'Belkin BoostCharge USB-C to USB-C Cable 100W', fa: 'کابل Belkin BoostCharge USB-C 100W' },
        description: { en: 'The Belkin BoostCharge USB-C to USB-C Cable 100W is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کابل Belkin BoostCharge USB-C 100W از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Belkin', fa: 'بلکین' },
        tags: ['cables-adapters', 'mobile', 'belkin'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'cables-adapters',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Belkin', fa: 'بلکین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'BoostCharge USB-C to USB-C Cable 100W', fa: 'BoostCharge USB-C به کابل USB-C 100W' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Cables Adapters', fa: 'کابل‌ها و مبدل‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB-C to USB-C; supports up to 100W charging', fa: 'USB-C به USB-C؛ پشتیبانی از شارژ تا ۱۰۰ وات' } }
        ],
        rating: 4.4,
        reviewsCount: 6,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-5-5',
        slug: 'apple-usb-c-to-lightning-cable',
        title: { en: 'Apple USB-C to Lightning Cable', fa: 'کابل اپل USB-C به Lightning' },
        description: { en: 'The Apple USB-C to Lightning Cable is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کابل اپل USB-C به Lightning از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Apple', fa: 'اپل' },
        tags: ['cables-adapters', 'mobile', 'apple'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'cables-adapters',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Apple', fa: 'اپل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'USB-C to Lightning Cable', fa: 'USB-C به لایتنینگ کابل' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Cables Adapters', fa: 'کابل‌ها و مبدل‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB-C to Lightning charging and data cable', fa: 'کابل شارژ و انتقال داده USB-C به Lightning' } }
        ],
        rating: 4.8,
        reviewsCount: 30,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-m-5-6',
        slug: 'samsung-usb-c-to-usb-c-cable-5a',
        title: { en: 'Samsung USB-C to USB-C Cable 5A', fa: 'کابل سامسونگ USB-C به USB-C پنج آمپر' },
        description: { en: 'The Samsung USB-C to USB-C Cable 5A is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کابل سامسونگ USB-C به USB-C پنج آمپر از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Samsung', fa: 'سامسونگ' },
        tags: ['cables-adapters', 'mobile', 'samsung'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'mobile',
        subcategorySlug: 'cables-adapters',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Samsung', fa: 'سامسونگ' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'USB-C to USB-C Cable 5A', fa: 'USB-C به کابل USB-C 5A' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Cables Adapters', fa: 'کابل‌ها و مبدل‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB-C cable supporting compatible Samsung fast charging', fa: 'کابل USB-C با پشتیبانی از شارژ سریع سازگار سامسونگ' } }
        ],
        rating: 4.6,
        reviewsCount: 17,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-1-1',
        slug: 'apple-watch-series-10',
        title: { en: 'Apple Watch Series 10', fa: 'اپل واچ سری ۱۰' },
        description: { en: 'The Apple Watch Series 10 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'اپل واچ سری ۱۰ از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Apple', fa: 'اپل' },
        tags: ['smartwatches', 'watches', 'apple'],
        images: [
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'smartwatches',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: true,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Apple', fa: 'اپل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Apple Watch Series 10', fa: 'Apple Watch Series 10' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Smart Watches', fa: 'ساعت‌های هوشمند' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Thinnest Apple Watch design; wide-angle OLED display; advanced health sensors', fa: 'باریک‌ترین طراحی اپل واچ؛ نمایشگر OLED زاویه دید وسیع؛ سنسورهای سلامت پیشرفته' } }
        ],
        rating: 4.8,
        reviewsCount: 18,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-1-2',
        slug: 'apple-watch-ultra-2',
        title: { en: 'Apple Watch Ultra 2', fa: 'اپل واچ اولترا ۲' },
        description: { en: 'The Apple Watch Ultra 2 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'اپل واچ اولترا ۲ از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Apple', fa: 'اپل' },
        tags: ['smartwatches', 'watches', 'apple'],
        images: [
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'smartwatches',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Apple', fa: 'اپل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Apple Watch Ultra 2', fa: 'Apple Watch Ultra 2' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Smart Watches', fa: 'ساعت‌های هوشمند' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Rugged titanium case; extremely bright display; dual-frequency GPS', fa: 'بدنه مقاوم تیتانیومی؛ نمایشگر فوق‌العاده روشن؛ GPS دوفرکانس' } }
        ],
        rating: 4.9,
        reviewsCount: 22,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-1-3',
        slug: 'samsung-galaxy-watch-7',
        title: { en: 'Samsung Galaxy Watch 7', fa: 'سامسونگ گلکسی واچ ۷' },
        description: { en: 'The Samsung Galaxy Watch 7 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'سامسونگ گلکسی واچ ۷ از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Samsung', fa: 'سامسونگ' },
        tags: ['smartwatches', 'watches', 'samsung'],
        images: [
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'smartwatches',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Samsung', fa: 'سامسونگ' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Galaxy Watch 7', fa: 'Galaxy Watch 7' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Smart Watches', fa: 'ساعت‌های هوشمند' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'BioActive Sensor; dual-frequency GPS; Wear OS powered by Samsung', fa: 'سنسور BioActive؛ GPS دوفرکانس؛ سیستم‌عامل Wear OS با بهینه‌سازی سامسونگ' } }
        ],
        rating: 4.6,
        reviewsCount: 14,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-1-4',
        slug: 'samsung-galaxy-watch-ultra',
        title: { en: 'Samsung Galaxy Watch Ultra', fa: 'سامسونگ گلکسی واچ اولترا' },
        description: { en: 'The Samsung Galaxy Watch Ultra is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'سامسونگ گلکسی واچ اولترا از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Samsung', fa: 'سامسونگ' },
        tags: ['smartwatches', 'watches', 'samsung'],
        images: [
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'smartwatches',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Samsung', fa: 'سامسونگ' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Galaxy Watch Ultra', fa: 'Galaxy Watch Ultra' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Smart Watches', fa: 'ساعت‌های هوشمند' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Titanium cushion design; 10 ATM water resistance; multi-sport endurance tracking', fa: 'طراحی بالشتکی تیتانیومی؛ مقاومت در برابر آب تا فشار 10 ATM؛ ردیابی استقامت چندورزشی' } }
        ],
        rating: 4.7,
        reviewsCount: 11,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-1-5',
        slug: 'garmin-fenix-8',
        title: { en: 'Garmin Fenix 8', fa: 'ساعت گارمین Fenix 8' },
        description: { en: 'The Garmin Fenix 8 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ساعت گارمین Fenix 8 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Garmin', fa: 'گارمین' },
        tags: ['smartwatches', 'watches', 'garmin'],
        images: [
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'smartwatches',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Garmin', fa: 'گارمین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Fenix 8', fa: 'Fenix 8' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Smart Watches', fa: 'ساعت‌های هوشمند' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'AMOLED or Solar charging display options; advanced training metrics; built-in speaker/mic', fa: 'گزینه‌های نمایشگر AMOLED یا شارژ خورشیدی؛ معیارهای تمرینی پیشرفته؛ بلندگو و میکروفون داخلی' } }
        ],
        rating: 4.9,
        reviewsCount: 16,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-1-6',
        slug: 'garmin-forerunner-965',
        title: { en: 'Garmin Forerunner 965', fa: 'ساعت گارمین Forerunner 965' },
        description: { en: 'The Garmin Forerunner 965 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ساعت گارمین Forerunner 965 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Garmin', fa: 'گارمین' },
        tags: ['smartwatches', 'watches', 'garmin'],
        images: [
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'smartwatches',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Garmin', fa: 'گارمین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Forerunner 965', fa: 'Forerunner 965' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Smart Watches', fa: 'ساعت‌های هوشمند' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'AMOLED touchscreen display; titanium bezel; advanced running dynamics and mapping', fa: 'نمایشگر لمسی AMOLED؛ قاب تیتانیومی؛ دینامیک پیشرفته دویدن و نقشه‌برداری' } }
        ],
        rating: 4.8,
        reviewsCount: 19,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-2-1',
        slug: 'fitbit-charge-6',
        title: { en: 'Fitbit Charge 6', fa: 'مچ‌بند تناسب‌اندام فیت‌بیت Charge 6' },
        description: { en: 'The Fitbit Charge 6 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مچ‌بند تناسب‌اندام فیت‌بیت Charge 6 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Fitbit', fa: 'فیت‌بیت' },
        tags: ['fitness-bands', 'watches', 'fitbit'],
        images: [
            'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'fitness-bands',
        collectionSlugs: ['bestsellers', 'special-offers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Fitbit', fa: 'فیت‌بیت' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Charge 6', fa: 'Charge 6' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Fitness Bands', fa: 'مچ‌بندهای ورزشی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Google built-in features; advanced heart rate tracking; built-in GPS', fa: 'امکانات یکپارچه گوگل؛ ردیابی پیشرفته ضربان قلب؛ GPS داخلی' } }
        ],
        rating: 4.5,
        reviewsCount: 13,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-2-2',
        slug: 'xiaomi-smart-band-9',
        title: { en: 'Xiaomi Smart Band 9', fa: 'مچ‌بند هوشمند شیائومی Smart Band 9' },
        description: { en: 'The Xiaomi Smart Band 9 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مچ‌بند هوشمند شیائومی Smart Band 9 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Xiaomi', fa: 'شیائومی' },
        tags: ['fitness-bands', 'watches', 'xiaomi'],
        images: [
            'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'fitness-bands',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Xiaomi', fa: 'شیائومی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Smart Band 9', fa: 'Smart بند 9' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Fitness Bands', fa: 'مچ‌بندهای ورزشی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Bright AMOLED display; metal body finish; multi-day battery life', fa: 'نمایشگر روشن AMOLED؛ فریم فلزی بدنه؛ شارژدهی چندروزه باتری' } }
        ],
        rating: 4.6,
        reviewsCount: 20,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-2-3',
        slug: 'huawei-band-9',
        title: { en: 'Huawei Band 9', fa: 'مچ‌بند هوشمند هواوی Band 9' },
        description: { en: 'The Huawei Band 9 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مچ‌بند هوشمند هواوی Band 9 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Huawei', fa: 'هواوی' },
        tags: ['fitness-bands', 'watches', 'huawei'],
        images: [
            'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'fitness-bands',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Huawei', fa: 'هواوی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Band 9', fa: 'بند 9' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Fitness Bands', fa: 'مچ‌بندهای ورزشی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'AMOLED display; TruSleep science-based sleep tracking; lightweight design', fa: 'نمایشگر AMOLED؛ ردیابی خواب علمی TruSleep؛ طراحی سبک‌وزن' } }
        ],
        rating: 4.4,
        reviewsCount: 8,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-2-4',
        slug: 'amazfit-band-7',
        title: { en: 'Amazfit Band 7', fa: 'مچ‌بند امزفیت Band 7' },
        description: { en: 'The Amazfit Band 7 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مچ‌بند امزفیت Band 7 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Amazfit', fa: 'امزفیت' },
        tags: ['fitness-bands', 'watches', 'amazfit'],
        images: [
            'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'fitness-bands',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Amazfit', fa: 'امزفیت' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Band 7', fa: 'بند 7' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Fitness Bands', fa: 'مچ‌بندهای ورزشی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Large AMOLED display; 18-day battery life; 24h health monitoring', fa: 'نمایشگر بزرگ AMOLED؛ شارژدهی ۱۸ روزه باتری؛ پایش ۲۴ ساعته سلامت' } }
        ],
        rating: 4.5,
        reviewsCount: 11,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-2-5',
        slug: 'garmin-vivosmart-5',
        title: { en: 'Garmin vivosmart 5', fa: 'مچ‌بند گارمین vivosmart 5' },
        description: { en: 'The Garmin vivosmart 5 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مچ‌بند گارمین vivosmart 5 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Garmin', fa: 'گارمین' },
        tags: ['fitness-bands', 'watches', 'garmin'],
        images: [
            'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'fitness-bands',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Garmin', fa: 'گارمین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'vivosmart 5', fa: 'vivosmart 5' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Fitness Bands', fa: 'مچ‌بندهای ورزشی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Easy-to-use fitness tracker; sleep score; heart rate and Body Battery monitoring', fa: 'ردیاب تناسب‌اندام آسان‌کاربر؛ امتیاز خواب؛ پایش ضربان قلب و انرژی بدن (Body Battery)' } }
        ],
        rating: 4.3,
        reviewsCount: 7,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-2-6',
        slug: 'polar-ignite-3-fitness-band',
        title: { en: 'Polar Ignite 3 Fitness Tracker', fa: 'ردیاب تناسب‌اندام پولار Ignite 3' },
        description: { en: 'The Polar Ignite 3 Fitness Tracker is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ردیاب تناسب‌اندام پولار Ignite 3 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Polar', fa: 'پولار' },
        tags: ['fitness-bands', 'watches', 'polar'],
        images: [
            'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'fitness-bands',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Polar', fa: 'پولار' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Ignite 3', fa: 'Ignite 3' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Fitness Bands', fa: 'مچ‌بندهای ورزشی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'AMOLED touchscreen; dual-frequency GPS; Sleep Plus Stages guidance', fa: 'صفحه نمایش لمسی AMOLED؛ GPS دوفرکانس؛ راهنمای جامع مراحل خواب Sleep Plus Stages' } }
        ],
        rating: 4.6,
        reviewsCount: 9,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-3-1',
        slug: 'apple-watch-alpine-loop',
        title: { en: 'Apple Watch Alpine Loop', fa: 'بند اپل واچ مدل Alpine Loop' },
        description: { en: 'The Apple Watch Alpine Loop is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'بند اپل واچ مدل Alpine Loop از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Apple', fa: 'اپل' },
        tags: ['replacement-straps', 'watches', 'apple'],
        images: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'replacement-straps',
        collectionSlugs: ['bestsellers', 'special-offers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Apple', fa: 'اپل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Alpine Loop', fa: 'Alpine Loop' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Watch Bands', fa: 'بندهای ساعت' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'High-strength continuous weave; G-hook titanium fastener', fa: 'بافت پیوسته با استحکام بالا؛ قلاب G شکل تیتانیومی' } }
        ],
        rating: 4.7,
        reviewsCount: 15,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-3-2',
        slug: 'apple-watch-ocean-band',
        title: { en: 'Apple Watch Ocean Band', fa: 'بند اپل واچ مدل Ocean Band' },
        description: { en: 'The Apple Watch Ocean Band is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'بند اپل واچ مدل Ocean Band از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Apple', fa: 'اپل' },
        tags: ['replacement-straps', 'watches', 'apple'],
        images: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'replacement-straps',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Apple', fa: 'اپل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Ocean Band', fa: 'Ocean بند' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Watch Bands', fa: 'بندهای ساعت' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Molded elastomer with tubular geometry; corrosion-resistant titanium buckle', fa: 'الاستومر قالب‌گیری شده با هندسه لوله‌ای؛ سگک مقاوم در برابر خوردگی تیتانیومی' } }
        ],
        rating: 4.8,
        reviewsCount: 19,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-3-3',
        slug: 'samsung-galaxy-watch-fabric-band',
        title: { en: 'Samsung Galaxy Watch Fabric Band', fa: 'بند پارچه‌ای گلکسی واچ سامسونگ' },
        description: { en: 'The Samsung Galaxy Watch Fabric Band is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'بند پارچه‌ای گلکسی واچ سامسونگ از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Samsung', fa: 'سامسونگ' },
        tags: ['replacement-straps', 'watches', 'samsung'],
        images: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'replacement-straps',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Samsung', fa: 'سامسونگ' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Galaxy Watch Fabric Band', fa: 'Galaxy Watch Fabric بند' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Watch Bands', fa: 'بندهای ساعت' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Lightweight breathable fabric; quick-release spring bar mechanism', fa: 'پارچه سبک و تنفس‌پذیر؛ مکانیزم فنری اتصال سریع' } }
        ],
        rating: 4.5,
        reviewsCount: 10,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-3-4',
        slug: 'spigen-rugged-armor-pro-for-galaxy-watch',
        title: { en: 'Spigen Rugged Armor Pro for Galaxy Watch', fa: 'بند و قاب محافظ Spigen Rugged Armor Pro' },
        description: { en: 'The Spigen Rugged Armor Pro for Galaxy Watch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'بند و قاب محافظ Spigen Rugged Armor Pro از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Spigen', fa: 'اسپیگن' },
        tags: ['replacement-straps', 'watches', 'spigen'],
        images: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'replacement-straps',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Spigen', fa: 'اسپیگن' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Rugged Armor Pro for Galaxy Watch', fa: 'محافظ مقاوم Pro برای گلکسی واچ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Watch Bands', fa: 'بندهای ساعت' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'All-in-one band and case cover; matte finish with carbon fiber accents', fa: 'بند و کاور محافظ یکپارچه؛ پوشش مات با جزئیات فیبر کربن' } }
        ],
        rating: 4.6,
        reviewsCount: 12,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-3-5',
        slug: 'nomad-sport-band-for-apple-watch',
        title: { en: 'Nomad Sport Band for Apple Watch', fa: 'بند ورزشی Nomad برای اپل واچ' },
        description: { en: 'The Nomad Sport Band for Apple Watch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'بند ورزشی Nomad برای اپل واچ از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Nomad', fa: 'نوماد' },
        tags: ['replacement-straps', 'watches', 'nomad'],
        images: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'replacement-straps',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Nomad', fa: 'نوماد' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Sport Band for Apple Watch', fa: 'Sport بند برای اپل واچ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Watch Bands', fa: 'بندهای ساعت' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'FKM fluoroelastomer rubber; lightweight and ventilation channels', fa: 'لاستیک فلوئوروالاستومر FKM؛ سبک‌وزن با کانال‌های تهویه هوا' } }
        ],
        rating: 4.8,
        reviewsCount: 14,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-3-6',
        slug: 'burga-designer-watch-strap',
        title: { en: 'Burga Designer Watch Strap', fa: 'بند طراحى‌شده Burga برای ساعت هوشمند' },
        description: { en: 'The Burga Designer Watch Strap is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'بند طراحى‌شده Burga برای ساعت هوشمند از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Burga', fa: 'برگا' },
        tags: ['replacement-straps', 'watches', 'burga'],
        images: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'replacement-straps',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Burga', fa: 'برگا' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Designer Watch Strap', fa: 'Designer بند ساعت' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Watch Bands', fa: 'بندهای ساعت' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Fashion-forward patterned strap; durable stainless steel hardware', fa: 'بند با طرح‌های فانتزی و مد روز؛ قطعات استیل ضدزنگ با دوام بالا' } }
        ],
        rating: 4.4,
        reviewsCount: 8,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-4-1',
        slug: 'belkin-boostcharge-pro-3-in-1-wireless-charger',
        title: { en: 'Belkin BoostCharge Pro 3-in-1 Wireless Charger', fa: 'پایه شارژ بی‌سیم Belkin BoostCharge Pro سه کاره' },
        description: { en: 'The Belkin BoostCharge Pro 3-in-1 Wireless Charger is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پایه شارژ بی‌سیم Belkin BoostCharge Pro سه کاره از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Belkin', fa: 'بلکین' },
        tags: ['charging-docks-w', 'watches', 'belkin'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'charging-docks-w',
        collectionSlugs: ['bestsellers', 'new-arrivals'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Belkin', fa: 'بلکین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'BoostCharge Pro 3-in-1 Wireless Charger', fa: 'BoostCharge Pro 3-in-1 بی‌سیم شارژر' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Charging Docks', fa: 'پایه‌های شارژ' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'MagSafe fast wireless charging for iPhone, Apple Watch, and AirPods', fa: 'شارژ بی‌سیم سریع MagSafe برای آیفون، اپل واچ و ایرپادز' } }
        ],
        rating: 4.9,
        reviewsCount: 27,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-4-2',
        slug: 'samsung-galaxy-watch-wireless-charger',
        title: { en: 'Samsung Galaxy Watch Wireless Charger', fa: 'شارژر بی‌سیم گلکسی واچ سامسونگ' },
        description: { en: 'The Samsung Galaxy Watch Wireless Charger is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'شارژر بی‌سیم گلکسی واچ سامسونگ از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Samsung', fa: 'سامسونگ' },
        tags: ['charging-docks-w', 'watches', 'samsung'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'charging-docks-w',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Samsung', fa: 'سامسونگ' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Galaxy Watch Wireless Charger', fa: 'Galaxy Watch بی‌سیم شارژر' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Charging Docks', fa: 'پایه‌های شارژ' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Magnetic puck design; USB-C connection; fast wireless charging support', fa: 'طراحی مگنتی دایره‌ای؛ اتصال USB-C؛ پشتیبانی از شارژ بی‌سیم سریع' } }
        ],
        rating: 4.6,
        reviewsCount: 15,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-4-3',
        slug: 'anker-3-in-1-cube-with-magsafe',
        title: { en: 'Anker 3-in-1 Cube with MagSafe', fa: 'پایه شارژ مکعبی Anker سه کاره با MagSafe' },
        description: { en: 'The Anker 3-in-1 Cube with MagSafe is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پایه شارژ مکعبی Anker سه کاره با MagSafe از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Anker', fa: 'انکر' },
        tags: ['charging-docks-w', 'watches', 'anker'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'charging-docks-w',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Anker', fa: 'انکر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: '3-in-1 Cube with MagSafe', fa: '3-in-1 مکعب با مگ‌سیف' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Charging Docks', fa: 'پایه‌های شارژ' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Ultra-compact foldable design; official MagSafe charging module; Apple Watch fast charging', fa: 'طراحی تاشو فوق‌العاده جمع‌وجور؛ ماژول شارژ رسمی MagSafe؛ شارژ سریع اپل واچ' } }
        ],
        rating: 4.8,
        reviewsCount: 21,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-4-4',
        slug: 'satechi-usb-c-magnetic-charging-dock-for-apple-watch',
        title: { en: 'Satechi USB-C Magnetic Charging Dock for Apple Watch', fa: 'پایه شارژ مگنتی Satechi USB-C برای اپل واچ' },
        description: { en: 'The Satechi USB-C Magnetic Charging Dock for Apple Watch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پایه شارژ مگنتی Satechi USB-C برای اپل واچ از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Satechi', fa: 'ساتچی' },
        tags: ['charging-docks-w', 'watches', 'satechi'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'charging-docks-w',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Satechi', fa: 'ساتچی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'USB-C Magnetic Charging Dock for Apple Watch', fa: 'USB-C Magnetic پایه شارژ برای اپل واچ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Charging Docks', fa: 'پایه‌های شارژ' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Direct USB-C port connection; portable design for travel or desks', fa: 'اتصال مستقیم به درگاه USB-C؛ طراحی قابل حمل مناسب سفر یا میز کار' } }
        ],
        rating: 4.5,
        reviewsCount: 9,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-4-5',
        slug: 'elago-w3-stand-for-apple-watch',
        title: { en: 'Elago W3 Stand for Apple Watch', fa: 'پایه رومیزی ساعت الگو مدل W3' },
        description: { en: 'The Elago W3 Stand for Apple Watch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پایه رومیزی ساعت الگو مدل W3 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Elago', fa: 'الگو' },
        tags: ['charging-docks-w', 'watches', 'elago'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'charging-docks-w',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Elago', fa: 'الگو' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'W3 Stand for Apple Watch', fa: 'W3 پایه برای اپل واچ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Charging Docks', fa: 'پایه‌های شارژ' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Retro Macintosh computer design; soft silicone material to prevent scratches', fa: 'طراحی کلاسیک کامپیوتر مکینتاش؛ جنس سیلیکونی نرم جهت جلوگیری از خط و خش' } }
        ],
        rating: 4.7,
        reviewsCount: 18,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-4-6',
        slug: 'nomad-base-one-max-3-in-1',
        title: { en: 'Nomad Base One Max 3-in-1', fa: 'پایه شارژ Nomad Base One Max سه کاره' },
        description: { en: 'The Nomad Base One Max 3-in-1 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پایه شارژ Nomad Base One Max سه کاره از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Nomad', fa: 'نوماد' },
        tags: ['charging-docks-w', 'watches', 'nomad'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'charging-docks-w',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Nomad', fa: 'نوماد' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Base One Max 3-in-1', fa: 'Base One Max 3-in-1' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Charging Docks', fa: 'پایه‌های شارژ' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Official MFi MagSafe charging; solid metal and glass chassis design', fa: 'شارژر رسمی تاییدشده MFi MagSafe؛ بدنه فلزی سنگین و پنل شیشه‌ای' } }
        ],
        rating: 4.9,
        reviewsCount: 16,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-5-1',
        slug: 'spigen-thin-fit-case-for-apple-watch',
        title: { en: 'Spigen Thin Fit Case for Apple Watch', fa: 'قاب محافظ Spigen Thin Fit برای Apple Watch' },
        description: { en: 'The Spigen Thin Fit Case for Apple Watch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'قاب محافظ Spigen Thin Fit برای Apple Watch از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Spigen', fa: 'اسپیگن' },
        tags: ['watch-protectors', 'watches', 'spigen'],
        images: [
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'watch-protectors',
        collectionSlugs: ['bestsellers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Spigen', fa: 'اسپیگن' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Thin Fit Case for Apple Watch', fa: 'Thin Fit قاب برای اپل واچ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Watch Protectors', fa: 'محافظ‌های ساعت' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Slim protective case; exact fit depends on watch case size', fa: 'قاب محافظ باریک؛ تناسب دقیق وابسته به سایز قاب ساعت' } }
        ],
        rating: 4.5,
        reviewsCount: 4,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-5-2',
        slug: 'spigen-rugged-armor-pro-for-apple-watch',
        title: { en: 'Spigen Rugged Armor Pro for Apple Watch', fa: 'قاب Spigen Rugged Armor Pro برای Apple Watch' },
        description: { en: 'The Spigen Rugged Armor Pro for Apple Watch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'قاب Spigen Rugged Armor Pro برای Apple Watch از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Spigen', fa: 'اسپیگن' },
        tags: ['watch-protectors', 'watches', 'spigen'],
        images: [
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'watch-protectors',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Spigen', fa: 'اسپیگن' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Rugged Armor Pro for Apple Watch', fa: 'محافظ مقاوم Pro برای اپل واچ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Watch Protectors', fa: 'محافظ‌های ساعت' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Protective case-and-band design for compatible sizes', fa: 'طراحی قاب و بند محافظ برای سایزهای سازگار' } }
        ],
        rating: 4.5,
        reviewsCount: 6,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-5-3',
        slug: 'ringke-slim-case-for-apple-watch',
        title: { en: 'Ringke Slim Case for Apple Watch', fa: 'قاب Ringke Slim برای Apple Watch' },
        description: { en: 'The Ringke Slim Case for Apple Watch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'قاب Ringke Slim برای Apple Watch از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Ringke', fa: 'رینگکی' },
        tags: ['watch-protectors', 'watches', 'ringke'],
        images: [
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'watch-protectors',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Ringke', fa: 'رینگکی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Slim Case for Apple Watch', fa: 'Slim قاب برای اپل واچ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Watch Protectors', fa: 'محافظ‌های ساعت' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Slim snap-on watch case; select exact size', fa: 'قاب باریک کلیپسی ساعت؛ انتخاب سایز دقیق' } }
        ],
        rating: 4.5,
        reviewsCount: 3,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-5-4',
        slug: 'esr-armorite-screen-protector-for-apple-watch',
        title: { en: 'ESR Armorite Screen Protector for Apple Watch', fa: 'محافظ صفحه ESR Armorite برای Apple Watch' },
        description: { en: 'The ESR Armorite Screen Protector for Apple Watch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'محافظ صفحه ESR Armorite برای Apple Watch از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'ESR', fa: 'ای‌اس‌آر' },
        tags: ['watch-protectors', 'watches', 'esr'],
        images: [
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'watch-protectors',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'ESR', fa: 'ای‌اس‌آر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Armorite Screen Protector for Apple Watch', fa: 'Armorite محافظ صفحه‌نمایش برای اپل واچ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Watch Protectors', fa: 'محافظ‌های ساعت' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Tempered-glass screen protection for specified watch size', fa: 'محافظ صفحه شیشه حرارت‌دیده برای سایز مشخص ساعت' } }
        ],
        rating: 4.5,
        reviewsCount: 8,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-5-5',
        slug: 'zagg-invisibleshield-glass-elite-for-apple-watch',
        title: { en: 'ZAGG InvisibleShield Glass Elite for Apple Watch', fa: 'محافظ ZAGG Glass Elite برای Apple Watch' },
        description: { en: 'The ZAGG InvisibleShield Glass Elite for Apple Watch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'محافظ ZAGG Glass Elite برای Apple Watch از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'ZAGG', fa: 'زگ' },
        tags: ['watch-protectors', 'watches', 'zagg'],
        images: [
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'watch-protectors',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'ZAGG', fa: 'زگ' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'InvisibleShield Glass Elite for Apple Watch', fa: 'InvisibleShield Glass Elite برای اپل واچ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Watch Protectors', fa: 'محافظ‌های ساعت' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Screen protection; check exact watch generation and size', fa: 'محافظ صفحه؛ بررسی نسل و اندازه دقیق ساعت' } }
        ],
        rating: 4.5,
        reviewsCount: 5,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-w-5-6',
        slug: 'otterbox-exo-edge-case-for-apple-watch',
        title: { en: 'OtterBox Exo Edge Case for Apple Watch', fa: 'قاب OtterBox Exo Edge برای Apple Watch' },
        description: { en: 'The OtterBox Exo Edge Case for Apple Watch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'قاب OtterBox Exo Edge برای Apple Watch از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'OtterBox', fa: 'آترباکس' },
        tags: ['watch-protectors', 'watches', 'otterbox'],
        images: [
            'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'watches',
        subcategorySlug: 'watch-protectors',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'OtterBox', fa: 'آترباکس' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Exo Edge Case for Apple Watch', fa: 'Exo Edge قاب برای اپل واچ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Watch Protectors', fa: 'محافظ‌های ساعت' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Protective watch case; compatibility varies by model', fa: 'قاب محافظ ساعت؛ سازگاری وابسته به مدل' } }
        ],
        rating: 4.5,
        reviewsCount: 7,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-1-1',
        slug: 'sony-wf-1000xm5',
        title: { en: 'Sony WF-1000XM5', fa: 'ایربادز Sony WF-1000XM5' },
        description: { en: 'The Sony WF-1000XM5 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ایربادز Sony WF-1000XM5 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Sony', fa: 'سونی' },
        tags: ['wireless-earbuds', 'earbuds', 'sony'],
        images: [
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'wireless-earbuds',
        collectionSlugs: ['bestsellers', 'new-arrivals'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Sony', fa: 'سونی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'WF-1000XM5', fa: 'WF-1000XM5' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Wireless Earbuds', fa: 'ایربادهای بی‌سیم' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'True wireless earbuds with noise cancelling and high-resolution audio support', fa: 'ایربادز کاملاً بی‌سیم با حذف نویز و پشتیبانی از صدای با وضوح بالا' } }
        ],
        rating: 4.8,
        reviewsCount: 24,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-1-2',
        slug: 'sony-wf-c700n',
        title: { en: 'Sony WF-C700N', fa: 'ایربادز Sony WF-C700N' },
        description: { en: 'The Sony WF-C700N is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ایربادز Sony WF-C700N از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Sony', fa: 'سونی' },
        tags: ['wireless-earbuds', 'earbuds', 'sony'],
        images: [
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'wireless-earbuds',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Sony', fa: 'سونی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'WF-C700N', fa: 'WF-C700N' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Wireless Earbuds', fa: 'ایربادهای بی‌سیم' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'True wireless earbuds with noise cancelling', fa: 'ایربادز کاملاً بی‌سیم با حذف نویز' } }
        ],
        rating: 4.6,
        reviewsCount: 12,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-1-3',
        slug: 'samsung-galaxy-buds3-pro',
        title: { en: 'Samsung Galaxy Buds3 Pro', fa: 'سامسونگ Galaxy Buds3 Pro' },
        description: { en: 'The Samsung Galaxy Buds3 Pro is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'سامسونگ Galaxy Buds3 Pro از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Samsung', fa: 'سامسونگ' },
        tags: ['wireless-earbuds', 'earbuds', 'samsung'],
        images: [
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'wireless-earbuds',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Samsung', fa: 'سامسونگ' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Galaxy Buds3 Pro', fa: 'Galaxy Buds3 Pro' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Wireless Earbuds', fa: 'ایربادهای بی‌سیم' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'True wireless earbuds with adaptive noise control', fa: 'ایربادز کاملاً بی‌سیم با کنترل تطبیقی نویز' } }
        ],
        rating: 4.7,
        reviewsCount: 15,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-1-4',
        slug: 'apple-airpods-pro-2nd-generation-with-magsafe-usb-c-case',
        title: { en: 'Apple AirPods Pro (2nd generation) with MagSafe USB-C Case', fa: 'اپل AirPods Pro نسل دوم با کیس USB-C' },
        description: { en: 'The Apple AirPods Pro (2nd generation) with MagSafe USB-C Case is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'اپل AirPods Pro نسل دوم با کیس USB-C از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Apple', fa: 'اپل' },
        tags: ['wireless-earbuds', 'earbuds', 'apple'],
        images: [
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'wireless-earbuds',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Apple', fa: 'اپل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'AirPods Pro (2nd generation) with MagSafe USB-C Case', fa: 'AirPods Pro (2nd generation) با مگ‌سیف USB-C قاب' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Wireless Earbuds', fa: 'ایربادهای بی‌سیم' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Active Noise Cancellation; Transparency mode; USB-C case', fa: 'حذف نویز فعال؛ حالت شفافیت؛ کیس USB-C' } }
        ],
        rating: 4.9,
        reviewsCount: 35,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-1-5',
        slug: 'google-pixel-buds-pro-2',
        title: { en: 'Google Pixel Buds Pro 2', fa: 'گوگل Pixel Buds Pro 2' },
        description: { en: 'The Google Pixel Buds Pro 2 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'گوگل Pixel Buds Pro 2 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Google', fa: 'گوگل' },
        tags: ['wireless-earbuds', 'earbuds', 'google'],
        images: [
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'wireless-earbuds',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Google', fa: 'گوگل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Pixel Buds Pro 2', fa: 'Pixel Buds Pro 2' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Wireless Earbuds', fa: 'ایربادهای بی‌سیم' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'True wireless earbuds with active noise cancellation', fa: 'ایربادز کاملاً بی‌سیم با حذف نویز فعال' } }
        ],
        rating: 4.7,
        reviewsCount: 11,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-1-6',
        slug: 'jabra-elite-8-active-gen-2',
        title: { en: 'Jabra Elite 8 Active Gen 2', fa: 'ایربادز Jabra Elite 8 Active Gen 2' },
        description: { en: 'The Jabra Elite 8 Active Gen 2 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ایربادز Jabra Elite 8 Active Gen 2 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Jabra', fa: 'جبرا' },
        tags: ['wireless-earbuds', 'earbuds', 'jabra'],
        images: [
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'wireless-earbuds',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Jabra', fa: 'جبرا' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Elite 8 Active Gen 2', fa: 'Elite 8 Active Gen 2' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Wireless Earbuds', fa: 'ایربادهای بی‌سیم' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Rugged true wireless earbuds; active noise cancellation', fa: 'ایربادز مقاوم کاملاً بی‌سیم؛ حذف نویز فعال' } }
        ],
        rating: 4.6,
        reviewsCount: 9,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-2-1',
        slug: 'sony-wh-1000xm5',
        title: { en: 'Sony WH-1000XM5', fa: 'هدفون Sony WH-1000XM5' },
        description: { en: 'The Sony WH-1000XM5 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدفون Sony WH-1000XM5 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Sony', fa: 'سونی' },
        tags: ['over-ear-headphones', 'earbuds', 'sony'],
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'over-ear-headphones',
        collectionSlugs: ['bestsellers', 'new-arrivals'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Sony', fa: 'سونی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'WH-1000XM5', fa: 'WH-1000XM5' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Over Ear Headphones', fa: 'هدفون‌های دورگوشی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless over-ear headphones with active noise cancellation', fa: 'هدفون بی‌سیم دورگوشی با حذف نویز فعال' } }
        ],
        rating: 4.9,
        reviewsCount: 42,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-2-2',
        slug: 'sony-wh-ch520',
        title: { en: 'Sony WH-CH520', fa: 'هدفون Sony WH-CH520' },
        description: { en: 'The Sony WH-CH520 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدفون Sony WH-CH520 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Sony', fa: 'سونی' },
        tags: ['over-ear-headphones', 'earbuds', 'sony'],
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'over-ear-headphones',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Sony', fa: 'سونی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'WH-CH520', fa: 'WH-CH520' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Over Ear Headphones', fa: 'هدفون‌های دورگوشی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless on-ear headphones; long battery life', fa: 'هدفون بی‌سیم روی‌گوش؛ شارژدهی طولانی' } }
        ],
        rating: 4.5,
        reviewsCount: 16,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-2-3',
        slug: 'bose-quietcomfort-ultra-headphones',
        title: { en: 'Bose QuietComfort Ultra Headphones', fa: 'هدفون Bose QuietComfort Ultra' },
        description: { en: 'The Bose QuietComfort Ultra Headphones is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدفون Bose QuietComfort Ultra از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Bose', fa: 'بوز' },
        tags: ['over-ear-headphones', 'earbuds', 'bose'],
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'over-ear-headphones',
        collectionSlugs: ['bestsellers', 'new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Bose', fa: 'بوز' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'QuietComfort Ultra Headphones', fa: 'QuietComfort Ultra هدفون' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Over Ear Headphones', fa: 'هدفون‌های دورگوشی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Over-ear headphones with noise cancellation and immersive audio', fa: 'هدفون دورگوشی با حذف نویز و صدای فراگیر' } }
        ],
        rating: 4.8,
        reviewsCount: 22,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-2-4',
        slug: 'sennheiser-momentum-4-wireless',
        title: { en: 'Sennheiser Momentum 4 Wireless', fa: 'هدفون Sennheiser Momentum 4 Wireless' },
        description: { en: 'The Sennheiser Momentum 4 Wireless is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدفون Sennheiser Momentum 4 Wireless از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Sennheiser', fa: 'سنهایزر' },
        tags: ['over-ear-headphones', 'earbuds', 'sennheiser'],
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'over-ear-headphones',
        collectionSlugs: ['bestsellers', 'special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Sennheiser', fa: 'سنهایزر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Momentum 4 Wireless', fa: 'Momentum 4 بی‌سیم' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Over Ear Headphones', fa: 'هدفون‌های دورگوشی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless over-ear headphones with adaptive noise cancellation', fa: 'هدفون بی‌سیم دورگوشی با حذف نویز تطبیقی' } }
        ],
        rating: 4.7,
        reviewsCount: 19,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-2-5',
        slug: 'apple-airpods-max-usb-c',
        title: { en: 'Apple AirPods Max (USB-C)', fa: 'اپل AirPods Max USB-C' },
        description: { en: 'The Apple AirPods Max (USB-C) is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'اپل AirPods Max USB-C از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Apple', fa: 'اپل' },
        tags: ['over-ear-headphones', 'earbuds', 'apple'],
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'over-ear-headphones',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Apple', fa: 'اپل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'AirPods Max (USB-C)', fa: 'AirPods Max (USB-C)' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Over Ear Headphones', fa: 'هدفون‌های دورگوشی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Over-ear headphones with active noise cancellation and spatial audio', fa: 'هدفون دورگوشی با حذف نویز فعال و صدای فضایی' } }
        ],
        rating: 4.7,
        reviewsCount: 18,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-2-6',
        slug: 'soundcore-space-one',
        title: { en: 'soundcore Space One', fa: 'هدفون soundcore Space One' },
        description: { en: 'The soundcore Space One is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدفون soundcore Space One از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'soundcore', fa: 'ساندکور' },
        tags: ['over-ear-headphones', 'earbuds', 'soundcore'],
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'over-ear-headphones',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'soundcore', fa: 'ساندکور' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Space One', fa: 'Space One' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Over Ear Headphones', fa: 'هدفون‌های دورگوشی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless over-ear headphones with adaptive noise cancelling', fa: 'هدفون بی‌سیم دورگوشی با حذف نویز تطبیقی' } }
        ],
        rating: 4.6,
        reviewsCount: 14,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-3-1',
        slug: 'logitech-g-g733-lightspeed-wireless-rgb-gaming-headset',
        title: { en: 'Logitech G G733 LIGHTSPEED Wireless RGB Gaming Headset', fa: 'هدست گیمینگ Logitech G G733 LIGHTSPEED' },
        description: { en: 'The Logitech G G733 LIGHTSPEED Wireless RGB Gaming Headset is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدست گیمینگ Logitech G G733 LIGHTSPEED از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Logitech G', fa: 'لاجیتک جی' },
        tags: ['gaming-headsets', 'earbuds', 'logitech g'],
        images: [
            'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'gaming-headsets',
        collectionSlugs: ['bestsellers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Logitech G', fa: 'لاجیتک جی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'G733 LIGHTSPEED Wireless RGB Gaming Headset', fa: 'G733 LIGHTSPEED بی‌سیم RGB هدست بازی' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Gaming Headsets', fa: 'هدست‌های بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'LIGHTSPEED wireless; LIGHTSYNC RGB; Blue VO!CE microphone technology', fa: 'اتصال بی‌سیم LIGHTSPEED؛ نورپردازی LIGHTSYNC RGB؛ فناوری میکروفون Blue VO!CE' } }
        ],
        rating: 4.8,
        reviewsCount: 22,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-3-2',
        slug: 'steelseries-arctis-nova-7-wireless',
        title: { en: 'SteelSeries Arctis Nova 7 Wireless', fa: 'هدست SteelSeries Arctis Nova 7 Wireless' },
        description: { en: 'The SteelSeries Arctis Nova 7 Wireless is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدست SteelSeries Arctis Nova 7 Wireless از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'SteelSeries', fa: 'استیل‌سیریز' },
        tags: ['gaming-headsets', 'earbuds', 'steelseries'],
        images: [
            'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'gaming-headsets',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'SteelSeries', fa: 'استیل‌سیریز' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Arctis Nova 7 Wireless', fa: 'Arctis Nova 7 بی‌سیم' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Gaming Headsets', fa: 'هدست‌های بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless gaming headset with simultaneous 2.4GHz and Bluetooth', fa: 'هدست گیمینگ بی‌سیم با ۲.۴ گیگاهرتز و بلوتوث هم‌زمان' } }
        ],
        rating: 4.7,
        reviewsCount: 15,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-3-3',
        slug: 'razer-blackshark-v2-pro',
        title: { en: 'Razer BlackShark V2 Pro', fa: 'هدست Razer BlackShark V2 Pro' },
        description: { en: 'The Razer BlackShark V2 Pro is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدست Razer BlackShark V2 Pro از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Razer', fa: 'ریزر' },
        tags: ['gaming-headsets', 'earbuds', 'razer'],
        images: [
            'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'gaming-headsets',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Razer', fa: 'ریزر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'BlackShark V2 Pro', fa: 'BlackShark V2 Pro' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Gaming Headsets', fa: 'هدست‌های بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless esports headset; detachable microphone', fa: 'هدست بی‌سیم ورزش‌های الکترونیکی؛ میکروفون جداشدنی' } }
        ],
        rating: 4.8,
        reviewsCount: 19,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-3-4',
        slug: 'hyperx-cloud-iii-wireless',
        title: { en: 'HyperX Cloud III Wireless', fa: 'هدست HyperX Cloud III Wireless' },
        description: { en: 'The HyperX Cloud III Wireless is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدست HyperX Cloud III Wireless از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'HyperX', fa: 'هایپرایکس' },
        tags: ['gaming-headsets', 'earbuds', 'hyperx'],
        images: [
            'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'gaming-headsets',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'HyperX', fa: 'هایپرایکس' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Cloud III Wireless', fa: 'Cloud III بی‌سیم' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Gaming Headsets', fa: 'هدست‌های بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless gaming headset; DTS Headphone:X spatial audio support', fa: 'هدست گیمینگ بی‌سیم؛ پشتیبانی از صدای فضایی DTS Headphone:X' } }
        ],
        rating: 4.6,
        reviewsCount: 13,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-3-5',
        slug: 'sony-inzone-h5',
        title: { en: 'Sony INZONE H5', fa: 'هدست گیمینگ Sony INZONE H5' },
        description: { en: 'The Sony INZONE H5 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدست گیمینگ Sony INZONE H5 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Sony', fa: 'سونی' },
        tags: ['gaming-headsets', 'earbuds', 'sony'],
        images: [
            'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'gaming-headsets',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Sony', fa: 'سونی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'INZONE H5', fa: 'INZONE H5' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Gaming Headsets', fa: 'هدست‌های بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless gaming headset with 360 Spatial Sound for Gaming', fa: 'هدست گیمینگ بی‌سیم با صدای فضایی ۳۶۰ درجه برای بازی' } }
        ],
        rating: 4.7,
        reviewsCount: 10,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-3-6',
        slug: 'corsair-hs80-max-wireless',
        title: { en: 'Corsair HS80 MAX Wireless', fa: 'هدست Corsair HS80 MAX Wireless' },
        description: { en: 'The Corsair HS80 MAX Wireless is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدست Corsair HS80 MAX Wireless از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Corsair', fa: 'کورسیر' },
        tags: ['gaming-headsets', 'earbuds', 'corsair'],
        images: [
            'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'gaming-headsets',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Corsair', fa: 'کورسیر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'HS80 MAX Wireless', fa: 'HS80 MAX بی‌سیم' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Gaming Headsets', fa: 'هدست‌های بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless gaming headset with Dolby Atmos support', fa: 'هدست گیمینگ بی‌سیم با پشتیبانی از Dolby Atmos' } }
        ],
        rating: 4.8,
        reviewsCount: 14,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-4-1',
        slug: 'apple-usb-c-to-3-5-mm-headphone-jack-adapter',
        title: { en: 'Apple USB-C to 3.5 mm Headphone Jack Adapter', fa: 'مبدل اپل USB-C به جک هدفون ۳.۵ میلی‌متری' },
        description: { en: 'The Apple USB-C to 3.5 mm Headphone Jack Adapter is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مبدل اپل USB-C به جک هدفون ۳.۵ میلی‌متری از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Apple', fa: 'اپل' },
        tags: ['audio-adapters', 'earbuds', 'apple'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'audio-adapters',
        collectionSlugs: ['bestsellers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Apple', fa: 'اپل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'USB-C to 3.5 mm Headphone Jack Adapter', fa: 'مبدل USB-C به جک هدفون ۳٫۵ میلی‌متری' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Audio Adapters', fa: 'مبدل‌های صوتی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB-C audio adapter for compatible devices', fa: 'مبدل صوتی USB-C برای دستگاه‌های سازگار' } }
        ],
        rating: 4.6,
        reviewsCount: 19,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-4-2',
        slug: 'apple-lightning-to-3-5-mm-headphone-jack-adapter',
        title: { en: 'Apple Lightning to 3.5 mm Headphone Jack Adapter', fa: 'مبدل اپل Lightning به جک هدفون ۳.۵ میلی‌متری' },
        description: { en: 'The Apple Lightning to 3.5 mm Headphone Jack Adapter is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مبدل اپل Lightning به جک هدفون ۳.۵ میلی‌متری از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Apple', fa: 'اپل' },
        tags: ['audio-adapters', 'earbuds', 'apple'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'audio-adapters',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Apple', fa: 'اپل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Lightning to 3.5 mm Headphone Jack Adapter', fa: 'مبدل لایتنینگ به جک هدفون ۳٫۵ میلی‌متری' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Audio Adapters', fa: 'مبدل‌های صوتی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Lightning audio adapter for compatible Apple devices', fa: 'مبدل صوتی Lightning برای دستگاه‌های سازگار اپل' } }
        ],
        rating: 4.5,
        reviewsCount: 11,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-4-3',
        slug: 'ugreen-usb-c-to-3-5mm-audio-adapter',
        title: { en: 'UGREEN USB-C to 3.5mm Audio Adapter', fa: 'مبدل صوتی UGREEN USB-C به ۳.۵ میلی‌متر' },
        description: { en: 'The UGREEN USB-C to 3.5mm Audio Adapter is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مبدل صوتی UGREEN USB-C به ۳.۵ میلی‌متر از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'UGREEN', fa: 'یوگرین' },
        tags: ['audio-adapters', 'earbuds', 'ugreen'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'audio-adapters',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'UGREEN', fa: 'یوگرین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'USB-C to 3.5mm Audio Adapter', fa: 'مبدل صوتی USB-C به ۳٫۵ میلی‌متری' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Audio Adapters', fa: 'مبدل‌های صوتی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB-C audio adapter; compatibility depends on device DAC support', fa: 'مبدل صوتی USB-C؛ سازگاری به پشتیبانی DAC دستگاه بستگی دارد' } }
        ],
        rating: 4.4,
        reviewsCount: 8,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-4-4',
        slug: 'belkin-usb-c-to-3-5mm-audio-adapter',
        title: { en: 'Belkin USB-C to 3.5mm Audio Adapter', fa: 'مبدل صوتی Belkin USB-C به ۳.۵ میلی‌متر' },
        description: { en: 'The Belkin USB-C to 3.5mm Audio Adapter is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مبدل صوتی Belkin USB-C به ۳.۵ میلی‌متر از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Belkin', fa: 'بلکین' },
        tags: ['audio-adapters', 'earbuds', 'belkin'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'audio-adapters',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Belkin', fa: 'بلکین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'USB-C to 3.5mm Audio Adapter', fa: 'مبدل صوتی USB-C به ۳٫۵ میلی‌متری' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Audio Adapters', fa: 'مبدل‌های صوتی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB-C to 3.5mm audio adapter for compatible devices', fa: 'مبدل صوتی USB-C به ۳.۵ میلی‌متر برای دستگاه‌های سازگار' } }
        ],
        rating: 4.5,
        reviewsCount: 7,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-4-5',
        slug: 'creative-sound-blaster-play-3',
        title: { en: 'Creative Sound Blaster Play! 3', fa: 'کارت صدای Creative Sound Blaster Play! 3' },
        description: { en: 'The Creative Sound Blaster Play! 3 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کارت صدای Creative Sound Blaster Play! 3 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Creative', fa: 'کرییتیو' },
        tags: ['audio-adapters', 'earbuds', 'creative'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'audio-adapters',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Creative', fa: 'کرییتیو' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Sound Blaster Play! 3', fa: 'Sound Blaster Play! 3' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Audio Adapters', fa: 'مبدل‌های صوتی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB audio adapter with headphone and microphone connections', fa: 'مبدل صدای USB با اتصال هدفون و میکروفون' } }
        ],
        rating: 4.6,
        reviewsCount: 9,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-4-6',
        slug: 'fiio-ka11-usb-dac-and-headphone-amplifier',
        title: { en: 'FiiO KA11 USB DAC and Headphone Amplifier', fa: 'مبدل DAC و آمپلی‌فایر هدفون FiiO KA11' },
        description: { en: 'The FiiO KA11 USB DAC and Headphone Amplifier is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مبدل DAC و آمپلی‌فایر هدفون FiiO KA11 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'FiiO', fa: 'فییو' },
        tags: ['audio-adapters', 'earbuds', 'fiio'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'audio-adapters',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'FiiO', fa: 'فییو' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'KA11 USB DAC and Headphone Amplifier', fa: 'KA11 مبدل صوتی دیجیتال به آنالوگ USB و تقویت‌کننده هدفون' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Audio Adapters', fa: 'مبدل‌های صوتی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Compact USB DAC/headphone amplifier; connector version varies', fa: 'DAC و آمپلی‌فایر هدفون USB جمع‌وجور؛ نوع کانکتور وابسته به نسخه' } }
        ],
        rating: 4.9,
        reviewsCount: 17,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-5-1',
        slug: 'spigen-urban-fit-case-for-airpods-pro-2',
        title: { en: 'Spigen Urban Fit Case for AirPods Pro 2', fa: 'کاور Spigen Urban Fit برای AirPods Pro 2' },
        description: { en: 'The Spigen Urban Fit Case for AirPods Pro 2 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کاور Spigen Urban Fit برای AirPods Pro 2 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Spigen', fa: 'اسپیگن' },
        tags: ['earbud-cases', 'earbuds', 'spigen'],
        images: [
            'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'earbud-cases',
        collectionSlugs: ['bestsellers', 'new-arrivals'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Spigen', fa: 'اسپیگن' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Urban Fit Case for AirPods Pro 2', fa: 'Urban Fit قاب برای ایرپادز پرو 2' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Earbud Cases', fa: 'قاب‌های ایرباد' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Protective fabric-style case made for AirPods Pro 2 charging case', fa: 'کاور محافظ با ظاهر پارچه‌ای مخصوص کیس AirPods Pro 2' } }
        ],
        rating: 4.8,
        reviewsCount: 16,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-5-2',
        slug: 'spigen-tough-armor-case-for-airpods-pro-2',
        title: { en: 'Spigen Tough Armor Case for AirPods Pro 2', fa: 'کاور Spigen Tough Armor برای AirPods Pro 2' },
        description: { en: 'The Spigen Tough Armor Case for AirPods Pro 2 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کاور Spigen Tough Armor برای AirPods Pro 2 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Spigen', fa: 'اسپیگن' },
        tags: ['earbud-cases', 'earbuds', 'spigen'],
        images: [
            'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'earbud-cases',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Spigen', fa: 'اسپیگن' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Tough Armor Case for AirPods Pro 2', fa: 'محافظ مقاوم قاب برای ایرپادز پرو 2' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Earbud Cases', fa: 'قاب‌های ایرباد' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Protective case with carabiner; model-specific fit', fa: 'کاور محافظ همراه کارابین؛ متناسب با مدل' } }
        ],
        rating: 4.6,
        reviewsCount: 12,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-5-3',
        slug: 'esr-cyber-armor-tough-case-for-airpods-pro-2',
        title: { en: 'ESR Cyber Armor Tough Case for AirPods Pro 2', fa: 'کاور ESR Cyber Armor برای AirPods Pro 2' },
        description: { en: 'The ESR Cyber Armor Tough Case for AirPods Pro 2 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کاور ESR Cyber Armor برای AirPods Pro 2 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'ESR', fa: 'ای‌اس‌آر' },
        tags: ['earbud-cases', 'earbuds', 'esr'],
        images: [
            'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'earbud-cases',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'ESR', fa: 'ای‌اس‌آر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Cyber Armor Tough Case for AirPods Pro 2', fa: 'Cyber Armor Tough قاب برای ایرپادز پرو 2' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Earbud Cases', fa: 'قاب‌های ایرباد' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Protective case for AirPods Pro 2; check charging compatibility', fa: 'کاور محافظ AirPods Pro 2؛ بررسی سازگاری شارژ ضروری است' } }
        ],
        rating: 4.7,
        reviewsCount: 9,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-5-4',
        slug: 'esr-classic-hybrid-case-for-airpods-3',
        title: { en: 'ESR Classic Hybrid Case for AirPods 3', fa: 'کاور ESR Classic Hybrid برای AirPods 3' },
        description: { en: 'The ESR Classic Hybrid Case for AirPods 3 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کاور ESR Classic Hybrid برای AirPods 3 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'ESR', fa: 'ای‌اس‌آر' },
        tags: ['earbud-cases', 'earbuds', 'esr'],
        images: [
            'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'earbud-cases',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'ESR', fa: 'ای‌اس‌آر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Classic Hybrid Case for AirPods 3', fa: 'Classic Hybrid قاب برای ایرپادز 3' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Earbud Cases', fa: 'قاب‌های ایرباد' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Clear protective case for AirPods 3 charging case', fa: 'کاور محافظ شفاف برای کیس شارژ AirPods 3' } }
        ],
        rating: 4.5,
        reviewsCount: 14,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-5-5',
        slug: 'catalyst-waterproof-case-for-airpods-pro',
        title: { en: 'Catalyst Waterproof Case for AirPods Pro', fa: 'کاور ضدآب Catalyst برای AirPods Pro' },
        description: { en: 'The Catalyst Waterproof Case for AirPods Pro is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کاور ضدآب Catalyst برای AirPods Pro از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Catalyst', fa: 'کاتالیست' },
        tags: ['earbud-cases', 'earbuds', 'catalyst'],
        images: [
            'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'earbud-cases',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Catalyst', fa: 'کاتالیست' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Waterproof Case for AirPods Pro', fa: 'Waterproof قاب برای ایرپادز پرو' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Earbud Cases', fa: 'قاب‌های ایرباد' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Protective waterproof case; confirm exact generation', fa: 'کاور محافظ ضدآب؛ تأیید نسل دقیق ضروری است' } }
        ],
        rating: 4.9,
        reviewsCount: 21,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-e-5-6',
        slug: 'elago-basic-case-for-airpods-pro-2',
        title: { en: 'elago Basic Case for AirPods Pro 2', fa: 'کاور elago Basic برای AirPods Pro 2' },
        description: { en: 'The elago Basic Case for AirPods Pro 2 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کاور elago Basic برای AirPods Pro 2 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'elago', fa: 'الگو' },
        tags: ['earbud-cases', 'earbuds', 'elago'],
        images: [
            'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'earbuds',
        subcategorySlug: 'earbud-cases',
        collectionSlugs: ['bestsellers', 'new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'elago', fa: 'الگو' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Basic Case for AirPods Pro 2', fa: 'Basic قاب برای ایرپادز پرو 2' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Earbud Cases', fa: 'قاب‌های ایرباد' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Silicone protective case designed for AirPods Pro 2', fa: 'کاور محافظ سیلیکونی مخصوص AirPods Pro 2' } }
        ],
        rating: 4.8,
        reviewsCount: 25,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-1-1',
        slug: 'logitech-mx-mechanical-mini',
        title: { en: 'Logitech MX Mechanical Mini', fa: 'کیبورد مکانیکی Logitech MX Mechanical Mini' },
        description: { en: 'The Logitech MX Mechanical Mini is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کیبورد مکانیکی Logitech MX Mechanical Mini از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Logitech', fa: 'لاجیتک' },
        tags: ['mechanical-keyboards', 'pc', 'logitech'],
        images: [
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'mechanical-keyboards',
        collectionSlugs: ['bestsellers', 'new-arrivals'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Logitech', fa: 'لاجیتک' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'MX Mechanical Mini', fa: 'MX صفحه‌کلید مکانیکی کوچک' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Mechanical Keyboards', fa: 'صفحه‌کلیدهای مکانیکی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Compact wireless mechanical keyboard; tactile, clicky or linear switch options by version', fa: 'کیبورد مکانیکی بی‌سیم جمع‌وجور؛ انواع سوئیچ بسته به نسخه' } }
        ],
        rating: 4.8,
        reviewsCount: 19,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-1-2',
        slug: 'logitech-g-g413-tkl-se',
        title: { en: 'Logitech G G413 TKL SE', fa: 'کیبورد Logitech G G413 TKL SE' },
        description: { en: 'The Logitech G G413 TKL SE is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کیبورد Logitech G G413 TKL SE از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Logitech G', fa: 'لاجیتک جی' },
        tags: ['mechanical-keyboards', 'pc', 'logitech g'],
        images: [
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'mechanical-keyboards',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Logitech G', fa: 'لاجیتک جی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'G413 TKL SE', fa: 'G413 TKL SE' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Mechanical Keyboards', fa: 'صفحه‌کلیدهای مکانیکی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Tenkeyless mechanical gaming keyboard; tactile switches', fa: 'کیبورد مکانیکی گیمینگ بدون بخش اعداد؛ سوئیچ‌های لمسی' } }
        ],
        rating: 4.6,
        reviewsCount: 14,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-1-3',
        slug: 'keychron-k2-pro',
        title: { en: 'Keychron K2 Pro', fa: 'کیبورد مکانیکی Keychron K2 Pro' },
        description: { en: 'The Keychron K2 Pro is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کیبورد مکانیکی Keychron K2 Pro از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Keychron', fa: 'کیکرون' },
        tags: ['mechanical-keyboards', 'pc', 'keychron'],
        images: [
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'mechanical-keyboards',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Keychron', fa: 'کیکرون' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'K2 Pro', fa: 'K2 Pro' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Mechanical Keyboards', fa: 'صفحه‌کلیدهای مکانیکی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '75% wireless mechanical keyboard; QMK/VIA support', fa: 'کیبورد مکانیکی بی‌سیم ۷۵ درصد؛ پشتیبانی QMK/VIA' } }
        ],
        rating: 4.7,
        reviewsCount: 22,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-1-4',
        slug: 'keychron-k8-pro',
        title: { en: 'Keychron K8 Pro', fa: 'کیبورد مکانیکی Keychron K8 Pro' },
        description: { en: 'The Keychron K8 Pro is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کیبورد مکانیکی Keychron K8 Pro از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Keychron', fa: 'کیکرون' },
        tags: ['mechanical-keyboards', 'pc', 'keychron'],
        images: [
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'mechanical-keyboards',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Keychron', fa: 'کیکرون' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'K8 Pro', fa: 'K8 Pro' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Mechanical Keyboards', fa: 'صفحه‌کلیدهای مکانیکی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Tenkeyless wireless mechanical keyboard; hot-swappable versions available', fa: 'کیبورد مکانیکی بی‌سیم TKL؛ نسخه‌های قابل تعویض سوئیچ موجودند' } }
        ],
        rating: 4.8,
        reviewsCount: 31,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-1-5',
        slug: 'corsair-k70-rgb-pro',
        title: { en: 'Corsair K70 RGB PRO', fa: 'کیبورد مکانیکی Corsair K70 RGB PRO' },
        description: { en: 'The Corsair K70 RGB PRO is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کیبورد مکانیکی Corsair K70 RGB PRO از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Corsair', fa: 'کورسیر' },
        tags: ['mechanical-keyboards', 'pc', 'corsair'],
        images: [
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'mechanical-keyboards',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Corsair', fa: 'کورسیر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'K70 RGB PRO', fa: 'K70 RGB PRO' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Mechanical Keyboards', fa: 'صفحه‌کلیدهای مکانیکی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Full-size mechanical gaming keyboard with per-key RGB', fa: 'کیبورد مکانیکی فول‌سایز گیمینگ با RGB مجزای هر کلید' } }
        ],
        rating: 4.9,
        reviewsCount: 38,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-1-6',
        slug: 'razer-blackwidow-v4-75',
        title: { en: 'Razer BlackWidow V4 75%', fa: 'کیبورد Razer BlackWidow V4 75%' },
        description: { en: 'The Razer BlackWidow V4 75% is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کیبورد Razer BlackWidow V4 75% از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Razer', fa: 'ریزر' },
        tags: ['mechanical-keyboards', 'pc', 'razer'],
        images: [
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'mechanical-keyboards',
        collectionSlugs: ['bestsellers', 'new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Razer', fa: 'ریزر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'BlackWidow V4 75%', fa: 'BlackWidow V4 75%' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Mechanical Keyboards', fa: 'صفحه‌کلیدهای مکانیکی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '75% mechanical gaming keyboard; hot-swappable design', fa: 'کیبورد مکانیکی گیمینگ ۷۵ درصد؛ طراحی قابل تعویض سوئیچ' } }
        ],
        rating: 4.8,
        reviewsCount: 42,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-2-1',
        slug: 'logitech-g-pro-x-superlight-2',
        title: { en: 'Logitech G PRO X SUPERLIGHT 2', fa: 'ماوس Logitech G PRO X SUPERLIGHT 2' },
        description: { en: 'The Logitech G PRO X SUPERLIGHT 2 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ماوس Logitech G PRO X SUPERLIGHT 2 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Logitech G', fa: 'لاجیتک جی' },
        tags: ['gaming-mice', 'pc', 'logitech g'],
        images: [
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'gaming-mice',
        collectionSlugs: ['bestsellers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Logitech G', fa: 'لاجیتک جی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'PRO X SUPERLIGHT 2', fa: 'PRO X SUPERLIGHT 2' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Gaming Mice', fa: 'ماوس‌های گیمینگ' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'LIGHTFORCE hybrid switches; HERO 2 sensor; lightweight wireless design', fa: 'سوئیچ‌های هیبریدی LIGHTFORCE؛ حسگر HERO 2؛ طراحی بی‌سیم سبک' } }
        ],
        rating: 4.9,
        reviewsCount: 50,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-2-2',
        slug: 'logitech-g-g502-x-lightspeed',
        title: { en: 'Logitech G G502 X LIGHTSPEED', fa: 'ماوس Logitech G G502 X LIGHTSPEED' },
        description: { en: 'The Logitech G G502 X LIGHTSPEED is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ماوس Logitech G G502 X LIGHTSPEED از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Logitech G', fa: 'لاجیتک جی' },
        tags: ['gaming-mice', 'pc', 'logitech g'],
        images: [
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'gaming-mice',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Logitech G', fa: 'لاجیتک جی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'G502 X LIGHTSPEED', fa: 'G502 X LIGHTSPEED' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Gaming Mice', fa: 'ماوس‌های گیمینگ' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless gaming mouse with LIGHTFORCE switches and HERO 25K sensor', fa: 'ماوس گیمینگ بی‌سیم با سوئیچ LIGHTFORCE و حسگر HERO 25K' } }
        ],
        rating: 4.7,
        reviewsCount: 28,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-2-3',
        slug: 'razer-deathadder-v3-pro',
        title: { en: 'Razer DeathAdder V3 Pro', fa: 'ماوس Razer DeathAdder V3 Pro' },
        description: { en: 'The Razer DeathAdder V3 Pro is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ماوس Razer DeathAdder V3 Pro از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Razer', fa: 'ریزر' },
        tags: ['gaming-mice', 'pc', 'razer'],
        images: [
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'gaming-mice',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Razer', fa: 'ریزر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'DeathAdder V3 Pro', fa: 'DeathAdder V3 Pro' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Gaming Mice', fa: 'ماوس‌های گیمینگ' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Ergonomic wireless esports mouse; Focus Pro optical sensor', fa: 'ماوس ارگونومیک بی‌سیم esports؛ حسگر اپتیکال Focus Pro' } }
        ],
        rating: 4.8,
        reviewsCount: 35,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-2-4',
        slug: 'razer-viper-v3-pro',
        title: { en: 'Razer Viper V3 Pro', fa: 'ماوس Razer Viper V3 Pro' },
        description: { en: 'The Razer Viper V3 Pro is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ماوس Razer Viper V3 Pro از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Razer', fa: 'ریزر' },
        tags: ['gaming-mice', 'pc', 'razer'],
        images: [
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'gaming-mice',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Razer', fa: 'ریزر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Viper V3 Pro', fa: 'Viper V3 Pro' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Gaming Mice', fa: 'ماوس‌های گیمینگ' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Symmetrical wireless esports mouse; Focus Pro sensor', fa: 'ماوس متقارن بی‌سیم esports؛ حسگر Focus Pro' } }
        ],
        rating: 4.7,
        reviewsCount: 19,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-2-5',
        slug: 'steelseries-aerox-3-wireless',
        title: { en: 'SteelSeries Aerox 3 Wireless', fa: 'ماوس SteelSeries Aerox 3 Wireless' },
        description: { en: 'The SteelSeries Aerox 3 Wireless is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ماوس SteelSeries Aerox 3 Wireless از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'SteelSeries', fa: 'استیل‌سیریز' },
        tags: ['gaming-mice', 'pc', 'steelseries'],
        images: [
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'gaming-mice',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'SteelSeries', fa: 'استیل‌سیریز' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Aerox 3 Wireless', fa: 'Aerox 3 بی‌سیم' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Gaming Mice', fa: 'ماوس‌های گیمینگ' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Lightweight wireless gaming mouse; AquaBarrier protection', fa: 'ماوس گیمینگ بی‌سیم سبک؛ محافظت AquaBarrier' } }
        ],
        rating: 4.6,
        reviewsCount: 16,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-2-6',
        slug: 'corsair-m75-air-wireless',
        title: { en: 'Corsair M75 AIR Wireless', fa: 'ماوس Corsair M75 AIR Wireless' },
        description: { en: 'The Corsair M75 AIR Wireless is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ماوس Corsair M75 AIR Wireless از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Corsair', fa: 'کورسیر' },
        tags: ['gaming-mice', 'pc', 'corsair'],
        images: [
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'gaming-mice',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Corsair', fa: 'کورسیر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'M75 AIR Wireless', fa: 'M75 AIR بی‌سیم' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Gaming Mice', fa: 'ماوس‌های گیمینگ' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Lightweight wireless gaming mouse; symmetrical shape', fa: 'ماوس گیمینگ بی‌سیم سبک؛ فرم متقارن' } }
        ],
        rating: 4.8,
        reviewsCount: 24,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-3-1',
        slug: 'steelseries-qck-large',
        title: { en: 'SteelSeries QcK Large', fa: 'ماوس‌پد SteelSeries QcK Large' },
        description: { en: 'The SteelSeries QcK Large is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ماوس‌پد SteelSeries QcK Large از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'SteelSeries', fa: 'استیل‌سیریز' },
        tags: ['mouse-pads', 'pc', 'steelseries'],
        images: [
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'mouse-pads',
        collectionSlugs: ['bestsellers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'SteelSeries', fa: 'استیل‌سیریز' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'QcK Large', fa: 'QcK Large' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Mouse Pads', fa: 'پدهای ماوس' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Micro-woven cloth surface; non-slip rubber base', fa: 'سطح پارچه‌ای میکروبافته؛ پایه لاستیکی ضدلغزش' } }
        ],
        rating: 4.7,
        reviewsCount: 30,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-3-2',
        slug: 'steelseries-qck-heavy-large',
        title: { en: 'SteelSeries QcK Heavy Large', fa: 'ماوس‌پد SteelSeries QcK Heavy Large' },
        description: { en: 'The SteelSeries QcK Heavy Large is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ماوس‌پد SteelSeries QcK Heavy Large از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'SteelSeries', fa: 'استیل‌سیریز' },
        tags: ['mouse-pads', 'pc', 'steelseries'],
        images: [
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'mouse-pads',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'SteelSeries', fa: 'استیل‌سیریز' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'QcK Heavy Large', fa: 'QcK Heavy Large' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Mouse Pads', fa: 'پدهای ماوس' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Thick cloth gaming surface; non-slip rubber base', fa: 'سطح پارچه‌ای ضخیم گیمینگ؛ پایه لاستیکی ضدلغزش' } }
        ],
        rating: 4.6,
        reviewsCount: 15,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-3-3',
        slug: 'logitech-g-g640-large-cloth-gaming-mouse-pad',
        title: { en: 'Logitech G G640 Large Cloth Gaming Mouse Pad', fa: 'ماوس‌پد Logitech G G640' },
        description: { en: 'The Logitech G G640 Large Cloth Gaming Mouse Pad is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ماوس‌پد Logitech G G640 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Logitech G', fa: 'لاجیتک جی' },
        tags: ['mouse-pads', 'pc', 'logitech g'],
        images: [
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'mouse-pads',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Logitech G', fa: 'لاجیتک جی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'G640 Large Cloth Gaming Mouse Pad', fa: 'G640 Large Cloth Gaming پد ماوس' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Mouse Pads', fa: 'پدهای ماوس' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Cloth surface tuned for low-DPI gaming; rubber base', fa: 'سطح پارچه‌ای مناسب بازی با DPI پایین؛ پایه لاستیکی' } }
        ],
        rating: 4.8,
        reviewsCount: 18,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-3-4',
        slug: 'razer-gigantus-v2-large',
        title: { en: 'Razer Gigantus V2 Large', fa: 'ماوس‌پد Razer Gigantus V2 Large' },
        description: { en: 'The Razer Gigantus V2 Large is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ماوس‌پد Razer Gigantus V2 Large از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Razer', fa: 'ریزر' },
        tags: ['mouse-pads', 'pc', 'razer'],
        images: [
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'mouse-pads',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Razer', fa: 'ریزر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Gigantus V2 Large', fa: 'Gigantus V2 Large' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Mouse Pads', fa: 'پدهای ماوس' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Textured cloth surface; anti-slip base', fa: 'سطح پارچه‌ای بافت‌دار؛ پایه ضدلغزش' } }
        ],
        rating: 4.7,
        reviewsCount: 21,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-3-5',
        slug: 'corsair-mm300-pro-extended',
        title: { en: 'Corsair MM300 PRO Extended', fa: 'ماوس‌پد Corsair MM300 PRO Extended' },
        description: { en: 'The Corsair MM300 PRO Extended is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'ماوس‌پد Corsair MM300 PRO Extended از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Corsair', fa: 'کورسیر' },
        tags: ['mouse-pads', 'pc', 'corsair'],
        images: [
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'mouse-pads',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Corsair', fa: 'کورسیر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'MM300 PRO Extended', fa: 'MM300 PRO Extended' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Mouse Pads', fa: 'پدهای ماوس' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Extended cloth surface with spill-resistant coating', fa: 'سطح پارچه‌ای گسترده با پوشش مقاوم در برابر ریختن مایعات' } }
        ],
        rating: 4.8,
        reviewsCount: 16,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-3-6',
        slug: 'logitech-g-powerplay-wireless-charging-system',
        title: { en: 'Logitech G POWERPLAY Wireless Charging System', fa: 'سیستم شارژ بی‌سیم Logitech G POWERPLAY' },
        description: { en: 'The Logitech G POWERPLAY Wireless Charging System is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'سیستم شارژ بی‌سیم Logitech G POWERPLAY از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Logitech G', fa: 'لاجیتک جی' },
        tags: ['mouse-pads', 'pc', 'logitech g'],
        images: [
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'mouse-pads',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Logitech G', fa: 'لاجیتک جی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'POWERPLAY Wireless Charging System', fa: 'POWERPLAY سامانه شارژ بی‌سیم' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Mouse Pads', fa: 'پدهای ماوس' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Mouse pad system providing wireless charging for compatible Logitech mice', fa: 'سیستم ماوس‌پد با شارژ بی‌سیم برای ماوس‌های سازگار Logitech' } }
        ],
        rating: 4.9,
        reviewsCount: 27,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-4-1',
        slug: 'dell-ultrasharp-u2723qe',
        title: { en: 'Dell UltraSharp U2723QE', fa: 'مانیتور Dell UltraSharp U2723QE' },
        description: { en: 'The Dell UltraSharp U2723QE is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مانیتور Dell UltraSharp U2723QE از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Dell', fa: 'دل' },
        tags: ['monitors', 'pc', 'dell'],
        images: [
            'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'monitors',
        collectionSlugs: ['bestsellers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Dell', fa: 'دل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'UltraSharp U2723QE', fa: 'UltraSharp U2723QE' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Monitors', fa: 'مانیتورها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '27-inch 4K UHD monitor; IPS Black technology; USB-C hub', fa: 'مانیتور ۲۷ اینچ 4K UHD؛ فناوری IPS Black؛ هاب USB-C' } }
        ],
        rating: 4.8,
        reviewsCount: 34,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-4-2',
        slug: 'lg-27gp850-b-ultragear',
        title: { en: 'LG 27GP850-B UltraGear', fa: 'مانیتور LG 27GP850-B UltraGear' },
        description: { en: 'The LG 27GP850-B UltraGear is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مانیتور LG 27GP850-B UltraGear از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'LG', fa: 'ال‌جی' },
        tags: ['monitors', 'pc', 'lg'],
        images: [
            'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'monitors',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'LG', fa: 'ال‌جی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: '27GP850-B UltraGear', fa: '27GP850-B UltraGear' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Monitors', fa: 'مانیتورها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '27-inch QHD gaming monitor; Nano IPS; high refresh rate', fa: 'مانیتور گیمینگ ۲۷ اینچ QHD؛ Nano IPS؛ نرخ نوسازی بالا' } }
        ],
        rating: 4.7,
        reviewsCount: 22,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-4-3',
        slug: 'samsung-odyssey-g5-27-inch',
        title: { en: 'Samsung Odyssey G5 27-inch', fa: 'مانیتور Samsung Odyssey G5 27 اینچ' },
        description: { en: 'The Samsung Odyssey G5 27-inch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مانیتور Samsung Odyssey G5 27 اینچ از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Samsung', fa: 'سامسونگ' },
        tags: ['monitors', 'pc', 'samsung'],
        images: [
            'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'monitors',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Samsung', fa: 'سامسونگ' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Odyssey G5 27-inch', fa: 'Odyssey G5 27-inch' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Monitors', fa: 'مانیتورها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'QHD gaming monitor; high refresh rate (spec varies by model code)', fa: 'مانیتور گیمینگ QHD؛ نرخ نوسازی بالا (مشخصات وابسته به کد مدل)' } }
        ],
        rating: 4.6,
        reviewsCount: 19,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-4-4',
        slug: 'asus-tuf-gaming-vg27aq1a',
        title: { en: 'ASUS TUF Gaming VG27AQ1A', fa: 'مانیتور ASUS TUF Gaming VG27AQ1A' },
        description: { en: 'The ASUS TUF Gaming VG27AQ1A is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مانیتور ASUS TUF Gaming VG27AQ1A از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'ASUS', fa: 'ایسوس' },
        tags: ['monitors', 'pc', 'asus'],
        images: [
            'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'monitors',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'ASUS', fa: 'ایسوس' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'TUF Gaming VG27AQ1A', fa: 'TUF Gaming VG27AQ1A' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Monitors', fa: 'مانیتورها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '27-inch QHD gaming monitor; Adaptive-Sync', fa: 'مانیتور گیمینگ ۲۷ اینچ QHD؛ Adaptive-Sync' } }
        ],
        rating: 4.8,
        reviewsCount: 25,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-4-5',
        slug: 'benq-gw2790q',
        title: { en: 'BenQ GW2790Q', fa: 'مانیتور BenQ GW2790Q' },
        description: { en: 'The BenQ GW2790Q is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مانیتور BenQ GW2790Q از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'BenQ', fa: 'بنکیو' },
        tags: ['monitors', 'pc', 'benq'],
        images: [
            'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'monitors',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'BenQ', fa: 'بنکیو' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'GW2790Q', fa: 'GW2790Q' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Monitors', fa: 'مانیتورها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '27-inch QHD monitor for home and office use', fa: 'مانیتور ۲۷ اینچ QHD برای خانه و محل کار' } }
        ],
        rating: 4.5,
        reviewsCount: 12,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-4-6',
        slug: 'aoc-q27g3xmn',
        title: { en: 'AOC Q27G3XMN', fa: 'مانیتور AOC Q27G3XMN' },
        description: { en: 'The AOC Q27G3XMN is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مانیتور AOC Q27G3XMN از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'AOC', fa: 'ای‌او‌سی' },
        tags: ['monitors', 'pc', 'aoc'],
        images: [
            'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'monitors',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'AOC', fa: 'ای‌او‌سی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Q27G3XMN', fa: 'Q27G3XMN' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Monitors', fa: 'مانیتورها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '27-inch QHD gaming monitor; Mini-LED backlight', fa: 'مانیتور گیمینگ ۲۷ اینچ QHD؛ نور پس‌زمینه Mini-LED' } }
        ],
        rating: 4.9,
        reviewsCount: 31,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-5-1',
        slug: 'anker-prime-docking-station-14-in-1',
        title: { en: 'Anker Prime Docking Station (14-in-1)', fa: 'داک Anker Prime 14-in-1' },
        description: { en: 'The Anker Prime Docking Station (14-in-1) is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'داک Anker Prime 14-in-1 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Anker', fa: 'انکر' },
        tags: ['hubs-docks', 'pc', 'anker'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'hubs-docks',
        collectionSlugs: ['bestsellers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Anker', fa: 'انکر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Prime Docking Station (14-in-1)', fa: 'Prime داک (14-in-1)' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Hubs Docks', fa: 'هاب‌ها و داک‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Multi-port desktop docking station; exact port configuration varies by model', fa: 'داک رومیزی چندپورته؛ چینش دقیق درگاه‌ها وابسته به مدل' } }
        ],
        rating: 4.7,
        reviewsCount: 20,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-5-2',
        slug: 'anker-555-usb-c-hub-8-in-1',
        title: { en: 'Anker 555 USB-C Hub (8-in-1)', fa: 'هاب Anker 555 USB-C هشت‌کاره' },
        description: { en: 'The Anker 555 USB-C Hub (8-in-1) is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هاب Anker 555 USB-C هشت‌کاره از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Anker', fa: 'انکر' },
        tags: ['hubs-docks', 'pc', 'anker'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'hubs-docks',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Anker', fa: 'انکر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: '555 USB-C Hub (8-in-1)', fa: '555 هاب USB-C (8-in-1)' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Hubs Docks', fa: 'هاب‌ها و داک‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB-C hub with HDMI, Ethernet and card-reader connectivity (model-dependent)', fa: 'هاب USB-C با HDMI، اترنت و کارت‌خوان (بسته به مدل)' } }
        ],
        rating: 4.5,
        reviewsCount: 14,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-5-3',
        slug: 'ugreen-revodok-pro-109-usb-c-docking-station',
        title: { en: 'UGREEN Revodok Pro 109 USB-C Docking Station', fa: 'داک UGREEN Revodok Pro 109' },
        description: { en: 'The UGREEN Revodok Pro 109 USB-C Docking Station is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'داک UGREEN Revodok Pro 109 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'UGREEN', fa: 'یوگرین' },
        tags: ['hubs-docks', 'pc', 'ugreen'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'hubs-docks',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'UGREEN', fa: 'یوگرین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Revodok Pro 109 USB-C Docking Station', fa: 'Revodok Pro 109 USB-C داک' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Hubs Docks', fa: 'هاب‌ها و داک‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB-C docking station with multi-display and peripheral connections', fa: 'داک USB-C با اتصال نمایشگرهای متعدد و تجهیزات جانبی' } }
        ],
        rating: 4.6,
        reviewsCount: 17,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-5-4',
        slug: 'caldigit-ts4-thunderbolt-station-4',
        title: { en: 'CalDigit TS4 Thunderbolt Station 4', fa: 'داک CalDigit TS4 Thunderbolt 4' },
        description: { en: 'The CalDigit TS4 Thunderbolt Station 4 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'داک CalDigit TS4 Thunderbolt 4 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'CalDigit', fa: 'کالدجیت' },
        tags: ['hubs-docks', 'pc', 'caldigit'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'hubs-docks',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'CalDigit', fa: 'کالدجیت' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'TS4 Thunderbolt Station 4', fa: 'TS4 Thunderbolt Station 4' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Hubs Docks', fa: 'هاب‌ها و داک‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Thunderbolt 4 dock with extensive downstream ports', fa: 'داک Thunderbolt 4 با درگاه‌های متعدد' } }
        ],
        rating: 4.9,
        reviewsCount: 29,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-5-5',
        slug: 'belkin-connect-usb-c-6-in-1-multiport-adapter',
        title: { en: 'Belkin Connect USB-C 6-in-1 Multiport Adapter', fa: 'مبدل چندپورته Belkin Connect شش‌کاره' },
        description: { en: 'The Belkin Connect USB-C 6-in-1 Multiport Adapter is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مبدل چندپورته Belkin Connect شش‌کاره از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Belkin', fa: 'بلکین' },
        tags: ['hubs-docks', 'pc', 'belkin'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'hubs-docks',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Belkin', fa: 'بلکین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Connect USB-C 6-in-1 Multiport Adapter', fa: 'Connect USB-C 6-in-1 مبدل چنددرگاهی' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Hubs Docks', fa: 'هاب‌ها و داک‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB-C multiport adapter; display and USB expansion', fa: 'مبدل چندپورته USB-C؛ توسعه درگاه‌های نمایشگر و USB' } }
        ],
        rating: 4.7,
        reviewsCount: 22,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-p-5-6',
        slug: 'satechi-usb-c-multiport-adapter-8k-with-ethernet-v3',
        title: { en: 'Satechi USB-C Multiport Adapter 8K with Ethernet V3', fa: 'مبدل Satechi USB-C Multiport Adapter 8K' },
        description: { en: 'The Satechi USB-C Multiport Adapter 8K with Ethernet V3 is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'مبدل Satechi USB-C Multiport Adapter 8K از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Satechi', fa: 'ساتچی' },
        tags: ['hubs-docks', 'pc', 'satechi'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'pc',
        subcategorySlug: 'hubs-docks',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Satechi', fa: 'ساتچی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'USB-C Multiport Adapter 8K with Ethernet V3', fa: 'USB-C مبدل چنددرگاهی 8K با درگاه اترنت V3' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Hubs Docks', fa: 'هاب‌ها و داک‌ها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'USB-C adapter with Ethernet and display output (host compatibility varies)', fa: 'مبدل USB-C با اترنت و خروجی نمایشگر (سازگاری وابسته به میزبان)' } }
        ],
        rating: 4.8,
        reviewsCount: 25,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-1-1',
        slug: 'sony-dualsense-wireless-controller',
        title: { en: 'Sony DualSense Wireless Controller', fa: 'دسته بی‌سیم Sony DualSense' },
        description: { en: 'The Sony DualSense Wireless Controller is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'دسته بی‌سیم Sony DualSense از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Sony', fa: 'سونی' },
        tags: ['controllers', 'console', 'sony'],
        images: [
            'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1607853585090-e43eeb442dd2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'controllers',
        collectionSlugs: ['bestsellers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Sony', fa: 'سونی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'DualSense Wireless Controller', fa: 'DualSense دسته بازی بی‌سیم' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Controllers', fa: 'دسته‌های بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless controller with haptic feedback and adaptive triggers for PS5', fa: 'دسته بی‌سیم با بازخورد لمسی و تریگرهای تطبیقی برای PS5' } }
        ],
        rating: 4.9,
        reviewsCount: 45,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1607853585090-e43eeb442dd2?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-1-2',
        slug: 'sony-dualsense-edge-wireless-controller',
        title: { en: 'Sony DualSense Edge Wireless Controller', fa: 'دسته بی‌سیم Sony DualSense Edge' },
        description: { en: 'The Sony DualSense Edge Wireless Controller is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'دسته بی‌سیم Sony DualSense Edge از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Sony', fa: 'سونی' },
        tags: ['controllers', 'console', 'sony'],
        images: [
            'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1607853585090-e43eeb442dd2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'controllers',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Sony', fa: 'سونی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'DualSense Edge Wireless Controller', fa: 'DualSense Edge دسته بازی بی‌سیم' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Controllers', fa: 'دسته‌های بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Customizable controls; replaceable stick modules; PS5 compatible', fa: 'کنترل‌های قابل تنظیم؛ ماژول‌های قابل تعویض استیک؛ سازگار با PS5' } }
        ],
        rating: 4.8,
        reviewsCount: 22,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1607853585090-e43eeb442dd2?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-1-3',
        slug: 'microsoft-xbox-wireless-controller',
        title: { en: 'Microsoft Xbox Wireless Controller', fa: 'دسته بی‌سیم Xbox' },
        description: { en: 'The Microsoft Xbox Wireless Controller is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'دسته بی‌سیم Xbox از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Microsoft', fa: 'مایکروسافت' },
        tags: ['controllers', 'console', 'microsoft'],
        images: [
            'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1607853585090-e43eeb442dd2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'controllers',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Microsoft', fa: 'مایکروسافت' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Xbox Wireless Controller', fa: 'Xbox دسته بازی بی‌سیم' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Controllers', fa: 'دسته‌های بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless controller for Xbox and compatible Windows devices', fa: 'دسته بی‌سیم برای Xbox و دستگاه‌های سازگار Windows' } }
        ],
        rating: 4.8,
        reviewsCount: 39,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1607853585090-e43eeb442dd2?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-1-4',
        slug: 'nintendo-joy-con-l-r',
        title: { en: 'Nintendo Joy-Con (L)/(R)', fa: 'دسته Nintendo Joy-Con چپ و راست' },
        description: { en: 'The Nintendo Joy-Con (L)/(R) is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'دسته Nintendo Joy-Con چپ و راست از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Nintendo', fa: 'نینتندو' },
        tags: ['controllers', 'console', 'nintendo'],
        images: [
            'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1607853585090-e43eeb442dd2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'controllers',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Nintendo', fa: 'نینتندو' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Joy-Con (L)/(R)', fa: 'Joy-Con (L)/(R)' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Controllers', fa: 'دسته‌های بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Detachable controllers for compatible Nintendo Switch consoles', fa: 'دسته‌های جداشدنی برای کنسول‌های سازگار Nintendo Switch' } }
        ],
        rating: 4.6,
        reviewsCount: 16,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1607853585090-e43eeb442dd2?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-1-5',
        slug: 'nintendo-nintendo-switch-pro-controller',
        title: { en: 'Nintendo Nintendo Switch Pro Controller', fa: 'دسته Nintendo Switch Pro Controller' },
        description: { en: 'The Nintendo Nintendo Switch Pro Controller is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'دسته Nintendo Switch Pro Controller از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Nintendo', fa: 'نینتندو' },
        tags: ['controllers', 'console', 'nintendo'],
        images: [
            'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1607853585090-e43eeb442dd2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'controllers',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Nintendo', fa: 'نینتندو' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Nintendo Switch Pro Controller', fa: 'Nintendo Switch Pro دسته بازی' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Controllers', fa: 'دسته‌های بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless controller designed for Nintendo Switch', fa: 'دسته بی‌سیم مخصوص Nintendo Switch' } }
        ],
        rating: 4.8,
        reviewsCount: 23,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1607853585090-e43eeb442dd2?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-1-6',
        slug: '8bitdo-ultimate-bluetooth-controller',
        title: { en: '8BitDo Ultimate Bluetooth Controller', fa: 'دسته 8BitDo Ultimate Bluetooth' },
        description: { en: 'The 8BitDo Ultimate Bluetooth Controller is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'دسته 8BitDo Ultimate Bluetooth از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: '8BitDo', fa: '8BitDo' },
        tags: ['controllers', 'console', '8bitdo'],
        images: [
            'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1607853585090-e43eeb442dd2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'controllers',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: '8BitDo', fa: '8BitDo' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Ultimate Bluetooth Controller', fa: 'Ultimate Bluetooth دسته بازی' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Controllers', fa: 'دسته‌های بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless controller; platform compatibility depends on version', fa: 'دسته بی‌سیم؛ سازگاری با پلتفرم وابسته به نسخه' } }
        ],
        rating: 4.7,
        reviewsCount: 19,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1607853585090-e43eeb442dd2?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-2-1',
        slug: 'sony-dualsense-charging-station',
        title: { en: 'Sony DualSense Charging Station', fa: 'پایه شارژ Sony DualSense' },
        description: { en: 'The Sony DualSense Charging Station is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پایه شارژ Sony DualSense از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Sony', fa: 'سونی' },
        tags: ['charging-docks-c', 'console', 'sony'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'charging-docks-c',
        collectionSlugs: ['bestsellers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Sony', fa: 'سونی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'DualSense Charging Station', fa: 'DualSense ایستگاه شارژ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Charging Docks C', fa: 'پایه‌های شارژ USB-C' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Charges two DualSense controllers; designed for PS5', fa: 'شارژ هم‌زمان دو دسته DualSense؛ مخصوص PS5' } }
        ],
        rating: 4.8,
        reviewsCount: 26,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-2-2',
        slug: 'powera-twin-charging-station-for-dualsense',
        title: { en: 'PowerA Twin Charging Station for DualSense', fa: 'پایه شارژ دوتایی PowerA برای DualSense' },
        description: { en: 'The PowerA Twin Charging Station for DualSense is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پایه شارژ دوتایی PowerA برای DualSense از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'PowerA', fa: 'پاورای' },
        tags: ['charging-docks-c', 'console', 'powera'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'charging-docks-c',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'PowerA', fa: 'پاورای' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Twin Charging Station for DualSense', fa: 'Twin ایستگاه شارژ for DualSense' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Charging Docks C', fa: 'پایه‌های شارژ USB-C' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Charging station for two compatible DualSense controllers', fa: 'پایه شارژ برای دو دسته سازگار DualSense' } }
        ],
        rating: 4.5,
        reviewsCount: 11,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-2-3',
        slug: 'nintendo-joy-con-charging-grip',
        title: { en: 'Nintendo Joy-Con Charging Grip', fa: 'دسته شارژ Nintendo Joy-Con' },
        description: { en: 'The Nintendo Joy-Con Charging Grip is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'دسته شارژ Nintendo Joy-Con از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Nintendo', fa: 'نینتندو' },
        tags: ['charging-docks-c', 'console', 'nintendo'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'charging-docks-c',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Nintendo', fa: 'نینتندو' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Joy-Con Charging Grip', fa: 'Joy-Con دسته شارژ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Charging Docks C', fa: 'پایه‌های شارژ USB-C' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Charging grip for Joy-Con controllers; compatible cable required', fa: 'گریپ شارژ برای دسته‌های Joy-Con؛ نیازمند کابل سازگار' } }
        ],
        rating: 4.6,
        reviewsCount: 15,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-2-4',
        slug: 'hori-dual-usb-playstand-for-nintendo-switch',
        title: { en: 'HORI Dual USB PlayStand for Nintendo Switch', fa: 'پایه HORI Dual USB PlayStand برای Nintendo Switch' },
        description: { en: 'The HORI Dual USB PlayStand for Nintendo Switch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پایه HORI Dual USB PlayStand برای Nintendo Switch از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'HORI', fa: 'هوری' },
        tags: ['charging-docks-c', 'console', 'hori'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'charging-docks-c',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'HORI', fa: 'هوری' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Dual USB PlayStand for Nintendo Switch', fa: 'Dual USB Playپایه برای نینتندو سوییچ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Charging Docks C', fa: 'پایه‌های شارژ USB-C' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Play stand with USB expansion for compatible Switch models', fa: 'پایه بازی با توسعه USB برای مدل‌های سازگار Switch' } }
        ],
        rating: 4.5,
        reviewsCount: 10,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-2-5',
        slug: 'belkin-boostcharge-pro-3-in-1-wireless-charging-pad',
        title: { en: 'Belkin BoostCharge Pro 3-in-1 Wireless Charging Pad', fa: 'پد شارژ بی‌سیم Belkin BoostCharge Pro سه‌کاره' },
        description: { en: 'The Belkin BoostCharge Pro 3-in-1 Wireless Charging Pad is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پد شارژ بی‌سیم Belkin BoostCharge Pro سه‌کاره از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Belkin', fa: 'بلکین' },
        tags: ['charging-docks-c', 'console', 'belkin'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'charging-docks-c',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Belkin', fa: 'بلکین' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'BoostCharge Pro 3-in-1 Wireless Charging Pad', fa: 'BoostCharge Pro 3-in-1 پد شارژ بی‌سیم' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Charging Docks C', fa: 'پایه‌های شارژ USB-C' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: '3-in-1 charging for compatible Apple devices; not a console dock', fa: 'شارژ سه‌کاره دستگاه‌های سازگار اپل؛ داک کنسول نیست' } }
        ],
        rating: 4.8,
        reviewsCount: 24,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-2-6',
        slug: 'venom-twin-docking-station-for-ps5-controllers',
        title: { en: 'Venom Twin Docking Station for PS5 Controllers', fa: 'پایه شارژ دوتایی Venom برای دسته PS5' },
        description: { en: 'The Venom Twin Docking Station for PS5 Controllers is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'پایه شارژ دوتایی Venom برای دسته PS5 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Venom', fa: 'ونوم' },
        tags: ['charging-docks-c', 'console', 'venom'],
        images: [
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'charging-docks-c',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Venom', fa: 'ونوم' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Twin Docking Station for PS5 Controllers', fa: 'Twin داک for PS5 دسته بازیs' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Charging Docks C', fa: 'پایه‌های شارژ USB-C' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Dual charging dock for compatible PS5 controllers', fa: 'داک شارژ دوگانه برای دسته‌های سازگار PS5' } }
        ],
        rating: 4.7,
        reviewsCount: 18,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-3-1',
        slug: 'sony-pulse-elite-wireless-headset',
        title: { en: 'Sony PULSE Elite Wireless Headset', fa: 'هدست بی‌سیم Sony PULSE Elite' },
        description: { en: 'The Sony PULSE Elite Wireless Headset is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدست بی‌سیم Sony PULSE Elite از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'Sony', fa: 'سونی' },
        tags: ['console-headsets', 'console', 'sony'],
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'console-headsets',
        collectionSlugs: ['bestsellers', 'new-arrivals'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Sony', fa: 'سونی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'PULSE Elite Wireless Headset', fa: 'PULSE Elite بی‌سیم هدست' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Console Headsets', fa: 'هدست‌های کنسول بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'PlayStation Link wireless; planar magnetic drivers', fa: 'اتصال بی‌سیم PlayStation Link؛ درایورهای مغناطیسی مسطح' } }
        ],
        rating: 4.9,
        reviewsCount: 36,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-3-2',
        slug: 'sony-pulse-3d-wireless-headset',
        title: { en: 'Sony PULSE 3D Wireless Headset', fa: 'هدست بی‌سیم Sony PULSE 3D' },
        description: { en: 'The Sony PULSE 3D Wireless Headset is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدست بی‌سیم Sony PULSE 3D از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Sony', fa: 'سونی' },
        tags: ['console-headsets', 'console', 'sony'],
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'console-headsets',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Sony', fa: 'سونی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'PULSE 3D Wireless Headset', fa: 'PULSE 3D بی‌سیم هدست' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Console Headsets', fa: 'هدست‌های کنسول بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless headset designed for PS5 3D audio', fa: 'هدست بی‌سیم طراحی‌شده برای صدای سه‌بعدی PS5' } }
        ],
        rating: 4.7,
        reviewsCount: 22,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-3-3',
        slug: 'steelseries-arctis-nova-5-wireless',
        title: { en: 'SteelSeries Arctis Nova 5 Wireless', fa: 'هدست SteelSeries Arctis Nova 5 Wireless' },
        description: { en: 'The SteelSeries Arctis Nova 5 Wireless is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدست SteelSeries Arctis Nova 5 Wireless از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'SteelSeries', fa: 'استیل‌سیریز' },
        tags: ['console-headsets', 'console', 'steelseries'],
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'console-headsets',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'SteelSeries', fa: 'استیل‌سیریز' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Arctis Nova 5 Wireless', fa: 'Arctis Nova 5 بی‌سیم' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Console Headsets', fa: 'هدست‌های کنسول بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless gaming headset with platform-specific versions', fa: 'هدست گیمینگ بی‌سیم با نسخه‌های مخصوص پلتفرم‌های مختلف' } }
        ],
        rating: 4.8,
        reviewsCount: 17,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-3-4',
        slug: 'logitech-g-g-astro-a30-wireless',
        title: { en: 'Logitech G G Astro A30 Wireless', fa: 'هدست Logitech G Astro A30 Wireless' },
        description: { en: 'The Logitech G G Astro A30 Wireless is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدست Logitech G Astro A30 Wireless از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'Logitech G', fa: 'لاجیتک جی' },
        tags: ['console-headsets', 'console', 'logitech g'],
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'console-headsets',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Logitech G', fa: 'لاجیتک جی' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'G Astro A30 Wireless', fa: 'G Astro A30 بی‌سیم' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Console Headsets', fa: 'هدست‌های کنسول بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless gaming headset; platform compatibility depends on version', fa: 'هدست گیمینگ بی‌سیم؛ سازگاری وابسته به نسخه' } }
        ],
        rating: 4.6,
        reviewsCount: 14,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-3-5',
        slug: 'razer-kaira-pro-for-playstation',
        title: { en: 'Razer Kaira Pro for PlayStation', fa: 'هدست Razer Kaira Pro برای PlayStation' },
        description: { en: 'The Razer Kaira Pro for PlayStation is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدست Razer Kaira Pro برای PlayStation از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Razer', fa: 'ریزر' },
        tags: ['console-headsets', 'console', 'razer'],
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'console-headsets',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Razer', fa: 'ریزر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Kaira Pro for PlayStation', fa: 'Kaira Pro برای پلی‌استیشن' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Console Headsets', fa: 'هدست‌های کنسول بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless PlayStation gaming headset; model compatibility varies', fa: 'هدست گیمینگ بی‌سیم PlayStation؛ سازگاری وابسته به مدل' } }
        ],
        rating: 4.7,
        reviewsCount: 19,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-3-6',
        slug: 'turtle-beach-stealth-600-gen-3',
        title: { en: 'Turtle Beach Stealth 600 (Gen 3)', fa: 'هدست Turtle Beach Stealth 600 نسل سوم' },
        description: { en: 'The Turtle Beach Stealth 600 (Gen 3) is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'هدست Turtle Beach Stealth 600 نسل سوم از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Turtle Beach', fa: 'تارتل بیچ' },
        tags: ['console-headsets', 'console', 'turtle beach'],
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'console-headsets',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Turtle Beach', fa: 'تارتل بیچ' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Stealth 600 (Gen 3)', fa: 'Stealth 600 (Gen 3)' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Console Headsets', fa: 'هدست‌های کنسول بازی' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Wireless gaming headset; select PlayStation/Xbox/PC version', fa: 'هدست گیمینگ بی‌سیم؛ انتخاب نسخه PlayStation/Xbox/PC ضروری است' } }
        ],
        rating: 4.8,
        reviewsCount: 25,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-4-1',
        slug: 'powera-protection-case-for-nintendo-switch',
        title: { en: 'PowerA Protection Case for Nintendo Switch', fa: 'کیف محافظ PowerA برای Nintendo Switch' },
        description: { en: 'The PowerA Protection Case for Nintendo Switch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کیف محافظ PowerA برای Nintendo Switch از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'PowerA', fa: 'پاورای' },
        tags: ['carrying-cases', 'console', 'powera'],
        images: [
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'carrying-cases',
        collectionSlugs: ['bestsellers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'PowerA', fa: 'پاورای' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Protection Case for Nintendo Switch', fa: 'Protection قاب برای نینتندو سوییچ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Carrying Cases', fa: 'کیف‌های حمل' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Portable protective case; choose console generation and size', fa: 'کیف محافظ قابل‌حمل؛ انتخاب نسل و اندازه کنسول ضروری است' } }
        ],
        rating: 4.6,
        reviewsCount: 13,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-4-2',
        slug: 'nintendo-nintendo-switch-carrying-case-and-screen-protector',
        title: { en: 'Nintendo Nintendo Switch Carrying Case & Screen Protector', fa: 'کیف حمل و محافظ صفحه Nintendo Switch' },
        description: { en: 'The Nintendo Nintendo Switch Carrying Case & Screen Protector is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کیف حمل و محافظ صفحه Nintendo Switch از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Nintendo', fa: 'نینتندو' },
        tags: ['carrying-cases', 'console', 'nintendo'],
        images: [
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'carrying-cases',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Nintendo', fa: 'نینتندو' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Nintendo Switch Carrying Case & Screen Protector', fa: 'Nintendo Switch کیف حمل & محافظ صفحه‌نمایش' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Carrying Cases', fa: 'کیف‌های حمل' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Official carrying case bundle; fit depends on Switch model', fa: 'بسته کیف حمل و محافظ صفحه رسمی؛ تناسب وابسته به مدل Switch' } }
        ],
        rating: 4.5,
        reviewsCount: 16,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-4-3',
        slug: 'razer-arctech-pro-case-for-iphone-gaming-accessory',
        title: { en: 'Razer Arctech Pro Case for iPhone (gaming accessory)', fa: 'قاب Razer Arctech Pro برای آیفون' },
        description: { en: 'The Razer Arctech Pro Case for iPhone (gaming accessory) is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'قاب Razer Arctech Pro برای آیفون از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'Razer', fa: 'ریزر' },
        tags: ['carrying-cases', 'console', 'razer'],
        images: [
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'carrying-cases',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Razer', fa: 'ریزر' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Arctech Pro Case for iPhone (gaming accessory)', fa: 'Arctech Pro قاب برای آیفون (gaming accessory)' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Carrying Cases', fa: 'کیف‌های حمل' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Phone case, not a console case; listed only for portable gaming use', fa: 'قاب گوشی، نه کنسول؛ صرفاً برای بازی قابل‌حمل' } }
        ],
        rating: 4.7,
        reviewsCount: 11,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-4-4',
        slug: 'tomtoc-nintendo-switch-2-slim-case',
        title: { en: 'tomtoc Nintendo Switch 2 Slim Case', fa: 'کیف باریک tomtoc برای Nintendo Switch 2' },
        description: { en: 'The tomtoc Nintendo Switch 2 Slim Case is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کیف باریک tomtoc برای Nintendo Switch 2 از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'tomtoc', fa: 'تام‌توک' },
        tags: ['carrying-cases', 'console', 'tomtoc'],
        images: [
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'carrying-cases',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'tomtoc', fa: 'تام‌توک' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Nintendo Switch 2 Slim Case', fa: 'Nintendo Switch 2 Slim قاب' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Carrying Cases', fa: 'کیف‌های حمل' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Slim carrying case; confirm exact console fit before purchase', fa: 'کیف حمل باریک؛ پیش از خرید تناسب با مدل دقیق کنسول بررسی شود' } }
        ],
        rating: 4.8,
        reviewsCount: 19,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-4-5',
        slug: 'hori-adventure-pack-for-nintendo-switch',
        title: { en: 'HORI Adventure Pack for Nintendo Switch', fa: 'کیف حمل HORI Adventure Pack برای Nintendo Switch' },
        description: { en: 'The HORI Adventure Pack for Nintendo Switch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کیف حمل HORI Adventure Pack برای Nintendo Switch از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'HORI', fa: 'هوری' },
        tags: ['carrying-cases', 'console', 'hori'],
        images: [
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'carrying-cases',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'HORI', fa: 'هوری' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Adventure Pack for Nintendo Switch', fa: 'Adventure Pack برای نینتندو سوییچ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Carrying Cases', fa: 'کیف‌های حمل' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Portable case/accessory for compatible Switch systems', fa: 'کیف و لوازم حمل برای سیستم‌های سازگار Switch' } }
        ],
        rating: 4.8,
        reviewsCount: 22,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-4-6',
        slug: 'skull-and-co-neogrip-case-and-carry-case-for-nintendo-switch',
        title: { en: 'Skull & Co. NeoGrip Case and Carry Case for Nintendo Switch', fa: 'کیف و قاب Skull & Co. NeoGrip برای Nintendo Switch' },
        description: { en: 'The Skull & Co. NeoGrip Case and Carry Case for Nintendo Switch is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'کیف و قاب Skull & Co. NeoGrip برای Nintendo Switch از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'Skull & Co.', fa: 'اسکال اند کو' },
        tags: ['carrying-cases', 'console', 'skull & co.'],
        images: [
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'carrying-cases',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Skull & Co.', fa: 'اسکال اند کو' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'NeoGrip Case and Carry Case for Nintendo Switch', fa: 'NeoGrip قاب and کیف حمل برای نینتندو سوییچ' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Carrying Cases', fa: 'کیف‌های حمل' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Grip case and carrying case set; compatibility depends on console version', fa: 'مجموعه قاب گریپ و کیف حمل؛ سازگاری وابسته به نسخه کنسول' } }
        ],
        rating: 4.7,
        reviewsCount: 16,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-5-1',
        slug: 'dbrand-playstation-5-console-skins',
        title: { en: 'dbrand PlayStation 5 Console Skins', fa: 'اسکین کنسول PlayStation 5 از dbrand' },
        description: { en: 'The dbrand PlayStation 5 Console Skins is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'اسکین کنسول PlayStation 5 از dbrand از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 39.99,
        stock: 23,
        inStock: true,
        brand: { en: 'dbrand', fa: 'دی‌برند' },
        tags: ['skins-covers', 'console', 'dbrand'],
        images: [
            'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'skins-covers',
        collectionSlugs: ['bestsellers'],
        isFeatured: true,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'dbrand', fa: 'دی‌برند' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'PlayStation 5 Console Skins', fa: 'PlayStation 5 روکش کنسول' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Skins Covers', fa: 'روکش‌ها و کاورها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Precision-cut console skin; choose PS5 model and disc/digital version', fa: 'اسکین برش‌خورده دقیق؛ انتخاب مدل PS5 و نسخه دیسک/دیجیتال ضروری است' } }
        ],
        rating: 4.8,
        reviewsCount: 24,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-5-2',
        slug: 'skinit-playstation-5-console-skin',
        title: { en: 'Skinit PlayStation 5 Console Skin', fa: 'اسکین کنسول PlayStation 5 از Skinit' },
        description: { en: 'The Skinit PlayStation 5 Console Skin is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'اسکین کنسول PlayStation 5 از Skinit از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 69.99,
        stock: 26,
        inStock: true,
        brand: { en: 'Skinit', fa: 'اسکینیت' },
        tags: ['skins-covers', 'console', 'skinit'],
        images: [
            'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'skins-covers',
        collectionSlugs: ['special-offers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Skinit', fa: 'اسکینیت' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'PlayStation 5 Console Skin', fa: 'PlayStation 5 روکش کنسول' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Skins Covers', fa: 'روکش‌ها و کاورها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Decorative console skin; model-specific cutouts', fa: 'اسکین تزئینی کنسول؛ برش‌ها متناسب با مدل' } }
        ],
        rating: 4.5,
        reviewsCount: 12,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-5-3',
        slug: 'decalgirl-nintendo-switch-console-skin',
        title: { en: 'DecalGirl Nintendo Switch Console Skin', fa: 'اسکین کنسول Nintendo Switch از DecalGirl' },
        description: { en: 'The DecalGirl Nintendo Switch Console Skin is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'اسکین کنسول Nintendo Switch از DecalGirl از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 99.99,
        stock: 29,
        inStock: true,
        brand: { en: 'DecalGirl', fa: 'دکال‌گرل' },
        tags: ['skins-covers', 'console', 'decalgirl'],
        images: [
            'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'skins-covers',
        collectionSlugs: ['bestsellers'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'DecalGirl', fa: 'دکال‌گرل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Nintendo Switch Console Skin', fa: 'Nintendo Switch روکش کنسول' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Skins Covers', fa: 'روکش‌ها و کاورها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Decorative vinyl skin; choose Switch model and Joy-Con layout', fa: 'اسکین وینیل تزئینی؛ انتخاب مدل Switch و چیدمان Joy-Con ضروری است' } }
        ],
        rating: 4.6,
        reviewsCount: 15,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-5-4',
        slug: 'dbrand-nintendo-switch-skin',
        title: { en: 'dbrand Nintendo Switch Skin', fa: 'اسکین Nintendo Switch از dbrand' },
        description: { en: 'The dbrand Nintendo Switch Skin is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'اسکین Nintendo Switch از dbrand از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 149.99,
        stock: 32,
        inStock: true,
        brand: { en: 'dbrand', fa: 'دی‌برند' },
        tags: ['skins-covers', 'console', 'dbrand'],
        images: [
            'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'skins-covers',
        collectionSlugs: ['new-arrivals'],
        isFeatured: false,
        isNewArrival: false,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'dbrand', fa: 'دی‌برند' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Nintendo Switch Skin', fa: 'Nintendo Switch روکش' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Skins Covers', fa: 'روکش‌ها و کاورها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Precision-cut vinyl skin for the specified Switch generation', fa: 'اسکین وینیل با برش دقیق برای نسل مشخص Switch' } }
        ],
        rating: 4.7,
        reviewsCount: 18,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-5-5',
        slug: 'skinit-xbox-series-x-console-skin',
        title: { en: 'Skinit Xbox Series X Console Skin', fa: 'اسکین کنسول Xbox Series X از Skinit' },
        description: { en: 'The Skinit Xbox Series X Console Skin is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'اسکین کنسول Xbox Series X از Skinit از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 249.99,
        stock: 35,
        inStock: true,
        brand: { en: 'Skinit', fa: 'اسکینیت' },
        tags: ['skins-covers', 'console', 'skinit'],
        images: [
            'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'skins-covers',
        collectionSlugs: ['new-arrivals', 'special-offers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'Skinit', fa: 'اسکینیت' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'Xbox Series X Console Skin', fa: 'Xbox Series X روکش کنسول' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Skins Covers', fa: 'روکش‌ها و کاورها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Decorative skin designed for Xbox Series X console', fa: 'اسکین تزئینی مخصوص کنسول Xbox Series X' } }
        ],
        rating: 4.8,
        reviewsCount: 20,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    },
    {
        id: 'p-c-5-6',
        slug: 'decalgirl-playstation-5-controller-skin',
        title: { en: 'DecalGirl PlayStation 5 Controller Skin', fa: 'اسکین دسته PlayStation 5 از DecalGirl' },
        description: { en: 'The DecalGirl PlayStation 5 Controller Skin is a real product/model listed by its manufacturer. Verify the exact regional SKU and compatibility before purchase.', fa: 'اسکین دسته PlayStation 5 از DecalGirl از محصولات معرفی‌شده توسط سازنده است. پیش از خرید، کد مدل منطقه‌ای و سازگاری دقیق بررسی شود.' },
        price: 399.99,
        stock: 38,
        inStock: true,
        brand: { en: 'DecalGirl', fa: 'دکال‌گرل' },
        tags: ['skins-covers', 'console', 'decalgirl'],
        images: [
            'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?q=80&w=800&auto=format&fit=crop'
        ],
        categorySlug: 'console',
        subcategorySlug: 'skins-covers',
        collectionSlugs: ['new-arrivals', 'bestsellers'],
        isFeatured: false,
        isNewArrival: true,
        specifications: [
            { key: { en: 'Brand', fa: 'برند' }, value: { en: 'DecalGirl', fa: 'دکال‌گرل' } },
            { key: { en: 'Model', fa: 'مدل' }, value: { en: 'PlayStation 5 Controller Skin', fa: 'PlayStation 5 دسته بازی روکش' } },
            { key: { en: 'Product type', fa: 'نوع محصول' }, value: { en: 'Skins Covers', fa: 'روکش‌ها و کاورها' } },
            { key: { en: 'Technical details', fa: 'مشخصات فنی' }, value: { en: 'Vinyl controller skin; select compatible controller model', fa: 'اسکین وینیل دسته؛ انتخاب مدل سازگار کنترلر ضروری است' } }
        ],
        rating: 4.9,
        reviewsCount: 31,
        colors: [
            { name: { en: 'Black', fa: 'مشکی' }, value: '#18181B', slug: 'black', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop', stock: 12 },
            { name: { en: 'White', fa: 'سفید' }, value: '#F4F4F5', slug: 'white', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop', stock: 8 }
        ]
    }
];
