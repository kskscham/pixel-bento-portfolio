import { Search, Lightbulb, PenTool, TestTube, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Research",
      description: "Understanding users through interviews, surveys, and competitive analysis",
      color: "primary"
    },
    {
      icon: Lightbulb,
      title: "Ideate",
      description: "Brainstorming solutions and creating initial concepts",
      color: "secondary"
    },
    {
      icon: PenTool,
      title: "Design",
      description: "Wireframing and creating high-fidelity mockups",
      color: "accent"
    },
    {
      icon: TestTube,
      title: "Test",
      description: "Gathering feedback through usability testing",
      color: "primary"
    },
    {
      icon: Rocket,
      title: "Iterate",
      description: "Refining designs based on user insights",
      color: "secondary"
    },
  ];

  return (
    <section id="process" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Design <span className="text-primary">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A user-centered approach to creating meaningful digital experiences
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bento-card text-center space-y-4 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center pt-4">
                    <div className={`p-4 rounded-xl bg-${step.color}/10 pixel-border inline-block`}>
                      <step.icon className={`text-${step.color}`} size={32} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            I follow an iterative design process, constantly learning and adapting based on user feedback 
            and industry best practices. Every project is an opportunity to grow as a designer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
