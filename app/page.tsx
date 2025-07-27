"use client";
  import { useEffect, useState, useRef } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { Space_Grotesk } from "next/font/google";
  import Image from "next/image";
  import { FaBitcoin, FaWindows } from "react-icons/fa";
  import { FcLinux } from "react-icons/fc";
  import { TbWorld } from "react-icons/tb";
  import { FaXTwitter } from "react-icons/fa6";
  import Script from "next/script";

  const spaceGrotesk = Space_Grotesk({
    weight: ["400", "500", "600", "700"],
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
      description: "A command-line tool to get Wikipedia summaries in your terminal - Powered By Gemini AI",
      tags: ["Python", "Snapcraft", "WinGet", "Gemini AI"],
      link: "https://charanravi-online.github.io/wiki-project",
      platforms: [
        { icon: FaWindows, color: "#00A4EF" },
        { icon: FcLinux }
      ]
    },
    {
      title: "BTC Converter", 
      description: "A Basic Bitcoin to Fiat converter with price feeds from Coindesk",
      tags: ["Python", "JavaScript", "HTML", "CSS"],
      link: "https://github.com/bitkarrot/satsconverter",
      platforms: [
        { icon: TbWorld, color: "#4285F4" },
        // { icon: FaBitcoin, color: "#F7931A" }
      ]
    },
    // {
    //   title: "BotPool", 
    //   description: "An X (Twitter) bot that responds to mentions with witty Deadpool-style quips and one-liners",
    //   tags: ["Python", "X", "Twitter API"],
    //   link: "https://github.com/charanravi-online/BotPool",
    //   platforms: [
    //     { icon: FaXTwitter, color: "#fefeff" }
    //   ]
    // }
  ];

  type AudienceType = 'anyone' | 'recruiters' | 'engineers' | 'product-managers';

  const audienceContent = {
    anyone: {
      title: "For Anyone",
      description: "I'm a developer who loves creating meaningful digital experiences, with a focus on tech, minimalism, and where they intersect.",
      skills: [""]
    },
    recruiters: {
      title: "Recruiters",
      description: (
        <>
          Software developer with over 4 years of experience building software solutions. My expertise includes{" "}
          <span className="hover:text-[#3776AB] transition-colors cursor-default">Python</span>
          {", "}
          <span className="hover:text-[#F7DF1E] transition-colors cursor-default">JavaScript</span>
          {" "}etc.
        </>
      ),
      skills: [<a href="https://drive.google.com/file/d/1Xu9YMnGVI0UzZkG-t2Eie5ZeZD6cnjxe/view?usp=sharing" download className="hover:text-[#fefeff] transition-colors">Download Resume</a>]
    },
    engineers: {
      title: "Engineers",
      description: (
        <>
          Driven by technology, innovation, and open source. Explore my technical deep dives and projects over at my{" "}
          <a 
            href="https://github.com/charanravi-online" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-colors hover:text-sky-500"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            GitHub &#x2197;
          </a>
        </>
      ),
      skills: [<a href="https://drive.google.com/file/d/1Xu9YMnGVI0UzZkG-t2Eie5ZeZD6cnjxe/view?usp=sharing" download className="hover:text-[#fefeff] transition-colors">Download Resume</a>]
    },
    'product-managers': {
      title: "Product Managers",
      description: "I bring technical expertise to product development, bridging the gap between business objectives and technical execution.",
      skills: [<a href="https://drive.google.com/file/d/1Xu9YMnGVI0UzZkG-t2Eie5ZeZD6cnjxe/view?usp=sharing" download className="hover:text-[#fefeff] transition-colors">Download Resume</a>]
    }
  };

  export default function Home() {
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState("intro");
    const [selectedAudience, setSelectedAudience] = useState<AudienceType>("anyone");
    const [isNameExpanded, setIsNameExpanded] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
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

    const handleHorizontalScroll = () => {
      if (scrollContainerRef.current) {
        setScrollPosition(scrollContainerRef.current.scrollLeft);
      }
    };

    useEffect(() => {
      const container = scrollContainerRef.current;
      if (container) {
        container.addEventListener('scroll', handleHorizontalScroll);
        return () => container.removeEventListener('scroll', handleHorizontalScroll);
      }
    }, []);

    const scrollToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = sectionId === "intro" ? 0 : section.offsetTop;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
        setIsMenuOpen(false);
      }
    };

    const handleLogoClick = () => {
      // Toggle name expansion on mobile instead of refreshing the page
      if (window.innerWidth < 768) {
        setIsNameExpanded(!isNameExpanded);
      } else {
        window.location.reload();
      }
    };

    const remainingLetters = "haran Ravi".split("");

    return (
      <div className={`${spaceGrotesk.className} bg-black text-[#fefeff] flex flex-col min-h-screen`}>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KD6ZK493X5" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KD6ZK493X5');
          `}
        </Script>
        
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
              className="flex-grow"
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
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", duration: 0.3 }}
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
                <div className="relative md:static mb-8">
                  <div 
                    className="absolute left-0 z-10 w-12 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"
                    style={{
                      opacity: scrollPosition > 0 ? 1 : 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  ></div>
                  <div className="absolute right-0 z-10 w-12 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
                  <div 
                    ref={scrollContainerRef}
                    className="flex gap-4 md:gap-8 justify-start md:justify-center text-sm overflow-x-auto scrollbar-hide"
                    style={{
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      WebkitOverflowScrolling: 'touch',
                      paddingLeft: '1rem',
                      paddingRight: '1rem'
                    }}
                  >
                    {(['anyone', 'recruiters', 'engineers', 'product-managers'] as AudienceType[]).map((audience) => (
                      <button
                        key={audience}
                        onClick={() => setSelectedAudience(audience)}
                        className={`transition-colors whitespace-nowrap flex-shrink-0 ${
                          selectedAudience === audience 
                            ? 'text-[#fefeff] font-medium' 
                            : 'text-[#969696] hover:text-[#fefeff]'
                        }`}
                      >
                        {audienceContent[audience].title}
                      </button>
                    ))}
                  </div>
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
              <main className="flex-grow">
                <section id="intro" className="min-h-screen px-4 md:px-24">
                  <div className="pt-16 pb-8"> {/* Adjusted padding-bottom to 8 */}
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
                          
                          {/* Scroll Down Arrow */}
                          <motion.div 
                            className="mt-16 flex justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ 
                              delay: 1,
                              duration: 1.5
                            }}
                          >
                            <motion.div
                              className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#fefeff]"
                              animate={{ 
                                y: [0, 10, 0],
                                opacity: [0.6, 0.3, 0.6]
                              }}
                              transition={{ 
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                              }}
                              onClick={() => scrollToSection("work")}
                              style={{ cursor: "pointer" }}
                            />
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </section>

                {/* Work Section */}
                <section id="work" className="min-h-screen px-4 md:px-24 py-8 md:py-16 pt-20">
                  <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl">work.</h2>
                    <div className="grid gap-8 md:gap-16 max-w-2xl mx-auto">
                      {workProjects.map((project, index) => (
                        <motion.div
                          key={index}
                          className="group"
                          whileHover={{ y: -10 }}
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block p-4 md:p-8 border border-[#969696] rounded-lg hover:border-[#969696] transition-colors relative">
                            <h3 className="text-xl md:text-2xl font-medium mb-4">{project.title}</h3>
                            <p className="text-sm text-[#fefeff] mb-6">{project.description}</p>
                            <div className="flex flex-wrap gap-4">
                              {project.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="text-sm text-[#969696]">{tag}</span>
                              ))}
                            </div>
                            <div className="absolute top-4 right-4 flex gap-2">
                              {project.platforms.map((Platform, i) => (
                                <Platform.icon 
                                  key={i} 
                                  className="text-xl"
                                  style={Platform.color ? { color: Platform.color } : {}}
                                />
                              ))}
                            </div>
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Background Section */}
                <section id="background" className="min-h-screen px-4 md:px-24 py-8 md:py-16 pt-20">
                  <div className="max-w-5xl mx-auto">
                    <div className="max-w-2xl mx-auto">
                    <div className="mt-16">
                        <div className="relative w-40 h-40 flex-shrink-0 mb-8">
                          <Image
                            src="/mvl_logo.png"
                            alt="MVL Logo"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                        <div className="space-y-4">
                          <p className="font-mono text-sm text-[#969696]">MVL BLOCKCHAIN</p>
                          <h3 className="text-4xl font-medium text-[#fefeff]">Automation Engineer</h3>
                          <p className="text-sm text-[#fefeff]">NOW &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bangalore</p>
                          <p className="text-sm text-[#969696]">
                            Creating frameworks to automate workflows for <a href="https://tada.global/" target="_blank" rel="noopener noreferrer" className="text-[#969696] hover:text-[#fefeff] transition-colors">TADA</a>, a ride hailing app that runs on Web3 mobility ecosystem utilizing MVL token.
                          </p>
                        </div>
                      </div>
                      <br/>
                      <br/>
                      <br/>
                      <div className="relative w-48 h-40 flex-shrink-0 mb-4">
                        <Image
                          src="/LGE_Logo_Mono_White_RGB_cropped.png"
                          alt="LG Electronics Logo"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div className="space-y-4">
                        <p className="font-mono text-sm text-[#969696]">LG SOFT INDIA</p>
                        <h3 className="text-4xl font-medium text-[#fefeff]">Software Development Engineer in Test</h3>
                        <p className="text-sm text-[#fefeff]">2025 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bangalore</p>
                        <p className="text-sm text-[#969696]">
                          I led a team to build an automation framework to test the LG AI Models, 
                          worked on the Open Source Edition of webOS (webOS OSE), and worked 
                          on firmware updates under the Home Applicance & Air Solution dept.
                        </p>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div className="mt-16">
                        <div className="relative w-24 h-24 flex-shrink-0 mb-8">
                          <Image
                            src="/bahk-logo-big-white.svg"
                            alt="Bitcoin Association of Hong Kong Logo"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                        <div className="space-y-4">
                          <p className="font-mono text-sm text-[#969696]">THE BITCOIN ASSOCIATION OF HONG KONG</p>
                          <h3 className="text-4xl font-medium text-[#fefeff]">Software Developer</h3>
                          <p className="text-sm text-[#fefeff]">2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remote</p>
                          <p className="text-sm text-[#969696]">
                            I contributed to the Bitcoin Association of Hong Kong's open source repository by fixing several 
                            critical issues, optimizing site performance, and improving the accuracy of their Bitcoin price 
                            conversion tools and web applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* About Section */}
                <section id="about" className="min-h-screen px-4 md:px-24 py-8 md:py-16 pt-20">
                  <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-4xl mx-auto">about.</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                      <div>
                        <div className="space-y-8">
                          <p className="text-sm text-[#fefeff]">
                          I'm a software developer based in India with over 4 years of experience across brand and product, 
                          at companies large and small.
                          I take pride in my craft, and love mentoring earlier career developers. 
                          I develop cross functional partnerships, and thrive in complex, ambiguous environments.
                          </p>
                        </div>
                      </div>
                      
                      <div className="md:mt-32">
                        <div className="space-y-8">
                          <p className="text-sm text-[#fefeff]">
                          My approach combines technical expertise with creative problem-solving,
                            always striving to build solutions that are both elegant and practical.
                            Zooming out on company strategy, zooming in on details.
                          </p>
                        </div>
                      </div>
                    </div>

                    <br />
                    <br />
                    
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                      <div>
                        <div className="space-y-8">
                          <p className="text-sm text-[#fefeff]">
                            In my free time I try to challenge myself with new projects, learn new things, compose music,
                            practice yoga, go for a long run or just kick back relax at a temple nearby.
                          </p>
                        </div>
                      </div>
                      
                      <div className="md:mt-32">
                        <div className="space-y-8">
                          <p className="text-sm text-[#fefeff]">
                            Creating something from the ground up and watching it grow is incredibly fulfilling.
                            Engaging in this process with passion feels spiritual to me.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="min-h-screen px-4 md:px-24 py-8 md:py-16 pt-20">
                  <div className="max-w-5xl mx-auto">
                    <div className="max-w-2xl mx-auto">
                      <Image
                        src="/charan.jpg"
                        alt="Charan Ravi"
                        width={500}
                        height={300}
                        className="mb-8 mx-auto"
                      />
                      <p className="text-xl md:text-xl text-[#fefeff] underline text-center">contact@charanravi.com</p>
                      <div className="flex items-center gap-2 justify-center mt-4">
                        <div className="relative">
                          <div className="w-2 h-2 bg-[#fefeff] rounded-full animate-pulse"></div>
                          <div className="absolute top-0 left-0 w-2 h-2 bg-[#fefeff] rounded-full animate-[ping_1.5s_ease-in-out_infinite] opacity-90"></div>
                        </div>
                        <p className="text-l text-[#969696]">status : active</p>
                      </div>
                      <div className="flex flex-wrap gap-4 md:gap-8 pt-8 justify-center">
                        <a
                          href="https://www.linkedin.com/in/r-charan/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://github.com/charanravi-online"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
                        >
                          GitHub
                        </a>
                        <a
                          href="https://x.com/charanjson"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
                        >
                          X [Twitter]
                        </a>
                        <a
                          href="https://instagram.com/charan.json"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
                        >
                          Instagram
                        </a>
                        <a
                          href="https://blog.charanravi.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
                        >
                          Blog
                        </a>
                        <a
                          href="https://docs.charanravi.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
                        >
                          Docs
                        </a>
                        <a
                          href="https://cal.com/charanravi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
                        >
                          Meeting
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </main>

              {/* Footer */}
              <footer className="px-4 md:px-24 py-8 text-[#969696]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-5xl mx-auto">
                  <span className="text-sm text-center md:text-left">© 2025 Charan Ravi. All rights reserved.</span>
                  <div className="flex gap-4 md:gap-8">
                    <span className="text-sm text-center md:text-left">Design & Code by - <a href="/" className="hover:text-[#fefeff] transition-colors">Charan Ravi</a></span>
                  </div>
                </div>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
