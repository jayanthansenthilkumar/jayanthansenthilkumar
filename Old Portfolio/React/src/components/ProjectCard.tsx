import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured';
}

const ProjectCard = ({ project, variant = 'default' }: ProjectCardProps) => {
  const isFeatured = variant === 'featured';
  
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg border-border bg-transparent ${isFeatured ? 'border-primary/50' : ''}`}>
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded">
            Featured
          </div>
        )}
      </div>
      <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
        <CardTitle className="text-lg sm:text-xl md:text-2xl text-card-foreground line-clamp-1">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-secondary/10 text-secondary border-secondary/20 text-xs sm:text-sm py-0.5">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
        <CardDescription className="text-sm sm:text-base text-muted-foreground line-clamp-3">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-start gap-4">
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        )}
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
