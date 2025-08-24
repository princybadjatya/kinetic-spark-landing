import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IconTarget, IconBulb, IconUsers, IconTrendingUp } from '@tabler/icons-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const features = [
    {
      icon: IconTarget,
      title: "Precision Requirements",
      description: "AI agents identify gaps, ambiguities, and missing details in your initial product concepts."
    },
    {
      icon: IconUsers,
      title: "Multi-Agent Collaboration",
      description: "Specialized AI agents simulate different roles to debate and refine requirements from all perspectives."
    },
    {
      icon: IconBulb,
      title: "Intelligent Validation",
      description: "Automated validation ensures requirements are actionable, testable, and development-ready."
    },
    {
      icon: IconTrendingUp,
      title: "Continuous Refinement",
      description: "Iterative improvement process that evolves requirements based on stakeholder feedback."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for feature cards
      gsap.utils.toArray('.feature-card').forEach((card: any, index) => {
        gsap.fromTo(card,
          { y: 100, opacity: 0, rotationX: -15 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Stats counter animation
      gsap.utils.toArray('.stat-number').forEach((stat: any) => {
        const endValue = parseInt(stat.textContent);
        gsap.fromTo(stat,
          { textContent: 0 },
          {
            textContent: endValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden">
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
            About <span className="gradient-text">Our Project</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Every great product begins with clear requirements. Yet, most teams struggle with ambiguity, misalignment, and missed details. Our Multi-Agent AI platform tackles this challenge by simulating diverse roles—like product manager, developer, tester, and customer advocate—to collaboratively refine and perfect requirements. The result: precise, actionable, and well-structured product documentation.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { number: 95, label: "Accuracy Rate", suffix: "%" },
            { number: 4, label: "AI Agents", suffix: "" },
            { number: 60, label: "Time Saved", suffix: "%" },
            { number: 100, label: "Requirements Refined", suffix: "+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-card p-6 hover-lift"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                <span className="stat-number">{stat.number}</span>{stat.suffix}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card glass-card p-8 hover-lift transform-3d group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-primary rounded-xl shadow-glow group-hover:shadow-accent transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-accent opacity-5 rounded-full blur-3xl" />
    </section>
  );
};

export default AboutSection;