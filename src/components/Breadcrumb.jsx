import { useContent } from '../i18n.jsx';
import { homeHref, listingHref, synthesisHref, topicHref } from '../hooks/useRoute.js';
import { SYNTHESIS } from '../data/content.js';

// Trilha "Cobertura / Pulmão / Notícias" das páginas internas (handoff, pág. 9).
// Existe para a pessoa saber onde está e voltar à área sem usar o Voltar do navegador.
export default function Breadcrumb({ topic, format }) {
  const { page, topicLabel, ui } = useContent();
  const isSynthesis = topic === SYNTHESIS;

  const trail = [
    { label: ui.coverage, href: homeHref },
    isSynthesis
      ? { label: page.synthesisKicker, href: synthesisHref }
      : { label: topicLabel(topic), href: topicHref(topic) },
    format && !isSynthesis
      ? { label: format === 'videos' ? ui.videosHeading : ui.newsHeading, href: listingHref(format, topic) }
      : null,
  ].filter((step) => step && step.label);

  return (
    <nav className="crumbs" aria-label={ui.coverage}>
      {trail.map((step, i) => (
        <span key={step.href}>
          {i > 0 && <span className="crumbs-sep" aria-hidden="true">/</span>}
          <a href={step.href}>{step.label}</a>
        </span>
      ))}
    </nav>
  );
}
