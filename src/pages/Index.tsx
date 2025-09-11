import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Chefs from '@/components/Chefs';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Chefs />
      <WhyChooseUs />
      <Testimonials />
      {/* Make sure Contact component has id="contact" inside */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

