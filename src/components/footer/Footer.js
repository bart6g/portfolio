import React from "react";
import { Column, ColumnWrapper, FooterContainer } from "./footerElements";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
const Footer = () => {
  return (
    <FooterContainer>
      <ColumnWrapper>
        <h3> &copy; 2021 Bartosz Gałuszka</h3>
        <div className="detail">
          <div className="text">
            <AiOutlineMail /> bartosz.galuszka96@gmail.com
          </div>
          <div className="text">
            <AiOutlinePhone /> +48 785 964 722
          </div>
          <div className="icons">
            <FaLinkedin />
            <FaGithubSquare />
          </div>
        </div>
      </ColumnWrapper>
    </FooterContainer>
  );
};

export default Footer;
