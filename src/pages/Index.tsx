import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MotiveSection from '@/components/MotiveSection';
import ApproachSection from '@/components/ApproachSection';
import Footer from '@/components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh();

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MotiveSection />
        <ApproachSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
