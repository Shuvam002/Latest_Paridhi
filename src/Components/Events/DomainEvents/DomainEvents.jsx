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
          "https://images.unsplash.com/photo-1585079374502-415f8516dcc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/coding/Bug_blitz",
      },

      {
        TitleText: "Code quest",
        Description:
          "Join an exclusive two-round competition, comprising prelims and finals, open to all years. Click here to register now!",
        ImageLink:
          "https://images.unsplash.com/photo-1535136104956-115a2cd67fc4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/design/code_quset",
      },

      {
        TitleText: "Codezen",
        Description:
          "Exclusive competition with two rounds, prelims and finals, tailored for school students and first-year participants. Click here to register!",
        ImageLink:
          "https://images.unsplash.com/photo-1523329110005-297cf111f8de?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/robotics/codezen",
      },

      {
        TitleText: "Web minds",
        Description:
          "Join our website development competition featuring prelims and finals, open to all, with registration and rules available here",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/web_minds",
      },
    ],
    manual_robitics: [
      {
        TitleText: "Triathlon",
        Description:
        "Join our exclusive bot racing competition, open to all years! Click to register and learn the rules for the challenge.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Robo Klassiker",
        Description:
        "Join our exclusive bot soccer competition! Bots vie for goals while minimizing penalties. Register now and learn the rules!",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Chakravyuh",
        Description:
        "Compete in the maze-solving bot challenge, navigate tunnels, reach the exclusive destination. Click to register and learn rules!",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Striker Clash",
        Description:
          "Join the exclusive Robo Carrom competition for all, register now, and discover the rules for this thrilling event!",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
    ],
    autonomous_robotics: [
      {
        TitleText: "Line Trekker",
        Description:
        "Compete in our autonomous bot challenge, navigate a unique path, solve puzzles, and reach the destination. Click to register and learn more!",
        ImageLink:
          "https://images.unsplash.com/photo-1535136104956-115a2cd67fc4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/design/UIUXDesign",
      },
    ],
    civil: [
      {
        TitleText: "Setu bandhan",
        Description:
          "Create a sturdy bridge using provided ice-cream sticks and glue; the strongest design, exclusive for all years, wins. Register now!",
        ImageLink:
          "https://images.unsplash.com/photo-1523329110005-297cf111f8de?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/robotics/MobileAppDevelopment",
      },
      {
        TitleText: "Track O Treasure",
        Description:
        "Unravel the challenge, solve riddles, and discover the treasure in this exclusive treasure hunt adventure. Register now and learn the rules!",
        ImageLink:
          "https://images.unsplash.com/photo-1523329110005-297cf111f8de?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/robotics/MobileAppDevelopment",
      },
      {
        TitleText: "CAD_O_MANIA",
        Description:
          "Embark on the challenge: an AutoCAD drawing competition open to all. Click to register and unveil the competition rules.",
        ImageLink:
          "https://images.unsplash.com/photo-1523329110005-297cf111f8de?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/robotics/MobileAppDevelopment",
      },
      {
        TitleText: "Mega Arch",
        Description:
        "Construct a load-bearing bridge using provided sand and bricks within a set time. The most robust design wins. Register for details.",
        ImageLink:
          "https://images.unsplash.com/photo-1523329110005-297cf111f8de?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/robotics/MobileAppDevelopment",
      },
    ],
    gaming: [
      {
        TitleText: "Valorant Lan",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Bgmi Lan",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "E-football",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Fifa 24",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
    ],
    general: [
      {
        TitleText: "Carrom",
        Description:
          "Experience the thrill of a carrom tournament. Click to register and uncover the rules for this exciting event.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Table Tennis",
        Description:
          "Embark on a thrilling table tennis journey to rediscover your childhood joy. Click to register and uncover the rules today!",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Binge Quiz",
        Description:
        "Embark on an intriguing quiz journey! Click to register and unveil the rules of this captivating binge-worthy challenge.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Chess",
        Description:
        "Register for a chess competition to test your skills & intellect. Click to unravel the challenge and learn the rules elegantly.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Darts",
        Description:
        "Test your aim with dart challenges! Click to register and learn the rules. Unveil your aiming prowess in this thrilling game.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
    ],
    electrical: [
      {
        TitleText: "ElectriQuest",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "PowerBlitz",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
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
