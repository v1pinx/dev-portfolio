'use client'
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Footer from "./components/Footer/Footer";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import { Analytics } from "@vercel/analytics/react"
import { useState } from "react";


export default function Home() {
  const [activeComponent, setActiveComponent] = useState('introduction');

  const handleMenuClick = (component : any) => {
      setActiveComponent(component);
  };

  return (
      <>
          <CustomCursor />
          <Navbar onMenuClick={handleMenuClick} />
          {/* <SocialIcons /> */}

          {activeComponent === 'introduction' && <Introduction />}
          {activeComponent === 'project' && <Project />}
          {activeComponent === 'skills' && <Skills />}
      </>
  );
}
