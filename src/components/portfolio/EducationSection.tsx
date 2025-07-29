import { GraduationCap, Calendar, Award, Edit, Save, X, Plus, Trash2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const EducationSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [education, setEducation] = useState([
    {
      id: 1,
      degree: "Master of Computer Science",
      school: "Stanford University",
      period: "2020 - 2022",
      description: "Specialized in Artificial Intelligence and Machine Learning",
      gpa: "3.9/4.0",
      honors: "Magna Cum Laude"
    },
    {
      id: 2,
      degree: "Bachelor of Software Engineering",
      school: "University of California, Berkeley",
      period: "2016 - 2020",
      description: "Focus on Full Stack Development and Software Architecture",
      gpa: "3.8/4.0",
      honors: "Dean's List"
    },
    {
      id: 3,
      degree: "Web Development Bootcamp",
      school: "The Odin Project",
      period: "2015",
      description: "Intensive 6-month program covering modern web technologies",
      gpa: "Top 5%",
      honors: "Outstanding Graduate"
    }
  ]);

  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      degree: "",
      school: "",
      period: "",
      description: "",
      gpa: "",
      honors: ""
    };
    setEducation([...education, newEducation]);
  };

  const deleteEducation = (id: number) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const updateEducation = (id: number, field: string, value: string) => {
    setEducation(education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning path
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
                Edit Education
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

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-neon opacity-30" />
          
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:text-right md:pr-1/2' : 'md:pl-1/2 md:ml-8'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute w-4 h-4 bg-gradient-neon rounded-full ${
                index % 2 === 0 
                  ? 'left-6 md:right-[-0.5rem] md:left-auto' 
                  : 'left-6 md:left-[-0.5rem]'
              } top-6 z-10 shadow-lg shadow-primary/50`} />

              {/* Education Card */}
              <Card className="p-6 bg-gradient-card border-glass-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group ml-12 md:ml-0 relative">
                {isEditing && (
                  <Button
                    onClick={() => deleteEducation(edu.id)}
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2 border-red-500/50 text-red-400 hover:bg-red-500/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    {!isEditing ? (
                      <>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg text-neon-blue font-semibold mb-2">
                          {edu.school}
                        </h4>
                        
                        <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="h-4 w-4" />
                            GPA: {edu.gpa}
                          </div>
                        </div>
                        
                        <p className="text-foreground/80 mb-3">
                          {edu.description}
                        </p>
                        
                        <div className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                          {edu.honors}
                        </div>
                      </>
                    ) : (
                      <div className="space-y-3">
                        <Input
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                          className="bg-glass border-glass-border"
                          placeholder="Degree"
                        />
                        <Input
                          value={edu.school}
                          onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                          className="bg-glass border-glass-border"
                          placeholder="School/Institution"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            value={edu.period}
                            onChange={(e) => updateEducation(edu.id, 'period', e.target.value)}
                            className="bg-glass border-glass-border"
                            placeholder="Period"
                          />
                          <Input
                            value={edu.gpa}
                            onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                            className="bg-glass border-glass-border"
                            placeholder="GPA"
                          />
                        </div>
                        <Textarea
                          value={edu.description}
                          onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                          className="bg-glass border-glass-border resize-none"
                          placeholder="Description"
                          rows={2}
                        />
                        <Input
                          value={edu.honors}
                          onChange={(e) => updateEducation(edu.id, 'honors', e.target.value)}
                          className="bg-glass border-glass-border"
                          placeholder="Honors/Awards"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
          
          {/* Add New Education Button */}
          {isEditing && (
            <div className="text-center">
              <Button
                onClick={addEducation}
                variant="outline"
                className="border-glass-border bg-glass hover:bg-primary/10"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Education
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;