import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Edit, Save, X, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

const SkillsSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [skillCategories, setSkillCategories] = useState([
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
  ]);

  const [additionalTech, setAdditionalTech] = useState([
    "React Native", "Flutter", "Kubernetes", "Redis", "Elasticsearch",
    "Jenkins", "Webpack", "Vite", "Prisma", "Stripe", "Socket.io",
    "Three.js", "D3.js", "Chart.js", "Framer Motion"
  ]);

  const colorOptions = [
    { value: "text-neon-blue", label: "Neon Blue" },
    { value: "text-neon-purple", label: "Neon Purple" },
    { value: "text-neon-green", label: "Neon Green" },
    { value: "text-neon-pink", label: "Neon Pink" }
  ];

  const addSkillToCategory = (categoryIndex: number) => {
    const newSkill = { name: "", level: 50, color: "text-neon-blue" };
    const updatedCategories = [...skillCategories];
    updatedCategories[categoryIndex].skills.push(newSkill);
    setSkillCategories(updatedCategories);
  };

  const removeSkillFromCategory = (categoryIndex: number, skillIndex: number) => {
    const updatedCategories = [...skillCategories];
    updatedCategories[categoryIndex].skills.splice(skillIndex, 1);
    setSkillCategories(updatedCategories);
  };

  const updateSkill = (categoryIndex: number, skillIndex: number, field: string, value: any) => {
    const updatedCategories = [...skillCategories];
    updatedCategories[categoryIndex].skills[skillIndex] = {
      ...updatedCategories[categoryIndex].skills[skillIndex],
      [field]: value
    };
    setSkillCategories(updatedCategories);
  };

  const addAdditionalTech = () => {
    setAdditionalTech([...additionalTech, ""]);
  };

  const removeAdditionalTech = (index: number) => {
    setAdditionalTech(additionalTech.filter((_, i) => i !== index));
  };

  const updateAdditionalTech = (index: number, value: string) => {
    const updated = [...additionalTech];
    updated[index] = value;
    setAdditionalTech(updated);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save to database or local storage
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset changes if needed
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-main relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          
          {/* Edit Controls */}
          <div className="absolute top-0 right-0">
            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                size="sm"
                variant="outline"
                className="border-glass-border bg-glass hover:bg-primary/10"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Skills
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
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-card backdrop-blur-lg rounded-2xl p-6 border border-glass-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                {isEditing && (
                  <Button
                    onClick={() => addSkillToCategory(categoryIndex)}
                    size="sm"
                    variant="outline"
                    className="border-glass-border bg-glass hover:bg-primary/10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    {!isEditing ? (
                      <>
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
                      </>
                    ) : (
                      <div className="flex gap-2 items-center p-3 bg-glass/50 rounded-lg border border-glass-border">
                        <Input
                          value={skill.name}
                          onChange={(e) => updateSkill(categoryIndex, skillIndex, 'name', e.target.value)}
                          className="flex-1 bg-glass border-glass-border"
                          placeholder="Skill name"
                        />
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={skill.level}
                          onChange={(e) => updateSkill(categoryIndex, skillIndex, 'level', parseInt(e.target.value))}
                          className="w-20 bg-glass border-glass-border"
                          placeholder="Level"
                        />
                        <Select
                          value={skill.color}
                          onValueChange={(value) => updateSkill(categoryIndex, skillIndex, 'color', value)}
                        >
                          <SelectTrigger className="w-32 bg-glass border-glass-border">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {colorOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Button
                          onClick={() => removeSkillFromCategory(categoryIndex, skillIndex)}
                          size="sm"
                          variant="outline"
                          className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Badges */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-foreground">
              Additional Technologies
            </h3>
            {isEditing && (
              <Button
                onClick={addAdditionalTech}
                size="sm"
                variant="outline"
                className="border-glass-border bg-glass hover:bg-primary/10"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Tech
              </Button>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTech.map((tech, index) => (
              <div key={index} className="relative group">
                {!isEditing ? (
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm border-glass-border bg-glass hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </Badge>
                ) : (
                  <div className="flex items-center gap-2">
                    <Input
                      value={tech}
                      onChange={(e) => updateAdditionalTech(index, e.target.value)}
                      className="w-32 bg-glass border-glass-border text-sm"
                      placeholder="Technology"
                    />
                    <Button
                      onClick={() => removeAdditionalTech(index)}
                      size="sm"
                      variant="outline"
                      className="border-red-500/50 text-red-400 hover:bg-red-500/10 h-8 w-8 p-0"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;