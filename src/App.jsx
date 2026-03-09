import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatWeDo from "./components/WhatWeDo";
import Serviceshome from "./components/Serviceshome";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
                <Hero />
      <WhatWeDo />
      <Serviceshome />
              
              
            </>
          }
        />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
