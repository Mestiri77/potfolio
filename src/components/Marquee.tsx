import { useMemo } from 'react';

const WORDS = [
  'DATA DRIVEN',
  'ADAPTIVE',
  'INCLUSIVE',
  'USEFULL',
  'ACCECESIBLE',
  'INNOVATIVE',
  'HUMAN FIRST',
];

export function Marquee() {
  const items = useMemo(() => {
    // repeat to fill width
    return Array.from({ length: 6 }).flatMap(() => WORDS);
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 right-0 bottom-0 z-40">
      <div className="relative overflow-hidden">
        <div className="marquee flex whitespace-nowrap bg-[oklch(.705_.213_47.604)] py-3">
          {items.map((w, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 text-black font-medium tracking-wider"
            >
              <span className="uppercase">{w}</span>
              <span className="text-black/60">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
