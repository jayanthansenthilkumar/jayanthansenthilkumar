import { Github, Linkedin, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm(
      "service_9u5qi7q",
      "template_iwpj45s",
      formRef.current,
      "ZNeo2iIcR9V65XpuH"
    ).then(() => {
      setIsSent(true);
      formRef.current?.reset();
    }).catch((error) => {
      console.error("EmailJS error:", error);
    });
  };

  return (
    <section id="contact" className="py-24 bg-portfolio-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-on-scroll">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-portfolio-teal rounded-full mx-auto"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            I'm open to freelance opportunities, collaborations, and interesting projects!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 animate-on-scroll">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-portfolio-teal/20 p-2 rounded-full mr-3">
                  <Mail className="h-5 w-5 text-portfolio-teal" />
                </span>
                Contact Information
              </h3>

              <div className="space-y-6">
                <a href="mailto:syedsami4751@gmail.com" className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-all">
                  <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-portfolio-teal transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <span className="group-hover:text-portfolio-teal transition-colors">syedsami4751@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+12345678900" className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-all">
                  <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-portfolio-teal transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <span className="group-hover:text-portfolio-teal transition-colors">+91 6383299336</span>
                  </div>
                </a>

                <div className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-all">
                  <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-portfolio-teal transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <span className="group-hover:text-portfolio-teal transition-colors">Karur, Tamil Nadu, India</span>
                  </div>
                </div>

                <div className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-all">
                  <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-portfolio-teal transition-colors">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Working Hours</p>
                    <span className="group-hover:text-portfolio-teal transition-colors">Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/helix342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-portfolio-teal/20 rounded-full transition-colors duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/syedsami1574"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-portfolio-teal/20 rounded-full transition-colors duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:syedsami4751@gmail.com"
                    className="p-3 bg-white/10 hover:bg-portfolio-teal/20 rounded-full transition-colors duration-300"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 animate-on-scroll animate-delay-2">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-portfolio-teal/20 p-2 rounded-full mr-3">
                  <Send className="h-5 w-5 text-portfolio-teal" />
                </span>
                Send Me a Message
              </h3>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-teal focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-teal focus:border-transparent"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-teal focus:border-transparent"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-teal focus:border-transparent"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="h-4 w-4 rounded border-gray-300 text-portfolio-teal focus:ring-portfolio-teal"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-400">
                    I agree with the privacy policy and terms of service.
                  </label>
                </div>

                <Button
                  type="submit"
                  className="px-6 py-6 h-auto bg-portfolio-teal text-white font-medium rounded-md hover:bg-portfolio-teal/90 transition-all w-full md:w-auto text-base"
                >
                  {isSent ? "Message Sent" : "Send Message"}
                </Button>
              </form>

              {isSent && (
                <p className="text-sm text-green-400 mt-4">
                  Thank you! Your message has been sent successfully.
                </p>
              )}


              <div className="mt-8">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-300">
                    <span className="text-portfolio-teal font-medium">Note:</span> I typically respond to messages within 24-48 hours. For urgent inquiries, please reach out via phone or LinkedIn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map or Additional Section */}
      <div className="container mx-auto px-6 mt-16">
        <div className="bg-portfolio-navy/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
          <h3 className="text-xl font-bold mb-6">How Can I Help You?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="bg-portfolio-teal/20 p-3 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-teal"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h.01" /><path d="M11 7h.01" /><path d="M15 7h.01" /><path d="M7 11h.01" /><path d="M11 11h.01" /><path d="M15 11h.01" /><path d="M7 15h.01" /><path d="M11 15h.01" /><path d="M15 15h.01" /></svg>
              </div>
              <h4 className="font-semibold mb-2">Web Development</h4>
              <p className="text-sm text-gray-300">Custom websites and web applications tailored to your specific requirements.</p>
            </div>

            <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="bg-portfolio-teal/20 p-3 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-teal"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m9 10 2 2 4-4" /></svg>
              </div>
              <h4 className="font-semibold mb-2">UI/UX Design</h4>
              <p className="text-sm text-gray-300">User-centered design solutions that enhance user experience and engagement.</p>
            </div>

            <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="bg-portfolio-teal/20 p-3 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-teal"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m14.5 9-5 5" /><path d="m9.5 9 5 5" /></svg>
              </div>
              <h4 className="font-semibold mb-2">Fullstack Development</h4>
              <p className="text-sm text-gray-300">Building dynamic, responsive applications with modern frontend frameworks and scalable backend architectures.</p>
            </div>

            <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="bg-portfolio-teal/20 p-3 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-teal"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" /><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" /></svg>
              </div>
              <h4 className="font-semibold mb-2">Database Design</h4>
              <p className="text-sm text-gray-300">Efficient database architecture for optimal performance and scalability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
