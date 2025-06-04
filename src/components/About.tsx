
import React from 'react';
import { GraduationCap, MapPin, Target, Heart, User, Sparkles, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-900 dark:to-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-yellow-300 dark:from-pink-900 dark:to-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in">
            <div className="relative">
              <User className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 animate-pulse" />
              <div className="absolute inset-0 w-6 sm:w-8 h-6 sm:h-8 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="relative">
              <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-purple-500 animate-spin" />
              <div className="absolute inset-0 w-6 sm:w-8 h-6 sm:h-8 bg-purple-500 rounded-full opacity-20 animate-ping animation-delay-1000"></div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in animation-delay-500 px-4">
            An aspiring full-stack developer passionate about creating meaningful digital experiences ✨
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Profile Image */}
<div className="relative order-2 lg:order-1">
  <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[400px] lg:w-96 lg:h-[450px] mx-auto bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl relative overflow-hidden">
    <img 
      src="/Images/jason.jpg" 
      alt="Jason Gonsalves"
      className="absolute inset-0 w-full h-full object-cover object-top rounded-2xl"
    />
    {/* Responsive decorative element */}
    <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 lg:-bottom-6 lg:-right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-80"></div>
  </div>
</div>

            {/* Right side - Content */}
            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="p-2 lg:p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                    <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
                    <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                      Computer Engineering Student at Fr. Conceicao Rodrigues College of Engineering (FRCRCE)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="p-2 lg:p-3 bg-purple-100 dark:bg-purple-900 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-2">Technical Foundation</h3>
                    <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                      Strong foundation in C, C++, and Python with hands-on experience in object-oriented programming and full-stack development using MERN and Django.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="p-2 lg:p-3 bg-green-100 dark:bg-green-900 rounded-lg flex-shrink-0">
                    <Target className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-2">Current Focus</h3>
                    <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                      Deepening full-stack development knowledge while sharpening Data Structures & Algorithms skills to build more efficient solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="p-2 lg:p-3 bg-red-100 dark:bg-red-900 rounded-lg flex-shrink-0">
                    <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-red-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-2">Passion</h3>
                    <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                      Love exploring new technologies like React, Node.js, Express, MongoDB, and Next.js. Enjoy combining clean, responsive frontend design with robust backend logic.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 lg:pt-6">
                <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  I'm an aspiring full-stack developer with a strong foundation in programming languages like C, C++ and Python, and hands-on experience in object-oriented programming. I've built projects using both the MERN stack and Django, which has helped me understand and implement scalable, full-stack web solutions from end to end.
                </p>
                <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  With a curious mindset and a drive to grow, I'm always open to collaborating on impactful tech projects that push boundaries and make a difference. I have a passion for problem-solving, learning by doing, and crafting digital experiences that are both functional and user-focused.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
