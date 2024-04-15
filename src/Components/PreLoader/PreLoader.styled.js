import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black; /* Optional: Set a background color */
`;

export const LoaderVideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the entire container */
`;