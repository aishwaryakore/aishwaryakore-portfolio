import { Card } from '@/components/ui/card';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aishwaryakore072@gmail.com",
      href: "mailto:aishwaryakore072@gmail.com",
      description: "Feel free to reach out for opportunities or collaborations"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aishwaryakore",
      href: "https://www.linkedin.com/in/aishwaryakore",
      description: "Connect with me professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mx-auto">
          I'm always interested in discussing new opportunities, innovative projects,
          or simply connecting with fellow developers. Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {contactInfo.map((contact, index) => {
          const IconComponent = contact.icon;
          const isClickable = contact.href !== "#";

          const CardContent = (
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-gradient-primary/10 border border-primary/20">
                <IconComponent className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-text-primary mb-1">{contact.label}</h4>
                <p
                  className={`text-sm mb-2 ${isClickable
                    ? 'text-accent hover:text-primary'
                    : 'text-text-secondary'
                    } transition-colors duration-300`}
                >
                  {contact.value}
                </p>
                {/* <p className="text-text-muted text-xs">{contact.description}</p> */}
              </div>
              {contact.label === "LinkedIn" && (
                <ExternalLink className="h-4 w-4 text-text-muted" />
              )}
            </div>
          );

          return (
            <Card
              key={index}
              className="p-6 bg-surface-elevated border-border transition-all duration-300 hover:border-primary/50 hover:shadow-surface cursor-pointer"
            >
              <a
                href={contact.href}
                target={contact.label === "LinkedIn" ? "_blank" : undefined}
                rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="block"
              >
                {CardContent}
              </a>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
