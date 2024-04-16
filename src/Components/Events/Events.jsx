import React from "react";
import { StyledContainer } from "./Events.styled";
import Card from "../Cards/Card";
import { motion } from "framer-motion";

const Events = () => {
  const eventDataArray = [
    {
      TitleText: "CODING",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum.",
      ImageLink:
        "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300",
      link: "/events/coding",
    },
    {
      TitleText: "Manual_Robotics",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum.",
      ImageLink:
        "https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg",
      link: "/events/manual_robitics",
    },
    {
      TitleText: "Autonomous Robotics",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum.",
      ImageLink:
        "https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg",
      link: "/events/autonomous_robotics",
    },
    {
      TitleText: "Civil",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum.",
      ImageLink:
        "https://t3.ftcdn.net/jpg/02/88/80/38/360_F_288803822_0CJ8L3gr6w6nGnUeje6pCllCX7s986xz.jpg",
      link: "/events/civil",
    },
    {
      TitleText: "Gaming ",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum.",
      ImageLink:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      link: "/events/gaming",
    },
    {
      TitleText: "General",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum.",
      ImageLink:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      link: "/events/general",
    },
    {
      TitleText: "Electrical ",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum.",
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
