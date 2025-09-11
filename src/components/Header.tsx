import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Chefs', href: '#chefs' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-elegant' : 'bg-transparent'
      }`}
      style={{
        background: isScrolled
          ? 'linear-gradient(to right, rgba(0,0,0,0.95), rgba(0,0,0,0.85))'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <span className="text-2xl">🍽️</span>
            <h1 className="text-2xl font-playfair font-bold text-gradient-luxury">
              The Royal Spoon
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{
                  scale: 1.1,
                  textShadow: '0 0 8px #FFD700, 0 0 12px #FFD700',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.href.replace('#', '')}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="font-bold cursor-pointer"
                  style={{
                    color: '#FFD700',
                    textShadow: '0 1px 3px rgba(0,0,0,0.6)',
                  }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div
              className="flex items-center space-x-2 text-sm font-bold"
              style={{
                color: '#FFD700',
                textShadow: '0 1px 3px rgba(0,0,0,0.6)',
              }}
            >
              <Phone size={16} />
              <span>+971 55 123 4567</span>
            </div>

            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
            >
              <motion.button
                className="btn-luxury"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reserve Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            style={{ color: '#FFD700' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pt-4 pb-2 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href.replace('#', '')}
                smooth={true}
                duration={600}
                offset={-80}
                className="block py-2 font-bold cursor-pointer"
                style={{
                  color: '#FFD700',
                  textShadow: '0 1px 3px rgba(0,0,0,0.6)',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <div
                className="flex items-center space-x-2 text-sm font-bold"
                style={{
                  color: '#FFD700',
                  textShadow: '0 1px 3px rgba(0,0,0,0.6)',
                }}
              >
                <Phone size={16} />
                <span>+971 55 123 4567</span>
              </div>
              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
              >
                <button className="btn-luxury w-full">Reserve Now</button>
              </Link>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
