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
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum.",
        ImageLink:
          "https://images.unsplash.com/photo-1585079374502-415f8516dcc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/coding/Bug_blitz",
      },

      {
        TitleText: "Code quest",
        Description:
          "Join us for a hands-on workshop exploring the fundamentals of graphic design.",
        ImageLink:
          "https://images.unsplash.com/photo-1535136104956-115a2cd67fc4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/design/code_quset",
      },

      {
        TitleText: "Codezen",
        Description:
          "Compete with teams from around the world in this thrilling robotics competition.",
        ImageLink:
          "https://images.unsplash.com/photo-1523329110005-297cf111f8de?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/robotics/codezen",
      },

      {
        TitleText: "Web minds",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/web_minds",
      },
    ],
    manual_robitics: [
      {
        TitleText: "Triathlon",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Robo Klassiker",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Chakravyuh",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Striker Clash",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
    ],
    autonomous_robotics: [
      {
        TitleText: "Line Trekker",
        Description:
          "Join us for a hands-on workshop exploring the fundamentals of graphic design.",
        ImageLink:
          "https://images.unsplash.com/photo-1535136104956-115a2cd67fc4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/design/UIUXDesign",
      },
    ],
    civil: [
      {
        TitleText: "Setu bandhan",
        Description:
          "Compete with teams from around the world in this thrilling robotics competition.",
        ImageLink:
          "https://images.unsplash.com/photo-1523329110005-297cf111f8de?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/robotics/MobileAppDevelopment",
      },
      {
        TitleText: "Track O Treasure",
        Description:
          "Compete with teams from around the world in this thrilling robotics competition.",
        ImageLink:
          "https://images.unsplash.com/photo-1523329110005-297cf111f8de?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/robotics/MobileAppDevelopment",
      },
      {
        TitleText: "CAD_O_MANIA",
        Description:
          "Compete with teams from around the world in this thrilling robotics competition.",
        ImageLink:
          "https://images.unsplash.com/photo-1523329110005-297cf111f8de?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/robotics/MobileAppDevelopment",
      },
      {
        TitleText: "Mega Arch",
        Description:
          "Compete with teams from around the world in this thrilling robotics competition.",
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
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Table Tennis",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Binge Quiz",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Chess",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },
      {
        TitleText: "Darts",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
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
