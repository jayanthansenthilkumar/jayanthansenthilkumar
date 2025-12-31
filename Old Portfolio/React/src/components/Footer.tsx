
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Code, Palette, Layout, Globe, Zap, Home, User, FileText, BookOpen, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const getDailyQuote = () => {
    const quotes = [
      // Technical quotes
      { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
      { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
      { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
      { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
      { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
      { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
      { text: "Clean code always looks like it was written by someone who cares.", author: "Robert C. Martin" },
      { text: "It's not a bug – it's an undocumented feature.", author: "Anonymous" },
      { text: "Every great developer you know got there by solving problems they were unqualified to solve.", author: "Patrick McKenzie" },
      { text: "Software and cathedrals are much the same: first we build them, then we pray.", author: "Sam Redwine" },
      { text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" },
      { text: "The function of good software is to make the complex appear simple.", author: "Grady Booch" },
      { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
      { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
      { text: "Good code is its own best documentation.", author: "Steve McConnell" },
      
      // General inspiration quotes
      { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
      { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
      { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
      { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
      { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
      { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
      { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
      { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
      { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Anonymous" },
      { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
      { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
      { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" }
    ];
    
    // Use the current day of the year to select a quote
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - startOfYear.getTime();
    const dayOfYear = Math.floor(diff / 86400000);
    
    return quotes[dayOfYear % quotes.length];
  };
  
  return (
    <footer className="bg-transparent backdrop-blur-md border-t border-teal-light/10 dark:border-navy/30 relative">
      {/* Top decorative line */}
      <div className="w-full h-1 bg-gradient-to-r from-purple-light via-teal to-purple-deep opacity-70"></div>
      {/* Added a semi-transparent overlay to slightly blur the particles behind the footer */}
      <div className="absolute inset-0 bg-white/5 dark:bg-navy/10 backdrop-filter backdrop-blur-sm -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 p-3 rounded-lg bg-white/5 dark:bg-navy/5 backdrop-blur-sm border border-teal-light/10">
              <Avatar className="h-10 w-10 border-2 border-purple hover:border-teal transition-all">
                <AvatarImage src="/profile.jpg" alt="Jayanthan Senthilkumar" />
                <AvatarFallback className="bg-gradient text-white">JS</AvatarFallback>
              </Avatar>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-light via-teal to-purple-deep inline-block text-transparent bg-clip-text">Jayanthan Senthilkumar</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-xs p-3 rounded-md bg-transparent backdrop-blur-sm">
              A passionate frontend developer creating beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="https://github.com/jayanthansenthilkumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple hover:bg-purple-light/10 transition-colors backdrop-blur-md bg-white/20 dark:bg-navy/20 border border-teal-light/10"
              >
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/jayanthan18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple hover:bg-purple-light/10 transition-colors backdrop-blur-md bg-white/20 dark:bg-navy/20 border border-teal-light/10"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="https://twitter.com/jayanthan2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple hover:bg-purple-light/10 transition-colors backdrop-blur-md bg-white/20 dark:bg-navy/20 border border-teal-light/10"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://instagram.com/jayanthansenthilkumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple hover:bg-purple-light/10 transition-colors backdrop-blur-md bg-white/20 dark:bg-navy/20 border border-teal-light/10"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="mailto:jayanthansenthilkumar18@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple hover:bg-purple-light/10 transition-colors backdrop-blur-md bg-white/20 dark:bg-navy/20 border border-teal-light/10"
              >
                <Mail size={18} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div className="px-4 py-5 rounded-lg backdrop-blur-lg bg-white/10 dark:bg-navy/10 border border-teal-light/10">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-light via-teal to-purple-deep inline-block text-transparent bg-clip-text">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple transition-colors">
                <Home size={16} />
                Home
              </Link>
              <Link to="/about" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple transition-colors">
                <User size={16} />
                About
              </Link>
              <Link to="/resume" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple transition-colors">
                <FileText size={16} />
                Resume
              </Link>
              <Link to="/blog" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple transition-colors">
                <BookOpen size={16} />
                Blog
              </Link>
              <Link to="/contact" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple transition-colors">
                <Phone size={16} />
                Contact
              </Link>
            </div>
          </div>
          
          <div className="px-4 py-5 rounded-lg backdrop-blur-lg bg-white/10 dark:bg-navy/10 border border-teal-light/10">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-light via-teal to-purple-deep inline-block text-transparent bg-clip-text">Services</h3>
            <div className="grid grid-cols-1 gap-2">
              <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple transition-colors">
                <Code size={16} />
                Web Development
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple transition-colors">
                <Palette size={16} />
                UI/UX Design
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple transition-colors">
                <Layout size={16} />
                Frontend Development
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple transition-colors">
                <Zap size={16} />
                Website Optimization
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple transition-colors">
                <Globe size={16} />
                Technical Consulting
              </a>
            </div>
          </div>
          
          <div className="px-4 py-5 rounded-lg backdrop-blur-lg bg-white/10 dark:bg-navy/10 border border-teal-light/10">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-light via-teal to-purple-deep inline-block text-transparent bg-clip-text">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-2 rounded-md bg-white/30 dark:bg-navy/30 backdrop-blur-md">
                <Mail size={18} className="text-purple-deep mt-1 flex-shrink-0" />
                <a href="mailto:jayanthansenthilkumar18@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple transition-colors text-sm md:text-base truncate">
                  jayanthansenthilkumar18@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3 p-2 rounded-md bg-white/30 dark:bg-navy/30 backdrop-blur-md">
                <MapPin size={18} className="text-purple-deep mt-1 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps?q=Karur,+Tamil+Nadu,+India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-deep dark:hover:text-purple transition-colors"
                >
                  Karur, Tamilnadu
                </a>
              </div>
              {(() => {
                const dailyQuote = getDailyQuote();
                return (
                  <div className="mt-3 p-3 rounded-md bg-white/5 dark:bg-navy/5 backdrop-blur-md text-gray-600 dark:text-gray-300 border border-teal-light/10">
                    <p className="text-xs sm:text-sm">
                      <span className="text-purple-deep font-semibold">Quote of the day:</span>
                    </p>
                    <p className="text-xs sm:text-sm italic mt-1">
                      "{dailyQuote.text}"
                    </p>
                    <p className="text-xs sm:text-sm text-right mt-1 font-medium text-teal">
                      - {dailyQuote.author}
                    </p>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
        
        <div className="border-t border-teal-light/20 dark:border-navy mt-6 sm:mt-8 pt-4 sm:pt-5 flex justify-center items-center">
          <p className="text-gray-600 dark:text-gray-300 text-center text-xs sm:text-sm px-4 py-2.5 backdrop-blur-md bg-white/5 dark:bg-navy/5 rounded-full shadow-sm border border-teal-light/10">© {currentYear} - Developed and Maintained by Jayanthan Senthilkumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
