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

// export const BRANDS: Brand[] = [
//     {
//         slug: 'airlink',
//         name: {
//             en: 'AirLink',
//             fa: 'ایرلینک'
//         },
//         logoUrl: 'airlink.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'earbuds'
//         ],
//         subcategorySlugs: [
//             'audio-adapters'
//         ],
//         productIds: [
//             'p-e-4-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'anker',
//         name: {
//             en: 'Anker',
//             fa: 'انکر'
//         },
//         logoUrl: 'anker.svg',
//         website: 'https://www.anker.com/',
//         productCount: 1,
//         categorySlugs: [
//             'mobile'
//         ],
//         subcategorySlugs: [
//             'fast-chargers'
//         ],
//         productIds: [
//             'p-m-2-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'apex',
//         name: {
//             en: 'Apex',
//             fa: 'آپکس'
//         },
//         logoUrl: 'apex.svg',
//         website: null,
//         productCount: 3,
//         categorySlugs: [
//             'mobile',
//             'pc',
//             'watches'
//         ],
//         subcategorySlugs: [
//             'mechanical-keyboards',
//             'smartphones',
//             'smartwatches'
//         ],
//         productIds: [
//             'p-m-1-1',
//             'p-w-1-2',
//             'p-p-1-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'armorshield',
//         name: {
//             en: 'ArmorShield',
//             fa: 'آرمور شیلد'
//         },
//         logoUrl: 'armorshield.svg',
//         website: null,
//         productCount: 2,
//         categorySlugs: [
//             'mobile',
//             'watches'
//         ],
//         subcategorySlugs: [
//             'cases-protectors',
//             'watch-protectors'
//         ],
//         productIds: [
//             'p-m-4-1',
//             'p-w-5-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'armorshock',
//         name: {
//             en: 'ArmorShock',
//             fa: 'آرمور شاک'
//         },
//         logoUrl: 'armorshock.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'earbuds'
//         ],
//         subcategorySlugs: [
//             'earbud-cases'
//         ],
//         productIds: [
//             'p-e-5-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'audiolink',
//         name: {
//             en: 'AudioLink',
//             fa: 'آدیولینک'
//         },
//         logoUrl: 'audiolink.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'earbuds'
//         ],
//         subcategorySlugs: [
//             'audio-adapters'
//         ],
//         productIds: [
//             'p-e-4-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'aura',
//         name: {
//             en: 'Aura',
//             fa: 'آورا'
//         },
//         logoUrl: 'aura.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'earbuds'
//         ],
//         subcategorySlugs: [
//             'over-ear-headphones'
//         ],
//         productIds: [
//             'p-e-2-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'carbonarmor',
//         name: {
//             en: 'CarbonArmor',
//             fa: 'کربن آرمور'
//         },
//         logoUrl: 'carbonarmor.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'earbuds'
//         ],
//         subcategorySlugs: [
//             'earbud-cases'
//         ],
//         productIds: [
//             'p-e-5-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'chronos',
//         name: {
//             en: 'Chronos',
//             fa: 'کرونوس'
//         },
//         logoUrl: 'chronos.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'watches'
//         ],
//         subcategorySlugs: [
//             'smartwatches'
//         ],
//         productIds: [
//             'p-w-1-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'consolemaster',
//         name: {
//             en: 'ConsoleMaster',
//             fa: 'کنسول‌مستر'
//         },
//         logoUrl: 'consolemaster.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'console'
//         ],
//         subcategorySlugs: [
//             'console-headsets'
//         ],
//         productIds: [
//             'p-c-3-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'controlpro',
//         name: {
//             en: 'ControlPro',
//             fa: 'کنترل‌پرو'
//         },
//         logoUrl: 'controlpro.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'pc'
//         ],
//         subcategorySlugs: [
//             'mouse-pads'
//         ],
//         productIds: [
//             'p-p-3-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'dockmaster',
//         name: {
//             en: 'DockMaster',
//             fa: 'داک‌مستر'
//         },
//         logoUrl: 'dockmaster.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'pc'
//         ],
//         subcategorySlugs: [
//             'hubs-docks'
//         ],
//         productIds: [
//             'p-p-5-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'duracord',
//         name: {
//             en: 'Duracord',
//             fa: 'دوراکورد'
//         },
//         logoUrl: 'duracord.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'mobile'
//         ],
//         subcategorySlugs: [
//             'cables-adapters'
//         ],
//         productIds: [
//             'p-m-5-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'fittrack',
//         name: {
//             en: 'FitTrack',
//             fa: 'فیت‌ترک'
//         },
//         logoUrl: 'fittrack.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'watches'
//         ],
//         subcategorySlugs: [
//             'fitness-bands'
//         ],
//         productIds: [
//             'p-w-2-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'flexsport',
//         name: {
//             en: 'FlexSport',
//             fa: 'فلکس‌اسپورت'
//         },
//         logoUrl: 'flexsport.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'watches'
//         ],
//         subcategorySlugs: [
//             'replacement-straps'
//         ],
//         productIds: [
//             'p-w-3-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'gearpro',
//         name: {
//             en: 'GearPro',
//             fa: 'گیرپرو'
//         },
//         logoUrl: 'gearpro.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'console'
//         ],
//         subcategorySlugs: [
//             'carrying-cases'
//         ],
//         productIds: [
//             'p-c-4-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'gripmaster',
//         name: {
//             en: 'GripMaster',
//             fa: 'گریپ‌مستر'
//         },
//         logoUrl: 'gripmaster.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'console'
//         ],
//         subcategorySlugs: [
//             'skins-covers'
//         ],
//         productIds: [
//             'p-c-5-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'horizon',
//         name: {
//             en: 'Horizon',
//             fa: 'هورایزن'
//         },
//         logoUrl: 'horizon.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'pc'
//         ],
//         subcategorySlugs: [
//             'monitors'
//         ],
//         productIds: [
//             'p-p-4-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'hydroflex',
//         name: {
//             en: 'HydroFlex',
//             fa: 'هیدروفِلکس'
//         },
//         logoUrl: 'hydroflex.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'watches'
//         ],
//         subcategorySlugs: [
//             'watch-protectors'
//         ],
//         productIds: [
//             'p-w-5-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'linkmaster',
//         name: {
//             en: 'LinkMaster',
//             fa: 'لینک‌مستر'
//         },
//         logoUrl: 'linkmaster.svg',
//         website: null,
//         productCount: 2,
//         categorySlugs: [
//             'mobile',
//             'pc'
//         ],
//         subcategorySlugs: [
//             'cables-adapters',
//             'hubs-docks'
//         ],
//         productIds: [
//             'p-m-5-2',
//             'p-p-5-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'luxestrap',
//         name: {
//             en: 'LuxeStrap',
//             fa: 'لوکس‌استرپ'
//         },
//         logoUrl: 'luxestrap.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'watches'
//         ],
//         subcategorySlugs: [
//             'replacement-straps'
//         ],
//         productIds: [
//             'p-w-3-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'luxetech',
//         name: {
//             en: 'LuxeTech',
//             fa: 'لوکس‌تک'
//         },
//         logoUrl: 'luxetech.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'pc'
//         ],
//         subcategorySlugs: [
//             'mechanical-keyboards'
//         ],
//         productIds: [
//             'p-p-1-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'magsnap',
//         name: {
//             en: 'MagSnap',
//             fa: 'مگ‌اسنپ'
//         },
//         logoUrl: 'magsnap.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'mobile'
//         ],
//         subcategorySlugs: [
//             'power-banks'
//         ],
//         productIds: [
//             'p-m-3-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'matrix',
//         name: {
//             en: 'Matrix',
//             fa: 'ماتریکس'
//         },
//         logoUrl: 'matrix.svg',
//         website: null,
//         productCount: 2,
//         categorySlugs: [
//             'console'
//         ],
//         subcategorySlugs: [
//             'charging-docks-c',
//             'controllers'
//         ],
//         productIds: [
//             'p-c-1-1',
//             'p-c-2-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'nexus',
//         name: {
//             en: 'Nexus',
//             fa: 'نکسوس'
//         },
//         logoUrl: 'nexus.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'pc'
//         ],
//         subcategorySlugs: [
//             'monitors'
//         ],
//         productIds: [
//             'p-p-4-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'nova',
//         name: {
//             en: 'Nova',
//             fa: 'نووا'
//         },
//         logoUrl: 'nova.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'mobile'
//         ],
//         subcategorySlugs: [
//             'smartphones'
//         ],
//         productIds: [
//             'p-m-1-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'omnicharge',
//         name: {
//             en: 'OmniCharge',
//             fa: 'آمنی‌شارژ'
//         },
//         logoUrl: 'omnicharge.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'watches'
//         ],
//         subcategorySlugs: [
//             'charging-docks-w'
//         ],
//         productIds: [
//             'p-w-4-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'phantom',
//         name: {
//             en: 'Phantom',
//             fa: 'فانتوم'
//         },
//         logoUrl: 'phantom.svg',
//         website: null,
//         productCount: 2,
//         categorySlugs: [
//             'console',
//             'earbuds'
//         ],
//         subcategorySlugs: [
//             'console-headsets',
//             'gaming-headsets'
//         ],
//         productIds: [
//             'p-e-3-1',
//             'p-c-3-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'pocketpuck',
//         name: {
//             en: 'PocketPuck',
//             fa: 'پاکت‌پاک'
//         },
//         logoUrl: 'pocketpuck.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'watches'
//         ],
//         subcategorySlugs: [
//             'charging-docks-w'
//         ],
//         productIds: [
//             'p-w-4-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'powerstation',
//         name: {
//             en: 'PowerStation',
//             fa: 'پاوراستیشن'
//         },
//         logoUrl: 'powerstation.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'mobile'
//         ],
//         subcategorySlugs: [
//             'power-banks'
//         ],
//         productIds: [
//             'p-m-3-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'prostream',
//         name: {
//             en: 'ProStream',
//             fa: 'پرو استریم'
//         },
//         logoUrl: 'prostream.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'pc'
//         ],
//         subcategorySlugs: [
//             'gaming-mice'
//         ],
//         productIds: [
//             'p-p-2-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'pulsefit',
//         name: {
//             en: 'PulseFit',
//             fa: 'پالس‌فیت'
//         },
//         logoUrl: 'pulsefit.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'watches'
//         ],
//         subcategorySlugs: [
//             'fitness-bands'
//         ],
//         productIds: [
//             'p-w-2-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'rapiddock',
//         name: {
//             en: 'RapidDock',
//             fa: 'رپیدداک'
//         },
//         logoUrl: 'rapiddock.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'console'
//         ],
//         subcategorySlugs: [
//             'charging-docks-c'
//         ],
//         productIds: [
//             'p-c-2-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'skinguard',
//         name: {
//             en: 'SkinGuard',
//             fa: 'اسکین‌گارد'
//         },
//         logoUrl: 'skinguard.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'console'
//         ],
//         subcategorySlugs: [
//             'skins-covers'
//         ],
//         productIds: [
//             'p-c-5-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'sonicpods',
//         name: {
//             en: 'SonicPods',
//             fa: 'سونیک‌پادز'
//         },
//         logoUrl: 'sonicpods.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'earbuds'
//         ],
//         subcategorySlugs: [
//             'wireless-earbuds'
//         ],
//         productIds: [
//             'p-e-1-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'soundcore',
//         name: {
//             en: 'Soundcore',
//             fa: 'ساندکور'
//         },
//         logoUrl: 'soundcore.svg',
//         website: 'https://www.soundcore.com/',
//         productCount: 1,
//         categorySlugs: [
//             'earbuds'
//         ],
//         subcategorySlugs: [
//             'over-ear-headphones'
//         ],
//         productIds: [
//             'p-e-2-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'soundpulse',
//         name: {
//             en: 'SoundPulse',
//             fa: 'ساوندپالس'
//         },
//         logoUrl: 'soundpulse.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'earbuds'
//         ],
//         subcategorySlugs: [
//             'wireless-earbuds'
//         ],
//         productIds: [
//             'p-e-1-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'strikepro',
//         name: {
//             en: 'StrikePro',
//             fa: 'استرایک‌پرو'
//         },
//         logoUrl: 'strikepro.svg',
//         website: null,
//         productCount: 2,
//         categorySlugs: [
//             'console',
//             'earbuds'
//         ],
//         subcategorySlugs: [
//             'controllers',
//             'gaming-headsets'
//         ],
//         productIds: [
//             'p-e-3-2',
//             'p-c-1-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'titan',
//         name: {
//             en: 'Titan',
//             fa: 'تایتان'
//         },
//         logoUrl: 'titan.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'pc'
//         ],
//         subcategorySlugs: [
//             'mouse-pads'
//         ],
//         productIds: [
//             'p-p-3-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'travelguard',
//         name: {
//             en: 'TravelGuard',
//             fa: 'تراول‌گارد'
//         },
//         logoUrl: 'travelguard.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'console'
//         ],
//         subcategorySlugs: [
//             'carrying-cases'
//         ],
//         productIds: [
//             'p-c-4-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'ultraglass',
//         name: {
//             en: 'UltraGlass',
//             fa: 'اولتراگلس'
//         },
//         logoUrl: 'ultraglass.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'mobile'
//         ],
//         subcategorySlugs: [
//             'cases-protectors'
//         ],
//         productIds: [
//             'p-m-4-2'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'viper',
//         name: {
//             en: 'Viper',
//             fa: 'وایپر'
//         },
//         logoUrl: 'viper.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'pc'
//         ],
//         subcategorySlugs: [
//             'gaming-mice'
//         ],
//         productIds: [
//             'p-p-2-1'
//         ],
//         isActive: true
//     },
//     {
//         slug: 'voltmax',
//         name: {
//             en: 'VoltMax',
//             fa: 'ولت‌مکس'
//         },
//         logoUrl: 'voltmax.svg',
//         website: null,
//         productCount: 1,
//         categorySlugs: [
//             'mobile'
//         ],
//         subcategorySlugs: [
//             'fast-chargers'
//         ],
//         productIds: [
//             'p-m-2-1'
//         ],
//         isActive: true
//     }
// ];


