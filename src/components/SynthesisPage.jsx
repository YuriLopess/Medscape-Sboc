import FinalSynthesis from './FinalSynthesis.jsx';
import { ArrowRight } from './Icons.jsx';
import { useContent } from '../i18n.jsx';
import { topicHref } from '../hooks/useRoute.js';

/*
  Página de encerramento (handoff, pág. 11): abre com as duas conversas finais e, abaixo,
  traz um bloco curto por área terapêutica, com o resumo e o caminho para os conteúdos dela.
*/
export default function SynthesisPage() {
  const { topics, ui } = useContent();

  return (
    <article className="sy">
      <FinalSynthesis />

      <section className="section container sy-areas" aria-labelledby="sy-areas-title">
        <h2 id="sy-areas-title" className="section-title">{ui.synthesisSub}</h2>
        <p className="section-sub">{ui.synthesisAreasSub}</p>

        <ul className="sy-grid" data-reveal>
          {topics.map((t) => (
            <li key={t.id}>
              <a className="sy-area" href={topicHref(t.id)}>
                <span className="sy-area-name">{t.label}</span>
                <span className="sy-area-intro">{t.intro}</span>
                <span className="sy-area-foot">
                  <span>{ui.areaCount(t.videos.length, t.news.length)}</span>
                  <span className="sy-area-cta">{ui.explore} <ArrowRight /></span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
