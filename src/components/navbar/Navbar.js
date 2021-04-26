import React, { useState } from "react";
import { NavContainer, NavLinks, NavWrapper } from "./navbarElements";
import { Link } from "react-scroll";
import Hamburger from "./Hamburger";

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavLinks isOpen={isOpen}>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
              onClick={() => setIsOpen(false)}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </NavLinks>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
