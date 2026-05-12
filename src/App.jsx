import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyThiran from './components/WhyThiran';
import AIDemo from './components/AIDemo';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-background text-white selection:bg-primary selection:text-white">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 z-[60]">
          <div className="h-full bg-primary animate-[grow_linear_infinite] shadow-[0_0_10px_#FF1E1E]" style={{ width: '0%', animation: 'none' }} />
        </div>

        <Navbar />
        
        <main>
          <Hero />
          <Services />
          <WhyThiran />
          <AIDemo />
          <Portfolio />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
