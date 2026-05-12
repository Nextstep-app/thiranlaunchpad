import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Rocket, Zap, ChevronRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary-dark/30 rounded-full blur-[100px] animate-float" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-neon text-sm font-bold uppercase tracking-widest mb-6"
            >
              <Zap className="w-4 h-4" />
              {t.hero.tagline}
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8">
              {t.hero.mainHeading.split(' ').map((word, i) => (
                <span key={i} className={word === 'AI-Powered' || word === 'AI' ? 'text-primary-neon neon-text' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <p className="text-lg lg:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
              {t.hero.subheading}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase flex items-center gap-2 group transition-all hover:bg-primary-neon shadow-lg shadow-primary/20"
              >
                {t.hero.ctaLaunch}
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
              
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 hover:border-primary/50 text-white rounded-xl font-bold uppercase flex items-center gap-2 transition-all"
              >
                {t.hero.ctaServices}
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Floating Stats or Trust Badge */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-surface flex items-center justify-center text-[10px] font-bold">
                    USER
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/40">
                <span className="text-white font-bold">3+</span> Businesses Launched
              </p>
            </div>
          </motion.div>

          {/* Hero Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* AI Dashboard Mockup */}
            <div className="glass-card p-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] uppercase tracking-tighter opacity-40 font-bold">AI Analytics Pro</div>
              </div>
              <div className="space-y-3">
                <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-20 bg-primary/20 rounded-lg flex items-end p-2">
                    <div className="w-full h-1/2 bg-primary/40 rounded-t" />
                  </div>
                  <div className="h-20 bg-primary/10 rounded-lg flex items-end p-2">
                    <div className="w-full h-3/4 bg-primary/40 rounded-t" />
                  </div>
                  <div className="h-20 bg-primary/5 rounded-lg flex items-end p-2">
                    <div className="w-full h-1/4 bg-primary/40 rounded-t" />
                  </div>
                </div>
                <div className="h-24 bg-white/5 rounded-lg flex items-center justify-center border border-dashed border-white/10">
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Growth Forecast Active</span>
                </div>
              </div>
            </div>

            {/* Floating Chatbot UI */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-4 glass-card p-3 w-48 shadow-2xl border-primary/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-primary-neon flex items-center justify-center">
                  <MessageCircle className="w-3 h-3" />
                </div>
                <span className="text-[10px] font-bold">AI Assistant</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: [-100, 200] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1/3 h-full bg-primary-neon"
                />
              </div>
              <p className="text-[8px] mt-2 text-white/50">"How can I scale your business today?"</p>
            </motion.div>

            {/* Neon Glow Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-primary/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest">Scroll</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
