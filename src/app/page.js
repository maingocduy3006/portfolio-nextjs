import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
export default function Home() {
  return (
    
    <main className="flex flex-col min-h-screen px-12 bg-white ">
      <NavBar />
      <div className="container px-12 py-4 mx-auto">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}