// export const PRODUCTS: Product[] = [
//     // --- 1. Mobile -> smartphones (2 Products) ---
//     {
//         id: 'p-m-1-1',
//         slug: 'apex-ultra-5g-smartphone',
//         title: { en: 'Apex Ultra 5G Flagship Smartphone', fa: 'گوشی پرچمدار اپکس اولترا 5G' },
//         description: { en: 'Equipped with a stunning AMOLED display, advanced triple camera system, and ultra-fast processor.', fa: 'مجهز به نمایشگر خیره‌کننده AMOLED، سیستم دوربین سه‌گانه پیشرفته و پردازنده فوق‌العاده سریع.' },
//         price: 999.99,
//         discountPrice: 899.99,
//         stock: 25,
//         inStock: true,
//         brand: { en: 'Apex', fa: 'آپکس' },
//         tags: ['smartphone', 'mobile', 'flagship', '5g'],
//         images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'mobile',
//         subcategorySlug: 'smartphones',
//         collectionSlugs: ['new-arrivals', 'bestsellers'],
//         isFeatured: true,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Display', fa: 'صفحه نمایش' }, value: { en: '6.8 inch 120Hz AMOLED', fa: '۶.۸ اینچ امولد ۱۲۰ هرتز' } },
//             { key: { en: 'Battery', fa: 'باتری' }, value: { en: '5000 mAh Fast Charge', fa: '۵۰۰۰ میلی‌آمپر شارژ سریع' } }
//         ],
//         rating: 4.9,
//         reviewsCount: 110,
//         colors: [
//             { name: { en: 'Titanium Black', fa: 'مشکی تیتانیوم' }, value: '#1A1A1A', slug: 'titanium-black', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', stock: 10 },
//             { name: { en: 'Desert Titanium', fa: 'تیتانیوم بیابانی' }, value: '#C4A47C', slug: 'desert-titanium', image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=800&auto=format&fit=crop', stock: 8 },
//             { name: { en: 'Natural Silver', fa: 'نقره‌ای طبیعی' }, value: '#E3E4E5', slug: 'natural-silver', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', stock: 7 }
//         ]
//     },
//     {
//         id: 'p-m-1-2',
//         slug: 'nova-lite-smartphone',
//         title: { en: 'Nova Lite 5G Compact Smartphone', fa: 'گوشی کامپکت نووا لایت 5G' },
//         description: { en: 'Sleek design with long-lasting battery and reliable daily performance.', fa: 'طراحی شیک با باتری باکیفیت و عملکرد قابل اعتماد روزمره.' },
//         price: 499.99,
//         stock: 40,
//         inStock: true,
//         brand: { en: 'Nova', fa: 'نووا' },
//         tags: ['smartphone', 'mobile', 'compact'],
//         images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'mobile',
//         subcategorySlug: 'smartphones',
//         collectionSlugs: ['special-offers'],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Display', fa: 'صفحه نمایش' }, value: { en: '6.1 inch FHD+', fa: '۶.۱ اینچ FHD+' } },
//             { key: { en: 'Camera', fa: 'دوربین' }, value: { en: '64 MP Dual Camera', fa: 'دوربین دوگانه ۶۴ مگاپیکسلی' } }
//         ],
//         rating: 4.6,
//         reviewsCount: 75,
//         colors: [
//             { name: { en: 'Ocean Blue', fa: 'آبی اقیانوسی' }, value: '#1E3A8A', slug: 'ocean-blue', image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=800&auto=format&fit=crop', stock: 20 },
//             { name: { en: 'Pure White', fa: 'سفید خالص' }, value: '#FFFFFF', slug: 'pure-white', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', stock: 20 }
//         ]
//     },

//     // --- 2. Mobile -> fast-chargers (2 Products) ---
//     {
//         id: 'p-m-2-1',
//         slug: 'volt-max-100w-gan-charger',
//         title: { en: 'VoltMax 100W GaN Fast Charger', fa: 'شارژر سریع ۱۰۰ وات GaN ولت‌مکس' },
//         description: { en: 'Multi-port high-speed charging adapter powered by advanced GaN technology.', fa: 'آداپتور شارژ پرسرعت چندپورت با تکنولوژی پیشرفته GaN.' },
//         price: 69.99,
//         discountPrice: 59.99,
//         stock: 60,
//         inStock: true,
//         brand: { en: 'VoltMax', fa: 'ولت‌مکس' },
//         tags: ['charger', 'gan', 'fast-charge'],
//         images: ['https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'mobile',
//         subcategorySlug: 'fast-chargers',
//         collectionSlugs: ['bestsellers'],
//         isFeatured: true,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Output Power', fa: 'توان خروجی' }, value: { en: '100W Max', fa: 'حداکثر ۱۰۰ وات' } },
//             { key: { en: 'Ports', fa: 'تعداد پورت' }, value: { en: '2x Type-C, 1x USB-A', fa: '۲ عدد تایپ سی، ۱ عدد یو اس بی ای' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 92,
//         colors: [
//             { name: { en: 'Charcoal Gray', fa: 'خاکستری زغالی' }, value: '#333333', slug: 'charcoal-gray', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop', stock: 35 },
//             { name: { en: 'Snow White', fa: 'سفید برفی' }, value: '#F5F5F5', slug: 'snow-white', image: 'https://images.unsplash.com/photo-1609592424075-13a69a473456?q=80&w=800&auto=format&fit=crop', stock: 25 }
//         ]
//     },
//     {
//         id: 'p-m-2-2',
//         slug: 'anker-nano-30w-wall-charger',
//         title: { en: 'Anker Nano II 30W Compact Charger', fa: 'شارژر دیواری ۳۰ وات انکر نانو ۲' },
//         description: { en: 'Pocket-friendly size with powerful output for phones and tablets.', fa: 'اندازه بسیار کوچک مناسب جیب با خروجی قدرتمند برای انواع گوشی و تبلت.' },
//         price: 34.99,
//         stock: 80,
//         inStock: true,
//         brand: { en: 'Anker', fa: 'انکر' },
//         tags: ['charger', 'adapter', 'compact'],
//         images: ['https://images.unsplash.com/photo-1609592424075-13a69a473456?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'mobile',
//         subcategorySlug: 'fast-chargers',
//         collectionSlugs: ['special-offers'],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Power', fa: 'توان' }, value: { en: '30W', fa: '۳۰ وات' } },
//             { key: { en: 'Technology', fa: 'فناوری' }, value: { en: 'PowerIQ 3.0', fa: 'پاورآی‌کیو ۳.۰' } }
//         ],
//         rating: 4.7,
//         reviewsCount: 150,
//         colors: [
//             { name: { en: 'Jet Black', fa: 'مشکی براق' }, value: '#0B0B0B', slug: 'jet-black', image: 'https://images.unsplash.com/photo-1609592424075-13a69a473456?q=80&w=800&auto=format&fit=crop', stock: 50 },
//             { name: { en: 'Lilac Purple', fa: 'بنفش یاسی' }, value: '#C084FC', slug: 'lilac-purple', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop', stock: 30 }
//         ]
//     },

//     // --- 3. Mobile -> power-banks (2 Products) ---
//     {
//         id: 'p-m-3-1',
//         slug: 'power-station-20000-mah',
//         title: { en: 'PowerStation Pro 20,000mAh Power Bank', fa: 'پاوربانک ۲۰۰۰۰ میلی‌آمپر پاوراستیشن پرو' },
//         description: { en: 'High capacity portable charger with dual 65W PD output for laptops and phones.', fa: 'شارژر همراه با ظرفیت بالا و خروجی دوگانه ۶۵ وات PD مناسب لپ‌تاپ و گوشی.' },
//         price: 89.99,
//         stock: 30,
//         inStock: true,
//         brand: { en: 'PowerStation', fa: 'پاوراستیشن' },
//         tags: ['powerbank', 'battery', 'portable'],
//         images: ['https://images.unsplash.com/photo-1609592424075-13a69a473456?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'mobile',
//         subcategorySlug: 'power-banks',
//         collectionSlugs: ['bestsellers'],
//         isFeatured: true,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Capacity', fa: 'ظرفیت' }, value: { en: '20,000 mAh', fa: '۲۰,۰۰۰ میلی‌آمپر ساعت' } },
//             { key: { en: 'Max Output', fa: 'حداکثر خروجی' }, value: { en: '65W Power Delivery', fa: '۶۵ وات پاور دلیوری' } }
//         ],
//         rating: 4.9,
//         reviewsCount: 180,
//         colors: [
//             { name: { en: 'Space Gray', fa: 'خاکستری فضایی' }, value: '#4B5563', slug: 'space-gray', image: 'https://images.unsplash.com/photo-1609592424075-13a69a473456?q=80&w=800&auto=format&fit=crop', stock: 15 },
//             { name: { en: 'Silver Metallic', fa: 'نقره‌ای متالیک' }, value: '#9CA3AF', slug: 'silver-metallic', image: 'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=800&auto=format&fit=crop', stock: 15 }
//         ]
//     },
//     {
//         id: 'p-m-3-2',
//         slug: 'magsafe-magnetic-powerbank-10k',
//         title: { en: 'MagSnap Wireless Magnetic Power Bank 10K', fa: 'پاوربانک مگ‌سیف مگنتی مگ‌اسپپ ۱۰ هزار' },
//         description: { en: 'Wireless magnetic charging stand with kickstand for iPhone and compatible devices.', fa: 'پایه شارژ مغناطیسی بی‌سیم همراه با استند تاشو برای آیفون و دستگاه‌های سازگار.' },
//         price: 59.99,
//         discountPrice: 49.99,
//         stock: 45,
//         inStock: true,
//         brand: { en: 'MagSnap', fa: 'مگ‌اسنپ' },
//         tags: ['powerbank', 'wireless', 'magsafe'],
//         images: ['https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'mobile',
//         subcategorySlug: 'power-banks',
//         collectionSlugs: ['new-arrivals'],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Capacity', fa: 'ظرفیت' }, value: { en: '10,000 mAh', fa: '۱۰,۰۰۰ میلی‌آمپر ساعت' } },
//             { key: { en: 'Wireless', fa: 'شارژ بی‌سیم' }, value: { en: '15W Fast Magnetic', fa: '۱۵ وات مغناطیسی سریع' } }
//         ],
//         rating: 4.7,
//         reviewsCount: 88,
//         colors: [
//             { name: { en: 'Midnight Blue', fa: 'آبی نیمه‌شب' }, value: '#0F172A', slug: 'midnight-blue', image: 'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=800&auto=format&fit=crop', stock: 20 },
//             { name: { en: 'Rose Gold', fa: 'رزگلد' }, value: '#F43F5E', slug: 'rose-gold', image: 'https://images.unsplash.com/photo-1609592424075-13a69a473456?q=80&w=800&auto=format&fit=crop', stock: 15 },
//             { name: { en: 'Chalk White', fa: 'سفید گچی' }, value: '#FAFAFA', slug: 'chalk-white', image: 'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=800&auto=format&fit=crop', stock: 10 }
//         ]
//     },

