"use client";
import { Source_Code_Pro } from "@next/font/google";
import { useEffect, useState, useRef } from "react";
import Image from "next/image"; // Import Image component

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Existing splash texts and titles
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
  "Software Development Engineer",
  "Software Development Engineer",
];

// New Tooltip Messages for "Less is More"
const lessIsMoreTooltips = [
  "Don't click!",
  "Seriously, don't!",
  "Are you sure?",
  "It's a trap!",
  "Just don't!",
  "Don't say I didn't warn ya.",
  "Fine go ahead.",
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const [currentSplashIndex, setCurrentSplashIndex] = useState(0);
  const [isGifActive, setIsGifActive] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false); // Tooltip for name
  const [lessIsMoreTooltipVisible, setLessIsMoreTooltipVisible] = useState(false); // Tooltip for Less is More
  const [lessIsMoreTooltipIndex, setLessIsMoreTooltipIndex] = useState(0); // Current index for the tooltip messages
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  // Splash screen effect
  useEffect(() => {
    const splashInterval = setInterval(() => {
      setCurrentSplashIndex((prevIndex) => (prevIndex + 1) % splashTexts.length);
    }, 200);

    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
      clearInterval(splashInterval);
    }, 3000);

    return () => {
      clearTimeout(splashTimeout);
      clearInterval(splashInterval);
    };
  }, []);

  // Title carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Handle click on "Charan Ravi" to toggle GIF and audio playback
  const handleNameClick = () => {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsGifActive(false);
      return;
    }
    
    // track credits : https://youtu.be/C73DubnDRBk?si=MmXzocGOTCCD0IwG
    const audio = new Audio("/track.mp3");
    audioRef.current = audio;
    audio.play();
    setIsGifActive(true);

    audio.addEventListener("ended", () => {
      setIsGifActive(false);
      audioRef.current = null;
    });
  };

  // Render the splash screen or main content
  return (
    <div className={`${sourceCodePro.className} ${isGifActive ? "bg-gif text-white" : "bg-[#f7f4e1] text-black"}`}>
      {showSplash ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black text-[#f7f4e1] text-3xl">
          {splashTexts[currentSplashIndex]}
        </div>
      ) : (
        <>
          <div className="absolute top-0 left-0 right-0 flex justify-center space-x-4 py-4">
            <a href="/work" className={`text-sm hover:underline ${activeSection === "work" ? "font-bold" : ""}`}>Work</a>
            <a href="/background" className={`text-sm hover:underline ${activeSection === "background" ? "font-bold" : ""}`}>Background</a>
            <a href="/about" className={`text-sm hover:underline ${activeSection === "about" ? "font-bold" : ""}`}>About</a>
            <a href="/contact" className={`text-sm hover:underline ${activeSection === "contact" ? "font-bold" : ""}`}>Contact</a>
          </div>

          <section className="flex flex-col items-center justify-center h-screen p-4 md:p-8 pt-4 md:pt-8">
            {/* Add your image here */}
            <div className="relative flex flex-col items-center mb-2">
              <Image
                src="/charan-ravi.jpg" // Path to your image
                alt="Charan Ravi"
                width={150} // Adjust width as needed
                height={150} // Adjust height as needed
                className="mb-4" // Add class for circular shape
                style={{  borderRadius: '90px', backgroundColor: '#575050' }}
              />
              <h1
                className="text-5xl md:text-7xl lg:text-9xl font-bold cursor-pointer leading-tight text-center"
                onMouseEnter={() => setTooltipVisible(true)} // Show tooltip on hover
                onMouseLeave={() => setTooltipVisible(false)} // Hide tooltip on mouse leave
                onClick={handleNameClick}
              >
                Charan Ravi
              </h1>
              {tooltipVisible && (
                <div className="absolute bottom-full mb-2 bg-black text-white text-sm py-1 px-2 rounded-md text-center">
                  Click to play/stop music!
                </div>
              )}
            </div>

            <p className="text-lg md:text-xl mt-4 text-center">{titles[currentTitleIndex]}</p>

            <div className="flex gap-4 mt-8">
              <div className="relative inline-block">
                <a
                  className="border rounded-full py-2 px-4 bg-black text-white hover:bg-gray-700 inline-block w-32 text-center"
                  href="/RCharan-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </div>

              <div className="relative inline-block">
                <button
                  className="border border-black rounded-full py-2 px-4 hover:bg-gray-200 w-32 text-center"
                  onClick={() => { window.location.href = '/contact'; }}
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="absolute bottom-10 text-center cursor-pointer">
              <div className="relative inline-block">
                <p
                  className={`text-[9px] ${sourceCodePro.className}`}
                  onClick={() => { window.location.href = '/less-is-more'; }}
                  onMouseEnter={() => {
                    setLessIsMoreTooltipVisible(true); // Show tooltip on hover
                    // Update the tooltip index for cycling
                    setLessIsMoreTooltipIndex((prevIndex) => (prevIndex + 1) % lessIsMoreTooltips.length);
                  }}
                  onMouseLeave={() => setLessIsMoreTooltipVisible(false)} // Hide tooltip on mouse leave
                >
                  “Less is More”
                </p>
                {lessIsMoreTooltipVisible && (
                  <div className="absolute bottom-full mb-2 bg-black text-white text-sm py-1 px-2 rounded-md text-center whitespace-nowrap">
                    {lessIsMoreTooltips[lessIsMoreTooltipIndex]} {/* Display the current tooltip message */}
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}

      <style jsx>{`
        .bg-gif {
          // credits: https://dribbble.com/shots/3169743--XPC2016-Final-entry
          background-image: url('/future_compressed.gif');
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </div>
  );
}
