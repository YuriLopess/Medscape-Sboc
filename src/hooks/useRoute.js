import { useEffect, useState } from 'react';

// Roteamento mínimo por hash, sem dependências, que funciona em qualquer hospedagem estática:
//   #/                  → página inicial
//   #/conteudo/<id>     → página interna de um conteúdo
//   #destaques (âncora) → rola até a seção; se ela não existir na página atual, volta para a inicial
function parse(hash) {
  const match = hash.match(/^#\/conteudo\/([\w-]+)/);
  if (match) return { page: 'content', id: match[1] };
  if (hash === '' || hash === '#' || hash === '#/') return { page: 'home' };
  return null;
}

export function useRoute() {
  const [route, setRoute] = useState(() => parse(window.location.hash) ?? { page: 'home', anchor: window.location.hash.slice(1) });

  useEffect(() => {
    const onHashChange = () => {
      const next = parse(window.location.hash);
      if (next) {
        setRoute(next);
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }
      // Âncora de uma seção da página inicial clicada a partir da página interna
      const anchor = window.location.hash.slice(1);
      if (!document.getElementById(anchor)) setRoute({ page: 'home', anchor });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Depois de voltar para a inicial, rola até a seção pedida
  useEffect(() => {
    if (route.page === 'home' && route.anchor) {
      requestAnimationFrame(() => document.getElementById(route.anchor)?.scrollIntoView());
    }
  }, [route]);

  return route;
}

export const contentHref = (id) => `#/conteudo/${id}`;
