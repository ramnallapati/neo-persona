import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      school: "Stanford University",
      period: "2020 - 2022",
      description: "Specialized in Artificial Intelligence and Machine Learning",
      gpa: "3.9/4.0",
      honors: "Magna Cum Laude"
    },
    {
      degree: "Bachelor of Software Engineering",
      school: "University of California, Berkeley",
      period: "2016 - 2020",
      description: "Focus on Full Stack Development and Software Architecture",
      gpa: "3.8/4.0",
      honors: "Dean's List"
    },
    {
      degree: "Web Development Bootcamp",
      school: "The Odin Project",
      period: "2015",
      description: "Intensive 6-month program covering modern web technologies",
      gpa: "Top 5%",
      honors: "Outstanding Graduate"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-neon opacity-30" />
          
          {education.map((edu, index) => (
            <div
              key={index}
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
              <Card className="p-6 bg-gradient-card border-glass-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group ml-12 md:ml-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
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
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;