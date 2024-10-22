"use client";
import { Source_Code_Pro } from "@next/font/google";
import { useEffect, useState } from "react";

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

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
        setActiveSection((section as HTMLElement).getAttribute("id") || ""); // Added fallback to prevent null
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen ${sourceCodePro.className} bg-[#f7f4e1]`}>
    {/* Centered Navigation */}
    <div className="absolute top-0 left-0 right-0 flex justify-center space-x-4 py-4">
      <a
        href="/work"
        className={`text-sm text-black ${activeSection === "work" ? "font-bold" : ""}`}
      >
        Work
      </a>
      <a
        href="/background"
        className={`text-sm text-black ${activeSection === "background" ? "font-bold" : ""}`}
      >
        Background
      </a>
      <a
        href="/about"
        className={`text-sm text-black ${activeSection === "about" ? "font-bold" : ""}`}
      >
        About
      </a>
      <a
        href="/contact"
        className={`text-sm text-black ${activeSection === "contact" ? "font-bold" : ""}`}
      >
        Contact
      </a>
    </div>
  

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen p-8 text-black">
        <h1 className="text-4xl font-bold">Charan Ravi</h1>
        <p className="text-sm mt-4">Software Development Engineer</p>

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
  onClick={() => {
    window.location.href = '/contact';
  }}
>
  Contact
</button>


        </div>

{/* Quote Indicator */}
<div className="absolute bottom-10 text-center cursor-pointer">
  <p className={`text-[9px] ${sourceCodePro.className}`}
  onClick={() => {
    window.location.href = '/less-is-more'; 
  }}>
    
    “Less is more”
  </p>
</div>

      </section>

      {/* Work Section */}
      {/* <section id="work" className="p-16 text-center">
        <h2 className="text-2xl font-bold">// WORK //</h2>

        <div className="mt-8 space-y-8">
          <img
            src="/wiki.png"
            alt="Project 1"
            className="rounded-lg border border-gray-300 shadow-md w-full sm:w-1/2"
          />
          <img
            src="/satsconverter.png"
            alt="Project 2"
            className="rounded-lg border border-gray-300 shadow-md w-full sm:w-1/2"
          />
        </div>
      </section> */}

      {/* Background Section */}
      {/* <section id="background" className="p-16 text-center">
        <h2 className="text-2xl font-bold">// BACKGROUND //</h2>
        <p className="mt-4 max-w-prose mx-auto">
          During my time at LG Soft India, I worked on various projects,
          including webOS OSE and the H&A Division. I contributed to firmware
          development for LG products and worked on AI-driven solutions.
        </p>
      </section> */}

      {/* About Section */}
      {/* <section id="about" className="p-16 text-center">
        <h2 className="text-2xl font-bold">// ABOUT //</h2>
        <p className="mt-4 max-w-prose mx-auto">
          I'm a Software Developer with 3 years of experience, currently based
          in India. I focus on creating minimal and effective solutions, while
          also mentoring others and composing music.
        </p>
      </section> */}

      {/* Contact Section */}
      {/* <section id="contact" className="p-16 text-center">
        <h2 className="text-2xl font-bold">// CONTACT //</h2>
        <p className="mt-4">charanravi.online@gmail.com</p>
        <p>Looking for new opportunities.</p>

        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="https://www.linkedin.com/in/r-charan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/charan.json"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://x.com/PyCharan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            X (Formerly Twitter)
          </a>
          <a
            href="https://github.com/charanravi-online"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </section> */}
    </div>
  );
}
