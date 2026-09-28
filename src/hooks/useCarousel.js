import { useCallback, useEffect, useRef, useState } from 'react';

// Carrossel baseado em scroll nativo (scroll-snap): funciona com toque, trackpad e botões.
export function useCarousel(itemCount) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const step = () => {
    const track = trackRef.current;
    const first = track?.children[0];
    if (!first) return 1;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first.getBoundingClientRect().width + gap;
  };

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setIndex(Math.min(itemCount - 1, Math.round(track.scrollLeft / step())));
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft >= max - 2);
  }, [itemCount]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const goTo = (i) => trackRef.current?.scrollTo({ left: i * step(), behavior: 'smooth' });
  const prev = () => trackRef.current?.scrollBy({ left: -step(), behavior: 'smooth' });
  const next = () => trackRef.current?.scrollBy({ left: step(), behavior: 'smooth' });

  return { trackRef, index, atStart, atEnd, goTo, prev, next };
}
