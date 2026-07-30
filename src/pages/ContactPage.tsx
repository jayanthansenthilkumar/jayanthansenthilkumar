import { Helmet } from "react-helmet-async";
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Terminal, Mail, ArrowRight, MapPin, Code2, Briefcase, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen pt-14">
      <Helmet>
        <title>Contact Prithika Kannan | Software Engineer</title>
        <meta name="description" content="Get in touch with Prithika Kannan for software engineering opportunities, freelance projects, or collaborations. Available via email, LinkedIn, and GitHub." />
        <meta name="keywords" content="Contact Prithika Kannan, Hire Software Engineer, Full-Stack Developer Contact, Tech Collaborations, Madurai Developer" />
      </Helmet>
      
      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-gray-200 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
              <Terminal className="w-3 h-3" />
              <span>prithika/contact</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
              Let&apos;s build something together.
            </h1>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed">
              I'm open to new opportunities. Whether you have a question, a project idea, or just want to say hi, feel free to drop a message!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="py-24 border-b border-gray-200 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-mono text-gray-500 font-semibold">contact-form.tsx</span>
              </div>
              
              {submitted ? (
                <div className="p-8 md:p-12 text-center">
                  <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-sm mx-auto mb-6 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-serif mb-3">Message Sent</h3>
                  <p className="text-sm font-mono text-gray-600">
                    Thank you for reaching out! I will review your message and get back to you soon.
                  </p>
                </div>
              ) : (
                <div className="p-8 md:p-12 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-mono text-gray-700 uppercase tracking-wider">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="rounded-sm font-mono text-sm border-gray-200" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-mono text-gray-700 uppercase tracking-wider">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="rounded-sm font-mono text-sm border-gray-200" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-mono text-gray-700 uppercase tracking-wider">Message</Label>
                    <textarea 
                      id="message"
                      rows={4}
                      placeholder="Hi Prithika, I'd like to talk about..."
                      className="w-full rounded-sm font-mono text-sm border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                  
                  <Button 
                    onClick={() => setSubmitted(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-sm font-mono text-xs shadow-sm border border-blue-700"
                  >
                    Send Message
                  </Button>
                </div>
              )}
            </div>

            {/* Direct Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif italic">Connect Directly</h2>
              <p className="text-sm font-mono text-gray-600 mb-8">
                Prefer to connect through other platforms? Find me here:
              </p>
              
              <div className="space-y-4">
                <a href="tel:+919787673783" className="block">
                  <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-6 hover:border-gray-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <h3 className="text-base font-bold text-gray-900 font-serif">Phone</h3>
                    </div>
                    <p className="text-xs font-mono text-gray-600">+91 9787673783</p>
                  </div>
                </a>

                <a href="mailto:kpprithika75@gmail.com" className="block">
                  <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-6 hover:border-gray-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <h3 className="text-base font-bold text-gray-900 font-serif">Email</h3>
                    </div>
                    <p className="text-xs font-mono text-gray-600">kpprithika75@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-6 hover:border-gray-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-blue-600" />
                      <h3 className="text-base font-bold text-gray-900 font-serif">LinkedIn</h3>
                    </div>
                    <p className="text-xs font-mono text-gray-600">linkedin.com/in/prithikakannan</p>
                  </div>
                </a>

                <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-6 hover:border-gray-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 className="w-4 h-4 text-blue-600" />
                      <h3 className="text-base font-bold text-gray-900 font-serif">GitHub</h3>
                    </div>
                    <p className="text-xs font-mono text-gray-600">github.com/prithikakannan</p>
                  </div>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Spacer before footer */}
      <div className="py-12"></div>
    </div>
  );
}
