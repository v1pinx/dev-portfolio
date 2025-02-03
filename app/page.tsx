'use client'
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {

  return (
    <>
            {/* <Navbar /> */}
            <Introduction />
            <Skills />
            <Project />
            {/* <Resume /> */}
            <Contact />
      </>
  );
}
