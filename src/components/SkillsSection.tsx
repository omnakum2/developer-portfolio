import { HiCode } from 'react-icons/hi';
import portfolioData from '@/data/portfolio.json';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
  SiPrisma,
  SiGraphql,
  SiDocker,
  SiMongodb,
  SiRedis,
  SiTailwindcss,
} from 'react-icons/si';

/**
 * Skills section component showcasing technical expertise
 * Features primary skill highlight and categorized skill levels with progress bars
 */
export const SkillsSection = () => {
  const { skills } = portfolioData;
  const section = portfolioData.sections.skills;

  // Icon mapping for different skill categories
  const getSkillIcon = (skillName: string) => {
    const iconMap: Record<string, JSX.Element> = {
      'nextjs': <SiNextdotjs className="h-6 w-6" />,
      'react': <FaReact className="h-6 w-6" />,
      'typescript': <BiLogoTypescript className="h-6 w-6" />,
      'postgresql': <SiPostgresql className="h-6 w-6" />,
      'nodejs': <FaNodeJs className="h-6 w-6" />,
      'express': <SiExpress className="h-6 w-6" />,
      'prisma': <SiPrisma className="h-6 w-6" />,
      'graphql': <SiGraphql className="h-6 w-6" />,
      'docker': <SiDocker className="h-6 w-6" />,
      'mongodb': <SiMongodb className="h-6 w-6" />,
      'redis': <SiRedis className="h-6 w-6" />,
      'tailwind': <SiTailwindcss className="h-6 w-6" />,
    };
    return iconMap[skillName.toLowerCase()] || <HiCode className="h-6 w-6" />;
  };

  return (
    <section id="skills" className="py-24 bg-card/40 border-y border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {section.title} <span className="text-primary">{section.titleAccent}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {section.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-12">
          {/* Primary Skill Highlight */}
          <div className="lg:col-span-1 h-full">
            <div className="rounded-xl border bg-card text-card-foreground shadow-sm card-elevated animate-fade-in-left p-8 h-full flex flex-col justify-between items-center text-center relative overflow-hidden">
              <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Primary Core Focus
              </span>
              <div className="flex flex-col items-center justify-center my-auto">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary shadow-inner">
                  {getSkillIcon(skills.primary.icon)}
                </div>
                <h3 className="font-heading text-3xl font-bold text-foreground mb-3">
                  {skills.primary.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">
                  {skills.primary.description}
                </p>
              </div>
              <div className="w-full pt-4 border-t border-border/60 text-xs text-muted-foreground font-medium flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                App Router • SSR • Server Components
              </div>
            </div>
          </div>

          {/* Secondary Skills */}
          <div className="lg:col-span-2 h-full">
            <div className="animate-fade-in-right h-full">
              <div className="grid sm:grid-cols-3 gap-6 h-full items-stretch">
                {skills.secondary.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="rounded-xl border bg-card text-card-foreground shadow-sm card-elevated hover-lift h-full flex flex-col justify-between p-6 text-center group"
                  >
                    <div className="flex flex-col items-center justify-center my-auto">
                      <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary/10 transition-smooth">
                        {getSkillIcon(skill.icon)}
                      </div>
                      <h4 className="font-semibold text-foreground text-lg mb-1">
                        {skill.name}
                      </h4>
                      <span className="text-xs text-muted-foreground font-medium">
                        Supporting Skill
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="lg:col-span-3 animate-fade-in pt-6">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
              {section.additionalHeading}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {skills.additional.map((skill) => (
                <div key={skill.name} className="rounded-lg border bg-card text-card-foreground shadow-sm card-elevated hover-lift">
                  <div className="p-4 text-center flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                      {getSkillIcon(skill.icon)}
                    </div>
                    <h4 className="font-semibold text-foreground text-left text-sm">
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
