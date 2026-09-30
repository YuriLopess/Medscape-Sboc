import { Doc } from './Icons.jsx';
import { Duration, Media, PlayBadge } from './Media.jsx';
import { useContent } from '../i18n.jsx';
import { trackCard } from '../analytics.js';

// Card de vídeo ou notícia. Abre a página do conteúdo (#/<tema>/<slug>).
// O selo de natureza (Editorial / Conteúdo patrocinado) aparece antes do clique, como pede o handoff.
export default function ContentCard({ item, size = 'md', index = 0, origin = 'card' }) {
  const { sponsorLine, topicLabel, ui } = useContent();
  const isVideo = item.type !== 'analise';
  const sponsored = Boolean(item.sponsor);
  const topic = topicLabel(item.topic);

  return (
    <article className={`card card--${size}${sponsored ? ' card--sponsored' : ''}`}>
      <a className="card-link" href={item.href} onClick={() => trackCard(item, index, origin)}>
        <Media src={item.image} focus={item.focus} className="card-media">
          {isVideo ? <PlayBadge /> : <span className="play-badge" aria-hidden="true"><Doc /></span>}
          {item.duration && <Duration>{item.duration}</Duration>}
        </Media>
        <div className="card-body">
          <span className={`card-kind${sponsored ? ' card-kind--sponsored' : ''}`}>
            {sponsored ? ui.sponsoredBadge : ui.editorial}
          </span>
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.description}</p>
          <p className="card-meta">
            {topic && <span>{topic}</span>}
            <span>{item.dateLabel}</span>
          </p>
        </div>
        {/* Identificação exigida pelas diretrizes Medscape para conteúdo com apoio de empresa.
            Fica no pé do card para as imagens de todos os cards ficarem alinhadas. */}
        {sponsored && <div className="card-sponsor">{sponsorLine([item.sponsor])}</div>}
      </a>
    </article>
  );
}
