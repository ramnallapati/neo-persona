import { ExternalLink, Github, Code, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
      image: "🛍️",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: 124, forks: 45 }
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features built with Next.js and Socket.io.",
      image: "📋",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: 89, forks: 23 }
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with beautiful UI, location-based forecasts, and interactive charts. Built with React and integrated with OpenWeather API.",
      image: "🌤️",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      github: "#",
      demo: "#",
      featured: false,
      stats: { stars: 67, forks: 18 }
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, automated reporting, and multi-platform integration.",
      image: "📊",
      technologies: ["Vue.js", "D3.js", "Express.js", "Redis"],
      github: "#",
      demo: "#",
      featured: false,
      stats: { stars: 52, forks: 15 }
    },
    {
      title: "AI Chat Assistant",
      description: "An intelligent chatbot with natural language processing, built using React and integrated with OpenAI API for smart conversations.",
      image: "🤖",
      technologies: ["React", "OpenAI API", "Node.js", "WebSocket"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: 156, forks: 67 }
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with dark theme, smooth animations, and glassmorphism effects built with React and Tailwind CSS.",
      image: "💼",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "#",
      featured: false,
      stats: { stars: 78, forks: 29 }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group bg-gradient-card border-glass-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-glow flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-semibold border border-accent/30">
                    Featured
                  </div>
                )}
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-glass-border bg-glass hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-neon hover:shadow-lg hover:shadow-primary/50"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <Code className="h-3 w-3" />
                      {project.stats.forks}
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-glass-border bg-glass hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-glass-border bg-glass hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-neon hover:shadow-lg hover:shadow-primary/50"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Zap className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-glass-border bg-glass hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;