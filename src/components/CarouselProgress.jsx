const pad = (n) => String(n).padStart(2, '0');

// Progresso do carrossel.
// Desktop/tablet: uma barrinha clicável por item. Celular: contador "01 / 10" + barra contínua,
// porque 10 barrinhas não cabem com área de toque decente numa tela estreita.
export default function CarouselProgress({ carousel, items, label }) {
  const total = items.length;
  if (total < 2) return null;
  const current = Math.min(carousel.index, total - 1);

  return (
    <div className="container carousel-progress">
      <div className="progress-dots" role="group" aria-label={label}>
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={i === current ? 'is-active' : ''}
            aria-label={`${i + 1}: ${item.title}`}
            aria-current={i === current || undefined}
            onClick={() => carousel.goTo(i)}
          />
        ))}
      </div>

      <div className="progress-compact" aria-hidden="true">
        <span className="progress-count">
          <strong>{pad(current + 1)}</strong> / {pad(total)}
        </span>
        <span className="progress-track">
          <span className="progress-fill" style={{ width: `${((current + 1) / total) * 100}%` }} />
        </span>
      </div>
    </div>
  );
}
