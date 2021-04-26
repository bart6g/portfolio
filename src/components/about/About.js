import React from "react";
import {
  AboutBox,
  AboutBoxes,
  AboutContainer,
  AboutWrapper,
  TechBox,
  Technologies,
} from "./aboutElements.";
import { GrPersonalComputer } from "react-icons/gr";
import { GiChemicalDrop } from "react-icons/gi";
import img1 from "../../images/react.png";
import img2 from "../../images/node.png";
import img3 from "../../images/js.png";
import img4 from "../../images/Expressjs.png";
import img5 from "../../images/css3.png";
import img6 from "../../images/html.png";
import img7 from "../../images/sass.png";
const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <h2>Hi, I'm Bartosz. Nice to meet you</h2>
          <p>
            In high school, I was fascinated by math and chemistry, so it was
            natural for me to choose chemical studies. In college, I liked
            physical chemistry and mathematical modeling of processes. This is
            how my adventure with programming began. I have tried various
            languages such as C ++ and Java. I've tried writing simple games in
            Android Studio, but I really enjoy writing web applications using
            JavaScript. Below I present my education.
          </p>
          <AboutBoxes>
            <AboutBox>
              <GrPersonalComputer />
              <h3>Applied computer science</h3>
              <p>03.2020 - now</p>
              <p>
                University of Science and Technology in Cracow (Master’s degree)
              </p>
            </AboutBox>
            <AboutBox>
              <GiChemicalDrop />
              <h3>Material Sciencs</h3>
              <p>10.2015 - 02.2019</p>
              <p>
                University of Science and Technology in Cracow (Engineer’s
                degree)
              </p>
            </AboutBox>
          </AboutBoxes>
        </AboutWrapper>
      </AboutContainer>
      <Technologies>
        <h2>Technologies in which I develop</h2>
        <div className="flex react">
          <TechBox>
            <img src={img1} alt="" />
          </TechBox>
        </div>

        <div className="flex js">
          <TechBox>
            <img src={img3} alt="" />
          </TechBox>
          <TechBox>
            <img src={img2} alt="" />
          </TechBox>
          <TechBox>
            <img src={img4} alt="" />
          </TechBox>
        </div>
        <div className="flex css">
          <TechBox>
            <img src={img5} alt="" className="css" />
          </TechBox>
          <TechBox>
            <img src={img6} alt="" />
          </TechBox>
        </div>
        <div className="flex sass">
          <TechBox>
            <img src={img7} alt="" />
          </TechBox>
        </div>
      </Technologies>
    </>
  );
};

export default About;
