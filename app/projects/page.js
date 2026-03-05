import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: "imrandigitals.online",
      description: "Personal website & portfolio showcasing work, skills, and achievements as a JavaScript Developer",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      featured: true,
      link: "/projects/imrandigitals-online",
      external: "https://imrandigitals.online"
    },
    {
      title: "IT Interview Hub",
      description: "Comprehensive interview preparation platform with 75+ IT topics including programming, system design, and algorithms",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      featured: true,
      link: "/projects/blogstech-site",
      external: "https://blogstech.site"
    },
    {
      title: "XackStack Bug Bounty",
      description: "Security platform for bug bounty programs and vulnerability reporting",
      tech: ["Node.js", "MongoDB", "React"],
    },
    {
      title: "Hajj Performers Tracker",
      description: "Qurbani tracking system for Hajj performers with real-time updates",
      tech: ["React Native", "Firebase", "Node.js"],
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment integration",
      tech: ["Next.js", "Stripe", "MongoDB"],
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tech: ["Vue.js", "Node.js", "Socket.io"],
    }
  ];

  return (
    <div className="main-content mx-5 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted mb-8">
          A showcase of projects I&apos;ve built and contributed to
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow group"
            >
              {project.featured && (
                <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded mb-3">
                  Featured
                </span>
              )}
              
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="text-xs bg-muted px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                {project.link && (
                  <Link 
                    href={project.link}
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    View Details →
                  </Link>
                )}
                {project.external && (
                  <a 
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Live Site ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
