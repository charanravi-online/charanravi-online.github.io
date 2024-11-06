"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Space_Grotesk } from "@next/font/google";
import Image from "next/image";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"], // Increased font weights
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
    description: "I'm a developer who loves creating meaningful digital experiences. I'm a sucker for tech, minimalism, and the intersection of both.",
    skills: [""]
  },
  recruiters: {
    title: "Recruiters",
    description: "I'm a software dev with 3+ years of experience building software solutions. My expertise includes Python, JavaScript etc.",
    skills: [<a href="/RCharan-Resume.pdf" download>Download Resume</a>]
  },
  engineers: {
    title: "Engineers",
    description: "I'm passionate about technology, innovation and open source. Check out my technical deep-dives and coding projects.",
    skills: [<a href="/RCharan-Resume.pdf" download>Download Resume</a>]
  },
  'product-managers': {
    title: "Product Managers",
    description: "I bring technical expertise to product development, helping bridge the gap between business goals and technical implementation.",
    skills: [<a href="/RCharan-Resume.pdf" download>Download Resume</a>]
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
    <div className={`${spaceGrotesk.className} bg-black text-[#fefeff]`}>
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
              <div className="relative text-3xl font-medium flex">
                <span>C</span>
                <AnimatePresence>
                  {isNameExpanded && (
                    <div className="flex">
                      {remainingLetters.map((letter, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 5 }}
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
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <button 
              className="fixed top-8 right-4 z-50 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-2">
                <span className={`block w-8 h-0.5 bg-[#fefeff] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-[#fefeff] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-[#fefeff] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
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
                        <span className={`${activeSection === id ? 'text-[#fefeff]' : 'text-[#969696]'}`}>
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
                <div className="text-sm text-[#969696]">
                  Bangalore, India — {currentTime} IST
                </div>
              </div>
              <div className="relative md:static flex gap-4 md:gap-8 justify-start md:justify-center text-sm mb-8 overflow-x-auto scrollbar-hide px-4">
                {(['anyone', 'recruiters', 'engineers', 'product-managers'] as AudienceType[]).map((audience) => (
                  <button
                    key={audience}
                    onClick={() => setSelectedAudience(audience)}
                    className={`transition-colors whitespace-nowrap ${
                      selectedAudience === audience 
                        ? 'text-[#fefeff] font-medium' 
                        : 'text-[#969696] hover:text-[#fefeff]'
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
                      activeSection === id ? 'text-[#fefeff]' : 'text-[#969696]'
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
                      <p className="text-3xl md:text-6xl text-[#fefeff] leading-tight mb-12 max-w-3xl mx-auto">
                        {audienceContent[selectedAudience].description}
                      </p>
                      <div className="flex gap-4 flex-wrap justify-center">
                        {audienceContent[selectedAudience].skills.map((skill, index) => (
                          <span key={index} className="text-sm text-[#969696]">
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
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 md:col-start-2">
                      <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl">Selected Work</h2>
                      <div className="grid gap-8 md:gap-16 max-w-2xl">
                        {workProjects.map((project, index) => (
                          <motion.div
                            key={index}
                            className="group"
                            whileHover={{ y: -10 }}
                          >
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block p-4 md:p-8 border border-[#969696] rounded-lg hover:border-[#969696] transition-colors">
                              <h3 className="text-xl md:text-2xl font-medium mb-4">{project.title}</h3>
                              <p className="text-sm text-[#fefeff] mb-6">{project.description}</p>
                              <div className="flex flex-wrap gap-4">
                                {project.tags.map((tag, tagIndex) => (
                                  <span key={tagIndex} className="text-sm text-[#969696]">{tag}</span>
                                ))}
                              </div>
                            </a>
                          </motion.div>
                        ))}
                      </div>
                    </div>
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
                  className="max-w-5xl"
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 md:col-start-2">
                      <div className="relative w-48 h-48 flex-shrink-0 mb-8">
                        <Image
                          src="/LGE_Logo_Mono_White_RGB.png"
                          alt="LG Electronics Logo"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <div className="space-y-4 max-w-2xl">
                        <h3 className="text-xl font-medium text-[#fefeff]">Software Development Engineer in Test</h3>
                        <p className="text-sm text-[#fefeff]">
                          I led a team to build an automation framework to test the LG AI Models, 
                          worked on the Open Source Edition of webOS (webOS OSE), and I am currently working 
                          on firmware updates under the Home Applicances & Air Solution dept.
                        </p>
                        <p className="text-sm text-[#fefeff]">
                          Key achievements include implementing responsive designs, optimizing performance, and collaborating with cross-functional teams 
                          to deliver high-quality software solutions.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <span className="text-sm text-[#969696]">Python</span>
                          <span className="text-sm text-[#969696]">JavaScript</span>
                          <span className="text-sm text-[#969696]">Electron</span>
                          <span className="text-sm text-[#969696]">Appium</span>
                          <span className="text-sm text-[#969696]">Selenium</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>
              <br />
              <br />
              <br />
              <br />

              {/* About Section */}
              <section id="about" className="min-h-screen px-4 md:px-24 py-16 md:py-32 md:ml-16">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="max-w-5xl"
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 md:col-start-2">
                      <div className="space-y-8">
                        <p className="text-sm text-[#fefeff]">
                          I'm a Software Developer with 3 years of experience, currently based
                          in India. I focus on creating minimal and effective solutions, while
                          also mentoring others and composing music.
                        </p>
                      </div>
                    </div>
                    
                    <div className="md:col-span-1 md:col-start-3 md:mt-32">
                      <div className="space-y-8">
                        <p className="text-sm text-[#fefeff]">
                          My approach combines technical expertise with creative problem-solving,
                          always striving to build solutions that are both elegant and practical.
                        </p>
                      </div>
                    </div>
                  </div>

                  <br />
                  <br />
                  <br />
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 md:col-start-2">
                      <div className="space-y-8">
                        <p className="text-sm text-[#fefeff]">
                          I'm a Software Developer with 3 years of experience, currently based
                          in India. I focus on creating minimal and effective solutions, while
                          also mentoring others and composing music.
                        </p>
                      </div>
                    </div>
                    
                    <div className="md:col-span-1 md:col-start-3 md:mt-32">
                      <div className="space-y-8">
                        <p className="text-sm text-[#fefeff]">
                          My approach combines technical expertise with creative problem-solving,
                          always striving to build solutions that are both elegant and practical.
                        </p>
                      </div>
                    </div>
                  </div>
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
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 md:col-start-2">
                      <div className="space-y-8 max-w-2xl">
                        <Image
                          src="/charan-ravi.jpg"
                          alt="Charan Ravi"
                          width={500}
                          height={300}
                          className="mb-8"
                        />
                        <p className="text-xl md:text-xl text-[#fefeff] underline">charanravi.online@gmail.com</p>
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <div className="w-2 h-2 bg-[#fefeff] rounded-full animate-pulse"></div>
                            <div className="absolute top-0 left-0 w-2 h-2 bg-[#fefeff] rounded-full animate-[ping_1.5s_ease-in-out_infinite] opacity-90"></div>
                          </div>
                          <p className="text-l text-[#969696]">Looking for new opportunities.</p>
                        </div>
                        <div className="flex gap-8 pt-8">
                          <a
                            href="https://www.linkedin.com/in/r-charan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm"
                          >
                            LinkedIn
                          </a>
                          <a
                            href="https://github.com/charanravi-online"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm"
                          >
                            GitHub
                          </a>
                          <a
                            href="https://x.com/charanjson"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm"
                          >
                            X [Twitter]
                          </a>
                          <a
                            href="https://instagram.com/charan.json"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm"
                          >
                            Instagram
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>
            </main>

            {/* Footer */}
            <footer className="px-4 md:px-24 py-8 text-[#969696] md:ml-16">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-sm text-center md:text-left">© 2024 Charan Ravi. All rights reserved.</span>
                <div className="flex gap-4 md:gap-8">
                <span className="text-sm text-center md:text-left">Design & Code by - Charan Ravi</span>
                  {/* <a className="text-sm text-[#969696] hover:text-[#fefeff] transition-colors">made with ❤️ by charan</a> */}
                  {/* <a href="#" className="text-sm text-[#969696] hover:text-[#fefeff] transition-colors">Terms of Service</a> */}
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
