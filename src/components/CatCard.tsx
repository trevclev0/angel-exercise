import { clsx } from 'clsx';
import { useState } from 'react';
import type { Cat } from '../services/catsQueries';

type CatCardProps = Omit<Cat, 'queryDate'>;

export function CatCard({ id, url }: CatCardProps) {
  const [catImgLoading, setCatImgLoading] = useState(true);
  return (
    <div
      className={clsx([
        'aspect-square',
        'h-full',
        'w-full',
        'overflow-hidden',
        'rounded-xl',
        'bg-[#EF5A50]',
        catImgLoading && ['opacity-50', 'animate-pulse'],
      ])}
    >
      <a href={`#${id}`}>
        <img
          src={url}
          alt={`Cat ${id}`}
          className="h-full w-full object-contain"
          onLoad={() => setCatImgLoading(false)}
        />
      </a>
    </div>
  );
}
