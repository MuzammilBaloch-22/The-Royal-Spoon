import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import heroImage from '@/assets/hero-restaurant.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="The Royal Spoon luxury restaurant interior"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.55)' }} // Darker overlay
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="inline-block">🍽️</span>{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #B8860B, #FFD700)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 2px 4px rgba(160, 141, 37, 0.7)'
              }}
            >
              The Royal Spoon
            </span>{' '}
            <span className="inline-block">🥘</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-8 font-semibold"
            style={{
              color: '#FFEFD5', // warm cream-gold
              textShadow: '0 1px 3px rgba(0,0,0,0.6)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Dubai's Finest Dining Experience
          </motion.p>

          <motion.p
            className="text-lg md:text-xl mb-12 text-cream/95 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Indulge in culinary excellence where traditional flavors meet modern luxury 
            in the heart of Dubai's most prestigious dining destination.
          </motion.p>

          {/* Smooth Scroll Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-50} // adjust for sticky headers if any
            >
              <motion.button
                className="btn-luxury text-lg px-12 py-5"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 15px #FFD700'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Reserve Your Table
              </motion.button>
            </Link>

            <Link
              to="menu"
              smooth={true}
              duration={800}
              offset={-50}
            >
              <motion.button
                className="btn-outline-gold text-lg px-12 py-5 border-cream text-cream hover:bg-cream hover:text-foreground"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Menu
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-2 bg-cream/50 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 text-gold/20 text-6xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ✨
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 text-gold/20 text-4xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        🌟
      </motion.div>
    </section>
  );
};

export default Hero;
