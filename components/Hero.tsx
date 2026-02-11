import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[128px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[128px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[128px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10 pt-20">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 backdrop-blur-md">
          <span className="text-brand-cyan text-sm font-semibold tracking-wide uppercase">Available for new projects</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
          We Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-accent animate-gradient">
            Digital Legacies
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          BrandSiteBuilder crafts stunning, high-performance websites that elevate your brand and drive real business results. From concept to launch, we are your partners in digital growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 glass-card rounded-full font-bold text-lg text-white hover:bg-white/10 transition-colors"
          >
            View Our Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-500" />
      </div>
    </div>
  );
};

export default Hero;