import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.section`
  /* background-image: url(${"https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});
  background-size: cover;
  background-position: center; */
  padding-top: 10vh;
  width: 100%;
  min-height: 100vh;
  padding-left: 2%;
  padding-right: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  @media (max-width: 1221px) {
    flex-direction: column;
  }
`;

export const MainInfo = styled(Link)`
  padding: 20px;
  height: 30%;
  min-width: 20%;
  font-size: 13px;
  border: 2px solid white;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const CardsSection = styled.section`
  /* min-width: 60%; */
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
  /* justify-content: space-evenly; */

  @media (max-width: 400px) {
    width: 100%;
    gap: 10px;
  }
`;

export const Domains = styled.span`
  padding: 20px;
  min-height: 200px;

  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  color: white;
  display: flex;
  flex-direction: column;
  width: 45%;

  font-size: 14px;
  @media (max-width: 400px) {
    padding: 10px;
    font-size: 13px;
    width: 70%;
    height: auto;
  }
`;

export const Input = styled.input`
  border: none;
  padding: 1em;
  font-size: 0.75em;
  outline: none;
  color: rgb(195, 195, 195);
  ::placeholder {
    color: rgb(155, 155, 155);
  }

  :focus {
    outline-color: rgb(149, 149, 149);
  }
`;

export const InputField = styled.input`
  background: transparent;
  width: 70%;
  border: none;
  outline: none;

  .fa {
    color: rgb(125, 125, 125);
    margin-right: 1rem;
    left: 20px;
  }
  color: #fff;
  font-size: 1rem;
`;

export const Button = styled.div`
  margin-right: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
  cursor: "not-allowed";
  &.fa {
    color: rgb(125, 125, 125);
    margin-left: 1rem;
  }
  &.Verify {
    font-size: 1rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;

    color: white;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
    font: bold;

    &:hover {
      color: rgb(0, 255, 8, 0.7);
      transition: 0.1s;
    }
  }

  &.fa-plus:hover,
  &.fa-minus:hover {
    color: rgb(220, 220, 220);
    transition: 0.1s;
  }
`;

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid rgba(209, 213, 219, 0.9);
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  padding: 3%;

  @media (min-width: 1100px) {
    width: 50%;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-top: 10vh;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Cover = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  margin: 0;
  box-sizing: border-box;
  font-family: "Jost", sans-serif;
  width: 70%;
  @media (max-width: 800px) {
    width: 80%;
  }
  height: 70%;
`;

export const IconContainer = styled.div`
  display: flex;
  position: relative;
  text-align: center;
  width: 70%;
  margin-bottom: 10px;
  background: rgb(190, 190, 190, 0.3);
  border-radius: 0.2rem;
  padding: 0.7em;
  font-size: 1.2rem;
`;

export const SubmitButton = styled.button`
  padding: 1% 3%;
  background-color: #eb564b;
  border-radius: 10px;
  font-size: large;
  border: 3px solid #eb564b;
  &:hover {
    border: 3px solid white;
    background-color: red;
  }



`;
