import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, Cpu, Globe, Zap } from 'lucide-react';

const WhyThiran = () => {
  const { t } = useLanguage();

  const icons = [<Cpu />, <Globe />, <Shield />, <Zap />];

  return (
    <section id="why" className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl lg:text-5xl font-bold mb-8"
            >
              {t.why.title}
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {t.why.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 glass-card border-white/5 hover:border-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary-neon group-hover:scale-110 transition-transform">
                    {React.cloneElement(icons[i % icons.length], { className: "w-6 h-6" })}
                  </div>
                  <h4 className="font-bold mb-2 uppercase tracking-tight">{feature.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <p className="text-sm italic text-white/80">
                “Built by a student founder with real-world execution. We understand the hustle and the technology.”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest">Student Founder</div>
                  <div className="text-[10px] text-white/40 uppercase">Thiran Launchpad</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {t.why.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-8 glass-card text-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.span 
                  className="text-4xl lg:text-5xl font-extrabold text-primary-neon neon-text mb-2 block"
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 group-hover:text-white transition-colors">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThiran;
