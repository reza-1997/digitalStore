import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'fa'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

    try {
        return match(languages, locales, defaultLocale);
    } catch {
        return defaultLocale;
    }
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        // e.g. /products?page=2 -> /en/products?page=2 or /fa/products?page=2
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname === '/' ? '' : pathname}${request.nextUrl.search}`,
                request.url
            )
        );
    }
}

export const config = {
    matcher: [
        // Skip API routes, Next.js internals, and static files with an extension
        // (e.g. favicon.ico, robots.txt, sitemap.xml, images in public/)
        '/((?!api|_next/static|_next/image|.*\\..*).*)',
    ],
};