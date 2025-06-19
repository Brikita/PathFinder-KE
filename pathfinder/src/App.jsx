import React, { useRef, useState, useMemo, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Box from "@mui/material/Box";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Dark mode state for the whole app
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setMode(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

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
      <NavBar onNavClick={handleNavClick} colorMode={colorMode} mode={mode} />
      <div ref={homeRef} id="home-section">
        <Home />
      </div>
      <div ref={aboutRef} id="about-section">
        <About />
      </div>
      <div ref={contactRef} id="contact-section">
        <Contact />
      </div>

      <Box sx={{ height: { xs: 80, sm: 80 } }} />
      <Footer />
    </>
  );
}

export default App;
