import { useEffect, useState } from 'react';

// Botão temporário para comparar paletas. O tema escolhido fica na URL (?tema=promo / ?tema=atual),
// então dá para mandar o link já na paleta certa. Remova este componente quando a paleta for decidida.
const THEMES = [
  { id: 'promo', label: 'Paleta Promo' },
  { id: 'atual', label: 'Paleta atual' },
];

function readTheme() {
  const t = new URLSearchParams(window.location.search).get('tema');
  return THEMES.some((x) => x.id === t) ? t : 'promo';
}

export default function ThemePreview() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.dataset.tema = theme;
    const url = new URL(window.location.href);
    url.searchParams.set('tema', theme);
    window.history.replaceState(null, '', url);
  }, [theme]);

  return (
    <div className="theme-preview" role="group" aria-label="Pré-visualização de paleta">
      {THEMES.map((t) => (
        <button key={t.id} type="button" aria-pressed={t.id === theme} onClick={() => setTheme(t.id)}>
          {t.label}
        </button>
      ))}
    </div>
  );
}
