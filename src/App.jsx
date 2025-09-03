import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Brain, Database, Award, GraduationCap, Briefcase, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = {
    languages: ['Python', 'C', 'Java', 'JavaScript', 'HTML', 'CSS'],
    frameworks: ['TensorFlow', 'OpenCV', 'Flask', 'Streamlit'],
    databases: ['MySQL', 'PostgreSQL'],
    tools: ['Git', 'Linux', 'Jupyter Notebook']
  };

  const projects = [
    {
      title: 'Driver Drowsiness Detection using AI',
      description: 'Built a real-time driver alert system using CNNs, OpenCV, and TensorFlow. Achieved 89.96%+ accuracy and integrated audio-visual alerts.',
      tech: ['TensorFlow', 'OpenCV', 'Python', 'CNN'],
      link: 'https://github.com/Nityam2305/Drowsiness_Detection'
    },
    {
      title: 'Landmark Descriptor (GenAI Tourist Assistant)',
      description: 'Created an app using Gemini API to describe landmarks from images. Included multilingual support, map links, Wikipedia integration, and voice narration.',
      tech: ['Gemini API', 'Python', 'AI', 'Computer Vision'],
      link: 'https://github.com/Nityam2305/Gemini_Landmark_Descriptor'
    },
    {
      title: 'Crop Recommendation System using Deep Learning',
      description: 'Designed a neural network with TensorFlow to predict optimal crops using soil and climate inputs. Deployed with a Streamlit UI, achieving high accuracy over 22 crop classes.',
      tech: ['TensorFlow', 'Streamlit', 'Deep Learning', 'Python'],
      link: 'https://github.com/Nityam2305/Crop_Recommendation'
    }
  ];

  const experiences = [
    {
      title: 'Altair Data Science Master Virtual Internship',
      period: 'Jan 2025 – Mar 2025',
      description: 'Worked on real-world machine learning and data science projects. Part of EduSkills Cohort 11.'
    },
    {
      title: 'Google Cloud Generative-AI Virtual Internship',
      period: 'Oct 2024 – Dec 2024',
      description: 'Trained models on Vertex AI and built cloud-based intelligent apps. Part of EduSkills Cohort 10.'
    },
    {
      title: 'Google AI-ML Virtual Internship',
      period: 'July 2024 – Sep 2024',
      description: 'Developed AI solutions in computer vision and NLP using deep learning. Part of EduSkills Cohort 9.'
    }
  ];

  const certifications = [
    'Google Cloud Career Launchpad Cybersecurity',
    'Google Cloud Computing Foundations',
    'E-Box: Certified in C, Java, Python, DS, DBMS, HTML, JS'
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Nityam Upadhyay</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Skills</a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 flex items-center justify-center min-h-[calc(100vh-6rem)]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-4 leading-tight">
              AI/ML Developer
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Building intelligent solutions with machine learning and computer vision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-300" onClick={() => window.open('https://github.com/Nityam2305', '_blank')}>
                <Github className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 px-4 bg-white shadow-inner"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                I'm a passionate AI/ML developer currently pursuing B.Tech in Computer Science Engineering with specialization in AI & ML at Jawaharlal Nehru Technological University, Hyderabad. With a CGPA of 8.3/10, I'm dedicated to creating innovative solutions using cutting-edge technology.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                My expertise spans across machine learning, computer vision, and deep learning, with hands-on experience in developing real-world applications that solve practical problems.
              </p>
              <div className="flex items-center gap-6 text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>Hyderabad, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-500" />
                  <span>Graduating May 2026</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="border-l-4 border-blue-500 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-blue-700">
                    <GraduationCap className="h-6 w-6" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800">B.Tech in CSE (AI & ML)</h4>
                      <p className="text-sm text-slate-600">JNTU Hyderabad • CGPA: 8.3/10</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Intermediate (MPC)</h4>
                      <p className="text-sm text-slate-600">Sri Chaitanya Jr Kalasala • 944/1000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 px-4 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={itemVariants}>
              <Card className="h-full flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600">
                    <Code className="h-5 w-5" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <Brain className="h-5 w-5" />
                    Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-600">
                    <Database className="h-5 w-5" />
                    Databases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-800">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600">
                    <Award className="h-5 w-5" />
                    Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-800">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 px-4 bg-white shadow-inner"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2 text-blue-700">
                          <Briefcase className="h-5 w-5" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-blue-600 font-medium text-base">{exp.period}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 px-4 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-blue-700">
                      {project.title}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                          <ExternalLink className="h-5 w-5 text-slate-400 hover:text-blue-600" />
                        </a>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="px-3 py-1 text-xs rounded-full border-blue-300 text-blue-700 bg-blue-50">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 px-4 bg-white shadow-inner"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center hover:shadow-md transition-shadow duration-300 border-t-4 border-yellow-500">
                  <CardContent className="pt-6">
                    <Award className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                    <p className="font-medium text-slate-700 text-lg">{cert}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 px-4 bg-slate-900 text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a href="mailto:nityamupadhyay005@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-lg">
              <Mail className="h-6 w-6" />
              nityamupadhyay005@gmail.com
            </a>
            <a href="tel:+918801104373" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-lg">
              <Phone className="h-6 w-6" />
              +91 880-110-4373
            </a>
          </div>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 transform hover:scale-105 transition-transform duration-300" onClick={() => window.open('https://www.linkedin.com/in/nityam-upadhyay-a1336a282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank')}>
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 transform hover:scale-105 transition-transform duration-300" onClick={() => window.open('https://github.com/Nityam2305', '_blank')}>
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-800 text-slate-400 text-center">
        <p>&copy; 2025 Nityam Upadhyay. All rights reserved.</p>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;


