import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShoppingBag, User, Briefcase, X, ArrowRight } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);

  const serviceData = [
    { 
      key: 'local', 
      icon: <ShoppingBag className="w-8 h-8 text-primary-neon" />,
      tag: "Local Launch",
    },
    { 
      key: 'career', 
      icon: <User className="w-8 h-8 text-primary-neon" />,
      tag: "Career Launch",
    },
    { 
      key: 'business', 
      icon: <Briefcase className="w-8 h-8 text-primary-neon" />,
      tag: "Business Launch",
      featured: true
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            {t.services.title}
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceData.map((service, i) => {
            const data = t.services[service.key];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`relative p-8 glass-card border-white/5 flex flex-col h-full group ${service.featured ? 'neon-border scale-105 z-10 bg-primary/5' : ''}`}
              >
                {service.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-[10px] font-bold uppercase rounded-full shadow-lg shadow-primary/30">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6 p-4 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:neon-border transition-all">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-neon transition-colors uppercase tracking-tight">
                  {data.title}
                </h3>
                
                <p className="text-sm text-white/50 mb-6 min-h-[40px]">
                  {data.target}
                </p>

                <div className="space-y-4 mb-8 flex-grow">
                  {data.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-neon" />
                      </div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => setSelectedService(service.key)}
                    className="w-full py-3 rounded-xl font-bold uppercase text-xs border border-white/10 hover:border-primary/50 text-white transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    {t.services.learnMore}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <a href="#contact" className={`w-full py-4 rounded-xl font-bold uppercase text-center text-sm transition-all ${service.featured ? 'bg-primary text-white hover:bg-primary-neon' : 'bg-primary/10 text-primary-neon hover:bg-primary/20'}`}>
                    {data.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detailed Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass-card bg-surface p-8 lg:p-12 border-primary/20 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <div className="text-primary-neon font-bold uppercase tracking-[0.3em] text-xs mb-2">Service Details</div>
                <h3 className="text-3xl lg:text-4xl font-black mb-6 uppercase tracking-tighter">
                  {t.services[selectedService].title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {t.services[selectedService].details}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {t.services[selectedService].features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-neon" />
                    </div>
                    <span className="text-sm font-medium text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-widest hover:bg-primary-neon transition-all"
              >
                {t.services[selectedService].cta}
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
