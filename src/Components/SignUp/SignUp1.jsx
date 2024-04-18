import React from "react";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative; /* Ensure the container is positioned */
`;

const Title = styled.h1`
  text-align: center;
  position: relative; /* Ensure the title is positioned */
  z-index: 1; /* Ensure the title appears above other elements */
`;

const SignUp1 = () => {
  return (
    <CenteredContainer>
      <Title>Registration begins soon, stay tuned!!!</Title>
    </CenteredContainer>
  );
};

export default SignUp1;
