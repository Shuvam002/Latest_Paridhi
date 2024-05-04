import React from "react";
import { StyledContainer,BottomNavbar,StyledLink } from "./Robotics.styled";
import Card from "../Cards/Card";
import { motion } from "framer-motion";
import { GiChessQueen, GiBattleGear  } from "react-icons/gi";
import { FaUserGear } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const Robotics = () => {
    const RoboticsData=useParams();
    const eventDataArray = [
        {
            TitleText: "Manual Robotics",
            Description:
              "Embark on Paridhi's electrifying robotics challenges, races, mazes, and more... Click for thrilling opportunities!",
            ImageLink:
              "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/events/manual_robitics",
          },
          {
            TitleText: "Combat Robotics",
            Description:
              "Embark on Paridhi's electrifying robotics challenges—wars and more... Click for thrilling opportunities!",
            ImageLink:
              "https://i0.wp.com/makezine.com/wp-content/uploads/2022/04/10-rules-robo-combat__JB62062_3-Jon-C-R-Bennett.jpg?fit=1200%2C800&ssl=1",
            link: "/events/combat_robitics",
          },
          
          { 
            TitleText: "Autonomous Robotics",
            Description:
              "Dive into Paridhi's thrilling autonomous robotics challenges. Click the card for an exciting array of opportunities!",
            ImageLink:
              "https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/science/us-robot-head.jpg",
            link: "/events/autonomous_robotics",
          },
          { 
            TitleText: "Combo",
            Description:
              "Dive into Paridhi's thrilling autonomous robotics challenges. Click the card for an exciting array of opportunities!",
            ImageLink:
              "https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/science/us-robot-head.jpg",
            link: "/events/combo_robotics",
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

export default Robotics
