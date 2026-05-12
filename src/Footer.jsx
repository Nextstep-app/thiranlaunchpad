import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Phone, MapPin, Globe, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Footer = () => {
  const { t, lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: 'Student',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert(t.footer.form.errors.required);
      setIsSubmitting(false);
      return;
    }

    try {
      // Web3Forms submission
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5f39ff8d-ce3e-42ea-9834-4fca543d43ae", // In a real app, use environment variables
          subject: `New Inquiry from ${formData.name}`,
          from_name: "Thiran Launchpad Website",
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');

        // Auto-redirect to WhatsApp after 2 seconds
        setTimeout(() => {
          const whatsappMsg = `Hello Thiran Launchpad,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nBusiness Type: ${formData.businessType}\nProject Requirement: ${formData.message}\n\nI would like to know more about your services.`;
          const encodedMsg = encodeURIComponent(whatsappMsg);
          window.open(`https://wa.me/918056547565?text=${encodedMsg}`, '_blank');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="pt-24 pb-12 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t.footer.heading}
            </h2>
            <p className="text-xl text-white/50 mb-10 max-w-md">
              {t.footer.subheading}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/70 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20">
                  <Mail className="w-5 h-5" />
                </div>
                <span>thiranprivateltd@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-white/70 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+91 80565 47565</span>
              </div>
              <div className="flex items-center gap-4 text-white/70 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Tamil Nadu, India</span>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Globe, MessageCircle, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative glass-card p-8 border-white/10 overflow-hidden"
          >
            {/* Success Overlay */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-10 bg-surface/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{t.footer.success.title}</h3>
                  <p className="text-white/60 mb-8">{t.footer.success.subtitle}</p>
                  <div className="flex items-center gap-2 text-primary-neon font-bold text-sm animate-pulse">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t.footer.success.redirecting}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">{t.footer.form.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">{t.footer.form.phone}</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-all text-sm"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">{t.footer.form.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-all text-sm"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">{t.footer.form.type}</label>
                <div className="relative">
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 appearance-none transition-all text-sm"
                  >
                    {t.footer.form.types.map((type, i) => <option key={i} className="bg-surface">{type}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    ▼
                  </div>
                </div>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">{t.footer.form.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 resize-none transition-all text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`sm:col-span-2 py-4 rounded-xl font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 group relative overflow-hidden ${isSubmitting ? 'bg-white/10 text-white/50 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-neon shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98]'}`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t.footer.form.sending}
                  </>
                ) : (
                  <>
                    {t.footer.form.submit}
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              </button>

              {submitStatus === 'error' && (
                <div className="sm:col-span-2 flex items-center gap-2 text-red-500 text-xs font-bold uppercase mt-2">
                  <AlertCircle className="w-4 h-4" />
                  Failed to send. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-white text-[10px]">T</div>
            <span>Thiran Launchpad</span>
          </div>
          <div>{t.footer.rights}</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918056547565"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl z-50 group border-4 border-white/10"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-20 bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Chat on WhatsApp
        </span>
      </motion.a>
    </footer>
  );
};

export default Footer;
