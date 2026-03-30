import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import CustomCursor from './Components/CustomCursor';
import Project from './Components/Project';
import Experince from './Components/Experince';
function App() {
  return (
    <>
      <CustomCursor />
      <div className="app-wrapper">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experince/>
        <Project/>
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;