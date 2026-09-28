import { ChevronLeft, ChevronRight } from './Icons.jsx';

export default function CarouselControls({ carousel, label, counter }) {
  return (
    <div className="carousel-controls">
      <button type="button" className="round-btn" onClick={carousel.prev} disabled={carousel.atStart} aria-label={`${label}: anterior`}>
        <ChevronLeft />
      </button>
      {counter && <span className="carousel-counter" aria-live="polite">{counter}</span>}
      <button type="button" className="round-btn round-btn--primary" onClick={carousel.next} disabled={carousel.atEnd} aria-label={`${label}: próximo`}>
        <ChevronRight />
      </button>
    </div>
  );
}
