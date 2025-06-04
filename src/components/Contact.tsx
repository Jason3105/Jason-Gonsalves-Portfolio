
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Sparkles, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Email",
      value: "crce.10246.ceb@gmail.com",
      href: "mailto:crce.10246.ceb@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Phone",
      value: "+91 9730397937",
      href: "tel:+919730397937"
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Location",
      value: "Vasai, Maharashtra, India",
      href: "https://g.co/kgs/kwgVQLA"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jasongonsalves-/",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "GitHub",
      href: "https://github.com/Jason3105",
      color: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Email",
      href: "mailto:crce.10246.ceb@gmail.com",
      color: "text-red-600 hover:text-red-700"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-900 dark:to-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-yellow-300 dark:from-pink-900 dark:to-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in">
            <div className="relative">
              <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 animate-bounce" />
              <div className="absolute inset-0 w-6 sm:w-8 h-6 sm:h-8 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="relative">
              <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-purple-500 animate-spin" />
              <div className="absolute inset-0 w-6 sm:w-8 h-6 sm:h-8 bg-purple-500 rounded-full opacity-20 animate-ping animation-delay-1000"></div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in animation-delay-500 px-4">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together ✨
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Contact Info - Responsive Layout */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg h-fit w-full">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group w-full"
                    >
                      <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          {info.label}
                        </p>
                        <p className="text-sm sm:text-base text-gray-900 dark:text-white font-medium truncate">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Follow Me
                  </h4>
                  <div className="flex space-x-3 sm:space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg ${social.color} hover:scale-110 transition-all duration-200 hover:shadow-lg flex-shrink-0`}
                        title={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Responsive Layout */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg w-full">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 text-sm sm:text-base"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 text-sm sm:text-base"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 text-sm sm:text-base"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-none text-sm sm:text-base"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} className="sm:w-5 sm:h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
