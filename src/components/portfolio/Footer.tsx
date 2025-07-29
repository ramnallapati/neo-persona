import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-tertiary border-t border-glass-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-4">
              John Doe
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer passionate about creating beautiful, 
              functional, and user-centered digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Education', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Let's Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: '#', color: 'hover:text-neon-blue' },
                { icon: Linkedin, href: '#', color: 'hover:text-neon-purple' },
                { icon: Mail, href: '#', color: 'hover:text-neon-pink' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-glass border border-glass-border hover:border-primary/50 transition-all duration-300 hover:scale-110 text-muted-foreground ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Available for freelance opportunities
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} John Doe. Made with</span>
              <Heart className="h-4 w-4 text-neon-pink animate-pulse" />
              <span>and React + Tailwind CSS</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <span>Designed & Developed by John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;