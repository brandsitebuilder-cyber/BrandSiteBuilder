import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import QuoteForm from '../components/QuoteForm';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <QuoteForm />
    </main>
  );
};

export default Home;
