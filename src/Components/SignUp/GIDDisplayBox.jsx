import React from "react";
import styled from "styled-components";
import { Button } from "./SignUp.styled";

const GIDBoxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GIDBoxContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative; /* Ensure close button is positioned relative to the container */
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const GIDDisplayBox = ({ gid, onClose }) => {
  return (
    <GIDBoxOverlay>
      <GIDBoxContainer>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <h2>GID Number</h2>
        <p>{gid}</p>
      </GIDBoxContainer>
    </GIDBoxOverlay>
  );
};

export default GIDDisplayBox;
