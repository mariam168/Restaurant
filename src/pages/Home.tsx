import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/home/HeroSection';
import OurMenue from '../components/home/OurMenue';
import OurBestChef from '../components/home/OurBestChef';
import OurStory from '../components/home/OouStory';
import Footer from '../components/Footer';
const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <OurMenue />
      <OurBestChef />
      <OurStory />
      <Footer />
    </main>
  );
};

export default Home;