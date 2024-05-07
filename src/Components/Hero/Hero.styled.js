import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledContainer = styled.div`
  /* background-image: url("https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center; */

  height: 100vh;
  width: 100%;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 2s ease-in;
  position: fixed;

  ${({ loaded }) =>
    !loaded &&
    css`
      visibility: hidden;
    `};
`;

export const PreloaderVideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const HeroMain = styled.div`
  height: 100vh;
  overflow-y: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeroContainer = styled.div`
  /* height: 90vh; */
  width: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  padding: 0 0 10% 0;
  @media (max-width: 450px) {
    #HT1 {
      font-size: 0.7rem;
    }
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
`;

export const HeroText = styled.div`
  /* position: relative; */
  z-index: 1;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  /* margin-bottom: -30px; */
  @media (max-width: 600px) {
    font-weight: 800;
    padding: 3%;
  }
`;

export const HT1 = styled.div`
  text-transform: uppercase;
  font-family: "MyFont";
  letter-spacing: 0.2em;
  font-size: 0.9rem;
  margin-bottom: 40px;
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
`;

export const Typewriter = styled.div`
  font-size: 4.5rem;
  /* text-shadow: 0 0 20px rgb(255, 0, 0); */
  font-family: "MyFont";
  position: relative;
  margin: 0;
  color: white;
  /* font-weight: 600; */
  position: relative;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  width: 100%;
  letter-spacing: 0.2em;
  &:before {
    z-index: 0;
    content: "";
    position: absolute;
    width: 200px;
    height: 3px;
    left: 25%;
    margin-top: -15px;
    background: red;
  }
  #pari {
    font-size: 5rem;
  }
  .paridhi-insider {
    /* margin-top: 20px; */
    #p1 {
      font-size: 2.5rem;
    }
    #p2 {
      /* margin-left: -10px; */
      text-shadow: 0 0 2px rgba(255, 0, 0, 0.75);
      color: rgb(231, 0, 0);
      /* margin-top: -20px; */
      font-size: 1.8rem;
    }
    &:before {
      z-index: 0;
      content: "";
      position: absolute;
      width: 200px;
      height: 3px;
      left: 25%;
      margin-top: -10px;
      background: red;
    }
    @media (max-width: 450px) {
      font-size: 2.5rem;

      #p1 {
        margin-top: 5px;
      }
      /* font-size :5rem ; */
      #p2 {
        margin-top: -13px;
      }
      /* } */
    }
  }
  @media (max-width: 450px) {
    font-size: 2.5rem;
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  font-family: "Arial", sans-serif;
  text-align: center;
  margin-top: 50px;
  width: 37.5rem;
  height: 30%;
  @media (max-width: 37.5rem) {
    width: 350px;
    gap: 5%;
  }
  @media (max-width: 28.125rem) {
    width: 18.75rem;
  }
`;

export const CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 30%;
  font-size: 5rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    /* font-size: 1rem; */
    width: 300px;
  }
`;

export const CountText = styled.div`
  font-size: 15px;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 10px;
    font-weight: 800;
  }
`;

export const DrippingDigit = styled.div`
  background-color: black;
  text-align: center;
  /* font-size: 6vw; */
  font-size: 3rem;
  font-weight: 400;
  margin: 0 2.5%;
  color: white;
  padding: 10px;
  width: 6.25rem;
  border-radius: 20px;
  border-width: 50px;
  box-sizing: border-box;
  /* box-shadow: 0 0.5rem 0.4rem 0.01rem hsl(70, 0%, 19%); */
  box-shadow: 0 0.2rem 0.9rem 0.01rem #8a000091;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    width: 80px;

    font-size: 1.5rem;
  }
`;

export const effect = keyframes`
  0% {
    left: -110%;
    top: 90%;
    background: #9f9c9c;
  }
  50% {
 
    background: #9f9c9c;
  }
  90% {
  
    background: #9f9c9c;
  }
  100%{
  
    background: transparent;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 50px;
`;

export const Middle = styled.div`
  top: 50%;
  transform: translateY(13%);
  width: 100%;
  text-align: center;
  display: flex;
  @media (max-width: 600px) {
    transform: translate(-3%);
  }
`;

export const Btn = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  display: flex;
  background-color: #1f1f1f5a;
  margin: 1rem;
  border-radius: 30%;
  /* box-shadow: 0 0 5px 5px #ffffff1a; */
  color: #fff;
  overflow: hidden;
  position: relative;
  text-decoration: none;

  &:hover i {
    transform: scale(1.3);
    color: #f1f1f1;
  }

  &:before {
    content: "";
    position: absolute;
    width: 170%;
    height: 20%;
    transform: rotate(45deg);
    left: 100%;
    top: 90%;
  }

  &:hover::before {
    animation: ${effect} 0.3s 1;
    top: -10%;
    left: -10%;
  }
`;

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  font-size: 20px;
  padding: 10px;
`;
export const HowtoRegBtn = styled.a`
  position: absolute;
  text-align: center;
  right: 20px;
  /* bottom: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  font-size: 0.8rem;
  border-radius: 50%;
  background: #e70000;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  animation: example 2s ease-in-out infinite;
  cursor: pointer;
  /* animation-duration: 2s;
  animation-iteration-count: infinite; */
  @keyframes example {
    0% {
      background-color: red;
      bottom: 50px;
    }
    50% {
      /* background-color: blue; */
      bottom: 70px;
    }
    100% {
      background-color: red;
      bottom: 50px;
    }
  }
`;
