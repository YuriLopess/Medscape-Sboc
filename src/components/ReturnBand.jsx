import { ArrowLeft } from './Icons.jsx';
import { useContent } from '../i18n.jsx';
import { synthesisHref, topicHref } from '../hooks/useRoute.js';
import { SYNTHESIS } from '../data/content.js';

// Botão que fecha a página de conteúdo devolvendo à área de origem, sem depender do Voltar do navegador.
// Nos vídeos da Síntese, que não pertencem a uma área, leva para a Síntese final.
export default function ReturnBand({ topic }) {
  const { getTopic, page, ui } = useContent();
  const isSynthesis = topic === SYNTHESIS;
  const area = isSynthesis ? null : getTopic(topic);
  if (!area && !isSynthesis) return null;

  const label = isSynthesis ? page.synthesisKicker : area.label;

  return (
    <div className="container cp-return">
      <a className="btn btn--outline" href={isSynthesis ? synthesisHref : topicHref(topic)}>
        <ArrowLeft /> {ui.backToTopic(label)}
      </a>
    </div>
  );
}
