import Hero from "@/components/Hero";
import About from "@/components/About";
import LookingFor from "@/components/LookingFor";
import Hobbies from "@/components/Hobbies";
import Values from "@/components/Values";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <LookingFor />
      <Hobbies />
      <Values />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
