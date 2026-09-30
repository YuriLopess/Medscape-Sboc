import FinalSynthesis from './FinalSynthesis.jsx';
import TopicIcon from './TopicIcons.jsx';
import { ArrowRight } from './Icons.jsx';
import { useContent } from '../i18n.jsx';
import { topicHref } from '../hooks/useRoute.js';

/*
  Página de encerramento (handoff, pág. 11): abre com os dois vídeos finais e, abaixo,
  traz um bloco por área terapêutica com o resumo e o caminho de volta para os conteúdos.
*/
export default function SynthesisPage() {
  const { event, topics, ui } = useContent();

  return (
    <article className="sy">
      <FinalSynthesis />

      <section className="section container sy-areas" aria-labelledby="sy-areas-title">
        <h1 id="sy-areas-title" className="section-title">{ui.synthesisTitle(event.name)}</h1>
        <p className="section-sub">{ui.synthesisSub}</p>

        <ul className="sy-list">
          {topics.map((t) => (
            <li key={t.id} data-reveal>
              <a className="sy-row" href={topicHref(t.id)}>
                <span className="sy-icon"><TopicIcon topic={t.id} /></span>
                <span className="sy-row-body">
                  <span className="sy-row-title">{t.label}</span>
                  <span className="sy-row-sub">{ui.synthesisAreaSub}</span>
                  <span className="sy-row-count">{ui.areaCount(t.videos.length, t.news.length)}</span>
                </span>
                <span className="sy-cta">{ui.explore} <ArrowRight /></span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
