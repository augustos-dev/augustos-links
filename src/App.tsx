import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import EducationAndContact from "./components/EducationAndContact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="min-h-screen bg-[#090A0F] text-zinc-100 scroll-smooth">
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <EducationAndContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;