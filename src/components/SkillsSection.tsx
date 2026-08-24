import { HiCode } from 'react-icons/hi';
import portfolioData from '@/data/portfolio.json';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaAws, FaBootstrap, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa';
import { SiAstro, SiMui, SiMysql, SiNestjs, SiTailwindcss, SiTypeorm } from 'react-icons/si';

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
      'mui': <SiMui className="h-6 w-6" />,
      'bootstrap': <FaBootstrap className="h-6 w-6" />,
      'tailwind': <SiTailwindcss className="h-6 w-6" />,
      'typeorm': <SiTypeorm className="h-6 w-6" />,
      'astro': <SiAstro className="h-6 w-6" />,
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
            Technologies and tools I use to build Web Applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Primary Skill Highlight */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm card-elevated animate-fade-in-left p-6">
              <div className="p-6 pt-0 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    {getSkillIcon(skills.primary.icon)}
                  </div>
                </div>
                <h3 className="font-heading text-3xl font-bold text-primary mb-2">
                  {skills.primary.name}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {skills.primary.description}
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
