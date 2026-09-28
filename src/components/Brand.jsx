// Logo oficial Medscape (versão sem tagline, como pedem as diretrizes) + marca SBOC.
// Regra Medscape: o logo só aparece no cabeçalho e no rodapé, nunca colado ao logo de uma empresa farmacêutica.
export default function Brand({ inverted = false }) {
  return (
    <a href="#/" className={`brand${inverted ? ' brand--inverted' : ''}`} aria-label="Medscape e SBOC, voltar ao início">
      <img
        className="brand-logo"
        src={inverted ? 'images/logos/medscape-branco.png' : 'images/logos/medscape.png'}
        alt=""
        width="698"
        height="160"
      />
      <span className="brand-divider" aria-hidden="true" />
      {/* No fundo azul do rodapé, só as letras brancas (sem o quadrado azul-marinho do logo) */}
      {inverted ? (
        <img className="brand-sboc-letters" src="images/logos/sboc-branco.png" alt="" width="298" height="80" />
      ) : (
        <img className="brand-sboc" src="images/logos/sboc.png" alt="" width="192" height="192" />
      )}
    </a>
  );
}
