
import TestAnims from './components/background/TestAnims.jsx'
import Vignette from './components/background/Vignette.jsx'
import BlobBackground from './components/background/BlobBackground.jsx';

import Navbar from "./components/layout/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {

  return (
    <>
      <TestAnims
        columns={63}
        dotScale={0.05}
        pulseSpeed={0.03}
        showGrid={false} />
      {/* <BlobBackground /> */}
      <Vignette />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>


    </>
  )
}

export default App
