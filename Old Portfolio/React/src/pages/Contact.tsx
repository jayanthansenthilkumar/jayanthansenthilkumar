
import { useState, useRef } from 'react';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS integration
    emailjs.sendForm(
      'service_88va89j',
      'template_fiizzos',
      formRef.current!,
      'FMfTLaoYiQ5bY8_NF'
    )
    .then((result) => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    })
    .catch((error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again or reach out via email directly.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get In Touch</h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto text-justify">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Let's connect and create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 sm:py-16 bg-gradient-to-tr from-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">            {/* Contact Form */}
            <div id="contact-form" className="bg-card shadow-lg rounded-xl p-5 sm:p-8 border border-border">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-card-foreground">Send Me a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <Input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="bg-background border-input"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-input" 
                  />
                </div>
                <div>
                  <Input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background border-input" 
                  />
                </div>
                <div>
                  <Textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-background border-input" 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  <Send className="ml-1.5 sm:ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-card shadow-lg rounded-xl p-5 sm:p-8 mb-6 sm:mb-8 border border-border">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-card-foreground">Contact Information</h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="rounded-full bg-primary/10 p-2 sm:p-3 text-primary">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-card-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">jayanthansenthilkumar18@gmail.com</p>
                    </div>
                  </div>                  
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-accent/10 p-3 text-accent">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-card-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">Karur, Tamilnadu</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="bg-card shadow-lg rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Connect With Me</h2>
                <p className="text-muted-foreground mb-6 text-justify leading-relaxed">Follow me on social media to stay updated with my latest projects.</p>
                <SocialLinks className="justify-start" />
              </div>
            </div>
          </div>
        </div>
      </section>      
      {/* Map and Contact Details Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading 
            title="Find Me Here" 
            subtitle="Visit my office or connect with me virtually"
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map on Left Side */}            <div className="bg-card shadow-lg rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125428.25002897495!2d78.0341073079657!3d10.957896901224466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9c38e61899093%3A0xcbd2af5da0224928!2sKarur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1687405068830!5m2!1sen!2sin"
                width="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karur, Tamil Nadu, India"
                className="w-full h-96 sm:h-[450px]"
              />  
            </div>
              {/* Contact Details on Right Side */}
            <div className="flex flex-col gap-6">
              {/* Get a Quote */}              <div className="bg-card shadow-lg rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Hire Me</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Looking for a skilled developer for your next project? I'm available for freelance work and full-time positions.
                </p>                <div className="mt-4">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Start Collaboration
                  </Button>
                </div>
              </div>
              
              {/* Contact Methods */}
              <div className="bg-card shadow-lg rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Contact Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">jayanthansenthilkumar18@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">Karur, Tamilnadu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
