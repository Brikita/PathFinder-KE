import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import "./style.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavClick = (section) => {
    const refs = {
      "home-section": homeRef,
      "about-section": aboutRef,
      "contact-section": contactRef,
    };
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar onNavClick={handleNavClick} />

      <main className="page-content">
        <section ref={homeRef} id="home-section" className="section">
          <Home />
        </section>

        <section ref={aboutRef} id="about-section" className="section">
          <About />
        </section>

        <section ref={contactRef} id="contact-section" className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
