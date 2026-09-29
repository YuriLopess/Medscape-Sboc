import { useEffect } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import Hero from './components/Hero.jsx';
import VideoStrip from './components/VideoStrip.jsx';
import FeaturedCarousel from './components/FeaturedCarousel.jsx';
import ThemeExplorer from './components/ThemeExplorer.jsx';
import TextsSection from './components/TextsSection.jsx';
import FinalSynthesis from './components/FinalSynthesis.jsx';
import Supporters from './components/Supporters.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import ContentPage from './components/ContentPage.jsx';
import { useContent } from './i18n.jsx';
import { useRoute } from './hooks/useRoute.js';

const SITE_TITLE = 'ESMO 2026 · Medscape + SBOC';

export default function App() {
  const route = useRoute();
  const { getContent, ui } = useContent();
  const item = route.page === 'content' ? getContent(route.id) : null;

  useEffect(() => {
    document.title = item ? `${item.title} · ${SITE_TITLE}` : SITE_TITLE;
  }, [item]);

  return (
    <>
      <a className="skip" href="#conteudo">{ui.skip}</a>
      <SiteHeader />
      <main id="conteudo">
        {route.page === 'content' ? (
          <ContentPage key={route.id} item={item} />
        ) : (
          <>
            <Hero />
            <VideoStrip />
            <TextsSection />
            <FeaturedCarousel />
            <FinalSynthesis />
            <ThemeExplorer />
            <Supporters />
          </>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