//     // --- 4. Mobile -> cases-protectors (2 Products) ---
//     {
//         id: 'p-m-4-1',
//         slug: 'armor-shield-magsafe-case',
//         title: { en: 'ArmorShield Rugged MagSafe Case', fa: 'قاب مقاوم مگ‌سیف آرمور شیلد' },
//         description: { en: 'Military-grade drop protection combined with crystal clear anti-yellowing back.', fa: 'مقاومت در برابر سقوط استاندارد نظامی به همراه پنل شفاف ضد زردی.' },
//         price: 29.99,
//         stock: 70,
//         inStock: true,
//         brand: { en: 'ArmorShield', fa: 'آرمور شیلد' },
//         tags: ['case', 'magsafe', 'protection'],
//         images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'mobile',
//         subcategorySlug: 'cases-protectors',
//         collectionSlugs: ['bestsellers'],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Protection', fa: 'مقاومت' }, value: { en: 'Military Drop Tested (3m)', fa: 'تست سقوط نظامی (۳ متر)' } },
//             { key: { en: 'Material', fa: 'جنس' }, value: { en: 'Polycarbonate & TPU', fa: 'پلی‌کربنات و TPU' } }
//         ],
//         rating: 4.5,
//         reviewsCount: 64,
//         colors: [
//             { name: { en: 'Crystal Clear', fa: 'شفاف کریستالی' }, value: '#FFFFFF', slug: 'crystal-clear', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=800&auto=format&fit=crop', stock: 30 },
//             { name: { en: 'Matte Smoke Black', fa: 'مشکی دودی مات' }, value: '#27272A', slug: 'matte-smoke-black', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', stock: 25 },
//             { name: { en: 'Tactical Green', fa: 'سبز تاکتیکال' }, value: '#166534', slug: 'tactical-green', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=800&auto=format&fit=crop', stock: 15 }
//         ]
//     },
//     {
//         id: 'p-m-4-2',
//         slug: 'tempered-glass-screen-protector-pack',
//         title: { en: 'UltraGlass 9H Tempered Screen Protector', fa: 'محافظ صفحه شیشه‌ای حرارت‌دیده اولتراگلس 9H' },
//         description: { en: 'Edge-to-edge unbreakable tempered glass with oleophobic fingerprint coating.', fa: 'شیشه حرارت‌دیده نشکن لبه‌تا‌لبه با پوشش ضد اثر انگشت و چربی.' },
//         price: 19.99,
//         stock: 120,
//         inStock: true,
//         brand: { en: 'UltraGlass', fa: 'اولتراگلس' },
//         tags: ['screen-protector', 'glass', 'accessories'],
//         images: ['https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'mobile',
//         subcategorySlug: 'cases-protectors',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Hardness', fa: 'سختی' }, value: { en: '9H Diamond Grade', fa: '9H درجه الماس' } },
//             { key: { en: 'Clarity', fa: 'شفافیت' }, value: { en: '99.9% HD Clear', fa: '۹۹.۹ درصد شفافیت کامل اچ‌دی' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 130,
//         colors: [
//             { name: { en: 'Transparent Ultra Clear', fa: 'شفاف فوق‌العاده' }, value: '#E5E7EB', slug: 'transparent-ultra-clear', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop', stock: 70 },
//             { name: { en: 'Privacy Anti-Spy Black', fa: 'مشکی حریم شخصی ضد جاسوسی' }, value: '#18181B', slug: 'privacy-anti-spy-black', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', stock: 50 }
//         ]
//     },

//     // --- 5. Mobile -> cables-adapters (2 Products) ---
//     {
//         id: 'p-m-5-1',
//         slug: 'braided-type-c-to-c-cable-2m',
//         title: { en: 'Duracord Braided Type-C to Type-C Cable 2m', fa: 'کابل دوسر تایپ‌سی کنفی دُرکورد ۲ متری' },
//         description: { en: 'Supports 240W fast power delivery and 480Mbps data transfer with reinforced joints.', fa: 'پشتیبانی از انتقال برق سریع ۲۴۰ وات و انتقال داده ۴۸۰ مگابیت با اتصالات تقویت‌شده.' },
//         price: 18.99,
//         stock: 90,
//         inStock: true,
//         brand: { en: 'Duracord', fa: 'دوراکورد' },
//         tags: ['cable', 'type-c', 'fast-charge'],
//         images: ['https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'mobile',
//         subcategorySlug: 'cables-adapters',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Length', fa: 'طول کابل' }, value: { en: '2 Meters', fa: '۲ متر' } },
//             { key: { en: 'Max Current', fa: 'حداکثر جریان' }, value: { en: '5A (240W PD)', fa: '۵ آمپر (۲۴۰ وات PD)' } }
//         ],
//         rating: 4.7,
//         reviewsCount: 95,
//         colors: [
//             { name: { en: 'Space Gray Braided', fa: 'خاکستری فضایی کنفی' }, value: '#374151', slug: 'space-gray-braided', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop', stock: 40 },
//             { name: { en: 'Red Crimson', fa: 'قرمز تمشک' }, value: '#DC2626', slug: 'red-crimson', image: 'https://images.unsplash.com/photo-1609592424075-13a69a473456?q=80&w=800&auto=format&fit=crop', stock: 30 },
//             { name: { en: 'Starlight Gold', fa: 'طلایی استارلایت' }, value: '#D97706', slug: 'starlight-gold', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop', stock: 20 }
//         ]
//     },
//     {
//         id: 'p-m-5-2',
//         slug: 'multi-hub-otg-adapter-type-c',
//         title: { en: 'LinkMaster Type-C to USB OTG Multi-Adapter', fa: 'مبدل چندکاره OTG تایپ‌سی لینک‌مستر' },
//         description: { en: 'Compact OTG adapter allowing flash drive and peripheral connection to phones.', fa: 'مبدل کوچک OTG جهت اتصال فلش مموری و لوازم جانبی به گوشی.' },
//         price: 14.99,
//         stock: 75,
//         inStock: true,
//         brand: { en: 'LinkMaster', fa: 'لینک‌مستر' },
//         tags: ['adapter', 'otg', 'type-c'],
//         images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'mobile',
//         subcategorySlug: 'cables-adapters',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Interface', fa: 'رابط' }, value: { en: 'Type-C to USB 3.0', fa: 'تایپ‌سی به USB 3.0' } },
//             { key: { en: 'Speed', fa: 'سرعت انتقال' }, value: { en: '5 Gbps', fa: '۵ گیگابیت بر ثانیه' } }
//         ],
//         rating: 4.6,
//         reviewsCount: 52,
//         colors: [
//             { name: { en: 'Titanium Gray', fa: 'خاکستری تیتانیومی' }, value: '#4B5563', slug: 'titanium-gray', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop', stock: 45 },
//             { name: { en: 'Rose Gold', fa: 'رزگلد' }, value: '#FB7185', slug: 'rose-gold', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop', stock: 30 }
//         ]
//     },

//     // --- 6. Watches -> smartwatches (2 Products) ---
//     {
//         id: 'p-w-1-1',
//         slug: 'chronos-active-smartwatch',
//         title: { en: 'Chronos Active Pro Smartwatch', fa: 'ساعت هوشمند کرونوس اکتیو پرو' },
//         description: { en: 'AMOLED screen, built-in GPS, Bluetooth calling, and 14-day battery life.', fa: 'صفحه نمایش امولد، جی‌پی‌اس داخلی، قابلیت مکالمه بلوتوثی و شارژدهی ۱۴ روزه باتری.' },
//         price: 249.99,
//         discountPrice: 219.99,
//         stock: 35,
//         inStock: true,
//         brand: { en: 'Chronos', fa: 'کرونوس' },
//         tags: ['smartwatch', 'watch', 'fitness', 'gps'],
//         images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'watches',
//         subcategorySlug: 'smartwatches',
//         collectionSlugs: ['new-arrivals', 'bestsellers'],
//         isFeatured: true,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Display', fa: 'صفحه نمایش' }, value: { en: '1.43 inch AMOLED Always-On', fa: '۱.۴۳ اینچ امولد همیشه روشن' } },
//             { key: { en: 'Water Resistance', fa: 'مقاومت در آب' }, value: { en: '5ATM Waterproof', fa: 'مقاوم در برابر آب تا ۵ اتمسفر' } }
//         ],
//         rating: 4.9,
//         reviewsCount: 140,
//         colors: [
//             { name: { en: 'Obsidian Black', fa: 'مشکی ابسیدین' }, value: '#0F172A', slug: 'obsidian-black', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop', stock: 15 },
//             { name: { en: 'Forest Green', fa: 'سبز جنگلی' }, value: '#065F46', slug: 'forest-green', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop', stock: 12 },
//             { name: { en: 'Cyber Orange', fa: 'نارنجی سایبر' }, value: '#EA580C', slug: 'cyber-orange', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop', stock: 8 }
//         ]
//     },
//     {
//         id: 'p-w-1-2',
//         slug: 'apex-watch-gt-sport',
//         title: { en: 'Apex Watch GT Sport Edition', fa: 'ساعت هوشمند اپکس مدل GT اسپورت' },
//         description: { en: 'Rugged titanium build designed for extreme outdoor exploration and sports.', fa: 'بدنه مقاوم تیتانیومی طراحی شده برای اکتشافات سخت فضای باز و ورزش‌های حرفه‌ای.' },
//         price: 299.99,
//         stock: 20,
//         inStock: true,
//         brand: { en: 'Apex', fa: 'آپکس' },
//         tags: ['smartwatch', 'sport', 'titanium'],
//         images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'watches',
//         subcategorySlug: 'smartwatches',
//         collectionSlugs: ['bestsellers'],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Body', fa: 'جنس بدنه' }, value: { en: 'Titanium Alloy', fa: 'آلیاژ تیتانیوم' } },
//             { key: { en: 'Sensors', fa: 'سنسورها' }, value: { en: 'Heart Rate, SpO2, Barometer', fa: 'ضربان قلب، اکسیژن خون، فشارسنج' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 96,
//         colors: [
//             { name: { en: 'Titanium Gray', fa: 'خاکستری تیتانیوم' }, value: '#6B7280', slug: 'titanium-gray', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop', stock: 12 },
//             { name: { en: 'Matte Stealth Black', fa: 'مشکی مات استیلث' }, value: '#111827', slug: 'matte-stealth-black', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop', stock: 8 }
//         ]
//     },

//     // --- 7. Watches -> fitness-bands (2 Products) ---
//     {
//         id: 'p-w-2-1',
//         slug: 'pulse-fit-smart-band',
//         title: { en: 'PulseFit Smart Fitness Band 6', fa: 'مچ‌بند سلامتی هوشمند پالیس‌فیت ۶' },
//         description: { en: 'Track workouts, sleep quality, and heart rate with an ultra-lightweight band.', fa: 'ردیابی تمرینات ورزشی، کیفیت خواب و ضربان قلب با مچ‌بندی فوق‌العاده سبک.' },
//         price: 49.99,
//         stock: 50,
//         inStock: true,
//         brand: { en: 'PulseFit', fa: 'پالس‌فیت' },
//         tags: ['fitness-band', 'health', 'tracker'],
//         images: ['https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'watches',
//         subcategorySlug: 'fitness-bands',
//         collectionSlugs: ['special-offers'],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Battery Life', fa: 'عمر باتری' }, value: { en: 'Up to 21 Days', fa: 'تا ۲۱ روز' } },
//             { key: { en: 'Modes', fa: 'حالت‌های ورزشی' }, value: { en: '30+ Workout Modes', fa: 'بیش از ۳۰ حالت ورزشی' } }
//         ],
//         rating: 4.6,
//         reviewsCount: 112,
//         colors: [
//             { name: { en: 'Midnight Black', fa: 'مشکی نیمه‌شب' }, value: '#1F2937', slug: 'midnight-black', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0?q=80&w=800&auto=format&fit=crop', stock: 25 },
//             { name: { en: 'Neon Yellow', fa: 'زرد نئونی' }, value: '#FACC15', slug: 'neon-yellow', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop', stock: 15 },
//             { name: { en: 'Sakura Pink', fa: 'صورتی ساکورا' }, value: '#F472B6', slug: 'sakura-pink', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0?q=80&w=800&auto=format&fit=crop', stock: 10 }
//         ]
//     },
//     {
//         id: 'p-w-2-2',
//         slug: 'fit-track-band-pro',
//         title: { en: 'FitTrack Pro Health Tracker', fa: 'مچ‌بند سلامتی پرو فیت‌ترک' },
//         description: { en: 'Advanced continuous health monitoring with ECG and stress analysis.', fa: 'پایش پیوسته سلامت پیشرفته با نوار قلب و تحلیل میزان استرس.' },
//         price: 69.99,
//         discountPrice: 59.99,
//         stock: 30,
//         inStock: true,
//         brand: { en: 'FitTrack', fa: 'فیت‌ترک' },
//         tags: ['fitness-band', 'ecg', 'health'],
//         images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'watches',
//         subcategorySlug: 'fitness-bands',
//         collectionSlugs: ['new-arrivals'],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Health Features', fa: 'قابلیت‌های سلامت' }, value: { en: 'ECG & Stress Monitor', fa: 'نوار قلب و سنجش استرس' } },
//             { key: { en: 'Display', fa: 'صفحه نمایش' }, value: { en: 'AMOLED Touch Screen', fa: 'صفحه نمایش لمسی AMOLED' } }
//         ],
//         rating: 4.7,
//         reviewsCount: 68,
//         colors: [
//             { name: { en: 'Graphite Black', fa: 'مشکی گرافیتی' }, value: '#111827', slug: 'graphite-black', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop', stock: 18 },
//             { name: { en: 'Navy Blue', fa: 'آبی سرمه‌ای' }, value: '#1E40AF', slug: 'navy-blue', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0?q=80&w=800&auto=format&fit=crop', stock: 12 }
//         ]
//     },

