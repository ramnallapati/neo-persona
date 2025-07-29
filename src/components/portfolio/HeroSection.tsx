import { Download, Mail, Github, Linkedin, Edit, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
const HeroSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [heroData, setHeroData] = useState({
    name: "Ram Nallapati",
    title: "SDE | BACKEND DEVELOPER",
    description: "Passionate about creating beautiful, functional, and user-centered digital experiences. I bring ideas to life through code and design.",
    socialLinks: [
      { icon: Github, href: '#', color: 'hover:text-neon-blue', name: 'GitHub' },
      { icon: Linkedin, href: '#', color: 'hover:text-neon-purple', name: 'LinkedIn' },
      { icon: Mail, href: '#', color: 'hover:text-neon-pink', name: 'Email' }
    ]
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you could save to database or local storage
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original values if needed
  };

  const updateSocialLink = (index: number, field: string, value: string) => {
    const updatedLinks = [...heroData.socialLinks];
    updatedLinks[index] = { ...updatedLinks[index], [field]: value };
    setHeroData({ ...heroData, socialLinks: updatedLinks });
  };

  return <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-main relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Edit Button */}
        <div className="absolute top-4 right-4">
          {!isEditing ? (
            <Button
              onClick={() => setIsEditing(true)}
              size="sm"
              variant="outline"
              className="border-glass-border bg-glass hover:bg-primary/10"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button onClick={handleSave} size="sm" className="bg-gradient-neon">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button onClick={handleCancel} size="sm" variant="outline" className="border-glass-border bg-glass">
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </div>
          )}
        </div>

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
          {!isEditing ? (
            <>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="bg-gradient-neon bg-clip-text text-transparent">
                  {heroData.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">{heroData.title}</p>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                {heroData.description}
              </p>
            </>
          ) : (
            <div className="space-y-4 max-w-2xl mx-auto">
              <Input
                value={heroData.name}
                onChange={(e) => setHeroData({ ...heroData, name: e.target.value })}
                className="text-center text-3xl font-bold bg-glass border-glass-border"
                placeholder="Your Name"
              />
              <Input
                value={heroData.title}
                onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                className="text-center text-xl bg-glass border-glass-border"
                placeholder="Your Title"
              />
              <Textarea
                value={heroData.description}
                onChange={(e) => setHeroData({ ...heroData, description: e.target.value })}
                className="text-center bg-glass border-glass-border resize-none"
                placeholder="Your Description"
                rows={3}
              />
            </div>
          )}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in">
          <Button size="lg" className="bg-gradient-neon hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 animate-glow-pulse">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button variant="outline" size="lg" className="border-glass-border bg-glass hover:bg-primary/10 transition-all duration-300">
            <Mail className="mr-2 h-5 w-5" />
            Let's Connect
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-slide-in">
          {!isEditing ? (
            heroData.socialLinks.map((social, index) => (
              <a key={index} href={social.href} className={`text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:drop-shadow-lg`}>
                <social.icon size={28} />
              </a>
            ))
          ) : (
            <div className="space-y-4 max-w-md mx-auto">
              {heroData.socialLinks.map((social, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <social.icon size={20} className="text-muted-foreground" />
                  <Input
                    value={social.href}
                    onChange={(e) => updateSocialLink(index, 'href', e.target.value)}
                    className="flex-1 bg-glass border-glass-border"
                    placeholder={`${social.name} URL`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-glass-border rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-neon rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;