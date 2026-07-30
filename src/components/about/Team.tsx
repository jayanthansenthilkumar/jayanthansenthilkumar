import { Code2, MessageCircle, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Jayanthan Senthilkumar",
    role: "Founder, CEO & Lead Software Director",
    bio: "The visionary behind Austral AI. Driving the core engineering architecture and overall product strategy.",
    initials: "JS",
    socials: { github: "#", linkedin: "#", twitter: "#" }
  },
  {
    name: "Open Position",
    role: "Chief Technology Officer",
    bio: "We are actively looking for a visionary CTO to lead our global engineering efforts and scale our infrastructure.",
    initials: "CTO",
    socials: {}
  },
  {
    name: "Open Position",
    role: "Chief Marketing Officer",
    bio: "Seeking a strategic CMO to drive our go-to-market strategy, enterprise sales, and global brand presence.",
    initials: "CMO",
    socials: {}
  },
  {
    name: "Open Position",
    role: "Associate Manager",
    bio: "Overseeing day-to-day operations and ensuring seamless delivery across our cross-functional engineering teams.",
    initials: "VS",
    socials: { linkedin: "#" }
  }
];

export function Team() {
  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">Leadership</h2>
          <p className="text-sm font-mono text-gray-600">
            Built by engineers who have scaled the world's largest AI and financial systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          {team.map((member, index) => (
            <div key={index} className="bg-white group h-full flex flex-col">
              <div className="h-48 bg-gray-50 border-b border-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:1rem_1rem]" />
                <span className="text-4xl font-serif font-bold text-gray-300 relative z-10 group-hover:text-blue-200 transition-colors">
                  {member.initials}
                </span>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-base font-bold text-gray-900 font-serif">{member.name}</h3>
                <p className="text-xs font-mono text-blue-600 mb-4">{member.role}</p>
                <p className="text-xs font-mono text-gray-600 leading-relaxed mb-6 flex-grow">
                  {member.bio}
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  {member.socials.github && (
                    <Link to={member.socials.github} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Code2 className="w-4 h-4" />
                    </Link>
                  )}
                  {member.socials.linkedin && (
                    <Link to={member.socials.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </Link>
                  )}
                  {member.socials.twitter && (
                    <Link to={member.socials.twitter} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
