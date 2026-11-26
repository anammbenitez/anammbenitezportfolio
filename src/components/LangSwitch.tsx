import { locales, type Locale } from '../i18n';

interface Props { current: Locale; label: string }

export default function LangSwitch({ current, label }: Props) {
  return (
    <nav aria-label={label} className="label flex border-2 border-ink bg-paper text-ink">
      {locales.map((l) => (
        <a
          key={l}
          href={`/${l}/`}
          hrefLang={l}
          lang={l}
          aria-current={l === current ? 'true' : undefined}
          className={
            'px-3 py-1.5 transition-colors ' +
            (l === current ? 'bg-ink text-acid' : 'hover:bg-acid')
          }
        >
          {l.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
