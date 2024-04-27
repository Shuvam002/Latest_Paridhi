import React, { useState, useEffect } from "react";
import { Main, ImageBox, Title, SubText, BtnBox, Button  } from "./Card2.styled";

export const Card2 = ({ ImageLink, TitleText, Description, Rlink }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const openNewTab = () => {
    window.open(Rlink);
  };

  return (
    <>
      <Main
        $height={isClicked ? 500 : 400}
        $clicked={isClicked ? 590 : 331}
        onClick={handleClick}
      >
        <ImageBox $ImageLink={ImageLink}></ImageBox>
        <Title>{TitleText}</Title>

        <SubText
          $height={isClicked ? "unset" : "2"}
        
          $clicked={isClicked ? "unset" : "2"}
        >
          {Description}
        </SubText>

        <BtnBox>
          <Button onClick={Rlink ? openNewTab : null}>
             {Rlink ? "Register Now!" : "Registration Closed"}
          </Button>
        </BtnBox>
      </Main>
    </>
  );
};