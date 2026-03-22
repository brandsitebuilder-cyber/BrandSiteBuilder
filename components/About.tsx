import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-accent font-semibold tracking-wider uppercase mb-2">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Your Partner in Digital Growth</h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Hi, I’m Marcus. I don’t just build websites; I help businesses reach their full potential.
              </p>
              <p>
                I understand that behind every URL—whether it’s a local service like Vredekloof Car Wash, a specialized clinic like Euro Motor Clinic, or a personal milestone like Els Bruilof—there is a person with a vision and a deep passion for what they do. I share that passion. When we work together, I am fully invested in your success.
              </p>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-3xl border border-white/10">
            <h4 className="text-2xl font-bold text-white mb-6">My Approach: Beyond the Code</h4>
            <p className="text-gray-400 mb-8">
              My goal is to work closely with you to capture your specific vision and translate it into a high-performing digital tool. Whether you are a solo entrepreneur starting a mobile workshop or an established company looking to scale with an e-commerce platform like The Boat Lab, I focus on:
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-brand-cyan/20 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan"></div>
                </div>
                <div>
                  <strong className="text-white block mb-1">Elevating Your Brand</strong>
                  <span className="text-gray-400">Creating a professional online presence that reflects the quality of your work.</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-purple/20 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                </div>
                <div>
                  <strong className="text-white block mb-1">Driving Real Growth</strong>
                  <span className="text-gray-400">Building sites that aren't just "online," but are optimized to help your business expand and find new customers.</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-accent/20 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                </div>
                <div>
                  <strong className="text-white block mb-1">Long-Term Collaboration</strong>
                  <span className="text-gray-400">I’m not here to just hand over a file and disappear. I believe in growing together and ensuring your digital home evolves as your company does.</span>
                </div>
              </li>
            </ul>
            
            <p className="text-gray-400 mt-8 pt-6 border-t border-white/10">
              From integrating secure Stripe payments to ensuring your site is lightning-fast on mobile, I handle the technical complexity so you can focus on what you do best. Let’s take your business to its next level, together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