//     // --- 8. Watches -> replacement-straps (2 Products) ---
//     {
//         id: 'p-w-3-1',
//         slug: 'milanese-loop-stainless-strap',
//         title: { en: 'Milanese Loop Stainless Steel Strap', fa: 'بند استیل حصیری مدل میلانیز لوپ' },
//         description: { en: 'Woven stainless steel mesh with an adjustable magnetic clasp for supreme comfort.', fa: 'توری استیل بافته‌شده ضد زنگ با قفل مغناطیسی قابل تنظیم برای راحتی کامل.' },
//         price: 24.99,
//         stock: 65,
//         inStock: true,
//         brand: { en: 'LuxeStrap', fa: 'لوکس‌استرپ' },
//         tags: ['strap', 'watch-band', 'stainless-steel'],
//         images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'watches',
//         subcategorySlug: 'replacement-straps',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Material', fa: 'جنس' }, value: { en: '316L Stainless Steel', fa: 'استیل ضد زنگ 316L' } },
//             { key: { en: 'Clasp Type', fa: 'نوع قفل' }, value: { en: 'Magnetic Loop', fa: 'حلقه مغناطیسی' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 54,
//         colors: [
//             { name: { en: 'Silver Steel', fa: 'استیل نقره‌ای' }, value: '#D1D5DB', slug: 'silver-steel', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop', stock: 25 },
//             { name: { en: 'Space Black Steel', fa: 'استیل مشکی فضایی' }, value: '#1F2937', slug: 'space-black-steel', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop', stock: 22 },
//             { name: { en: 'Champagne Gold', fa: 'طلایی شامپاینی' }, value: '#FCD34D', slug: 'champagne-gold', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop', stock: 18 }
//         ]
//     },
//     {
//         id: 'p-w-3-2',
//         slug: 'sport-silicone-replacement-band',
//         title: { en: 'FlexSport Silicone Watch Band', fa: 'بند سیلیکونی ورزشی فلکس‌اسپورت' },
//         description: { en: 'Sweat-resistant, soft fluoroelastomer strap designed for heavy workouts.', fa: 'مقاوم در برابر عرق، نرم و ساخته شده از فلوئوروالاستومر مناسب تمرینات سنگین.' },
//         price: 16.99,
//         stock: 90,
//         inStock: true,
//         brand: { en: 'FlexSport', fa: 'فلکس‌اسپورت' },
//         tags: ['strap', 'silicone', 'sport'],
//         images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'watches',
//         subcategorySlug: 'replacement-straps',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Material', fa: 'جنس' }, value: { en: 'Soft Fluoroelastomer', fa: 'فلوئوروالاستومر نرم' } },
//             { key: { en: 'Compatibility', fa: 'سازگاری' }, value: { en: 'Universal 22mm', fa: 'استاندارد ۲۲ میلی‌متری' } }
//         ],
//         rating: 4.6,
//         reviewsCount: 42,
//         colors: [
//             { name: { en: 'Pure Black', fa: 'مشکی خالص' }, value: '#000000', slug: 'pure-black', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop', stock: 40 },
//             { name: { en: 'Olive Green', fa: 'سبز زیتونی' }, value: '#3F6212', slug: 'olive-green', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop', stock: 30 },
//             { name: { en: 'Electric Blue', fa: 'آبی الکتریک' }, value: '#2563EB', slug: 'electric-blue', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop', stock: 20 }
//         ]
//     },

//     // --- 9. Watches -> charging-docks-w (2 Products) ---
//     {
//         id: 'p-w-4-1',
//         slug: '3-in-1-wireless-charging-stand',
//         title: { en: 'OmniCharge 3-in-1 Watch & Phone Stand', fa: 'پایه شارژر بی‌سیم ۳ کاره آمنی‌شارژ' },
//         description: { en: 'Simultaneously charge your smartwatch, phone, and wireless earbuds in style.', fa: 'شارژ همزمان ساعت هوشمند، گوشی و ایربادز با طراحی شیک روی میز.' },
//         price: 49.99,
//         discountPrice: 42.99,
//         stock: 40,
//         inStock: true,
//         brand: { en: 'OmniCharge', fa: 'آمنی‌شارژ' },
//         tags: ['charging-dock', 'wireless', 'stand'],
//         images: ['https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'watches',
//         subcategorySlug: 'charging-docks-w',
//         collectionSlugs: ['bestsellers'],
//         isFeatured: true,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Input', fa: 'ورودی' }, value: { en: 'Type-C Quick Charge', fa: 'تایپ‌سی شارژ سریع' } },
//             { key: { en: 'Total Output', fa: 'مجموع خروجی' }, value: { en: '25W Max', fa: 'حداکثر ۲۵ وات' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 115,
//         colors: [
//             { name: { en: 'Matte Black', fa: 'مشکی مات' }, value: '#18181B', slug: 'matte-black', image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?q=80&w=800&auto=format&fit=crop', stock: 25 },
//             { name: { en: 'Pure White', fa: 'سفید خالص' }, value: '#FAFAFA', slug: 'pure-white', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop', stock: 15 }
//         ]
//     },
//     {
//         id: 'p-w-4-2',
//         slug: 'magnetic-portable-watch-charger',
//         title: { en: 'PocketPuck Magnetic Watch Charger', fa: 'شارژر مگنتی قابل حمل ساعت هوشمند' },
//         description: { en: 'USB-C magnetic puck charger for smartwatches, ideal for travel.', fa: 'شارژر مگنتی دیسکی تایپ‌سی برای ساعت‌های هوشمند، ایده‌آل برای سفر.' },
//         price: 21.99,
//         stock: 55,
//         inStock: true,
//         brand: { en: 'PocketPuck', fa: 'پاکت‌پاک' },
//         tags: ['charger', 'portable', 'watch'],
//         images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'watches',
//         subcategorySlug: 'charging-docks-w',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Connector', fa: 'کانکتور' }, value: { en: 'USB Type-C', fa: 'یو اس بی تایپ سی' } },
//             { key: { en: 'Design', fa: 'طراحی' }, value: { en: 'Key-chain size portable', fa: 'قابل حمل در ابعاد جاسوئیچی' } }
//         ],
//         rating: 4.5,
//         reviewsCount: 38,
//         colors: [
//             { name: { en: 'Space Gray', fa: 'خاکستری فضایی' }, value: '#4B5563', slug: 'space-gray', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop', stock: 30 },
//             { name: { en: 'Alpine White', fa: 'سفید آلپاین' }, value: '#F3F4F6', slug: 'alpine-white', image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?q=80&w=800&auto=format&fit=crop', stock: 25 }
//         ]
//     },

//     // --- 10. Watches -> watch-protectors (2 Products) ---
//     {
//         id: 'p-w-5-1',
//         slug: 'tempered-glass-watch-case-cover',
//         title: { en: 'ArmorCase with Tempered Glass for Watch', fa: 'کاور محافظ بدنه و شیشه ساعت اپکس' },
//         description: { en: 'Full cover bumper case with built-in 9H tempered glass screen protection.', fa: 'کاور بامپر محافظ کامل بدنه به همراه شیشه حرارت‌دیده 9H روی صفحه نمایش.' },
//         price: 15.99,
//         stock: 80,
//         inStock: true,
//         brand: { en: 'ArmorShield', fa: 'آرمور شیلد' },
//         tags: ['protector', 'watch-case', 'glass'],
//         images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'watches',
//         subcategorySlug: 'watch-protectors',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Material', fa: 'جنس' }, value: { en: 'PC Bumper + 9H Glass', fa: 'بامپر پلی‌کربنات + شیشه 9H' } },
//             { key: { en: 'Coverage', fa: 'پوشش' }, value: { en: '360 Degree Full Protection', fa: 'محافظت کامل ۳۶۰ درجه' } }
//         ],
//         rating: 4.6,
//         reviewsCount: 45,
//         colors: [
//             { name: { en: 'Clear Transparent', fa: 'شفاف' }, value: '#FFFFFF', slug: 'clear-transparent', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop', stock: 45 },
//             { name: { en: 'Matte Black', fa: 'مشکی مات' }, value: '#18181B', slug: 'matte-black', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop', stock: 35 }
//         ]
//     },
//     {
//         id: 'p-w-5-2',
//         slug: 'hydrogel-watch-screen-film-pack',
//         title: { en: 'Hydrogel Flexible Screen Film for Watch', fa: 'محافظ صفحه هیدروژل انعطاف‌پذیر ساعت' },
//         description: { en: 'Self-healing flexible hydrogel film covering curved edges seamlessly.', fa: 'لایه‌های انعطاف‌پذیر هیدروژل با خاصیت خودترمیم‌شوندگی و پوشش لبه‌های خمیده.' },
//         price: 12.99,
//         stock: 100,
//         inStock: true,
//         brand: { en: 'HydroFlex', fa: 'هیدروفِلکس' },
//         tags: ['screen-protector', 'hydrogel', 'watch'],
//         images: ['https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'watches',
//         subcategorySlug: 'watch-protectors',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Type', fa: 'نوع' }, value: { en: 'Self-healing Hydrogel', fa: 'هیدروژل خودترمیم‌شونده' } },
//             { key: { en: 'Pack', fa: 'تعداد در بسته' }, value: { en: '3 Pack', fa: '۳ عددی' } }
//         ],
//         rating: 4.4,
//         reviewsCount: 30,
//         colors: [
//             { name: { en: 'Ultra HD Clear', fa: 'شفاف اچ‌دی' }, value: '#F9FAFB', slug: 'ultra-hd-clear', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0?q=80&w=800&auto=format&fit=crop', stock: 60 },
//             { name: { en: 'Anti-Glare Matte', fa: 'مات ضد انعکاس' }, value: '#9CA3AF', slug: 'anti-glare-matte', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop', stock: 40 }
//         ]
//     },

//     // --- 11. Earbuds -> wireless-earbuds (2 Products) ---
//     {
//         id: 'p-e-1-1',
//         slug: 'sound-pulse-active-earbuds',
//         title: { en: 'SoundPulse Active Noise Cancelling Earbuds', fa: 'ایربادز حذف نویز فعال ساوندپالس' },
//         description: { en: 'Immersive spatial audio, hybrid ANC up to 45dB, and ultra-clear crystal microphones.', fa: 'صوت فراگیر فضایی، حذف نویز هیبرید تا ۴۵ دسی‌بل، و میکروفون‌های فوق‌العاده شفاف.' },
//         price: 129.99,
//         discountPrice: 109.99,
//         stock: 45,
//         inStock: true,
//         brand: { en: 'SoundPulse', fa: 'ساوندپالس' },
//         tags: ['earbuds', 'audio', 'anc', 'wireless'],
//         images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'earbuds',
//         subcategorySlug: 'wireless-earbuds',
//         collectionSlugs: ['bestsellers'],
//         isFeatured: true,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Noise Cancellation', fa: 'حذف نویز' }, value: { en: 'Hybrid ANC 45dB', fa: 'هیبرید ANC ۴۵ دسی‌بل' } },
//             { key: { en: 'Playtime', fa: 'مدت زمان پخش' }, value: { en: '10h + 40h with Case', fa: '۱۰ ساعت + ۴۰ ساعت با کیس شارژ' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 245,
//         colors: [
//             { name: { en: 'Matte Black', fa: 'مشکی مات' }, value: '#0B0B0B', slug: 'matte-black', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop', stock: 20 },
//             { name: { en: 'Pearl White', fa: 'سفید مرواریدی' }, value: '#F8FAFC', slug: 'pearl-white', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=800&auto=format&fit=crop', stock: 15 },
//             { name: { en: 'Navy Blue', fa: 'آبی سرمه‌ای' }, value: '#1E3A8A', slug: 'navy-blue', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop', stock: 10 }
//         ]
//     },
//     {
//         id: 'p-e-1-2',
//         slug: 'sonic-pods-true-wireless',
//         title: { en: 'SonicPods True Wireless Hi-Fi Earbuds', fa: 'ایربادز بی‌سیم های فای ساب‌پادز' },
//         description: { en: 'High-res audio decoding, low latency gaming mode, and ergonomic comfort.', fa: 'رمزگشایی صوتی با وضوح بالا، حالت گیمینگ با تاخیر فوق‌العاده پایین و طراحی ارگونومیک.' },
//         price: 89.99,
//         stock: 50,
//         inStock: true,
//         brand: { en: 'SonicPods', fa: 'سونیک‌پادز' },
//         tags: ['earbuds', 'hifi', 'wireless'],
//         images: ['https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'earbuds',
//         subcategorySlug: 'wireless-earbuds',
//         collectionSlugs: ['new-arrivals'],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Driver', fa: 'درایور صوتی' }, value: { en: '11mm Titanium Dynamic', fa: '۱۱ میلی‌متری داینامیک تیتانیوم' } },
//             { key: { en: 'Latency', fa: 'میزان تاخیر' }, value: { en: '38ms Ultra Low Latency', fa: '۳۸ میلی‌ثانیه تاخیر فوق‌العاده پایین' } }
//         ],
//         rating: 4.7,
//         reviewsCount: 130,
//         colors: [
//             { name: { en: 'Carbon Black', fa: 'مشکی کربن' }, value: '#18181B', slug: 'carbon-black', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=800&auto=format&fit=crop', stock: 30 },
//             { name: { en: 'Cyber Yellow', fa: 'زرد سایبر' }, value: '#EAB308', slug: 'cyber-yellow', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop', stock: 20 }
//         ]
//     },

