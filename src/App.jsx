import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollTopButton from "./components/ScrollTopButton";
import About from "./sections/About";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}
