"use client";
import { Source_Code_Pro } from "@next/font/google";
import { useEffect, useState } from "react";

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const titles = [
  "Software Development Engineer",
  "Open Source Contributor",
  "Tech Enthusiast",
  "Music Composer",
  "Minimalist",
  "Part-Time Yogi",
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change title every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className={`min-h-screen ${sourceCodePro.className} bg-[#f7f4e1]`}>
      {/* Centered Navigation */}
      <div className="absolute top-0 left-0 right-0 flex justify-center space-x-4 py-4">
        <a href="/work" className={`text-sm text-black ${activeSection === "work" ? "font-bold" : ""}`}>Work</a>
        <a href="/background" className={`text-sm text-black ${activeSection === "background" ? "font-bold" : ""}`}>Background</a>
        <a href="/about" className={`text-sm text-black ${activeSection === "about" ? "font-bold" : ""}`}>About</a>
        <a href="/contact" className={`text-sm text-black ${activeSection === "contact" ? "font-bold" : ""}`}>Contact</a>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen p-8 text-black pt-24"> {/* Added padding-top */}
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