//     // --- 12. Earbuds -> over-ear-headphones (2 Products) ---
//     {
//         id: 'p-e-2-1',
//         slug: 'aura-studio-wireless-headphones',
//         title: { en: 'Aura Studio Wireless Over-Ear Headphones', fa: 'هدفون دوروشی بی‌سیم آورا استودیو' },
//         description: { en: 'Studio-quality acoustic performance with plush memory foam ear cushions.', fa: 'عملکرد آکوستیک در حد استودیو با بالشتک‌های گوشی مموری فوم بسیار نرم.' },
//         price: 199.99,
//         discountPrice: 179.99,
//         stock: 25,
//         inStock: true,
//         brand: { en: 'Aura', fa: 'آورا' },
//         tags: ['headphones', 'over-ear', 'studio', 'wireless'],
//         images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'earbuds',
//         subcategorySlug: 'over-ear-headphones',
//         collectionSlugs: ['bestsellers', 'special-offers'],
//         isFeatured: true,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Battery', fa: 'شارژدهی باتری' }, value: { en: '60 Hours Playtime', fa: '۶۰ ساعت پخش مداوم' } },
//             { key: { en: 'Active Noise Cancelling', fa: 'فناوری حذف نویز' }, value: { en: 'Adaptive ANC', fa: 'حذف نویز تطبیقی' } }
//         ],
//         rating: 4.9,
//         reviewsCount: 180,
//         colors: [
//             { name: { en: 'Space Gray', fa: 'خاکستری فضایی' }, value: '#374151', slug: 'space-gray', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop', stock: 15 },
//             { name: { en: 'Warm Cream', fa: 'کرم گرم' }, value: '#FEF3C7', slug: 'warm-cream', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop', stock: 10 }
//         ]
//     },
//     {
//         id: 'p-e-2-2',
//         slug: 'soundcore-space-one-headphones',
//         title: { en: 'Soundcore Space One ANC Headphones', fa: 'هدفون حذف نویز ساندکور اسپیس وان' },
//         description: { en: 'Upgraded noise canceling reduces sounds by up to 98%, crisp Hi-Res audio.', fa: 'حذف نویز ارتقایافته تا ۹۸ درصد صداهای محیط، صدای شفاف Hi-Res.' },
//         price: 149.99,
//         stock: 35,
//         inStock: true,
//         brand: { en: 'Soundcore', fa: 'ساندکور' },
//         tags: ['headphones', 'anc', 'soundcore'],
//         images: ['https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'earbuds',
//         subcategorySlug: 'over-ear-headphones',
//         collectionSlugs: ['new-arrivals'],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Hi-Res', fa: 'های-رز' }, value: { en: 'Wired & Wireless LDAC', fa: 'با سیم و بی‌سیم با کدک LDAC' } },
//             { key: { en: 'Comfort', fa: 'ارگونومی' }, value: { en: 'Ergonomic 8° Rotating Ear Cups', fa: 'کاپ‌های چرخان ۸ درجه ارگونومیک' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 210,
//         colors: [
//             { name: { en: 'Jet Black', fa: 'مشکی جت' }, value: '#09090B', slug: 'jet-black', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop', stock: 15 },
//             { name: { en: 'Latte Cream', fa: 'کرم لاته' }, value: '#D7CCC8', slug: 'latte-cream', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop', stock: 12 },
//             { name: { en: 'Sky Blue', fa: 'آبی آسمانی' }, value: '#38BDF8', slug: 'sky-blue', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop', stock: 8 }
//         ]
//     },

//     // --- 13. Earbuds -> gaming-headsets (2 Products) ---
//     {
//         id: 'p-e-3-1',
//         slug: 'phantom-rgb-gaming-headset',
//         title: { en: 'Phantom 7.1 Surround RGB Gaming Headset', fa: 'هدست گیمینگ RGB دوربانک فانتوم ۷.۱' },
//         description: { en: '7.1 virtual surround sound, retractable noise-canceling mic, and customizable RGB lighting.', fa: 'صدای فراگیر مجازی ۷.۱، میکروفون کشویی حذف نویز و نورپردازی RGB قابل شخصی‌سازی.' },
//         price: 89.99,
//         stock: 40,
//         inStock: true,
//         brand: { en: 'Phantom', fa: 'فانتوم' },
//         tags: ['gaming-headset', 'rgb', '7.1-surround'],
//         images: ['https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'earbuds',
//         subcategorySlug: 'gaming-headsets',
//         collectionSlugs: ['bestsellers'],
//         isFeatured: true,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Sound Stage', fa: 'کانال صوتی' }, value: { en: '7.1 Virtual Surround', fa: 'فراگیر مجازی ۷.۱' } },
//             { key: { en: 'Connection', fa: 'نوع اتصال' }, value: { en: 'USB & 3.5mm Jack', fa: 'یو‌اس‌بی و جک ۳.۵ میلی‌متری' } }
//         ],
//         rating: 4.7,
//         reviewsCount: 165,
//         colors: [
//             { name: { en: 'Cyber Black & RGB', fa: 'مشکی سایبر و RGB' }, value: '#18181B', slug: 'cyber-black-rgb', image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop', stock: 25 },
//             { name: { en: 'Snow White & RGB', fa: 'سفید برفی و RGB' }, value: '#F4F4F5', slug: 'snow-white-rgb', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop', stock: 15 }
//         ]
//     },
//     {
//         id: 'p-e-3-2',
//         slug: 'strike-pro-wireless-gaming-headset',
//         title: { en: 'StrikePro Dual-Wireless Gaming Headset', fa: 'هدست گیمینگ دوگانه بی‌سیم استرایک پرو' },
//         description: { en: 'Lossless 2.4GHz wireless connection plus Bluetooth for gaming across all platforms.', fa: 'اتصال بی‌سیم بدون افت کیفیت ۲.۴ گیگاهرتز به همراه بلوتوث برای بازی در تمام پلتفرم‌ها.' },
//         price: 119.99,
//         discountPrice: 99.99,
//         stock: 30,
//         inStock: true,
//         brand: { en: 'StrikePro', fa: 'استرایک‌پرو' },
//         tags: ['gaming-headset', 'wireless', 'pc-gaming'],
//         images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'earbuds',
//         subcategorySlug: 'gaming-headsets',
//         collectionSlugs: ['new-arrivals'],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Wireless Mode', fa: 'حالت بی‌سیم' }, value: { en: '2.4GHz Ultra-Low Latency', fa: '۲.۴ گیگاهرتز با تاخیر فوق‌العاده کم' } },
//             { key: { en: 'Battery', fa: 'شارژدهی' }, value: { en: 'Up to 50 Hours', fa: 'تا ۵۰ ساعت' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 84,
//         colors: [
//             { name: { en: 'Matte Gunmetal', fa: 'خاکستری تفنگی مات' }, value: '#27272A', slug: 'matte-gunmetal', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop', stock: 18 },
//             { name: { en: 'Phantom White', fa: 'سفید فانتوم' }, value: '#FAFAFA', slug: 'phantom-white', image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop', stock: 12 }
//         ]
//     },

//     // --- 14. Earbuds -> audio-adapters (2 Products) ---
//     {
//         id: 'p-e-4-1',
//         slug: 'type-c-to-3-5mm-dac-audio-adapter',
//         title: { en: 'Hi-Res Type-C to 3.5mm DAC Audio Adapter', fa: 'مبدل صوتی تایپ‌سی به جک ۳.۵ میلی‌متری مجهز به DAC' },
//         description: { en: 'High fidelity built-in DAC chip delivering lossless pristine sound to wired headphones.', fa: 'چیپست داخلی DAC با وفاداری بالا جهت ارائه صدای شفاف و بدون افت کیفیت به هدفون باسیم.' },
//         price: 22.99,
//         stock: 75,
//         inStock: true,
//         brand: { en: 'AudioLink', fa: 'آدیولینک' },
//         tags: ['audio-adapter', 'dac', 'type-c'],
//         images: ['https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'earbuds',
//         subcategorySlug: 'audio-adapters',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'DAC Chip', fa: 'چیپست DAC' }, value: { en: '32-bit / 384kHz High-Res', fa: '۳۲ بیت / ۳۸۴ کیلوهرتز های‌رز' } },
//             { key: { en: 'Length', fa: 'طول' }, value: { en: '12 cm braided', fa: '۱۲ سانتی‌متر کنفی' } }
//         ],
//         rating: 4.6,
//         reviewsCount: 50,
//         colors: [
//             { name: { en: 'Space Gray', fa: 'خاکستری فضایی' }, value: '#4B5563', slug: 'space-gray', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop', stock: 45 },
//             { name: { en: 'Silver Aluminum', fa: 'آلومینیوم نقره‌ای' }, value: '#D1D5DB', slug: 'silver-aluminum', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop', stock: 30 }
//         ]
//     },
//     {
//         id: 'p-e-4-2',
//         slug: 'bluetooth-audio-transmitter-receiver',
//         title: { en: 'AirLink Bluetooth 5.3 Audio Transmitter', fa: 'فرستنده و گیرنده صوتی بلوتوث ۵.۳ ایرلینک' },
//         description: { en: 'Transform any wired speaker or TV into a modern Bluetooth audio system.', fa: 'تبدیل هرگونه اسپیکر باسیم یا تلوزیون قدیمی به سیستم صوتی مدرن بلوتوثی.' },
//         price: 32.99,
//         stock: 40,
//         inStock: true,
//         brand: { en: 'AirLink', fa: 'ایرلینک' },
//         tags: ['bluetooth', 'transmitter', 'adapter'],
//         images: ['https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'earbuds',
//         subcategorySlug: 'audio-adapters',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Bluetooth', fa: 'نسخه بلوتوث' }, value: { en: 'Version 5.3 aptX Low Latency', fa: 'نسخه ۵.۳ با تاخیر پایین aptX' } },
//             { key: { en: 'Range', fa: 'محدوده عملکرد' }, value: { en: '10 Meters (33ft)', fa: '۱۰ متر' } }
//         ],
//         rating: 4.5,
//         reviewsCount: 36,
//         colors: [
//             { name: { en: 'Classic Black', fa: 'مشکی کلاسیک' }, value: '#18181B', slug: 'classic-black', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop', stock: 40 }
//         ]
//     },

