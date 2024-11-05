"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Space_Grotesk } from "@next/font/google";
import Image from "next/image";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const sections = [
  { id: "intro", title: "Intro" },
  { id: "work", title: "Work" },
  { id: "background", title: "Background" },
  { id: "about", title: "About" },
  { id: "contact", title: "Contact" }
];

const workProjects = [
  {
    title: "Wiki",
    description: "A command-line tool to get Wikipedia summaries in your terminal",
    tags: ["Python", "Snapcraft", "WinGet"],
    link: "https://snapcraft.io/wiki"
  },
  {
    title: "BTC Converter", 
    description: "A simple tool to convert Bitcoin to Sats",
    tags: ["Python", "JavaScript", "HTML", "CSS"],
    link: "https://rates.bitcoin.org.hk/"
  }
];

type AudienceType = 'anyone' | 'recruiters' | 'engineers' | 'product-managers';

const audienceContent = {
  anyone: {
    title: "For Anyone",
    description: "I'm a developer who loves creating meaningful digital experiences. I write about technology, design, and the intersection of both.",
    skills: ["Creative Coding", "Digital Design", "Technical Writing"]
  },
  recruiters: {
    title: "Recruiters",
    description: "I'm a software engineer with 3+ years of experience building scalable web applications. My expertise includes React, Node.js, and cloud technologies.",
    skills: ["Frontend Development", "Backend Architecture", "Cloud Computing"]
  },
  engineers: {
    title: "Engineers",
    description: "I'm passionate about clean code, system design, and open source. Check out my technical deep-dives and coding projects.",
    skills: ["System Design", "Code Architecture", "Open Source"]
  },
  'product-managers': {
    title: "Product Managers",
    description: "I bring technical expertise to product development, helping bridge the gap between business goals and technical implementation.",
    skills: ["Technical Strategy", "Product Development", "Cross-functional Collaboration"]
  }
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("intro");
  const [currentTime, setCurrentTime] = useState("");
  const [selectedAudience, setSelectedAudience] = useState<AudienceType>("anyone");
  const [isNameExpanded, setIsNameExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric'
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  const remainingLetters = "haran Ravi".split("");

  return (
    <div className={`${spaceGrotesk.className} bg-black text-white`}>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="h-screen w-screen flex items-center justify-center bg-black"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.h1 
                className="text-[12vw] md:text-[8vw] font-medium leading-none"
                animate={{
                  opacity: [1, 0],
                  y: [0, -20],
                  transition: { duration: 0.5, delay: 1.5 }
                }}
              >
                Charan Ravi
              </motion.h1>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Logo */}
            <motion.div 
              className="fixed top-8 left-4 md:left-8 z-50 cursor-pointer"
              onHoverStart={() => setIsNameExpanded(true)}
              onHoverEnd={() => setIsNameExpanded(false)}
              onClick={handleLogoClick}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative text-xl font-medium flex">
                <span>C</span>
                {isNameExpanded && (
                  <div className="flex">
                    {remainingLetters.map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.1,
                          delay: index * 0.02,
                          ease: "easeOut"
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <button 
              className="fixed top-8 right-4 z-50 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-2">
                <span className={`block w-8 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  className="fixed inset-0 bg-black z-40 md:hidden pt-24 px-8"
                >
                  {sections.map(({ id, title }) => (
                    <div key={id} className="mb-6">
                      <button
                        onClick={() => scrollToSection(id)}
                        className="text-2xl font-medium"
                      >
                        <span className={`${activeSection === id ? 'text-white' : 'text-gray-500'}`}>
                          {title}
                        </span>
                      </button>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Header */}
            <header className="p-4 md:p-8 pt-24 md:pt-8">
              <div className="hidden md:flex justify-end mb-6">
                <div className="text-sm text-gray-400">
                  Bangalore, India — {currentTime} IST
                </div>
              </div>
              <div className="relative md:static flex gap-4 md:gap-8 justify-start md:justify-center text-sm mb-8 overflow-x-auto px-4 before:hidden md:before:block before:absolute before:right-0 before:top-0 before:bottom-0 before:w-12 before:bg-gradient-to-l before:from-black before:to-transparent before:z-10">
                {(['anyone', 'recruiters', 'engineers', 'product-managers'] as AudienceType[]).map((audience) => (
                  <button
                    key={audience}
                    onClick={() => setSelectedAudience(audience)}
                    className={`transition-colors whitespace-nowrap ${
                      selectedAudience === audience 
                        ? 'text-[#ffffff] font-medium' 
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {audienceContent[audience].title}
                  </button>
                ))}
              </div>
            </header>

            {/* Desktop Navigation */}
            <nav className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
              {sections.map(({ id, title }) => (
                <div key={id} className="mb-4 text-left">
                  <button
                    onClick={() => scrollToSection(id)}
                    className="group flex items-center gap-2 text-sm"
                  >
                    <span className={`transition-all duration-300 ${
                      activeSection === id ? 'text-white' : 'text-gray-500'
                    }`}>
                      {title}
                    </span>
                  </button>
                </div>
              ))}
            </nav>

            {/* Main Content */}
            <main>
              <section id="intro" className="min-h-screen flex items-center justify-center px-4 md:px-24 -mt-16">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center max-w-7xl mx-auto"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedAudience}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-3xl md:text-6xl text-white leading-tight mb-12">
                        {audienceContent[selectedAudience].description}
                      </p>
                      <div className="flex gap-4 flex-wrap justify-center">
                        {audienceContent[selectedAudience].skills.map((skill, index) => (
                          <span key={index} className="text-sm text-gray-400">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </section>

              {/* Work Section */}
              <section id="work" className="min-h-screen px-4 md:px-24 py-16 md:py-32 md:ml-16">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="max-w-5xl"
                >
                  <h2 className="text-4xl md:text-7xl font-medium mb-8">Selected Work</h2>
                  <div className="grid gap-8 md:gap-16">
                    {workProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        className="group"
                        whileHover={{ y: -10 }}
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block p-4 md:p-8 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors">
                          <h3 className="text-xl md:text-2xl font-medium mb-4">{project.title}</h3>
                          <p className="text-gray-400 mb-6">{project.description}</p>
                          <div className="flex flex-wrap gap-4">
                            {project.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="text-sm text-gray-500">{tag}</span>
                            ))}
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Background Section */}
              <section id="background" className="min-h-screen px-4 md:px-24 py-16 md:py-32 md:ml-16">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="max-w-5xl space-y-12"
                >
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="relative w-48 h-48 flex-shrink-0">
                      <Image
                        src="/LGE_Logo_Mono_White_RGB.png"
                        alt="LG Electronics Logo"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-medium">Software Engineer</h3>
                      <p className="text-gray-400">
                        At LG Electronics, I work on developing and maintaining web applications for internal tools and customer-facing platforms. 
                        I specialize in frontend development using React and Next.js, while also contributing to backend services using Node.js.
                      </p>
                      <p className="text-gray-400">
                        Key achievements include implementing responsive designs, optimizing performance, and collaborating with cross-functional teams 
                        to deliver high-quality software solutions.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="text-sm text-gray-500">React</span>
                        <span className="text-sm text-gray-500">Next.js</span>
                        <span className="text-sm text-gray-500">Node.js</span>
                        <span className="text-sm text-gray-500">TypeScript</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* About Section */}
              <section id="about" className="min-h-screen px-4 md:px-24 py-16 md:py-32 md:ml-16">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="max-w-5xl"
                >
                  <h2 className="text-4xl md:text-7xl font-medium mb-8">About</h2>
                  {/* Add your about content here */}
                </motion.div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="min-h-screen px-4 md:px-24 py-16 md:py-32 md:ml-16">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="max-w-5xl"
                >
                  <h2 className="text-4xl md:text-7xl font-medium mb-8">Contact</h2>
                  {/* Add your contact content here */}
                </motion.div>
              </section>
            </main>

            {/* Footer */}
            <footer className="px-4 md:px-24 py-8 text-gray-400 md:ml-16">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-center md:text-left">© 2024 Charan Ravi. All rights reserved.</span>
                <div className="flex gap-4 md:gap-8">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
