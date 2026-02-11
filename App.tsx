import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden selection:bg-brand-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <QuoteForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;