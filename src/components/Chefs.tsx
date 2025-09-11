import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Award, Users } from "lucide-react";
import chefAhmadImage from "@/assets/chef-ahmad.jpg";
import chefGrilImage from "@/assets/girlchef.jpeg";
import chefWomenImage from "@/assets/men1.jpg";
import chefMardImage from "@/assets/mard.jpg";

import { Link } from "react-router-dom";

const Chefs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const chefs = [
    {
      name: "Chef Ahmad Al-Rashid",
      title: "Executive Chef",
      specialty: "Middle Eastern Cuisine",
      experience: "15+ Years",
      image: chefAhmadImage,
      description:
        "Master of traditional Arabic flavors with a modern twist, trained in the finest kitchens of Dubai and Paris.",
      achievements: [
        "James Beard Award",
        "Michelin Recognition",
        "Dubai Chef of the Year",
      ],
    },
    {
      name: "Chef Maria Santos",
      title: "Pastry Chef",
      specialty: "Desserts & Baking",
      experience: "12+ Years",
      image: chefGrilImage,
      description:
        "Artisan pastry chef creating exquisite desserts that perfectly blend European techniques with Middle Eastern flavors.",
      achievements: [
        "World Pastry Champion",
        "Gold Medal Winner",
        "Best Dessert Dubai 2023",
      ],
    },
    {
      name: "Chef Raj Patel",
      title: "Sous Chef",
      specialty: "Indian & Pakistani",
      experience: "10+ Years",
      image: chefMardImage,
      description:
        "Specializes in authentic biryani and curry preparations, bringing generations of family recipes to our kitchen.",
      achievements: [
        "Spice Master Award",
        "Best Biryani UAE",
        "Culinary Excellence",
      ],
    },
    {
      name: "Chef Elena Rossi",
      title: "International Chef",
      specialty: "Mediterranean & Italian",
      image: chefWomenImage,
      experience: "14+ Years",
      description:
        "Brings authentic Mediterranean flavors and Italian passion to create unforgettable dining experiences.",
      achievements: [
        "Italian Culinary Master",
        "Best Pizza Dubai",
        "Food Network Featured",
      ],
    },
  ];

  return (
    <section id="chefs" className="section-padding bg-cream" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Meet Our <span className="text-gradient-luxury">Master Chefs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Culinary artists who transform the finest ingredients into
            extraordinary experiences
          </p>
        </motion.div>

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

                {/* Decorative Ring */}
                <div className="absolute inset-0 ring-4 ring-gold/30 rounded-full group-hover:ring-gold/60 transition-colors"></div>
              </div>

              {/* Chef Info */}
              <h3 className="text-xl font-playfair font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                {chef.name}
              </h3>

              <p className="text-maroon font-semibold mb-2">{chef.title}</p>

              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-medium">Specialty:</span> {chef.specialty}
              </p>

              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-medium">Experience:</span>{" "}
                {chef.experience}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {chef.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center justify-center">
                  <Award className="w-4 h-4 mr-2 text-gold" />
                  Achievements
                </h4>

                <div className="space-y-1">
                  {chef.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="text-xs text-muted-foreground bg-gold/10 px-3 py-1 rounded-full"
                    >
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>

              {/* Chef Rating */}
              <div className="mt-6 flex justify-center items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">5.0</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold text-gradient-luxury mb-2">
                25+
              </div>
              <div className="text-muted-foreground">Expert Chefs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold text-gradient-luxury mb-2">
                100+
              </div>
              <div className="text-muted-foreground">Signature Dishes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold text-gradient-luxury mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Awards Won</div>
            </div>
          </div>

          <motion.div className="mt-12" whileHover={{ scale: 1.05 }}>
            {/* Button to Full Team Page */}
            <Link
              to="/full-team"
              className="btn-maroon flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Meet Our Full Team
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Chefs;
