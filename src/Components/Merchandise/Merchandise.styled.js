// cards.styled.js
import styled from "styled-components";

export const Background = styled.div`
  /* background: url("https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"); */
  height: 100%;
  width: 100%;
  @media (min-width: 1000px) {
    position: fixed;
    top: 0;
    left: 0;
  }
  z-index: 1;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 8rem;

  @media (max-width: 1000px) {
    margin-top: 5rem;
  }
`;

export const CardContainer1 = styled.div`
  @media (max-width: 1000px) {
    margin-top: 8rem;
  }
  font-family: "Jost", sans-serif;
  border-radius: 5px;
  margin: 1rem;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  color: white;

  //  glassmorphism code
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(3px);

  border-radius: 10px;
  @media (max-width: 1400px) {
    margin: 1rem;
    width: calc(50% - 2rem);
  }
  @media (max-width: 768px) {
    width: calc(100% - 2rem);
  }

  p {
    font-size: 1.2rem;
  }
  .price {
    font-size: 1.5rem;
  }

  button {
    font-size: 1.1rem;
    color: white;
    height: 3rem;
    width: 60%;
    background: rgb(255, 101, 96);
    border: 2px solid white;
    border-radius: 5px;
    transition: 0.15s;
    margin: 1rem;
  }
  button:hover {
    background: transparent;
  }
`;

export const CardContainer2 = styled(CardContainer1)`
  margin-bottom: 5rem;
  @media (max-width: 1000px) {
    margin-top: 0rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  object-fit: contain;

  img {
    max-width: 80%;
    margin: 0.5rem;
  }
`;
