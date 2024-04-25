import React from "react";
import { StyledContainer } from "./WorkShopStyle.styled";
import { Card2 } from "../Cards/Card2";
import { motion } from "framer-motion";

const WorkShop = () => {
  const WorkshopData = [
    {
      TitleText: "Coding",
      Description:
        "Join us at our Competitive Programming and Problem Solving Workshop to refine your coding skills! Whether you're a beginner or an experienced coder, this session caters to all levels. Happening on April 26th, 3:30 PM to 6:00 PM, at the CSE Seminar Hall. Don't miss out on this opportunity to enhance your abilities!",
      ImageLink:
        "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaW12q1DfAAa3LcM26v4azn7qGqEyZUo2h6mKXjBCTKefiX88M7PMTH1PRQp_aaSkaeMBfN9YEXU8rkpkGfpdveGwlA1nnH_gw=w1920-h972-rw-v1",
        Rlink: "https://forms.gle/A1kRNvJ3n3fzbf8GA"
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

export default WorkShop;
