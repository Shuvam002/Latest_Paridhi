import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import SplitType from "gsap/SplitText"; // Import SplitType explicitly

gsap.registerPlugin(SplitType); // Register SplitType with GSAP

const Header = styled.header`
  display: grid;
  place-content: center;
  height: 100vh;
`;

const Heading = styled.h1`
  font-size: 7rem;
  text-transform: uppercase;
  font-family: "Bebas Neue", sans-serif; /* Ensure fallback font */
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  line-height: 5.9rem;

  .char {
    transform: translateY(115px);
    transition: transform 0.5s;
  }
`;

const HomePage = () => {
  const textRef = useRef(null);



  return (
    <Header>
      <Heading ref={textRef}>woah.text</Heading>
    </Header>
  );
};

export default HomePage;
