import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type Brand = {
  name: string;
  /** Logo em imagem (SVG/PNG). Quando existe, substitui ícone + nome. */
  logo?: string;
  /** Ícone ao lado do nome, quando não há logo em imagem. */
  icon?: ReactNode;
};

type BrandScrollerProps = {
  brands: Brand[];
  /** Tempo de uma volta completa (ex.: "40s"). */
  duration?: string;
  /** Pausa a animação (ex.: botão "Pausar"). */
  paused?: boolean;
  className?: string;
};

// Quantas cópias do grupo: a faixa precisa ser mais larga que a tela para o loop não abrir buraco
const COPIES = 4;

function BrandItem({ brand }: { brand: Brand }) {
  return (
    <div className="flex h-24 w-56 shrink-0 items-center justify-center gap-3 rounded-2xl border border-[var(--line)] bg-white px-6 text-[#6b7c8f] opacity-80 grayscale transition duration-300 hover:-translate-y-1 hover:border-[var(--blue-line)] hover:text-[var(--blue)] hover:opacity-100 hover:shadow-[0_14px_30px_rgb(var(--navy-rgb)/.12)] hover:grayscale-0 max-sm:h-20 max-sm:w-44 max-sm:px-4">
      {brand.logo ? (
        <img src={brand.logo} alt="" className="max-h-12 max-w-full object-contain" />
      ) : (
        <>
          <span className="flex shrink-0 [&>svg]:size-7 max-sm:[&>svg]:size-6">{brand.icon}</span>
          <p className="m-0 text-[13px] font-semibold tracking-[.12em] uppercase max-sm:text-[11.5px]">{brand.name}</p>
        </>
      )}
    </div>
  );
}

function Scroller({ brands, duration = '40s', paused = false, className, reverse }: BrandScrollerProps & { reverse?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'group flex max-w-full flex-row overflow-hidden py-3 [--gap:1.25rem] [gap:var(--gap)]',
        '[mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0))]',
        className,
      )}
      style={{ ['--duration' as string]: duration }}
    >
      {Array.from({ length: COPIES }, (_, i) => (
        <div
          key={i}
          className={cn(
            'flex shrink-0 flex-row justify-around [gap:var(--gap)]',
            reverse ? 'animate-marquee-reverse' : 'animate-marquee',
            'group-hover:[animation-play-state:paused] motion-reduce:animate-none',
            paused && '[animation-play-state:paused]',
          )}
        >
          {brands.map((brand) => (
            <BrandItem key={brand.name} brand={brand} />
          ))}
        </div>
      ))}
    </div>
  );
}

export const BrandScroller = (props: BrandScrollerProps) => <Scroller {...props} />;

export const BrandScrollerReverse = (props: BrandScrollerProps) => <Scroller {...props} reverse />;
