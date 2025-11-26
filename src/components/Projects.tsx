import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Banking App Redesign",
      description: "Redesigned mobile banking interface focusing on accessibility and simplified navigation for elderly users.",
      tags: ["Mobile Design", "Accessibility", "Figma"],
      image: "/lovable-uploads/8a9e3c4d-2fb1-4a3e-9c8f-1d5e7b9a3c6d.png",
      color: "primary"
    },
    {
      title: "Plant Care Tracker",
      description: "Student project creating an intuitive app to help users track watering schedules and plant health.",
      tags: ["UI Design", "Prototyping", "User Research"],
      image: "/lovable-uploads/5b7c8e2a-4d9f-4e2b-8c1f-3a6d9b5e7c2f.png",
      color: "secondary"
    },
    {
      title: "Recipe Sharing Platform",
      description: "Designed a community-driven platform for sharing and discovering recipes with social features.",
      tags: ["Web Design", "UX Research", "Wireframing"],
      image: "/lovable-uploads/9c3d7e1b-5a8f-4c2d-9b1e-6f4a8d3e7b5c.png",
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
