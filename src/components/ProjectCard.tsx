import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  color?: string;
}

const ProjectCard = ({ title, description, tags, image, color = "primary" }: ProjectCardProps) => {
  return (
    <div className="bento-card group cursor-pointer relative overflow-hidden">
      {/* Project Image */}
      <div className="aspect-video rounded-lg overflow-hidden mb-4 pixel-border bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium bg-${color}/10 text-${color} border border-${color}/20`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Pixel accent corner */}
      <div className={`absolute top-0 right-0 w-8 h-8 bg-${color} opacity-20 -mr-2 -mt-2`}></div>
    </div>
  );
};

export default ProjectCard;
