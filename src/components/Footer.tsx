import React from 'react';
import { Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                Skill<span className="text-indigo-400">99</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Empowering students, developers, and future tech leaders to build practical skills, construct production projects, and accelerate their careers.
            </p>
            <div className="flex items-center gap-3 text-slate-400 pt-2">
              <span className="hover:text-white transition-colors cursor-pointer font-bold">LinkedIn</span>
              <span>•</span>
              <span className="hover:text-white transition-colors cursor-pointer font-bold">GitHub</span>
              <span>•</span>
              <span className="hover:text-white transition-colors cursor-pointer font-bold">YouTube</span>
              <span>•</span>
              <span className="hover:text-white transition-colors cursor-pointer font-bold">Twitter</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Product</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('courses')} className="hover:text-white transition-colors cursor-pointer">Courses Catalog</button></li>
              <li><button onClick={() => onNavigate('roadmap')} className="hover:text-white transition-colors cursor-pointer">Skill Roadmaps</button></li>
              <li><button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors cursor-pointer">Portfolio Projects</button></li>
              <li><button onClick={() => onNavigate('ai-tutor')} className="hover:text-white transition-colors cursor-pointer">AI Tutor Assistant</button></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Resources</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('career')} className="hover:text-white transition-colors cursor-pointer">Career Guide</button></li>
              <li><button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors cursor-pointer">FAQs & Support</button></li>
              <li><button onClick={() => onNavigate('dashboard')} className="hover:text-white transition-colors cursor-pointer">Student Dashboard</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Company</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('why-skill99')} className="hover:text-white transition-colors cursor-pointer">About Skill99</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© 2026 Skill99 Learning Platform. All rights reserved.</p>
          <p>Designed with high-end SaaS & EdTech principles.</p>
        </div>

      </div>
    </footer>
  );
};
