import { useState } from 'react';
import ContentCard from './ContentCard.jsx';
import { ArrowLeft, User } from './Icons.jsx';
import { Duration, Media, PlayBadge } from './Media.jsx';
import { event, relatedContent, supportedBy } from '../data/content.js';

// Player: usa o vídeo hospedado no próprio site (videoSrc). Sem arquivo ainda, mostra a capa
// e avisa ao clicar, em vez de um botão que não faz nada.
function VideoPlayer({ item }) {
  const [asked, setAsked] = useState(false);

  if (item.videoSrc) {
    return (
      <div className="cp-player">
        <video controls preload="none" poster={item.image} src={item.videoSrc}>
          {item.captionsSrc && <track kind="captions" srcLang="pt" label="Português" src={item.captionsSrc} default />}
        </video>
      </div>
    );
  }

  return (
    <div className="cp-player">
      <button type="button" className="cp-player-poster" onClick={() => setAsked(true)} aria-label={`Assistir: ${item.title}`}>
        <Media src={item.image} focus={item.focus} className="cp-player-media">
          <PlayBadge large />
          {item.duration && <Duration>{item.duration}</Duration>}
        </Media>
      </button>
      {asked && (
        <p className="cp-player-note" role="status">
          O vídeo será publicado aqui assim que a gravação final for aprovada.
        </p>
      )}
    </div>
  );
}

// Iniciais para o avatar quando não há foto ("Dra. Ana Souza" → "AS")
const initials = (name) =>
  name
    .replace(/^(dra?|prof(a|\.)?)\.?\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .filter((_, i, all) => i === 0 || i === all.length - 1)
    .join('')
    .toUpperCase();

function Avatar({ speaker }) {
  if (speaker.photo) return <img className="cp-avatar" src={speaker.photo} alt="" width="64" height="64" />;
  if (speaker.placeholder) return <span className="cp-avatar" aria-hidden="true"><User /></span>;
  return <span className="cp-avatar cp-avatar--initials" aria-hidden="true">{initials(speaker.name)}</span>;
}

// Coluna lateral: quem fala + ficha do conteúdo
function Sidebar({ item }) {
  const { speakers } = item;
  const facts = [
    ['Formato', item.isVideo ? 'Vídeo' : 'Análise'],
    ['Tema', item.topicLabel],
    ['Duração', item.duration],
    ['Evento', `${event.name} · ${event.city}`],
  ].filter(([, value]) => value);

  return (
    <aside className="cp-sidebar">
      <section className="cp-side-block" aria-labelledby="cp-speakers-title">
        <h2 id="cp-speakers-title" className="cp-side-title">
          {speakers.length > 1 ? 'Especialistas' : 'Especialista'}
        </h2>
        <ul className="cp-speakers">
          {speakers.map((s) => (
            <li key={s.name}>
              <Avatar speaker={s} />
              <div>
                <p className="cp-speaker-name">{s.name}</p>
                <p className="cp-speaker-role">{s.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="cp-side-block" aria-labelledby="cp-facts-title">
        <h2 id="cp-facts-title" className="cp-side-title">
          {item.isVideo ? 'Sobre este vídeo' : 'Sobre esta análise'}
        </h2>
        <dl className="cp-facts">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </aside>
  );
}

export default function ContentPage({ item }) {
  if (!item) {
    return (
      <section className="container cp-missing">
        <h1>Conteúdo não encontrado</h1>
        <p>O link pode estar incompleto ou o conteúdo ainda não foi publicado.</p>
        <a className="btn btn--dark" href="#/">Voltar para a cobertura</a>
      </section>
    );
  }

  const related = relatedContent(item);

  return (
    <article className="cp">
      <header className="cp-hero">
        <div className="container cp-hero-inner">
          <div className="cp-hero-text">
            <a className="cp-back" href="#/"><ArrowLeft /> Voltar para a cobertura</a>
            <p className="cp-kicker">
              <span className="cp-kicker-event">{event.name}</span>
              <span aria-hidden="true"> • </span>
              {item.kicker}
              {item.topicLabel && <span className="cp-kicker-topic">{item.topicLabel}</span>}
            </p>
            <h1 className="cp-title">{item.title}</h1>
            {/* Identificação exigida pelas diretrizes Medscape para conteúdo com apoio de empresa */}
            {item.sponsor && (
              <p className="cp-sponsor">Desenvolvido pela Medscape com o apoio {supportedBy([item.sponsor])}</p>
            )}
            <p className="cp-summary">{item.summary}</p>
          </div>
          {/* Arte da cidade do evento, igual em todas as páginas internas (as formas já vêm na imagem) */}
          <div className="cp-hero-art" aria-hidden="true">
            <img src={event.contentArt} alt="" width="1300" height="811" fetchPriority="high" />
          </div>
        </div>
      </header>

      <section className="container cp-main" aria-label={item.isVideo ? 'Vídeo' : 'Análise'}>
        <div className="cp-primary">
          {item.isVideo ? (
            <VideoPlayer item={item} />
          ) : (
            <div className="cp-body">
              {item.body.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </div>
          )}
        </div>
        <Sidebar item={item} />
      </section>

      {related.length > 0 && (
        <section className="section cp-related" aria-labelledby="cp-related-title">
          <div className="container">
            <h2 id="cp-related-title" className="section-title">Continue explorando</h2>
            <p className="section-sub">Outros vídeos e análises da cobertura do {event.name}.</p>
          </div>
          <div className="carousel-track">
            {related.map((r) => <ContentCard key={r.id} item={r} />)}
          </div>
        </section>
      )}
    </article>
  );
}
