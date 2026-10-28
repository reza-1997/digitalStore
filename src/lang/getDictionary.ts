import 'server-only';

const dictionaries = {
    en: () => import('./en.json').then((module) => module.default),
    fa: () => import('./fa.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const hasLocale = (locale: string): locale is Locale =>
    Object.hasOwn(dictionaries, locale);

export const getDictionary = async (locale: Locale) => {
    if (locale === 'fa') {
        return dictionaries.fa();
    }
    return dictionaries.en();
};