import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john.doe@example.com",
      href: "mailto:john.doe@example.com",
      color: "text-neon-blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "text-neon-green"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
      color: "text-neon-pink"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-neon-blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-neon-purple"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-neon-pink"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-main relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-glass backdrop-blur-lg border-glass-border hover:border-primary/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-glass-border focus:border-primary transition-colors"
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
                  className="bg-background/50 border-glass-border focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background/50 border-glass-border focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-neon hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in touch</h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about technology and design.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-4 bg-glass backdrop-blur-lg border-glass-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <a
                    href={info.href}
                    className="flex items-center gap-4"
                  >
                    <div className={`p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors ${info.color}`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-glass border border-glass-border hover:border-primary/50 transition-all duration-300 hover:scale-110 text-muted-foreground ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="p-4 bg-glass backdrop-blur-lg border-glass-border">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                <span className="text-foreground font-semibold">
                  Available for freelance work
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Currently accepting new projects and collaborations
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;