//     // --- 15. Earbuds -> earbud-cases (2 Products) ---
//     {
//         id: 'p-e-5-1',
//         slug: 'armor-silicone-case-for-earbuds',
//         title: { en: 'ArmorShock Silicone Case for Wireless Earbuds', fa: 'کاور سیلیکونی ضد ضربه ایربادز آرمور‌شاک' },
//         description: { en: 'Shockproof soft liquid silicone protective case with secure carabiner clip.', fa: 'کاور محافظ سیلیکونی مایع ضد ضربه به همراه قلاب کارابین محکم.' },
//         price: 14.99,
//         stock: 90,
//         inStock: true,
//         brand: { en: 'ArmorShock', fa: 'آرمور شاک' },
//         tags: ['earbud-case', 'silicone', 'protection'],
//         images: ['https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'earbuds',
//         subcategorySlug: 'earbud-cases',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Material', fa: 'جنس' }, value: { en: 'Liquid Silicone Rubber', fa: 'رابر سیلیکونی مایع نرم' } },
//             { key: { en: 'Features', fa: 'ویژگی‌ها' }, value: { en: 'Supports Wireless Charging', fa: 'پشتیبانی از شارژ بی‌سیم' } }
//         ],
//         rating: 4.7,
//         reviewsCount: 65,
//         colors: [
//             { name: { en: 'Midnight Blue', fa: 'آبی نیمه‌شب' }, value: '#1E3A8A', slug: 'midnight-blue', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop', stock: 35 },
//             { name: { en: 'Mint Green', fa: 'سبز نعنایی' }, value: '#34D399', slug: 'mint-green', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop', stock: 30 },
//             { name: { en: 'Lavender Purple', fa: 'بنفش اسطوخودوس' }, value: '#A78BFA', slug: 'lavender-purple', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop', stock: 25 }
//         ]
//     },
//     {
//         id: 'p-e-5-2',
//         slug: 'carbon-fiber-texture-earbud-shell',
//         title: { en: 'CarbonArmor Hard Protective Earbud Shell', fa: 'قاب محافظ سخت طرح فیبر کربن ایربادز' },
//         description: { en: 'Rugged hard PC shell with carbon fiber texture design for premium styling.', fa: 'قاب پلی‌کربنات سخت مقاوم با طرح بافت فیبر کربن برای استایل پریمیوم.' },
//         price: 17.99,
//         stock: 60,
//         inStock: true,
//         brand: { en: 'CarbonArmor', fa: 'کربن آرمور' },
//         tags: ['earbud-case', 'carbon', 'hard-case'],
//         images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'earbuds',
//         subcategorySlug: 'earbud-cases',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Material', fa: 'جنس' }, value: { en: 'Hard PC + Carbon Pattern', fa: 'پلی‌کربنات سخت + طرح کربن' } },
//             { key: { en: 'Lock', fa: 'قفل ایمنی' }, value: { en: 'Secure Latch Lock', fa: 'قفل ضامن ایمن' } }
//         ],
//         rating: 4.6,
//         reviewsCount: 40,
//         colors: [
//             { name: { en: 'Carbon Black', fa: 'مشکی کربن' }, value: '#18181B', slug: 'carbon-black', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop', stock: 35 },
//             { name: { en: 'Titanium Silver', fa: 'نقره‌ای تیتانیوم' }, value: '#9CA3AF', slug: 'titanium-silver', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop', stock: 25 }
//         ]
//     },

//     // --- 16. PC -> mechanical-keyboards (2 Products) ---
//     {
//         id: 'p-p-1-1',
//         slug: 'luxe-pro-wireless-keyboard',
//         title: { en: 'Luxe Pro Mechanical Wireless Keyboard', fa: 'کیبورد مکانیکی بی‌سیم لوکس پرو' },
//         description: { en: 'Custom tactile switches, RGB per-key illumination, and tri-mode connectivity.', fa: 'سوئیچ‌های مکانیکی سفارشی، نورپردازی RGB مجزا برای هر کلید، و اتصال سه‌گانه.' },
//         price: 189.99,
//         discountPrice: 159.99,
//         stock: 45,
//         inStock: true,
//         brand: { en: 'LuxeTech', fa: 'لوکس‌تک' },
//         tags: ['keyboard', 'wireless', 'rgb', 'gaming'],
//         images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'pc',
//         subcategorySlug: 'mechanical-keyboards',
//         collectionSlugs: ['new-arrivals', 'bestsellers'],
//         isFeatured: true,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Connectivity', fa: 'نوع اتصال' }, value: { en: 'Bluetooth / 2.4GHz / Type-C', fa: 'بلوتوث / دانگل ۲.۴ گیگاهرتز / تایپ سی' } },
//             { key: { en: 'Battery Life', fa: 'عمر باتری' }, value: { en: 'Up to 200 Hours', fa: 'تا ۲۰۰ ساعت' } }
//         ],
//         rating: 4.9,
//         reviewsCount: 128,
//         colors: [
//             { name: { en: 'Phantom Black', fa: 'مشکی فانتوم' }, value: '#0F172A', slug: 'phantom-black', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop', stock: 20 },
//             { name: { en: 'Retro Gray & Beige', fa: 'خاکستری و بژ رترو' }, value: '#D4D4D8', slug: 'retro-gray-beige', image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop', stock: 15 },
//             { name: { en: 'Cyber Pink', fa: 'صورتی سایبر' }, value: '#EC4899', slug: 'cyber-pink', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop', stock: 10 }
//         ]
//     },
//     {
//         id: 'p-p-1-2',
//         slug: 'apex-cyber-rgb-mechanical-keyboard',
//         title: { en: 'Apex Cyber RGB Gaming Mechanical Keyboard', fa: 'کیبورد مکانیکی گیمینگ سایبر اپکس RGB' },
//         description: { en: 'Hot-swappable linear switches with aircraft-grade aluminum top plate.', fa: 'سوئیچ‌های خطی قابل تعویض (Hot-swappable) با رویه آلومینیومی درجه هوافضا.' },
//         price: 139.99,
//         stock: 30,
//         inStock: true,
//         brand: { en: 'Apex', fa: 'آپکس' },
//         tags: ['keyboard', 'mechanical', 'gaming', 'rgb'],
//         images: ['https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'pc',
//         subcategorySlug: 'mechanical-keyboards',
//         collectionSlugs: ['bestsellers'],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Switches', fa: 'نوع سوئیچ' }, value: { en: 'Mechanical Red Linear', fa: 'مکانیکی قرمز خطی' } },
//             { key: { en: 'Polling Rate', fa: 'نرخ نمونه‌برداری' }, value: { en: '1000Hz Ultra-fast', fa: '۱۰۰۰ هرتز فوق‌العاده سریع' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 110,
//         colors: [
//             { name: { en: 'Gunmetal Gray', fa: 'خاکستری تفنگی' }, value: '#3F3F46', slug: 'gunmetal-gray', image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop', stock: 18 },
//             { name: { en: 'Arctic White', fa: 'سفید آرکتیک' }, value: '#FAFAFA', slug: 'arctic-white', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop', stock: 12 }
//         ]
//     },

//     // --- 17. PC -> gaming-mice (2 Products) ---
//     {
//         id: 'p-p-2-1',
//         slug: 'viper-x-wireless-gaming-mouse',
//         title: { en: 'Viper X Ultra-Lightweight Wireless Gaming Mouse', fa: 'ماوس گیمینگ بی‌سیم فوق‌سبک وایپر X' },
//         description: { en: 'Weighing only 55g with 26,000 DPI optical sensor and optical switches.', fa: 'با وزن تنها ۵۵ گرم به همراه سنسور اپتیکال ۲۶۰۰۰ DPI و کلیدهای اپتیکال.' },
//         price: 119.99,
//         discountPrice: 99.99,
//         stock: 40,
//         inStock: true,
//         brand: { en: 'Viper', fa: 'وایپر' },
//         tags: ['mouse', 'gaming', 'wireless', 'lightweight'],
//         images: ['https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'pc',
//         subcategorySlug: 'gaming-mice',
//         collectionSlugs: ['bestsellers', 'special-offers'],
//         isFeatured: true,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Sensor', fa: 'سنسور' }, value: { en: '26K DPI Optical Sensor', fa: 'سنسور اپتیکال ۲۶ هزار DPI' } },
//             { key: { en: 'Weight', fa: 'وزن' }, value: { en: '55 Grams Ultra-light', fa: '۵۵ گرم فوق‌العاده سبک' } }
//         ],
//         rating: 4.9,
//         reviewsCount: 175,
//         colors: [
//             { name: { en: 'Matte Black', fa: 'مشکی مات' }, value: '#18181B', slug: 'matte-black', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop', stock: 22 },
//             { name: { en: 'Ghost White', fa: 'سفید گوست' }, value: '#F4F4F5', slug: 'ghost-white', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop', stock: 18 }
//         ]
//     },
//     {
//         id: 'p-p-2-2',
//         slug: 'logitech-g-pro-wireless-mouse',
//         title: { en: 'ProStream Ergonomic RGB Wireless Mouse', fa: 'ماوس بی‌سیم ارگونومیک RGB پروستریم' },
//         description: { en: 'Ergonomic shape designed for palm and claw grips with customizable side buttons.', fa: 'فرم ارگونومیک طراحی شده برای انواع روش‌های گرفتن ماوس با دکمه‌های جانبی قابل شخصی‌سازی.' },
//         price: 79.99,
//         stock: 50,
//         inStock: true,
//         brand: { en: 'ProStream', fa: 'پرو استریم' },
//         tags: ['mouse', 'ergonomic', 'wireless'],
//         images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'pc',
//         subcategorySlug: 'gaming-mice',
//         collectionSlugs: ['new-arrivals'],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'DPI', fa: 'دقت DPI' }, value: { en: 'Up to 16,000 DPI adjustable', fa: 'تا ۱۶,۰۰۰ DPI قابل تنظیم' } },
//             { key: { en: 'Battery', fa: 'شارژدهی' }, value: { en: '90 Hours', fa: '۹۰ ساعت' } }
//         ],
//         rating: 4.7,
//         reviewsCount: 90,
//         colors: [
//             { name: { en: 'Graphite', fa: 'گرافیتی' }, value: '#374151', slug: 'graphite', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop', stock: 25 },
//             { name: { en: 'Rose Quartz', fa: 'کوارتز صورتی' }, value: '#F472B6', slug: 'rose-quartz', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop', stock: 15 },
//             { name: { en: 'Midnight Blue', fa: 'آبی نیمه‌شب' }, value: '#1E3A8A', slug: 'midnight-blue', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop', stock: 10 }
//         ]
//     },

//     // --- 18. PC -> mouse-pads (2 Products) ---
//     {
//         id: 'p-p-3-1',
//         slug: 'titan-extended-rgb-mouse-pad',
//         title: { en: 'Titan Extended RGB Gaming Mouse Pad', fa: 'پد ماوس بزرگ گیمینگ RGB تایتان' },
//         description: { en: 'Extra-large desktop surface with waterproof micro-woven cloth and vibrant RGB borders.', fa: 'سطح دسکتاپ بسیار بزرگ با پارچه میکرو بافته‌شده ضد آب و حاشیه‌های نورانی RGB.' },
//         price: 34.99,
//         stock: 60,
//         inStock: true,
//         brand: { en: 'Titan', fa: 'تایتان' },
//         tags: ['mousepad', 'rgb', 'extended', 'gaming'],
//         images: ['https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'pc',
//         subcategorySlug: 'mouse-pads',
//         collectionSlugs: ['bestsellers'],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Dimensions', fa: 'ابعاد' }, value: { en: '900 x 400 x 4 mm', fa: '۹۰۰ در ۴۰۰ در ۴ میلی‌متر' } },
//             { key: { en: 'Surface', fa: 'سطح' }, value: { en: 'Speed-optimized Cloth', fa: 'پارچه بهینه‌شده برای سرعت' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 105,
//         colors: [
//             { name: { en: 'Stealth Black RGB', fa: 'مشکی استیلث RGB' }, value: '#09090B', slug: 'stealth-black-rgb', image: 'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=800&auto=format&fit=crop', stock: 35 },
//             { name: { en: 'Cyberpunk Edition', fa: 'نسخه سایبرپانک' }, value: '#7C3AED', slug: 'cyberpunk-edition', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop', stock: 25 }
//         ]
//     },
//     {
//         id: 'p-p-3-2',
//         slug: 'control-pro-gaming-mousepad',
//         title: { en: 'ControlPro Stitched Edge Desk Mat', fa: 'موس‌پد بزرگ میز کار کنترل پرو با لبه دوخته‌شده' },
//         description: { en: 'Anti-fray stitched edges with non-slip rubber base for precision cursor control.', fa: 'لبه‌های دوخته‌شده ضد ریش‌شدگی با زیره لاستیکی ضد لغزش برای کنترل دقیق نشانگر.' },
//         price: 24.99,
//         stock: 70,
//         inStock: true,
//         brand: { en: 'ControlPro', fa: 'کنترل‌پرو' },
//         tags: ['mousepad', 'desk-mat', 'control'],
//         images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'pc',
//         subcategorySlug: 'mouse-pads',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Dimensions', fa: 'ابعاد' }, value: { en: '800 x 300 mm', fa: '۸۰۰ در ۳۰۰ میلی‌متر' } },
//             { key: { en: 'Base', fa: 'پایه' }, value: { en: 'Natural Anti-slip Rubber', fa: 'لاستیک طبیعی ضد لغزش' } }
//         ],
//         rating: 4.6,
//         reviewsCount: 58,
//         colors: [
//             { name: { en: 'Dark Charcoal', fa: 'زغالی تیره' }, value: '#27272A', slug: 'dark-charcoal', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop', stock: 40 },
//             { name: { en: 'Minimalist Gray', fa: 'خاکستری مینیمال' }, value: '#71717A', slug: 'minimalist-gray', image: 'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=800&auto=format&fit=crop', stock: 30 }
//         ]
//     },

