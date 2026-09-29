import { useState } from 'react';
import { Play } from './Icons.jsx';
import { useContent } from '../i18n.jsx';

// Imagem com placeholder: se o arquivo ainda não existir em /public, mostra um fundo da marca.
// focus: ponto que o recorte automático preserva (CSS object-position), ex.: 'center 30%'
export function Media({ src, alt = '', className = '', focus, children }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`media ${className}`}>
      {src && !failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
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
