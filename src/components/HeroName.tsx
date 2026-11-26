import { useEffect, useRef } from 'react';

interface Props { lines: string[] }

/** Letters grow heavier/wider as the pointer approaches (variable font axes). Static when reduced motion or no hover. */
export default function HeroName({ lines }: Props) {
  const root = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) return;

    const letters = Array.from(el.querySelectorAll<HTMLElement>('[data-l]'));
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        for (const n of letters) {
          const r = n.getBoundingClientRect();
          const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
          const k = Math.max(0, 1 - d / 260);
          n.style.fontVariationSettings = `"wght" ${Math.round(300 + k * 500)}, "wdth" ${Math.round(75 + k * 25)}`;
          n.style.color = k > 0.55 ? 'var(--color-hot)' : '';
        }
      });
    };
    const reset = () => letters.forEach((n) => { n.style.fontVariationSettings = ''; n.style.color = ''; });
    window.addEventListener('pointermove', onMove);
    document.addEventListener('pointerleave', reset);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', reset);
    };
  }, []);

  return (
    <h1 ref={root} aria-label={lines.join(' ')} className="font-display uppercase leading-[0.82] tracking-tighter text-ink text-[clamp(3.5rem,17vw,15rem)] font-extrabold" style={{ fontVariationSettings: '"wght" 800, "wdth" 85' }}>
      {lines.map((line) => (
        <span key={line} aria-hidden="true" className="block">
          {Array.from(line).map((ch, i) => (
            <span key={i} data-l className="inline-block transition-[font-variation-settings,color] duration-150 ease-out">
              {ch}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
