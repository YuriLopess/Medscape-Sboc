import Disclosure from './Disclosure.jsx';
import { ArrowRight, Search } from './Icons.jsx';
import { Media } from './Media.jsx';
import { useContent } from '../i18n.jsx';
import { topicHref } from '../hooks/useRoute.js';

/*
  Link quebrado, conteúdo ainda não publicado ou área desconhecida na URL.
  Em vez de um beco sem saída, oferece os caminhos de volta: a Home, a busca e as seis áreas.
*/
export default function NotFound() {
  const { page, topics } = useContent();

  return (
    <article className="nf">
      <header className="nf-hero">
        <div className="container nf-hero-inner">
          <div className="nf-hero-text">
            <Disclosure />
            <h1 className="lp-title">{page.notFound}</h1>
            <p className="nf-text">{page.notFoundText}</p>
            <div className="nf-actions">
              <a className="btn btn--dark" href="#/">{page.notFoundBack} <ArrowRight /></a>
              <a className="btn btn--outline" href="#/busca"><Search /> {page.notFoundSearch}</a>
            </div>
          </div>
          {/* Número decorativo, só no desktop */}
          <p className="nf-code" aria-hidden="true">404</p>
        </div>
      </header>

      <section className="container nf-areas" aria-labelledby="nf-areas-title">
        <h2 id="nf-areas-title" className="nf-areas-title">{page.notFoundAreas}</h2>
        <ul className="nf-grid" data-stagger>
          {topics.map((t) => (
            <li key={t.id}>
              <a className="nf-area" href={topicHref(t.id)}>
                <Media src={t.cover} className="nf-area-media" />
                <span className="nf-area-name">{t.label}</span>
                <ArrowRight className="nf-area-arrow" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
