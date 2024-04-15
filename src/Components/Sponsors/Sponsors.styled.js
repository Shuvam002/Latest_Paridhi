import styled from 'styled-components';

export const GlobalStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  /* min-height: 100vh;
  width:100%;
  background-image: url("https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"); */
  background-size: cover;
  background-position:center;
  display:flex;
  align-items: flex-start;
  justify-content: center;
  padding:5rem;
  overflow-y: auto;
  overflow-x : hidden;
  
`;

export const Card = styled.div`
  width:250px;
  text-align: center;
  padding: 40px 25px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  color: #fff;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  display: inline-block; 
  margin: 0 30px; 

  @media (max-width: 1280px) {
    margin: 0 0px;
    
  }

  &:hover {
    transform: scale(0.99);
  }

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: inherit;
    background: radial-gradient(
      60rem circle at var(--xPos, center) var(--yPos, center),
      rgba(255, 255 , 255, 0.2),
      transparent 35%
    );
    opacity: 0;
    transition: all 0.15s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const CardImage = styled.img`
  width: 200px;
  border-radius: 5%;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 20px;
  font-family: sans-serif;
`;

export const CardText = styled.p`
  font-size: 18px;
  margin: 10px auto;
  max-width: 330px;
`;

export const Button = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  background: #fff;
  color: #08a9b8;
  padding: 10px 30px;
  border-radius: 30px;
  margin: 30px 0 10px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; 
  justify-content: space-between; 
  padding:20px;
  
`;
