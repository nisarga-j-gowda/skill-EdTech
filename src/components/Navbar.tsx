import React, { useState, useEffect } from 'react';
import { AuthUser } from '../types';
import { 
  Sparkles, 
  Search, 
  Menu, 
  X, 
  BookOpen, 
  Compass, 
  Code2, 
  Bot, 
  Award, 
  UserCheck, 
  ArrowRight,
  GraduationCap,
  User,
  LogOut,
  ChevronDown,
  LogIn,
  UserPlus
} from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenAssessment: () => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  authUser: AuthUser | null;
  onLogout: () => void;
  activeTab?: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenSearch, 
  onOpenAssessment,
  onOpenAuth,
  authUser,
  onLogout,
  onNavigate 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', id: 'courses', icon: BookOpen },
    { name: 'Skills', id: 'why-skill99', icon: Compass },
    { name: 'Roadmap', id: 'roadmap', icon: Code2 },
    { name: 'Dashboard', id: 'dashboard', icon: GraduationCap },
    { name: 'AI Tutor', id: 'ai-tutor', icon: Bot },
    { name: 'Projects', id: 'projects', icon: Award },
    { name: 'FAQ', id: 'faq', icon: UserCheck },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => handleLinkClick('hero')} 
            className="flex items-center gap-2.5 group cursor-pointer text-left"
            id="nav-logo-button"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
                Skill<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">99</span>
              </span>
              <span className="block text-[10px] font-semibold text-slate-400 tracking-wider uppercase -mt-1">
                EdTech Platform
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-indigo-600 hover:bg-white hover:shadow-xs transition-all duration-150 cursor-pointer"
                  id={`nav-link-${link.id}`}
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 bg-slate-100 hover:bg-slate-200/70 border border-slate-200 transition-colors cursor-pointer"
              title="Search courses & projects (Ctrl+K)"
              id="nav-search-button"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Search</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 bg-white rounded border border-slate-200">
                ⌘K
              </kbd>
            </button>

            {/* Assessment Quiz Trigger */}
            <button
              onClick={onOpenAssessment}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/80 transition-colors cursor-pointer"
              id="nav-quiz-button"
            >
              Find Track
            </button>

            {/* Authentication Buttons or User Profile Dropdown */}
            {authUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all cursor-pointer"
                  id="nav-user-menu-button"
                >
                  <img
                    src={authUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100'}
                    alt={authUser.name}
                    className="w-7 h-7 rounded-lg object-cover ring-2 ring-indigo-500/20"
                  />
                  <div className="text-left">
                    <span className="block text-xs font-bold text-slate-800 leading-tight">
                      {authUser.name.split(' ')[0]}
                    </span>
                    <span className="block text-[9px] font-semibold text-indigo-600">
                      Learner
                    </span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
                </button>

                {/* User Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 space-y-1 animate-in fade-in slide-in-from-top-2">
                    <div className="px-3 py-2 bg-slate-50 rounded-xl mb-1">
                      <p className="text-xs font-bold text-slate-900 truncate">{authUser.name}</p>
                      <p className="text-[11px] text-slate-500 truncate">{authUser.email}</p>
                      <span className="mt-1 inline-block px-2 py-0.5 rounded-full text-[9px] font-bold bg-indigo-100 text-indigo-700">
                        {authUser.trackPreference || 'Full-Stack Track'}
                      </span>
                    </div>

                    <button
                      onClick={() => handleLinkClick('dashboard')}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-xl text-left cursor-pointer"
                      id="user-menu-dashboard"
                    >
                      <GraduationCap className="w-4 h-4 text-indigo-500" />
                      My Learning Dashboard
                    </button>

                    <button
                      onClick={() => handleLinkClick('courses')}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-xl text-left cursor-pointer"
                      id="user-menu-courses"
                    >
                      <BookOpen className="w-4 h-4 text-indigo-500" />
                      Enrolled Courses
                    </button>

                    <div className="pt-1 border-t border-slate-100">
                      <button
                        onClick={() => {
                          onLogout();
                          setUserDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl text-left cursor-pointer"
                        id="user-menu-logout"
                      >
                        <LogOut className="w-4 h-4" />
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenAuth('login')}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  id="nav-login-button"
                >
                  <LogIn className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Log In</span>
                </button>

                <button
                  onClick={() => onOpenAuth('signup')}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md shadow-indigo-500/20 hover:shadow-lg transition-all duration-200 cursor-pointer"
                  id="nav-signup-button"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Sign Up</span>
                </button>
              </div>
            )}

          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Search"
              id="mobile-nav-search-button"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle menu"
              id="mobile-menu-toggle-button"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          
          {authUser && (
            <div className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-2xl border border-slate-200/80 mb-2">
              <img
                src={authUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100'}
                alt={authUser.name}
                className="w-10 h-10 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-900 truncate">{authUser.name}</p>
                <p className="text-[10px] text-slate-500 truncate">{authUser.email}</p>
              </div>
              <button
                onClick={() => {
                  onLogout();
                  setMobileMenuOpen(false);
                }}
                className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"
                title="Log out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 text-left cursor-pointer"
                  id={`mobile-nav-link-${link.id}`}
                >
                  <Icon className="w-4 h-4 text-indigo-500" />
                  {link.name}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            {!authUser && (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('login');
                  }}
                  className="w-full py-2.5 text-center rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200"
                  id="mobile-nav-login-button"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('signup');
                  }}
                  className="w-full py-2.5 text-center rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md"
                  id="mobile-nav-signup-button"
                >
                  Sign Up
                </button>
              </div>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment();
              }}
              className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 cursor-pointer"
              id="mobile-nav-quiz-button"
            >
              🎯 Discover Your Career Track
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

