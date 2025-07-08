import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = ({ handleFeatureClick }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          {...fadeInUp}
          className="bg-white/70 rounded-3xl p-8 sm:p-12 glow-effect border border-pink-100"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Ready to be
            <span className="gradient-text"> Pampered?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Treat yourself to a luxurious beauty experience without leaving your home. Book your appointment today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleFeatureClick}
              size="lg"
              className="btn-primary text-lg px-8 py-6 rounded-full"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book an Appointment
            </Button>
            <a href="tel:+971589189396">
              <Button
                variant="outline"
                size="lg"
                className="btn-outline text-lg px-8 py-6 rounded-full w-full"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;