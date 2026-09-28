import CarouselControls from './CarouselControls.jsx';
import CarouselProgress from './CarouselProgress.jsx';
import ContentCard from './ContentCard.jsx';
import { featuredVideos } from '../data/content.js';
import { useCarousel } from '../hooks/useCarousel.js';

const pad = (n) => String(n).padStart(2, '0');

export default function FeaturedCarousel() {
  const carousel = useCarousel(featuredVideos.length);
  const total = featuredVideos.length;

  return (
    <section id="destaques" className="section" aria-labelledby="destaques-title">
      <div className="container section-head">
        <div>
          <h2 id="destaques-title" className="section-title">Em destaque na cobertura</h2>
          <p className="section-sub">Vídeos e análises para acompanhar os temas do congresso.</p>
        </div>
        <CarouselControls carousel={carousel} label="Destaques" counter={`${pad(carousel.index + 1)} / ${pad(total)}`} />
      </div>

      <div className="carousel-track" ref={carousel.trackRef}>
        {featuredVideos.map((video) => (
          <ContentCard key={video.id} item={{ ...video, type: 'video' }} size="lg" />
        ))}
      </div>

      <CarouselProgress carousel={carousel} items={featuredVideos} label="Ir para o vídeo" />
    </section>
  );
}
