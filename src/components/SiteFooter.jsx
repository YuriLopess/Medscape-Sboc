import { useContent } from '../i18n.jsx';

// Rodapé mínimo: "Desenvolvido por" + Medscape à esquerda, SBOC à direita, e no centro o aviso de público,
// o aviso obrigatório (D) e a Política de Privacidade (E), como pedem as diretrizes Medscape.
// Regra Medscape: o logo dela só aparece no cabeçalho e no rodapé, nunca colado ao logo de uma empresa farmacêutica.
export default function SiteFooter() {
  const { disclosure, footer, ui } = useContent();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-brands">
          <a href="#/" className="footer-medscape" aria-label={ui.homeMedscape}>
            <span className="footer-label">{footer.developedBy}</span>
            <img src="images/logos/medscape.png" alt="" width="698" height="160" />
          </a>
          <a href="#/" className="footer-sboc" aria-label={ui.homeSboc}>
            <img src="images/logos/sboc.png" alt="" width="384" height="384" />
          </a>
        </div>

        <div className="footer-center">
          <p className="footer-audience">{footer.audience}</p>

          {/* D: aviso de "Cobertura de Conferência", obrigatório no rodapé de todas as páginas */}
          <p className="footer-legal">{disclosure.footer}</p>

          {/* E: link para a Política de Privacidade da Medscape */}
          <a className="footer-privacy" href={footer.privacy.href} target="_blank" rel="noopener noreferrer">
            {footer.privacy.label}
            <span className="sr-only"> {footer.newTab}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
