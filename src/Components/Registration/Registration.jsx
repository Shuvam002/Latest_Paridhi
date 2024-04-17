import React from "react";
import { Main } from "./Registration.styled";
import { useParams } from "react-router-dom";
import InfoBanner from "../InfoBanner/InfoBanner";
const Registration = () => {
  const { EvnetRegistration } = useParams();
  const DomainEvents = {
    Bug_blitz: {
      Image:
        "https://plus.unsplash.com/premium_photo-1673709635882-3bd099a72359?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bug blitz",
      teamSize: 1,
      fee: 50,
      Descriptions: `Multi-year 1v1 CP debugging contest open for all participants. Join to showcase your skills in competitive programming and hone your debugging abilities.`,
    },
    code_quset: {
      Image:
        "https://images.unsplash.com/photo-1484662020986-75935d2ebc66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Code quest",
      teamSize: 2,
      fee: 150,
      Descriptions: `Competitive Programming contest consists of two rounds: prelims and finals. Top performers in prelims advance to finals for a chance to win lucrative cash prizes. Open to all participants across all years, it promises an exhilarating challenge and rewards excellence in coding prowess.`,
    },
    MobileAppDevelopment: {
      Image:
        "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mobile App Development",
      teamSize: 4,
      fee: 250,
      Descriptions: `Open for all years. Mobile App Development Hackathon. <br />1. Participants must form teams of 4. <br />2. Participants will have 24 hours to develop a mobile app. <br />3. Judges will evaluate apps based on functionality, design, and innovation.`,
    },
    codezen: {
      Image:
        "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Codezen",
      teamSize: 2,
      fee: 100,
      Descriptions: `Join our exclusive CP contest tailored for first-year students and school attendees. The competition features two rounds: prelims and finals. Top performers advance to the finals for a chance to win enticing cash prizes. Don't miss this opportunity to showcase your skills and compete at the highest level!`,
    },
    web_minds: {
      Image:
        "https://images.unsplash.com/photo-1490971588422-52f6262a237a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Web minds",
      teamSize: 2,
      fee: 100,
      Descriptions: `Engage in the Web Development Challenge spanning two rounds. Top performers advance to the finals, crafting captivating web pages. Finalists vie for cash prizes. Open to all years, this competition offers a platform to showcase skills, with excellence leading to recognition and rewards.`,
    },

  };

  const data = DomainEvents[EvnetRegistration];

  return (
    <>
      <Main>
        {data && (
          <InfoBanner
            key={data.title}
            Image={data.Image}
            title={data.title}
            fee={data.fee}
            teamSize={data.teamSize}
            Descriptions={data.Descriptions}
          />
        )}
      </Main>
    </>
  );
};

export default Registration;
