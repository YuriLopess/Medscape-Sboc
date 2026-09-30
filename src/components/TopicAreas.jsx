import { ArrowRight, Doc, Play } from './Icons.jsx';
import { Media } from './Media.jsx';
import { useContent } from '../i18n.jsx';
import { topicHref } from '../hooks/useRoute.js';

// "Explore por área terapêutica": a descoberta principal do site (handoff, pág. 5).
// Cards fotográficos, na mesma língua do banner e dos cards de vídeo: foto da área, nome em branco
// e a contagem real de vídeos e notícias. Cada card abre a página da área.
export default function TopicAreas() {
  const { topics, ui } = useContent();

  return (
    <section id="areas" data-reveal className="section areas" aria-labelledby="areas-title">
      <div className="container">
        <h2 id="areas-title" className="section-title">{ui.areasTitle}</h2>
        <p className="section-sub">{ui.areasSub}</p>

        <ul className="areas-grid">
          {topics.map((t, i) => (
            // --i: ordem do card, para a entrada escalonada
            <li key={t.id} style={{ '--i': i }}>
              <a
                className="area-card"
                href={topicHref(t.id)}
                aria-label={`${ui.areaCta(t.label)}: ${ui.areaCount(t.videos.length, t.news.length)}`}
              >
                <Media src={t.cover} className="area-media" />
                <ArrowRight className="area-arrow" />
                <span className="area-name">{t.label}</span>
                <span className="area-meta" aria-hidden="true">
                  {t.videos.length > 0 && <span className="area-tag"><Play />{ui.areaVideos(t.videos.length)}</span>}
                  {t.news.length > 0 && <span className="area-tag"><Doc />{ui.areaNews(t.news.length)}</span>}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
