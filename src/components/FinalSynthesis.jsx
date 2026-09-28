import { ArrowRight } from './Icons.jsx';
import { Duration, Media, PlayBadge } from './Media.jsx';
import { finalSynthesis as s } from '../data/content.js';
import { contentHref } from '../hooks/useRoute.js';

export default function FinalSynthesis() {
  return (
    <section id="sintese" className="synthesis" aria-labelledby="sintese-title">
      <div className="container synthesis-inner">
        <div className="synthesis-text">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 id="sintese-title" className="synthesis-title">
            {s.title[0]}<br />{' '}{s.title[1]}
          </h2>
          <p className="synthesis-lead">{s.description}</p>
          <a className="btn btn--dark" href={contentHref('sintese')}>
            Assistir à síntese <ArrowRight />
          </a>
        </div>
        <a className="synthesis-video" href={contentHref('sintese')} aria-label={`Assistir à síntese final, ${s.duration}`}>
          <Media src={s.image} className="synthesis-media">
            <PlayBadge large />
            <Duration>{s.duration}</Duration>
          </Media>
        </a>
      </div>
    </section>
  );
}
