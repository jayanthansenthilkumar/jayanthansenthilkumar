import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User, Tag, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
  mediumLink?: string; // Adding Medium link field
}

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle newsletter subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    
    try {
      // Create mailto link for Medium newsletter subscription
      const subject = encodeURIComponent('Newsletter Subscription Request');
      const body = encodeURIComponent(`Hi Jayanthan,

I would like to subscribe to your newsletter and Medium updates.

Email: ${email}

Please add me to your mailing list for updates on AI, machine learning, and your journey as a B.Tech student.

Best regards`);
      
      const mailtoLink = `mailto:jayanthansenthilkumar@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setSubscriptionStatus('success');
      setEmail('');
    } catch (error) {
      setSubscriptionStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };
  // Sample blog posts
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Essential AI Tools for Machine Learning Practitioners",
      excerpt: "Explore the most powerful AI and ML frameworks, libraries, and tools that every machine learning engineer should master in 2025 to build more efficient and accurate models.",
      coverImage: "images/aitools.webp",
      date: "June 15, 2025",
      author: "Jayanthan S",
      category: "Artificial Intelligence",
      tags: ["Machine Learning", "Deep Learning", "AI Tools"],
      featured: true,
      mediumLink: "https://medium.com/@jayanthansenthilkumar/essential-ai-tools-for-machine-learning-practitioners-8773b00cd4c1"
    },
    {
      id: 2,
      title: "Self-Confidence",
      excerpt: "Discover how building self-confidence impacts your learning journey and professional growth in the tech field, with practical strategies to overcome imposter syndrome.",
      coverImage: "images/blog3.png",
      date: "March 1, 2025",
      author: "Jane Developer",
      category: "Personal Growth",
      tags: ["Self-Development", "Career Growth", "Mindset"],
      mediumLink: "https://medium.com/@jayanthansenthilkumar/self-confidence-the-strength-that-fuels-my-journey-d8d66fd63a3a"
    },
    {
      id: 3,
      title: "I Won't Give Up",
      excerpt: "My journey through the challenges of complex machine learning algorithms and how persistence led to breakthroughs when facing seemingly impossible neural network optimization problems.",
      coverImage: "images/blog1.png",
      date: "October 25, 2024",
      author: "Jayanthan S",
      category: "AI Research",
      tags: ["Persistence", "Neural Networks", "Research Challenges"],
      mediumLink: "https://medium.com/@jayanthansenthilkumar/i-wont-give-up-17b4ade8fc3e"
    },
    {
      id: 4,
      title: "Do What You Can Today",
      excerpt: "Practical steps for AI/ML students to make incremental progress in their learning journey, with actionable daily habits that compound into expertise over time.",
      coverImage: "images/blog2.png",
      date: "October 25, 2024",
      author: "Jayanthan S",
      category: "Student Life",
      tags: ["Productivity", "Learning Path", "AI Education"],
      mediumLink: "https://medium.com/@jayanthansenthilkumar/do-what-you-can-today-please-it-will-be-sufficient-3f02932deeb8"
    }
  ];
  // Featured post is the first post marked as featured
  const featuredPost = blogPosts.find(post => post.featured);
  // Regular posts are all the non-featured posts
  const regularPosts = blogPosts.filter(post => !post.featured);
  // All categories from blog posts (no duplicates)
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Blog</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Thoughts, insights, and tutorials on artificial intelligence, machine learning, and my journey as a B.Tech student.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-gradient-to-r from-background to-secondary/5">
          <div className="container mx-auto px-6">
            <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-60 lg:h-auto relative">
                  <img 
                    src={featuredPost.coverImage} 
                    alt={featuredPost.title} 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm">
                    Featured
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" /> {featuredPost.date}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" /> {featuredPost.author}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-card-foreground">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="bg-secondary/10 text-secondary px-3 py-1 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    className="self-start bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={featuredPost.mediumLink} target="_blank" rel="noopener noreferrer">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Blog Post Grid */}
      <section className="py-16 bg-gradient-to-br from-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map(post => (
              <div 
                key={post.id} 
                className="bg-card rounded-xl overflow-hidden shadow-md border border-border transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" /> {post.date}
                    </span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={post.mediumLink} target="_blank" rel="noopener noreferrer">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="text-center mb-8">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4 text-card-foreground">Subscribe to my newsletter</h2>
              <p className="text-muted-foreground">
                Get notified about new articles and resources on AI, machine learning, and my journey as a B.Tech student.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Follow me on{' '}
                <a 
                  href="https://medium.com/@jayanthansenthilkumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Medium
                </a>
                {' '}for the latest updates!
              </p>
            </div>
            
            {subscriptionStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md text-center">
                <p className="text-green-800 dark:text-green-200">
                  Thank you! Your email client will open to send the subscription request.
                </p>
              </div>
            )}
            
            {subscriptionStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-center">
                <p className="text-red-800 dark:text-red-200">
                  Something went wrong. Please try again or contact me directly.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button 
                type="submit"
                disabled={isSubscribing || !email}
                className="bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                By subscribing, you'll get updates directly to your inbox. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
