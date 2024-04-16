import React from "react";
import { StyledContainer } from "./Events.styled";
import Card from "../Cards/Card";
import { motion } from "framer-motion";

const Events = () => {
  const eventDataArray = [
    {
      TitleText: "CODING",
      Description:
        "Explore Paridhi's exhilarating coding contests—CP, web, debugging—tailored for college as weel as school students. Click the card for exciting opportunities!",
      ImageLink:
        "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300",
      link: "/events/coding",
    },
    {
      TitleText: "Manual_Robotics",
      Description:
      "Embark on Paridhi's electrifying robotics challenges—wars, races, mazes, and more... Click for thrilling opportunities!",
      ImageLink:
        "https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg",
      link: "/events/manual_robitics",
    },
    {
      TitleText: "Autonomous Robotics",
      Description:
      "Dive into Paridhi's thrilling autonomous robotics challenges. Click the card for an exciting array of opportunities!",
      ImageLink:
        "https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg",
      link: "/events/autonomous_robotics",
    },
    {
      TitleText: "Civil",
      Description:
      "Dive into Paridhi's captivating civil domain contests: treasure tracking, bridge making, and more. Click for thrilling opportunities in the field!",
      ImageLink:
        "https://t3.ftcdn.net/jpg/02/88/80/38/360_F_288803822_0CJ8L3gr6w6nGnUeje6pCllCX7s986xz.jpg",
      link: "/events/civil",
    },
    {
      TitleText: "Gaming ",
      Description:
      "Dive into Paridhi's sensational gaming tournaments featuring BGMI, FIFA, Valorant, and eFootball. Click to uncover thrilling opportunities in the world of gaming!",
      ImageLink:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      link: "/events/gaming",
    },
    {
      TitleText: "General",
      Description:
      "Dive into Paridhi's exciting array of general events, from carrom and table tennis to quizzes and chess. Click for exciting opportunities!",
      ImageLink:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      link: "/events/general",
    },
    {
      TitleText: "Electrical ",
      Description:
      "Dive into Paridhi's dynamic electrical domain events: Electroiquest, Powerblitz. Discover thrilling opportunities by clicking the card. Join us now!",
      ImageLink:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      link: "/events/electrical",
    },
  ];

  return (
    <StyledContainer>
      {eventDataArray.map((data, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: index * 0.2 }}
        >
          <Card
            link={data.link}
            ImageLink={data.ImageLink}
            TitleText={data.TitleText}
            Description={data.Description}
          />
        </motion.div>
      ))}
    </StyledContainer>
  );
};

export default Events;
