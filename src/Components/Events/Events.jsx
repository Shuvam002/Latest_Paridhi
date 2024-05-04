import React from "react";
import { StyledContainer,BottomNavbar,StyledLink } from "./Events.styled";
import Card from "../Cards/Card";
import { motion } from "framer-motion";
import { GiChessQueen, GiBattleGear  } from "react-icons/gi";
import { FaUserGear } from "react-icons/fa6";


const Events = () => {
  const eventDataArray = [
    {
      TitleText: "CODING",
      Description:

        "Explore Paridhi's exhilarating coding contests—CP, web, debugging—tailored for college as well as school students. Click the card for exciting opportunities!",

      ImageLink:
        "https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg",
      link: "/events/coding",
    },
    {
      TitleText: "Robotics",
      Description:
        "Embark on Paridhi's electrifying robotics challenges, races, mazes, and more... Click for thrilling opportunities!",
      ImageLink:
        "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/events/Robotics",
    },
    
    {
      TitleText: "Civil",
      Description:
        "Dive into Paridhi's captivating civil domain contests: treasure tracking, bridge making, and more. Click for thrilling opportunities in the field!",
      ImageLink:
        "https://static.wixstatic.com/media/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg",
      link: "/events/civil",
    },
    {
      TitleText: "Electrical ",
      Description:
        "Dive into Paridhi's dynamic electrical domain events: Electroiquest, Powerblitz. Discover thrilling opportunities by clicking the card. Join us now!",
      ImageLink:
        "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2010/04/electrical_component/9636951-4-eng-GB/Electrical_component_pillars.jpg",
      link: "/events/electrical",
    },
    {
      TitleText: "Gaming ",
      Description:
        "Dive into Paridhi's sensational gaming tournaments featuring BGMI, FIFA, Valorant, and eFootball. Click to uncover thrilling opportunities in the world of gaming!",
      ImageLink:
        "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
      link: "/events/gaming",
    },
    {
      TitleText: "General",
      Description:
        "Dive into Paridhi's exciting array of general events, from carrom and table tennis to quizzes and chess. Click for exciting opportunities!",
      ImageLink:
        "https://images.unsplash.com/photo-1628867578021-c2eaad2ce46c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/events/general",
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
      <BottomNavbar>
          <StyledLink to="/events/coding"><i class="ri-code-s-slash-line"></i></StyledLink>
          <StyledLink to="/events/manual_robitics"><i class="ri-robot-2-line"></i></StyledLink>
          <StyledLink to="/events/combat_robitics"><GiBattleGear /></StyledLink>
          <StyledLink to="/events/autonomous_robotics"><FaUserGear /></StyledLink>
          <StyledLink to="/events/civil"><i class="ri-building-2-line"></i></StyledLink>
          <StyledLink to="/events/electrical"><i class="ri-flashlight-line"></i></StyledLink>
          <StyledLink to="/events/gaming"><i class="ri-gamepad-line"></i></StyledLink>
          <StyledLink to="/events/general"><GiChessQueen /></StyledLink>
      </BottomNavbar>
    </StyledContainer>
  );
};

export default Events;
