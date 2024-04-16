import { useState, useEffect, useRef } from "react";
import baffle from "baffle";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
  PreloaderVideoWrapper,
  HeroMain,
  CountdownContainer,
  CountdownItem,
  Title,
  Typewriter,
  HeroText,
  HeroContainer,
  CountText,
  Footer,
  Middle,
  Btn,
  FontAwesomeIconStyled,
  DrippingDigit,
  StyledContainer,
} from "./Hero.styled.js";
import BackgroundAnimation from "../BackGroundAnimation/BackgroundAnimation.jsx";

export const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    } else {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <CountdownContainer>
      <CountdownItem>
        <DrippingDigit>
          {timeLeft.days <= 9 ? "0" + timeLeft.days : timeLeft.days}
          <CountText>Days</CountText>
        </DrippingDigit>
      </CountdownItem>

      <CountdownItem>
        <DrippingDigit>
          {timeLeft.hours <= 9 ? "0" + timeLeft.hours : timeLeft.hours}
          <CountText>Hours</CountText>
        </DrippingDigit>
      </CountdownItem>

      <CountdownItem>
        <DrippingDigit>
          {timeLeft.minutes <= 9 ? "0" + timeLeft.minutes : timeLeft.minutes}
          <CountText>Minutes</CountText>
        </DrippingDigit>
      </CountdownItem>

      <CountdownItem>
        <DrippingDigit style={{ color: "#e70000" }}>
          <span>
            {timeLeft.seconds <= 9 ? "0" + timeLeft.seconds : timeLeft.seconds}
          </span>
          <CountText>Seconds</CountText>
        </DrippingDigit>
      </CountdownItem>
    </CountdownContainer>
  );
};

const Hero = () => {
  const targetDate = new Date("2024-04-13T23:59:59");

  const [videoPlayed, setVideoPlayed] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // const baffleRef = useRef(null);

  // useEffect(() => {
  //   const text = baffle(baffleRef.current);
  //   text.set({
  //     characters: "!/|~#.^+*$#%nwf@%^&*!",
  //     speed: 250,
  //   });
  //   text.start();
  //   text.reveal(2000);

  //   // Clean up baffle instance on unmount
  //   return () => {
  //     text.stop();
  //   };
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoPlayed(true);
    }, 2000); // Play video for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StyledContainer loaded={showContent ? "true" : "false"}>
        <HeroMain>
          <HeroContainer>
            <div className="light-source" />
            <Title>
              {/* <Typewriter className="baffle" ref={baffleRef}> */}
              <Typewriter className="baffle">
                {/* Paridhi <span> 2024</span> */}
                {/* <div> */}
                PARI
                <div className="paridhi-insider">
                  <p>DHI</p>
                  <p id="p2">{"'24"}</p>
                </div>
                {/* </div> */}
              </Typewriter>
              <HeroText style={{ fontSize: "20px", marginBottom: "40px" }}>
                See you on{" "}
                <span style={{ color: "red" }}>10th, 11th, 12th</span> May
              </HeroText>
            </Title>
            <div className="timer-div">
              <HeroText style={{ marginBottom: "-40px" }}>
                Events Releasing in
              </HeroText>
              <CountdownTimer targetDate={targetDate} />
            </div>
          </HeroContainer>
          <Footer>
            <Middle>
              <Btn href="https://www.facebook.com/msitparidhi2023" target="_">
                <FontAwesomeIconStyled icon={faFacebook} />
              </Btn>
              <Btn
                href="https://www.instagram.com/megatronix__msit/"
                target="_"
              >
                <FontAwesomeIconStyled icon={faInstagram} />
              </Btn>
              <Btn
                href="https://www.linkedin.com/company/msitmegatronix/about/"
                target="_"
              >
                <FontAwesomeIconStyled icon={faLinkedin} />
              </Btn>
              <Btn href="https://www.youtube.com/@megatronixmsit921" target="_">
                <FontAwesomeIconStyled icon={faYoutube} />
              </Btn>
            </Middle>
          </Footer>
        </HeroMain>
      </StyledContainer>
      )
    </>
  );
};

export default Hero;
