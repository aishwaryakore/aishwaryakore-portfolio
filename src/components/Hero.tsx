import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Aishwarya Kore
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-8 font-light animate-fade-in delay-200">
          Software Engineer & Computer Science Graduate
        </h2>
        
        <p className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-400">
          Passionate full-stack developer specializing in scalable web applications, 
          cloud computing, and AI-powered accessibility solutions. Currently pursuing 
          MS in Computer Science at Indiana University.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-600">
          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection('#projects')}
            className="group"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('#contact')}
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-fade-in delay-800">
          <a
            href="mailto:aishwaryakore072@gmail.com"
            className="p-3 rounded-full bg-surface-elevated/50 backdrop-blur-sm border border-border hover:bg-surface-hover hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 text-text-secondary hover:text-primary transition-colors duration-300" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/aishwaryakore"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-surface-elevated/50 backdrop-blur-sm border border-border hover:bg-surface-hover hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-text-secondary hover:text-primary transition-colors duration-300" />
          </a>
          
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className="p-3 rounded-full bg-surface-elevated/50 backdrop-blur-sm border border-border hover:bg-surface-hover hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 hover:scale-110"
            aria-label="Resume"
          >
            <FileText className="h-5 w-5 text-text-secondary hover:text-primary transition-colors duration-300" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-text-muted" />
      </div>
    </section>
  );
};

export default Hero;