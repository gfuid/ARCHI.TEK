
import React, { useState, useRef, useEffect } from 'react';
import { askArchitect } from '../services/geminiService';
import { ChatMessage } from '../types';

const AuraAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Greetings. I am ARCHI-BOT. I've been trained on ARCHI-TEK's principles of sustainable and biophilic design. How can I assist your design vision today?" }
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
    <section id="ai-consult" className="py-32 bg-studio-light border-y border-studio-green/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm text-studio-green font-bold uppercase tracking-[0.3em] mb-4">AI Consultant</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 text-studio-dark leading-tight">Intelligent Space <br /> Brainstorming</h3>
            <p className="text-studio-gray text-lg leading-relaxed mb-8">
              Discuss material palettes, energy efficiency, and biophilic concepts with our AI partner. It's programmed with our studio's sustainability ethos.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-studio-green text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-studio-dark">Instant Ideation</h4>
                  <p className="text-sm text-studio-gray">Get structural advice and trend analysis in seconds.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-studio-green/10 rounded-sm overflow-hidden shadow-2xl shadow-studio-green/5 flex flex-col h-[600px]">
            <div className="bg-studio-dark p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-studio-green rounded-full animate-pulse"></div>
                <span className="text-sm font-bold tracking-widest uppercase text-white">ARCHI-BOT v4.0</span>
              </div>
              <span className="text-[10px] text-white/40 uppercase tracking-tighter">Green Tech Engine</span>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-studio-light/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-sm text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-studio-green text-white shadow-lg' 
                      : 'bg-white text-studio-dark border border-studio-green/10 shadow-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-sm border border-studio-green/10 flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-studio-green/40 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-studio-green/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-studio-green/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-white border-t border-studio-green/5 flex space-x-4">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your design query..."
                className="flex-1 bg-studio-light border border-studio-green/10 rounded-sm px-6 py-4 text-sm focus:outline-none focus:border-studio-green transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="bg-studio-dark text-white p-4 rounded-sm hover:bg-studio-green transition-all disabled:opacity-50"
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
