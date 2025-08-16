import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mx-auto">
          My academic journey in Computer Science and Engineering
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8 bg-gradient-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-surface">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Master of Science in Computer Science
              </h3>
              <p className="text-accent font-medium mb-2">Indiana University Bloomington</p>
              <div className="flex items-center text-text-secondary text-sm mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                Aug 2024 – May 2026
              </div>
              <div className="text-success font-medium mb-3">CGPA: 3.62/4.00</div>
              <p className="text-text-muted text-sm leading-relaxed">
                Focused Coursework: Applied Algorithms, Applied Machine Learning, 
                Computer Networks, Advanced Database Concepts, Software Engineering, 
                Engineering Cloud Computing, Data Visualization, Security for Network Systems
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-gradient-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-surface">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Bachelor of Engineering in Computer Engineering
              </h3>
              <p className="text-accent font-medium mb-2">Savitribai Phule Pune University</p>
              <div className="flex items-center text-text-secondary text-sm mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                Aug 2018 – May 2022
              </div>
              <div className="text-success font-medium mb-3">CGPA: 9.3/10.0</div>
              <p className="text-text-muted text-sm leading-relaxed">
                Focused Coursework: Fundamentals of Programming Languages, Data Structures, 
                Object Oriented Programming, Database Management Systems, Computer Networks, 
                Web Technologies
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;