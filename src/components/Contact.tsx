import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop reload
    const formData = new FormData(e.target);

    setLoading(true);

    try {
      await fetch("https://formsubmit.co/muzambaloch22@gmail.com", {
        method: "POST",
        body: formData,
      });

      setPopup(true); // show popup
      setLoading(false);
      e.target.reset(); // clear inputs
      setTimeout(() => setPopup(false), 8000); // hide popup after 4 sec
    } catch (err) {
      console.error("Form submit error", err);
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+971 55 123 4567',
      subtitle: 'Available 24/7 for reservations',
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'theroyal-spoon@gmail.com',
      subtitle: 'We respond within 2 hours',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'Dubai, UAE',
      subtitle: 'Prime location in the heart of Dubai',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      detail: '11:00 AM - 12:00 AM',
      subtitle: 'Seven days a week',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            <span className="text-gradient-luxury">Reserve</span> Your Royal Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to embark on a culinary journey? Contact us to secure your table at Dubai&apos;s finest dining destination.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-8">
              Get in Touch
            </h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 card-luxury group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-shadow">
                  <info.icon className="w-7 h-7 text-gold-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-playfair font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {info.title}
                  </h4>
                  <p className="text-lg font-medium text-foreground mb-1">{info.detail}</p>
                  <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            className="card-luxury p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-8">
              Make a Reservation
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid md:grid-cols-2 gap-4">
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
    <input 
      type="text" 
      name="fullName"   // ✅ name added
      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors" 
      placeholder="Enter your full name" 
      required
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
    <input 
      type="tel" 
      name="phone"   // ✅ name added
      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors" 
      placeholder="+971 XX XXX XXXX" 
      required
    />
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
  <input 
    type="email" 
    name="email"   // ✅ name added
    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus-border-transparent transition-colors" 
    placeholder="your.email@example.com" 
    required
  />
</div>

<div className="grid md:grid-cols-2 gap-4">
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">Preferred Date *</label>
    <input 
      type="date" 
      name="date"   // ✅ name added
      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus-border-transparent transition-colors" 
      required
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">Preferred Time *</label>
    <select 
      name="time"   // ✅ name added
      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus-border-transparent transition-colors" 
      required
    >
      <option>Select time</option>
      <option>11:30 AM</option>
      <option>12:00 PM</option>
      <option>12:30 PM</option>
      <option>1:00 PM</option>
      <option>7:00 PM</option>
      <option>7:30 PM</option>
      <option>8:00 PM</option>
      <option>8:30 PM</option>
      <option>9:00 PM</option>
    </select>
  </div>
</div>

<div className="grid md:grid-cols-2 gap-4">
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">Number of Guests *</label>
    <select 
      name="guests"   // ✅ name added
      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus-border-transparent transition-colors" 
      required
    >
      <option>Select guests</option>
      <option>1 Guest</option>
      <option>2 Guests</option>
      <option>3 Guests</option>
      <option>4 Guests</option>
      <option>5 Guests</option>
      <option>6+ Guests</option>
    </select>
  </div>
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">Occasion (Optional)</label>
    <select 
      name="occasion"   // ✅ name added
      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus-border-transparent transition-colors"
    >
      <option>Select occasion</option>
      <option>Birthday</option>
      <option>Anniversary</option>
      <option>Business Dinner</option>
      <option>Date Night</option>
      <option>Other</option>
    </select>
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-foreground mb-2">Special Requests</label>
  <textarea 
    rows={4} 
    name="requests"   // ✅ name added
    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus-border-transparent transition-colors" 
    placeholder="Any dietary restrictions, special arrangements, or additional requests..."
  ></textarea>
</div>


              <motion.button
                type="submit"
                disabled={loading}
                className="w-full btn-luxury flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5 mr-2" />
                {loading ? "Submitting..." : "Confirm Reservation"}
              </motion.button>
            </form>

            {/* Popup inside same form */}
            {popup && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg text-center shadow-lg"
              >
                ✅ Thank you! Your reservation has been submitted.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


