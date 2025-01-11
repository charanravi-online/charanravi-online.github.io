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
      {/* Home Tab at the Top Left */}
      <nav className="fixed top-0 left-0 p-4">
        <Link href="/">
          <div className="flex items-center text-black cursor-pointer">
            <AiOutlineHome size={24} /> {/* Home Icon */}
            <span className="ml-2"></span> {/* Home Text */}
          </div>
        </Link>
      </nav>

      {/* About Section */}
      <section id="about" className="p-16">
  <div className="max-w-prose mx-auto">
    <h2 className="text-2xl font-bold text-black text-center">Purushartha I: Dharma</h2>
    <br />
    <br />
    <p className="mt-4 text-left text-black">
   

coming soon.
    </p>
  </div>
</section>

    </div>
  );
}
