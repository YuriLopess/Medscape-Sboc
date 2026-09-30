import Breadcrumb from './Breadcrumb.jsx';
import { Duration, Media, PlayBadge } from './Media.jsx';
import { useContent } from '../i18n.jsx';
import { SYNTHESIS } from '../data/content.js';
import { trackCard } from '../analytics.js';

// Abertura da Síntese final: faixa azul com as duas conversas de encerramento, lado a lado e do mesmo tamanho
export default function FinalSynthesis() {
  const { finalSynthesis: s, finalVideos, ui } = useContent();

  return (
    <header className="synthesis" aria-labelledby="sintese-title">
      {/* Arcos do banner no canto superior direito, no espaço livre ao lado do título */}
      <svg className="synthesis-arcs" viewBox="0 0 846 558" preserveAspectRatio="none" aria-hidden="true">
        <path d="M110 0 C 50 150, 60 330, 260 440 C 380 505, 500 540, 610 560" />
        <path d="M160 0 C 90 160, 100 320, 280 420 C 450 510, 700 545, 846 575" />
      </svg>

      <div className="container">
        <Breadcrumb topic={SYNTHESIS} />
        <h1 id="sintese-title" className="synthesis-title">
          {s.title[0]}<br />{' '}{s.title[1]}
        </h1>
        <p className="synthesis-lead">{s.description}</p>

        <ol className="sy-videos" data-reveal>
          {finalVideos.map((v, i) => (
            <li key={v.id}>
              <a className="sy-video" href={v.href} onClick={() => trackCard(v, i, 'sintese')}>
                <Media src={v.image} className="sy-video-media">
                  <PlayBadge large />
                  <Duration>{v.duration}</Duration>
                </Media>
                <span className="sy-video-kicker">{ui.part(i + 1)}</span>
                <span className="sy-video-title">{v.title}</span>
                <span className="sy-video-dek">{v.description}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </header>
  );
}
