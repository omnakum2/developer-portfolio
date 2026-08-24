import { HiExternalLink, HiBookOpen, HiOfficeBuilding } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import portfolioData from "@/data/portfolio.json";
import { useState } from "react";

/**
 * Portfolio section component displaying academic and company projects
 * Features tabbed interface with project cards showing details and tech stacks
 */
export const PortfolioSection = () => {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState("academic");

  const ProjectCard = ({
    project,
    isAcademic = true,
  }: {
    project: any;
    isAcademic?: boolean;
  }) => (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm card-elevated group transition-smooth">
      <div className="w-full aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} project screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
        {!isAcademic && project.status && (
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 absolute top-4 right-4">
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-heading mb-2 font-semibold leading-none tracking-tight">
              {project.name}
            </h3>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              {project.category}
            </span>
          </div>
          <div className="flex items-center">
            {isAcademic ? (
              <HiBookOpen className="h-5 w-5 text-primary" />
            ) : (
              <HiOfficeBuilding className="h-5 w-5 text-primary" />
            )}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div>
          <h4 className="font-semibold text-foreground mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {project.features.map((feature: string) => (
              <li key={feature} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        {isAcademic && (
          <div className="flex gap-2 pt-2">
            {project.liveDemo && (
              <button
                onClick={() => window.open(project.liveDemo, "_blank")}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 flex-1 h-9 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <HiExternalLink className="h-4 w-4" />
                Live Demo
              </button>
            )}

            <button
              onClick={() => window.open(project.sourceCode, "_blank")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground flex-1 h-9"
            >
              <FaGithub className="h-4 w-4" />
              View Code
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Things I’ve <span className="text-primary">Built</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of projects that demonstrate my technical skills and
            problem-solving abilities
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Custom Tabs */}
          <div className="w-full">
            <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <button
                onClick={() => setActiveTab("academic")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-semibold ${activeTab === "academic"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground"
                  }`}
              >
                <HiBookOpen className="h-4 w-4 mr-2" />
                Academic & Personal
              </button>
              <button
                onClick={() => setActiveTab("company")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-semibold ${activeTab === "company"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground"
                  }`}
              >
                <HiOfficeBuilding className="h-4 w-4 mr-2" />
                Industry
              </button>
            </div>

            {activeTab === "academic" && (
              <div className="animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8">
                  {projects.academic.map((project) => (
                    <ProjectCard
                      key={project.name}
                      project={project}
                      isAcademic={true}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "company" && (
              <div className="animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8">
                  {projects.company.map((project) => (
                    <ProjectCard
                      key={project.name}
                      project={project}
                      isAcademic={false}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more work or discussing a project?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift h-11 px-8"
          >
            Let's Work Together
            <HiExternalLink className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
