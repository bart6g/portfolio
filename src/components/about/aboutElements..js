import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  position: relative;
  /* margin-top: 100px; */
  background-color: #377fea;
  height: 400px;
  padding: 30px 30px;

  @media screen and (max-width: 600px) {
    height: 100%;
  }
`;

export const AboutWrapper = styled.div`
  max-width: 1350px;
  height: 100%;
  margin: 0 auto;
  /* padding: 0 30px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  h2 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 600px) {
    h2 {
      margin-top: 30px;
      text-align: center;
    }

    p {
      margin-bottom: 50px;
      text-align: center;
    }
  }
`;

export const AboutBoxes = styled.div`
  position: absolute;
  top: calc(100% - 80px);
  /* height: 350px;
  width: 400px;

  background-color: white; */
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* box-shadow: 0 30px 40px 0 rgb(212 217 232 / 20%); */

  @media screen and (max-width: 800px) {
    top: calc(100% - 70px);
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin: 20px auto;
    height: 650px;
    top: calc(100% - 80px);
  }
`;

export const AboutBox = styled.div`
  max-width: 350px;
  width: 100%;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 30px 40px 0 rgb(212 217 232 / 20%);
  padding: 20px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #0d174a;
  transition: all 0.3s ease;
  svg {
    width: 40px;
    height: 40px;
  }
  &:first-child {
    margin-right: 50px;
    @media screen and (max-width: 600px) {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: translateY(-5px);
  }
`;

export const Technologies = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 500px;
  /* background-color: red; */
  margin-top: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  h2 {
    color: #0d174a;
    margin: 30px 0;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    margin-top: 850px;
    .flex {
      flex-direction: column;
    }
  }
`;

export const TechBox = styled.div`
  max-width: 200px;
  height: 100px;
  /* border: 1px solid rgb(219, 219, 219); */
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 20px;
  box-shadow: 0 30px 40px 0 rgb(212 217 232 / 20%);
  img {
    width: 50%;
    padding: 20px 10px;
    /* border: 1px solid rgb(219, 219, 219); */
  }

  .css {
    width: 40%;
  }
`;