//     // --- 19. PC -> monitors (2 Products) ---
//     {
//         id: 'p-p-4-1',
//         slug: 'nexus-27-inch-gaming-monitor-240hz',
//         title: { en: 'Nexus 27" 240Hz QHD Gaming Monitor', fa: 'مانیتور گیمینگ ۲۷ اینچ نکوس ۲۴۰ هرتز QHD' },
//         description: { en: 'Fast IPS panel with 1ms response time, QHD resolution, and G-Sync compatibility.', fa: 'پنل سریع IPS با زمان پاسخگویی ۱ میلی‌ثانیه، رزولوشن QHD و سازگار با G-Sync.' },
//         price: 399.99,
//         discountPrice: 349.99,
//         stock: 15,
//         inStock: true,
//         brand: { en: 'Nexus', fa: 'نکسوس' },
//         tags: ['monitor', 'gaming', '240hz', 'qhd'],
//         images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'pc',
//         subcategorySlug: 'monitors',
//         collectionSlugs: ['new-arrivals', 'bestsellers'],
//         isFeatured: true,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Resolution', fa: 'رزولوشن' }, value: { en: '2560 x 1440 QHD', fa: '۲۵۶۰ در ۱۴۴۰ QHD' } },
//             { key: { en: 'Refresh Rate', fa: 'نرخ تازه‌سازی' }, value: { en: '240Hz', fa: '۲۴۰ هرتز' } }
//         ],
//         rating: 4.9,
//         reviewsCount: 82,
//         colors: [
//             { name: { en: 'Matte Black & Red Accent', fa: 'مشکی مات با خط قرمز' }, value: '#18181B', slug: 'matte-black-red-accent', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop', stock: 10 },
//             { name: { en: 'Silver & White', fa: 'نقره‌ای و سفید' }, value: '#E4E4E7', slug: 'silver-white', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop', stock: 5 }
//         ]
//     },
//     {
//         id: 'p-p-4-2',
//         slug: 'ultrawide-34-curved-monitor',
//         title: { en: 'Horizon 34" Curved Ultrawide Monitor', fa: 'مانیتور اولتراواید ۳۴ اینچ خمیده هورایزن' },
//         description: { en: 'Immersive 1500R curvature with HDR400 and ultra-wide workspace for creators.', fa: 'انحنای جذاب 1500R با پشتیبانی از HDR400 و فضای کاری بسیار وسیع مناسب طراحان.' },
//         price: 499.99,
//         stock: 10,
//         inStock: true,
//         brand: { en: 'Horizon', fa: 'هورایزن' },
//         tags: ['monitor', 'ultrawide', 'curved'],
//         images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'pc',
//         subcategorySlug: 'monitors',
//         collectionSlugs: ['special-offers'],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Aspect Ratio', fa: 'نسبت تصویر' }, value: { en: '21:9 Ultrawide', fa: '۲۱:۹ اولتراواید' } },
//             { key: { en: 'Curvature', fa: 'انحنا' }, value: { en: '1500R Curved', fa: '۱۵۰۰R خمیده' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 45,
//         colors: [
//             { name: { en: 'Space Gray Metallic', fa: 'خاکستری فضایی متالیک' }, value: '#4B5563', slug: 'space-gray-metallic', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop', stock: 10 }
//         ]
//     },

//     // --- 20. PC -> hubs-docks (2 Products) ---
//     {
//         id: 'p-p-5-1',
//         slug: 'dock-master-11-in-1-type-c-hub',
//         title: { en: 'DockMaster 11-in-1 Type-C Multi-Port Hub', fa: 'هاب ۱۱ کاره تایپ‌سی داک‌مستر' },
//         description: { en: 'Features 4K HDMI, VGA, 100W PD charging, USB 3.0 ports, SD card readers, and Ethernet.', fa: 'دارای خروجی 4K HDMI، درگاه VGA، شارژ 100W PD، پورت‌های USB 3.0، رم‌ریدر و پورت شبکه.' },
//         price: 69.99,
//         stock: 50,
//         inStock: true,
//         brand: { en: 'DockMaster', fa: 'داک‌مستر' },
//         tags: ['hub', 'dock', 'type-c', 'adapter'],
//         images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'pc',
//         subcategorySlug: 'hubs-docks',
//         collectionSlugs: ['bestsellers'],
//         isFeatured: true,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Ports', fa: 'پورت‌ها' }, value: { en: '11 Ports All-in-One', fa: '۱۱ پورت جامع' } },
//             { key: { en: 'HDMI Output', fa: 'خروجی تصویر' }, value: { en: '4K @ 60Hz', fa: '4K با نرخ ۶۰ هرتز' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 135,
//         colors: [
//             { name: { en: 'Space Gray', fa: 'خاکستری فضایی' }, value: '#374151', slug: 'space-gray', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop', stock: 30 },
//             { name: { en: 'Silver Aluminum', fa: 'آلومینیوم نقره‌ای' }, value: '#D1D5DB', slug: 'silver-aluminum', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop', stock: 20 }
//         ]
//     },
//     {
//         id: 'p-p-5-2',
//         slug: 'mini-4-in-1-usb-c-hub',
//         title: { en: 'Compact 4-in-1 USB-C Data Hub', fa: 'هاب کوچک ۴ کاره USB-C' },
//         description: { en: 'Sleek aluminum alloy body with 1x USB 3.0 and 3x USB 2.0 ports for laptops.', fa: 'بدنه شیک آلیاژ آلومینیوم با ۱ پورت USB 3.0 و ۳ پورت USB 2.0 مناسب لپ‌تاپ.' },
//         price: 25.99,
//         stock: 65,
//         inStock: true,
//         brand: { en: 'LinkMaster', fa: 'لینک‌مستر' },
//         tags: ['hub', 'usb-c', 'compact'],
//         images: ['https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'pc',
//         subcategorySlug: 'hubs-docks',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Material', fa: 'جنس' }, value: { en: 'Aluminum Alloy', fa: 'آلیاژ آلومینیوم' } },
//             { key: { en: 'Transfer Speed', fa: 'سرعت انتقال' }, value: { en: 'Up to 5 Gbps', fa: 'تا ۵ گیگابیت بر ثانیه' } }
//         ],
//         rating: 4.5,
//         reviewsCount: 48,
//         colors: [
//             { name: { en: 'Dark Gray', fa: 'خاکستری تیره' }, value: '#1F2937', slug: 'dark-gray', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop', stock: 40 },
//             { name: { en: 'Rose Gold', fa: 'رزگلد' }, value: '#F472B6', slug: 'rose-gold', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop', stock: 25 }
//         ]
//     },

//     // --- 21. Console -> controllers (2 Products) ---
//     {
//         id: 'p-c-1-1',
//         slug: 'matrix-pro-wireless-game-controller',
//         title: { en: 'Matrix Pro Wireless Gaming Controller', fa: 'کنترلر بازی بی‌سیم حرفه‌ای ماتریکس پرو' },
//         description: { en: 'Hall effect magnetic triggers, programmable back buttons, and ergonomic grip.', fa: 'تریگرهای مغناطیسی اثر هال، دکمه‌های پشتی قابل برنامه‌ریزی و دستگیره ارگونومیک.' },
//         price: 79.99,
//         discountPrice: 69.99,
//         stock: 40,
//         inStock: true,
//         brand: { en: 'Matrix', fa: 'ماتریکس' },
//         tags: ['controller', 'gamepad', 'wireless', 'gaming'],
//         images: ['https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'console',
//         subcategorySlug: 'controllers',
//         collectionSlugs: ['new-arrivals', 'bestsellers'],
//         isFeatured: true,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Joysticks', fa: 'استیکرها' }, value: { en: 'Anti-drift Hall Effect', fa: 'اثر هال ضد رانش (Anti-drift)' } },
//             { key: { en: 'Compatibility', fa: 'سازگاری' }, value: { en: 'PC / Console / Mobile', fa: 'کامپیوتر / کنسول / موبایل' } }
//         ],
//         rating: 4.9,
//         reviewsCount: 160,
//         colors: [
//             { name: { en: 'Carbon Black', fa: 'مشکی کربن' }, value: '#18181B', slug: 'carbon-black', image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=800&auto=format&fit=crop', stock: 18 },
//             { name: { en: 'Glacier White', fa: 'سفید یچالی' }, value: '#F4F4F5', slug: 'glacier-white', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?q=80&w=800&auto=format&fit=crop', stock: 12 },
//             { name: { en: 'Electric Purple', fa: 'بنفش الکتریک' }, value: '#7C3AED', slug: 'electric-purple', image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=800&auto=format&fit=crop', stock: 10 }
//         ]
//     },
//     {
//         id: 'p-c-1-2',
//         slug: 'dual-shock-elite-gamepad',
//         title: { en: 'Elite Strike Wireless Gamepad', fa: 'دسته بازی بی‌سیم الیت استرایک' },
//         description: { en: 'Customizable thumbsticks and trigger stops for professional competitive gaming.', fa: 'جوایستیک‌های قابل تعویض و قفل تریگر برای بازی‌های رقابتی حرفه‌ای.' },
//         price: 69.99,
//         stock: 35,
//         inStock: true,
//         brand: { en: 'StrikePro', fa: 'استرایک‌پرو' },
//         tags: ['controller', 'gamepad', 'elite'],
//         images: ['https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'console',
//         subcategorySlug: 'controllers',
//         collectionSlugs: ['special-offers'],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Battery', fa: 'شارژدهی' }, value: { en: '15 Hours Continuous', fa: '۱۵ ساعت مداوم' } },
//             { key: { en: 'Feedback', fa: 'بازخورد لرزشی' }, value: { en: 'Dual Rumble Motors', fa: 'موتورهای لرزش دوگانه' } }
//         ],
//         rating: 4.7,
//         reviewsCount: 94,
//         colors: [
//             { name: { en: 'Camouflage Green', fa: 'سبز استتار نظامی' }, value: '#3F6212', slug: 'camouflage-green', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?q=80&w=800&auto=format&fit=crop', stock: 20 },
//             { name: { en: 'Cosmic Red', fa: 'قرمز کیهانی' }, value: '#991B1B', slug: 'cosmic-red', image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=800&auto=format&fit=crop', stock: 15 }
//         ]
//     },

//     // --- 22. Console -> charging-docks-c (2 Products) ---
//     {
//         id: 'p-c-2-1',
//         slug: 'dual-controller-charging-station',
//         title: { en: 'RapidDock Dual Controller Charging Station', fa: 'پایه شارژر دوگانه دسته بازی رپیدداک' },
//         description: { en: 'Fast charging dock for dual gamepads with LED charge indicator lights.', fa: 'پایه شارژ سریع دوگانه برای دسته‌های بازی به همراه چراغ‌های نشانگر وضعیت شارژ LED.' },
//         price: 29.99,
//         stock: 50,
//         inStock: true,
//         brand: { en: 'RapidDock', fa: 'رپیدداک' },
//         tags: ['charging-dock', 'controller-charger', 'accessories'],
//         images: ['https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'console',
//         subcategorySlug: 'charging-docks-c',
//         collectionSlugs: ['bestsellers'],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Slots', fa: 'تعداد جایگاه' }, value: { en: 'Dual Controllers', fa: 'دو عدد دسته همزمان' } },
//             { key: { en: 'Charge Time', fa: 'زمان شارژ کامل' }, value: { en: '2.5 Hours Fast Charge', fa: '۲.۵ ساعت شارژ سریع' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 78,
//         colors: [
//             { name: { en: 'Matte Black', fa: 'مشکی مات' }, value: '#18181B', slug: 'matte-black', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?q=80&w=800&auto=format&fit=crop', stock: 30 },
//             { name: { en: 'White & Black', fa: 'سفید و مشکی' }, value: '#FAFAFA', slug: 'white-black', image: 'https://images.unsplash.com/photo-1612287233202-b51b366f1dfc?q=80&w=800&auto=format&fit=crop', stock: 20 }
//         ]
//     },
//     {
//         id: 'p-c-2-2',
//         slug: 'rgb-cooling-stand-with-charger',
//         title: { en: 'Console RGB Cooling & Charging Stand', fa: 'استند خنک‌کننده و شارژر کنسول بازی RGB' },
//         description: { en: 'All-in-one stand featuring dual cooling fans, controller charger, and game storage.', fa: 'پایه همه‌کاره شامل دو فن خنک‌کننده، شارژر دسته و محفظه نگهداری دیسک بازی.' },
//         price: 49.99,
//         discountPrice: 42.99,
//         stock: 25,
//         inStock: true,
//         brand: { en: 'Matrix', fa: 'ماتریکس' },
//         tags: ['cooling-stand', 'rgb', 'console-stand'],
//         images: ['https://images.unsplash.com/photo-1612287233202-b51b366f1dfc?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'console',
//         subcategorySlug: 'charging-docks-c',
//         collectionSlugs: ['new-arrivals'],
//         isFeatured: true,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Cooling Fans', fa: 'فن‌های خنک‌کننده' }, value: { en: 'Dual High-Speed Fans', fa: 'دو عدد فن پرسرعت' } },
//             { key: { en: 'Storage', fa: 'محفظه بازی' }, value: { en: '10 Game Slots', fa: '۱۰ جایگاه دیسک بازی' } }
//         ],
//         rating: 4.7,
//         reviewsCount: 62,
//         colors: [
//             { name: { en: 'Cyber Black RGB', fa: 'مشکی سایبر RGB' }, value: '#09090B', slug: 'cyber-black-rgb', image: 'https://images.unsplash.com/photo-1612287233202-b51b366f1dfc?q=80&w=800&auto=format&fit=crop', stock: 15 },
//             { name: { en: 'Arctic White RGB', fa: 'سفید آرکتیک RGB' }, value: '#F4F4F5', slug: 'arctic-white-rgb', image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=800&auto=format&fit=crop', stock: 10 }
//         ]
//     },

