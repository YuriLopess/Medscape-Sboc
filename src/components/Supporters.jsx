import { supporters } from '../data/content.js';

// Formas genéricas no lugar dos logotipos reais dos apoiadores
const shapes = {
  triangle: <polygon points="16,3 30,29 2,29" />,
  circle: <circle cx="16" cy="16" r="14" />,
  hexagon: <polygon points="16,2 29,9.5 29,22.5 16,30 3,22.5 3,9.5" />,
  square: <rect x="3" y="3" width="26" height="26" />,
};

export default function Supporters() {
  return (
    <section id="apoiadores" className="section supporters" aria-labelledby="apoiadores-title">
      <div className="container">
        <h2 id="apoiadores-title" className="section-title">Apoiadores</h2>
        <p className="section-sub">Apoiam a difusão de conhecimento e o debate científico.</p>
        <ul className="supporter-list">
          {supporters.map((s) => (
            <li key={s.name}>
              <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">{shapes[s.shape]}</svg>
              <span>{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
