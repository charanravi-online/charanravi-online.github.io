"use client";
import { Source_Code_Pro } from "@next/font/google";
import { useEffect, useState, useRef } from "react";

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

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

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const [currentSplashIndex, setCurrentSplashIndex] = useState(0);
  const [isGifActive, setIsGifActive] = useState(false);
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

    const audio = new Audio("/track.mp3");
    audioRef.current = audio;
    audio.play();
    setIsGifActive(true);

    audio.addEventListener("ended", () => {
      setIsGifActive(false);
      audioRef.current = null;
    });
  };

  return (
    <div className={`min-h-screen ${sourceCodePro.className} ${isGifActive ? "bg-gif text-white" : "bg-[#f7f4e1] text-black"}`}>
      {showSplash && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black text-[#f7f4e1] text-3xl">
          {splashTexts[currentSplashIndex]}
        </div>
      )}

      <div className="absolute top-0 left-0 right-0 flex justify-center space-x-4 py-4">
        <a href="/work" className={`text-sm hover:underline ${activeSection === "work" ? "font-bold" : ""}`}>Work</a>
        <a href="/background" className={`text-sm hover:underline ${activeSection === "background" ? "font-bold" : ""}`}>Background</a>
        <a href="/about" className={`text-sm hover:underline ${activeSection === "about" ? "font-bold" : ""}`}>About</a>
        <a href="/contact" className={`text-sm hover:underline ${activeSection === "contact" ? "font-bold" : ""}`}>Contact</a>
      </div>

      <section className="flex flex-col items-center justify-center h-screen p-8 pt-4">
        <h1 className="text-4xl font-bold cursor-pointer" onClick={handleNameClick}>Charan Ravi</h1>
        <p className="text-sm mt-4">{titles[currentTitleIndex]}</p>

        <div className="flex gap-4 mt-8">
          <a
            className="border rounded-full py-2 px-4 bg-black text-white hover:bg-gray-700 inline-block w-32 text-center"
            href="/RCharan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          <button
            className="border border-black rounded-full py-2 px-4 hover:bg-gray-200 w-32 text-center"
            onClick={() => { window.location.href = '/contact'; }}
          >
            Contact
          </button>
        </div>

        <div className="absolute bottom-10 text-center cursor-pointer">
          <p
            className={`text-[9px] ${sourceCodePro.className}`}
            onClick={() => { window.location.href = '/less-is-more'; }}
          >
            “Less is More”
          </p>
        </div>
      </section>

      <style jsx>{`
        .bg-gif {
        // credits: https://dribbble.com/shots/3169743--XPC2016-Final-entry
          background-image: url('/future.gif');
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </div>
  );
}
