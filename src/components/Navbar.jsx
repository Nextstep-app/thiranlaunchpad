import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.whyThiran, href: "#why" },
    { name: t.nav.projects, href: "#portfolio" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center cursor-pointer group"
        >
          <div className="relative flex flex-col items-start leading-none">
            <div className="flex items-center">
              <span className="text-3xl font-black tracking-tighter text-white group-hover:text-primary transition-colors">
                THIRAN
              </span>
              {/* Logo Arrow Swoosh Recreated with SVG */}
              <div className="absolute -right-6 -top-2 w-12 h-12 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-primary stroke-[6] animate-pulse">
                  <path d="M10 80 Q 50 70 90 20" strokeLinecap="round" />
                  <path d="M75 20 L 90 20 L 90 35" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase mt-1">
              LAUNCHPAD
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-primary/50 transition-all text-xs font-bold uppercase"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'en' ? 'தமிழ்' : 'English'}
          </button>
          
          <a 
            href="#contact"
            className="hidden sm:block px-6 py-2 bg-primary hover:bg-primary-neon text-white rounded-full text-sm font-bold uppercase transition-all hover:scale-105 active:scale-95"
          >
            {t.nav.cta}
          </a>

          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 bg-primary text-center text-white rounded-xl font-bold uppercase"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
