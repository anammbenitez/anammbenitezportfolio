/**
 * Font-size that keeps the longest word of `text` inside its container.
 * The container must be a query container (Tailwind `@container`); `cqw` is
 * relative to its content width. `em` is the average glyph width in em.
 */
export function fitToContainer(text: string, maxRem: number, em = 0.72): string {
  const longest = Math.max(...text.split(/\s+/).map((w) => w.length), 1);
  return `min(${maxRem}rem, ${(100 / (longest * em)).toFixed(2)}cqw)`;
}
