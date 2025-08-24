import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { IconArrowRight, IconEyeSpark, IconRocket, IconBolt } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating icons animation
      gsap.to('.floating-icon', {
        y: -20,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.5
      });

      // 3D card entrance animation
      gsap.fromTo('.hero-card', 
        { 
          rotationX: -45,
          rotationY: 15,
          scale: 0.8,
          opacity: 0,
          z: -200
        },
        {
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          opacity: 1,
          z: 0,
          duration: 1.2,
          ease: "back.out(2)",
          delay: 0.5
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={containerRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <IconEyeSpark className="floating-icon absolute top-20 left-20 w-8 h-8 text-primary opacity-20" />
        <IconRocket className="floating-icon absolute top-40 right-32 w-10 h-10 text-accent opacity-30" />
        <IconBolt className="floating-icon absolute bottom-40 left-32 w-6 h-6 text-primary-glow opacity-25" />
        <IconEyeSpark className="floating-icon absolute bottom-20 right-20 w-12 h-12 text-accent-glow opacity-20" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Turning Ideas into Clear <span className="gradient-text">Product Requirements</span>
            <br />
            with Multi-Agent AI
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Our platform leverages collaborative AI agents to refine, validate, and optimize product requirements—helping teams move from vision to execution faster.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground shadow-glow hover:shadow-accent transition-all duration-300 transform hover:scale-105 group"
            >
              Explore Project
              <IconArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-glass-border bg-glass hover:bg-glass-border text-foreground transition-all duration-300 transform hover:scale-105"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* 3D Hero Card */}
          <motion.div
            className="hero-card relative max-w-2xl mx-auto transform-3d"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          >
            <div className="glass-card p-8 hover-lift gradient-border glow-primary">
              <div className="grid grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-16 bg-gradient-card rounded-lg opacity-60"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, opacity: 0.8 }}
                  />
                ))}
              </div>
              <div className="mt-6 h-2 bg-gradient-primary rounded-full opacity-80" />
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="w-6 h-10 border-2 border-glass-border rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-gradient-primary rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;