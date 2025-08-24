import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IconHeart, IconWorld, IconShield, IconRocket } from '@tabler/icons-react';

gsap.registerPlugin(ScrollTrigger);

const MotiveSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const motives = [
    {
      icon: IconHeart,
      title: "Passion for Excellence",
      description: "We believe that great products are born from genuine passion and dedication to perfection."
    },
    {
      icon: IconWorld,
      title: "Global Impact",
      description: "Our vision extends beyond borders, aiming to create solutions that benefit communities worldwide."
    },
    {
      icon: IconShield,
      title: "Trust & Reliability",
      description: "Building lasting relationships through transparent communication and dependable solutions."
    },
    {
      icon: IconRocket,
      title: "Future Innovation",
      description: "Constantly pushing the boundaries of what's possible with emerging technologies."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for the motive cards
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.motives-grid',
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate motive cards with 3D effect
      gsap.utils.toArray('.motive-card').forEach((card: any, index) => {
        tl.fromTo(card,
          { 
            y: 80, 
            opacity: 0, 
            rotationX: -20,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(2)"
          }, 
          index * 0.15
        );
      });

      // Floating animation for icons
      gsap.to('.motive-icon', {
        y: -10,
        rotation: 5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: {
          each: 0.3,
          from: "random"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our <span className="gradient-text">Motive</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Why we built this? Because we believe in the transformative power of technology 
            when it's applied with purpose, passion, and a genuine desire to make a difference 
            in people's lives.
          </motion.p>

          {/* Hero Quote */}
          <motion.blockquote
            className="text-2xl md:text-3xl font-light italic text-center glass-card p-8 gradient-border"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="gradient-text">"Innovation isn't just about technology—</span>
            <br />
            it's about creating meaningful connections and empowering human potential."
          </motion.blockquote>
        </motion.div>

        {/* Motives Grid */}
        <div className="motives-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {motives.map((motive, index) => (
            <motion.div
              key={index}
              className="motive-card glass-card p-6 text-center hover-lift transform-3d group relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg" />
              
              <div className="relative z-10">
                <div className="motive-icon mb-6 inline-flex p-4 bg-gradient-primary rounded-2xl shadow-glow group-hover:shadow-accent transition-all duration-300 group-hover:scale-110">
                  <motive.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 group-hover:gradient-text transition-all duration-300">
                  {motive.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {motive.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto gradient-border glow-primary">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Ready to Join Our Mission?
            </h3>
            <p className="text-muted-foreground mb-6">
              Be part of something bigger. Let's create solutions that matter together.
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg shadow-glow hover:shadow-accent transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-accent opacity-5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-primary opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default MotiveSection;