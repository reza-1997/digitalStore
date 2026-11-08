
import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Suspense } from "react";
import { notFound } from "next/navigation";

import ThemeRegistry from "@/src/theme/ThemeRegistry";
import Providers from "@/src/lib/store/StoreProvider";
import { getDictionary, hasLocale } from "@/src/lang/getDictionary";
import { Navbar } from "@/src/components/layout/navbar/Navbar";
import Footer from "@/src/components/layout/footer/Footer";
import { ScrollToTopButton } from "@/src/components/common";




const myFont = localFont({
    src: '../../font/Vazir.woff2',
})

export const metadata: Metadata = {
    title: "DIGITALSTORE | Premium Digital Products Store",
    description:
        "High-end modern digital gadgets",
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
                {/* The Redux store uses Math.random() (nanoid) on creation, so it must render at request time */}
                <Suspense>
                    <Providers>
                        <ThemeRegistry>
                            <Navbar lang={lang} dict={dict} />
                            {children}
                            <Footer dict={dict} lang={lang} />
                            <ScrollToTopButton lang={lang} />
                        </ThemeRegistry>
                    </Providers>
                </Suspense>
            </body>
        </html>
    );
}
