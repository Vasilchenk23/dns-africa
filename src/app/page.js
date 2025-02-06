import Hero from "./components/HeroSection";
import About from "./components/AboutUs";
import Expertise from "./components/ExpertiseAreas";
import News from "./components/News";
import './globals.css';


export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Expertise/>
    <News/>
    </>
  );
}
