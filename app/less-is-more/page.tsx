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
      <section id="about" className="p-16 text-left">
  <h2 className="text-2xl font-bold text-black text-center">some thoughts...</h2>
  <br />
  <br />
  {/* <p className="mt-4 max-w-prose mx-auto text-center text-black">
    Some thoughts...<br />
    
  </p> */}
  
  <ul className="mt-6 list-none text-center ">
    <li className="mt-2">
      <a href="/less-is-more/less-is-more" className="text-blue-800 text-center hover:underline">Less is More</a>
    </li>
    <li className="mt-2">
      <a href="/less-is-more/coding-without-passion" className="text-blue-800 text-center hover:underline">coding without passion?</a>
    </li>
    {/* <li className="mt-2">
      <a href="/philosophy-3" className="text-blue-800 hover:underline">Philosophy 3</a>
    </li>
    <li className="mt-2">
      <a href="/philosophy-4" className="text-blue-800 hover:underline">Philosophy 4</a>
    </li> */}
  </ul>
</section>

    </div>
  );
}
