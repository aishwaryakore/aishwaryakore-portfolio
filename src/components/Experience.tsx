import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Olei Labs",
      location: "Remote, USA",
      period: "May 2025 – Aug 2025",
      type: "Internship",
      achievements: [
        "Designed and delivered a SaaS platform digitizing clinic operations for 100+ healthcare professionals",
        "Built intuitive dashboards for appointment scheduling, patient management, and billing workflows",
        "Optimized frontend performance using responsive designs with ReactJS and TypeScript",
        "Integrated REST APIs delivering seamless, real-time updates across multi-role user interfaces",
        "Boosted staff efficiency by ~30% through improved user experience and workflow optimization"
      ],
      technologies: ["React.js", "TypeScript", "REST APIs", "SaaS", "Healthcare Tech"]
    },
    {
      title: "Software Engineer",
      company: "Data Axle Private Limited",
      location: "India",
      period: "Jul 2022 – Jul 2024",
      type: "Full-time",
      achievements: [
        "Led Full Stack Development of internal order-entry system (OESS) using C#, ASP.NET, and SQL Server",
        "Reduced order processing time by 25% and eliminated frequent data mismatches",
        "Implemented robust API integrations and real-time validation layers with AngularJS and JavaScript",
        "Achieved 99.9% data consistency across 5+ systems through comprehensive validation",
        "Contributed to debugging complex issues, performing code reviews, and deploying enhancements to Azure",
        "Authored comprehensive API documentation to support team knowledge sharing"
      ],
      technologies: ["C#", "ASP.NET", "SQL Server", "AngularJS", "JavaScript", "Azure", "API Development"]
    }
  ];

  const awards = [
    {
      title: "Rising Star Award",
      organization: "Data Axle Solutions",
      date: "January 2023",
      description: "Recognized for outstanding performance and contribution at annual R&R event"
    },
    {
      title: "Research Publication",
      organization: "IEEE Conference",
      date: "2022",
      description: "Co-authored 'Burp Suite Extension for Script-Based Attacks' at IEEE 6th International Conference on Electronics, Communication, and Aerospace Technology"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Professional Experience
        </h2>
        {/* <p className="text-text-secondary text-lg max-w-3xl mx-auto">
          My journey in software engineering, from full-stack development to cloud computing 
          and healthcare technology solutions.
        </p> */}
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-primary"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-glow-primary z-10"></div>
              
              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                <Card className="p-8 bg-gradient-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-surface">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-1">{exp.title}</h3>
                      <p className="text-accent font-semibold text-lg">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center text-text-secondary text-sm mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-text-muted text-sm flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-surface-elevated border-primary/20 text-text-secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">
          Awards & Recognition
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="p-6 bg-surface-elevated border-border hover:border-accent/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary mb-1">{award.title}</h4>
                  <p className="text-accent text-sm font-medium mb-1">{award.organization}</p>
                  <p className="text-text-secondary text-xs mb-2">{award.date}</p>
                  <p className="text-text-muted text-sm">{award.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;