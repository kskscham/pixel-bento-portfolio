import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 pixel-dot-pattern">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Pixel Frame Profile Picture */}
        <div className="relative inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto pixel-border pixel-shadow bg-card overflow-hidden">
            <img 
              src="/lovable-uploads/d3e8b5a1-3ae9-4fb3-b8ec-e5a6b8a95f23.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Pixel corners decoration */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary"></div>
        </div>

        {/* Intro Text */}
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Alex</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Aspiring UI/UX Designer crafting pixel-perfect experiences
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Student designer combining creativity with user-centered thinking to build meaningful digital experiences
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            className="pixel-shadow hover:translate-y-1 transition-transform"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="pixel-border hover:bg-secondary/20 transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce-slow">
          <ArrowDown className="mx-auto text-muted-foreground" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
