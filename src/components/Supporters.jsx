import { BrandScroller, BrandScrollerReverse } from '@/components/ui/brand-scroller';
import { supporters } from '../data/content.js';

// Só as logos (campo "logo" em content.js). Para adicionar um apoiador, inclua um item na lista.
const brands = supporters.map((s) => ({ name: s.name, logo: s.logo, logoHeight: s.logoHeight }));

// Segunda fileira começa em outra ordem, para as duas não andarem "espelhadas"
const shifted = [...brands.slice(1), ...brands.slice(0, 1)];

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
        <BrandScroller brands={brands} duration="40s" />
        <BrandScrollerReverse brands={shifted} duration="40s" />
      </div>
    </section>
  );
}
