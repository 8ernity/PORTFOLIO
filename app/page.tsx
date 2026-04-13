import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Encryption from "@/components/Encryption";
import Projects from "@/components/Projects";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="h-full w-full relative z-[30]">
      <LoadingScreen />
      <div className="flex flex-col gap-20">
        <Hero />
        <AboutMe />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}