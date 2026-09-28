const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

export const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowLeft = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
);
export const User = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...p}>
    <circle cx="12" cy="8.5" r="4" fill="currentColor" />
    <path fill="currentColor" d="M4 20.5c0-4.2 3.6-7 8-7s8 2.8 8 7z" />
  </svg>
);
export const ChevronLeft = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><path d="M15 6l-6 6 6 6" /></svg>
);
export const ChevronRight = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><path d="M9 6l6 6-6 6" /></svg>
);
export const ChevronDown = (p) => (
  <svg viewBox="0 0 24 24" width="14" height="14" {...base} {...p}><path d="M6 9l6 6 6-6" /></svg>
);
export const Search = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
);
export const Pin = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...p}>
    <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);
export const Play = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...p}><path fill="currentColor" d="M8 5.5v13l11-6.5z" /></svg>
);
export const Doc = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
);
export const Menu = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
