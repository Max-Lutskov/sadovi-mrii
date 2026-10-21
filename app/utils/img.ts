// srcset із WebP-варіантів, які генерує scripts/optimize-images.mjs (name.jpg → name-800.webp).
// Ширини мають збігатися з тими, що задані в скрипті для цього фото.
export function srcset(src: string, widths: number[] = [400, 600, 800, 960, 1280]) {
  const base = src.replace(/\.jpg$/, '')
  return widths.map(w => `${base}-${w}.webp ${w}w`).join(', ')
}
