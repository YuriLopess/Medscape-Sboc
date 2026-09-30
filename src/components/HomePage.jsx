import Hero from './Hero.jsx';
import TopicAreas from './TopicAreas.jsx';
import FeaturedCarousel from './FeaturedCarousel.jsx';
import Supporters from './Supporters.jsx';

/*
  Home da cobertura (handoff, pág. 5): porta de entrada, nada mais.
  Banner → Explore por área terapêutica → Destaques da cobertura → Apoiadores.
  As listagens completas moram em #/noticias e #/videos; cada área tem a sua página.
  Apoiadores aparecem só aqui, nunca nas outras páginas.
*/
export default function HomePage() {
  return (
    <>
      <Hero />
      <TopicAreas />
      <FeaturedCarousel />
      <Supporters />
    </>
  );
}
