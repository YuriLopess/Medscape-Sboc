import { useContent } from '../i18n.jsx';

// Aviso obrigatório de topo (componente B das diretrizes Medscape) em versão para o celular.
// No celular a faixa do topo some e o aviso aparece no alto da primeira seção de cada página:
// selo de vidro sobre a foto do banner (variant="dark") ou selo claro no topo das páginas internas.
export default function Disclosure({ variant = 'light' }) {
  const { disclosure } = useContent();
  const [lead, names] = disclosure.topParts;
  return (
    <p className={`m-disclosure m-disclosure--${variant}`}>
      {lead} <strong>{names}</strong>
    </p>
  );
}
