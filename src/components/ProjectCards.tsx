import { useRef } from 'react';
import type { Project } from '../i18n/content';

interface Props { items: readonly Project[]; open: string }

function Card({ p, i, open }: { p: Project; i: number; open: string }) {
  const ref = useRef<HTMLElement>(null);
  const fine = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches;

  const move = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || !fine()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(0)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ''; };

  const accent = ['bg-hot', 'bg-acid', 'bg-paper'][i % 3];

  return (
    <article
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      className={`group relative flex flex-col justify-between border-2 border-paper p-6 text-ink transition-transform duration-200 ease-out ${accent}`}
      style={{ boxShadow: '8px 8px 0 0 var(--color-volt)' }}
    >
      <div>
        <div className="label flex items-center justify-between">
          <span>{String(i + 1).padStart(2, '0')} · {p.kind}</span>
          <span className="border-2 border-ink px-2 py-0.5">{p.status}</span>
        </div>
        <h3 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight">{p.name}</h3>
        <p className="mt-4 text-base leading-relaxed">{p.desc}</p>
      </div>
      <div className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {p.tags.map((t) => <li key={t} className="label border-2 border-ink px-2 py-1">{t}</li>)}
        </ul>
        {p.href && (
          <a href={p.href} target="_blank" rel="noopener noreferrer" className="label mt-5 inline-block border-b-2 border-ink pb-0.5 hover:text-volt">
            {open} ↗<span className="sr-only"> — {p.name}</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function ProjectCards({ items, open }: Props) {
  return (
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      {items.map((p, i) => <Card key={p.name} p={p} i={i} open={open} />)}
    </div>
  );
}
