import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';

const AIDemo = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! I am the Thiran AI assistant. How can I help you launch your project today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "That sounds like a great idea! Our team specializes in exactly that. Would you like to see our 'Business Launch' package?" 
      }]);
    }, 1500);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-neon text-[10px] font-bold uppercase tracking-widest mb-4"
            >
              <Sparkles className="w-3 h-3" /> Live Demo
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">{t.aiDemo.title}</h2>
            <p className="text-white/50">{t.aiDemo.subtitle}</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card border-white/5 overflow-hidden flex flex-col h-[500px] shadow-2xl"
          >
            {/* Chat Header */}
            <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary-neon">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold">Thiran AI Assistant</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-white/40 font-bold uppercase">Online & Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {messages.map((msg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'bot' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.role === 'bot' ? 'bg-white/5 rounded-tl-none border border-white/10' : 'bg-primary text-white rounded-tr-none'}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/5 bg-black/20">
              <div className="relative">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.aiDemo.placeholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-primary/50 transition-all"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-lg hover:bg-primary-neon transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;
