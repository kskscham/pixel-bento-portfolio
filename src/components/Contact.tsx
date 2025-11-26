import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.designer@email.com",
      href: "mailto:alex.designer@email.com",
      color: "primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/alexdesigner",
      href: "https://linkedin.com",
      color: "secondary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@alexdesigns",
      href: "https://github.com",
      color: "accent"
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Always excited to collaborate on new projects or chat about design!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-card group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className={`p-3 rounded-lg bg-${link.color}/10 group-hover:bg-${link.color}/20 transition-colors pixel-border`}>
                  <link.icon className={`text-${link.color}`} size={24} />
                </div>
                <div>
                  <p className="font-semibold">{link.label}</p>
                  <p className="text-sm text-muted-foreground">{link.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="pixel-shadow hover:translate-y-1 transition-transform group"
          >
            <FileText className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
            Download Resume
          </Button>
        </div>

        {/* Fun Footer Message */}
        <div className="mt-12 text-center">
          <div className="bento-card inline-block bg-primary/5">
            <p className="text-sm text-muted-foreground">
              💡 Available for internships and freelance projects • Spring 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
