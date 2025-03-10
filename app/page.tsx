'use client'
import { useState, useEffect } from "react";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import { Analytics } from "@vercel/analytics/react";
import Loader from "./components/Loader/Loader";
export default function Home() {
  const [activeComponent, setActiveComponent] = useState('introduction');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  function handleMenuClick(component: string) {
    setActiveComponent(component);
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar onMenuClick={handleMenuClick} activeComponent={activeComponent} />
          {activeComponent === 'introduction' && <Introduction />}
          {activeComponent === 'project' && <Project />}
          {activeComponent === 'skills' && <Skills />}
          {activeComponent === 'contact' && <Contact />}
        </>
      )}
    </>
  );
}
