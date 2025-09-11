import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import chickenBiryaniImage from '@/assets/chicken.jpg';
import muttonBiryani from '@/assets/mutton biryani.jpg';
import beefKorma from '@/assets/beef.jpg';
import lambKosa from '@/assets/lamb.jpg';
import pizzaChicken from '@/assets/pizza.jpg';
import burgerZinger from '@/assets/burger.webp';
import shawarmaChicken from '@/assets/shawarma.jpg';
import fishChips from '@/assets/fish.jpg';
import humanSap from '@/assets/human.jpg';
import tabboulehBan from '@/assets/tabbouleh.jpg';
import garlicNan from '@/assets/garlic.jpg';
import mezzePlatter from '@/assets/mezz plater.jpg';
import baklavaDes from '@/assets/baklava.jpg';
import kunafaDes from '@/assets/kunafa.webp';
import chocolateFondant from '@/assets/chocolate.jpg';
import cremeBrylee from '@/assets/creme.webp';
import arabicCoffee from '@/assets/arabic.webp';
import freshJuice from '@/assets/freash.jpg';
import mintTea from '@/assets/mint tea.webp';
import royalSmoothie from '@/assets/smoothie.webp';




const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState('main');

  const categories = [
    { id: 'main', name: 'Main Dishes', icon: '🍛' },
    { id: 'fast', name: 'Fast Food', icon: '🍕' },
    { id: 'sides', name: 'Sides', icon: '🥗' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' },
  ];

  const menuItems = {
    main: [
      { name: 'Chicken Biryani', price: 'AED 18', description: 'Aromatic basmati rice with tender chicken and exotic spices',image: chickenBiryaniImage },
      { name: 'Mutton Biryani', price: 'AED 22', description: 'Slow-cooked mutton with fragrant rice and saffron',image: muttonBiryani},
      { name: 'Beef Korma', price: 'AED 20', description: 'Rich and creamy beef curry with traditional spices',image: beefKorma},
      { name: 'Lamb Kabsa', price: 'AED 24', description: 'Traditional Arabian rice dish with succulent lamb',image: lambKosa},
    ],
    fast: [
      { name: 'Chicken Pizza', price: 'AED 25', description: 'Wood-fired pizza with premium chicken toppings',image: pizzaChicken},
      { name: 'Zinger Burger', price: 'AED 18', description: 'Spicy crispy chicken burger with special sauce',image: burgerZinger},
      { name: 'Shawarma Wrap', price: 'AED 15', description: 'Authentic Middle Eastern wrap with tender meat',image: shawarmaChicken},
      { name: 'Fish & Chips', price: 'AED 22', description: 'Golden battered fish with crispy seasoned fries', image:fishChips },
    ],

    sides: [
      { name: 'Hummus & Pita', price: 'AED 12', description: 'Creamy chickpea dip with warm pita bread',image: humanSap },
      { name: 'Tabbouleh Salad', price: 'AED 14', description: 'Fresh parsley salad with tomatoes and bulgur',image: tabboulehBan},
      { name: 'Garlic Naan', price: 'AED 8', description: 'Soft tandoor bread with garlic and herbs',image: garlicNan},
      { name: 'Mezze Platter', price: 'AED 28', description: 'Selection of Middle Eastern appetizers',image: mezzePlatter},
    ],
    desserts: [
      { name: 'Baklava', price: 'AED 16', description: 'Honey-soaked pastry with nuts and phyllo',image: baklavaDes},
      { name: 'Kunafa', price: 'AED 18', description: 'Traditional Arabic dessert with cheese and syrup',image:kunafaDes},
      { name: 'Chocolate Fondant', price: 'AED 20', description: 'Warm chocolate cake with molten center',image: chocolateFondant},
      { name: 'Crème Brûlée', price: 'AED 15', description: 'Classic French custard with caramelized sugar',image: cremeBrylee},
    ],  
    beverages: [
      { name: 'Arabic Coffee', price: 'AED 8', description: 'Traditional qahwa with cardamom and dates',image: arabicCoffee},
      { name: 'Fresh Juice', price: 'AED 12', description: 'Daily selection of seasonal fruit juices',image:freshJuice},
      { name: 'Mint Tea', price: 'AED 6', description: 'Refreshing Moroccan mint tea',image: mintTea},
      { name: 'Royal Smoothie', price: 'AED 15', description: 'Signature blend of exotic fruits and herbs',image: royalSmoothie},
    ],
  };                 

  return (
    <section id="menu" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Our <span className="text-gradient-luxury">Exquisite Menu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover a world of flavors crafted by our master chefs using the finest ingredients
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-luxury text-white shadow-luxury'
                  : 'bg-card text-foreground hover:bg-gold/10 border border-border'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <motion.div
              key={index}
              className="card-menu p-6 group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {item.image && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-playfair font-semibold text-foreground group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
                <span className="text-2xl font-bold text-gradient-luxury">
                  {item.price}
                </span>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {item.description}
              </p>
               
               
              <motion.button
  className="w-full py-2 px-4 bg-gradient-gold text-gold-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Order Now
</motion.button>

            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Can't decide? Let our chefs create a personalized tasting menu for you.
          </p>
          <motion.button
  className="btn-maroon"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Book Chef's Table Experience
</motion.button>

        </motion.div>
      </div>
    </section>
  );

};

export default Menu;