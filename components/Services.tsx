import React from 'react';
import { Palette, Code, Smartphone, BarChart3, Globe, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8 text-brand-accent" />,
      title: "UI/UX Design",
      description: "Captivating interfaces designed with user experience at the core. We blend aesthetics with functionality."
    },
    {
      icon: <Code className="w-8 h-8 text-brand-cyan" />,
      title: "Web Development",
      description: "Clean, efficient code using modern frameworks like React and Next.js for blazing fast performance."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-brand-purple" />,
      title: "Mobile First",
      description: "Responsive designs that look perfect on every device, from 4K desktops to the smallest smartphones."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "SEO Optimization",
      description: "Built-in SEO best practices to ensure your brand gets found by the right audience on Google."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      title: "Analytics & Growth",
      description: "Integration of tracking tools to measure success and make data-driven decisions for your business."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Maintenance & Support",
      description: "Ongoing support to keep your site secure, updated, and running smoothly 24/7."
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-purple font-semibold tracking-wider uppercase mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Everything you need to grow</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide comprehensive digital solutions tailored to your unique business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;