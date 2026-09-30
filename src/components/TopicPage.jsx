import Breadcrumb from './Breadcrumb.jsx';
import ContentCard from './ContentCard.jsx';
import NewsList from './NewsList.jsx';
import { ArrowRight } from './Icons.jsx';
import { Duration, Media, PlayBadge } from './Media.jsx';
import { useContent } from '../i18n.jsx';
import { listingHref, topicHref } from '../hooks/useRoute.js';
import { trackCard } from '../analytics.js';

// Card principal da área: imagem à esquerda, texto à direita
function Highlight({ item }) {
  const { sponsorLine, ui } = useContent();
  const isVideo = item.type !== 'analise';
  return (
    <a className="tp-highlight" href={item.href} onClick={() => trackCard(item, 0, 'destaque-area')}>
      <Media src={item.image} focus={item.focus} className="tp-highlight-media">
        {isVideo && <PlayBadge large />}
        {item.duration && <Duration>{item.duration}</Duration>}
      </Media>
      <span className="tp-highlight-body">
        <span className="eyebrow">{ui.topicHighlight}</span>
        <span className="tp-highlight-title">{item.title}</span>
        <span className="tp-highlight-dek">{item.description}</span>
        <span className={`tp-highlight-kind${item.sponsored ? ' tp-highlight-kind--sponsored' : ''}`}>
          {item.sponsored ? sponsorLine([item.sponsor]) : `${ui.editorial} · ${item.dateLabel}`}
        </span>
      </span>
    </a>
  );
}

// Módulo de conteúdo especial (handoff, pág. 13). Só aparece quando a área tem um módulo aprovado.
function SpecialModule({ module }) {
  return (
    <section className="tp-special" aria-labelledby="tp-special-title">
      <p className="tp-special-kicker">{module.kicker}</p>
      <h2 id="tp-special-title" className="tp-special-title">{module.title}</h2>
      <p className="tp-special-note">{module.sponsor}</p>
      <a className="btn btn--dark" href={module.href}>{module.cta} <ArrowRight /></a>
    </section>
  );
}

export default function TopicPage({ topic }) {
  const { topics, ui } = useContent();
  // O destaque já abre a página; as listas abaixo mostram o restante
  const rest = (list) => list.filter((i) => i.id !== topic.highlight?.id);
  const news = rest(topic.news);
  const videos = rest(topic.videos);

  return (
    <article className="tp">
      <header className="tp-hero">
        <div className="container">
          <Breadcrumb topic={topic.id} />
          <p className="tp-kicker">{ui.topicKicker}</p>
          <h1 className="tp-title">{topic.label}</h1>
          <p className="tp-sub">{ui.topicSub}</p>
        </div>
      </header>

      <div className="container tp-main">
        {topic.highlight && <Highlight item={topic.highlight} />}

        {news.length > 0 && (
          <section data-reveal className="tp-block" aria-labelledby="tp-news-title">
            <div className="tp-block-head">
              <h2 id="tp-news-title" className="section-title">{ui.newsHeading}</h2>
              <a className="tx-all" href={listingHref('noticias', topic.id)}>{ui.seeAllNews} <ArrowRight /></a>
            </div>
            <NewsList items={news} origin={`area-${topic.id}`} />
          </section>
        )}

        {videos.length > 0 && (
          <section data-reveal className="tp-block" aria-labelledby="tp-videos-title">
            <div className="tp-block-head">
              <h2 id="tp-videos-title" className="section-title">{ui.videosHeading}</h2>
              <a className="tx-all" href={listingHref('videos', topic.id)}>{ui.seeAllVideos} <ArrowRight /></a>
            </div>
            <div className="cards-grid">
              {videos.map((item, i) => (
                <ContentCard key={item.id} item={item} index={i} origin={`area-${topic.id}`} />
              ))}
            </div>
          </section>
        )}

        {topic.special && <SpecialModule module={topic.special} />}

        {topic.items.length === 0 && <p className="empty-state">{ui.topicEmpty}</p>}

        {/* Retorno e descoberta: as outras áreas ficam a um clique, sem usar o Voltar do navegador */}
        <section data-reveal className="tp-others" aria-labelledby="tp-others-title">
          <h2 id="tp-others-title" className="tp-others-title">{ui.areasTitle}</h2>
          <ul className="tp-others-list">
            {topics.filter((t) => t.id !== topic.id).map((t) => (
              <li key={t.id}><a className="chip" href={topicHref(t.id)}>{t.label}</a></li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
