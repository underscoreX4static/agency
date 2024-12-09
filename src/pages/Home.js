import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import Stats from '../components/stats';
import Painpoints from '../components/painpoints';
import WhyUs from '../components/whyus';
import Services from '../components/services';
import BrainAnimation from '../components/brainanimation'; // Importer le composant BrainAnimation
import Faqq from '../components/faqq'
import Blog from '../components/blog';
import Cta from '../components/cta';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Painpoints />
      <WhyUs />
      <BrainAnimation /> 
      <Services />
      <Cta />
      <Faqq />
      <Blog />
      <Footer/>
  
    </div>
  );
}

export default Home;
