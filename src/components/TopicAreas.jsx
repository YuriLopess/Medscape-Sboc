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
                {/* Arcos do banner: se desenham sobre a foto no hover */}
                <svg className="area-arcs" viewBox="0 0 846 558" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M110 0 C 50 150, 60 330, 260 440 C 380 505, 500 540, 610 560" />
                  <path d="M160 0 C 90 160, 100 320, 280 420 C 450 510, 700 545, 846 575" />
                </svg>
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
