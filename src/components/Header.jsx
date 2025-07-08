import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ handleFeatureClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">ZaaraHomeSalon</span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-pink-600 transition-colors">Services</a>
            <a href="#pricing" className="text-gray-600 hover:text-pink-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-pink-600 transition-colors">Testimonials</a>
            <Button onClick={handleFeatureClick} variant="outline" className="btn-outline rounded-full">
              Login
            </Button>
            <Button onClick={handleFeatureClick} className="btn-primary rounded-full">
              Book Now
            </Button>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-pink-600" /> : <Menu className="w-6 h-6 text-pink-600" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-effect border-t border-pink-100"
        >
          <div className="px-4 py-4 space-y-4">
            <a href="#services" className="block text-gray-600 hover:text-pink-600 transition-colors">Services</a>
            <a href="#pricing" className="block text-gray-600 hover:text-pink-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="block text-gray-600 hover:text-pink-600 transition-colors">Testimonials</a>
            <Button onClick={handleFeatureClick} variant="outline" className="w-full btn-outline rounded-full">
              Login
            </Button>
            <Button onClick={handleFeatureClick} className="w-full btn-primary rounded-full">
              Book Now
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;