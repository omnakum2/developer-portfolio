import { HiAcademicCap, HiBriefcase, HiCalendar } from "react-icons/hi";
import portfolioData from "@/data/portfolio.json";

/**
 * About section component featuring personal bio and timeline
 * Displays educational background and work experience in a structured format
 */
export const AboutSection = () => {
  const { personal, education, experience } = portfolioData;
  const section = portfolioData.sections.about;

  const numberOfYears = new Date().getFullYear() - new Date(experience[0].joiningYear).getFullYear();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {section.title} <span className="text-primary">{section.titleAccent}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {section.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="animate-fade-in-left">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
              {section.storyHeading}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {personal.bio}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm card-elevated hover-lift">
                <div className="p-6 text-center">
                  <HiBriefcase className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">{numberOfYears} {numberOfYears >= 1 ? "+ Years" : "Year"}</p>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm card-elevated hover-lift">
                <div className="p-6 text-center">
                  <HiAcademicCap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Post Graduate</p>
                  <p className="text-sm text-muted-foreground">Education</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="animate-fade-in-right">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">
              {section.timelineHeading}
            </h3>

            <div className="space-y-6">
              {/* Work Experience */}
              <div className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <HiBriefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-grow">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm card-elevated hover-lift">
                      <div className="p-6">
                        <h4 className="font-semibold text-foreground text-lg mb-2">
                          {experience[0].position}
                        </h4>
                        <p className="text-primary font-medium mb-2">
                          {experience[0].company} • {experience[0].joiningYear} - Present
                        </p>
                        <p className="text-muted-foreground">
                          {experience[0].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Timeline */}
              {education.slice().reverse().map((edu, index) => (
                  <div key={edu.year} className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                        <HiAcademicCap className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div className="flex-grow">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm card-elevated hover-lift">
                          <div className="p-6">
                            <h4 className="font-semibold text-foreground text-lg mb-2">
                              {edu.level}
                            </h4>
                            <p className="text-primary font-medium mb-2">
                              {edu.institution} • {edu.year}
                            </p>
                            <div className="flex items-center text-muted-foreground">
                              <HiCalendar className="h-4 w-4 text-accent mr-2" />
                              <span className="capitalize">{edu.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline connector */}
                    {index < education.length && (
                      <div className="absolute left-6 top-12 w-0.5 h-8 bg-border"></div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
