import React from "react";
import {
  ImgWrapper,
  ProjectCard,
  ProjectContainer,
  Text,
} from "./projectElements";
import img1 from "../../images/flo.png";
import img2 from "../../images/candyshop.jpg";
import img3 from "../../images/MERN-logo.png";
import { AiFillYoutube } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
const Project = () => {
  return (
    <ProjectContainer id="projects">
      <h1>My latest work</h1>

      <ProjectCard>
        <Text>
          <h3>FLO.pl</h3>
          <p>
            The project was created based on the graphics designed by{" "}
            <a
              href="https://www.linkedin.com/in/anna-bobek-8474151a8/"
              target="_blank"
              rel="noreferrer"
            >
              Anna Bobek
            </a>
            . The entire application was implemented in React, the components
            were styled using Styled-Components. The aim of the project was to
            learn how to create responsive layouts. It was deployed using
            Heroku, so it may take a while to run.
          </p>
          <div className="buttons">
            <button>
              <a
                href="https://github.com/bart6g/plant-app"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </button>
            <button>
              <a
                href="https://bartosz-plant.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
          </div>
        </Text>
        <ImgWrapper>
          <img src={img1} alt="" />
        </ImgWrapper>
      </ProjectCard>

      <ProjectCard imgStart={true}>
        <Text imgStart={true}>
          <p>
            In the initial state of the application there are three videos, user
            can add more or delete existing ones. Saving new movie will result
            saving all videos to the local storage of the browser. VideoApp uses
            also ContextAPI to manage the state of the application. It was
            deployed using Heroku, so it may take a while to run.
          </p>
          <div className="buttons">
            <button>
              <a
                href="https://github.com/bart6g/video-app"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </button>
            <button>
              <a
                href="https://video-app-bartosz.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
          </div>
        </Text>
        <ImgWrapper imgStart={true}>
          <AiFillYoutube />
          <h1>VideoApp</h1>
        </ImgWrapper>
      </ProjectCard>

      <ProjectCard>
        <Text>
          <h3>CandyShop</h3>
          <p>
            This application was written in React.js with Styled-Components.
            It's very simple with very few functionalities, the focus here was
            primarily on the layout, the use of grid and flex and adapting this
            layout to all browser widths.
          </p>
          <div className="buttons">
            <button>
              <a
                href="https://github.com/bart6g/candy-shop"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </button>
            <button>
              <a
                href="https://bartosz-candy-shop.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
          </div>
        </Text>
        <ImgWrapper imgMax={true}>
          <img src={img2} alt="" />
        </ImgWrapper>
      </ProjectCard>

      <ProjectCard imgStart={true}>
        <Text imgStart={true} buttonInactive={1}>
          <h3>MERN Smarthome</h3>
          <p>
            This application was implemented using MERN stack. It provides
            functionalities such as user registration and logging, creating
            sensors, and collecting and displaying sensor data. The intention
            was to randomly generate data via MQTT and save it to a database.
          </p>
          <div className="buttons">
            <button>
              <a
                href="https://github.com/bart6g/MERN-smarthome"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </button>
            <button>Live</button>
          </div>
        </Text>
        <ImgWrapper left={true}>
          <img src={img3} alt="" />
        </ImgWrapper>
      </ProjectCard>
    </ProjectContainer>
  );
};

export default Project;
