import Hero from "./components/HeroSection";
import About from "./components/AboutUs";
import Expertise from "./components/ExpertiseAreas";
import News from "./components/News";
import Mission from "./components/Mission";
import './globals.css';


export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Mission/>
    <Expertise/>
    <News/>
    </>
  );
}
