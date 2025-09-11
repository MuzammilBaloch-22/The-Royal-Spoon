import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Crown, Star, Users } from 'lucide-react';
import aboutImage from '@/assets/about-interior.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: Crown, value: '15+', label: 'Years of Excellence' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
    { icon: Users, value: '10K+', label: 'Happy Customers' },
  ];

  return (
    <section id="about" className="section-padding bg-cream" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            About <span className="text-gradient-luxury">The Royal Spoon</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where culinary artistry meets royal hospitality in the heart of Dubai
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-luxury">
              <img
                src={aboutImage}
                alt="The Royal Spoon elegant interior"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/20 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center text-3xl shadow-glow"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              👑
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-playfair font-semibold text-foreground">
              A Legacy of Culinary Excellence
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in 2008, The Royal Spoon has redefined fine dining in Dubai with our 
              perfect blend of traditional flavors and contemporary culinary techniques. Our 
              award-winning chefs craft each dish with passion, using only the finest ingredients 
              sourced from around the world.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From intimate dinners to grand celebrations, we create unforgettable experiences 
              in our luxuriously appointed dining rooms. Every visit to The Royal Spoon is a 
              journey through flavors that tell the story of culinary artistry and royal hospitality.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
            At The Royal Spoon, we don’t just serve meals—we craft timeless experiences. With every visit, guests become part of our story of elegance, flavor, and passion. Step in, and discover why we are Dubai’s true destination for luxury dining.
            </p>
         
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 card-luxury bg-background"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-elegant">
                <stat.icon className="w-8 h-8 text-gold-foreground" />
              </div>
              <div className="text-3xl font-playfair font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;