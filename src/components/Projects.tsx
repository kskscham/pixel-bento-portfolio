import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Web-Based Application for University Based Allied Health Monitoring System",
      description: "Comprehensive health monitoring system for university allied health programs with real-time data tracking and analytics.",
      tags: ["Web Design", "Health Tech", "Dashboard"],
      image: "/lovable-uploads/8a9e3c4d-2fb1-4a3e-9c8f-1d5e7b9a3c6d.png",
      color: "primary"
    },
    {
      title: "IHRISH",
      description: "Innovative health information system designed to streamline healthcare data management and patient care workflows.",
      tags: ["UI Design", "Healthcare", "System Design"],
      image: "/lovable-uploads/5b7c8e2a-4d9f-4e2b-8c1f-3a6d9b5e7c2f.png",
      color: "secondary"
    },
    {
      title: "Mobile Push Notification (UI)",
      description: "User interface design for mobile push notification system with customizable alerts and notification management.",
      tags: ["Mobile UI", "Notifications", "UX Design"],
      image: "/lovable-uploads/9c3d7e1b-5a8f-4c2d-9b1e-6f4a8d3e7b5c.png",
      color: "accent"
    },
    {
      title: "Mobile Scanner (UI)",
      description: "Intuitive mobile scanning interface with document recognition and seamless image capture functionality.",
      tags: ["Mobile UI", "Scanner", "Prototyping"],
      image: "/lovable-uploads/d3e8b5a1-3ae9-4fb3-b8ec-e5a6b8a95f23.png",
      color: "primary"
    },
    {
      title: "PayPal (Prototype)",
      description: "Redesigned payment interface prototype focusing on simplified transaction flows and enhanced security features.",
      tags: ["Prototype", "Fintech", "UI Design"],
      image: "/lovable-uploads/8a9e3c4d-2fb1-4a3e-9c8f-1d5e7b9a3c6d.png",
      color: "secondary"
    },
    {
      title: "ActiveFIT App",
      description: "Fitness tracking application with personalized workout plans, progress monitoring, and health analytics.",
      tags: ["Mobile App", "Fitness", "UX Research"],
      image: "/lovable-uploads/5b7c8e2a-4d9f-4e2b-8c1f-3a6d9b5e7c2f.png",
      color: "accent"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my design work showcasing user-centered solutions and creative problem solving
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
