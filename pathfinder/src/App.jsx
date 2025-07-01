import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Team from "./views/Team";
import Discover from "./views/Discover";
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavClick = (section) => {
    const refs = {
      "home-section": homeRef,
      "about-section": aboutRef,
      "team-section": teamRef,
      "contact-section": contactRef,
    };
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <NavBar onNavClick={handleNavClick} />
      <Routes>
        {/* Main scrollable landing page */}
        <Route
          path="/"
          element={
            <main className="page-content">
              <section ref={homeRef} id="home-section" className="section">
                <Home />
              </section>

              <section ref={aboutRef} id="about-section" className="section">
                <About />
              </section>

              <section ref={teamRef} id="team-section" className="section">
                <Team />
              </section>

              <section ref={contactRef} id="contact-section" className="section">
                <Contact />
              </section>
            </main>
          }
        />

        {/* Full-page Discover route (formerly About details) */}
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </Router>
  );
}

export default App;
