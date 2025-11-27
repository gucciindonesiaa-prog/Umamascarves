import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Sparkles, Loader2 } from 'lucide-react';
import { getFashionAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIStylist: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Halo! Saya Umama AI Stylist. Ada yang bisa saya bantu untuk mix & match outfit hari ini?', timestamp: new Date() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history strings for context
    const history = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`);
    
    const responseText = await getFashionAdvice(userMsg.text, history);
    
    const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] h-[500px] shadow-2xl rounded-2xl overflow-hidden flex flex-col mb-4 border border-gray-100 animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-secondary to-[#a39485] p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Sparkles size={16} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Umama AI Stylist</h3>
                <p className="text-[10px] text-white/80">Powered by Gemini 2.5</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-secondary text-white rounded-br-none' 
                      : 'bg-white text-gray-700 rounded-bl-none border border-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-2 shadow-sm">
                  <Loader2 size={16} className="animate-spin text-secondary" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Tanya rekomendasi warna..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-secondary text-white p-2 rounded-full hover:bg-[#7a6d5d] disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-secondary text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#7a6d5d] transition-all duration-300 hover:scale-105"
        >
          <div className="relative">
             <MessageCircle size={24} />
             <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border border-secondary"></span>
          </div>
          <span className="font-medium text-sm pr-1">Tanya Stylist</span>
        </button>
      )}
    </div>
  );
};

export default AIStylist;