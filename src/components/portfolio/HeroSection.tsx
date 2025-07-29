import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-main relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Photo */}
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-card border-2 border-glass-border overflow-hidden shadow-2xl relative">
            <div className="w-full h-full bg-gradient-neon opacity-20 flex items-center justify-center">
              <span className="text-6xl text-foreground/60">👨‍💻</span>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-neon opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8 animate-slide-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I bring ideas to life through code and design.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-neon hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 animate-glow-pulse"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-glass-border bg-glass hover:bg-primary/10 transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Let's Connect
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-slide-in">
          {[
            { icon: Github, href: '#', color: 'hover:text-neon-blue' },
            { icon: Linkedin, href: '#', color: 'hover:text-neon-purple' },
            { icon: Mail, href: '#', color: 'hover:text-neon-pink' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:drop-shadow-lg`}
            >
              <social.icon size={28} />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-glass-border rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-neon rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;