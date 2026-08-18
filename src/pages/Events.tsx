import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar, Award, MessageSquare } from "lucide-react";

export default function Events() {
  const eventLinks = [
    {
      title: "AustralAI Events",
      description: "Discover, register, and participate in our latest tech events and meetups.",
      url: "https://events.syraa.app",
      icon: Calendar,
      accent: "text-blue-600",
    },
    {
      title: "AustralAI Certifications",
      description: "Verify your credentials, view achievements, and download certified badges.",
      url: "https://certify.syraa.app",
      icon: Award,
      accent: "text-indigo-600",
    },
    {
      title: "Hiii AustralAI Admin",
      description: "Access community chat, support channels, and administrative interfaces.",
      url: "https://hii.syraa.app",
      icon: MessageSquare,
      accent: "text-emerald-600",
    },
  ];

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Events & Links | Jayanthan Senthilkumar</title>
        <meta name="description" content="Access AustralAI Events, AustralAI Certifications, and Hiii AustralAI Admin from Jayanthan Senthilkumar's portal." />
      </Helmet>

      <section className="relative pt-4 md:pt-24 pb-0 overflow-hidden bg-transparent">
        {/* Header section with back button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-6 md:mb-16">
          <div className="flex justify-center mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-500 hover:text-gray-900 font-mono transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>

          <h1 className="text-3xl md:text-[4.5rem] lg:text-[5rem] text-blue-600 mb-2 md:mb-6 leading-tight tracking-tight font-serif italic">
            AustralAI Portal
          </h1>

          <p className="text-xs md:text-lg text-gray-600 mb-4 md:mb-10 max-w-2xl mx-auto font-mono">
            Explore events, certifications, and admin portals hosted on AustralAI.
          </p>
        </div>

        {/* 3-Column Grid matching the site's layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-gray-200 bg-transparent text-left relative z-10 max-w-5xl mx-auto mb-8 md:mb-20">
          {eventLinks.map((link, idx) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-6 md:p-10 hover:bg-gray-50 transition-colors ${
                  idx !== eventLinks.length - 1 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""
                }`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <div className="flex items-center gap-3 text-gray-900">
                        <IconComponent className={`w-6 h-6 ${link.accent}`} />
                        <h3 className="text-lg md:text-xl font-bold font-serif">{link.title}</h3>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 font-mono leading-relaxed mb-6">
                      {link.description}
                    </p>
                  </div>
                  <span className="text-[10px] md:text-xs text-gray-400 font-mono group-hover:text-blue-600 transition-colors mt-auto">
                    {link.url.replace("https://", "")}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Spacer before footer */}
      <div className="py-2 md:py-12"></div>
    </div>
  );
}
