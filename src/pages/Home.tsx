import React from 'react';
import HeroSection from '../components/home/HeroSection';
import OurMenue from '../components/home/OurMenue';
import OurBestChef from '../components/home/OurBestChef';
import OurStory from '../components/home/OouStory';
const Home: React.FC = () => {
  return (
    <main>
      
      <HeroSection />
      <OurMenue />
      <OurBestChef />
      <OurStory />
   
    </main>
  );
};

export default Home;