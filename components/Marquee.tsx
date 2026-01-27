
import React from 'react';

const Marquee: React.FC = () => {
  const words = ["CONSTRUCTION", "INTERIOR WORK", "TURNKEY PROJECTS", "RENOVATION", "SITE MASTERY"];
  
  return (
    <div className="bg-houzz-sage/10 py-10 overflow-hidden whitespace-nowrap border-y border-houzz-sage/20">
      <div className="flex animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {words.map((word, idx) => (
              <React.Fragment key={idx}>
                <span className="text-houzz-dark text-5xl md:text-7xl font-serif font-bold tracking-tighter mx-16 opacity-10 hover:opacity-100 transition-opacity cursor-default">
                  {word}
                </span>
                <span className="w-3 h-3 rounded-full bg-houzz-gold"></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
