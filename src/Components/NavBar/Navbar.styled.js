import styled, { keyframes } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import megalogo from "./static/megaLogo.png";

const underlineAnimation = keyframes`
  from {
    width: 0;
  }

  to {
    width: 50%;
  }
`;

const NavDownAnimation = keyframes`

from {
  bottom: 100vh;
  }

  to {
    bottom: 90vh;
  }

`;

export const StyledContainer = styled.div`
  height: 10vh;
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  animation: ${NavDownAnimation} 0.5s ease-out;
  background: rgba(255, 255, 255, 0.06);

  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);

  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const NavbarContainer = styled.nav`
  z-index: 9;
  padding: 0 50px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  color: black;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  background-size: contain;
  color: aliceblue;
  height: 25vh;
  width: 25vh;
`;
export const SubLogo = styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
`;

export const MenuBtn = styled.label`
  color: white;
  cursor: pointer;
  display: none;

  @media (max-width: 1100px) {
    display: block;
    color: white;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;

  @media (max-width: 1100px) {
    position: fixed;
    top: 10vh;
    right: ${({ $clicked }) => ($clicked ? "0" : "-100vw")};

    backdrop-filter: blur(50px);
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    /* align-items: center; */
    z-index: 1;
    transition: right 0.4s ease-in-out;
  }
`;

export const NavItem = styled.li`
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease, margin 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.2);
    margin-left: 15px;
    margin-right: 15px;
  }

  @media (max-width: 1100px) {
    margin: 24px 0;
    font-size: 19px;
    font-weight: 400;

    &:hover {
      transform: scale(1.2);
      margin-left: 15px;
      margin-right: 15px;
    }
  }

  color: white;
`;

export const NavLinkName = styled(NavLink)`
  text-decoration: none;
  font-weight: bolder;
  letter-spacing: 2px;
  color: white;
  width: 50%;

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0%;
    height: 2px;
    background-color: red;
    font-size: 30px;
    animation: ${underlineAnimation} 0.4s ease-out;
    width: 50%;
    @media (max-width: 1100px) {
      animation: none;
      width: 0;
    }
  }
  &.active::after {
    width: 50%;
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0%;
    height: 2px;
    background-color: red;
    font-size: 30px;
    width: 50%;
    @media (max-width: 1100px) {
      animation: none;
      width: 0;
    }
  }
`;
