import { useState } from 'react';
import type { Skill } from '../i18n/content';
import { fitToContainer } from '../lib/fit';

interface Props { items: readonly Skill[]; hint: string }

export default function SkillGrid({ items, hint }: Props) {
  const [sel, setSel] = useState<Skill | null>(null);

  return (
    <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {items.map((s, i) => {
          const on = sel?.name === s.name;
          return (
            <li key={s.name}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => setSel(on ? null : s)}
                className={
                  '@container flex aspect-square w-full min-w-0 flex-col justify-between border-2 border-paper p-3 text-left transition-all duration-150 ' +
                  (on ? 'bg-acid text-ink -translate-y-1 rotate-0' : 'bg-transparent text-paper hover:bg-hot hover:text-ink ' + (i % 2 ? 'hover:rotate-2' : 'hover:-rotate-2'))
                }
              >
                <span className="label">{s.group}</span>
                <span className="font-display font-extrabold leading-none" style={{ fontSize: fitToContainer(s.name, 1.875, 0.7) }}>{s.name}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div aria-live="polite" className="self-start border-2 border-paper bg-ink p-6 text-paper lg:sticky lg:top-6">
        {sel ? (
          <>
            <p className="label text-acid">{sel.group}</p>
            <p className="mt-3 font-display text-4xl font-extrabold">{sel.name}</p>
            <p className="mt-4 font-serif text-2xl italic leading-snug">{sel.note}</p>
          </>
        ) : (
          <p className="label">{hint}</p>
        )}
      </div>
    </div>
  );
}
