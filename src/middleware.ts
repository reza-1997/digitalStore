import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'fa'];
const defaultLocale = 'fa';

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

        // e.g. incoming request is /products?q=x -> redirect to /fa/products?q=x
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
        // Skip internal paths and static files in public/ (any last segment with an extension)
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.[^/]+$).*)',
    ],
};