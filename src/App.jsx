import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function App() {
  const { toast } = useToast();

  const handleFeatureClick = () => {
    toast({
      title: "🚧 Booking Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Zaara Home Salon - Premium Beauty Services for Ladies & Kids</title>
        <meta name="description" content="Experience luxury beauty treatments in the comfort of your home. Zaara Home Salon offers expert services for ladies and kids, from hairstyling to manicures." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 text-gray-800">
        <Header handleFeatureClick={handleFeatureClick} />
        
        <main>
          <Hero handleFeatureClick={handleFeatureClick} />
          <Services handleFeatureClick={handleFeatureClick} />
          <Gallery />
          <Pricing handleFeatureClick={handleFeatureClick} />
          <Testimonials />
          <CTA handleFeatureClick={handleFeatureClick} />
        </main>

        <Footer handleFeatureClick={handleFeatureClick} />

        <Toaster />
      </div>
    </>
  );
}

export default App;