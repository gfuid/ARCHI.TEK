import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 1. Mobile check function
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window));
    };

    // Initial check
    checkMobile();

    const handleMouseMove = (e: MouseEvent) => {
      // Agar mobile hai toh position update karne ki zaroorat nahi
      if (isMobile) return;

      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      );

      setIsView(!!target.closest('#site-pics') || !!target.closest('#portfolio'));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // 2. Conditional Rendering: Mobile par kuch bhi return nahi karega
  if (isMobile) return null;

  return (
    <>
      {/* Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-[#C5A059] rounded-full z-[9999] pointer-events-none transition-transform duration-100 ease-out"
        style={{ transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)` }}
      />
      {/* Ring */}
      <div
        className={`fixed top-0 left-0 border border-[#C5A059]/50 rounded-full z-[9998] pointer-events-none transition-all duration-300 ease-out flex items-center justify-center ${isPointer ? 'w-16 h-16' : 'w-10 h-10'
          } ${isView ? 'bg-[#C5A059] text-white border-none' : ''}`}
        style={{ transform: `translate3d(${position.x - (isPointer ? 32 : 20)}px, ${position.y - (isPointer ? 32 : 20)}px, 0)` }}
      >
        {isView && !isPointer && <span className="text-[8px] font-bold uppercase tracking-tighter">View</span>}
      </div>
    </>
  );
};

export default CustomCursor;