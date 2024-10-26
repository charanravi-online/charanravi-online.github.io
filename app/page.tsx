  "use client";
  import { Source_Code_Pro } from "@next/font/google";
  import { useEffect, useState } from "react";

  const sourceCodePro = Source_Code_Pro({
    weight: ["400", "700"],
    subsets: ["latin"],
  });

  // Texts for both splash screen and main page
  const splashTexts = [
    "DESIGN.",
    "INNOVATE.",
    "EXPLORE.",
    "LEARN.",
    "DREAM.",
    "INSPIRE.",
    "EVOLVE.",
    "SHARE.",
    "COMPOSE.",
    "ENVISION.",
    "CODE.",
    "CREATE.",
    "CREATE.",
    "CREATE.",
    "CREATE.",
  ];


  const titles = [
    "Software Development Engineer",
    "Open Source Contributor",
    "Tech Enthusiast",
    
  ];

  export default function Home() {
    const [activeSection, setActiveSection] = useState("");
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [showSplash, setShowSplash] = useState(true);
    const [currentSplashIndex, setCurrentSplashIndex] = useState(0);

    // Handle scroll event
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;

        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection((section as HTMLElement).getAttribute("id") || "");
        }
      });
    };

    // Show splash screen for 4 seconds
    useEffect(() => {
      const splashInterval = setInterval(() => {
        setCurrentSplashIndex((prevIndex) => (prevIndex + 1) % splashTexts.length);
      }, 200); // Change text every 400ms

      const splashTimeout = setTimeout(() => {
        setShowSplash(false);
        clearInterval(splashInterval);
      }, 3000); // Show splash for 4 seconds

      return () => {
        clearTimeout(splashTimeout);
        clearInterval(splashInterval);
      };
    }, []);

    // Title carousel effect
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 2000); // Change title every 2 seconds

      return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
      <div className={`min-h-screen ${sourceCodePro.className} bg-[#f7f4e1]`}>
        {/* Splash Screen */}
        {showSplash && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black text-[#f7f4e1] text-3xl">
            {splashTexts[currentSplashIndex]}
          </div>
        )}

        {/* Centered Navigation */}
        <div className="absolute top-0 left-0 right-0 flex justify-center space-x-4 py-4">
          <a href="/work" className={`text-sm text-black hover:underline ${activeSection === "work" ? "font-bold" : ""}`}>Work</a>
          <a href="/background" className={`text-sm text-black hover:underline ${activeSection === "background" ? "font-bold" : ""}`}>Background</a>
          <a href="/about" className={`text-sm text-black hover:underline ${activeSection === "about" ? "font-bold" : ""}`}>About</a>
          <a href="/contact" className={`text-sm text-black hover:underline ${activeSection === "contact" ? "font-bold" : ""}`}>Contact</a>
        </div>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen p-8 text-black pt-4"> {/* Added padding-top */}
          <h1 className="text-4xl font-bold">Charan Ravi</h1>
          <p className="text-sm mt-4">{titles[currentTitleIndex]}</p> {/* Carousel effect for titles */}

          <div className="flex gap-4 mt-8">
            {/* Resume Button */}
            <a
              className="border rounded-full py-2 px-4 bg-black text-white hover:bg-gray-700 inline-block w-32 text-center"
              href="/RCharan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

            {/* Contact Button */}
            <button
              className="border border-black rounded-full py-2 px-4 hover:bg-gray-200 w-32 text-center"
              onClick={() => { window.location.href = '/contact'; }}
            >
              Contact
            </button>
          </div>

          {/* Quote Indicator */}
          <div className="absolute bottom-10 text-center cursor-pointer">
            <p
              className={`text-[9px] ${sourceCodePro.className}`}
              onClick={() => { window.location.href = '/less-is-more'; }}
            >
              “Less is More”
            </p>
          </div>
        </section>
      </div>
    );
  }
