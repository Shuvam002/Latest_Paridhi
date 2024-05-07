import React from "react";
import { StyledContainer } from "./PrePredhiEvents.styled";
import { Card2 } from "../Cards/Card2";
import { motion } from "framer-motion";
import potraiture from "./potraiture.jpeg"

const PrePredhiEvents = () => {
  const WorkshopData = [
    {
      TitleText: "Gaming",
      Description:
        "Join us at the Pre-Paridhi Gaming Bash, presented by The ESports Club & Megatronix. Compete in thrilling tournaments like Valorant 2v2, FIFA (1v1), and Mortal Kombat (1v1) for a chance to win big cash prizes. Mark your calendars for April 30th, 2024, at the CSE Seminar Hall. Entry is FREE! Don't miss this opportunity to level up your gaming experience and connect with fellow gamers.",
      ImageLink:
        "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbcHufWpyG4QCMXaYtaiVKjmUMZ0BkP7an_UGjyRhVIsxyhYHfWd9LMieI1zpHyic9K19oQ7JbH3nSPylCAttm0yA_fbkqlTG0=w1920-h972-rw-v1",
      Rlink:
        "",
    },

    {
      TitleText: "Photography",
      Description:
      "Embrace the artistry of Potraiture at the Pre-Paridhi Photography event, hosted by The Megatronix club of MSIT. Unveil your creativity in this OPEN-themed competition. Register now for just 30 rupees and seize the chance to win captivating prizes!",
      ImageLink:
        potraiture,
      Rlink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfC2LHBC3l4NxzucZz-MxaCMbt_nMfBFTF1ITOhq4A5f3ygCw/viewform?usp=sf_link",
    },
    {
      TitleText: "Coding",
      Description:
        "Join us at the online Pre-Paridhi Coding Bash at unstop, presented by Megatronix.Get exiting prizes and certificates.Rs. 1k for the winner and direct entry in code quest finals without entry fee in paridhi,2024 along with certificates. Mark your calendars for May 4th & 5th, 2024. Don't miss this opportunity to level up your coding experience and connect with fellow coders.",
      ImageLink:
        "https://assets.techrepublic.com/uploads/2022/08/learn-coding-automation-just-770x513.jpeg",
      Rlink:
        "",
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