"use client";
import { Source_Code_Pro } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

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
  href="/"
  className={`text-sm text-black hover:underline ${activeSection === "home" ? "font-bold" : ""}`}
>
  Home
</a>

      <a
        href="/work"
        className={`text-sm text-black underline hover:underline ${activeSection === "work" ? "font-bold" : ""}`}
      >
        Work
      </a>
      <a
        href="/background"
        className={`text-sm text-black hover:underline ${activeSection === "background" ? "font-bold" : ""}`}
      >
        Background
      </a>
      <a
        href="/about"
        className={`text-sm text-black hover:underline ${activeSection === "about" ? "font-bold" : ""}`}
      >
        About
      </a>
      <a
        href="/contact"
        className={`text-sm text-black hover:underline ${activeSection === "contact" ? "font-bold" : ""}`}
      >
        Contact
      </a>
    </div>
    <br />
        <br />
    
  


      {/* Work Section */}
      <section id="work" className="p-16 text-center text-black">
        <h2 className="text-2xl font-bold text-black">// WORK //</h2>
        {/* <br /> */}
        {/* <br /> */}

        
        {/* Action Cards */}
<div className="flex flex-col items-center mt-4">
  {/* Card 1 */}
  <div className="bg-[#f7dc39] p-4 rounded-lg shadow-lg text-center max-w-md w-full mt-4 h-64 flex flex-col justify-between">
    <h3 className="text-sm text-gray-500">WINDOWS/LINUX</h3>
    <p className="text-2xl font-semibold">Wiki</p>
    <p className="text-sm mt-2 text-gray-600">
      A CMD-Line application that fetches quick, easy-to-read Wikipedia summaries.
    </p>
    <button 
      className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
      onClick={() => window.open('https://snapcraft.io/wiki', '_blank')} // Open in a new tab
    >
      Install
    </button>
  </div>

  {/* Card 2 */}
  <div className="bg-[#f7dc39] p-4 rounded-lg shadow-lg text-center max-w-md w-full mt-4 h-64 flex flex-col justify-between">
    <h2 className="text-sm text-gray-500">WEBSITE</h2>
    <p className="text-2xl font-semibold">BTC Converter</p>
    <p className="text-sm mt-2 text-gray-600">
      A Basic Bitcoin to Fiat converter with price feeds from Coindesk. <br />
    </p>
    <button 
      className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
      onClick={() => window.open('https://rates.bitcoin.org.hk/', '_blank')} // Open in a new tab
    >
      View
    </button>
  </div>
</div>


        
        
      </section>

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
