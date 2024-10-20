"use client";
import { Source_Code_Pro } from "@next/font/google";
import Image from "next/image"; // Importing image for using with your gallery
import Link from 'next/link';

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export default function Home() {
  return (
      <div className={`min-h-screen animated-bg ${sourceCodePro.className}`}>
          {/* Hero Section */}
          <section className={`flex flex-col items-center justify-center bg-black text-white h-screen p-8 pb-20 gap-16 sm:p-20`}>
              {/* Top Right Menu */}
              <nav className="absolute top-8 right-8">
                  <ul className="flex gap-4">
                      <li>
                          <a href="#work" className="text-sm sm:text-base text-white hover:underline">Work</a>
                      </li>
                      <li>
                          <a href="#background" className="text-sm sm:text-base text-white hover:underline">Background</a>
                      </li>
                      <li>
                          <a href="#about" className="text-sm sm:text-base text-white hover:underline">About</a>
                      </li>
                      <li>
                          <a href="#contact" className="text-sm sm:text-base text-white hover:underline">Contact</a>
                      </li>
                  </ul>
              </nav>

              <main className="flex flex-col gap-8 items-center">
                  <div className="flex flex-col items-center justify-center">
                      <h1 className="text-custom-large mt-8 gradient-text">Charan Ravi</h1>
                      <p className="text-sm mt-6">Software Development Engineer</p>
                  </div>

                  <div className="flex gap-4 items-center flex-col sm:flex-row">
                      {/* Resume Button */}
                      <a
                          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 px-5 min-w-[150px]"
                          href="https://drive.proton.me/urls/KV1GSD7S0W#5Bt4QooR9TJP"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          Resume
                      </a>

                      {/* Contact Button */}
                      <a
                          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-12 px-5 min-w-[150px]"
                          onClick={() => {
                              const contactSection = document.getElementById("contact");
                              if (contactSection) {
                                  contactSection.scrollIntoView({ behavior: "smooth" });
                              }
                          }}
                      >
                          Contact
                      </a>
                  </div>
              </main>

              {/* Scroll Down Indicator */}
              <div
                  className="absolute bottom-10 animate-bounce cursor-pointer"
                  onClick={() => {
                      const section = document.getElementById("work");
                      if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                      }
                  }}
              >
                  <span>&darr;</span>
              </div>
          </section>

          {/* Work Section */}
          <section id="work" className="flex flex-col items-center justify-center bg-red-700 text-white p-16 gap-8">
              <h2 className="text-3xl mt-8">// WORK //</h2>
              <div className="h-16 bg-black"></div> {/* Creates a 4rem (64px) spacer */}

              {/* Flex container for iframes */}
              <div className="flex flex-row items-start justify-center space-x-8">
                  {/* Embed the iframes */}
                  <iframe
                      src="https://snapcraft.io/wiki/embedded?button=black"
                      frameBorder="0"
                      width="100%"
                      height="400px"
                      style={{ border: '1px solid #CCC', borderRadius: '12px' }}
                  ></iframe>
                  {/* <iframe
                      src="https://rates.bitcoin.org.hk/"
                      frameBorder="0"
                      width="100%"
                      scrolling="no"
                      height="400px"
                      style={{ border: '1px solid #CCC', borderRadius: '12px' }}
                  ></iframe> */}
              </div>
          </section>

          <div className="h-16 bg-red-700"></div> {/* Creates a 4rem (64px) spacer */}

          {/* Background Section */}
          <section id="background" className="flex flex-col items-center justify-center bg-black text-white p-16 gap-8">
              <h2 className="text-3xl mt-8">// BACKGROUND //</h2>
              <div className="h-16 bg-black"></div> {/* Creates a 4rem (64px) spacer */}
              <p className="text-center max-w-prose bg-black text-yellow-500">LG Soft India</p>
              <p className="text-center max-w-prose">
                  I got the chance to work on several projects during my time at LG. Some of them include - webOS OSE, ATOM (a secret AI project I can't talk much about),
                  and the prestigious H&A (Home Appliance & Air Solution) Division, where I got to work with firmwares for a lot of the products that LG has engineered.
              </p>
          </section>

          <div className="h-64 bg-black"></div> {/* Creates a 4rem (64px) spacer */}

          {/* About Section */}
          <section id="about" className="flex flex-col items-center justify-center bg-red-700 text-white p-16 gap-8">
              <h2 className="text-3xl mt-8">// ABOUT //</h2>
              <div className="h-16 bg-red-700"></div> {/* Creates a 4rem (64px) spacer */}
              <p className="text-center max-w-prose">
                  I'm a Software Developer, currently based in India, with 3 years of experience across brand and product, at companies large and small.
              </p>
              <p className="text-center max-w-prose">
                  I take pride in my craft, and love mentoring earlier career developers. I develop cross-functional partnerships and thrive in complex, ambiguous environments.
              </p>
              <p className="text-center max-w-prose">
                  I believe in keeping things minimal and effective.
              </p>
              <p className="text-center max-w-prose">
                  Oh, I also compose music when I'm not coding something.
              </p>
          </section>

          <div className="h-64 bg-red-700"></div> {/* Creates a 4rem (64px) spacer */}

          {/* Contact Section */}
          <section id="contact" className="flex flex-col items-center justify-center bg-black text-white p-16 gap-8">
              <h2 className="text-3xl mt-8">// CONTACT //</h2>
              <div className="h-16 bg-black"></div> {/* Creates a 4rem (64px) spacer */}

              {/* Flex container for email and LinkedIn links */}
              <p className="text-yellow-500 max-w-prose">charanravi.online@gmail.com</p>
              <p className="text-center">
                  <span className="text-white">I'm currently looking for a new role :)</span>
              </p>
              <div className="h-32 bg-black"></div> {/* Creates a 4rem (64px) spacer */}

              <div className="flex space-x-8">
                  <p className="text-white max-w-prose hover:underline">
                      <Link href="https://www.linkedin.com/in/r-charan/">LinkedIn</Link>
                  </p>
                  <p className="text-white max-w-prose hover:underline">
                      <Link href="https://instagram.com/charan.json">Instagram</Link>
                  </p>
                  <p className="text-white max-w-prose hover:underline">
                      <Link href="https://x.com/PyCharan">X (Formerly Twitter)</Link>
                  </p>
                  <p className="text-white max-w-prose hover:underline">
                      <Link href="https://github.com/charanravi-online">GitHub</Link>
                  </p>
              </div>

              <div className="h-32 bg-black"></div> {/* Creates a 4rem (64px) spacer */}
          </section>
      </div>
  );
}

