import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { AboutBento } from "@/components/sections/about-bento";
import { Projects } from "@/components/sections/projects";
import { HowIThink } from "@/components/sections/how-i-think";
import { Experience } from "@/components/sections/experience";
import { OpenSource } from "@/components/sections/open-source";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutBento />
        <Projects />
        <HowIThink />
        <Experience />
        <OpenSource />
        <Contact />
      </main>
      <footer className="border-t border-white/[0.06] py-8 text-center text-xs text-muted-foreground/50">
        &copy; {new Date().getFullYear()} Niranjan Shankar
      </footer>
    </>
  );
}
