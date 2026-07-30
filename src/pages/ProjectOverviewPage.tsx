import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Terminal, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectOverviewPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] pt-24 text-center">
        <h1 className="text-3xl font-bold font-serif text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-gray-600 font-mono text-sm mb-6">The project you are looking for does not exist.</p>
        <Link to="/projects">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Back to Projects</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pt-14 bg-gray-50">
      <Helmet>
        <title>{project.title} | Case Study - Prithika Kannan</title>
        <meta name="description" content={`Detailed case study for ${project.title}. Read about the problem, the solution, and the tech stack including ${project.techStack.join(', ')}.`} />
        <meta name="keywords" content={`${project.title}, ${project.techStack.join(', ')}, Software Engineering Case Study, Prithika Kannan`} />
      </Helmet>
      
      {/* Header Section */}
      <section className="pt-16 pb-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center text-sm font-mono text-gray-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-blue-200 bg-blue-50 rounded-sm text-xs font-mono text-blue-700 shadow-sm">
            <Terminal className="w-3 h-3" />
            <span>prithika/projects/{project.id}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
            {project.title}
          </h1>
          
          <p className="text-lg text-gray-600 font-mono leading-relaxed mb-8 max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 font-mono text-xs rounded-sm border border-gray-200">
                {tech}
              </span>
            ))}
          </div>
          
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-sm h-10 px-6 font-mono text-sm flex items-center gap-2 shadow-sm border border-blue-700">
              View Live Source <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Problem */}
          <div className="bg-white p-8 rounded-sm border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <div className="p-2 bg-red-50 text-red-600 rounded-sm">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif">Problem Identified</h2>
            </div>
            <p className="text-gray-700 font-mono text-sm leading-loose">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 rounded-sm border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <div className="p-2 bg-green-50 text-green-600 rounded-sm">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif">Solution Given</h2>
            </div>
            <p className="text-gray-700 font-mono text-sm leading-loose">
              {project.solution}
            </p>
          </div>

          {/* Metrics */}
          <div className="bg-blue-600 text-white p-8 rounded-sm shadow-sm flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-lg font-bold font-serif mb-2">Key Outcome</h3>
              <p className="font-mono text-sm text-blue-100">The quantifiable impact of the engineering solution.</p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <div className="text-5xl font-bold font-serif italic mb-1">{project.metric}</div>
              <div className="font-mono text-xs uppercase tracking-wider text-blue-200">{project.metricLabel}</div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
