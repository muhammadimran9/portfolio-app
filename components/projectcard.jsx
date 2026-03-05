import React from 'react';
import Link from 'next/link';

const ProjectsCard = () => {
  const projects = [
    { title: "Personal Portfolio v1", tech: ["Next.js", "React", "Tailwind"] },
    { title: "XackStack Bug Bounty", tech: ["Node.js", "MongoDB", "React"] },
    { title: "Hajj Performers Tracker", tech: ["React Native", "Firebase"] }
  ];

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-lg">
            <h3 className="font-semibold mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <span key={tech} className="text-xs bg-muted px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/projects" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg">
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsCard;
