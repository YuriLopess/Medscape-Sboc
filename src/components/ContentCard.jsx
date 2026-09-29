import { Doc } from './Icons.jsx';
import { Duration, Media, PlayBadge } from './Media.jsx';
import { supportedBy } from '../data/content.js';
import { contentHref } from '../hooks/useRoute.js';

// Card de vídeo ou análise. Abre a página interna do conteúdo (#/conteudo/<id>).
export default function ContentCard({ item, size = 'md' }) {
  const isVideo = item.type !== 'analise';
  const sponsored = Boolean(item.sponsor);

  return (
    <article className={`card card--${size}${sponsored ? ' card--sponsored' : ''}`}>
      <a className="card-link" href={item.href ?? contentHref(item.id)}>
        <Media src={item.image} focus={item.focus} className="card-media">
          {isVideo ? <PlayBadge /> : <span className="play-badge" aria-hidden="true"><Doc /></span>}
          {item.duration && <Duration>{item.duration}</Duration>}
        </Media>
        <div className="card-body">
          <span className="card-kind">{isVideo ? 'Vídeo' : 'Texto'}</span>
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.description}</p>
        </div>
        {/* Identificação exigida pelas diretrizes Medscape para conteúdo com apoio de empresa.
            Fica no pé do card para as imagens de todos os cards ficarem alinhadas. */}
        {sponsored && (
          <div className="card-sponsor">
            Desenvolvido pela Medscape com o apoio {supportedBy([item.sponsor])}
          </div>
        )}
      </a>
    </article>
  );
}
