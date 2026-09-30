import { BrandScroller } from '@/components/ui/brand-scroller';
import { supporters } from '../data/content.js';
import { useContent } from '../i18n.jsx';

// Só as logos (campo "logo" em content.js). Para adicionar um apoiador, inclua um item na lista.
const brands = supporters.map((s) => ({ name: s.name, logo: s.logo, logoHeight: s.logoHeight }));

export default function Supporters() {
  const { ui } = useContent();
  return (
    <section id="apoiadores" data-reveal className="section supporters" aria-labelledby="apoiadores-title">
      <div className="container">
        <h2 id="apoiadores-title" className="section-title">{ui.supportersTitle}</h2>
        <p className="section-sub">{ui.supportersSub}</p>
      </div>

      {/* Lista para leitores de tela; as fileiras animadas são só visuais */}
      <ul className="sr-only">
        {supporters.map((s) => <li key={s.name}>{s.name}</li>)}
      </ul>

      {/* A animação pausa ao passar o mouse e fica parada para quem pediu menos movimento no sistema */}
      <div className="sp-rows">
        <BrandScroller brands={brands} duration="40s" />
      </div>
    </section>
  );
}
