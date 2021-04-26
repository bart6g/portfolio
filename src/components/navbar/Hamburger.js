import React from "react";
import { HamburgerContainer, Line } from "./navbarElements";

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <HamburgerContainer onClick={() => setIsOpen(!isOpen)}>
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
    </HamburgerContainer>
  );
};

export default Hamburger;
