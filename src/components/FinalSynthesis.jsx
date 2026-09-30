import { ArrowRight } from './Icons.jsx';
import { Duration, Media, PlayBadge } from './Media.jsx';
import { useContent } from '../i18n.jsx';
import { contentHref } from '../hooks/useRoute.js';

export default function FinalSynthesis() {
  const { finalSynthesis: s, finalVideos, ui } = useContent();
  const [first] = finalVideos;

  return (
    <section id="sintese" className="synthesis" aria-labelledby="sintese-title">
      {/* Mesmos arcos do banner, passando por trás do vídeo */}
      <svg className="synthesis-arcs" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
        <path d="M430 -10 C 520 180, 640 300, 1010 330" />
        <path d="M470 610 C 560 420, 720 330, 1010 300" />
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
                <a className="synthesis-part" href={contentHref(v.id)}>
                  <span className="synthesis-part-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span className="synthesis-part-title">{v.title}</span>
                  <span className="synthesis-part-duration"><span className="sr-only">{ui.duration} </span>{v.duration}</span>
                </a>
              </li>
            ))}
          </ol>

          <a className="btn btn--light" href={contentHref(first.id)}>
            {ui.watchSynthesis} <ArrowRight />
          </a>
        </div>

        {/* Parte 1 em destaque, com o título sobre a imagem */}
        <a className="synthesis-video" href={contentHref(first.id)}>
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
