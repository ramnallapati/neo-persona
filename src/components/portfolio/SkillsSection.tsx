import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, color: "text-neon-blue" },
        { name: "TypeScript", level: 90, color: "text-neon-purple" },
        { name: "Next.js", level: 85, color: "text-neon-green" },
        { name: "Tailwind CSS", level: 95, color: "text-neon-pink" },
        { name: "HTML5", level: 98, color: "text-neon-blue" },
        { name: "CSS3", level: 95, color: "text-neon-purple" },
        { name: "JavaScript", level: 92, color: "text-neon-green" },
        { name: "Vue.js", level: 75, color: "text-neon-pink" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88, color: "text-neon-green" },
        { name: "Python", level: 85, color: "text-neon-blue" },
        { name: "Express.js", level: 90, color: "text-neon-purple" },
        { name: "PostgreSQL", level: 82, color: "text-neon-pink" },
        { name: "MongoDB", level: 80, color: "text-neon-green" },
        { name: "GraphQL", level: 75, color: "text-neon-blue" },
        { name: "REST APIs", level: 95, color: "text-neon-purple" },
        { name: "Docker", level: 78, color: "text-neon-pink" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 95, color: "text-neon-blue" },
        { name: "AWS", level: 80, color: "text-neon-purple" },
        { name: "Figma", level: 90, color: "text-neon-green" },
        { name: "Vercel", level: 85, color: "text-neon-pink" },
        { name: "Firebase", level: 82, color: "text-neon-blue" },
        { name: "Supabase", level: 88, color: "text-neon-purple" },
        { name: "Jest", level: 75, color: "text-neon-green" },
        { name: "Cypress", level: 70, color: "text-neon-pink" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-main relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-card backdrop-blur-lg rounded-2xl p-6 border border-glass-border hover:border-primary/50 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-semibold ${skill.color} transition-all duration-300 hover:scale-105`}>
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Skill Progress Bar */}
                    <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-neon rounded-full transition-all duration-1000 ease-out shadow-lg shadow-primary/30"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React Native", "Flutter", "Kubernetes", "Redis", "Elasticsearch",
              "Jenkins", "Webpack", "Vite", "Prisma", "Stripe", "Socket.io",
              "Three.js", "D3.js", "Chart.js", "Framer Motion"
            ].map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm border-glass-border bg-glass hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;