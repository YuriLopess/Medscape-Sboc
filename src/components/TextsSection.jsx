import { ArrowRight } from './Icons.jsx';
import { Media } from './Media.jsx';
import { useContent } from '../i18n.jsx';
import { contentHref } from '../hooks/useRoute.js';

// Layout editorial no padrão das listas de notícias do Medscape:
// 1 texto em destaque + 2 ao lado, e o restante em lista de duas colunas com miniatura à direita.

// Linha de metadados: origem | tempo de leitura
function Meta({ item }) {
  const { event, ui } = useContent();
  return (
    <p className="tx-meta">
      <span>{ui.coverageOf(event.name)}</span>
      {item.readTime && <><span className="tx-sep" aria-hidden="true">|</span>{ui.readTime(item.readTime)}</>}
    </p>
  );
}

// Identificação exigida pelas diretrizes Medscape para conteúdo com apoio de empresa
function Sponsor({ item }) {
  const { sponsorLine } = useContent();
  if (!item.sponsor) return null;
  return <p className="tx-sponsor">{sponsorLine([item.sponsor])}</p>;
}

function Row({ item, kicker = true }) {
  const { topicLabel } = useContent();
  const topic = topicLabel(item.topic);
  return (
    <li className="tx-row">
      <a className="tx-row-link" href={contentHref(item.id)}>
        <span className="tx-row-body">
          {kicker && topic && <span className="tx-kicker">{topic}</span>}
          <span className="tx-title">{item.title}</span>
          <Meta item={item} />
          <Sponsor item={item} />
        </span>
        <Media src={item.image} className="tx-thumb" />
      </a>
    </li>
  );
}

export default function TextsSection() {
  const { texts, topicLabel, ui } = useContent();
  const [lead, ...others] = texts;
  const side = others.slice(0, 2);
  const list = others.slice(2);

  return (
    <section id="textos" className="section texts" aria-labelledby="textos-title">
      <div className="container">
        <div className="section-head">
          <div>
            <h2 id="textos-title" className="section-title">{ui.textsTitle}</h2>
            <p className="section-sub">{ui.textsSub}</p>
          </div>
        </div>

        <div className="tx-top">
          <a className="tx-lead" href={contentHref(lead.id)}>
            <Media src={lead.image} className="tx-lead-media" />
            <span className="tx-lead-body">
              {topicLabel(lead.topic) && <span className="tx-kicker">{topicLabel(lead.topic)}</span>}
              <span className="tx-lead-title">{lead.title}</span>
              <Meta item={lead} />
              <span className="tx-lead-dek">{lead.description}</span>
              <Sponsor item={lead} />
            </span>
          </a>

          <ul className="tx-side">
            {side.map((t) => <Row key={t.id} item={t} kicker={false} />)}
          </ul>
        </div>

        <div className="tx-list-head">
          <a className="tx-all" href="#explorar">{ui.exploreByTopic} <ArrowRight /></a>
        </div>
        <ul className="tx-list">
          {list.map((t) => <Row key={t.id} item={t} />)}
        </ul>
      </div>
    </section>
  );
}
