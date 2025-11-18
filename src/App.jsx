import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";


function App() {
  return (
    <LanguageProvider>
    <Hero />
    <About /> 
    <Skills/>
    <Experience />
    <Projects />
    <Contact />
    <Footer />
    </LanguageProvider>
  );
}

export default App;
