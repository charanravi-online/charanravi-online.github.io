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
    <h2 className="text-2xl font-bold text-black text-center">less is more</h2>
    <br />
    <br />
    <p className="mt-4 text-left text-black">
      I don't mind going overboard with the things you're passionate about. <br /> Just making that clear.
      <br /><br />
      Let's talk about the philosophy itself.
      <br /><br />
      This principle is based on the idea that removing excess elements enhances the clarity of concept.<br />
      Sounds nice, but it can be misused a lot.<br /> For a lack of better terms, it can be a reason for a lack of personality.<br />
      Colour, designs - intricate and complex are very much required in life. <br />
      Like everything in life, it's not always black and white. <br />
      There are grey areas where some things make sense and some things don't.<br />
      It totally depends on the context and utility.<br />
      <br /><br />
      Let's say I'm going to purchase a watch.<br />
      There are millions to choose from. I can go for the fancy ones or the ones that aren't that fancy. Totally up to me?
      <br />Cool.<br /> Now I need to think, what do I really need?<br /> A watch that shows extreme simplicity doing only the essentials the best way it can?<br />
      or get one that has an array of precious metals, rare materials and pushed the design to its ultimate and intricate beauty?
      <br /><br />Now is when I actually know what my priorities are. I can go for any. I can go for both. 
      I find that beautfiul.
      <br /><br />
      I went for a good old Casio G-Shock for complete utility usage. But I also plan to get a dress watch with beautiful design for special occasions.
      <br /><br />What does this say about me? Or us in general?
      That's something to think about.
      <br /><br />
      Look at this website for instance.<br />
      I've built beautiful sites with parallax animations and what not.<br /> But I chose this design for my own portfolio website.
      I just felt this is who I am, simple, someone who prefers minimalism and utility over complicated designs while making their site.<br />
      Mind you, I love me some jewellery. And I think I love it when it looks minimal from afar and upon closer inspection, it has beautiful engravings. <br />
      Something like the art that was very prevalent in India a thousand years ago.
      <br /><br />
      All I'm trying to say is, sometimes less is in fact more.
      "Sometimes" being the keyword here. Not always. But, sometimes.
    </p>
  </div>
</section>

    </div>
  );
}
