
import React, { useState, useRef, useEffect } from 'react';
import { askArchitect } from '../services/geminiService';
import { ChatMessage } from '../types';

const AuraAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Greetings. I am ARCHI-BOT. Whether you're curious about sustainable urban planning or material innovation for a private villa, I'm here to consult. How can I assist your vision today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const response = await askArchitect(input);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  return (
    <section id="ai-consult" className="py-24 bg-studio-gray/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm text-studio-gold font-bold uppercase tracking-[0.3em] mb-4">Innovation Hub</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">AI Design Consultant</h3>
            <p className="text-studio-white/60 text-lg leading-relaxed mb-8">
              Experience the future of conceptualization. Our proprietary AI, integrated with Gemini technology, assists in brainstorming structural solutions, sustainable material palettes, and aesthetic directions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-studio-gold/10 flex items-center justify-center text-studio-gold">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-studio-white">Technical Insight</h4>
                  <p className="text-sm text-studio-white/40">In-depth knowledge of building codes and structural loads.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-studio-gold/10 flex items-center justify-center text-studio-gold">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v18M3 12h18" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-studio-white">Sustainability First</h4>
                  <p className="text-sm text-studio-white/40">Eco-conscious material recommendations for any climate.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-studio-black border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
            {/* Chat Header */}
            <div className="bg-studio-gray p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold tracking-widest uppercase">ARCHI-BOT v3.5</span>
              </div>
              <span className="text-[10px] text-white/40 uppercase tracking-tighter">Powered by Gemini</span>
            </div>

            {/* Chat Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
            >
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-studio-gold text-studio-black font-medium' 
                      : 'bg-studio-gray text-studio-white border border-white/5'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-studio-gray p-4 rounded-lg border border-white/5 flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-studio-white/40 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-studio-white/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-studio-white/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-studio-gray border-t border-white/10 flex space-x-4">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about materials, styles, or concepts..."
                className="flex-1 bg-studio-black border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-studio-gold transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="bg-studio-gold text-studio-black p-3 rounded-lg hover:bg-studio-white transition-colors disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuraAI;
