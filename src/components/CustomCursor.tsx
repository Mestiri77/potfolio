import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);
    document.documentElement.classList.add('cursor-hidden');
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.classList.remove('cursor-hidden');
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[2147483647] pointer-events-none">
      <div
        className={`custom-cursor opacity-100`}
        style={{ left: pos.x, top: pos.y }}
      />
    </div>
  );
}
