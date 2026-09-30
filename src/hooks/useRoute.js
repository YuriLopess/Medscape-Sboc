import { useEffect, useState } from 'react';
import { SYNTHESIS } from '../data/content.js';

/*
  Roteamento por hash, sem dependências, que funciona em qualquer hospedagem estática
  (inclusive abrindo o site de uma pasta). Espelha um a um a estrutura de URLs do handoff:

    #/                        →  /esmo-2026                    Home
    #/<tema>                  →  /esmo-2026/<tema>             Área terapêutica
    #/<tema>/<slug>           →  /esmo-2026/<tema>/<slug>      Conteúdo
    #/noticias?tema=pulmao    →  /esmo-2026/noticias           Listagem de notícias
    #/videos?tema=mama        →  /esmo-2026/videos             Listagem de vídeos
    #/sintese-final           →  /esmo-2026/sintese-final      Síntese final
    #/busca?q=pulmao          →  /esmo-2026/busca?q=pulmao     Busca

  Quando o site for para um servidor, cada rota vira o caminho real correspondente.
*/

// Rotas com nome fixo; o que não estiver aqui é área terapêutica
const LISTINGS = ['noticias', 'videos'];

export const homeHref = '#/';
export const synthesisHref = `#/${SYNTHESIS}`;
export const topicHref = (topic) => `#/${topic}`;
export const listingHref = (format, topic) => `#/${format}${topic ? `?tema=${topic}` : ''}`;
export const searchHref = (q) => `#/busca${q ? `?q=${encodeURIComponent(q)}` : ''}`;

function parse(hash) {
  // Só tratamos como rota o que começa com "#/"; "#secao" continua sendo âncora na página atual
  if (!hash.startsWith('#/')) return null;
  const [path, query = ''] = hash.slice(2).split('?');
  const params = new URLSearchParams(query);
  const [first, second] = path.split('/').filter(Boolean).map(decodeURIComponent);

  if (!first) return { page: 'home' };
  if (first === 'busca') return { page: 'search', q: params.get('q') ?? '' };
  if (LISTINGS.includes(first)) return { page: 'listing', format: first, topic: params.get('tema') ?? '' };
  if (first === SYNTHESIS && !second) return { page: 'synthesis' };
  if (second) return { page: 'content', topic: first, slug: second };
  return { page: 'topic', topic: first };
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
      // Âncora de uma seção: rola até ela se existir nesta página, senão volta para a Home
      const anchor = window.location.hash.slice(1);
      if (anchor && !document.getElementById(anchor)) setRoute({ page: 'home', anchor });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Depois de voltar para a Home, rola até a seção pedida
  useEffect(() => {
    if (route.page === 'home' && route.anchor) {
      requestAnimationFrame(() => document.getElementById(route.anchor)?.scrollIntoView());
    }
  }, [route]);

  return route;
}
