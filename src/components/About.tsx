import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mx-auto">
          I’m Aishwarya, a Master’s student in Computer Science at Indiana University Bloomington with a strong passion for 
          building impactful software solutions. I enjoy working across the full stack, from designing intuitive user 
          interfaces to developing scalable backend systems. My interests span web development, cloud technologies, 
          and AI/ML applications, and I’m always eager to learn new tools and frameworks. Beyond technical skills, I value 
          collaboration, problem-solving, and creating technology that makes a meaningful difference. I’m currently seeking 
          opportunities where I can contribute my skills, grow as a developer, and work on innovative projects that push 
          the boundaries of technology.
        </p>
      </div>


      {/* Personal Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-surface-elevated border-border hover:border-primary/30 transition-all duration-300 text-center">
          <MapPin className="h-8 w-8 text-accent mx-auto mb-3" />
          <h4 className="font-semibold text-text-primary mb-2">Location</h4>
          <p className="text-text-secondary text-sm">Bloomington, IN</p>
        </Card>

        {/* <Card className="p-6 bg-surface-elevated border-border hover:border-primary/30 transition-all duration-300 text-center">
          <div className="h-8 w-8 mx-auto mb-3 bg-gradient-primary rounded text-primary-foreground flex items-center justify-center font-bold">
            AWS
          </div>
          <h4 className="font-semibold text-text-primary mb-2">Certification</h4>
          <p className="text-text-secondary text-sm">AWS Certified Cloud Practitioner</p>
        </Card> */}

        <Card className="p-6 bg-surface-elevated border-border hover:border-primary/30 transition-all duration-300 text-center">
          <div className="h-8 w-8 mx-auto mb-3 bg-success/20 rounded flex items-center justify-center">
            <span className="text-success font-bold text-sm">2+</span>
          </div>
          <h4 className="font-semibold text-text-primary mb-2">Experience</h4>
          <p className="text-text-secondary text-sm">Years in Software Development</p>
        </Card>
      </div>
    </section>
  );
};

export default About;