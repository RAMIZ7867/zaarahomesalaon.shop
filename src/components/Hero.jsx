import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ handleFeatureClick }) => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-rose-50/50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6 border border-pink-100">
            <Sparkles className="w-4 h-4 text-pink-500 mr-2" />
            <span className="text-sm text-pink-700">Luxury Beauty Services at Home</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-gray-800">
            Elegance & Comfort,
            <br />
            <span className="gradient-text">Delivered to You</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover a new level of convenience with Zaara Home Salon. We bring professional hair, skin, and nail services for ladies and kids right to your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleFeatureClick}
              size="lg"
              className="btn-primary text-lg px-8 py-6 rounded-full glow-effect"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book Your Session
            </Button>
            <Button
              onClick={handleFeatureClick}
              variant="outline"
              size="lg"
              className="btn-outline text-lg px-8 py-6 rounded-full"
            >
              View Services
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="bg-white/50 rounded-2xl p-4 sm:p-8 glow-effect border border-pink-100">
            <img  alt="Woman receiving a relaxing facial treatment" className="w-full rounded-xl shadow-2xl" src="https://images.unsplash.com/photo-1688497764622-84cbbd36cb1d" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;