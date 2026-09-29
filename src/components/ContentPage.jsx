import { useState } from 'react';
import ContentCard from './ContentCard.jsx';
import Disclosure from './Disclosure.jsx';
import { ArrowLeft, User } from './Icons.jsx';
import { Duration, Media, PlayBadge } from './Media.jsx';
import { useContent } from '../i18n.jsx';

// Selo com a logo da empresa patrocinadora, sobre o canto do vídeo (só em conteúdo com apoio)
function SponsorBadge({ sponsor }) {
  const { page } = useContent();
  if (!sponsor) return null;
  return (
    <span className="cp-player-sponsor">
      <span className="cp-player-sponsor-label">{page.supportedBy}</span>
      {sponsor.logo ? (
        <img src={sponsor.logo} alt={sponsor.name} style={{ '--logo-h': `${Math.round((sponsor.logoHeight ?? 48) * 0.5)}px` }} />
      ) : (
        <strong>{sponsor.name}</strong>
      )}
    </span>
  );
}

// Player: usa o vídeo hospedado no próprio site (videoSrc). Sem arquivo ainda, mostra a capa
// e avisa ao clicar, em vez de um botão que não faz nada.
function VideoPlayer({ item }) {
  const { page } = useContent();
  const [asked, setAsked] = useState(false);
  const [playing, setPlaying] = useState(false);

  if (item.videoSrc) {
    return (
      <div className="cp-player">
        {/* O selo sai da frente enquanto o vídeo toca */}
        {!playing && <SponsorBadge sponsor={item.sponsorInfo} />}
        <video controls preload="none" poster={item.image} src={item.videoSrc} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
          {item.captionsSrc && <track kind="captions" srcLang="pt" label="Português" src={item.captionsSrc} default />}
        </video>
      </div>
    );
  }

  return (
    <div className="cp-player">
      <button type="button" className="cp-player-poster" onClick={() => setAsked(true)} aria-label={page.watch(item.title)}>
        <Media src={item.image} focus={item.focus} className="cp-player-media">
          <PlayBadge large />
          {item.duration && <Duration>{item.duration}</Duration>}
          <SponsorBadge sponsor={item.sponsorInfo} />
        </Media>
      </button>
      {asked && (
        <p className="cp-player-note" role="status">
          {page.videoSoon}
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
  const { event, page, sponsorLine, ui } = useContent();
  const { speakers } = item;
  const facts = [
    [page.format, item.isVideo ? ui.video : ui.text],
    [page.topic, item.topicLabel],
    [ui.duration, item.duration],
    [page.event, `${event.name} · ${event.city}`],
  ].filter(([, value]) => value);

  return (
    <aside className="cp-sidebar">
      {/* Conteúdo patrocinado: bloco com a logo da empresa (separado do logo Medscape, que fica só no cabeçalho/rodapé) */}
      {item.sponsorInfo && (
        <section className="cp-side-block cp-sponsor-block" aria-labelledby="cp-sponsor-title">
          <h2 id="cp-sponsor-title" className="cp-side-title">{page.supportedBy}</h2>
          <div className="cp-sponsor-logo">
            {item.sponsorInfo.logo ? (
              <img src={item.sponsorInfo.logo} alt={item.sponsorInfo.name} style={{ height: `${Math.round((item.sponsorInfo.logoHeight ?? 48) * 0.95)}px` }} />
            ) : (
              <span>{item.sponsorInfo.name}</span>
            )}
          </div>
          <p className="cp-sponsor-note">
            {sponsorLine([item.sponsorInfo.name])}.
          </p>
        </section>
      )}
      <section className="cp-side-block" aria-labelledby="cp-speakers-title">
        <h2 id="cp-speakers-title" className="cp-side-title">
          {speakers.length > 1 ? page.experts : page.expert}
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
          {item.isVideo ? page.aboutVideo : page.aboutText}
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
  const { event, page, relatedContent, sponsorLine, ui } = useContent();
  if (!item) {
    return (
      <section className="container cp-missing">
        <Disclosure />
        <h1>{page.notFound}</h1>
        <p>{page.notFoundText}</p>
        <a className="btn btn--dark" href="#/">{page.notFoundBack}</a>
      </section>
    );
  }

  const related = relatedContent(item);

  return (
    <article className="cp">
      <header className="cp-hero">
        <div className="container cp-hero-inner">
          {/* Só no celular: aviso obrigatório no topo da página */}
          <Disclosure />
          <div className="cp-hero-text">
            <a className="cp-back" href="#/"><ArrowLeft /> {page.back}</a>
            <p className="cp-kicker">
              <span className="cp-kicker-event">{event.name}</span>
              <span aria-hidden="true"> • </span>
              {item.kicker}
              {item.topicLabel && <span className="cp-kicker-topic">{item.topicLabel}</span>}
            </p>
            <h1 className="cp-title">{item.title}</h1>
            {/* Identificação exigida pelas diretrizes Medscape para conteúdo com apoio de empresa */}
            {item.sponsor && (
              <p className="cp-sponsor">{sponsorLine([item.sponsor])}</p>
            )}
            <p className="cp-summary">{item.summary}</p>
          </div>
          {/* Arte da cidade do evento, igual em todas as páginas internas (as formas já vêm na imagem) */}
          <div className="cp-hero-art" aria-hidden="true">
            <img src={event.contentArt} alt="" width="1300" height="811" fetchPriority="high" />
          </div>
        </div>
      </header>

      <section className="container cp-main" aria-label={item.isVideo ? ui.video : ui.text}>
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
            <h2 id="cp-related-title" className="section-title">{page.related}</h2>
            <p className="section-sub">{page.relatedSub(event.name)}</p>
          </div>
          <div className="carousel-track">
            {related.map((r) => <ContentCard key={r.id} item={r} />)}
          </div>
        </section>
      )}
    </article>
  );
}