//     // --- 23. Console -> console-headsets (2 Products) ---
//     {
//         id: 'p-c-3-1',
//         slug: 'console-master-spatial-headset',
//         title: { en: 'ConsoleMaster Spatial Audio Gaming Headset', fa: 'هدست گیمینگ تخصصی کنسول کنسول‌مستر' },
//         description: { en: 'Engineered specifically for console gaming with 3D spatial sound support.', fa: 'مهندسی‌شده به طور ویژه برای بازی‌های کنسولی با پشتیبانی از صدای سه‌بعدی فضایی.' },
//         price: 99.99,
//         stock: 35,
//         inStock: true,
//         brand: { en: 'ConsoleMaster', fa: 'کنسول‌مستر' },
//         tags: ['headset', 'console', 'spatial-audio'],
//         images: ['https://images.unsplash.com/photo-1612287233202-b51b366f1dfc?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'console',
//         subcategorySlug: 'console-headsets',
//         collectionSlugs: ['bestsellers'],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Drivers', fa: 'درایورها' }, value: { en: '50mm Neodymium Custom', fa: '۵۰ میلی‌متری نئودیوم سفارشی' } },
//             { key: { en: 'Compatibility', fa: 'سازگاری کنسول' }, value: { en: 'PS5 / Xbox Series X / Switch', fa: 'پلی‌استیشن ۵ / ایکس‌باکس / سوئیچ' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 110,
//         colors: [
//             { name: { en: 'Midnight Black', fa: 'مشکی نیمه‌شب' }, value: '#18181B', slug: 'midnight-black', image: 'https://images.unsplash.com/photo-1612287233202-b51b366f1dfc?q=80&w=800&auto=format&fit=crop', stock: 20 },
//             { name: { en: 'Clean White', fa: 'سفید کلاسیک' }, value: '#FAFAFA', slug: 'clean-white', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop', stock: 15 }
//         ]
//     },
//     {
//         id: 'p-c-3-2',
//         slug: 'phantom-console-edition-headset',
//         title: { en: 'Phantom Console Edition Wireless Headset', fa: 'هدست بی‌سیم نسخه کنسول فانتوم' },
//         description: { en: 'Plug-and-play low latency wireless adapter designed for living room gaming.', fa: 'دانگل بی‌سیم با تاخیر پایین و اتصال آسان مناسب بازی‌های نشیمن و کنسول.' },
//         price: 129.99,
//         discountPrice: 109.99,
//         stock: 25,
//         inStock: true,
//         brand: { en: 'Phantom', fa: 'فانتوم' },
//         tags: ['headset', 'wireless', 'console'],
//         images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'console',
//         subcategorySlug: 'console-headsets',
//         collectionSlugs: ['new-arrivals'],
//         isFeatured: true,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Wireless', fa: 'نوع اتصال بی‌سیم' }, value: { en: 'Lossless USB Dongle', fa: 'دانگل USB بدون افت کیفیت' } },
//             { key: { en: 'Microphone', fa: 'میکروفون' }, value: { en: 'AI Noise Canceling Boom Mic', fa: 'بوم میکروفون حذف نویز هوش مصنوعی' } }
//         ],
//         rating: 4.9,
//         reviewsCount: 74,
//         colors: [
//             { name: { en: 'Graphite Gray', fa: 'خاکستری گرافیتی' }, value: '#3F3F46', slug: 'graphite-gray', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop', stock: 15 },
//             { name: { en: 'Pearl White', fa: 'سفید مرواریدی' }, value: '#F4F4F5', slug: 'pearl-white', image: 'https://images.unsplash.com/photo-1612287233202-b51b366f1dfc?q=80&w=800&auto=format&fit=crop', stock: 10 }
//         ]
//     },

//     // --- 24. Console -> carrying-cases (2 Products) ---
//     {
//         id: 'p-c-4-1',
//         slug: 'travel-guard-console-carrying-case',
//         title: { en: 'TravelGuard Hard Shell Console Case', fa: 'کیف حمل سخت کنسول و لوازم تراول‌گارد' },
//         description: { en: 'Water-resistant hard EVA shell with molded compartments for console and accessories.', fa: 'بدنه سخت EVA مقاوم در برابر آب با محفظه‌های قالب‌زنی شده برای کنسول و لوازم.' },
//         price: 39.99,
//         stock: 45,
//         inStock: true,
//         brand: { en: 'TravelGuard', fa: 'تراول‌گارد' },
//         tags: ['carrying-case', 'travel', 'hard-shell'],
//         images: ['https://images.unsplash.com/photo-1593118247619-e2d6f0576ded?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'console',
//         subcategorySlug: 'carrying-cases',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Outer Shell', fa: 'بدنه خارجی' }, value: { en: 'Hard EVA Water-resistant', fa: 'ای‌وی‌ای سخت ضد آب' } },
//             { key: { en: 'Interior', fa: 'بخش داخلی' }, value: { en: 'Custom Foam Padding', fa: 'فومشت ضربه‌گیر سفارشی' } }
//         ],
//         rating: 4.7,
//         reviewsCount: 55,
//         colors: [
//             { name: { en: 'Carbon Black', fa: 'مشکی کربن' }, value: '#18181B', slug: 'carbon-black', image: 'https://images.unsplash.com/photo-1593118247619-e2d6f0576ded?q=80&w=800&auto=format&fit=crop', stock: 25 },
//             { name: { en: 'Military Gray', fa: 'خاکستری نظامی' }, value: '#52525B', slug: 'military-gray', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop', stock: 20 }
//         ]
//     },
//     {
//         id: 'p-c-4-2',
//         slug: 'compact-handheld-travel-pouch',
//         title: { en: 'Handheld Gear Organizer Pouch', fa: 'کیف سازمان‌دهنده جیبی لوازم گیمینگ' },
//         description: { en: 'Multi-pocket compact pouch for carrying cables, power banks, and small controllers.', fa: 'کیف جیبی چندمحفظه برای حمل کابل‌ها، پاوربانک و کنترلرهای کوچک.' },
//         price: 21.99,
//         stock: 60,
//         inStock: true,
//         brand: { en: 'GearPro', fa: 'گیرپرو' },
//         tags: ['pouch', 'organizer', 'travel'],
//         images: ['https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'console',
//         subcategorySlug: 'carrying-cases',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Material', fa: 'جنس پارچه' }, value: { en: '1680D Ballistic Nylon', fa: 'نایلون بالستیک 1680D ضد خش' } },
//             { key: { en: 'Zippers', fa: 'زیپ‌ها' }, value: { en: 'YKK Waterproof Zippers', fa: 'زیپ‌های ضد آب YKK' } }
//         ],
//         rating: 4.6,
//         reviewsCount: 42,
//         colors: [
//             { name: { en: 'Tactical Black', fa: 'مشکی تاکتیکال' }, value: '#09090B', slug: 'tactical-black', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop', stock: 35 },
//             { name: { en: 'Navy Blue', fa: 'آبی سرمه‌ای' }, value: '#1E3A8A', slug: 'navy-blue', image: 'https://images.unsplash.com/photo-1593118247619-e2d6f0576ded?q=80&w=800&auto=format&fit=crop', stock: 25 }
//         ]
//     },

//     // --- 25. Console -> skins-covers (2 Products) ---
//     {
//         id: 'p-c-5-1',
//         slug: 'carbon-fiber-console-skin-wrap',
//         title: { en: 'Stealth Carbon Fiber Console Skin Wrap', fa: 'برچسب بدنه طرح فیبر کربن کنسول استلث' },
//         description: { en: 'Precision-cut premium vinyl wrap protecting your console against scratches with a sleek style.', fa: 'وینیل پریمیوم برش‌خورده دقیق جهت محافظت از کنسول در برابر خط و خش با استایل شیک.' },
//         price: 24.99,
//         stock: 50,
//         inStock: true,
//         brand: { en: 'SkinGuard', fa: 'اسکین‌گارد' },
//         tags: ['skin', 'carbon', 'wrap', 'protection'],
//         images: ['https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'console',
//         subcategorySlug: 'skins-covers',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: false,
//         specifications: [
//             { key: { en: 'Material', fa: 'جنس برچسب' }, value: { en: 'Air-release Premium Vinyl', fa: 'وینیل پریمیوم با قابلیت خروج هوا' } },
//             { key: { en: 'Removal', fa: 'جدا شدن' }, value: { en: 'Residue-free removal', fa: 'بدون برجای گذاشتن چسب هنگام جداسازی' } }
//         ],
//         rating: 4.7,
//         reviewsCount: 48,
//         colors: [
//             { name: { en: 'Matte Carbon Black', fa: 'مشکی کربن مات' }, value: '#18181B', slug: 'matte-carbon-black', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop', stock: 30 },
//             { name: { en: 'Brushed Titanium', fa: 'تیتانیوم برس‌خورده' }, value: '#71717A', slug: 'brushed-titanium', image: 'https://images.unsplash.com/photo-1593118247619-e2d6f0576ded?q=80&w=800&auto=format&fit=crop', stock: 20 }
//         ]
//     },
//     {
//         id: 'p-c-5-2',
//         slug: 'silicone-controller-grip-cover-set',
//         title: { en: 'Anti-Slip Silicone Controller Grip Cover Set', fa: 'ست کاور سیلیکونی ضد لغزش دسته بازی' },
//         description: { en: 'Soft touch textured silicone grips with custom thumb grip caps included.', fa: 'کاور سیلیکونی بافت‌دار نرم به همراه سرپوش‌های جویستیک سفارشی.' },
//         price: 16.99,
//         stock: 80,
//         inStock: true,
//         brand: { en: 'GripMaster', fa: 'گریپ‌مستر' },
//         tags: ['grip', 'silicone', 'controller-cover'],
//         images: ['https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=800&auto=format&fit=crop'],
//         categorySlug: 'console',
//         subcategorySlug: 'skins-covers',
//         collectionSlugs: [],
//         isFeatured: false,
//         isNewArrival: true,
//         specifications: [
//             { key: { en: 'Material', fa: 'جنس' }, value: { en: 'Anti-sweat Medical Silicone', fa: 'سیلیکون پزشکی ضد تعریق' } },
//             { key: { en: 'Extras', fa: 'لوازم جانبی همراه' }, value: { en: '8x Thumb Grips Included', fa: '۸ عدد سرپوش جویستیک' } }
//         ],
//         rating: 4.8,
//         reviewsCount: 88,
//         colors: [
//             { name: { en: 'Jet Black', fa: 'مشکی جت' }, value: '#09090B', slug: 'jet-black', image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=800&auto=format&fit=crop', stock: 40 },
//             { name: { en: 'Blood Red', fa: 'قرمز خونی' }, value: '#DC2626', slug: 'blood-red', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?q=80&w=800&auto=format&fit=crop', stock: 25 },
//             { name: { en: 'Arctic White', fa: 'سفید آرکتیک' }, value: '#F4F4F5', slug: 'arctic-white', image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=800&auto=format&fit=crop', stock: 15 }
//         ]
//     },
// ];





