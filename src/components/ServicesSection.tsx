import { HiLightBulb, HiArrowRight, HiCheck, HiCode } from 'react-icons/hi';
import portfolioData from '@/data/portfolio.json';
import { FaLaptopCode } from 'react-icons/fa';

/**
 * Services section component displaying offered services
 * Features service cards with descriptions and feature lists
 */
export const ServicesSection = () => {
  const { services } = portfolioData;
  const section = portfolioData.sections.services;

  const getServiceIcon = (iconName: string) => {
    const iconMap: Record<string, JSX.Element> = {
      'palette': <FaLaptopCode className="h-8 w-8" />,
      'lightbulb': <HiLightBulb className="h-8 w-8" />,
    };
    return iconMap[iconName] || <HiCode className="h-8 w-8" />;
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {section.title} <span className="text-primary">{section.titleAccent}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {section.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`rounded-lg border bg-card text-card-foreground shadow-sm card-elevated transition-smooth group ${
                index === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'
              }`}
            >
              <div className="flex flex-col space-y-1.5 p-6 pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-smooth">
                    <div className="text-primary">
                      {getServiceIcon(service.icon)}
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-semibold leading-none tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6 pt-0 space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-lg">
                    {section.includedHeading}
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-muted-foreground">
                        <HiCheck className="h-4 w-4 text-accent mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Have something outside these boxes? Let's talk it through.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift h-11 px-8"
          >
            Schedule a Consultation
            <HiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
