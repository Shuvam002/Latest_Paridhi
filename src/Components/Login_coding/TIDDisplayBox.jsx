// TIDDisplayBox.jsx
import React from "react";
import styled from "styled-components";
import { Button } from "./Login_coding.styled";

const TIDBoxOverlay = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TIDBoxContainer = styled.div`
   background-color: rgb(0,0,0);
  color: white;
  border: 1px solid rgb(62, 62, 62);
  font-family: "Jost", sans-serif;
  font-size: large;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative; 
  text-align: center;
`;

const CloseButton = styled(Button)`
   position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover{
    color: grey;
  }
`;

const TIDDisplayBox = ({ onClose, TID }) => {
  return (
    <TIDBoxOverlay>
      <TIDBoxContainer>
        <CloseButton onClick={onClose}>
          <i class="ri-close-large-line"></i>
        </CloseButton>
        <h2>Your TID </h2>
        <p>{TID}</p>
      </TIDBoxContainer>
    </TIDBoxOverlay>
  );
};

export default TIDDisplayBox;
