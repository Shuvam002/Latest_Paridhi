import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const Spinnerdiv = styled.div`
  width: 56px;
  height: 56px;
  display: grid;
  border: 4.5px solid #0000;
  border-radius: 50%;
  border-color: #F5F5F5 #0000;
  animation: ${spinnerAnimation} 1s infinite linear;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    margin: 2.2px;
    border: inherit;
    border-radius: 50%;
  }

  &::before {
    border-color: #e70000 #0000;
    animation: inherit;
    animation-duration: 0.5s;
    animation-direction: reverse;
  }

  &::after {
    margin: 8.9px;
  }
`;