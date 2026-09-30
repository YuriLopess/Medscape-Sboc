// Ícones anatômicos das áreas terapêuticas: mesma grade (24px), mesmo traço, cor herdada (currentColor).
const paths = {
  // Fita da conscientização do câncer de mama
  mama: (
    <>
      <path d="M12 3.2c-2 0-3.4 1.5-3.4 3.5 0 1.6.9 3.2 2 4.9L6.3 19.6l2.3 1.2 3.4-6.3 3.4 6.3 2.3-1.2-4.3-8c1.1-1.7 2-3.3 2-4.9 0-2-1.4-3.5-3.4-3.5z" />
      <path d="M12 5.6c.8 0 1.3.6 1.3 1.3 0 .8-.5 1.8-1.3 3.1-.8-1.3-1.3-2.3-1.3-3.1 0-.7.5-1.3 1.3-1.3z" />
    </>
  ),
  // Pulmões com traqueia e brônquios
  pulmao: (
    <>
      <path d="M12 3v7.5M12 10.5c-.8 1-1.8 1.6-3 1.8M12 10.5c.8 1 1.8 1.6 3 1.8" />
      <path d="M9.4 6.5C6.8 6.8 4 10.7 4 16.3 4 18.6 5 20 6.9 20c2 0 3.6-1.3 3.6-3.6V8.2c0-1-.4-1.7-1.1-1.7z" />
      <path d="M14.6 6.5c2.6.3 5.4 4.2 5.4 9.8 0 2.3-1 3.7-2.9 3.7-2 0-3.6-1.3-3.6-3.6V8.2c0-1 .4-1.7 1.1-1.7z" />
    </>
  ),
  // Estômago
  gastro: (
    <path d="M9 3v3.8c0 1.4-.9 2.4-2.3 3.4C5 11.4 4 13.2 4 15.4 4 18.6 6.6 21 10.1 21c5.3 0 9.9-3.6 9.9-9 0-2.5-1.7-4-3.7-4-2.4 0-3.2 2-4.8 2-1 0-1.5-.7-1.5-1.9V3" />
  ),
  // Gota de sangue
  hemato: (
    <>
      <path d="M12 3s-6 6.6-6 11.2a6 6 0 0 0 12 0C18 9.6 12 3 12 3z" />
      <path d="M9.3 14.6a2.8 2.8 0 0 0 2.7 2.7" />
    </>
  ),
  // Anticorpo (Y)
  imuno: (
    <>
      <path d="M11 21v-7.4L5.8 8.4M13 21v-7.4l5.2-5.2" />
      <path d="M3.8 10.2 7.4 6.6M20.2 10.2l-3.6-3.6" />
    </>
  ),
  // Útero com tubas e ovários
  gineco: (
    <>
      <path d="M8.3 8.6c0 4.2 2 5.2 2.5 7.2V20h2.4v-4.2c.5-2 2.5-3 2.5-7.2 0-1-.8-1.6-2-1.6h-3.4c-1.2 0-2 .6-2 1.6z" />
      <path d="M8.3 8.8C6.6 8.8 5.6 7.6 5 6.4M15.7 8.8c1.7 0 2.7-1.2 3.3-2.4" />
      <circle cx="4.2" cy="5.2" r="1.4" />
      <circle cx="19.8" cy="5.2" r="1.4" />
    </>
  ),
  // Rim com ureter
  gu: (
    <>
      <path d="M14.8 3C10.8 3 7 6.6 7 12s3.8 9 7.8 9c2.4 0 4.2-1.8 4.2-4 0-1.8-1.4-2.8-2.4-3.5-.8-.6-.8-2.4 0-3C17.6 9.8 19 8.8 19 7c0-2.2-1.8-4-4.2-4z" />
      <path d="M14.4 12c-1.4 0-2.2 1-2.2 2.6V21" />
    </>
  ),
  // Lupa sobre uma lesão de pele
  pele: (
    <>
      <circle cx="10.4" cy="10.4" r="6.6" />
      <path d="M15.2 15.2 20.8 20.8" />
      <path d="M9.1 8.9c1.3-.9 2.8-.4 3.1.8.3 1.2-.8 2.3-2 2.2-1.2-.1-1.9-1-1.7-2 .1-.4.3-.7.6-1z" />
    </>
  ),
  // Demais temas da cobertura
  outros: (
    <>
      <rect x="3.4" y="3.4" width="7.4" height="7.4" rx="2" />
      <rect x="13.2" y="3.4" width="7.4" height="7.4" rx="2" />
      <rect x="3.4" y="13.2" width="7.4" height="7.4" rx="2" />
      <path d="M16.9 14.3v5.9M13.95 17.25h5.9" />
    </>
  ),
  // Hélice de DNA
  precisao: (
    <>
      <path d="M8 3c0 4.5 8 4.5 8 9s-8 4.5-8 9M16 3c0 4.5-8 4.5-8 9s8 4.5 8 9" />
      <path d="M9.6 5.6h4.8M10.2 9.2h3.6M10.2 14.8h3.6M9.6 18.4h4.8" />
    </>
  ),
};

export default function TopicIcon({ topic }) {
  const shape = paths[topic];
  if (!shape) return null;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {shape}
    </svg>
  );
}
