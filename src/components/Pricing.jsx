import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Gem, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = ({ handleFeatureClick }) => {
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

  const plans = [
    {
      name: "Essential Glow",
      price: "149 AED",
      description: "A perfect refresh for your beauty routine.",
      features: [
        "Classic Manicure & Pedicure",
        "Express Facial",
        "Basic Haircut & Style",
        "For Ladies or Kids"
      ],
      icon: <Star className="w-8 h-8 text-amber-500" />,
      popular: false
    },
    {
      name: "Radiant Diva",
      price: "249 AED",
      description: "Our most popular package for a full refresh.",
      features: [
        "Gel Manicure & Spa Pedicure",
        "Deep Cleansing Facial",
        "Hair Color Touch-up",
        "Eyebrow Shaping",
        "Free Kids' Haircut"
      ],
      icon: <Gem className="w-8 h-8 text-pink-500" />,
      popular: true
    },
    {
      name: "Luxe Indulgence",
      price: "349 AED",
      description: "The ultimate pampering experience.",
      features: [
        "Everything in Radiant Diva",
        "Full Body Massage (60 min)",
        "Advanced Anti-aging Facial",
        "Keratin Hair Treatment",
        "Special Gift Bag"
      ],
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-rose-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Our Pampering
            <span className="gradient-text"> Packages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect beauty package for you or your little one.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-pink-500 glow-effect' : 'hover:shadow-2xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="inline-block p-3 bg-rose-100 rounded-full mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.name}</h3>
                <p className="text-gray-500 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={handleFeatureClick}
                className={`w-full rounded-full py-3 ${
                  plan.popular ? 'btn-primary' : 'btn-outline'
                }`}
              >
                Choose Package
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;