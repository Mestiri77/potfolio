import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Marquee } from './components/Marquee';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-black relative">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Footer />
      <Marquee />
    </div>
  );
}
