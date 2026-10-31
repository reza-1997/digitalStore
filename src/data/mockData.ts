import { Category, Subcategory, Collection, Brand } from "../types";



export const CATEGORIES: Category[] = [
    {
        id: 'cat-1',
        slug: 'mobile',
        name: { en: 'Mobile & Accessories', fa: 'موبایل و لوازم جانبی' },
        iconName: 'PhoneIphone',
        image: ['https://images.unsplash.com/photo-1697630725330-d4f458260399?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
            'https://images.unsplash.com/photo-1664700650916-bf2ec5fdf89a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
        ],
    },
    {
        id: 'cat-2',
        slug: 'watches',
        name: { en: 'Smart Watches', fa: 'ساعت هوشمند' },
        iconName: 'Watch',
        image: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
            "https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        ],
    },
    {
        id: 'cat-3',
        slug: 'earbuds',
        name: { en: 'Earbuds & Audio', fa: 'ایربادز و صوتی' },
        iconName: 'Headphones',
        image: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
            "https://images.unsplash.com/photo-1574920162043-b872873f19c8?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        ],
    },
    {
        id: 'cat-4',
        slug: 'pc',
        name: { en: 'PC & Peripherals', fa: 'کامپیوتر و تجهیزات' },
        iconName: 'Mouse',
        image: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
            "https://images.unsplash.com/photo-1630201129622-a8e8ef3f7245?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        ],
    },
    {
        id: 'cat-5',
        slug: 'console',
        name: { en: 'Console & Gaming', fa: 'کنسول و گیمینگ' },
        iconName: 'SportsEsports',
        image: ['https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
            "https://images.unsplash.com/photo-1665592512676-840f7b669aeb?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1357&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            "https://images.unsplash.com/photo-1618193139062-2c5bf4f935b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            "https://images.unsplash.com/photo-1661347561879-c9ab77bac89f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        ],
    },
];

export const SUBCATEGORIES: Subcategory[] = [
    // --- Mobile Subcategories ---
    { id: 'sub-m-1', categorySlug: 'mobile', slug: 'smartphones', name: { en: 'Smartphones', fa: 'گوشی هوشمند' }, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-m-2', categorySlug: 'mobile', slug: 'fast-chargers', name: { en: 'Fast Chargers', fa: 'شارژر سریع' }, image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-m-3', categorySlug: 'mobile', slug: 'power-banks', name: { en: 'Power Banks', fa: 'پاوربانک' }, image: 'https://images.unsplash.com/photo-1609592424075-13a69a473456?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-m-4', categorySlug: 'mobile', slug: 'cases-protectors', name: { en: 'Cases & Protectors', fa: 'قاب و محافظ صفحه' }, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-m-5', categorySlug: 'mobile', slug: 'cables-adapters', name: { en: 'Cables & Adapters', fa: 'کابل و مبدل' }, image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop' },

    // --- Watches Subcategories ---
    { id: 'sub-w-1', categorySlug: 'watches', slug: 'smartwatches', name: { en: 'Smartwatches', fa: 'ساعت هوشمند' }, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-w-2', categorySlug: 'watches', slug: 'fitness-bands', name: { en: 'Fitness Bands', fa: 'مچ‌بند سلامتی' }, image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-w-3', categorySlug: 'watches', slug: 'replacement-straps', name: { en: 'Replacement Straps', fa: 'بند جایگزین' }, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-w-4', categorySlug: 'watches', slug: 'charging-docks-w', name: { en: 'Charging Docks', fa: 'پایه شارژر' }, image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-w-5', categorySlug: 'watches', slug: 'watch-protectors', name: { en: 'Watch Screen Protectors', fa: 'محافظ صفحه ساعت' }, image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop' },

    // --- Earbuds Subcategories ---
    { id: 'sub-e-1', categorySlug: 'earbuds', slug: 'wireless-earbuds', name: { en: 'Wireless Earbuds', fa: 'ایربادز بی‌سیم' }, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-e-2', categorySlug: 'earbuds', slug: 'over-ear-headphones', name: { en: 'Over-Ear Headphones', fa: 'هدفون دوروشی' }, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-e-3', categorySlug: 'earbuds', slug: 'gaming-headsets', name: { en: 'Gaming Headsets', fa: 'هدست گیمینگ' }, image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-e-4', categorySlug: 'earbuds', slug: 'audio-adapters', name: { en: 'Audio Adapters', fa: 'مبدل صدا' }, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-e-5', categorySlug: 'earbuds', slug: 'earbud-cases', name: { en: 'Silicone Cases', fa: 'کاور سیلیکونی ایربادز' }, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400&auto=format&fit=crop' },

    // --- PC Subcategories ---
    { id: 'sub-p-1', categorySlug: 'pc', slug: 'mechanical-keyboards', name: { en: 'Mechanical Keyboards', fa: 'کیبورد مکانیکی' }, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-p-2', categorySlug: 'pc', slug: 'gaming-mice', name: { en: 'Gaming Mice', fa: 'ماوس گیمینگ' }, image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-p-3', categorySlug: 'pc', slug: 'mouse-pads', name: { en: 'Mouse Pads', fa: 'پد ماوس' }, image: 'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-p-4', categorySlug: 'pc', slug: 'monitors', name: { en: 'Gaming Monitors', fa: 'مانیتور گیمینگ' }, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-p-5', categorySlug: 'pc', slug: 'hubs-docks', name: { en: 'Type-C Hubs & Docks', fa: 'هاب و داک تایپ سی' }, image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=400&auto=format&fit=crop' },

    // --- Console Subcategories ---
    { id: 'sub-c-1', categorySlug: 'console', slug: 'controllers', name: { en: 'Game Controllers', fa: 'دسته بازی (کنترلر)' }, image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-c-2', categorySlug: 'console', slug: 'charging-docks-c', name: { en: 'Controller Charging Docks', fa: 'پایه شارژر دسته' }, image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-c-3', categorySlug: 'console', slug: 'console-headsets', name: { en: 'Console Headsets', fa: 'هدست تخصصی کنسول' }, image: 'https://images.unsplash.com/photo-1612287233202-b51b366f1dfc?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-c-4', categorySlug: 'console', slug: 'carrying-cases', name: { en: 'Carrying Cases', fa: 'کیف حمل و نقل' }, image: 'https://images.unsplash.com/photo-1593118247619-e2d6f0576ded?q=80&w=400&auto=format&fit=crop' },
    { id: 'sub-c-5', categorySlug: 'console', slug: 'skins-covers', name: { en: 'Skins & Custom Covers', fa: 'استیکر و کاور بدنه' }, image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=400&auto=format&fit=crop' },
];

export const COLLECTIONS: Collection[] = [
    {
        id: 'col-1',
        slug: 'new-arrivals',
        title: { en: 'New Arrivals 2026', fa: 'جدیدترین‌های ۲۰۲۶' },
        subtitle: { en: 'Experience the latest innovation in high-end tech gear.', fa: 'تجربه آخرین نوآوری‌ها در تجهیزات دیجیتال پریمیوم.' },
        bannerImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 'col-2',
        slug: 'bestsellers',
        title: { en: 'Top Bestsellers', fa: 'پرفروش‌ترین‌ها' },
        subtitle: { en: 'Most loved gadgets by our professional community.', fa: 'محبوب‌ترین گجت‌ها از نگاه جامعه حرفه‌ای کاربران ما.' },
        bannerImage: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 'col-3',
        slug: 'special-offers',
        title: { en: 'Special Offers & Discounts', fa: 'پیشنهادها و تخفیف‌های ویژه' },
        subtitle: { en: 'Exclusive deals on premium digital gadgets for a limited time.', fa: 'تخفیف‌های انحصاری روی گجت‌های دیجیتال پریمیوم برای مدت محدود.' },
        bannerImage: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=1200&auto=format&fit=crop',
    },
];

export const BRANDS: Brand[] = [
    { slug: 'samsung', name: { en: 'Samsung', fa: 'سامسونگ' } },
    { slug: 'apple', name: { en: 'Apple', fa: 'اپل' } },
    { slug: 'google', name: { en: 'Google', fa: 'گوگل' } },
    { slug: 'anker', name: { en: 'Anker', fa: 'انکر' } },
    { slug: 'ugreen', name: { en: 'UGREEN', fa: 'یوگرین' } },
    { slug: 'belkin', name: { en: 'Belkin', fa: 'بلکین' } },
    { slug: 'spigen', name: { en: 'Spigen', fa: 'اسپیگن' } },
    { slug: 'esr', name: { en: 'ESR', fa: 'ای‌اس‌آر' } },
    { slug: 'otterbox', name: { en: 'OtterBox', fa: 'آترباکس' } },
    { slug: 'zagg', name: { en: 'ZAGG', fa: 'زگ' } },
    { slug: 'garmin', name: { en: 'Garmin', fa: 'گارمین' } },
    { slug: 'xiaomi', name: { en: 'Xiaomi', fa: 'شیائومی' } },
    { slug: 'huawei', name: { en: 'Huawei', fa: 'هواوی' } },
    { slug: 'fitbit', name: { en: 'Fitbit', fa: 'فیت‌بیت' } },
    { slug: 'nomad', name: { en: 'Nomad', fa: 'نوماد' } },
    { slug: 'canyon', name: { en: 'Canyon', fa: 'کانیون' } },
    { slug: 'hama', name: { en: 'Hama', fa: 'هاما' } },
    { slug: 'ringke', name: { en: 'Ringke', fa: 'رینکی' } },
    { slug: 'sony', name: { en: 'Sony', fa: 'سونی' } },
    { slug: 'jabra', name: { en: 'Jabra', fa: 'جبرا' } },
    { slug: 'bose', name: { en: 'Bose', fa: 'بوز' } },
    { slug: 'sennheiser', name: { en: 'Sennheiser', fa: 'سنهایزر' } },
    { slug: 'soundcore', name: { en: 'soundcore', fa: 'ساندکور' } },
    { slug: 'logitech-g', name: { en: 'Logitech G', fa: 'لاجیتک جی' } },
    { slug: 'steelseries', name: { en: 'SteelSeries', fa: 'استیل‌سریز' } },
    { slug: 'razer', name: { en: 'Razer', fa: 'ریزر' } },
    { slug: 'hyperx', name: { en: 'HyperX', fa: 'هایپرایکس' } },
    { slug: 'corsair', name: { en: 'Corsair', fa: 'کورسیر' } },
    { slug: 'logitech', name: { en: 'Logitech', fa: 'لاجیتک' } },
    { slug: 'keychron', name: { en: 'Keychron', fa: 'کی‌کرون' } },
    { slug: 'dell', name: { en: 'Dell', fa: 'دِل' } },
    { slug: 'lg', name: { en: 'LG', fa: 'ال‌جی' } },
    { slug: 'asus', name: { en: 'ASUS', fa: 'ایسوس' } },
    { slug: 'benq', name: { en: 'BenQ', fa: 'بنکیو' } },
    { slug: 'aoc', name: { en: 'AOC', fa: 'ای‌او‌سی' } },
    { slug: 'caldigit', name: { en: 'CalDigit', fa: 'کالدیجیت' } },
    { slug: 'satechi', name: { en: 'Satechi', fa: 'ساتچی' } },
    { slug: 'microsoft', name: { en: 'Microsoft', fa: 'مایکروسافت' } },
    { slug: 'nintendo', name: { en: 'Nintendo', fa: 'نینتندو' } },
    { slug: '8bitdo', name: { en: '8BitDo', fa: 'هشت‌بیت‌دو' } },
    { slug: 'powera', name: { en: 'PowerA', fa: 'پاورآ' } },
    { slug: 'hori', name: { en: 'HORI', fa: 'هوری' } },
    { slug: 'venom', name: { en: 'Venom', fa: 'ونوم' } },
    { slug: 'tomtoc', name: { en: 'tomtoc', fa: 'تام‌تاک' } },
    { slug: 'skull-and-co', name: { en: 'Skull & Co.', fa: 'اسکال اند کو' } },
    { slug: 'dbrand', name: { en: 'dbrand', fa: 'دی‌برند' } },
    { slug: 'skinit', name: { en: 'Skinit', fa: 'اسکینیت' } },
    { slug: 'decalgirl', name: { en: 'DecalGirl', fa: 'دکال‌گرل' } },
    { slug: 'creative', name: { en: 'Creative', fa: 'کریتییُو' } },
    { slug: 'fiio', name: { en: 'FiiO', fa: 'فیو' } },
    { slug: 'catalyst', name: { en: 'Catalyst', fa: 'کاتالیست' } },
    { slug: 'elago', name: { en: 'elago', fa: 'الگو' } },
    { slug: 'turtle-beach', name: { en: 'Turtle Beach', fa: 'تاتل بیچ' } }
];





