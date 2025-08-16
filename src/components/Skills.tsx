import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Palette, 
  Server, 
  Database, 
  Cloud, 
  Settings,
  Award
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "C++", "JavaScript (ES6+)", "TypeScript", "C#"],
      color: "text-accent"
    },
    {
      title: "Frontend Development",
      icon: Palette,
      skills: ["React.js", "Redux", "AngularJS", "HTML5", "CSS3", "Responsive Design"],
      color: "text-primary"
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs", "ASP.NET", "Microservices"],
      color: "text-accent-secondary"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Database Design"],
      color: "text-success"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Terraform", "Azure"],
      color: "text-warning"
    },
    {
      title: "Tools & Others",
      icon: Settings,
      skills: ["Git", "GitHub", "Postman", "JIRA", "Confluence", "CI/CD"],
      color: "text-error"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Technical Skills
        </h2>
        {/* <p className="text-text-secondary text-lg max-w-3xl mx-auto">
          A comprehensive overview of my technical expertise across full-stack development, 
          cloud computing, and modern software engineering practices.
        </p> */}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Card 
              key={index} 
              className="p-6 bg-gradient-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-surface group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-surface-elevated group-hover:bg-primary/10 transition-colors duration-300">
                  <IconComponent className={`h-6 w-6 ${category.color} group-hover:text-primary transition-colors duration-300`} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary ml-3">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="bg-surface-elevated border-border text-text-secondary hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Certifications */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">
          Certifications
        </h3>
        <div className="max-w-2xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 bg-surface-elevated border-border hover:border-accent/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary mb-1">{cert.title}</h4>
                  <p className="text-accent text-sm font-medium mb-2">{cert.issuer}</p>
                  <p className="text-text-muted text-sm">{cert.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Skill Level Indicators */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-text-primary mb-6">Proficiency Overview</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-4 rounded-lg bg-surface-elevated border border-border">
            <div className="text-2xl font-bold text-accent mb-2">2+</div>
            <div className="text-text-secondary text-sm">Years Professional Experience</div>
          </div>
          <div className="p-4 rounded-lg bg-surface-elevated border border-border">
            <div className="text-2xl font-bold text-primary mb-2">15+</div>
            <div className="text-text-secondary text-sm">Technologies Mastered</div>
          </div>
          {/* <div className="p-4 rounded-lg bg-surface-elevated border border-border">
            <div className="text-2xl font-bold text-success mb-2">3</div>
            <div className="text-text-secondary text-sm">Major Projects Deployed</div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;