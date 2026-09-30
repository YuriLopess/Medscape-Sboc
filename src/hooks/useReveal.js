import { useEffect } from 'react';

// Revela suavemente os elementos marcados com data-reveal (o bloco inteiro) ou data-stagger (os itens da lista,
// um depois do outro) quando entram na tela, uma vez só.
// Roda de novo a cada troca de página (dep), para pegar os elementos da página nova.
// Sem IntersectionObserver ou com "reduzir movimento" ativado, mostra tudo direto.
export function useReveal(dep) {
  useEffect(() => {
    const els = [...document.querySelectorAll('[data-reveal]:not(.is-revealed), [data-stagger]:not(.is-revealed)')];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-revealed'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}
