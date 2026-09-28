import { BrandScroller, BrandScrollerReverse } from '@/components/ui/brand-scroller';
import { supporters } from '../data/content.js';

// Formas genéricas no lugar dos logotipos reais. Com logo real, preencha "logo" em content.js
// (ex.: logo: 'images/logos/apoiador-a.svg') e a imagem substitui a forma + nome.
const shapes = {
  triangle: <polygon points="16,3 30,29 2,29" />,
  circle: <circle cx="16" cy="16" r="14" />,
  hexagon: <polygon points="16,2 29,9.5 29,22.5 16,30 3,22.5 3,9.5" />,
  square: <rect x="3" y="3" width="26" height="26" rx="2" />,
};

const brands = supporters.map((s) => ({
  name: s.name,
  logo: s.logo,
  icon: <svg viewBox="0 0 32 32" fill="currentColor">{shapes[s.shape]}</svg>,
}));

// Segunda fileira começa em outra ordem, para as duas não andarem "espelhadas"
const shifted = [...brands.slice(2), ...brands.slice(0, 2)];

export default function Supporters() {
  return (
    <section id="apoiadores" className="section supporters" aria-labelledby="apoiadores-title">
      <div className="container">
        <h2 id="apoiadores-title" className="section-title">Apoiadores</h2>
        <p className="section-sub">Apoiam a difusão de conhecimento e o debate científico.</p>
      </div>

      {/* Lista para leitores de tela; as fileiras animadas são só visuais */}
      <ul className="sr-only">
        {supporters.map((s) => <li key={s.name}>{s.name}</li>)}
      </ul>

      {/* A animação pausa ao passar o mouse e fica parada para quem pediu menos movimento no sistema */}
      <div className="sp-rows">
        <BrandScroller brands={brands} duration="45s" />
        <BrandScrollerReverse brands={shifted} duration="45s" />
      </div>
    </section>
  );
}
