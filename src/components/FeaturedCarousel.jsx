import CarouselControls from './CarouselControls.jsx';
import CarouselProgress from './CarouselProgress.jsx';
import ContentCard from './ContentCard.jsx';
import { useContent } from '../i18n.jsx';
import { useCarousel } from '../hooks/useCarousel.js';

const pad = (n) => String(n).padStart(2, '0');

export default function FeaturedCarousel() {
  const { featuredVideos, ui } = useContent();
  const carousel = useCarousel(featuredVideos.length);
  const total = featuredVideos.length;

  return (
    <section id="destaques" data-reveal className="section" aria-labelledby="destaques-title">
      <div className="container section-head">
        <div>
          <h2 id="destaques-title" className="section-title">{ui.featuredTitle}</h2>
          <p className="section-sub">{ui.featuredSub}</p>
        </div>
        <CarouselControls carousel={carousel} label={ui.featuredLabel} counter={`${pad(carousel.index + 1)} / ${pad(total)}`} />
      </div>

      <div className="carousel-track" ref={carousel.trackRef}>
        {featuredVideos.map((video, i) => (
          <ContentCard key={video.id} item={video} size="lg" index={i} origin="destaques" />
        ))}
      </div>

      <CarouselProgress carousel={carousel} items={featuredVideos} label={ui.goToVideo} />
    </section>
  );
}
