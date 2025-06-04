
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code, Palette, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Aspiring Full-Stack Developer",
    "Problem Solver",
    "Creative Thinker", 
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 w-full">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden w-full">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-green-200 dark:bg-green-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-50 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full">
        <Code className="absolute top-20 left-4 sm:left-10 w-6 sm:w-8 h-6 sm:h-8 text-blue-400 opacity-30 animate-bounce" />
        <Palette className="absolute top-40 right-8 sm:right-20 w-5 sm:w-6 h-5 sm:h-6 text-purple-400 opacity-30 animate-pulse" />
        <Zap className="absolute bottom-40 left-8 sm:left-20 w-8 sm:w-10 h-8 sm:h-10 text-yellow-400 opacity-30 animate-bounce animation-delay-1000" />
        <Code className="absolute bottom-20 right-4 sm:right-10 w-6 sm:w-7 h-6 sm:h-7 text-green-400 opacity-30 animate-pulse animation-delay-2000" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center w-full">
          {/* Animated Greeting */}
          <div className="mb-4 animate-fade-in">
            <span className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-full text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold animate-bounce">
              👋 Hello, I'm
            </span>
          </div>

          {/* Main Heading with Enhanced Animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in animation-delay-500 leading-tight">
            <span className="block animate-slide-in-left">Jason</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-in-right animation-delay-1000">
              Gonsalves
            </span>
          </h1>

          {/* Dynamic Role with Typewriter Effect */}
          <div className="h-12 sm:h-16 mb-4 animate-fade-in animation-delay-1500">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                {roles[currentRole]}
              </span>
            </p>
          </div>

          {/* Enhanced Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-2000 px-4">
            Passionate about creating 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> meaningful digital experiences </span>
            through code, design, and innovation ✨
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 animate-fade-in animation-delay-2500 px-4">
            <button
              onClick={scrollToProjects}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
            >
              <Zap className="w-4 sm:w-5 h-4 sm:h-5 group-hover:animate-pulse" />
              Explore My Work
              <ArrowDown className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-xl font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
            >
              <Mail className="w-4 sm:w-5 h-4 sm:h-5 group-hover:animate-bounce" />
              Get In Touch
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-12 sm:mb-16 animate-fade-in animation-delay-3000 px-4">
            <a
              href="https://www.linkedin.com/in/jasongonsalves-/"
              className="group p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900"
            >
              <Linkedin className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 group-hover:animate-pulse" />
            </a>
            <a
              href="https://github.com/Jason3105"
              className="group p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <Github className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:animate-spin" />
            </a>
            <a
              href="mailto:crce.10246.ceb@gmail.com"
              className="group p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:bg-red-50 dark:hover:bg-red-900"
            >
              <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-red-500 group-hover:animate-bounce" />
            </a>
          </div>

          {/* Enhanced Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="group animate-bounce p-3 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:scale-110"
          >
            <div className="relative">
              <ArrowDown size={20} className="sm:w-6 sm:h-6 group-hover:translate-y-1 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
