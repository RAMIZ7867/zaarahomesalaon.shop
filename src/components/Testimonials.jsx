import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      quote: "The best home salon experience I've ever had! So professional and my hair has never looked better. My daughter loved her fun manicure too!",
      author: "Aisha Khan",
      role: "Happy Mom",
      avatar: "Smiling woman with long dark hair"
    },
    {
      quote: "Absolutely amazing facial. It was so relaxing, and my skin is glowing. It's a game-changer not having to leave the house.",
      author: "Fatima Al-Jamil",
      role: "Loyal Client",
      avatar: "Woman with a gentle smile and headscarf"
    },
    {
      quote: "Zaara Home Salon is my go-to for pre-event pampering. They are always on time, incredibly skilled, and make me feel like a queen.",
      author: "Jasmine Kaur",
      role: "Working Professional",
      avatar: "Confident woman in a smart casual outfit"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            What Our
            <span className="gradient-text"> Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stories from our valued clients who love our at-home service.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <img 
                  alt={`${testimonial.author} profile picture`}
                  className="w-12 h-12 rounded-full mr-4"
                 src="https://images.unsplash.com/photo-1649399045831-40bfde3ef21d" />
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;