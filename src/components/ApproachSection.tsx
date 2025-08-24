import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  IconBulb, 
  IconCode, 
  IconTestPipe, 
  IconRocket as IconLaunch,
  IconArrowRight,
  IconCheck 
} from '@tabler/icons-react';

gsap.registerPlugin(ScrollTrigger);

const ApproachSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const approaches = [
    {
      icon: IconBulb,
      step: "01",
      title: "Ideation & Strategy",
      description: "We start by understanding your vision and challenges, then craft a strategic roadmap that aligns with your business goals.",
      highlights: ["Market Research", "User Journey Mapping", "Technical Architecture", "Timeline Planning"]
    },
    {
      icon: IconCode,
      step: "02", 
      title: "Development & Design",
      description: "Our expert team brings your vision to life using cutting-edge technologies and human-centered design principles.",
      highlights: ["Modern Tech Stack", "Responsive Design", "Performance Optimization", "Security First"]
    },
    {
      icon: IconTestPipe,
      step: "03",
      title: "Testing & Refinement",
      description: "Rigorous testing ensures every feature works perfectly. We iterate based on feedback to deliver excellence.",
      highlights: ["Quality Assurance", "User Testing", "Performance Monitoring", "Continuous Improvement"]
    },
    {
      icon: IconLaunch,
      step: "04",
      title: "Launch & Support",
      description: "We ensure a smooth launch and provide ongoing support to help your product succeed and scale.",
      highlights: ["Deployment Strategy", "Monitoring Setup", "Team Training", "Ongoing Maintenance"]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for approach cards
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.approach-container',
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate approach cards in sequence
      gsap.utils.toArray('.approach-card').forEach((card: any, index) => {
        tl.fromTo(card,
          { 
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            rotationY: index % 2 === 0 ? -15 : 15,
            scale: 0.9
          },
          {
            x: 0,
            opacity: 1,
            rotationY: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(2)"
          }, 
          index * 0.3
        );
      });

      // Connect lines animation
      gsap.fromTo('.connect-line',
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.approach-container',
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Step number animations
      gsap.fromTo('.step-number',
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(2.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.approach-container',
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="approach" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
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
            Our <span className="gradient-text">Approach</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We follow a proven methodology that ensures every project delivers exceptional results. 
            Our approach combines innovation with reliability to create lasting value.
          </motion.p>
        </motion.div>

        {/* Approach Steps */}
        <div className="approach-container relative max-w-4xl mx-auto">
          {approaches.map((approach, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Connecting Line */}
              {index < approaches.length - 1 && (
                <div className="absolute left-1/2 top-full w-0.5 h-12 bg-gradient-primary opacity-30 connect-line transform -translate-x-0.5 z-0 hidden md:block" />
              )}

              <div className={`approach-card flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className="flex-1 glass-card p-8 hover-lift transform-3d group relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="step-number flex items-center justify-center w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full font-bold shadow-glow">
                        {approach.step}
                      </div>
                      <h3 className="text-2xl font-semibold group-hover:gradient-text transition-all duration-300">
                        {approach.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {approach.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {approach.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 1 + index * 0.3 + idx * 0.1 }}
                        >
                          <IconCheck className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow hover:shadow-accent transition-all duration-300 group cursor-pointer transform-3d"
                    whileHover={{ scale: 1.1, rotateY: 15 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.3, duration: 0.6, ease: "backOut" }}
                  >
                    <approach.icon className="w-10 h-10 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto gradient-border glow-primary">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our proven approach can bring your vision to life.
            </p>
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg shadow-glow hover:shadow-accent transition-all duration-300 transform hover:scale-105 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
              <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-accent opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default ApproachSection;