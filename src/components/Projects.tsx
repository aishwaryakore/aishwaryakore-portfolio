import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, Brain, ShoppingCart, Calendar, Codesandbox } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Code Collaboration Editor",
      description: "A collaborative coding platform enabling multiple users to join rooms, write, and execute code in real time with low latency and multi-language support.",
      icon: Codesandbox, // you can import from lucide-react or another icon set
      technologies: ["React.js", "Node.js", "Express", "Socket.IO (WebSockets)", "Piston API"],
      achievements: [
        "Real-time collaboration with live code synchronization",
        "Supports 10+ programming languages with Piston API",
        "Room-based session management for secure multi-user access",
        "Scales to 50+ concurrent users with <200ms latency",
        "Reduced code execution response time by ~35%",
        "Seamless REST API integration for execution and session handling"
      ],
      links: {
        github: "https://github.com/aishwaryakore/code-colab",
        demo: "https://code-colab-client.onrender.com/"
      },
      featured: true
    },
    {
      title: "AI-Powered Accessibility Enhancer",
      description: "A Chrome extension leveraging vision and language models to improve web accessibility for users with disabilities. Features real-time text-to-speech, alt text generation, and cognitive accessibility improvements.",
      icon: Brain,
      technologies: ["React", "Manifest V3", "OpenAI Vision API", "Google TTS", "Chrome Extension", "LLMs"],
      achievements: [
        "95% accuracy in text interpretation using OpenAI Vision API",
        "Real-time text-to-speech with Google TTS integration",
        "Automated alt text generation for images",
        "Cognitive accessibility through text simplification"
      ],
      links: {
        github: "https://github.com/aishwaryakore/ai-accessibility-enhancer",
        demo: "#"
      },
      featured: true
    },
    {
      title: "Event/Venue Management System",
      description: "A scalable web application built with microservices architecture featuring authentication, booking, search, user management, email, and real-time chat capabilities.",
      icon: Calendar,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "REST APIs", "WebSockets", "OAuth 2.0"],
      achievements: [
        "Microservices architecture for scalability",
        "Role-based access control with secure authentication",
        "Stripe payment integration",
        "Real-time chat via WebSockets",
        "CI/CD pipelines reducing deployment time by 40%",
        "Scalable to 1,000+ concurrent users with <200ms API latency"
      ],
      links: {
        github: "https://github.com/cs-b556-g7",
        demo: "https://blue-rock-0d2af4e10.6.azurestaticapps.net/"
      },
      featured: true
    },
    {
      title: "Life-n-Linen E-commerce Platform",
      description: "A comprehensive e-commerce solution with end-to-end commerce workflows, serving 500+ active users with secure authentication and real-time UI updates.",
      icon: ShoppingCart,
      technologies: ["React.js", "Redux", "Node.js", "Express", "Firebase Auth", "Stripe API"],
      achievements: [
        "500+ active users with secure authentication",
        "Complete e-commerce workflow implementation",
        "99.9% transaction success rate",
        "Multi-step checkout with cart management",
        "Inventory and product administration",
        "Handles 10,000+ monthly requests at peak traffic"
      ],
      links: {
        github: "https://github.com/aishwaryakore/life-n-linen",
        demo: "https://rococo-yeot-f259e1.netlify.app/"
      },
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Featured Projects
        </h2>
        {/* <p className="text-text-secondary text-lg max-w-3xl mx-auto">
          A showcase of my technical expertise through real-world applications, 
          from AI-powered accessibility tools to scalable enterprise solutions.
        </p> */}
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-500 hover:shadow-surface ${project.featured
                ? 'bg-gradient-surface border-primary/20 hover:border-primary/40'
                : 'bg-surface-elevated border-border hover:border-primary/30'
                }`}
            >
              {project.featured && (
                <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                  Featured
                </div>
              )}

              <div className="p-8">
                <div className="flex items-start space-x-6">
                  {/* Project Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-xl bg-gradient-primary/10 border border-primary/20">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-2">{project.title}</h3>
                        <p className="text-text-secondary leading-relaxed">{project.description}</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-text-primary mb-3">Key Achievements:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-text-muted text-sm flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-text-primary mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="bg-surface-elevated border-primary/20 text-text-secondary hover:border-primary/40 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-4">
                      <Button variant="default" size="sm" className="group" onClick={() => window.location.href = project.links.github}>
                        <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        View Code
                      </Button>
                      <Button variant="outline" size="sm" className="group" onClick={() => window.location.href = project.links.demo}>
                        <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Call to Action */}
      {/* <div className="text-center mt-16">
        <p className="text-text-secondary mb-6">
          Interested in seeing more of my work or discussing a collaboration?
        </p>
        <Button variant="hero" size="lg" onClick={() => {
          const element = document.querySelector('#contact');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }}>
          Let's Connect
        </Button>
      </div> */}
    </section>
  );
};

export default Projects;