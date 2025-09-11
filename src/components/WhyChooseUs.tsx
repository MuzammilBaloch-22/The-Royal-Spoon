import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-scroll';
import { Crown, Utensils, Heart, MapPin, Clock, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Crown,
      title: 'Royal Treatment',
      description: 'Experience dining fit for royalty with our personalized service and attention to every detail.',
      color: 'gold'
    },
    {
      icon: Utensils,
      title: 'Culinary Excellence',
      description: 'Award-winning chefs create masterpieces using the finest ingredients from around the world.',
      color: 'maroon'
    },
    {
      icon: Heart,
      title: 'Authentic Flavors',
      description: 'Traditional recipes passed down through generations, perfected with modern culinary techniques.',
      color: 'gold'
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Located in the heart of Dubai with stunning views and elegant ambiance that captivates.',
      color: 'maroon'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Every dish is prepared fresh daily with ingredients sourced from the finest suppliers.',
      color: 'gold'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'We stand behind every dish with our commitment to exceptional quality and customer satisfaction.',
      color: 'maroon'
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient-luxury">The Royal Spoon</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes us Dubai's premier fine dining destination
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card-luxury p-8 text-center group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className={`mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center shadow-elegant ${
                  feature.color === 'gold' 
                    ? 'bg-gradient-gold' 
                    : 'bg-gradient-maroon'
                }`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon 
                  className={`w-10 h-10 ${
                    feature.color === 'gold' 
                      ? 'text-gold-foreground' 
                      : 'text-maroon-foreground'
                  }`} 
                />
              </motion.div>

              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4 group-hover:text-gold transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              <motion.div
                className="mt-6 w-16 h-0.5 bg-gradient-luxury mx-auto"
                initial={{ width: 0 }}
                animate={isInView ? { width: 64 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action with Smooth Scroll */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-luxury p-12 rounded-2xl text-white shadow-luxury">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Ready for a Royal Dining Experience?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied guests who have made The Royal Spoon their favorite dining destination.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-50}
              >
                <motion.button
                  className="bg-white text-gold font-semibold px-8 py-4 rounded-lg hover:bg-cream transition-colors shadow-elegant"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reserve Your Table
                </motion.button>
              </Link>

              <Link
                to="about"
                smooth={true}
                duration={800}
                offset={-50}
              >
                <motion.button
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-gold transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Story
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
