import type { Locale } from './index';

export interface Project { name: string; kind: string; desc: string; tags: string[]; href?: string; status: string }
export interface Skill { name: string; group: string; note: string }
export interface Entry { when: string; what: string; where: string; body: string }

export const links = {
  email: 'anammbenitez@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anammbenitez/',
  github: 'https://github.com/anammbenitez',
} as const;

export const content = {
  es: {
    projects: {
      label: '02 / Proyectos',
      title: 'Cosas que he construido',
      open: 'Abrir repositorio',
      items: [
        {
          name: 'BandleBox', kind: 'Open source · Web', status: 'Publicado',
          desc: 'Catálogo de cartas y constructor de mazos para Riftbound TCG. Valida el mazo contra las reglas reales, guarda los filtros en la URL y permite compartir mazos con un enlace. Sitio estático, sin servidor ni cuentas.',
          tags: ['Astro', 'TypeScript', 'JavaScript'], href: 'https://github.com/anammbenitez/Bandlebox',
        },
        {
          name: 'ETL → Dagster', kind: 'Prácticas · BITBOX S.L.', status: 'Aprobado',
          desc: 'Análisis de procesos ETL en producción (Java y Spring Boot) y plan de migración a Dagster. La empresa aprobó el plan para su implementación.',
          tags: ['Java', 'Spring Boot', 'Dagster', 'Python', 'SQL'],
        },
        {
          name: 'RecetariumApp', kind: 'Proyecto personal', status: 'En construcción',
          desc: 'Aplicación de recetas. El repositorio ya existe; la descripción llegará cuando haya algo que enseñar.',
          tags: ['Próximamente'], href: 'https://github.com/anammbenitez/RecetariumApp',
        },
      ] satisfies Project[],
    },
    skills: {
      label: '03 / Stack',
      title: 'Mi caja de herramientas',
      hint: 'Pulsa una tecnología.',
      items: [
        { name: 'Java', group: 'Backend', note: 'Lenguaje de los procesos ETL que analicé en producción.' },
        { name: 'Spring Boot', group: 'Backend', note: 'Framework sobre el que estaban construidos esos procesos.' },
        { name: 'Python', group: 'Datos', note: 'Tratamiento de datos durante las prácticas.' },
        { name: 'SQL', group: 'Datos', note: 'Consultas y tratamiento de datos.' },
        { name: 'PostgreSQL', group: 'Datos', note: 'Base de datos con la que trabajo.' },
        { name: 'Dagster', group: 'Orquestación', note: 'Herramienta de orquestación a la que planifiqué migrar los ETL.' },
        { name: 'Docker', group: 'Herramientas', note: 'Buen manejo para entornos reproducibles.' },
        { name: 'Git', group: 'Herramientas', note: 'Control de versiones en el día a día.' },
        { name: 'TypeScript', group: 'Frontend', note: 'Lo uso en BandleBox.' },
        { name: 'Astro', group: 'Frontend', note: 'Base de BandleBox y de este portfolio.' },
        { name: 'React', group: 'Frontend', note: 'Islas interactivas de este portfolio.' },
        { name: 'Tailwind', group: 'Frontend', note: 'CSS de este portfolio.' },
      ] satisfies Skill[],
    },
    experience: {
      label: '04 / Trayectoria',
      title: 'git log --career',
      items: [
        { when: 'jul 2026 – oct 2026', what: 'Desarrolladora de Software (prácticas)', where: 'BITBOX S.L. · Telde',
          body: 'Backend en un entorno de producción dentro del proyecto de migración de procesos ETL. Analicé el flujo de datos y los procesos existentes (Java, Spring Boot), estudié su migración a Dagster y elaboré un plan estable que la empresa aprobó.' },
        { when: 'oct 2024 – oct 2026', what: 'Ciclo Superior, Desarrollo de Aplicaciones Multiplataforma', where: 'ICSE', body: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma.' },
        { when: 'oct 2023 – jun 2024', what: 'Grado en Humanidades, Filosofía', where: 'UNED', body: '' },
        { when: 'sep 2021 – jun 2023', what: 'Técnico Superior en Anatomía Patológica y Citodiagnóstico', where: 'ICSE', body: '' },
      ] satisfies Entry[],
    },
    contact: {
      label: '05 / Contacto',
      title: '¿Hablamos?',
      lead: 'Busco mi primera oportunidad como desarrolladora. Escríbeme.',
      email: 'Correo', linkedin: 'LinkedIn', github: 'GitHub',
      footer: 'Hecho con Astro, React y Tailwind.',
    },
  },
  en: {
    projects: {
      label: '02 / Projects',
      title: 'Things I have built',
      open: 'Open repository',
      items: [
        {
          name: 'BandleBox', kind: 'Open source · Web', status: 'Live',
          desc: 'Card catalog and deck builder for Riftbound TCG. It validates decks against the real rules, keeps filters in the URL and lets you share a deck as a link. Static site: no server, no accounts.',
          tags: ['Astro', 'TypeScript', 'JavaScript'], href: 'https://github.com/anammbenitez/Bandlebox',
        },
        {
          name: 'ETL → Dagster', kind: 'Internship · BITBOX S.L.', status: 'Approved',
          desc: 'Analysis of production ETL processes (Java and Spring Boot) and a migration plan to Dagster. The company approved the plan for implementation.',
          tags: ['Java', 'Spring Boot', 'Dagster', 'Python', 'SQL'],
        },
        {
          name: 'RecetariumApp', kind: 'Personal project', status: 'In progress',
          desc: 'A recipe app. The repository exists; the description will arrive once there is something to show.',
          tags: ['Coming soon'], href: 'https://github.com/anammbenitez/RecetariumApp',
        },
      ] satisfies Project[],
    },
    skills: {
      label: '03 / Stack',
      title: 'My toolbox',
      hint: 'Press a technology.',
      items: [
        { name: 'Java', group: 'Backend', note: 'The language of the production ETL processes I analysed.' },
        { name: 'Spring Boot', group: 'Backend', note: 'The framework those processes were built on.' },
        { name: 'Python', group: 'Data', note: 'Data processing during my internship.' },
        { name: 'SQL', group: 'Data', note: 'Querying and processing data.' },
        { name: 'PostgreSQL', group: 'Data', note: 'Database I work with.' },
        { name: 'Dagster', group: 'Orchestration', note: 'The orchestration tool I planned the ETL migration to.' },
        { name: 'Docker', group: 'Tooling', note: 'Solid handling for reproducible environments.' },
        { name: 'Git', group: 'Tooling', note: 'Version control every day.' },
        { name: 'TypeScript', group: 'Frontend', note: 'Used in BandleBox.' },
        { name: 'Astro', group: 'Frontend', note: 'Foundation of BandleBox and of this portfolio.' },
        { name: 'React', group: 'Frontend', note: 'Interactive islands in this portfolio.' },
        { name: 'Tailwind', group: 'Frontend', note: 'CSS of this portfolio.' },
      ] satisfies Skill[],
    },
    experience: {
      label: '04 / Path',
      title: 'git log --career',
      items: [
        { when: 'Jul 2026 – Oct 2026', what: 'Software Developer (internship)', where: 'BITBOX S.L. · Telde',
          body: 'Backend in a production environment within the ETL migration project. I analysed the data flow and existing processes (Java, Spring Boot), studied their migration to Dagster and drafted a stable plan the company approved.' },
        { when: 'Oct 2024 – Oct 2026', what: 'Higher Technician, Multiplatform Application Development', where: 'ICSE', body: 'Higher Technician in Multiplatform Application Development.' },
        { when: 'Oct 2023 – Jun 2024', what: 'Degree in Humanities, Philosophy', where: 'UNED', body: '' },
        { when: 'Sep 2021 – Jun 2023', what: 'Higher Technician in Pathological Anatomy and Cytodiagnosis', where: 'ICSE', body: '' },
      ] satisfies Entry[],
    },
    contact: {
      label: '05 / Contact',
      title: 'Let’s talk?',
      lead: 'I am looking for my first role as a developer. Write to me.',
      email: 'Email', linkedin: 'LinkedIn', github: 'GitHub',
      footer: 'Built with Astro, React and Tailwind.',
    },
  },
} as const satisfies Record<Locale, unknown>;

export function c(lang: Locale) {
  return content[lang];
}
