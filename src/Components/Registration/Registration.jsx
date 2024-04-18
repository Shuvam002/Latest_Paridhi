import React from "react";
import { Main } from "./Registration.styled";
import { useParams } from "react-router-dom";
import InfoBanner from "../InfoBanner/InfoBanner";

const DomainEvents = {
  Bug_blitz: {
    Image:
      "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300",
    title: "Bug blitz",
    teamSize: 1,
    fee: 50,
    Descriptions: `Multi-year 1v1 CP debugging contest open for all participants. Join to showcase your skills in competitive programming and hone your debugging abilities.`,
    rule: "https://drive.google.com/file/d/1MFENXkvm38r9udH9syUIiUyYacd21wJ5/view?usp=sharing",
  },
  code_quset: {
    Image:
      "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300",
    title: "Code quest",
    teamSize: 2,
    fee: 150,
    Descriptions: `Competitive Programming contest consists of two rounds: prelims and finals. Top performers in prelims advance to finals for a chance to win lucrative cash prizes. Open to all participants across all years, it promises an exhilarating challenge and rewards excellence in coding prowess.`,
    rule: "https://drive.google.com/file/d/1dM4AxU0ralbuXRPC0Yy8jP9sRxGE1J_R/view?usp=sharing",
  },
  // MobileAppDevelopment: {
  //   Image:
  //     "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   title: "Mobile App Development",
  //   teamSize: 4,
  //   fee: 250,
  //   Descriptions: `Open for all years. Mobile App Development Hackathon. <br />1. Participants must form teams of 4. <br />2. Participants will have 24 hours to develop a mobile app. <br />3. Judges will evaluate apps based on functionality, design, and innovation.`,
  // },
  codezen: {
    Image:
      "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300",
    title: "Codezen",
    teamSize: 2,
    fee: 100,
    Descriptions: `Join our exclusive CP contest tailored for first-year students and school attendees. The competition features two rounds: prelims and finals. Top performers advance to the finals for a chance to win enticing cash prizes. Don't miss this opportunity to showcase your skills and compete at the highest level!`,
    rule: "https://drive.google.com/file/d/1EP4AOF4C9kOFeG5EqFQgUM1nIL2CYj1Q/view?usp=sharing",
  },
  web_minds: {
    Image:
      "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300",
    title: "Web minds",
    teamSize: 2,
    fee: 100,
    Descriptions: `Engage in the Web Development Challenge spanning two rounds. Top performers advance to the finals, crafting captivating web pages. Finalists vie for cash prizes. Open to all years, this competition offers a platform to showcase skills, with excellence leading to recognition and rewards.`,
    rule: "https://drive.google.com/file/d/1EP4AOF4C9kOFeG5EqFQgUM1nIL2CYj1Q/view?usp=sharing",
  },
  triathlon: {
    Image:
      "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Triathlon",
    teamSize: 5,
    fee: 500,
    Descriptions: `"Join our bot racing contest, open to all! Click to sign up and learn the rules for this thrilling challenge. Let the excitement begin!"`,
    rule: "https://drive.google.com/file/d/1AiLKzuFaDTV1FNH-DWpw4c3zEeY8XyHD/view?usp=sharing",
  },
  robo_klassiker: {
    Image:
      "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Robo Klassiker",
    teamSize: 5,
    fee: 350,
    Descriptions: `Participate in our exclusive bot soccer contest! Bots compete for goals while avoiding penalties. Enroll now and familiarize yourself with the regulations!`,
    rule: "https://drive.google.com/file/d/1BQe107uZ0M0YT7A3458xjWO4iGj6fhfz/view?usp=sharing",
  },
  chakravyuh: {
    Image:
      "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Chakravyuh",
    teamSize: 1,
    fee: 50,
    Descriptions: `Compete in our maze-solving bot challenge: navigate tunnels and reach the exclusive destination. Click to register and learn the rules!`,
    rule: "https://drive.google.com/file/d/1h0SY0c43S8h_q-tHRhcqAA3Tvt2xc7nF/view?usp=sharing",
  },
  striker_clash: {
    Image:
      "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Striker Clash",
    teamSize: 1,
    fee: 40,
    Descriptions: `Join our exclusive Robo Carrom competition for all! Register now and uncover the rules for this thrilling event!`,
    rule: "https://drive.google.com/file/d/1UB-hJF209ej-4cJqilfy_0gDu9WNw1ki/view?usp=sharing",
  },
  line_trekker: {
    Image:
      "https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/science/us-robot-head.jpg",
    title: "Line Trekker",
    teamSize: 5,
    fee: 300,
    Descriptions: `Compete in our autonomous bot challenge! Navigate a unique path, solve puzzles, and reach the destination. Click to register and learn more!`,
    rule: "https://drive.google.com/file/d/14aZ7xP86NE54bNbzu7Wk011GWENIQZXO/view?usp=sharing",
  },
  setu_bandhan: {
    Image:
      "https://static.wixstatic.com/media/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg",
    title: "Setu bandhan",
    teamSize: 3,
    fee: "75(college) / 60(school)",
    Descriptions: `Craft a sturdy bridge with provided ice-cream sticks and glue. The strongest design, open to all years, wins! Register now to participate!`,
    rule: "https://drive.google.com/file/d/1MUOXxXL_KRz8TzHN6BCEU3xH-bUwspGv/view?usp=sharing",
  },
  trackOtreasure: {
    Image:
      "https://static.wixstatic.com/media/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg",
    title: "Track O Treasure",
    teamSize: 3,
    fee: "90(College) / 75(school)",
    Descriptions: `Embark on the challenge, solve riddles, and unearth the treasure in our exclusive treasure hunt adventure. Register now to uncover the rules and join the excitement!`,
    rule: "https://drive.google.com/file/d/1-pr-6ocmzwH-XRaUx8skRWWAtn9a4LzW/view?usp=sharing",
  },
  cad_O_mania: {
    Image:
      "https://static.wixstatic.com/media/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg",
    title: "Cad O mania",
    teamSize: 1,
    fee: 60,
    Descriptions: `ETake on the challenge: an AutoCAD drawing competition open to all. Click to register and uncover the competition rules. Join now and showcase your skills!`,
    rule: "https://drive.google.com/file/d/1NLg04SjDKFhYqFgy9pQyHnaqOJsRkbDp/view?usp=sharing",
  },
  mega_arch: {
    Image:
      "https://static.wixstatic.com/media/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg",
    title: "Mega Arch",
    teamSize: 5,
    fee: 150,
    Descriptions: `Build a load-bearing bridge using provided sand and bricks within a set time. The strongest design wins. Register for more details on this exciting challenge!`,
    rule: "https://drive.google.com/file/d/13nbgR0L5Lkf8mmQWeA-La8kbwOjVpMMw/view?usp=sharing",
  },
  valorent_lan: {
    Image:
      "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
    title: "Valorent Lan",
    teamSize: 0,
    fee: 0,
    Descriptions: `"Valorant: Where tactical prowess meets precise aim in dynamic multiplayer battles."`,
    rule: "",
  },
  bgmi_lan: {
    Image:
      "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
    title: "BGMI Lan",
    teamSize: 0,
    fee: 0,
    Descriptions: `BGMI: Experience strategic survival, intense firefights, and victory in immersive battlegrounds.`,
    rule: "",
  },
  eFootball: {
    Image:
      "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
    title: "E-Football",
    teamSize: 0,
    fee: 0,
    Descriptions: `E-Football: Dive into the virtual pitch with skill, strategy, and teamwork.`,
    rule: "",
  },
  fifa: {
    Image:
      "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
    title: "FIFA 24",
    teamSize: 0,
    fee: 0,
    Descriptions: `FIFA 2024: Showcase your football mastery in thrilling global competitions.`,
    rule: "",
  },
  carrom: {
    Image:
      "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
    title: "Carrom",
    teamSize: 2,
    fee: 80,
    Descriptions: `Experience the thrill of a carrom tournament. Click to register and uncover the rules for this exciting event.`,
    rule: "",
  },
  table_tennis: {
    Image:
      "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
    title: "Table Tennis",
    teamSize: 1,
    fee: 70,
    Descriptions: `Embark on a thrilling table tennis journey to rediscover childhood joy. Click to register and uncover the rules today!`,
    rule: "",
  },
  binge_quiz: {
    Image:
      "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
    title: "Binge Quiz",
    teamSize: 2,
    fee: 40,
    Descriptions: `Embark on an intriguing quiz journey! Click to register and unveil the rules of this captivating binge-worthy challenge.`,
    rule: "https://drive.google.com/file/d/1NNiXESBPHj7p2nbuIMjUM9E7MJwgkvEl/view?usp=sharing",
  },
  chess: {
    Image:
      "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
    title: "Chess",
    teamSize: 1,
    fee: 30,
    Descriptions: `Register for a chess competition to test your skills and intellect. Click to unravel the challenge and learn the rules elegantly.`,
    rule: "",
  },
  darts: {
    Image:
      "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
    title: "Darts",
    teamSize: 1,
    fee: 30,
    Descriptions: `Test your aim with dart challenges! Click to register and learn the rules. Unveil your aiming prowess in this thrilling game.`,
    rule: "",
  },
  electriQuest: {
    Image:
      "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2010/04/electrical_component/9636951-4-eng-GB/Electrical_component_pillars.jpg",
    title: "ElectriQuest",
    teamSize: 0,
    fee: 0,
    Descriptions: `Dive into Paridhi's dynamic electrical domain events: Electroquest, Powerblitz. Discover thrilling opportunities by clicking the card. Join us now!`,
    rule: "",
  },
  powerBlitz: {
    Image:
      "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2010/04/electrical_component/9636951-4-eng-GB/Electrical_component_pillars.jpg",
    title: "PowerBlitz",
    teamSize: 0,
    fee: 0,
    Descriptions: `Dive into Paridhi's dynamic electrical domain events: Electroquest, Powerblitz. Discover thrilling opportunities by clicking the card. Join us now!`,
    rule: "",
  },
};

const Registration = () => {
  const { EvnetRegistration } = useParams();
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
            rule={data.rule}
          />
        )}
      </Main>
    </>
  );
};
export default Registration;
