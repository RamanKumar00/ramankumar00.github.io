"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, Mail, Linkedin, Instagram, Clock, User, GraduationCap, BookOpen, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

// --- Configuration & Data ---

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "works", label: "My works" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contacts", label: "Contacts" },
]

const projects = [
  
  {
    title: "Coming Soon",
    tags: ["in progress"],
    links: { github: null, demo: null }
  }
]

type Skill = {
  name: string
  color: string
  logo?: string
  icon?: string
}

const skills: Skill[] = [
  { name: "C", color: "bg-blue-500", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", color: "bg-blue-600", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "HTML", color: "bg-orange-500", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", color: "bg-blue-600", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", color: "bg-yellow-400", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "SQL", color: "bg-indigo-600", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "DBMS", color: "bg-purple-600", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Flutter", color: "bg-sky-400", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", color: "bg-cyan-500", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Python", color: "bg-blue-500", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node.js", color: "bg-green-600", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", color: "bg-red-600", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", color: "bg-gray-800", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
]

const educationData = [
  {
    institution: "University Institute of Engineering and Technology, Panjab University",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering",
    period: "2023 – 2027",
    image: "/assets/UIET_logo.png"
  },
  {
    institution: "Maharishi Arvind Public School, Rajasthan",
    degree: "Intermediate",
    field: "Physics, Chemistry, Mathematics (PCM)",
    period: "2019 – 2023",
    image: "/assets/maharishi arvind logo.jpg"
  },
]

const experienceData = [
  {
    company: "Scorptech Pvt Ltd",
    companyUrl: "https://www.scorptech.co/",
    position: "Python Intern",
    period: "June 2025 – August 2025",
    location: "Remote",
    description: [
      "Contributing to web scraping, automation, and data processing projects using Python.",
      "Developing reliable scraping scripts with BeautifulSoup and pandas.",
    ],
    technologies: ["Python", "BeautifulSoup4", "pandas", "Web Scraping"],
    image: "/assets/scorp_logo.png"
  }
]

const certificates = [
  {
    name: "C Programming",
    image: "/assets/c.png",
    link: "https://olympus.mygreatlearning.com/courses/54666/certificate?pb_id=581"
  },
  {
    name: "Excel (Coursera)",
    image: "/assets/excel.png",
    link: "https://www.coursera.org/account/accomplishments/verify/ZYPEQLLH9V6X"
  }
]

// --- Custom Hooks ---

function useTypingEffect(words: string[]) {
  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const speed = isDeleting ? 100 : 150
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1))
        if (displayText === currentWord) setTimeout(() => setIsDeleting(true), 2000)
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1))
        if (displayText === "") {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex, words])

  return displayText
}

