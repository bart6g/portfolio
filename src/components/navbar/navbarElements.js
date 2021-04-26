import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #0d174a;
  position: fixed;
  z-index: 3;
`;

export const NavWrapper = styled.div`
  max-width: 1350px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
`;

export const NavLinks = styled.ul`
  display: flex;
  transition: all 0.3s ease;
  li {
    list-style: none;
    transition: all 0.2 ease;
  }

  a {
    display: block;
    padding: 10px 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    color: white;
    &:hover {
      transform: translateY(-5px);
    }
  }

  @media screen and (max-width: 768px) {
    li:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(500px)"};
      transition-delay: 0.1s;
    }
    li:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(-500px)"};
      transition-delay: 0.2s;
    }
    li:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(500px)"};
      transition-delay: 0.3s;
    }
    li:nth-child(4) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(-500px)"};
      transition-delay: 0.4s;
    }

    background-color: #0d174a;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
  }
  z-index: 5;
`;

export const HamburgerContainer = styled.div`
  position: absolute;
  right: 30px;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  visibility: hidden;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    visibility: visible;
  }
  z-index: 6;
`;
export const Line = styled.div`
  width: 40px;
  height: 5px;
  background-color: white;
  border-radius: 20px;
  transition: all 0.3s ease;
  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(12.5px) rotate(45deg)" : ""};
  }
  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }
  &:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(-12.5px) rotate(-45deg)" : ""};
  }
`;
