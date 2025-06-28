
import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Sparkles, Eye, Star, Zap, Code2, Palette, Database, Users, Target } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'campusconnect',
      title: "FRCRCE CampusConnect",
      description: "CampusConnect is a comprehensive platform designed to connect students with campus events, student councils, and activities. It provides a centralized hub for discovering, registering, and participating in exciting events organized by various student councils across campus.",
      image: "/Images/fcc.png",
      tools: ["React.js", "Node.js", "MongoDB / Mongo Atlas", "Express.js", "Tailwind CSS", "Gemini API"],
      githubUrl: "https://github.com/Jason3105/FRCRCE-Campus-Connect",
      demoUrl: "https://frcrcecampusconnect.onrender.com/",
      category: "fullstack",
      builtFor: "College Students and Councils",
      impact: "Seamless flow of event organisation and marketing",
      features: ["User Dashboard", "Event Registration", "Council Details"]
    },
    {
      id: 'collegeportal',
      title: "College Portal",
      description: "A smart and efficient classroom management platform designed to enhance the learning experience for both students and teachers. This platform streamlines classroom management tasks such as attendance tracking, academic progress monitoring, interactive teacher-student communication, and homework management.",
      image: "/Images/cp.jpg",
      tools: ["HTML", "CSS", "Javascript", "Bootstrap", "Django"],
      githubUrl: "https://github.com/Jason3105/CollegePortal",
      demoUrl: "https://collegeportal-yake.onrender.com/",
      category: "fullstack",
      builtFor: "College Faculty and Students",
      impact: "Organised and easy to access attendance and marks of students",
      features: ["User Dashboard", "Admin Panel", "Analytics", "Django Database"]
    },
    {
      id: 'flixtv',
      title: "FlixTV",
      description: "FlixTV is a Netflix-inspired streaming platform that allows users to browse, search, and stream movies seamlessly. Built with modern web technologies, FlixTV provides a sleek and responsive UI, personalized recommendations, and a smooth viewing experience.",
      image: "/Images/ft.png",
      tools: ["HTML", "CSS", "Javascript"],
      githubUrl: "https://github.com/Jason3105/Flix-TV",
      demoUrl: "https://jason3105.github.io/Flix-TV/",
      category: "web",
      builtFor: "Streaming Movies & TV Shows",
      impact: "Get a feel of the ui/ux of the actual netflix website",
      features: ["Expense Tracking", "Budget Planning", "Goal Setting"]
    },
    {
      id: 'panchayat',
      title: "Panchayat Samiti of Navapur Website",
      description: "We developed a user-friendly website for the Panchayat Samiti of Navapur to improve access to government schemes, services, and local updates. The site aims to promote transparency, support rural development, and connect citizens with key information like PMAY and MGNREGA in a digital format that’s accessible to all.",
      image: "/Images/psn.png",
      tools: ["React.js", "HTML", "CSS", "Javascript", "Google Translator API", "Gemini API"],
      githubUrl: "https://github.com/Jason3105/Navapur-Panchayat-Samiti",
      demoUrl: "https://panchayatnavapur.netlify.app/",
      category: "web",
      builtFor: "Local Citizens of Navapur",
      impact: "Easy access to various government schemes, services and creating awareness among the people",
      features: ["Filtering by Category", "Responsive Design", "Modern UI", "Multilingual Support", "Web Results based Chatbot"]
    }
    // {
    //   id: 'chatapp',
    //   title: "Real-time Chat Application",
    //   description: "A real-time messaging app with Socket.io, featuring group chats, file sharing, and emoji reactions.",
    //   image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
    //   tools: ["React.js", "Socket.io", "Node.js", "MongoDB"],
    //   githubUrl: "https://github.com",
    //   demoUrl: "https://demo.com",
    //   category: "fullstack",
    //   builtFor: "Team Communication",
    //   impact: "Improved team collaboration",
    //   features: ["Real-time Messaging", "File Sharing", "Group Chats"]
    // }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fullstack':
        return <Database className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'web':
        return <Code2 className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'design':
        return <Palette className="w-3 h-3 sm:w-4 sm:h-4" />;
      default:
        return <Code2 className="w-3 h-3 sm:w-4 sm:h-4" />;
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-900 dark:to-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-yellow-300 dark:from-pink-900 dark:to-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-300 to-blue-300 dark:from-green-900 dark:to-blue-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code2 className="absolute top-32 right-20 w-8 h-8 text-blue-400 opacity-20 animate-bounce animation-delay-500" />
        <Database className="absolute bottom-32 left-20 w-6 h-6 text-purple-400 opacity-20 animate-pulse animation-delay-1000" />
        <Palette className="absolute top-1/3 right-1/4 w-10 h-10 text-pink-400 opacity-20 animate-float animation-delay-1500" />
        <Zap className="absolute bottom-1/4 right-1/3 w-7 h-7 text-yellow-400 opacity-20 animate-bounce animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in">
            <div className="relative">
              <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-purple-500 animate-spin" />
              <div className="absolute inset-0 w-6 sm:w-8 h-6 sm:h-8 bg-purple-500 rounded-full opacity-20 animate-ping"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="relative">
              <Star className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500 animate-pulse" />
              <div className="absolute inset-0 w-6 sm:w-8 h-6 sm:h-8 bg-yellow-500 rounded-full opacity-20 animate-ping animation-delay-1000"></div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in animation-delay-500 px-4">
            A showcase of my work spanning web development, design, and creative solutions ✨
          </p>

          {/* Enhanced Responsive Filter Tabs */}
          <div className="animate-fade-in animation-delay-1000">
            <Tabs defaultValue="all" className="w-full max-w-6xl mx-auto">
              <div className="overflow-x-auto scrollbar-hide pb-2">
                <TabsList className="flex w-max min-w-full sm:w-full sm:grid sm:grid-cols-4 gap-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg p-2 rounded-xl mx-auto">
                  <TabsTrigger 
                    value="all" 
                    onClick={() => setFilter('all')}
                    className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-200 whitespace-nowrap min-w-fit hover:scale-105"
                  >
                    <Filter className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>All ({projects.length})</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="fullstack" 
                    onClick={() => setFilter('fullstack')}
                    className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-200 whitespace-nowrap min-w-fit hover:scale-105"
                  >
                    <Database className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="hidden xs:inline sm:hidden lg:inline">Full Stack</span>
                    <span className="xs:hidden sm:inline lg:hidden">Stack</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="web" 
                    onClick={() => setFilter('web')}
                    className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-200 whitespace-nowrap min-w-fit hover:scale-105"
                  >
                    <Code2 className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="hidden xs:inline">Web Apps</span>
                    <span className="xs:hidden">Web</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="design" 
                    onClick={() => setFilter('design')}
                    className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-200 whitespace-nowrap min-w-fit hover:scale-105"
                  >
                    <Palette className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>Design</span>
                  </TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </div>
        </div>

        {/* Enhanced Responsive Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 lg:hover:-translate-y-4 animate-fade-in border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Enhanced Project Image */}
                <div className="relative overflow-hidden h-48 sm:h-52 lg:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Enhanced Action Buttons */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.demoUrl}
                      className="p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                    >
                      <Eye size={16} className="sm:w-[18px] sm:h-[18px] text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                    >
                      <Github size={16} className="sm:w-[18px] sm:h-[18px] text-gray-700" />
                    </a>
                  </div>

                  {/* Category Icon */}
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="p-2 bg-white/90 backdrop-blur-sm rounded-full">
                      {getCategoryIcon(project.category)}
                    </div>
                  </div>
                </div>

                {/* Enhanced Project Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Built For Section */}
                  <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Built For</span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">{project.builtFor}</p>
                  </div>

                  {/* Impact Section */}
                  <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-xs font-semibold text-green-600 dark:text-green-400">Impact</span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">{project.impact}</p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 hover:scale-105 transition-transform duration-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools Used */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:scale-105 transition-transform duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Project Links */}
                  <div className="flex space-x-2 sm:space-x-3">
                    <a
                      href={project.githubUrl}
                      className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg sm:rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 transition-all duration-200 flex-1 text-sm"
                    >
                      <Github size={14} className="sm:w-4 sm:h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demoUrl}
                      className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg sm:rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 flex-1 text-sm"
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 lg:mt-16 animate-fade-in animation-delay-2000">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl lg:rounded-3xl p-6 sm:p-8 border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Want to see more? 🚀
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                These projects represent just a glimpse of my development journey. Each one taught me something new and pushed my boundaries further.
              </p>
              <a href='https://github.com/Jason3105'><button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto text-sm sm:text-base">
                <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-spin" />
                Explore More on GitHub
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
