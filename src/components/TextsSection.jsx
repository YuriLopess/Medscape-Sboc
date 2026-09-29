import ContentCard from './ContentCard.jsx';
import { texts } from '../data/content.js';

// Seção simples com os 8 textos. Versão inicial: layout e filtros serão aprofundados depois.
export default function TextsSection() {
  return (
    <section id="textos" className="section texts" aria-labelledby="textos-title">
      <div className="container">
        <h2 id="textos-title" className="section-title">Textos</h2>
        <p className="section-sub">Análises escritas sobre os estudos e debates do congresso.</p>
        <div className="texts-grid">
          {texts.map((t) => <ContentCard key={t.id} item={t} />)}
        </div>
      </div>
    </section>
  );
}
