import { HiMail, HiArrowUp } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import portfolioData from '@/data/portfolio.json';

/**
 * Footer component with social links and back-to-top functionality
 * Features clean design with essential links and copyright information
 */
export const Footer = () => {
  const { personal, contact } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: HiMail, href: `mailto:${contact.email}`, label: 'Email' },
    { icon: FaGithub, href: contact.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: contact.social.linkedin, label: 'LinkedIn' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-xl text-primary mb-2">
              {personal.name}
            </h3>
            <p className="text-muted-foreground">
              {personal.title_1}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-smooth hover-lift"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground text-muted-foreground hover:text-primary-foreground hover-lift h-9 px-3"
            >
              Back to Top
              <HiArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
