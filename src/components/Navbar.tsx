import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onPrintResume: () => void;
  onOpenContactModal: () => void;
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigateSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' }
  ];

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100 no-print shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand / Name */}
        <div className="flex items-center gap-3">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-slate-900 font-black text-xl font-heading tracking-tighter hover:text-sky-600 transition-colors"
          >
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-600 via-sky-500 to-blue-600 text-white flex items-center justify-center font-black text-xs shadow-xs tracking-wider">
              AB
            </span>
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 bg-clip-text text-transparent">Amila Bowen</span>
          </a>
          <span className="hidden sm:inline-block text-sky-200">|</span>
          <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider text-sky-600">
            IT Professional
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-500">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeSection === link.id
                  ? 'text-sky-700 font-extrabold bg-sky-50 border border-sky-200/80 shadow-2xs'
                  : 'hover:text-sky-700 hover:bg-sky-50/60'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-2 animate-fade-in">
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-indigo-600"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
