"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, Mail, Phone, Linkedin, Instagram, Clock, User, GraduationCap, BookOpen, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useInView } from "./hooks/useInView"

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "works", label: "My works" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contacts", label: "Contacts" },
]

const projects = [
 // {
//   title: "OverlayScrollbar",
//   tags: ["javascript"],
//   links: { github: true, demo: true },
// },
// {
//   title: "Draggable-List-HTML",
//   tags: ["html", "javascript"],
//   links: { github: true, demo: true },
// },
// {
//   title: "Veritas-Android",
//   tags: ["android"],
//   links: { github: true, android: true, demo: true },
// },
// {
//   title: "K-Mean",
//   tags: ["kmeans-clustering", "machine-learning", "python"],
//   links: { github: true, undefined: true },
// },
// {
//   title: "ImageProcessing",
//   tags: ["canvas", "website"],
//   links: { github: true, web: true, demo: true },
// },
// {
//   title: "SerpentileGame",
//   tags: ["game", "serpentine", "website"],
//   links: { github: true, web: true, demo: true },
// },

{
  title: "Coming Soon",
  tags: ["in progress"],
  links: { github: false, demo: false }
}

]

const skills = [
  { name: "C", color: "bg-blue-500", icon: "/assets/c.png" },
  { name: "C++", color: "bg-blue-600", icon: "/assets/c++.png" },
  { name: "HTML", color: "bg-orange-500", icon: "/assets/html (1).png" },
  { name: "CSS", color: "bg-blue-600", icon: "/assets/css-3.png" },
  { name: "JavaScript", color: "bg-yellow-400", icon: "/assets/java-script.png" },
  { name: "SQL", color: "bg-indigo-600", icon: "/assets/mysql.png" },
  { name: "DBMS", color: "bg-purple-600", icon: "/assets/mysql.png" },
  { name: "Dart", color: "bg-cyan-500", icon: "/assets/dart.png" },
  { name: "Flutter", color: "bg-sky-400", icon: "/assets/flutter.png" },
  { name: "Git", color: "bg-red-600", icon: "/assets/social.png" },
  { name: "Linux", color: "bg-gray-800", icon: "/assets/linux.png" },
  { name: "Python", color: "bg-blue-500", icon: "/assets/python.png" },
  { name: "Node.js", color: "bg-green-600", icon: "/assets/nodejs.png" },
  { name: "Web Scraping", color: "bg-emerald-600", icon: "/assets/web-scraper.png" },
  { name: "Automation", color: "bg-pink-500", icon: "/assets/automated.png" },
  { name: "Docker", color: "bg-blue-400", icon: "/assets/docker.png" },
]

const educationData = [
  {
    institution: "University Institute of Engineering and Technology, Panjab University",
    degree: "Bachelor of Engineering (B.E.)",
    fieldOfStudy: "Computer Science and Engineering",
    duration: "2023 – 2027",
    logo: "/assets/UIET_logo.png"
  },
    {
      institution: "Maharishi Arvind Public School, Rajasthan",
      degree: "Intermediate",
      field: "Physics, Chemistry, Mathematics (PCM)",
      period: "2019 – 2023",
      image: "/assets/maharsishi.jpeg"
    },
]

const certificates = [
  {
    name: "C Programming Certificate",
    image: "/assets/c.png",
    link: "https://olympus.mygreatlearning.com/courses/54666/certificate?pb_id=581"
  },
  {
    name: "C++ Programming Certificate",
    image: "/assets/c++.jpg",
    link: ""
  },
  {
    name: "Excel Certificate (Coursera)",
    image: "/assets/excel.png",
    link: "https://www.coursera.org/account/accomplishments/verify/ZYPEQLLH9V6X"
  }
]

const experienceData = [
  {
    company: "Scorptech Pvt Ltd",
    companyUrl: "https://www.scorptech.co/",
    position: "Python Intern (Current)",
    period: "May 2025 – Present",
    location: "Remote",
    description: [
      "Contributing to web scraping, automation, and data processing projects using Python.",
      "Developing reliable scraping scripts with BeautifulSoup and automating workflows using pandas.",
      "Collaborating with the team to enhance scraping efficiency and maintain data integrity.",
      "Applying best practices in Python scripting, automation, and scalable data handling."
    ],
    technologies: ["Python", "BeautifulSoup4", "pandas", "Web Scraping", "Automation"],
    image: "/assets/scorp_logo.png",
    isCurrent: true
  }
  
]

