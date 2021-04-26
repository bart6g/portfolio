import React, { useState, useEffect } from "react";
import {
  Button,
  ContactContainer,
  Form,
  FormContainer,
} from "./contactElements";
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
        <Form onSubmit={(e) => handleSubmitForm(e)}>
          <h2>Write to me</h2>
          <p>{showResult ? `${resultMessage}` : ""}</p>
          <label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="placeholder">Name</span>
          </label>
          <label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="placeholder">Email</span>
          </label>

          <label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <span className="placeholder">Your message</span>
          </label>
          <Button>Send</Button>
        </Form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
