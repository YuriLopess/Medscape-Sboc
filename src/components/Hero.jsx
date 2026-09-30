import { ArrowRight, Pin } from './Icons.jsx';
import Disclosure from './Disclosure.jsx';
import { Media } from './Media.jsx';
import { useContent } from '../i18n.jsx';

export default function Hero() {
  const { event, ui } = useContent();
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Media
        src={event.heroImage}
        alt={event.heroAlt}
        className="hero-media"
      />
      <svg className="hero-arcs" viewBox="0 0 846 558" preserveAspectRatio="none" aria-hidden="true">
        <path d="M110 0 C 50 150, 60 330, 260 440 C 380 505, 500 540, 610 560" />
        {/* As duas linhas terminam abaixo da borda inferior (y > 558), saindo do banner */}
        <path d="M160 0 C 90 160, 100 320, 280 420 C 450 510, 700 545, 846 575" />
      </svg>
      {/* Só no celular: aviso obrigatório em selo de vidro no alto da foto */}
      <div className="container hero-disclosure"><Disclosure variant="dark" /></div>

      <div className="container hero-content">
        <p className="hero-event">{event.name}</p>
        <p className="hero-dates">{event.dates} • {event.city}</p>
        <h1 id="hero-title" className="hero-title">
          {/* Uma linha por bloco: na abertura as linhas entram uma depois da outra */}
          <span className="hero-title-line">{event.title[0]}</span>{' '}
          <span className="hero-title-line">{event.title[1]}</span>
        </h1>
        <p className="hero-lead">{event.lead}</p>
        <a className="btn btn--light" href="#destaques">
          {ui.exploreCoverage} <ArrowRight />
        </a>
        <div className="hero-meta">
          <span><Pin /> {event.city}</span>
          <span className="hero-meta-divider" aria-hidden="true" />
          <span>{event.tagline}</span>
        </div>
      </div>

      <p className="hero-caption">
        {event.heroCaption.map((line, i) => (
          <span key={i}>{line}</span>
        ))}
      </p>
    </section>
  );
}
