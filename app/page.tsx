'use client'
import { useState, useEffect } from "react";
import Contact from "./components/Contact/Contact";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Loader from "./components/Loader/Loader";
import Background from "./components/Background/Background";
export default function Home() {
  const [activeComponent, setActiveComponent] = useState('introduction');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
          {/* <Navbar onMenuClick={handleMenuClick} activeComponent={activeComponent} />
          {activeComponent === 'introduction' && <Introduction />}
          {activeComponent === 'project' && <Project />}
          {activeComponent === 'skills' && <Skills />}
          {activeComponent === 'contact' && <Contact />}
          {activeComponent === 'achievements' && <Achievements />} */}
          <Background />
          <Navbar/>
          <Introduction />
          <Experience />
          <Skills />
          <Project />
          <Contact />
               
        </>
      )}
    </>
  );
}
