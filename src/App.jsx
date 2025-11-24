import React, { useRef } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import "./index.css"

const App = () => {
  // Create refs for all sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const sliderRef = useRef(null);
  const contactRef = useRef(null);
  const contactInfoRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth">
      <Nav
        scrollToSection={scrollToSection}
        refs={{ heroRef, aboutRef, servicesRef, sliderRef, contactRef, contactInfoRef }}
      />
      <Home
        heroRef={heroRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        sliderRef={sliderRef}
        contactRef={contactRef}
        contactInfoRef={contactInfoRef}
      />
    </div>
  );
};

export default App;
