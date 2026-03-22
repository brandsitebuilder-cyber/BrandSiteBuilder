import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const AllProjects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-brand-cyan font-semibold tracking-wider uppercase mb-2">Portfolio</h2>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white">All Projects</h1>
          <p className="text-gray-400 mt-4 max-w-2xl text-lg">
            A complete collection of my recent work, showcasing expertise across diverse niches including e-commerce, service industries, and personal events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden glass-card hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 flex flex-col h-full">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-brand-cyan text-xs font-bold uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
                  >
                    Visit Site <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllProjects;