// --- Components ---

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [modal, setModal] = useState({ open: false, image: "", link: "" })
  const currentText = useTypingEffect(["code", "eat", "sleep", "repeat"])
  const sectionOrder = navigationItems.map((n) => n.id)
  const scrollLockRef = useRef(false)

  const getGradient = () => {
    const map: Record<string, string> = {
      home: "from-purple-600 via-purple-700 to-purple-800",
      works: "from-[#0D1117] via-[#0D1117] to-[#161B22]",
      education: "from-pink-500 via-purple-600 to-purple-700",
      skills: "from-orange-400 via-red-500 to-pink-500",
      experience: "from-blue-500 via-indigo-600 to-purple-700",
      contacts: "from-yellow-400 via-orange-500 to-red-500",
    }
    return map[activeSection] || map.home
  }

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (scrollLockRef.current) return
      const threshold = 30
      const direction = event.deltaY
      if (Math.abs(direction) < threshold) return

      const currentIndex = sectionOrder.indexOf(activeSection)
      if (direction > 0 && currentIndex < sectionOrder.length - 1) {
        setActiveSection(sectionOrder[currentIndex + 1])
      } else if (direction < 0 && currentIndex > 0) {
        setActiveSection(sectionOrder[currentIndex - 1])
      } else {
        return
      }

      scrollLockRef.current = true
      setTimeout(() => {
        scrollLockRef.current = false
      }, 650)
    }

    window.addEventListener("wheel", handleWheel, { passive: true })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [activeSection, sectionOrder])

  return (
    <div className={`min-h-screen transition-all duration-1000 bg-gradient-to-br ${getGradient()}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center gap-3 md:gap-10 overflow-x-auto">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-4 py-2 text-sm md:text-lg font-semibold rounded-lg text-white transition-all ${
                activeSection === item.id ? "bg-white/20 shadow-inner" : "opacity-70 hover:opacity-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-20 px-4 min-h-screen max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {/* HOME */}
          {activeSection === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24">
                <div className="text-center lg:text-left mb-10">
                  <h1 className="text-6xl lg:text-8xl font-extrabold text-white mb-6 font-mono">
                    {currentText}<span className="animate-pulse">_</span>
                  </h1>
                  <p className="text-2xl lg:text-3xl text-white/80">Engineer • Developer • Learner</p>
                </div>
                <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                  <Image
                    src="/assets/raman.jpg"
                    alt="Raman Kumar portrait"
                    fill
                    sizes="(max-width: 1024px) 60vw, 24rem"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* WORKS */}
          {activeSection === "works" && (
            <motion.div
              key="works"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 15, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    <Card className="bg-[#161B22]/90 backdrop-blur-[10px] text-white border border-white/10 shadow-xl shadow-black/40 hover:border-[#58A6FF]/30 transition-colors">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-white">{p.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {p.tags.map(t => <span key={t} className="px-2 py-1 bg-white/5 rounded-md text-xs text-white/80 border border-white/5">{t}</span>)}
                        </div>
                        <div className="flex gap-2">
                          {p.links.github && (
                            <Button 
                              variant="ghost" 
                              className="text-[#58A6FF] hover:bg-[#58A6FF]/10 hover:text-[#79C0FF] border border-transparent hover:border-[#58A6FF]/20 transition-all" 
                              asChild
                            >
                              <a href={p.links.github} target="_blank"><Github size={18} /></a>
                            </Button>
                          )}
                          {p.links.demo && (
                            <Button 
                              variant="ghost" 
                              className="text-[#58A6FF] hover:bg-[#58A6FF]/10 hover:text-[#79C0FF] border border-transparent hover:border-[#58A6FF]/20 transition-all" 
                              asChild
                            >
                              <a href={p.links.demo} target="_blank"><ExternalLink size={18} /></a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* EDUCATION */}
          {activeSection === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {educationData.map((edu) => (
                    <motion.div
                      key={edu.institution}
                      initial={{ opacity: 0, y: 20, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      whileHover={{ y: -6, scale: 1.02 }}
                    >
                      <Card className="bg-white/20 backdrop-blur-lg text-white overflow-hidden border border-white/10 shadow-lg shadow-black/20">
                        <div className="flex flex-col md:flex-row">
                          <div className="relative w-full md:w-1/3 aspect-video overflow-hidden p-3">
                            <Image
                              src={edu.image}
                              alt={edu.institution}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <CardContent className="p-6 md:w-2/3">
                            <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                            <p className="flex items-center gap-2 mb-1"><GraduationCap size={16}/> {edu.degree}</p>
                            <p className="flex items-center gap-2 mb-1"><BookOpen size={16}/> {edu.field}</p>
                            <p className="flex items-center gap-2 text-white/70"><Calendar size={16}/> {edu.period}</p>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
                  {certificates.map((cert) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 15, scale: 0.97 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      whileHover={{ y: -8, scale: 1.03 }}
                      className="min-w-[280px]"
                    >
                      <div className="bg-white/20 rounded-xl p-4 border border-white/30 text-center">
                        <div className="relative h-40 mb-4 bg-white rounded-lg">
                          <Image
                            src={cert.image}
                            alt={cert.name}
                            fill
                            sizes="(max-width: 768px) 60vw, 280px"
                            className="object-contain p-2"
                          />
                        </div>
                        <h4 className="font-bold text-white mb-2">{cert.name}</h4>
                        <Button onClick={() => setModal({ open: true, image: cert.image, link: cert.link })} size="sm" className="bg-white/20 hover:bg-white/40 text-white">View</Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* EXPERIENCE */}
          {activeSection === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="max-w-5xl mx-auto space-y-8">
                {experienceData.map((exp) => (
                  <motion.div
                    key={exp.company}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="flex flex-col md:flex-row items-stretch bg-white/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg shadow-black/20 overflow-hidden"
                  >
                    <motion.div
                      className="relative p-10 flex items-center justify-center md:w-64 lg:w-72 bg-gradient-to-br from-purple-900/80 via-indigo-800/80 to-blue-900/80"
                      animate={{ y: [0, -4, 0], rotate: [0, 2, -2, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.05, rotate: 0 }}
                    >
                      <div className="absolute inset-6 rounded-3xl bg-white/10 blur-3xl" />
                      <div className="relative w-40 h-40 rounded-3xl bg-black/10 flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                        <Image src={exp.image} alt={exp.company} width={130} height={130} className="rounded-2xl shadow-xl" />
                      </div>
                    </motion.div>
                    <div className="p-8 flex-1 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                      <a href={exp.companyUrl} target="_blank" className="text-blue-300 hover:underline text-lg">{exp.company}</a>
                      <div className="flex gap-4 text-white/70 my-3 text-sm">
                        <span className="flex items-center gap-1"><Clock size={14}/> {exp.period}</span>
                        <span>{exp.location}</span>
                      </div>
                      <ul className="list-disc list-inside text-white/90 space-y-2 mb-4">
                        {exp.description.map((d, i) => <li key={i}>{d}</li>)}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(t => <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">{t}</span>)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* SKILLS */}
          {activeSection === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8" style={{ perspective: "1000px" }}>
                {skills.map((s) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 15, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    whileHover={{
                      rotateX: -20,
                      y: -10,
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                    style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
                  >
                    <Card className="bg-white/20 border-white/30 text-white text-center overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow">
                      <div className={`${s.color} h-28 flex items-center justify-center px-4 py-3`}>
                        {s.logo ? (
                          <Image src={s.logo} alt={s.name} width={64} height={64} className="object-contain w-16 h-16" />
                        ) : (
                          <span className="text-3xl font-bold">{s.icon}</span>
                        )}
                      </div>
                      <div className="py-3 px-2 font-semibold text-sm md:text-base">{s.name}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CONTACTS */}
          {activeSection === "contacts" && (
            <motion.div
              key="contacts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">RAMAN KUMAR</h1>
                <p className="text-xl text-white/80 mb-12">Let's build something amazing together.</p>
                <div className="flex flex-wrap justify-center gap-6">
                  <ContactCircle icon={Mail} href="mailto:ramankr7321@gmail.com" bg="from-blue-500 to-indigo-600" hoverBg="#EA4335" />
                  <ContactCircle icon={Linkedin} href="https://linkedin.com/in/raman-kumar-b80913282/" bg="from-blue-600 to-blue-400" hoverBg="#0A66C2" />
                  <ContactCircle icon={Github} href="https://github.com/RamanKumar00" bg="from-gray-800 to-gray-600" hoverBg="#171515" />
                  <ContactCircle icon={Instagram} href="https://instagram.com/__.ramankumar__/" bg="from-pink-500 to-purple-600" hoverBg="#E4405F" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Modal for Certificates */}
      {modal.open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4" onClick={() => setModal({ ...modal, open: false })}>
          <div className="bg-white rounded-xl p-4 max-w-2xl w-full" onClick={e => e.stopPropagation()}>
            <Image src={modal.image} alt="Certificate" width={800} height={600} className="w-full h-auto rounded" />
            <div className="mt-4 flex justify-between items-center">
              <a href={modal.link} target="_blank" className="text-blue-600 font-bold underline">Verify Credentials</a>
              <Button onClick={() => setModal({ ...modal, open: false })}>Close</Button>
            </div>
          </div>
        </div>
      )}

      <footer className="fixed bottom-0 left-0 right-0 py-4 bg-black/20 backdrop-blur-md text-center text-white/60 text-xs">
        © {new Date().getFullYear()} Raman Kumar. Built with Next.js & Framer Motion.
      </footer>
    </div>
  )
}

function ContactCircle({ icon: Icon, href, bg, hoverBg }: { icon: any, href: string, bg: string, hoverBg?: string }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      whileHover={{ scale: 1.12, y: -6 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`group w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${bg} text-white shadow-xl transition-colors duration-200 hover:shadow-2xl hover:shadow-black/30 hover:bg-[var(--hover-bg,inherit)]`}
      style={{ ["--hover-bg" as any]: hoverBg || "transparent" }}
    >
      <Icon size={30} className="transition-transform duration-200 group-hover:scale-110" />
    </motion.a>
  )
}