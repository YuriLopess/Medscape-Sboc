import ComingSoon from './ComingSoon.jsx';
import ContentCard from './ContentCard.jsx';
import NewsList from './NewsList.jsx';
import { useContent } from '../i18n.jsx';
import { listingHref } from '../hooks/useRoute.js';

/*
  Listagem por formato (handoff, págs. 7 e 8). O filtro de área é um link: ele troca a URL
  (#/noticias?tema=pulmao), então o resultado filtrado pode ser compartilhado e recarregado.
*/
export default function ListingPage({ format, topic }) {
  const { listing, topics, ui } = useContent();
  const isVideos = format === 'videos';
  const items = listing(format, topic);
  const published = listing(format, '').length > 0;

  const filters = [{ id: '', label: ui.all }, ...topics.map((t) => ({ id: t.id, label: t.label }))];

  return (
    <article className="lp">
      <header className="lp-hero">
        <div className="container">
          <h1 className="lp-title">{isVideos ? ui.videoListTitle : ui.newsListTitle}</h1>
          <p className="lp-sub">{isVideos ? ui.videoListSub : ui.newsListSub}</p>
        </div>
      </header>

      <div className="container lp-main">
        {/* Nada publicado ainda neste formato: sem filtros nem contagem, só o aviso */}
        {!published ? (
          <ComingSoon text={isVideos ? ui.soonVideos : ui.soonNews} />
        ) : (
        <>
        <div className="chips lp-filters" role="group" aria-label={ui.filterByArea}>
          {filters.map((f) => (
            <a
              key={f.id || 'todos'}
              className={`chip${f.id === topic ? ' is-active' : ''}`}
              href={listingHref(format, f.id)}
              aria-current={f.id === topic ? 'true' : undefined}
            >
              {f.label}
            </a>
          ))}
        </div>

        <p className="lp-count" aria-live="polite">{isVideos ? ui.areaVideos(items.length) : ui.areaNews(items.length)}</p>

        {items.length === 0 && <p className="empty-state">{ui.listingEmpty}</p>}

        {isVideos ? (
          <div className="cards-grid" data-stagger>
            {items.map((item, i) => (
              <ContentCard key={item.id} item={item} index={i} origin="listagem-videos" />
            ))}
          </div>
        ) : (
          <NewsList items={items} origin="listagem-noticias" />
        )}
        </>
        )}
      </div>
    </article>
  );
}
