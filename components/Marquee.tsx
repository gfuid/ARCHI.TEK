
import React from 'react';

const Marquee: React.FC = () => {
  const words = ["STRUCTURAL INTEGRITY", "DIGITAL INNOVATION", "POETIC MINIMALISM", "HERITAGE CRAFT"];
  
  return (
    <div className="bg-studio-gold py-8 overflow-hidden whitespace-nowrap border-y border-studio-black/10">
      <div className="flex animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {words.map((word, idx) => (
              <React.Fragment key={idx}>
                <span className="text-studio-black text-6xl md:text-8xl font-serif font-bold tracking-tighter mx-12">
                  {word}
                </span>
                <span className="w-4 h-4 rounded-full bg-studio-black"></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
