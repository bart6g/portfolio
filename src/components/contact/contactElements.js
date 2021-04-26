import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #377fea;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const FormContainer = styled.div`
  max-width: 700px;
  width: 100%;

  background-color: #e7efff;
  position: absolute;
  top: 50%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e7efff;
  max-width: 500px;
  box-shadow: 2px 30px 40px 5px rgb(212 217 232 / 20%);
  label {
    width: 100%;
    display: flex;
    position: relative;
    /* align-items: center; */
    margin: 25px 0;
    span {
      position: absolute;
      display: block;
      top: 13px;
      left: 10px;
      pointer-events: none;
      transition: all 0.3s ease;
    }
    input,
    textarea {
      width: 100%;
      height: 50px;
      padding-left: 10px;
      border: none;
      outline: none;

      &:focus,
      &:valid {
        border: 1px solid #0d174a;
      }
    }
    input:focus,
    input:valid,
    textarea:focus,
    textarea:valid {
      + .placeholder {
        top: -12px;
        display: block;
        font-weight: 600;
        font-size: 12px;
        background-color: white;
        padding: 0 10px;
        border: 1px solid #0d174a;
      }
    }
    textarea {
      height: 150px;
      padding-top: 20px;
    }
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 42px;
  background: #0d174a;
  color: white;
  text-transform: uppercase;
  border: none;
  outline: none;
  border-radius: 20px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    opacity: 0.8;
  }
`;
