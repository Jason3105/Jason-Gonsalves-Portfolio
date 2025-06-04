import React, { useState } from 'react';
import { Award, Trophy, BookOpen, Target, Sparkles, X, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const certificates = [
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "May 2025",
      category: "Frontend",
      description: "The fundamentals of building modern, responsive websites. It covers topics like page structure, forms, flexbox, CSS grid, and media queries—equipping learners to create web pages that work well on all screen sizes. The course is hands-on, with projects that reinforce practical skills.",
      credentialUrl: "https://www.freecodecamp.org/certification/jasongonsalves/responsive-web-design",
      certificateImageUrl: "/Images/fcc_rwd.png",
      skills: ["HTML", "CSS", "Javascript"],
      image: "/Images/fcc_rwd.png",
      rating: 5,
      duration: "300 hours",
      level: "Advanced"
    }
    // {
    //   title: "Full Stack Web Development",
    //   issuer: "FreeCodeCamp",
    //   date: "2023",
    //   category: "Full Stack",
    //   description: "Complete full-stack development certification including frontend, backend, databases, and deployment.",
    //   credentialUrl: "https://freecodecamp.org/certification/certificate456",
    //   certificateImageUrl: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=800&h=600&fit=crop",
    //   skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    //   rating: 5,
    //   duration: "8 months",
    //   level: "Advanced"
    // },
    // {
    //   title: "UI/UX Design Fundamentals",
    //   issuer: "Google",
    //   date: "2022",
    //   category: "Design",
    //   description: "Design thinking, user research, prototyping, and creating user-centered digital experiences.",
    //   credentialUrl: "https://coursera.org/verify/certificate789",
    //   certificateImageUrl: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=800&h=600&fit=crop",
    //   skills: ["Figma", "User Research", "Prototyping", "Design Thinking"],
    //   image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    //   rating: 4,
    //   duration: "4 months",
    //   level: "Intermediate"
    // },
    // {
    //   title: "Project Management Professional",
    //   issuer: "Coursera",
    //   date: "2022",
    //   category: "Management",
    //   description: "Project planning, execution, monitoring, and team leadership in agile and traditional environments.",
    //   credentialUrl: "https://coursera.org/verify/certificate101",
    //   certificateImageUrl: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=800&h=600&fit=crop",
    //   skills: ["Project Management", "Leadership", "Agile", "Team Coordination"],
    //   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    //   rating: 4,
    //   duration: "3 months",
    //   level: "Intermediate"
    // },
    // {
    //   title: "Digital Marketing Certification",
    //   issuer: "HubSpot",
    //   date: "2022",
    //   category: "Marketing",
    //   description: "Comprehensive digital marketing strategies, content creation, and campaign optimization techniques.",
    //   credentialUrl: "https://academy.hubspot.com/verify/certificate202",
    //   certificateImageUrl: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=800&h=600&fit=crop",
    //   skills: ["Digital Marketing", "Content Strategy", "Analytics", "SEO"],
    //   image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    //   rating: 4,
    //   duration: "2 months",
    //   level: "Beginner"
    // },
    // {
    //   title: "Python Programming",
    //   issuer: "Python Institute",
    //   date: "2021",
    //   category: "Backend",
    //   description: "Advanced Python programming concepts, data structures, algorithms, and application development.",
    //   credentialUrl: "https://pythoninstitute.org/verify/certificate303",
    //   certificateImageUrl: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=800&h=600&fit=crop",
    //   skills: ["Python", "Data Structures", "Algorithms", "Backend Development"],
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    //   rating: 5,
    //   duration: "5 months",
    //   level: "Advanced"
    // }
  ];

  const categories = ['all', 'Frontend', 'Backend', 'Full Stack', 'Design', 'Management', 'Marketing'];
  
  const filteredCertificates = filter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === filter);

  const openCertificate = (cert: any) => {
    setSelectedCertificate(cert);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-yellow-900 dark:to-orange-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-900 dark:to-pink-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-300 to-cyan-300 dark:from-blue-900 dark:to-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Trophy className="absolute top-32 right-20 w-8 h-8 text-yellow-400 opacity-20 animate-bounce animation-delay-500" />
        <BookOpen className="absolute bottom-32 left-20 w-6 h-6 text-blue-400 opacity-20 animate-pulse animation-delay-1000" />
        <Target className="absolute top-1/3 left-1/4 w-10 h-10 text-green-400 opacity-20 animate-float animation-delay-1500" />
        <Sparkles className="absolute bottom-1/4 right-1/3 w-7 h-7 text-purple-400 opacity-20 animate-bounce animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in">
            <div className="relative">
              <Trophy className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500 animate-bounce" />
              <div className="absolute inset-0 w-6 sm:w-8 h-6 sm:h-8 bg-yellow-500 rounded-full opacity-20 animate-ping"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
            <div className="relative">
              <Award className="w-6 sm:w-8 h-6 sm:h-8 text-orange-500 animate-pulse" />
              <div className="absolute inset-0 w-6 sm:w-8 h-6 sm:h-8 bg-orange-500 rounded-full opacity-20 animate-ping animation-delay-1000"></div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in animation-delay-500 px-4">
            Continuous learning and professional development through industry-recognized certifications 🏆
          </p>

          <div className="animate-fade-in animation-delay-1000">
            <Tabs defaultValue="all" className="w-full max-w-6xl mx-auto">
              <div className="overflow-x-auto scrollbar-hide pb-2">
                <TabsList className="flex w-max min-w-full sm:w-full sm:grid sm:grid-cols-4 lg:grid-cols-7 gap-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg p-2 rounded-xl mx-auto">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      onClick={() => setFilter(category)}
                      className="flex items-center justify-center gap-1 text-xs sm:text-sm py-2 sm:py-3 px-2 sm:px-3 rounded-lg transition-all duration-200 min-h-[40px] hover:scale-105 whitespace-nowrap"
                    >
                      <span className="truncate">
                        {category === 'all' ? `All (${certificates.length})` : category}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </Tabs>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {filteredCertificates.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-900 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 cursor-pointer transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => openCertificate(cert)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 lg:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-xs sm:text-sm leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-white/80 text-xs mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 lg:mt-16 animate-fade-in animation-delay-2000">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl lg:rounded-3xl p-6 sm:p-8 border border-yellow-200 dark:border-yellow-800 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
                <Trophy className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500 animate-bounce" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Continuous Learning Journey
                </h3>
                <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-orange-500 animate-pulse" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                I believe in staying current with industry trends and continuously expanding my skill set. 
                These certifications represent my commitment to professional growth and excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 sm:py-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-200">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                  <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base">{certificates.length}+ Certifications</span>
                </div>
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 sm:py-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-200">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base">Active Learner</span>
                </div>
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 sm:py-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-200">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base">Goal Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {selectedCertificate && (
  <div
    onClick={closeCertificate}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white dark:bg-gray-900 rounded-lg max-w-xl w-full p-6 relative overflow-y-auto max-h-[80vh]"
    >
      <button
        onClick={closeCertificate}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:hover:text-white"
        aria-label="Close modal"
      >
        <X size={24} />
      </button>

      <img
        src={selectedCertificate.certificateImageUrl}
        alt={selectedCertificate.title}
        className="w-full rounded-md mb-4 object-contain max-h-48"
      />
      <h3 className="text-2xl font-bold mb-2">{selectedCertificate.title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        Issued by <strong>{selectedCertificate.issuer}</strong> — <em>{selectedCertificate.date}</em>
      </p>
      <p className="mb-4">{selectedCertificate.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {selectedCertificate.skills.map((skill) => (
          <span
            key={skill}
            className="bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold">Duration: {selectedCertificate.duration}</p>
          <p className="text-sm font-semibold">Level: {selectedCertificate.level}</p>
          <p className="text-sm font-semibold">Rating: {'⭐'.repeat(selectedCertificate.rating)}</p>
        </div>
        <a
          href={selectedCertificate.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2 rounded-lg font-semibold text-white
             bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700
             hover:from-indigo-600 hover:via-purple-700 hover:to-blue-600
             transition-colors duration-300 shadow-md"
        >
          View Credential <ExternalLink size={16} className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  </div>
)}

      </div>
    </section>
  );
};

export default Certificates;
