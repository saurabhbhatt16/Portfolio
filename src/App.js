import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Menu, X, Sun, Moon, Code, Database, Server, Smartphone } from 'lucide-react';

const Portfolio = () => {
  // Theme management
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Toggle theme
  const toggleTheme = () => setIsDark(!isDark);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Handle scroll for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'resume', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Personal information (Easy to update)
  const personalInfo = {
    name: "Saurav Bhatt",
    role: "Full Stack Developer",
    tagline: "Building scalable web applications with modern technologies",
    location: "Dehradun, Uttarakhand",
    phone: "+91-8266051604",
    email: "saurabh.bhatt16.4.4@gmail.com",
    linkedin: "https://linkedin.com/in/saurav-bhatt",
    github: "https://github.com/saurav-bhatt"
  };

  // Skills data (Easy to update)
  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript", "C++", "HTML/CSS"],
    "Frontend": ["React.js", "Flutter", "HTML5", "CSS3", "Responsive Design"],
    "Backend": ["Node.js", "Express.js", "Spring Boot", "RESTful APIs"],
    "Database": ["MongoDB", "PostgreSQL", "SQL"],
    "Cloud & Tools": ["AWS", "GCP", "Docker", "Firebase", "Git", "Jenkins"]
  };

  // Projects data (Easy to update)
  const projects = [
    {
      title: "EduQube: AI-powered Quiz App",
      description: "Created a quiz app that uses AI to generate over 10,000 questions from lectures, PDFs, and videos, saving 80% of the time spent on manual preparation. Cross-platform application with 99.9% uptime.",
      tech: ["React.js", "Node.js", "PostgreSQL", "AWS", "Firebase"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "SymptoNarrator: AI Health Symptom Narrator",
      description: "Intelligent system that transforms unstructured patient symptoms into structured medical case reports with 95% accuracy. Real-time symptom narration with 60% reduction in data entry time.",
      tech: ["Python", "NLP", "TensorFlow", "Flask", "MongoDB"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "TaskMate Chrome Extension",
      description: "Chrome extension with 500+ weekly users that automates tasks and reduces manual labor by 70%. Features real-time alerts and analytics dashboard.",
      tech: ["Flutter", "Dialogflow", "Firebase", "Chrome APIs"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "TalkScrite: Language Translator",
      description: "Web-based text translator supporting 10+ languages with dictionary feature containing 5,000+ terms. 100% device compatibility with 95% user satisfaction.",
      tech: ["HTML", "CSS", "JavaScript", "Translation APIs"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  // Education and experience data (Easy to update)
  const timeline = [
    {
      type: "education",
      title: "B.Tech - Computer Science and Engineering",
      institution: "Graphic Era Hill University",
      period: "2022 - 2026",
      description: "CGPA: 6.65 | Focus on software development, algorithms, and system design"
    },
    {
      type: "certification",
      title: "Google Data Analytics Certification",
      institution: "Coursera",
      period: "2024",
      description: "Comprehensive data analysis and visualization skills"
    },
    {
      type: "achievement",
      title: "National Coding Contest - Top 1%",
      institution: "Crew Matrix (Unstop Platform)",
      period: "May 2024",
      description: "Ranked in top 1% among 600+ competitors in competitive programming"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Navigation Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              SB
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'resume', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-500 transition-colors ${
                    activeSection === item ? 'text-blue-500' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
              {['home', 'about', 'projects', 'resume', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 px-4 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Landing Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
              {personalInfo.role}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <a href={`mailto:${personalInfo.email}`} className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all hover:scale-110">
              <Mail size={24} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all hover:scale-110">
              <Github size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce opacity-0 animate-fade-in-up"
            style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}
          >
            <ChevronDown size={32} className="text-gray-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                I'm a passionate Computer Science student at Graphic Era Hill University with a strong foundation in 
                full-stack development. I specialize in building scalable web applications and AI-powered solutions 
                that solve real-world problems.
              </p>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                With experience in modern technologies like React.js, Node.js, Python, and cloud platforms, 
                I've successfully developed applications that serve hundreds of users with high performance and reliability.
              </p>
              
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <MapPin size={20} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow`}>
                  <h3 className="text-lg font-semibold mb-3 text-blue-500">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 text-sm rounded-full ${
                          isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  isDark ? 'bg-gray-900' : 'bg-gray-50'
                } ${project.featured ? 'md:col-span-2' : ''}`}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume/Experience Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Education & Experience</h2>
          
          <div className="text-center mb-12">
            <button className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform md:-translate-x-0.5"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>
                
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className={`p-6 rounded-lg shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow`}>
                    <div className="flex items-center mb-2">
                      <span className={`px-2 py-1 text-xs rounded-full mr-3 ${
                        item.type === 'education' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        item.type === 'certification' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      }`}>
                        {item.type}
                      </span>
                      <span className="text-sm text-gray-500">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-blue-500 mb-3">{item.institution}</p>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-500" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-blue-500 hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-500" size={24} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-blue-500 hover:underline">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-500" size={24} />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6 mt-8">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-700 hover:bg-gray-800 text-white transition-all hover:scale-110"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                      isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                  ></textarea>
                </div>
                
                <button
                  onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors font-semibold"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 {personalInfo.name}. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;