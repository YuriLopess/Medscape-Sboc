import { ChevronLeft, ChevronRight } from './Icons.jsx';
import { useContent } from '../i18n.jsx';

export default function CarouselControls({ carousel, label, counter }) {
  const { ui } = useContent();
  return (
    <div className="carousel-controls">
      <button type="button" className="round-btn" onClick={carousel.prev} disabled={carousel.atStart} aria-label={`${label}: ${ui.previous}`}>
        <ChevronLeft />
      </button>
      {counter && <span className="carousel-counter" aria-live="polite">{counter}</span>}
      <button type="button" className="round-btn round-btn--primary" onClick={carousel.next} disabled={carousel.atEnd} aria-label={`${label}: ${ui.next}`}>
        <ChevronRight />
      </button>
    </div>
  );
}
