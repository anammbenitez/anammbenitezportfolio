export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const stack = ['Java', 'Spring Boot', 'Python', 'SQL', 'PostgreSQL', 'Docker', 'Git', 'Dagster'] as const;

export const ui = {
  es: {
    title: 'Ana María Marrero Benítez · Desarrolladora de Software',
    role: 'Desarrolladora de Software',
    location: 'Telde, Canarias',
    badge: 'DAM · 2026',
    lead: 'Backend, datos y procesos ETL. Me gusta entender cómo fluye la información antes de tocarla.',
    cta: 'Ver proyectos',
    skipToContent: 'Saltar al contenido',
    switchLabel: 'Idioma',
    aboutLabel: '01 / Sobre mí',
    aboutTitle: 'Del laboratorio al código.',
    aboutBody: [
      'Soy Técnico Superior en Desarrollo de Aplicaciones Multiplataforma. Mis prácticas en BITBOX S.L. consistieron en analizar procesos ETL en producción basados en Java y Spring Boot y elaborar un plan de migración a Dagster, que la empresa aprobó para su implementación.',
      'Antes de programar pasé por el laboratorio (Técnico Superior en Anatomía Patológica y Citodiagnóstico) y por la Filosofía (UNED). Trabajo con Java, Spring Boot, Python, PostgreSQL y SQL, con buen manejo de Docker y Git. Inglés avanzado.',
    ],
    facts: [
      ['Ahora', 'Desarrolladora de Software'],
      ['Base', 'Telde, Canarias'],
      ['Idiomas', 'Español · Inglés avanzado'],
    ],
  },
  en: {
    title: 'Ana María Marrero Benítez · Software Developer',
    role: 'Software Developer',
    location: 'Telde, Canary Islands',
    badge: 'DAM · 2026',
    lead: 'Backend, data and ETL processes. I like to understand how information flows before I touch it.',
    cta: 'See projects',
    skipToContent: 'Skip to content',
    switchLabel: 'Language',
    aboutLabel: '01 / About',
    aboutTitle: 'From the lab to code.',
    aboutBody: [
      'I hold a Higher Technician degree in Multiplatform Application Development. My internship at BITBOX S.L. involved analysing production ETL processes built on Java and Spring Boot and drafting a migration plan to Dagster, which the company approved for implementation.',
      'Before programming I worked in the lab (Higher Technician in Pathological Anatomy and Cytodiagnosis) and studied Philosophy (UNED). I work with Java, Spring Boot, Python, PostgreSQL and SQL, with solid Docker and Git skills. Advanced English.',
    ],
    facts: [
      ['Now', 'Software Developer'],
      ['Based in', 'Telde, Canary Islands'],
      ['Languages', 'Spanish · Advanced English'],
    ],
  },
} as const;

export function t(lang: Locale) {
  return ui[lang];
}
