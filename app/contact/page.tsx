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
        setActiveSection((section as HTMLElement).getAttribute("id") || "");
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
        className={`text-sm text-black hover:underline ${activeSection === "work" ? "font-bold" : ""}`}
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
        className={`text-sm text-black underline hover:underline ${activeSection === "contact" ? "font-bold" : ""}`}
      >
        Contact
      </a>
    </div>
    <br />
        <br />
      

      {/* Contact Section */}
      <section id="about" className="p-16">
  <div className="max-w-prose mx-auto">
    <h2 className="text-2xl font-bold text-black text-center">// CONTACT //</h2>
    <br />
    <br />
    <p className="mt-4 text-left text-black text-center">
    *open to work*
    </p>
    <br />
    <br />
    <p className="mt-4 text-center text-black">charanravi.online@gmail.com</p>
    <br />
    
  </div>
{/* </section> */}





      {/* <section id="contact" className="p-16 text-center text-black">
        <h2 className="text-2xl font-bold">// CONTACT //</h2>
        <br />
        <br />
        <p className="mt-4">charanravi.online@gmail.com</p>
        <br />
        <p className="text-sm">[Currently exploring new opportunities. <br /> grab my resume from the <a href="/" className="underline hover:underline" rel="noopener noreferrer" >home</a> page]</p>
        <br />
        <br />
        <br />
        <br /> */}



        {/* Social Links */}
        <div className="flex flex-col sm:flex-row text-black justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
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
            href="https://x.com/charanjson"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            X (Twitter)
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
      </section>
    </div>
  );
}
