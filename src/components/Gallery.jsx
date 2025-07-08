import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-rose-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Our Beautiful
            <span className="gradient-text"> Work</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the transformations and happy moments we create.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <motion.div variants={fadeInUp} className="col-span-2 row-span-2">
            <img  alt="Elegant manicure with detailed nail art" className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" src="https://images.unsplash.com/photo-1663576758462-d33c07921da7" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <img  alt="Stylish haircut and blow-dry" className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" src="https://images.unsplash.com/flagged/photo-1569842587338-6d1de8e498e4" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <img  alt="Kid's fun and colorful haircut" className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" src="https://images.unsplash.com/photo-1488282396544-0212eea56a21" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <img  alt="Relaxing pedicure session" className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" src="https://images.unsplash.com/photo-1519419451778-14599a49ec41" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <img  alt="Glowing skin after a facial" className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" src="https://images.unsplash.com/photo-1702312722313-6aa6e76c1494" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;