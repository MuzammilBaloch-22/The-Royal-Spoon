import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Star, Award, Mail } from 'lucide-react';
import { useNavigate } from "react-router-dom";

import chefAhmadImage from '@/assets/chef-ahmad.jpg';
import chefGrilImage from '@/assets/girlchef.jpeg';
import chefWomenImage from '@/assets/men1.jpg';
import chefMardImage from '@/assets/mard.jpg';

const FullTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  const chefs = [
    {
      name: 'Chef Ahmad Al-Rashid',
      title: 'Executive Chef',
      specialty: 'Middle Eastern Cuisine',
      experience: '15+ Years',
      image: chefAhmadImage,
      description: 'Master of traditional Arabic flavors with a modern twist, trained in the finest kitchens of Dubai and Paris.',
      achievements: ['James Beard Award', 'Michelin Recognition', 'Dubai Chef of the Year']
    },
    {
      name: 'Chef Maria Santos',
      title: 'Pastry Chef',
      specialty: 'Desserts & Baking',
      experience: '12+ Years',
      image: chefGrilImage,
      description: 'Artisan pastry chef creating exquisite desserts that blend European techniques with Middle Eastern flavors.',
      achievements: ['World Pastry Champion', 'Gold Medal Winner', 'Best Dessert Dubai 2023']
    },
    {
      name: 'Chef Raj Patel',
      title: 'Sous Chef',
      specialty: 'Indian & Pakistani',
      experience: '10+ Years',
      image: chefMardImage,
      description: 'Specializes in authentic biryani and curry preparations, bringing generations of family recipes to our kitchen.',
      achievements: ['Spice Master Award', 'Best Biryani UAE', 'Culinary Excellence']
    },
    {
      name: 'Chef Elena Rossi',
      title: 'International Chef',
      specialty: 'Mediterranean & Italian',
      experience: '14+ Years',
      image: chefWomenImage,
      description: 'Brings authentic Mediterranean flavors and Italian passion to create unforgettable dining experiences.',
      achievements: ['Italian Culinary Master', 'Best Pizza Dubai', 'Food Network Featured']
    },
    {
      name: 'Chef Hannah Lee',
      title: 'Pastry Artist',
      specialty: 'French & Korean Desserts',
      experience: '8+ Years',
      image: "https://cookifi.com/blog/wp-content/uploads/2017/03/Female-Chef-decorating-Food2.jpg",
      description: 'Known for delicate pastries and fusion desserts combining French precision with Korean creativity.',
      achievements: ['Asian Pastry Cup Winner', 'Top 10 Chefs Dubai']
    },
    {
      name: 'Chef Michael Tan',
      title: 'Grill Master',
      specialty: 'BBQ & Steaks',
      experience: '11+ Years',
      image: "https://i.pinimg.com/736x/12/ac/60/12ac606896dfc98f4806b7acababed67.jpg",
      description: 'Specializes in flame-grilled meats and signature steak cuts with authentic smokehouse flavors.',
      achievements: ['Best BBQ Chef UAE', 'Steakhouse Champion']
    },
    {
      name: 'Chef Ayesha Khan',
      title: 'Culinary Innovator',
      specialty: 'Fusion Cuisine',
      experience: '9+ Years',
      image: "https://previews.123rf.com/images/entphotoneur/entphotoneur1805/entphotoneur180500570/101988648-beautiful-young-woman-chef-in-white-uniform-preparing-decorating-delicious-dessert-in-restaurant.jpg",
      description: 'Blending flavors of Asia and Europe, Chef Ayesha creates bold and unforgettable dishes.',
      achievements: ['Fusion Food Festival Winner', 'Chef of Tomorrow Award']
    },
    {
      name: 'Chef David Brooks',
      title: 'Seafood Specialist',
      specialty: 'Mediterranean Seafood',
      experience: '13+ Years',
      image: "https://media.istockphoto.com/id/1158244991/photo/happy-man-ready-to-cook-in-kitchen.jpg?s=612x612&w=0&k=20&c=KBUWz6VX7N_Z-mV-vfQGpitETXkJjaq6RCigTENSudE=",
      description: 'Expert in seafood with a focus on Mediterranean flavors, delivering fresh and elegant dining.',
      achievements: ['Seafood Master Award', 'Culinary Arts Medal']
    }
  ];

  return (
    <section id="full-team" className="section-padding bg-cream" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Meet Our <span className="text-gradient-luxury">Full Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate team of culinary artists crafting unforgettable experiences
          </p>
        </motion.div>

        {/* Grid of chefs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <motion.div
              key={index}
              className="card-luxury p-6 text-center group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Chef Image */}
              <div className="relative mb-6 mx-auto w-32 h-32 overflow-hidden rounded-full">
                {chef.image ? (
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-luxury flex items-center justify-center text-4xl text-white">
                    👨‍🍳
                  </div>
                )}
                <div className="absolute inset-0 ring-4 ring-gold/30 rounded-full group-hover:ring-gold/60 transition-colors"></div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-playfair font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                {chef.name}
              </h3>
              <p className="text-maroon font-semibold mb-2">{chef.title}</p>
              <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Specialty:</span> {chef.specialty}</p>
              <p className="text-sm text-muted-foreground mb-4"><span className="font-medium">Experience:</span> {chef.experience}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{chef.description}</p>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center justify-center">
                  <Award className="w-4 h-4 mr-2 text-gold" /> Achievements
                </h4>
                <div className="space-y-1">
                  {chef.achievements.map((ach, i) => (
                    <div key={i} className="text-xs text-muted-foreground bg-gold/10 px-3 py-1 rounded-full">
                      {ach}
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mt-6 flex justify-center items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">5.0</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Button */}
        <motion.div className="mt-16 text-center" whileHover={{ scale: 1.05 }}>
          <button
            className="btn-maroon"
            onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FullTeam;
