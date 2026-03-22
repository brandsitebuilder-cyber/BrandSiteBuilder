import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import QuoteForm from '../components/QuoteForm';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <QuoteForm />
    </main>
  );
};

export default Home;