// Custom hook for typing effect
function useTypingEffect(words: string[], typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentWord = words[wordIndex]

    const type = () => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1))
          timeout = setTimeout(type, typingSpeed)
        } else {
          // Finished typing, wait then start deleting
          timeout = setTimeout(() => {
            setIsDeleting(true)
            type()
          }, pauseTime)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1))
          timeout = setTimeout(type, deletingSpeed)
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }

    timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return { currentText: displayText, showCursor }
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState("")
  const [modalLink, setModalLink] = useState("")
  const words = ["code", "eat", "sleep", "repeat"]
  const { currentText, showCursor } = useTypingEffect(words, 150, 100, 100)

  // Move hooks inside the component
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  experienceRefs.current = experienceData.map((_, i) => experienceRefs.current[i] ?? null);
  const [inViews, setInViews] = useState(experienceData.map(() => false));

  const contactsInView = useInView({ threshold: 0.2 });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    experienceRefs.current.forEach((ref, idx) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setInViews(prev => {
              const updated = [...prev];
              updated[idx] = entry.isIntersecting;
              return updated;
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const getBackgroundGradient = () => {
    switch (activeSection) {
      case "home":
        return "bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800"
      case "works":
        return "bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800"
      case "education":
        return "bg-gradient-to-br from-pink-500 via-purple-600 to-purple-700"
      case "skills":
        return "bg-gradient-to-br from-orange-400 via-red-500 to-pink-500"
      case "experience":
        return "bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700"
      case "contacts":
        return "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500"
      default:
        return "bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800"
    }
  }

  const openModal = (image: string, link: string) => {
    setModalImage(image)
    setModalLink(link)
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
    setModalImage("")
    setModalLink("")
  }

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between h-full max-w-7xl mx-auto px-4 py-12 lg:py-24"
          >
            <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0 lg:mr-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl lg:text-8xl font-extrabold text-white mb-6 drop-shadow-lg"
              >
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-[320px] lg:w-[480px] text-left whitespace-nowrap">
                    <span className="font-mono whitespace-nowrap">
                      {currentText}
                      <span className="text-white/80">{"()"}</span>
                      <span className="text-white/60">{"_"}</span>
                      <span
                        className={`inline-block w-1 h-16 lg:h-20 bg-white ml-2 ${showCursor ? "opacity-100" : "opacity-0"}`}
                        style={{ transition: "opacity 0.1s" }}
                      />
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl lg:text-3xl text-white/80 mt-6 mb-8 lg:mb-12"
              >
                Engineer, Developer, Learner
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 flex justify-center lg:justify-end lg:ml-20"
            >
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500 animate-pulse-slow">
                <Image
                  src="/assets/raman.jpg"
                  alt="Profile"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )

      case "works":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 py-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-white/30 backdrop-blur-xl border border-white/30 shadow-2xl text-white hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-white/20 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.links.github && (
                          <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                            <Github className="w-4 h-4" />
                          </Button>
                        )}
                        {project.links.demo && (
                          <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case "education":
        return (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-7xl mx-auto px-4 py-8"
          >
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
                    className="transition-transform duration-300"
                  >
                    <Card className="bg-white/30 backdrop-blur-xl border border-white/30 shadow-2xl text-white overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                          <Image
                            src={edu.logo || edu.image || "/placeholder.svg"}
                            alt={edu.institution}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <CardContent className="md:w-2/3 p-6">
                          <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                          <div className="flex items-center mb-2 text-lg">
                            <GraduationCap className="w-5 h-5 mr-2" />
                            {edu.degree}
                          </div>
                          <div className="flex items-center mb-2 text-lg">
                            <BookOpen className="w-5 h-5 mr-2" />
                            {edu.fieldOfStudy || edu.field}
                          </div>
                          <div className="flex items-center text-lg">
                            <Calendar className="w-5 h-5 mr-2" />
                            {edu.duration || edu.period}
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Certificates</h2>
              <div className="flex flex-row gap-6 overflow-x-auto py-4 px-2 scrollbar-hide">
                {certificates.map((cert, index) => (
                  <div
                    key={cert.name}
                    className="transition-transform duration-300 min-w-[270px] max-w-[270px] h-[320px] hover:scale-105 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
                  >
                    <Card className="bg-white/30 backdrop-blur-xl border border-white/30 shadow-2xl text-white overflow-hidden rounded-xl h-full flex flex-col">
                      <CardContent className="p-0 flex flex-col items-center h-full">
                        <div className="w-full flex flex-col items-center h-full">
                          <div className="w-full flex items-center rounded-t-xl" style={{ background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)', height: '8px' }} />
                          <div className="text-center py-4 px-4 w-full flex-1 flex flex-col justify-between">
                            <div className="w-full h-32 flex items-center justify-center mb-2">
                              <Image
                                src={cert.image || "/placeholder.svg"}
                                alt={cert.name}
                                width={220}
                                height={120}
                                className="w-[220px] h-[120px] object-contain rounded bg-white border transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-blue-400"
                              />
                            </div>
                            <button
                              className="mt-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-4 py-2 rounded shadow hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
                              onClick={() => openModal(cert.image, cert.link)}
                            >
                              View Certificate
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <div className="text-center text-white mt-2 font-medium">{cert.name}</div>
                  </div>
                ))}
              </div>
            </div>
            {modalOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
              >
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-2xl p-6 max-w-2xl w-full flex flex-col items-center relative"
                >
                  <div className="w-full flex items-center rounded-t-xl absolute left-0 top-0" style={{ background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)', height: '8px' }} />
                  <motion.button
                    className="self-end text-black text-2xl mb-2 absolute right-4 top-2 hover:text-purple-600 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    onClick={closeModal}
                  >
                    &times;
                  </motion.button>
                  <div className="pt-8 pb-4 w-full flex flex-col items-center">
                    <Image
                      src={modalImage}
                      alt="Certificate Large"
                      width={600}
                      height={400}
                      className="w-full max-h-[60vh] object-contain rounded mb-4 border shadow-lg"
                    />
                    {modalLink && (
                      <a
                        href={modalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline text-lg font-semibold mt-2"
                      >
                        Open in new tab
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )

      case "experience":
        return (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.company + index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="group bg-white/30 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-stretch overflow-hidden"
                >
                  {/* Logo section */}
                  {exp.image && (
                    <div className="flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-700/10 md:min-w-[140px] min-h-[120px] md:min-h-[180px] p-6 md:p-8">
                      <Image
                        src={exp.image}
                        alt={exp.company}
                        width={120}
                        height={120}
                        className="w-20 h-20 md:w-28 md:h-28 object-contain rounded-xl bg-white/20 border border-white/30 shadow-md"
                        style={{ minWidth: 80, maxWidth: 120 }}
                      />
                    </div>
                  )}
                  {/* Content section */}
                  <div className="flex-1 flex flex-col justify-between p-6 md:p-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-200">{exp.position}</h3>
                      <div className="text-xl text-white/90 mb-1">
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-300 transition-colors duration-200">
                          {exp.company}
                        </a>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-white/70 mb-4 text-base">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span>{exp.location}</span>
                      </div>
                      <div className="text-white/90 text-lg mb-6">
                        {Array.isArray(exp.description) ? exp.description.join(' ') : exp.description}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-white backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case "skills":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 py-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-white/30 backdrop-blur-xl border border-white/30 shadow-2xl text-white overflow-hidden">
                    <CardContent className="p-0">
                      <div
                        className={`${skill.color} h-32 flex items-center justify-center text-white text-2xl font-bold`}
                      >
                        {typeof skill.icon === 'string' && skill.icon.startsWith('/assets/') ? (
                          <Image
                            src={skill.icon}
                            alt={skill.name + ' logo'}
                            width={64}
                            height={64}
                            className="object-contain w-16 h-16"
                          />
                        ) : (
                          skill.icon
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-center">{skill.name}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case "contacts": {
        const [contactsRef, contactsInViewVal] = contactsInView;
        // Order: Email, LinkedIn, GitHub, Instagram, Discord, Facebook
        const contactIcons: React.ElementType[] = [Mail, Linkedin, Github, Instagram, Clock, User];
        return (
          <motion.div
            ref={contactsRef}
            initial={{ opacity: 0, y: 60 }}
            animate={contactsInViewVal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="animated-gradient flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4 text-center rounded-2xl py-16 shadow-xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={contactsInViewVal ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg"
            >
              RAMAN KUMAR
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={contactsInViewVal ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/80 mb-12"
            >
              Engineer, Developer, Learner
            </motion.p>
            <div className="flex flex-wrap gap-6 justify-center">
              {/* Email icon with circle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={contactsInViewVal ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.18, boxShadow: "0 4px 32px 0 rgba(80, 80, 255, 0.18)" }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300"
              >
                <a href="mailto:ramankr7321@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
                  <span className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-lg hover:scale-105 transition-transform duration-200">
                    <Mail className="w-8 h-8 text-white" />
                  </span>
                </a>
              </motion.div>
              {/* LinkedIn icon with circle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={contactsInViewVal ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.85 }}
                whileHover={{ scale: 1.18, boxShadow: "0 4px 32px 0 rgba(80, 80, 255, 0.18)" }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300"
              >
                <a href="https://www.linkedin.com/in/raman-kumar-b80913282/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <span className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-blue-400 to-blue-300 shadow-lg hover:scale-105 transition-transform duration-200">
                    <Linkedin className="w-8 h-8 text-white" />
                  </span>
                </a>
              </motion.div>
              {/* GitHub icon with circle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={contactsInViewVal ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ scale: 1.18, boxShadow: "0 4px 32px 0 rgba(80, 80, 255, 0.18)" }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300"
              >
                <a href="https://github.com/RamanKumar00" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <span className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 shadow-lg hover:scale-105 transition-transform duration-200">
                    <Github className="w-8 h-8 text-white" />
                  </span>
                </a>
              </motion.div>
              {/* Instagram icon with circle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={contactsInViewVal ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.15 }}
                whileHover={{ scale: 1.18, boxShadow: "0 4px 32px 0 rgba(80, 80, 255, 0.18)" }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300"
              >
                <a href="https://www.instagram.com/__.ramankumar__/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <span className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 shadow-lg hover:scale-105 transition-transform duration-200">
                    <Instagram className="w-8 h-8 text-white" />
                  </span>
                </a>
              </motion.div>
              {/* Discord icon with circle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={contactsInViewVal ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
                whileHover={{ scale: 1.18, boxShadow: "0 4px 32px 0 rgba(80, 80, 255, 0.18)" }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300"
              >
                <a href="https://discord.com/channels/@me" aria-label="Discord" target="_blank" rel="noopener noreferrer">
                  <span className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-blue-500 to-blue-700 shadow-lg hover:scale-105 transition-transform duration-200">
                    {/* Use a Discord SVG icon inline for best compatibility */}
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.073.035c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.163-.393-.405-.874-.617-1.249a.07.07 0 00-.073-.035c-1.67.285-3.27.822-4.885 1.515a.064.064 0 00-.03.027C.533 9.045-.32 13.579.099 18.057a.08.08 0 00.031.056c2.052 1.507 4.042 2.422 5.992 3.029a.077.077 0 00.084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.104c-.652-.247-1.27-.549-1.872-.892a.077.077 0 01-.008-.127c.126-.094.252-.192.371-.291a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.245.198.372.292a.077.077 0 01-.006.127 12.298 12.298 0 01-1.873.891.076.076 0 00-.04.105c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028c1.95-.607 3.94-1.522 5.993-3.029a.077.077 0 00.03-.055c.5-5.177-.838-9.673-3.548-13.661a.061.061 0 00-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/></svg>
                  </span>
                </a>
              </motion.div>
              {/* Facebook icon with circle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={contactsInViewVal ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.45 }}
                whileHover={{ scale: 1.18, boxShadow: "0 4px 32px 0 rgba(80, 80, 255, 0.18)" }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300"
              >
                <a href="https://www.facebook.com/profile.php?id=61550738157956" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <span className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 shadow-lg hover:scale-105 transition-transform duration-200">
                    {/* Use a Facebook SVG icon inline for best compatibility */}
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                  </span>
                </a>
              </motion.div>
              {/* No extra circle rendered */}
            </div>
          </motion.div>
        )
      }

      default:
        return null
    }
  }

  return (
    <div className={`min-h-screen transition-all duration-1000 ${getBackgroundGradient()}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-10">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-5 py-2 text-lg font-semibold rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 relative ${activeSection === item.id ? "text-white bg-white/10" : ""}`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
      {/* Content */}
      <main className="pt-20 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-[calc(100vh-5rem)] flex flex-col justify-center"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="w-full bg-white/10 backdrop-blur-xl border-t border-white/20 py-4 text-center text-white/80 text-sm fixed bottom-0 left-0 right-0 z-40">
        © {new Date().getFullYear()} Raman Kumar. All rights reserved.
      </footer>
    </div>
  )
}
