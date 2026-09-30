import { Media } from './Media.jsx';
import { useContent } from '../i18n.jsx';
import { trackCard } from '../analytics.js';

/*
  Lista de notícias em layout editorial. Com quatro ou mais itens, o primeiro vira destaque com foto
  grande e dois ficam ao lado; o restante desce em duas colunas. Com menos, tudo vira linha simples —
  é o que acontece quando a listagem está filtrada por uma área com poucos conteúdos.
  Cada item traz o selo de natureza (Editorial / Conteúdo patrocinado) antes do clique.
*/

function Kind({ item }) {
  const { ui } = useContent();
  return (
    <span className={`tx-kicker${item.sponsored ? ' tx-kicker--sponsored' : ''}`}>
      {item.sponsored ? ui.sponsoredBadge : ui.editorial}
    </span>
  );
}

function Meta({ item }) {
  const { topicLabel, ui } = useContent();
  const topic = topicLabel(item.topic);
  return (
    <p className="tx-meta">
      {topic && <span>{topic}</span>}
      <span>{item.dateLabel}</span>
      {item.readTime && <span className="tx-meta-read">{ui.readTime(item.readTime)}</span>}
    </p>
  );
}

// Identificação exigida pelas diretrizes Medscape para conteúdo com apoio de empresa
function Sponsor({ item }) {
  const { sponsorLine } = useContent();
  if (!item.sponsored) return null;
  return <p className="tx-sponsor">{sponsorLine([item.sponsor])}</p>;
}

function Row({ item, index, origin }) {
  return (
    <li className="tx-row">
      <a className="tx-row-link" href={item.href} onClick={() => trackCard(item, index, origin)}>
        <span className="tx-row-body">
          <Kind item={item} />
          <span className="tx-title">{item.title}</span>
          <Meta item={item} />
          <Sponsor item={item} />
        </span>
        <Media src={item.image} className="tx-thumb" />
      </a>
    </li>
  );
}

export default function NewsList({ items, origin = 'noticias' }) {
  if (!items.length) return null;

  if (items.length < 4) {
    return (
      <ul className="tx-list tx-list--plain">
        {items.map((item, i) => <Row key={item.id} item={item} index={i} origin={origin} />)}
      </ul>
    );
  }

  const [lead, ...others] = items;
  const side = others.slice(0, 2);
  const list = others.slice(2);

  return (
    <>
      <div className="tx-top">
        <a className="tx-lead" href={lead.href} onClick={() => trackCard(lead, 0, origin)}>
          <Media src={lead.image} className="tx-lead-media" />
          <span className="tx-lead-body">
            <Kind item={lead} />
            <span className="tx-lead-title">{lead.title}</span>
            <Meta item={lead} />
            <span className="tx-lead-dek">{lead.description}</span>
            <Sponsor item={lead} />
          </span>
        </a>

        <ul className="tx-side">
          {side.map((item, i) => <Row key={item.id} item={item} index={i + 1} origin={origin} />)}
        </ul>
      </div>

      <ul className="tx-list">
        {list.map((item, i) => <Row key={item.id} item={item} index={i + 3} origin={origin} />)}
      </ul>
    </>
  );
}
