"use client"
import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Team from "./views/Team";
import Discover from "./views/Discover";
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollToTop from "./components/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

useEffect(() => {
  AOS.refresh();
}, [location.pathname]);

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

// Separated inner content to allow useLocation
function AppContent() {
  const location = useLocation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    AOS.refresh();
     AOS.refreshHard();
  }, [location.pathname]); // ✅ Refresh when route changes

  const handleNavClick = (section) => {
    const refs = {
      "home-section": homeRef,
      "about-section": aboutRef,
      "team-section": teamRef,
      "contact-section": contactRef,
    };
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const isDiscoverPage = location.pathname === "/discover";

  return (
    <>
      {!isDiscoverPage && <NavBar onNavClick={handleNavClick} />}
      <Routes>
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
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </>
  );
}


export default App;
