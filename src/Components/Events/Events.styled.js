import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  
  padding: 10vh;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  align-items: center;

 

`;
export const BottomNavbar = styled.nav`
  width: 100%;
  background-color: #333; 
  position: fixed;
  bottom: 0;
  display: none;
  justify-content: space-around;
  padding: 1rem 0;

  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const StyledLink = styled(Link)`
  color: white; 
  font-weight: bold;
  text-decoration: none; 
  margin-right: 10px; 
`;

export const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  margin:0.5%;
  
  /* transition: color 0.3s ease; */
  /* cursor: pointer;
  @media (min-width: 560px) {
  font-size: 1.2rem;
  margin:2%;
  } */
  @media (max-width: 500px) {
  font-size: 0.7rem;
  margin:1%;
  }
  @media (min-width: 800px) {
  font-size: 1.5rem;
  margin:2%;
  }

  &:hover {
    color: #ddd;
  }
`;

