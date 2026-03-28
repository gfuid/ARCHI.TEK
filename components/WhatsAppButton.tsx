import React from 'react';
import Whatspp from '../assets/whatsapp.png'; // Local asset path

const WhatsAppButton = () => {
    const phoneNumber = "9992250502";
    const message = "Hello Designhouzz I'm interested in your services.";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            // Stacked position: Telegram ke upar (WhatsApp: bottom-32)
            className="fixed right-4 bottom-27 md:right-7.5 md:bottom-20 z-[2000] flex flex-col items-end gap-2"
        >
            {/* 1. SLIDE-OUT LABEL: Image ke format ke hisaab se */}
            <span className="mr-3 px-5 py-2.5 bg-[#25D366] text-white text-[11px] font-black uppercase tracking-widest rounded-full shadow-xl opacity-0 -translate-x-4 pointer-events-none transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap border border-white/20">
                Connect Us
            </span>

            {/* 2. ICON CONTAINER: Pulse effect ke saath */}
            <div className="relative">
                <img
                    src={Whatspp}
                    alt="WhatsApp Support"
                    className="scale-100 w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110 active:scale-90"
                />

                {/* 3. Subtle Ping Glow (Active feel dene ke liye) */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:hidden"></span>
            </div>
        </a>
    );
};

export default WhatsAppButton;