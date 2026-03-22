import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Portfolio: React.FC = () => {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-brand-cyan font-semibold tracking-wider uppercase mb-2">Selected Works</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white">Featured Projects</h3>
          </div>
          <Link to="/projects" className="mt-4 md:mt-0 text-white border-b border-brand-purple hover:text-brand-purple transition-colors pb-1">
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden glass-card hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-cyan text-sm font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  {project.description}
                </p>
                <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white backdrop-blur-md transition-colors flex items-center justify-center"
                    aria-label="Visit Site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;