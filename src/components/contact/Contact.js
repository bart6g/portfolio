import React, { useState, useEffect } from "react";
import { ColumnWrapper } from "../footer/footerElements";
import {
  Button,
  ContactContainer,
  ContactWrapper,
  Form,
  FormContainer,
} from "./contactElements";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { sendEmail } from "./sendEmail";
require("dotenv").config();
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShowResult(false);
    }, 10000);
    return () => {
      clearTimeout(timeId);
    };
  }, [resultMessage]);
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const sentEmail = await sendEmail(name, email, message);
      console.log(sentEmail);

      setName("");
      setEmail("");
      setMessage("");
      setShowResult(true);
      setResultMessage("Message was successfully sent");
    } catch (err) {
      console.log(err);
      setShowResult(true);
      setResultMessage("Something went wrong, please check your emaill adress");
    }
  };

  return (
    <ContactContainer id="contact">
      <FormContainer>
        <ColumnWrapper>
        <h2>If you are looking for an employee with a great desire to learn new things, not only front-end, you've come to the right place. I provide my contact details below</h2>
        <div className="detail">
        <div className="text">
        <AiOutlineMail /> bartosz.galuszka96@gmail.com
        </div>
        <div className="text">
        <AiOutlinePhone /> +48 785 964 722
        </div>
        <div className="icons">
        <a
        href="https://www.linkedin.com/in/bartosz-ga%C5%82uszka-286242200/"
        target="_blank"
        rel="noreferrer"
        >
        <FaLinkedin />
        </a>
        <a
        href="https://github.com/bart6g"
        target="_blank"
        rel="noreferrer"
        >
        <FaGithubSquare />
        </a>
        </div>
        </div>
        <h3> &copy; 2021 Bartosz Gałuszka</h3>
        </ColumnWrapper>
        </FormContainer>
        </ContactContainer>
        );
      };
      
export default Contact;
