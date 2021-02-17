import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import IntroSection from '../IntroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <IntroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;