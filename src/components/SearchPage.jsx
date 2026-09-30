import { useEffect, useState } from 'react';
import { Media } from './Media.jsx';
import { useContent } from '../i18n.jsx';
import { searchHref } from '../hooks/useRoute.js';
import { trackCard } from '../analytics.js';

/*
  Busca restrita à cobertura (handoff, pág. 12). O termo vai para a URL (#/busca?q=...),
  então o resultado pode ser compartilhado. A identificação de patrocinado continua visível aqui.
*/
export default function SearchPage({ q }) {
  const { search, topicLabel, ui } = useContent();
  const [term, setTerm] = useState(q);
  const results = search(q);

  // Se a pessoa chega por um link com ?q=, o campo já vem preenchido
  useEffect(() => setTerm(q), [q]);

  return (
    <article className="se">
      <div className="container">
        <h1 className="lp-title">{ui.searchTitle}</h1>

        <form
          className="se-form"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.hash = searchHref(term);
          }}
        >
          <input
            type="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder={ui.searchPlaceholder}
            aria-label={ui.searchTitle}
          />
          <button type="submit" className="btn btn--dark">{ui.searchButton}</button>
        </form>

        {!q && <p className="se-hint">{ui.searchPrompt}</p>}
        {q && results.length === 0 && <p className="se-hint">{ui.searchEmpty(q)}</p>}

        {results.length > 0 && (
          <>
            <p className="lp-count" aria-live="polite">{ui.searchResults(results.length)}</p>
            <ul className="se-results">
              {results.map((item, i) => (
                <li key={item.id}>
                  <a className="se-result" href={item.href} onClick={() => trackCard(item, i, 'busca')}>
                    <Media src={item.image} className="se-thumb" />
                    <span className="se-body">
                      <span className={`tx-kicker${item.sponsored ? ' tx-kicker--sponsored' : ''}`}>
                        {item.sponsored ? ui.sponsoredBadge : item.type === 'video' ? ui.video : ui.text}
                      </span>
                      <span className="tx-title">{item.title}</span>
                      <span className="se-dek">{item.description}</span>
                      <span className="tx-meta">
                        {topicLabel(item.topic) && <span>{topicLabel(item.topic)}</span>}
                        <span>{item.dateLabel}</span>
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}
