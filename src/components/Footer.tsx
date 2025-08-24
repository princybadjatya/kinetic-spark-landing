import { motion } from 'framer-motion';
import { 
  IconRocket, 
  IconMail, 
  IconPhone, 
  IconMapPin,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconHeart,
  IconArrowUp
} from '@tabler/icons-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: IconBrandTwitter, href: "#", label: "Twitter" },
    { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
    { icon: IconBrandGithub, href: "#", label: "GitHub" },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Documentation", "API"]
    },
    {
      title: "Company", 
      links: ["About", "Blog", "Careers", "Contact"]
    },
    {
      title: "Resources",
      links: ["Help Center", "Community", "Tutorials", "Updates"]
    }
  ];

  return (
    <footer id="footer" className="relative bg-card border-t border-glass-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-primary rounded-xl shadow-glow">
                <IconRocket className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">KineticSpark</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Building the future of digital experiences through innovative technology 
              and human-centered design. Join us in creating solutions that matter.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <IconMail className="w-4 h-4 text-accent" />
                <span>hello@kineticspark.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <IconPhone className="w-4 h-4 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <IconMapPin className="w-4 h-4 text-accent" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h3 className="font-semibold mb-4 text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors relative group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-glass-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-card p-6 gradient-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 gradient-text">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground">
                  Get the latest updates and insights delivered to your inbox.
                </p>
              </div>
              
              <div className="flex gap-2 min-w-0 md:min-w-80">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-glass border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                />
                <motion.button
                  className="px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg shadow-glow hover:shadow-accent transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-glass-border bg-glass">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.div
              className="flex items-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span>© 2024 KineticSpark. Made with</span>
              <IconHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>in San Francisco</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-glass hover:bg-glass-border rounded-lg transition-all duration-300 text-muted-foreground hover:text-foreground group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="p-2 bg-gradient-primary text-primary-foreground rounded-lg shadow-glow hover:shadow-accent transition-all duration-300 ml-4"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <IconArrowUp className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-primary opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-accent opacity-5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;