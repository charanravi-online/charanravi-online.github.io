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
    <div className={`min-h-screen ${sourceCodePro.className} bg-[#f8f8f5]`}>
    
  

      

      {/* Work Section */}
      <section id="work" className="p-16 text-center text-black">
        <h2 className="text-2xl font-bold text-black">// WORK //</h2>
        <br />
        <br />
        <br />

        
        <h3 className="text-xl font-bold text-black">
        <a 
          href="https://snapcraft.io/wiki" // Replace with your actual link
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          wiki
        </a>
        
      </h3>
      <p>a command-line tool to get Wikipedia summaries in your terminal</p>
        <br />
        <br />

        <h3 className="text-xl font-bold text-black">
    <a 
      href="https://rates.bitcoin.org.hk/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      sats converter
    </a>
  </h3>
  <p>A Basic Bitcoin to Fiat converter with price feeds from Coindesk.</p>
        
        
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
