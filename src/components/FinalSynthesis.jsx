import { ArrowRight } from './Icons.jsx';
import { Duration, Media, PlayBadge } from './Media.jsx';
import { useContent } from '../i18n.jsx';
import { trackCard } from '../analytics.js';

// Faixa de abertura da Síntese final: as duas conversas de encerramento da cobertura
export default function FinalSynthesis() {
  const { finalSynthesis: s, finalVideos, ui } = useContent();
  const [first] = finalVideos;

  return (
    <section id="sintese" className="synthesis" aria-labelledby="sintese-title">
      {/* Os mesmos arcos do banner, só na metade do vídeo: descem pela esquerda dele e saem por baixo */}
      <svg className="synthesis-arcs" viewBox="0 0 846 558" preserveAspectRatio="none" aria-hidden="true">
        <path d="M110 0 C 50 150, 60 330, 260 440 C 380 505, 500 540, 610 560" />
        <path d="M160 0 C 90 160, 100 320, 280 420 C 450 510, 700 545, 846 575" />
      </svg>

      <div className="container synthesis-inner" data-reveal>
        <div className="synthesis-text">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 id="sintese-title" className="synthesis-title">
            {s.title[0]}<br />{' '}{s.title[1]}
          </h2>
          <p className="synthesis-lead">{s.description}</p>

          {/* As conversas numeradas: cada linha abre o vídeo correspondente */}
          <ol className="synthesis-parts">
            {finalVideos.map((v, i) => (
              <li key={v.id}>
                <a className="synthesis-part" href={v.href} onClick={() => trackCard(v, i, 'sintese')}>
                  <span className="synthesis-part-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span className="synthesis-part-title">{v.title}</span>
                  <span className="synthesis-part-duration"><span className="sr-only">{ui.duration} </span>{v.duration}</span>
                </a>
              </li>
            ))}
          </ol>

          <a className="btn btn--light" href={first.href} onClick={() => trackCard(first, 0, 'sintese')}>
            {ui.watchSynthesis} <ArrowRight />
          </a>
        </div>

        {/* Parte 1 em destaque, com o título sobre a imagem */}
        <a className="synthesis-video" href={first.href} onClick={() => trackCard(first, 0, 'sintese')}>
          <Media src={first.image} className="synthesis-media">
            <Duration>{first.duration}</Duration>
            <span className="synthesis-caption">
              <PlayBadge large />
              <span className="synthesis-caption-text">
                <span className="synthesis-caption-kicker">{ui.part(1)}</span>
                <span className="synthesis-caption-title">{first.title}</span>
              </span>
            </span>
          </Media>
        </a>
      </div>
    </section>
  );
}
