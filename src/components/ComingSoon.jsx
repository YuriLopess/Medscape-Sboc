import { Clock } from './Icons.jsx';
import { useContent } from '../i18n.jsx';

/*
  Aviso de "Em breve" no lugar de vídeos e notícias que ainda não foram publicados.
  Some sozinho quando a lista correspondente em data/content.js ganha itens.
  dark: versão para fundo azul (Síntese final).
*/
export default function ComingSoon({ text, dark = false }) {
  const { event, ui } = useContent();
  return (
    <div data-reveal className={`soon${dark ? ' soon--dark' : ''}`}>
      <span className="soon-icon"><Clock /></span>
      <div className="soon-body">
        <p className="soon-title">{ui.soon}</p>
        <p className="soon-text">{text}</p>
      </div>
      <p className="soon-date">{event.dates}</p>
    </div>
  );
}
