"use client";
import { Source_Code_Pro } from "@next/font/google";
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
        className={`text-sm text-black ${activeSection === "home" ? "font-bold" : ""}`}
      >
        Home
      </a>
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
    <br />
        <br />

      

      {/* About Section */}
      <section id="about" className="p-16">
  <div className="max-w-prose mx-auto">
    <h2 className="text-2xl font-bold text-black text-center">// ABOUT //</h2>
    <br />
    <br />
    <p className="mt-4 text-left text-black">
      I'm a Software Developer with 3 years of experience, currently based
      in India. I focus on creating minimal and effective solutions, while
      also mentoring others and composing music.
    </p>
  </div>
</section>

    </div>
  );
}
