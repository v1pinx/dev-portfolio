import CustomCursor from "./components/CustomCursor/CustomCursor";
import Introduction from "./components/Introduction/Introduction";
import Project from "./components/Project/Project";
import SocialIcons from "./components/SocialIcons/SocialIcons";


export default function Home() {
  return (
    <>
      <CustomCursor />
      <SocialIcons />
      <Introduction />
      <Project />
    </>
  );
}
