import React, { useState } from 'react';
import { Calendar, MapPin, Award, Users, Target, Lightbulb, Heart } from 'lucide-react';

const Experience: React.FC = () => {
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null);

  const experiences = [
    {
      title: "Design Manager",
      organization: "TEDxCRCE",
      location: "Fr. Conceicao Rodrigues College of Engineering",
      period: " Aug 2024 - Present",
      type: "College Council",
      description: [
        "Created visually appealing promotional content, reels, andgraphics for TEDxCRCE’s Instagram and other social mediaplatforms to enhance audience engagement.",
        "Designed creative posters, banners, and event materials, ensuringalignment with TEDx branding guidelines.",
        "Collaborated with the team to develop and execute innovativedesign strategies for impactful marketing campaigns acrossvarious digital platforms.",
        "Tools Used: Canva, DaVinci Resolve, Adobe Premiere Pro, etc."
      ],
      color: "blue",
      icon: Users,
      achievements: ["Internship Expo", "9th Annual Event"]
    }
    // {
    //   title: "Event Coordinator",
    //   organization: "Internship Expo",
    //   location: "FRCRCE",
    //   period: "2023",
    //   type: "Event Management",
    //   description: [
    //     "Organized and coordinated internship opportunities for students across various industries",
    //     "Facilitated connections between students and potential employers",
    //     "Managed event logistics, registration, and attendee experience",
    //     "Developed promotional strategies to maximize student participation"
    //   ],
    //   color: "green",
    //   icon: Target,
    //   achievements: ["Connected 200+ students", "15+ companies participated"]
    // },
    // {
    //   title: "Community Volunteer",
    //   organization: "Umed Handicapped Centre",
    //   location: "Community Service",
    //   period: "2022 - Present",
    //   type: "Social Impact",
    //   description: [
    //     "Actively participating in community service initiatives to support differently-abled individuals",
    //     "Organizing awareness campaigns and fundraising activities",
    //     "Developing inclusive programs and workshops for community engagement",
    //     "Building bridges between technology and accessibility through volunteer work"
    //   ],
    //   color: "purple",
    //   icon: Heart,
    //   achievements: ["20+ volunteer hours", "Community impact programs"]
    // }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
        border: "border-blue-200 dark:border-blue-800",
        icon: "from-blue-500 to-blue-600",
        text: "text-blue-600 dark:text-blue-400",
        accent: "bg-blue-500"
      },
      green: {
        bg: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
        border: "border-green-200 dark:border-green-800",
        icon: "from-green-500 to-green-600",
        text: "text-green-600 dark:text-green-400",
        accent: "bg-green-500"
      },
      purple: {
        bg: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
        border: "border-purple-200 dark:border-purple-800",
        icon: "from-purple-500 to-purple-600",
        text: "text-purple-600 dark:text-purple-400",
        accent: "bg-purple-500"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-900 dark:to-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-300 to-blue-300 dark:from-green-900 dark:to-blue-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-900 dark:to-pink-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Users className="absolute top-32 left-20 w-8 h-8 text-blue-400 opacity-20 animate-bounce animation-delay-500" />
        <Target className="absolute bottom-32 right-20 w-6 h-6 text-green-400 opacity-20 animate-pulse animation-delay-1000" />
        <Heart className="absolute top-1/3 right-1/4 w-10 h-10 text-purple-400 opacity-20 animate-float animation-delay-1500" />
        <Lightbulb className="absolute bottom-1/4 left-1/3 w-7 h-7 text-yellow-400 opacity-20 animate-bounce animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
            <div className="relative">
              <Award className="w-8 h-8 text-blue-500 animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="relative">
              <Lightbulb className="w-8 h-8 text-yellow-500 animate-bounce" />
              <div className="absolute inset-0 w-8 h-8 bg-yellow-500 rounded-full opacity-20 animate-ping animation-delay-1000"></div>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in animation-delay-500">
            My journey in event management, community engagement, and collaborative projects 🌟
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-30 rounded-full"></div>

            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              const IconComponent = exp.icon;
              return (
                <div 
                  key={index} 
                  className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`}
                  style={{ animationDelay: `${index * 300}ms` }}
                  onMouseEnter={() => setHoveredExperience(index)}
                  onMouseLeave={() => setHoveredExperience(null)}
                >
                  {/* Enhanced Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`w-6 h-6 bg-gradient-to-r ${colors.icon} rounded-full border-4 border-white dark:border-gray-800 shadow-lg animate-pulse`}>
                      <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
                    </div>
                  </div>

                  {/* Enhanced Content Card */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} md:w-1/2`}>
                    <div className={`group relative bg-gradient-to-br ${colors.bg} ${colors.border} border-2 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm ${
                      hoveredExperience === index ? 'scale-105 -translate-y-2' : ''
                    }`}>
                      {/* Header with Enhanced Styling */}
                      <div className="flex items-start justify-between mb-6 relative z-10">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                            {exp.title}
                          </h3>
                          <p className={`${colors.text} font-semibold text-lg mb-2`}>
                            {exp.organization}
                          </p>
                        </div>
                        <div className={`p-4 bg-gradient-to-r ${colors.icon} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Enhanced Meta Information */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                          <Calendar size={16} />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                          <MapPin size={16} />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>

                      {/* Enhanced Type Badge */}
                      <div className="mb-6">
                        <span className={`${colors.text} bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-semibold border ${colors.border} shadow-sm hover:scale-105 transition-transform duration-200 inline-block`}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Enhanced Description */}
                      <div className="space-y-3 mb-6">
                        {exp.description.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3 group/item hover:bg-white/30 dark:hover:bg-gray-800/30 p-2 rounded-lg transition-all duration-200">
                            <div className={`w-2 h-2 ${colors.accent} rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200`}></div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Achievements Section */}
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Key Achievements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <span
                              key={achIndex}
                              className={`px-3 py-1 bg-gradient-to-r ${colors.icon} text-white rounded-full text-xs font-medium shadow-md hover:scale-105 transition-transform duration-200`}
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in animation-delay-2000">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-500 animate-bounce" />
                Ready for New Challenges
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Each experience has shaped my perspective and strengthened my passion for creating meaningful impact through technology and collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-200">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Team Collaboration</span>
                </div>
                <div className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-200">
                  <Target className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Goal-Oriented</span>
                </div>
                <div className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-200">
                  <Heart className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Community Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
