import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#summary" className="skip-link">
        Skip to content
      </a>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Skills />
        <Certifications />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
