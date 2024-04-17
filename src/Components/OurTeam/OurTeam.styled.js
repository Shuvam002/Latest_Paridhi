import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

export const TeamStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    
  }

  body {
    
    
    min-height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y:auto;
  }

  
  ::-webkit-scrollbar {
    width: 8px; 
  }

 
  ::-webkit-scrollbar-track {
    background: red; 
  }

  ::-webkit-scrollbar-thumb {
    background: red; 
    border-radius: 4px; 
  }

  
  ::-webkit-scrollbar-thumb:hover {
    background: #ff3333; 
  }

  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      width: 2px; 
    }
  }
 
`;

export const StyledContainer = styled.div`
  /* background-image: url(${"https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});
  background-size: cover;
  background-position: center; */
  height:100%;
  width: 100%;
  padding:7rem;
  overflow-y: auto;
  overflow-x : hidden;
  background-size:100px;
  
  @media (max-width: 1280px) {
    height:700vh;
  }

`;

export const Container = styled.div`
  flex: 0 2 calc(20% - 0px); 
  padding: 10px;
  border-radius: 20px;
  background: linear-gradient(
    75.16deg,
    rgba(0, 0, 0, 0.95) 70.4%,
    rgba(255, 255, 255, 0.15) 100.55%
  );
  border: 1px solid rgba(255 , 0 , 0, 0.3);
  text-align: center;
  height: 20rem;
  width:20rem;
  
`;

export const CardContainer = styled.div`
  display :flex;
  flex-wrap: wrap;
  gap: 1rem; 
  justify-content: space-between; 
  

  @media (max-width: 765px) {
    display : flex;
    justify-content:center;
  }
`;


export const Image = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.5);
  margin: 0 auto;
  overflow: hidden;
  object-fit: cover; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.div`
  margin: 30px 0;
  margin-top:1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  

  h1 {
    font-size: 1.3rem;
    color: #fff;
    text-transform: uppercase;
  }

  p {
    font-size: 1.3rem;
    color:white;
    margin-top:1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;

  .content-item h3 {
    font-weight: normal;
    font-size: 16px;
  }
`;

// export const CTA = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 0px 0;

//   button {
//     width: 120px;
//     height: 35px;
//     border-radius: 5px;
//     cursor: pointer;
//     font-size: 16px;
//   }

//   button:first-child {
//     color: #fff;
//     backdrop-filter: blur(6px);
//     border: 0.5px solid rgba(253, 142, 128, 0.2);
//     background: linear-gradient(
//       135deg,
//       rgba(252, 76, 79, 0.7),
//       rgba(255, 168, 99, 0.48)
//     );
//     transition: all 0.3s;
//   }

//   button:first-child:hover {
//     background: transparent;
//     border: 1px solid rgba(255, 255, 255, 0.3);
//     color: #000;
//   }

//   button:nth-child(2) {
//     backdrop-filter: blur(6px);
//     background: linear-gradient(
//       108.16deg,
//       rgba(255, 255, 255, 0.75) 3.4%,
//       rgba(255, 255, 255, 0.2) 97.55%
//     );
//     border: 1px solid rgba(255, 255, 255, 0.3);
//   }
// `;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  gap:7px;

  .icons {
    height: 35px;
    width: 35px;
    backdrop-filter: blur(6px);
    background: linear-gradient(
      108.16deg,
      rgba(255, 255, 255, 0.9) 0.4%,
      rgba(0 , 0 , 0, 0.95) 00.55%
    );
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    margin-top:-1.3rem;

    .icon {
      color:white;
      font-size: 18px;
      justify-content:center;
      margin-top:3px;
    }
  }

  .icons:hover {
    margin-top: -25px;
    transform: scale(1);
    box-shadow: 0 0 10px #ffffff;
  }

  .icons:hover .icon {
    color: white;
    font-size: 21px;
    color: #ffffff;
   

}



`;
