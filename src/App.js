import React, { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import styled from "styled-components";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [buttonScrolled, setButtonScrolled] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const changeButton = () => {
    const contactHeight = document.getElementById("contact").offsetTop;
    if (window.scrollY >= 280 && window.scrollY < contactHeight - 1200) {
      setButtonScrolled(true);
    } else {
      setButtonScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeButton);
  }, []);
  return (
    <>
      <Hero
        scrolled={buttonScrolled}
        isOpen={isMenuOpened}
        setIsOpen={setIsMenuOpened}
      />
      <About />
      <Project />
      <Contact />
    
    </>
  );
};

export default App;
