import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-text-secondary text-sm mb-4">
            © {currentYear} Aishwarya Kore. All rights reserved.
          </p>
          
          {/* <div className="flex items-center justify-center space-x-2 text-text-muted text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-error fill-current" />
            <span>and</span>
            <Code className="h-4 w-4 text-primary" />
            <span>using React & TypeScript</span>
          </div> */}
          
          <div className="mt-6 text-xs text-text-muted">
            <p>Software Engineer | Full-Stack Developer | MS Computer Science @ IU</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;