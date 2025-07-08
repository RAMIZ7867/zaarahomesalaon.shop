import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Droplet } from 'lucide-react';

const Services = ({ handleFeatureClick }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: <Scissors className="w-8 h-8 text-pink-600" />,
      title: "Hair Care",
      description: "Stylish cuts, vibrant colors, and rejuvenating treatments for both ladies and kids."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-600" />,
      title: "Skin Care",
      description: "Revitalizing facials and treatments to give your skin a radiant, healthy glow."
    },
    {
      icon: <Droplet className="w-8 h-8 text-rose-600" />,
      title: "Nail Art",
      description: "Chic manicures, durable gel polish, and creative nail art to express your style."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Our Signature
            <span className="gradient-text"> Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expertly crafted beauty treatments using premium products, just for you.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
              onClick={handleFeatureClick}
            >
              <div className="inline-block p-4 bg-rose-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;