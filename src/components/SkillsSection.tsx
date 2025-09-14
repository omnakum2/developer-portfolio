import { HiCode } from 'react-icons/hi';
import portfolioData from '@/data/portfolio.json';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaAws, FaJava, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa';
import { SiMui, SiMysql, SiNestjs } from 'react-icons/si';

/**
 * Skills section component showcasing technical expertise
 * Features primary skill highlight and categorized skill levels with progress bars
 */
export const SkillsSection = () => {
  const { skills } = portfolioData;

  // Icon mapping for different skill categories
  const getSkillIcon = (skillName: string) => {
    const iconMap: Record<string, JSX.Element> = {
      'nodejs': <FaNodeJs className="h-6 w-6" />,
      'nestjs': <SiNestjs className="h-6 w-6" />,
      'react': <FaReact className="h-6 w-6" />,
      'mysql': <SiMysql className="h-6 w-6" />,
      'typescript': <BiLogoTypescript className="h-6 w-6" />,
      'php': <FaPhp className="h-6 w-6" />,
      'aws': <FaAws className="h-6 w-6" />,
      'java': <FaJava className="h-6 w-6" />,
      'mui': <SiMui className="h-6 w-6" />,
    };
    return iconMap[skillName.toLowerCase()] || <HiCode className="h-6 w-6" />;
  };

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Primary Skill Highlight */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm card-elevated hover-glow animate-fade-in-left">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-center text-2xl font-heading font-semibold leading-none tracking-tight">
                  Primary Expertise
                </h3>
              </div>
              <div className="p-6 pt-0 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-glow">
                    {getSkillIcon(skills.primary.icon)}
                  </div>
                </div>
                <h3 className="font-heading text-3xl font-bold text-primary mb-2">
                  {skills.primary.name}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {skills.primary.description}
                </p>
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary mb-2">
                  <div 
                    className="h-full w-full flex-1 bg-primary transition-all"
                    style={{ transform: `translateX(-${100 - (skills.primary.level || 0)}%)` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {skills.primary.level}% Proficiency
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Skills */}
          <div className="lg:col-span-2 space-y-8">
            <div className="animate-fade-in-right">
              <div className="grid md:grid-cols-2 gap-6">
                {skills.secondary.map((skill) => (
                  <div key={skill.name} className="rounded-lg border bg-card text-card-foreground shadow-sm card-elevated hover-lift">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                          {getSkillIcon(skill.icon)}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-foreground text-lg">
                            {skill.name}
                          </h4>
                        </div>
                      </div>
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary mb-2">
                        <div 
                          className="h-full w-full flex-1 bg-primary transition-all"
                          style={{ transform: `translateX(-${100 - (skill.level || 0)}%)` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {skill.level}% Proficiency
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
            {/* Additional Skills */}
            <div className="lg:col-span-3 animate-fade-in">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Additional Technologies
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {skills.additional.map((skill) => (
                  <div key={skill.name} className="rounded-lg border bg-card text-card-foreground shadow-sm card-elevated hover-lift">
                    <div className="p-4 text-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        {getSkillIcon(skill.icon)}
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {skill.name}
                      </h4>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
