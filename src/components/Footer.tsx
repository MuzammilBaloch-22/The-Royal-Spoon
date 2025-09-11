import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/muzammil.baloch.541442', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/muzammil_baloch_22/', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/muzambaloch22?t=57b5UW7mVETO4eQ3tA5HvA&s=09', label: 'Twitter' },
    { icon: Youtube, href: 'https://www.youtube.com/@MuzammilAhmed-h8r', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'Meet Our Chefs', href: '#chefs' },
    { name: 'Customer Reviews', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleSubscribe = () => {
    if (email.trim() === "") {
      setToast("⚠️ Please enter a valid email address.");
    } else {
      setToast(`✅ Thanks for subscribing, ${email}! 🚀`);
      setEmail("");
    }
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="section-padding border-b border-white/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
            
            {/* Brand & Description */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-3xl">🍽️</span>
                <h3 className="text-2xl font-playfair font-bold text-gradient-gold">
                  The Royal Spoon
                </h3>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6">
                Dubai's premier fine dining destination where culinary excellence meets royal hospitality. 
                Experience the finest flavors in an atmosphere of luxury and elegance.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone className="w-5 h-5 text-gold" />
                  <span>+971 55 123 4567</span>
                </div>
                
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail className="w-5 h-5 text-gold" />
                  <span>theroyal-spoon@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span>Dubai, UAE</span>
                </div>
                
                <div className="flex items-center space-x-3 text-white/80">
                  <Clock className="w-5 h-5 text-gold" />
                  <span>11:00 AM – 12:00 Midnight</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-playfair font-bold text-white mb-6">
                Quick Links
              </h4>
              
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-white/80 hover:text-gold transition-colors duration-300 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-gold/50 rounded-full mr-3 group-hover:bg-gold transition-colors"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-playfair font-bold text-white mb-6">
                Stay Connected
              </h4>
              
              <p className="text-white/80 mb-6">
                Subscribe to our newsletter for exclusive offers and updates from The Royal Spoon.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-md text-white placeholder-white/60 focus:outline-none focus:border-gold transition-colors text-sm"
                  />
                  <motion.button
                    onClick={handleSubscribe}
                    className="px-4 py-2 bg-gradient-gold text-gold-foreground rounded-r-md font-medium hover:shadow-glow transition-shadow text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h5 className="text-white font-semibold mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center text-white hover:text-gold-foreground transition-colors group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center">
            
            {/* Centered Text */}
            <div className="text-white/60 text-sm text-center">
              © 2024 The Royal Spoon. All rights reserved.  
              <span className="ml-1">
                Designed & Developed in Dubai by{" "}
                <a
                  href="https://www.linkedin.com/in/muzammil-baloch-0902612a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-white transition-colors font-medium"
                >
                  Muzammil Baloch
                </a>
              </span>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-10 text-gold/10 text-4xl animate-pulse">
        ✨
      </div>
      
      <div className="absolute top-20 right-10 text-gold/10 text-3xl animate-pulse">
        🌟
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 bg-white/10 backdrop-blur-md border border-gold/30 text-white px-4 py-3 rounded-xl shadow-lg text-sm"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
