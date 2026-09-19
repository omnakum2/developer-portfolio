import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import portfolioData from '@/data/portfolio.json';

/**
 * Navigation component with responsive mobile menu
 * Features smooth scrolling to sections and active state tracking
 */
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { personal } = portfolioData;

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Availability Status */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('home')}
              className="font-heading font-bold text-lg text-foreground hover:text-primary transition-smooth flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-mono text-sm border border-primary/20">
                AM
              </span>
              <span>{personal.name}</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-muted/60 p-1 rounded-full border border-border/40">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${activeSection === item.id
                    ? 'text-primary-foreground bg-primary shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/60'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center justify-center text-xs font-semibold px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-smooth hover-lift"
            >
              Get in Touch
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="px-3 py-3 space-y-1 bg-card/95 backdrop-blur-xl rounded-2xl border border-border shadow-xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-4 py-2 rounded-xl text-sm font-medium w-full text-left transition-smooth ${activeSection === item.id
                      ? 'text-primary bg-primary/10 font-semibold'
                      : 'text-foreground hover:bg-muted'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-border">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-center text-sm font-semibold py-2 px-4 bg-primary text-primary-foreground rounded-xl"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
