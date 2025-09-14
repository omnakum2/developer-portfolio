import { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiClock } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import portfolioData from '@/data/portfolio.json';

/**
 * Contact section component with contact information and form
 * Features contact cards, availability info, and a functional contact form
 */
export const ContactSection = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { icon: HiMail, text: contact.email, href: `mailto:${contact.email}` },
    { icon: HiPhone, text: contact.phone, href: `tel:${contact.phone}` },
    { icon: FaGithub, text: contact.social.github.replace('https://github.com/', ''), href: contact.social.github },
    { icon: FaLinkedin, text: contact.social.linkedin.replace('https://linkedin.com/in/', ''), href: contact.social.linkedin },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in-left space-y-6">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">
              Contact Information
            </h3>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm card-elevated hover-lift group transition-smooth block"
                >
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-smooth">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-smooth">
                          {info.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm card-elevated mt-8">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <HiLocationMarker className="h-5 w-5 text-accent mr-2" />
                  <h4 className="font-semibold text-foreground">Location & Availability</h4>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center">
                    <HiClock className="h-5 w-5 text-accent mr-2" />
                    <span>Available for remote work</span>
                  </div>
                  <p className="text-sm">
                    I'm currently available for new projects and consulting opportunities. 
                    Let's discuss how I can help you achieve your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
