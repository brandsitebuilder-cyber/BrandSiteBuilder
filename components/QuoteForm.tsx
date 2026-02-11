import React, { useState } from 'react';
import { Send } from 'lucide-react';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website Redesign',
    features: [] as string[],
    message: ''
  });

  const featureOptions = ['E-commerce', 'Blog', 'User Authentication', 'SEO Setup', 'Analytics', 'CMS Integration'];

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => {
      const exists = prev.features.includes(feature);
      if (exists) {
        return { ...prev, features: prev.features.filter(f => f !== feature) };
      } else {
        return { ...prev, features: [...prev.features, feature] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your quote request has been sent to our team.");
    // Here you would typically send the data to a backend
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Info */}
          <div>
            <h2 className="text-brand-accent font-semibold tracking-wider uppercase mb-2">Get Started</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Let's build something <br />extraordinary.</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Ready to take your digital presence to the next level? Fill out the form to get a custom quote.
            </p>

            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl flex items-center gap-4">
                <div className="bg-brand-purple/20 p-3 rounded-full text-brand-purple">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-white font-semibold">brandsitebuilder@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
                <select 
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-all"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                >
                  <option>Website Redesign</option>
                  <option>New Website from Scratch</option>
                  <option>E-commerce Store</option>
                  <option>Web Application</option>
                  <option>Landing Page</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-3">Key Features Needed</label>
                <div className="flex flex-wrap gap-2">
                  {featureOptions.map((feature) => (
                    <button
                      key={feature}
                      type="button"
                      onClick={() => handleFeatureToggle(feature)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        formData.features.includes(feature)
                          ? 'bg-brand-cyan text-black shadow-lg shadow-cyan-500/30'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                <textarea
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                  placeholder="Tell us about your goals, timeline, and inspiration..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-brand-purple text-white rounded-lg font-bold hover:bg-violet-600 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all flex items-center justify-center"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;