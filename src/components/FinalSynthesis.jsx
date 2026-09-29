import { ArrowRight } from './Icons.jsx';
import { Duration, Media, PlayBadge } from './Media.jsx';
import { finalSynthesis as s, finalVideos } from '../data/content.js';
import { contentHref } from '../hooks/useRoute.js';

export default function FinalSynthesis() {
  const [first] = finalVideos;

  return (
    <section id="sintese" className="synthesis" aria-labelledby="sintese-title">
      <div className="container synthesis-inner">
        <div className="synthesis-text">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 id="sintese-title" className="synthesis-title">
            {s.title[0]}<br />{' '}{s.title[1]}
          </h2>
          <p className="synthesis-lead">{s.description}</p>
          <a className="btn btn--dark" href={contentHref(first.id)}>
            Assistir à síntese <ArrowRight />
          </a>
        </div>

        {/* Os 2 vídeos finais lado a lado */}
        <ul className="synthesis-videos">
          {finalVideos.map((v, i) => (
            <li key={v.id}>
              <a className="synthesis-video" href={contentHref(v.id)}>
                <Media src={v.image} className="synthesis-media">
                  <PlayBadge large />
                  <Duration>{v.duration}</Duration>
                </Media>
                <span className="synthesis-video-body">
                  <span className="synthesis-video-kicker">Parte {i + 1}</span>
                  <span className="synthesis-video-title">{v.title}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
