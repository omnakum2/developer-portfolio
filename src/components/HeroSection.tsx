import { HiArrowDown, HiDownload, HiMail } from "react-icons/hi";
import { useEffect, useRef } from "react";
import portfolioData from "@/data/portfolio.json";

// Declare Typed.js for TypeScript
declare global {
  interface Window {
    Typed: any;
  }
}

/**
 * Hero section component featuring profile introduction
 * Displays profile image, name, title, and call-to-action buttons
 */
export const HeroSection = () => {
  const { personal } = portfolioData;
  const typedElementRef = useRef<HTMLSpanElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Wait for Typed.js to load
    const initTyped = () => {
      if (window.Typed && typedElementRef.current) {
        new window.Typed(typedElementRef.current, {
          strings: [personal.title, personal.title_2],
          typeSpeed: 80,
          backSpeed: 80,
          loop: true,
          showCursor: true
        });
      }
    };

    // Check if Typed.js is already loaded
    if (window.Typed) {
      initTyped();
    }
  }, [personal.title, personal.title_2]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 hover-glow animate-float">
              <img
                src={personal.profileImage}
                alt={`${personal.name} - Profile Picture`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent animate-glow"></div>
          </div>

          {/* Name and Title */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-4">
            <span className="text-glow">{personal.name}</span>
          </h1>

          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-6">
            <span ref={typedElementRef}></span>
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            {personal.tagline}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="flex items-center justify-center font-semibold px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md hero-glow hover-lift transition-smooth"
            >
              <HiDownload className="mr-2 h-5 w-5" />
              View Portfolio
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center justify-center font-semibold px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md hover-lift transition-smooth"
            >
              <HiMail className="mr-2 h-5 w-5" />
              Contact Me
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary hover:text-primary/80 transition-smooth"
              aria-label="Scroll to About section"
            >
              <HiArrowDown className="h-6 w-6 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
