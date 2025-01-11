"use client";
import { Source_Code_Pro } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const splashTexts = [
  "LESS",
  "LESS IS",
  "LESS IS MORE",
  "LESS IS MORE.",
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [showSplash, setShowSplash] = useState(true);
  const [currentSplashIndex, setCurrentSplashIndex] = useState(0);

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
    }, 1000); // Change text every second

    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
      clearInterval(splashInterval);
    }, 4000); // Show splash for 4 seconds

    return () => {
      clearTimeout(splashTimeout);
      clearInterval(splashInterval);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen ${sourceCodePro.className} bg-[#f7f4e1]`}>
      {/* Splash Screen */}
      {showSplash && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black text-[#f7f4e1] text-3xl">
          {splashTexts[currentSplashIndex]}
        </div>
      )}

      {/* Home Tab at the Top Left */}
      {!showSplash && (
        <nav className="fixed top-0 left-0 p-4">
          <Link href="/">
            <div className="flex items-center text-black cursor-pointer">
              <AiOutlineHome size={24} /> {/* Home Icon */}
              <span className="ml-2"></span> {/* Home Text */}
            </div>
          </Link>
        </nav>
      )}

      {/* About Section */}
      <section id="about" className="p-16 text-left">
        <h2 className="text-2xl font-bold text-black text-center">Some Thoughts</h2>
        <br />
        <ul className="mt-6 list-none text-center ">
          <li className="mt-2">
            <a href="/less-is-more/less-is-more" className="text-blue-800 text-center hover:underline">Less is More</a>
          </li>
          <li className="mt-2">
            <a href="/less-is-more/coding-without-passion" className="text-blue-800 text-center hover:underline">Coding Without Passion?</a>
          </li>
          <li className="mt-2">
            <a href="/less-is-more/purushartha-I" className="text-blue-800 text-center hover:underline">Purushartha I: Dharma</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
