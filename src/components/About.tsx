import { Code, Palette, Users, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Palette, name: "UI Design", tools: ["Figma", "Adobe XD", "Sketch"] },
    { icon: Users, name: "UX Research", tools: ["User Interviews", "Personas", "Journey Maps"] },
    { icon: Code, name: "Prototyping", tools: ["Figma", "Principle", "ProtoPie"] },
    { icon: Zap, name: "Design Systems", tools: ["Components", "Style Guides", "Tokens"] },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Currently pursuing UI/UX design while building a portfolio of creative solutions
          </p>
        </div>

        {/* Bio Card */}
        <div className="bento-card mb-8 max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a passionate design student learning to create intuitive and delightful user experiences. 
            My coursework has taught me the fundamentals of user research, wireframing, prototyping, and 
            visual design. I believe great design should be both beautiful and functional, making technology 
            more accessible to everyone.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bento-card hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 pixel-border">
                  <skill.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-lg">{skill.name}</h3>
                <div className="space-y-1">
                  {skill.tools.map((tool, toolIndex) => (
                    <p key={toolIndex} className="text-sm text-muted-foreground">
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Card */}
        <div className="bento-card mt-8 max-w-4xl mx-auto bg-secondary/10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center pixel-border flex-shrink-0">
              <span className="text-2xl">🎓</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Current Education</h3>
              <p className="text-muted-foreground">
                Bachelor's in Design • Expected Graduation 2025
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Relevant Coursework: User Experience Design, Interaction Design, Visual Communication, 
                Design Thinking, Human-Computer Interaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
