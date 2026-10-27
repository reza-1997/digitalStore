
import type { Metadata } from "next";
import localFont from 'next/font/local'
import { notFound } from "next/navigation";

import ThemeRegistry from "@/src/theme/ThemeRegistry";
import Providers from "@/src/lib/store/StoreProvider";
import { getDictionary, hasLocale } from "@/src/lang/getDictionary";
import { Navbar } from "@/src/components/layout/navbar/Navbar";




const myFont = localFont({
    src: '../../font/Vazir.woff2',
})

export const metadata: Metadata = {
    title: "DIGITALSTORE | Premium Digital Products Store",
    description:
        "High-end modern digital gadgets inspired by Soundcore design philosophy.",
};

export function generateStaticParams() {
    return [{ lang: "en" }, { lang: "fa" }];
}

export default async function RootLayout({
    children,
    params,
}: LayoutProps<"/[lang]">) {
    const { lang } = await params;
    if (!hasLocale(lang)) notFound();
    const isFa = lang === "fa";

    // Load dictionary on server side based on current language
    const dict = await getDictionary(lang);

    return (
        <html
            lang={lang}
            dir={isFa ? "rtl" : "ltr"}
            suppressHydrationWarning
        >
            <body className={myFont.className}>
                <Providers>
                    <ThemeRegistry>
                        <Navbar lang={lang} dictNavbar={dict.navbar} dictProductCard={dict.productCard} />
                        {children}
                    </ThemeRegistry>
                </Providers>
            </body>
        </html>
    );
}
