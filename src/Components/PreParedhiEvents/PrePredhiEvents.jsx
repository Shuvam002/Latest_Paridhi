import React from "react";
import { StyledContainer } from "./PrePredhiEvents.styled";
import { Card2 } from "../Cards/Card2";
import { motion } from "framer-motion";

const PrePredhiEvents = () => {
  const WorkshopData = [
    {
      TitleText: "Gaming",
      Description:
        "Join us at the Pre-Paridhi Gaming Bash, presented by The ESports Club & Megatronix. Compete in thrilling tournaments like Valorant 2v2, FIFA (1v1), and Mortal Kombat (1v1) for a chance to win big cash prizes. Mark your calendars for April 30th, 2024, at the CSE Seminar Hall. Entry is FREE! Don't miss this opportunity to level up your gaming experience and connect with fellow gamers.",
      ImageLink:
        "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbcHufWpyG4QCMXaYtaiVKjmUMZ0BkP7an_UGjyRhVIsxyhYHfWd9LMieI1zpHyic9K19oQ7JbH3nSPylCAttm0yA_fbkqlTG0=w1920-h972-rw-v1",
      Rlink:
        "https://theesports.club/event/tec-arena-connect-meghand-saha-institute-of-technologyEAQiLR",
    },
  ];
  return (
    <>
      <StyledContainer>
        {WorkshopData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              ease: "easeOut",
              duration: 0.3,
              delay: index * 0.2,
            }}
          >
            <Card2
              key={data.TitleText}
              ImageLink={data.ImageLink}
              TitleText={data.TitleText}
              Description={data.Description}
              Rlink={data.Rlink}
            />
          </motion.div>
        ))}
      </StyledContainer>
    </>
  );
};

export default PrePredhiEvents;
