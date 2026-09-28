import Brand from './Brand.jsx';
import { disclosure, footer } from '../data/content.js';

export default function SiteFooter() {
  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <div className="container">
        <h2 id="footer-title" className="sr-only">Informações institucionais</h2>

        <div className="footer-grid">
          <div className="footer-col footer-col--about">
            <Brand inverted />
            <h3 className="sr-only">Sobre esta cobertura</h3>
            <p>{footer.about}</p>
          </div>

          <div className="footer-col">
            <h3>Conteúdo e transparência</h3>
            <p>{footer.transparency}</p>
          </div>

          <nav className="footer-col" aria-labelledby="footer-links-title">
            <h3 id="footer-links-title">Institucional</h3>
            <ul className="footer-links">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                    <span aria-hidden="true"> ↗</span>
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-audience">{footer.audience}</p>
          {/* Aviso de "Cobertura de Conferência", obrigatório no rodapé de todas as páginas */}
          <p className="footer-legal">{disclosure.footer}</p>
        </div>
      </div>
    </footer>
  );
}
