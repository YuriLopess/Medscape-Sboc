import TopicIcon from './TopicIcons.jsx';
import { ArrowLeft } from './Icons.jsx';
import { useContent } from '../i18n.jsx';
import { synthesisHref, topicHref } from '../hooks/useRoute.js';
import { SYNTHESIS } from '../data/content.js';

/*
  Faixa que fecha a página de conteúdo devolvendo o leitor à área de onde ele veio.
  Espelha a trilha do topo: a página abre e fecha no mesmo lugar, sem depender do Voltar do navegador.
  Traz o ícone da área e o que ainda há para ver lá, para o retorno ser um convite e não só um botão.
*/
export default function ReturnBand({ topic }) {
  const { getTopic, page, ui } = useContent();
  const isSynthesis = topic === SYNTHESIS;
  const area = isSynthesis ? null : getTopic(topic);
  if (!area && !isSynthesis) return null;

  const label = isSynthesis ? page.synthesisKicker : area.label;

  return (
    <nav className="rb" aria-label={ui.backToTopic(label)}>
      <a className="container rb-link" href={isSynthesis ? synthesisHref : topicHref(topic)}>
        {area && <span className="rb-icon"><TopicIcon topic={topic} /></span>}
        <span className="rb-body">
          <span className="rb-kicker"><ArrowLeft /> {ui.backTo}</span>
          <span className="rb-line">
            <span className="rb-title">{label}</span>
            {area && <span className="rb-count">{ui.areaCount(area.videos.length, area.news.length)}</span>}
          </span>
        </span>
      </a>
    </nav>
  );
}
