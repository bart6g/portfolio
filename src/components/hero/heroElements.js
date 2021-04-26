import styled, { css, keyframes } from "styled-components";
import bg from "../../images/herobg.jpg";
// #F9B294
// #F27280
// #C16C86
// #6D5C7D
// #335D7E
export const HeroContainer = styled.div`
  height: 720px;
  /* background: #4c1f9b; */
  width: 100%;
  background: url(${bg});
  background-size: cover;
  position: relative;
`;

export const HeroWrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;

  height: 100%;
  width: 100%;
  /* background-color: #f15d7a; */

  /* background-size: cover; */
  /* background-position: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

export const HeroBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(22, 50, 92, 0.6);
  position: absolute;
  top: 0;
  left: 0;
`;

export const HeroTitle = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  z-index: 2;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  align-items: center;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
  /* z-index: 4; */
  overflow: hidden;
  z-index: ${({ isOpen }) => (isOpen ? "1" : "20")};
  ${({ scrolled }) =>
    scrolled &&
    css`
      left: auto;
      max-width: 1350px;
      margin: 0 auto;
      position: fixed !important;
    `};
`;

// const onScroll = keyframes`
//   0%{
//     position: absolute;
//   }

//   50%{

//     transform: translate(50%,50%)
//   }

//   100%{
//     position: fixed;
//     bottom: 30px;
//     right: 30px;
//   }
// `;

export const Button = styled.button`
  width: 220px;
  background-color: transparent;
  border: 3px solid white;
  color: white;
  height: 50px;
  border-radius: 20px;
  /* border: none; */
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  outline: none;
  position: absolute;
  left: calc(50% - 110px);
  bottom: calc(100% - 52px);
  transition: width 0.3s ease, height 0.3s ease, bottom 0.8s ease,
    opacity 0.3s ease, visibility 0.5s ease, left 0.8s ease,
    background-color 0.3s ease;
  pointer-events: all;
  cursor: pointer;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    visibility: visible;
  }
  i {
    visibility: hidden;
  }

  &:hover {
    opacity: 0.8;
  }

  ${({ scrolled }) =>
    scrolled &&
    css`
      /* position: fixed; */
      bottom: 20px;
      /* right: 30px; */
      /* transform: translate(50%,50%) */
      border: none;
      left: calc(100% - 80px);
      border-radius: 50%;
      width: 64px;
      height: 64px;

      font-size: 30px;
      background-color: #f15d7a;
      color: white;
      z-index: 20;
      i {
        visibility: visible;
      }
      span {
        visibility: hidden;
      }

      @media screen and (max-width: 768px) {
      }
    `};
`;
