import { useCallback, useEffect, useRef, useState } from 'react';
import CarouselControls from './CarouselControls.jsx';
import CarouselProgress from './CarouselProgress.jsx';
import ContentCard from './ContentCard.jsx';
import { ChevronDown } from './Icons.jsx';
import { visibleTopicCount } from '../data/content.js';
import { useContent } from '../i18n.jsx';
import { useCarousel } from '../hooks/useCarousel.js';
import { useDismiss } from '../hooks/useDismiss.js';

function MoreTopics({ items, active, onSelect }) {
  const { ui } = useContent();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const close = useCallback(() => setOpen(false), []);
  useDismiss(ref, open, close);
  const selected = items.find((t) => t.id === active);

  return (
    <div className="more-topics" ref={ref}>
      <button
        type="button"
        className={`chip${selected ? ' is-active' : ''}`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {selected ? selected.label : ui.moreTopics} <ChevronDown />
      </button>
      {open && (
        <ul className="dropdown-menu">
          {items.map((t) => (
            <li key={t.id}>
              <button type="button" aria-pressed={t.id === active} onClick={() => { onSelect(t.id); close(); }}>
                {t.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ThemeExplorer() {
  const { exploreItems, topics, ui } = useContent();
  const [active, setActive] = useState('todos');
  const items = active === 'todos' ? exploreItems : exploreItems.filter((i) => i.topic === active);
  const carousel = useCarousel(items.length);

  // Ao trocar o filtro, volta o carrossel ao início
  useEffect(() => {
    carousel.trackRef.current?.scrollTo({ left: 0 });
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  // No celular todos os temas viram botões numa linha com rolagem; no desktop os extras ficam em "Mais temas"
  const chips = [{ id: 'todos', label: ui.all }, ...topics].map((t, i) => ({ ...t, extra: i > visibleTopicCount }));

  return (
    <section id="explorar" data-reveal className="section" aria-labelledby="explorar-title">
      <div className="container">
        <h2 id="explorar-title" className="section-title">{ui.exploreTitle}</h2>
        <p className="section-sub">{ui.exploreSub}</p>
      </div>

      <div className="container filter-row">
        <div className="chips" role="group" aria-label={ui.filterByTopic}>
          {chips.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`chip${t.id === active ? ' is-active' : ''}${t.extra ? ' chip--extra' : ''}`}
              aria-pressed={t.id === active}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
          <MoreTopics items={topics.slice(visibleTopicCount)} active={active} onSelect={setActive} />
        </div>
        <CarouselControls carousel={carousel} label={ui.topicsLabel} />
      </div>

      {items.length > 0 ? (
        <div className="carousel-track" ref={carousel.trackRef}>
          {items.map((item) => <ContentCard key={item.id} item={item} />)}
        </div>
      ) : (
        <p className="container empty-state" ref={carousel.trackRef}>
          {ui.emptyTopic}
        </p>
      )}
      <CarouselProgress key={active} carousel={carousel} items={items} label={ui.goToContent} />
    </section>
  );
}
