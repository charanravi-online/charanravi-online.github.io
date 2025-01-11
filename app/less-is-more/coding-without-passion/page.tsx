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
    <h2 className="text-2xl font-bold text-black text-center"> coding without passion?</h2>
    <br />
    <br />
    <p className="mt-4 text-left text-black">
   

As you and I know, it doesn't take passion to start coding or even make money off of it.<br />
All you need are some skills. But how far does it really take you?<br />
You can start to code with or without passion. But to make something substantial, I personally feel some amount of passion is necessary.<br />
<br />
Let me go over something I've experienced in my life.
<br /><br />
I was introduced to C and C++ early in college. I absolutely hated that language. It made me hate programming itself. 
<br />I used to think to myself, man even after I graduate, I'll probably just stick with music and make a career off of it, I can't code.
But, turns out I can.<br /> Everyone can.<br /> 
<br />Once I got into LG as a test engineer, it took me a while to realize that I am hungry for more.
<br />And I got that 'more' in coding. I began to learn Python. Was interviewed and moved internally into an AI Team which built internal tools to test the AI models developed by LG.
<br />And the rest is just history. I actively learn new languages and skills I can use to build stuff. 
<br />
<br />My passion for building was always there. I learned to channel it into coding, building software that helped me and others solve some problem.
<br /><br />
People can still code only to make money, and nothing's wrong with that.
<br />I just find it beautiful when you do something with passion. There's something divine about it.
<br /><br />
In summary, you can code without passion. 
<br />But a lot of magic happens when you do something with passion.
    </p>
  </div>
</section>

    </div>
  );
}
