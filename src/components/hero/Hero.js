import React from "react";
import {
  Button,
  ButtonContainer,
  ButtonWrapper,
  HeroBg,
  HeroContainer,
  HeroTitle,
  HeroWrapper,
} from "./heroElements";
import { BsEnvelope } from "react-icons/bs";
import Navbar from "../navbar/Navbar";
import { Link } from "react-scroll";
const Hero = ({ scrolled, isOpen, setIsOpen }) => {
  return (
    <HeroContainer id="home">
      <HeroBg />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeroWrapper>
        <HeroTitle>
          <h1>Junior front-end developer</h1>
          <h3>eager to gain experience</h3>
        </HeroTitle>
        <ButtonContainer>
          <ButtonWrapper scrolled={scrolled} isOpen={isOpen}>
            <Button scrolled={scrolled}>
              <Link to="contact" spy={true} smooth={true} duration={500}>
                {scrolled ? <BsEnvelope /> : <span>Let's talk</span>}
              </Link>
            </Button>
          </ButtonWrapper>
        </ButtonContainer>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
