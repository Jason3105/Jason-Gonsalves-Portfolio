import React, { useState } from 'react';
import { Code, Database, Palette, Users, Brain, Zap, Sparkles, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    {
      id: 'frontend',
      title: "Frontend Development",
      icon: <Code className="w-6 sm:w-8 h-6 sm:h-8" />,
      color: "blue",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Next.js"],
      description: "Creating beautiful, responsive user interfaces"
    },
    {
      id: 'backend',
      title: "Backend & Database",
      icon: <Database className="w-6 sm:w-8 h-6 sm:h-8" />,
      color: "green",
      skills: ["Node.js", "Express.js", "Django", "MongoDB", "SQL"],
      description: "Building robust server-side applications"
    },
    {
      id: 'programming',
      title: "Programming Languages",
      icon: <Brain className="w-6 sm:w-8 h-6 sm:h-8" />,
      color: "purple",
      skills: ["C", "C++", "Python", "JavaScript", "Object-Oriented Programming"],
      description: "Strong foundation in core programming concepts"
    },
    {
      id: 'design',
      title: "Design & Tools",
      icon: <Palette className="w-6 sm:w-8 h-6 sm:h-8" />,
      color: "orange",
      skills: ["Figma", "Canva", "DaVinci Resolve", "Adobe Premiere Pro"],
      description: "Visual storytelling and creative solutions"
    },
    {
      id: 'soft',
      title: "Soft Skills",
      icon: <Users className="w-6 sm:w-8 h-6 sm:h-8" />,
      color: "red",
      skills: ["Leadership", "Communication", "Teamwork", "Project Management", "Problem Solving"],
      description: "Essential skills for collaborative success"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900",
        text: "text-blue-600",
        pill: "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300",
        border: "border-blue-300 dark:border-blue-700"
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900",
        text: "text-green-600",
        pill: "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300",
        border: "border-green-300 dark:border-green-700"
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900",
        text: "text-purple-600",
        pill: "bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300",
        border: "border-purple-300 dark:border-purple-700"
      },
      orange: {
        bg: "bg-orange-100 dark:bg-orange-900",
        text: "text-orange-600",
        pill: "bg-orange-100 dark:bg-orange-800 text-orange-700 dark:text-orange-300",
        border: "border-orange-300 dark:border-orange-700"
      },
      red: {
        bg: "bg-red-100 dark:bg-red-900",
        text: "text-red-600",
        pill: "bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300",
        border: "border-red-300 dark:border-red-700"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-900 dark:to-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-yellow-300 dark:from-pink-900 dark:to-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-300 to-blue-300 dark:from-green-900 dark:to-blue-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-15 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in">
            <div className="relative">
              <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500 animate-pulse" />
              <div className="absolute inset-0 w-6 sm:w-8 h-6 sm:h-8 bg-yellow-500 rounded-full opacity-20 animate-ping"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="relative">
              <Star className="w-6 sm:w-8 h-6 sm:h-8 text-purple-500 animate-spin" />
              <div className="absolute inset-0 w-6 sm:w-8 h-6 sm:h-8 bg-purple-500 rounded-full opacity-20 animate-ping animation-delay-1000"></div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in animation-delay-500 px-4">
            Technologies and skills I work with to bring ideas to life ✨
          </p>

          {/* Fully Responsive Filter Tabs */}
          <Tabs defaultValue="all" className="w-full max-w-6xl mx-auto animate-fade-in animation-delay-1000">
            <div className="overflow-x-auto scrollbar-hide">
              <TabsList className="flex w-max min-w-full sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg p-2 rounded-xl mx-auto">
                <TabsTrigger 
                  value="all" 
                  onClick={() => setActiveCategory('all')}
                  className="flex items-center justify-center gap-1 text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-lg transition-all duration-200 whitespace-nowrap min-w-fit"
                >
                  <span>All Skills</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="frontend" 
                  onClick={() => setActiveCategory('frontend')}
                  className="flex items-center justify-center gap-1 text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-lg transition-all duration-200 whitespace-nowrap min-w-fit"
                >
                  <span>Frontend</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="backend" 
                  onClick={() => setActiveCategory('backend')}
                  className="flex items-center justify-center gap-1 text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-lg transition-all duration-200 whitespace-nowrap min-w-fit"
                >
                  <span>Backend</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="programming" 
                  onClick={() => setActiveCategory('programming')}
                  className="flex items-center justify-center gap-1 text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-lg transition-all duration-200 whitespace-nowrap min-w-fit"
                >
                  <span className="hidden sm:inline lg:hidden xl:inline">Languages</span>
                  <span className="sm:hidden lg:inline xl:hidden">Lang</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="design" 
                  onClick={() => setActiveCategory('design')}
                  className="flex items-center justify-center gap-1 text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-lg transition-all duration-200 whitespace-nowrap min-w-fit"
                >
                  <span>Design</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="soft" 
                  onClick={() => setActiveCategory('soft')}
                  className="flex items-center justify-center gap-1 text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-lg transition-all duration-200 whitespace-nowrap min-w-fit"
                >
                  <span className="hidden sm:inline lg:hidden xl:inline">Soft Skills</span>
                  <span className="sm:hidden lg:inline xl:hidden">Soft</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeCategory} className="mt-8">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                  {filteredCategories.map((category, index) => {
                    const colors = getColorClasses(category.color);
                    return (
                      <div
                        key={category.id}
                        className={`bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-2 ${colors.border} group animate-fade-in`}
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="flex items-center mb-6 group-hover:animate-bounce">
                          <div className={`p-3 ${colors.bg} rounded-lg mr-4 group-hover:rotate-12 transition-transform duration-300`}>
                            <div className={colors.text}>
                              {category.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                              {category.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className={`px-3 py-2 rounded-full text-sm font-medium ${colors.pill} transition-all duration-200 hover:scale-110 hover:shadow-md cursor-default`}
                              style={{ animationDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
