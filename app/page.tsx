"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Music,
  Menu,
  X,
  ChevronRight,
  Zap,
  Code,
  Database,
  Award,
  Briefcase,
} from "lucide-react"
import Image from "next/image"

export default function FuturisticPortfolio() {
  const [currentPage, setCurrentPage] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: Zap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Database },
    { id: "awards", label: "Awards", icon: Award },
  ]

  const socialLinks = [
    { href: "https://github.com/stefensutandi", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/stefensutandi", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:stefen.sutandi@email.com", icon: Mail, label: "Email" },
    { href: "https://instagram.com/stefensutandi", icon: Instagram, label: "Instagram" },
    { href: "https://open.spotify.com/user/212e4a7q2qdqxe7cggrj4nebq", icon: Music, label: "Spotify" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(120,119,198,0.05)_60deg,transparent_120deg)]" />
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Mouse follower */}
      <motion.div
        className="fixed w-6 h-6 bg-cyan-400/20 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-slate-900/20 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Stefen Sutandi
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                      currentPage === item.id
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 shadow-lg shadow-cyan-500/25"
                        : "hover:bg-slate-800/50 hover:text-cyan-300"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </motion.button>
                )
              })}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-800/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/20"
            >
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id)
                        setMobileMenuOpen(false)
                      }}
                      className={`w-full px-4 py-3 rounded-lg flex items-center space-x-3 transition-all ${
                        currentPage === item.id
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400"
                          : "hover:bg-slate-800/50"
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-16 relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === "home" && <HomePage key="home" />}
          {currentPage === "experience" && <ExperiencePage key="experience" />}
          {currentPage === "skills" && <SkillsPage key="skills" />}
          {currentPage === "projects" && <ProjectsPage key="projects" />}
          {currentPage === "awards" && <AwardsPage key="awards" />}
        </AnimatePresence>
      </main>

      {/* Floating Social Bar */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center space-x-4 bg-slate-900/80 backdrop-blur-xl rounded-full px-6 py-3 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-cyan-500/20 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative mb-8 flex justify-center md:justify-start">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-xl opacity-30"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                    <Image
                      src="/profile-photo.png"
                      alt="Stefen Sutandi"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stefen
              </span>
              <br />
              <span className="text-white">Sutandi</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-cyan-300 mb-6 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Final Year EE @ ITB | System Engineer @ Oppstar | Data Scientist @ Telkomsel
            </motion.div>

            <motion.p
              className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Highly motivated and results-oriented Electrical Engineering student passionate about IoT, Data Analysis,
              Product Management, and Business Development. Proven ability to lead teams, manage projects, and develop
              innovative solutions.
            </motion.p>

            {/* Company Logos */}
            <motion.div
              className="flex justify-center md:justify-start space-x-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {["/itb_logo.png", "/telkomsel_logo.png", "/oppstar_logo.png"].map((logo, index) => (
                <motion.div
                  key={index}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-cyan-500/20"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt="Company logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { number: "3+", label: "Years Experience" },
              { number: "10+", label: "Projects Completed" },
              { number: "2026", label: "Expected Graduation" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function ExperiencePage() {
  const experiences = [
    {
      title: "System Engineer",
      company: "Oppstar Berhad (Penang, Malaysia)",
      period: "Jul 2025 – Present",
      type: "Part-time",
      color: "from-blue-500 to-cyan-500",
      description: [
        "Prototyping embedded systems for smart city infrastructure.",
        "Using Python, C++, and hardware interfacing.",
        "Collaborating in a hybrid, international engineering team.",
      ],
    },
    {
      title: "Data Scientist",
      company: "Telkomsel",
      period: "Jun 2025 – Present",
      type: "Internship",
      color: "from-pink-500 to-purple-500",
      description: [
        "Drove optimization by identifying top 10% problem network cells.",
        "Engineered model pinpointing 50,000+ underperforming cells.",
        "Proved over 50% of network issues were capacity-related.",
        "Redirected engineering focus to the top 50% issues (Elevating City Experience/KQI).",
      ],
    },
    {
      title: "Head of Problem-Solving with Programming",
      company: "STEI ITB",
      period: "Feb 2025 – Jun 2025",
      type: "Contract",
      color: "from-yellow-500 to-orange-500",
      description: [
        "Supervised a team of 15 laboratory assistants, preparing ToRs, recruitment, training, and managing day-to-day operations.",
        "Guided 120+ students in programming, data manipulation, and algorithm fundamentals.",
        "Coordinated with staff, technicians, assistants, and students for smooth lab operations.",
      ],
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </span>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-300`}
              />
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className={`text-lg bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-semibold`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm">{exp.period}</p>
                    <p className="text-cyan-400 text-sm font-medium">{exp.type}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-slate-300">
                      <ChevronRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function SkillsPage() {
  const skillCategories = [
    {
      title: "Embedded & Digital Systems",
      color: "from-blue-500 to-cyan-500",
      skills: ["C/C++", "Python", "VHDL/Verilog", "Quartus", "KiCad"],
      level: "Advanced",
    },
    {
      title: "Data Science & Analytics",
      color: "from-purple-500 to-pink-500",
      skills: ["Python", "Pandas", "SQL", "MATLAB", "Simulink"],
      level: "Advanced",
    },
    {
      title: "Project & Product",
      color: "from-green-500 to-teal-500",
      skills: ["Project Management", "Product Management", "Business Development", "Team Leadership"],
      level: "Advanced",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-all duration-300`}
              />
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 h-full">
                <h3
                  className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 border border-slate-600/50"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
                <div className="text-cyan-400 font-medium">Level: {category.level}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectsPage() {
  const projects = [
    {
      title: "PID Controller Optimization for Maglev",
      description:
        "Optimizing PID for magnetic levitation system using MATLAB & Simulink. Reduced overshoot from 62% → 6.3%.",
      skills: ["MATLAB", "Simulink", "Control System", "Pandas"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Hybrid Power Grid Stability",
      description:
        "Simulated grid faults, recovery, and optimal planning in hybrid renewable system. MATLAB/SCADA/Simulink.",
      skills: ["MATLAB", "Simulink", "SCADA"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Intelligent Composting System (IoT)",
      description: "Embedded ESP32, fuzzy control, automation for organic waste. 2nd place, TUSUR Winter School.",
      skills: ["ESP32", "Kotlin", "IoT", "Automation"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Synthesizable MIPS32 Microprocessor",
      description: "Full MIPS32 CPU in VHDL, simulation & testbench, hardware design & verification.",
      skills: ["VHDL", "Quartus", "Digital Design"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "DC-DC Converter: Boost Converter",
      description: "Step-up converter, oscilloscope test, power electronics & system optimization.",
      skills: ["Electronics", "Oscilloscope", "Power Electronics"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "PPG Signal Filter",
      description:
        "PPG heart rate monitor, DSP, digital filters, artifact/noise reduction for accurate biomedical readings.",
      skills: ["DSP", "Filter Design", "Electronics"],
      color: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-all duration-300`}
              />
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 h-full flex flex-col">
                <h3
                  className={`text-xl font-bold mb-4 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                >
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-700/50 rounded-md text-xs text-slate-300 border border-slate-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <motion.div className="mt-4 flex items-center text-cyan-400 text-sm font-medium" whileHover={{ x: 5 }}>
                  View Details <ChevronRight size={16} className="ml-1" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function AwardsPage() {
  const awards = [
    {
      title: "Most Unique & Authentic Business Model",
      organization: "EL4062: Engineering Innovation and Entrepreneurship – STEI ITB",
      date: "Jun 2025",
      description: "Recognized for innovative business modeling in final startup course.",
      icon: "🏆",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "2nd Place Best Report of Final Project",
      organization: "TUSUR University Winter School",
      date: "Apr 2025",
      description: "Awarded for engineering research & smart compost IoT solution.",
      icon: "🥈",
      color: "from-slate-400 to-slate-600",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Awards & Certifications
          </span>
        </motion.h2>

        <div className="space-y-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${award.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-300`}
              />
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="text-5xl">{award.icon}</div>
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold mb-2 bg-gradient-to-r ${award.color} bg-clip-text text-transparent`}
                    >
                      {award.title}
                    </h3>
                    <p className="text-lg text-slate-300 mb-2">{award.organization}</p>
                    <p className="text-cyan-400 text-sm font-medium mb-3">{award.date}</p>
                    <p className="text-slate-400">{award.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
