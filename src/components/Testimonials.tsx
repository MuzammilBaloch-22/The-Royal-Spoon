import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sheikh Mohammed Al-Maktoum',
      position: 'Business Executive',
      rating: 5,
      review:
        'The Royal Spoon delivers an extraordinary dining experience that perfectly captures the essence of luxury dining in Dubai. Every dish is a masterpiece, and the service is impeccable.',
      avatar: 'data:image/jpeg;base64,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',
    },
    {
      name: 'Sarah Al-Zahra',
      position: 'Food Critic',
      rating: 5,
      review:
        'As a food critic, I can confidently say that The Royal Spoon sets the gold standard for fine dining in the UAE. The flavors are authentic, the presentation is artistic, and the ambiance is simply royal.',
      avatar: 'data:image/jpeg;base64,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',
    },
    {
      name: 'Dr. Ahmed Hassan',
      position: 'Medical Professional',
      rating: 5,
      review:
        'We celebrated our anniversary here and it exceeded all expectations. The attention to detail, from the perfectly spiced biryani to the elegant table settings, made our evening truly memorable.',
      avatar: 'https://anavara.com/wp-content/uploads/2020/06/Dr.-Ahmed-Hassan-e1597958545756.png',
    },
    {
      name: 'Fatima Al-Rashid',
      position: 'Interior Designer',
      rating: 5,
      review:
        "The Royal Spoon is not just a restaurant, it's an experience. The interior design complements the exquisite cuisine perfectly. Every visit feels like stepping into a palace.",
      avatar: 'https://graziamagazine.com/me/wp-content/uploads/sites/16/2024/05/Her-Highness-Sheikha-Fatima-bint-Hazza-bin-Zayed-Al-Nahyan.jpg',
    },
    {
      name: 'Omar Al-Mansouri',
      position: 'Hotel Owner',
      rating: 5,
      review:
        'As someone in the hospitality industry, I appreciate excellence when I see it. The Royal Spoon consistently delivers world-class service and cuisine that rivals the best restaurants globally.',
      avatar: 'data:image/jpeg;base64,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',
    },
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-cream" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            What Our <span className="text-gradient-luxury">Guests Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our valued customers about their royal dining experiences
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative bg-background rounded-2xl shadow-luxury p-12 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-8 left-8 text-gold/20 text-6xl">
              <Quote />
            </div>

            <div className="relative z-10">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-gold text-gold mx-1"
                      />
                    )
                  )}
                </div>

                {/* Review Text */}
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light italic">
                  "{testimonials[currentTestimonial].review}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-gold">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-playfair font-bold text-foreground">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gold/10 hover:bg-gold hover:text-gold-foreground rounded-full flex items-center justify-center transition-colors group"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gold/10 hover:bg-gold hover:text-gold-foreground rounded-full flex items-center justify-center transition-colors group"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial
                    ? 'bg-gold'
                    : 'bg-gold/30 hover:bg-gold/60'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-gradient-luxury mb-2">
              4.9/5
            </div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-gradient-luxury mb-2">
              2,500+
            </div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-gradient-luxury mb-2">
              98%
            </div>
            <div className="text-muted-foreground">Return Rate</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Join our family of satisfied customers and create your own royal
            dining story.
          </p>
          <a href="#contact">
            <motion.button
              className="btn-luxury"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Table Today
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
