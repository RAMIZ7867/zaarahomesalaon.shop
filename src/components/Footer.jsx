import React from 'react';
import { Heart } from 'lucide-react';

const Footer = ({ handleFeatureClick }) => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-pink-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">ZaaraHomeSalon</span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Your personal sanctuary for beauty and relaxation, delivered to your doorstep.
            </p>
          </div>

          <div>
            <span className="font-semibold mb-4 block text-gray-700">Services</span>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#services" className="hover:text-pink-600 transition-colors">Hair Care</a></li>
              <li><a href="#services" className="hover:text-pink-600 transition-colors">Skin Care</a></li>
              <li><a href="#services" className="hover:text-pink-600 transition-colors">Nail Art</a></li>
              <li><a href="#pricing" className="hover:text-pink-600 transition-colors">Packages</a></li>
            </ul>
          </div>

          <div>
            <span className="font-semibold mb-4 block text-gray-700">Company</span>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" onClick={handleFeatureClick} className="hover:text-pink-600 transition-colors">About Us</a></li>
              <li><a href="#" onClick={handleFeatureClick} className="hover:text-pink-600 transition-colors">Blog</a></li>
              <li><a href="#" onClick={handleFeatureClick} className="hover:text-pink-600 transition-colors">Careers</a></li>
              <li><a href="#" onClick={handleFeatureClick} className="hover:text-pink-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <span className="font-semibold mb-4 block text-gray-700">Support</span>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" onClick={handleFeatureClick} className="hover:text-pink-600 transition-colors">Help Center</a></li>
              <li><a href="#" onClick={handleFeatureClick} className="hover:text-pink-600 transition-colors">FAQs</a></li>
              <li><a href="#" onClick={handleFeatureClick} className="hover:text-pink-600 transition-colors">Booking Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ZaaraHomeSalon. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" onClick={handleFeatureClick} className="text-gray-500 hover:text-pink-600 transition-colors text-sm">Privacy Policy</a>
            <a href="#" onClick={handleFeatureClick} className="text-gray-500 hover:text-pink-600 transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;