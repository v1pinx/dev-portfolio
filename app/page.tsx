import CustomCursor from "./components/CustomCursor/CustomCursor";
import Footer from "./components/Footer/Footer";
import Introduction from "./components/Introduction/Introduction";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import SocialIcons from "./components/SocialIcons/SocialIcons";


export default function Home() {
  return (
    <>
      <CustomCursor />
      <SocialIcons />
      <Introduction />
      <Project />
      <Skills />
      {/* <Footer /> */}
    </>
  );
}
