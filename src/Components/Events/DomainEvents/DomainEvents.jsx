import { Main } from "./DomainEvents.styled";
import { useParams } from "react-router-dom";
import Card from "../../Cards/Card";
import { motion } from "framer-motion";

const DomainEvents = () => {
  const { Domain } = useParams();
  const Domains = {
    coding: [
      {
        TitleText: "Bug blitz",
        Description:
          "Join our CP debugging competition, open to all, featuring on-the-spot challenges. Click now to register for this exclusive event!",
        ImageLink:
          "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300",
        link: "/events/coding/Bug_blitz",
      },

      {
        TitleText: "Code quest",
        Description:
          "Join an exclusive two-round cp competition, comprising prelims and finals, open to all years. Click here to register now!",
        ImageLink:
          "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300",
        link: "/events/coding/code_quset",
      },

      {
        TitleText: "Codezen",
        Description:
          "Exclusive cp & mcq competition with two rounds, prelims and finals, tailored for school students and first-year participants. Click here to register!",
        ImageLink:
          "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300",
        link: "/events/coding/codezen",
      },

      {
        TitleText: "Web minds",
        Description:
          "Join our website development competition featuring prelims and finals, open to all, with registration and rules available here",
        ImageLink:
          "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300",
        link: "/events/coding/web_minds",
      },
    ],
    manual_robitics: [
      {
        TitleText: "Triathlon",
        Description:
          "Join our exclusive bot racing competition, open to all years! Click to register and learn the rules for the challenge.",
        ImageLink:
          "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/manual_robitics/triathlon",
      },
      {
        TitleText: "Robo Klassiker",
        Description:
          "Join our exclusive bot soccer competition! Bots vie for goals while minimizing penalties. Register now and learn the rules!",
        ImageLink:
          "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/manual_robitics/robo_klassiker",
      },
      {
        TitleText: "Chakravyuh",
        Description:
          "Compete in the maze-solving bot challenge, navigate tunnels, reach the exclusive destination. Click to register and learn rules!",
        ImageLink:
          "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/manual_robitics/chakravyuh",
      },
      {
        TitleText: "Striker Clash",
        Description:
          "Join the exclusive Robo Carrom competition for all, register now, and discover the rules for this thrilling event!",
        ImageLink:
          "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/manual_robitics/striker_clash",
      },
    ],
    autonomous_robotics: [
      {
        TitleText: "Line Trekker",
        Description:
          "Compete in our autonomous bot challenge, navigate a unique path, solve puzzles, and reach the destination. Click to register and learn more!",
        ImageLink:
          "https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/science/us-robot-head.jpg",
        link: "/events/autonomous_robotics/line_trekker",
      },
    ],
    civil: [
      {
        TitleText: "Setu bandhan",
        Description:
          "Create a sturdy bridge using provided ice-cream sticks and glue; the strongest design, exclusive for all years, wins. Register now!",
        ImageLink:
          "https://static.wixstatic.com/media/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg",
        link: "/events/civil/setu_bandhan",
      },
      {
        TitleText: "Track O Treasure",
        Description:
          "Unravel the challenge, solve riddles, and discover the treasure in this exclusive treasure hunt adventure. Register now and learn the rules!",
        ImageLink:
          "https://static.wixstatic.com/media/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg",
        link: "/events/civil/trackOtreasure",
      },
      {
        TitleText: "CAD_O_MANIA",
        Description:
          "Embark on the challenge: an AutoCAD drawing competition open to all. Click to register and unveil the competition rules.",
        ImageLink:
          "https://static.wixstatic.com/media/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg",
        link: "/events/civil/cad_O_mania",
      },
      {
        TitleText: "Mega Arch",
        Description:
          "Construct a load-bearing bridge using provided sand and bricks within a set time. The most robust design wins. Register for details.",
        ImageLink:
          "https://static.wixstatic.com/media/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg",
        link: "/events/civil/mega_arch",
      },
    ],
    gaming: [
      {
        TitleText: "Valorant Lan",
        Description:
          "Valorant: Tactical prowess meets precise aim in dynamic multiplayer battles.",
        ImageLink:
          "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
        link: "/events/gaming/valorent_lan",
      },
      {
        TitleText: "Bgmi Lan",
        Description:
          "BGMI: Strategic survival, intense firefights, and victory in immersive battlegrounds.",
        ImageLink:
          "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
        link: "/events/gaming/bgmi_lan",
      },
      {
        TitleText: "E-football",
        Description:
          "E-Football: Experience the virtual pitch with skill, strategy, and teamwork.",
        ImageLink:
          "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
        link: "/events/gaming/eFootball",
      },
      {
        TitleText: "Fifa 24",
        Description:
          "FIFA 2024: Unleash your football mastery in thrilling global competitions.",
        ImageLink:
          "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
        link: "/events/gaming/fifa",
      },
    ],
    general: [
      {
        TitleText: "Carrom",
        Description:
          "Experience the thrill of a carrom tournament. Click to register and uncover the rules for this exciting event.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/general/carrom",
      },
      {
        TitleText: "Table Tennis",
        Description:
          "Embark on a thrilling table tennis journey to rediscover your childhood joy. Click to register and uncover the rules today!",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/general/table_tennis",
      },
      {
        TitleText: "Binge Quiz",
        Description:
          "Embark on an intriguing quiz journey! Click to register and unveil the rules of this captivating binge-worthy challenge.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/general/binge_quiz",
      },
      {
        TitleText: "Chess",
        Description:
          "Register for a chess competition to test your skills & intellect. Click to unravel the challenge and learn the rules elegantly.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/general/chess",
      },
      {
        TitleText: "Darts",
        Description:
          "Test your aim with dart challenges! Click to register and learn the rules. Unveil your aiming prowess in this thrilling game.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/general/darts",
      },
    ],
    electrical: [
      {
        TitleText: "ElectriQuest",
        Description:
          "Dive into Paridhi's dynamic electrical domain events: Electroquest, Powerblitz. Discover thrilling opportunities by clicking the card. Join us now!",
        ImageLink:
          "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2010/04/electrical_component/9636951-4-eng-GB/Electrical_component_pillars.jpg",
        link: "/events/electrical/electriQuest",
      },
      {
        TitleText: "PowerBlitz",
        Description:
          "Dive into Paridhi's dynamic electrical domain events: Electroquest, Powerblitz. Discover thrilling opportunities by clicking the card. Join us now!",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/electrical/powerBlitz",
      },
    ],
  };

  return (
    <>
      <Main>
        {Domains[Domain] &&
          Domains[Domain].map((data, index) => (
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
              <Card
                key={data.TitleText}
                TitleText={data.TitleText}
                Description={data.Description}
                ImageLink={data.ImageLink}
                link={data.link}
              />
            </motion.div>
          ))}
      </Main>
    </>
  );
};

export default DomainEvents;
