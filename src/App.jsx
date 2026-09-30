import { useEffect } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import HomePage from './components/HomePage.jsx';
import TopicPage from './components/TopicPage.jsx';
import ListingPage from './components/ListingPage.jsx';
import ContentPage from './components/ContentPage.jsx';
import SynthesisPage from './components/SynthesisPage.jsx';
import SearchPage from './components/SearchPage.jsx';
import { useContent } from './i18n.jsx';
import { useRoute } from './hooks/useRoute.js';
import { useReveal } from './hooks/useReveal.js';
import { trackRoute } from './analytics.js';

const SITE_TITLE = 'ESMO 2026 · Medscape + SBOC';

export default function App() {
  const route = useRoute();
  const { event, getContent, getTopic, page, search, ui } = useContent();

  const item = route.page === 'content' ? getContent(route.topic, route.slug) : null;
  const topic = route.page === 'topic' ? getTopic(route.topic) : null;
  const results = route.page === 'search' ? search(route.q) : null;

  // Identidade da rota: reinicia as animações de entrada e dispara o evento de página
  const routeKey = [route.page, route.topic, route.slug, route.format, route.q].filter(Boolean).join(':');
  useReveal(routeKey);

  useEffect(() => {
    const titles = {
      topic: topic?.label,
      listing: route.format === 'videos' ? ui.videoListTitle : ui.newsListTitle,
      content: item?.title,
      synthesis: ui.synthesisTitle(event.name),
      search: ui.searchTitle,
    };
    const name = route.page === 'home' ? null : titles[route.page] ?? page.notFound;
    document.title = name ? `${name} · ${SITE_TITLE}` : SITE_TITLE;
    trackRoute(route, route.page === 'search' ? results : item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeKey]);

  function currentPage() {
    switch (route.page) {
      case 'topic':
        // Tema desconhecido na URL cai na mesma página de "não encontrado" dos conteúdos
        return topic ? <TopicPage topic={topic} /> : <ContentPage item={null} />;
      case 'listing':
        return <ListingPage format={route.format} topic={route.topic} />;
      case 'content':
        return <ContentPage key={routeKey} item={item} />;
      case 'synthesis':
        return <SynthesisPage />;
      case 'search':
        return <SearchPage key={route.q} q={route.q} />;
      default:
        return <HomePage />;
    }
  }

  return (
    <>
      <a className="skip" href="#conteudo">{ui.skip}</a>
      <SiteHeader />
      {/* key: cada rota remonta a página, então a animação de entrada roda a cada navegação */}
      <main id="conteudo" key={routeKey}>{currentPage()}</main>
      <SiteFooter />
    </>
  );
}
