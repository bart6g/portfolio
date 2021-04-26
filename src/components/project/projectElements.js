import styled from "styled-components";

export const ProjectContainer = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 30px;
  height: 100%;
  margin-top: 100px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #0d174a;
  }
  @media screen and (max-width: 600px) {
    margin-top: 300px;
  }
`;

export const ProjectCard = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 30px 40px 0 rgb(212 217 232 / 20%);
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  padding: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Text = styled.div`
  padding: ${({ imgStart }) => (imgStart ? "0 0 0 20px" : "0 20px 0 0 ")};
  margin-left: 20px;
  max-width: 450px;
  h3 {
    margin: 10px 0;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    button {
      padding: ${({ buttonInactive }) => (buttonInactive ? "10px 20px" : "")};
      outline: none;
      border: 2px solid black;
      background-color: #0d174a;
      color: white;
      font-weight: 700;
      text-transform: uppercase;
      cursor: ${({ buttonInactive }) =>
        buttonInactive ? "not-allowed" : "pointer"};
      transition: all 0.3s ease;
      a {
        text-decoration: none;
        display: block;
        color: white;
        padding: 10px 20px;
      }
      &:hover {
        transform: translateY(-5px);
        opacity: 0.8;
      }
      &:first-child {
        background-color: transparent;
        color: #0d174a;
        border: 2px solid #0d174a;
        margin-right: 30px;
        padding: 0;
        cursor: pointer;
        a {
          text-decoration: none;
          color: #0d174a;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0;

    text-align: center;
    h3 {
      margin-bottom: 10;
    }
  }
`;

export const ImgWrapper = styled.div`
  max-width: 500px;
  min-width: 465px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;

  margin-left: ${({ left }) => (left ? "30px" : "0")};
  svg {
    width: 60px;
    height: 60px;
    color: red;
  }
  img {
    width: 100%;
  }

  @media screen and (max-width: 950px) {
    margin-bottom: 10px;
    min-width: 300px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    min-width: 200px;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
