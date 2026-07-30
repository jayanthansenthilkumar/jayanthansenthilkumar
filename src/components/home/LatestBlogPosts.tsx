import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "The shift from monolithic LLMs to multi-agent systems",
    excerpt: "Why the future of enterprise AI isn't one massive model, but a swarm of specialized, coordinated agents.",
    category: "Architecture",
    date: "2025-06-12",
    readTime: "6m",
    link: "/blog"
  },
  {
    title: "Optimizing vector search for billion-scale datasets",
    excerpt: "A deep dive into how we reduced p99 latency by 40% using custom HNSW graph quantization.",
    category: "Engineering",
    date: "2025-05-28",
    readTime: "8m",
    link: "/blog"
  },
  {
    title: "SOC2 Compliance in the age of generative AI",
    excerpt: "A framework for safely deploying LLMs in regulated industries without compromising data privacy.",
    category: "Security",
    date: "2025-05-15",
    readTime: "5m",
    link: "/blog"
  }
];

export function LatestBlogPosts() {
  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight font-serif italic">Changelog & Thinking</h2>
            </div>
            <p className="text-gray-600 text-sm font-mono">
              Engineering deep dives, architecture patterns, and thoughts on the future of AI.
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="hidden md:inline-flex rounded-sm font-mono text-xs border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50">
              View All Posts <ArrowRight className="ml-2 w-3 h-3" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          {posts.map((post) => (
            <Link to={post.link} 
              key={post.title}
              className="group flex flex-col bg-white hover:bg-gray-50 transition-colors h-full"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
                <span className="text-[10px] font-mono text-blue-600 font-semibold">{post.category}</span>
                <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500">
                  <span>{post.date}</span>
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {post.readTime}</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-gray-900 mb-3 font-serif group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs font-mono text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Link to="/blog">
            <Button variant="outline" className="w-full rounded-sm font-mono text-xs border-gray-300 bg-white shadow-sm">
              View All Posts <ArrowRight className="ml-2 w-3 h-3" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
