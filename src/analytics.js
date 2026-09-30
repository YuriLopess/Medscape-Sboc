/*
  Camada de dados do handoff (pág. 14). Cada rota dispara um evento com suas dimensões,
  e os cards registram posição e natureza do conteúdo.

  Aqui os eventos só são empilhados em window.dataLayer — nenhuma ferramenta é carregada e
  nenhum dado sai do navegador. Para ligar ao GTM/GA4, basta incluir a tag: o formato já é o esperado.
  Em desenvolvimento, `?debug=analytics` na URL imprime cada evento no console.
*/
const debug = () => new URLSearchParams(window.location.search).get('debug') === 'analytics';

export function track(event, params = {}) {
  window.dataLayer = window.dataLayer || [];
  const payload = { event, ...params };
  window.dataLayer.push(payload);
  if (debug()) console.info('[analytics]', payload);
}

// Evento de página, a partir da rota atual
export function trackRoute(route, content) {
  switch (route.page) {
    case 'home':
      return track('view_home', { origem: document.referrer || 'direto', dispositivo: window.innerWidth < 640 ? 'mobile' : 'desktop' });
    case 'topic':
      return track('view_topic', { tema: route.topic });
    case 'listing':
      return track('view_listing', { formato: route.format, filtro: route.topic || 'todos' });
    case 'content':
      return track('view_content', { tema: route.topic, slug: route.slug, natureza: content?.sponsored ? 'patrocinado' : 'editorial' });
    case 'synthesis':
      return track('view_summary', { tema: 'todos' });
    case 'search':
      return track('search', { termo: route.q, resultados: content?.length ?? 0 });
    default:
      return undefined;
  }
}

// Clique num card: posição na lista e natureza, como pede a regra analítica
export function trackCard(item, position, origem) {
  track('select_content', {
    tema: item.topic,
    slug: item.slug,
    formato: item.type === 'video' ? 'video' : 'noticia',
    natureza: item.sponsored ? 'patrocinado' : 'editorial',
    posicao: position + 1,
    origem,
  });
}
