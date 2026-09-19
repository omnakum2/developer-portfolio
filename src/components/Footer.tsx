import { HiMail, HiArrowUp } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import portfolioData from '@/data/portfolio.json';

/**
 * Footer component with social links and back-to-top functionality
 * Features clean design with essential links and copyright information
 */
export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: HiMail, href: `mailto:${personal.email}`, label: 'Email' },
    { icon: FaGithub, href: personal.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personal.linkedin, label: 'LinkedIn' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          {/* Brand & Supporting Details Line */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-mono text-xs border border-primary/20 font-bold">
                AM
              </span>
              <h3 className="font-heading font-bold text-lg text-foreground">
                {personal.name}
              </h3>
            </div>
            
            {/* Supporting Information Line */}
            <p className="text-muted-foreground text-sm max-w-xl">
              Specializing in Next.js full-stack development, server-side rendering, and modern web architecture.
            </p>
          </div>

          {/* Social Connect Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 bg-secondary/80 rounded-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth hover-lift border border-border/60"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Minimal Bottom Bar: Copyright, Stack Badge & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span>© {currentYear} {personal.name}. All rights reserved.</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="bg-muted px-2 py-0.5 rounded text-[11px] font-medium text-foreground">
              Built with Next.js, React & Tailwind CSS
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-medium hover:text-primary transition-smooth hover-lift group"
          >
            Back to top
            <HiArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
