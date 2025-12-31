
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  vertical?: boolean;
  animate?: boolean;
}

const SocialLinks = ({ className, iconSize = 20, vertical = false, animate = false }: SocialLinksProps) => {
  // Responsive icon size based on screen size
  const responsiveIconSize = typeof window !== 'undefined' && window.innerWidth < 640 ? 
    Math.max(16, iconSize - 4) : iconSize;
    
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/jayanthansenthilkumar",
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-white",
      delay: "0ms"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jayanthan18",
      label: "LinkedIn",
      color: "hover:text-blue-600",
      delay: "100ms"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/jayanthan2004",
      label: "Twitter",
      color: "hover:text-blue-400",
      delay: "200ms"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/jayanthansenthilkumar",
      label: "Instagram",
      color: "hover:text-pink-600",
      delay: "300ms"
    },
    {
      icon: Mail,
      href: "mailto:jayanthansenthilkumar18@gmail.com",
      label: "Email",
      color: "hover:text-pink-deep",
      delay: "400ms"
    }
  ];

  return (
    <div className={cn(
      "flex gap-2 sm:gap-4 items-center",
      vertical && "flex-col",
      className
    )}>
      {socialLinks.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "p-1.5 sm:p-2 rounded-full transition-all transform hover:scale-110",
            vertical ? "bg-white shadow-md dark:bg-navy-light" : "hover:bg-pink-light/10",
            "text-gray-700 dark:text-gray-300",
            link.color,
            animate && "animate-fade-in",
          )}
          style={animate ? { animationDelay: link.delay } : {}}
          aria-label={link.label}
        >
          <link.icon className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
