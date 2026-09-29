// Bandeiras simplificadas em SVG (emojis de bandeira não aparecem no Windows).
// pt → Brasil (público do site), es → Espanha, en → Estados Unidos.

function Brazil() {
  return (
    <svg viewBox="0 0 20 14" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="20" height="14" fill="#009c3b" />
      <path d="M10 1.6 18.2 7 10 12.4 1.8 7z" fill="#ffdf00" />
      <circle cx="10" cy="7" r="3.1" fill="#002776" />
      <path d="M7.1 6.3c1.9-.5 4-.2 5.8.8" stroke="#fff" strokeWidth=".6" fill="none" />
    </svg>
  );
}

function Spain() {
  return (
    <svg viewBox="0 0 20 14" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="20" height="14" fill="#c60b1e" />
      <rect y="3.5" width="20" height="7" fill="#ffc400" />
    </svg>
  );
}

function UnitedStates() {
  return (
    <svg viewBox="0 0 20 14" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="20" height="14" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 14) / 13} width="20" height={14 / 13} fill="#b22234" />
      ))}
      <rect width="8.6" height={(14 / 13) * 7} fill="#3c3b6e" />
    </svg>
  );
}

const flags = { pt: Brazil, es: Spain, en: UnitedStates };

export default function Flag({ code }) {
  const Svg = flags[code];
  return Svg ? <span className="flag"><Svg /></span> : null;
}
