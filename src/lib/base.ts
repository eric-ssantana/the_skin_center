// Public base path ("" locally, "/the_skin_center" on GitHub Pages).
export const BASE = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
export const withBase = (p: string) => `${BASE}${p}`;
