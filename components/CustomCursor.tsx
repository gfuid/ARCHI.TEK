
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isConsult, setIsConsult] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer' || target.tagName === 'BUTTON' || target.tagName === 'A');
      setIsView(!!target.closest('#portfolio'));
      setIsConsult(!!target.closest('#ai-consult'));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-studio-gold rounded-full z-[9999] pointer-events-none transition-transform duration-100 ease-out"
        style={{ transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)` }}
      />
      {/* Ring */}
      <div 
        className={`fixed top-0 left-0 border border-studio-gold/50 rounded-full z-[9998] pointer-events-none transition-all duration-300 ease-out flex items-center justify-center ${
          isPointer ? 'w-16 h-16' : 'w-10 h-10'
        } ${isView || isConsult ? 'bg-studio-gold text-studio-black border-none' : ''}`}
        style={{ transform: `translate3d(${position.x - (isPointer ? 32 : 20)}px, ${position.y - (isPointer ? 32 : 20)}px, 0)` }}
      >
        {isView && !isPointer && <span className="text-[8px] font-bold uppercase tracking-tighter">View</span>}
        {isConsult && !isPointer && <span className="text-[8px] font-bold uppercase tracking-tighter">Ask</span>}
      </div>
    </>
  );
};

export default CustomCursor;
