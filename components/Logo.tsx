
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ className = "h-16", variant = 'dark' }) => {
  const gold = "#9A8042";
  const black = variant === 'dark' ? "#1A1A1A" : "#FFFFFF";

  return (
    <div className={`inline-flex items-center ${className} select-none`}>
      {/* Left Column: Icon + Tagline */}
      <div className="flex flex-col items-center">
        {/* House Icon - Optimized SVG path to match image */}
        <svg 
          viewBox="0 0 320 220" 
          className="h-20 w-auto" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M10 180V90L135 20L210 70L310 70L225 10L135 80L10 180Z" 
            fill={gold} 
          />
          <path 
            d="M95 180V105L165 55L165 180H95Z" 
            fill={gold} 
          />
        </svg>
        {/* Tagline under icon */}
        <div className="mt-2 text-center">
          <span 
            style={{ color: black }} 
            className="text-[9px] font-sans font-bold tracking-[0.15em] uppercase whitespace-nowrap"
          >
            EVOKES TRUST & STABILITY
          </span>
        </div>
      </div>

      {/* Right Column: Branding Text */}
      <div className="ml-8 flex flex-col pt-2">
        <div className="flex items-start">
          {/* DEI/SIGN Stack */}
          <div className="flex flex-col items-start leading-none">
             <span 
               style={{ color: black }} 
               className="text-5xl font-sans font-medium tracking-[0.05em] leading-[0.85]"
             >
               DEI
             </span>
             <span 
               style={{ color: black }} 
               className="text-5xl font-sans font-medium tracking-[0.05em] mt-1 leading-[0.85]"
             >
               SIGN
             </span>
          </div>
          
          {/* Vertical Bar */}
          <div 
            className="mx-3 w-[4px] self-stretch" 
            style={{ backgroundColor: black }}
          ></div>

          {/* 23 - Serif style */}
          <div className="pt-0">
             <span 
               style={{ color: black }} 
               className="text-6xl font-serif font-medium leading-[0.7]"
             >
               23
             </span>
          </div>
        </div>

        {/* HOUZZ - Bottom right alignment */}
        <div className="mt-3 text-right pr-1">
           <span 
             style={{ color: black }} 
             className="text-3xl font-sans font-light tracking-[0.55em] uppercase leading-none"
           >
             HOUZZ
           </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
