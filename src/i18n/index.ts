export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const ui = {
  es: { title: 'Ana María Marrero Benítez · Desarrolladora de Software', role: 'Desarrolladora de Software' },
  en: { title: 'Ana María Marrero Benítez · Software Developer', role: 'Software Developer' },
} as const satisfies Record<Locale, Record<string, string>>;

export function t(lang: Locale) {
  return ui[lang];
}
