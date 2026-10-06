import { useState } from 'react';
import { Play } from './Icons.jsx';
import { useContent } from '../i18n.jsx';
import variants from '../data/image-variants.json';

/*
  Largura em que cada tipo de imagem aparece na tela. Com isso o navegador escolhe, entre as versões
  geradas por scripts/gerar-variantes.py (480, 720, 960, 1280 px e o original), a menor que fica nítida —
  inclusive em telas de alta resolução.
  Atenção ao recorte: quando o quadro é mais alto que a proporção da foto (banner no celular, cards de área),
  o object-fit: cover amplia a foto além da largura do quadro. O valor aqui é a largura da foto ampliada,
  senão ela chega pequena e fica borrada.
*/
const SIZES = {
  'hero-media': '(max-width: 640px) 135vw, (max-width: 900px) 100vw, 60vw',
  'area-media': '(max-width: 640px) 90vw, (max-width: 900px) 60vw, 520px',
  'card-media': '(max-width: 640px) 90vw, 440px',
  'tx-lead-media': '(max-width: 720px) 100vw, 420px',
  'tx-thumb': '90px',
  'se-thumb': '124px',
  'sy-video-media': '(max-width: 640px) 136px, 600px',
  'tp-highlight-media': '(max-width: 900px) 100vw, 620px',
  'cp-player-media': '(max-width: 900px) 100vw, 760px',
};

function srcSet(src) {
  const widths = variants[src];
  if (!widths) return undefined; // foto sem versões menores: usa só o original
  const original = widths[widths.length - 1];
  return widths.map((w) => `${w === original ? src : src.replace(/\.jpg$/, `-${w}.jpg`)} ${w}w`).join(', ');
}

// Imagem com placeholder: se o arquivo ainda não existir em /public, mostra um fundo da marca.
// focus: ponto que o recorte automático preserva (CSS object-position), ex.: 'center 30%'
// sizes: tamanho em que a imagem aparece, quando foge do padrão do tipo (ver SIZES)
// priority: imagem principal da página, acima da dobra: carrega na hora, sem lazy loading
export function Media({ src, alt = '', className = '', focus, sizes, priority = false, children }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`media ${className}`}>
      {src && !failed ? (
        <img
          src={src}
          srcSet={srcSet(src)}
          sizes={sizes ?? SIZES[className]}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          style={focus ? { objectPosition: focus } : undefined}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="media-placeholder" aria-hidden="true"><span>ESMO 2026</span></div>
      )}
      {children}
    </div>
  );
}

export function PlayBadge({ large = false }) {
  return (
    <span className={`play-badge${large ? ' play-badge--large' : ''}`} aria-hidden="true">
      <Play />
    </span>
  );
}

export function Duration({ children }) {
  const { ui } = useContent();
  return <span className="duration"><span className="sr-only">{ui.duration} </span>{children}</span>;
}
