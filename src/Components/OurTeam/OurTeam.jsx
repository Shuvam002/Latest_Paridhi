import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { team_data } from "./output";
import {
  StyledContainer,
  Container,
  CardContainer,
  Image,
  Title,
  SocialMedia,
} from "../OurTeam/OurTeam.styled";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1, scale: 0 },
  transition: { type: "spring", stiffness: 1000 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const OurTeam = () => {
  const compareMembers = (a, b) => {
    // First, sort by year in descending order (4th years first)
    if (a.Year > b.Year) return -1;
    if (a.Year < b.Year) return 1;

    // If years are the same, then sort alphabetically by name
    if (a.Name.toLowerCase() < b.Name.toLowerCase()) return -1;
    if (a.Name.toLowerCase() > b.Name.toLowerCase()) return 1;

    return 0;
  };

  const sortedTeamData = team_data.sort(compareMembers);

  return (
    <StyledContainer>
      <CardContainer>
        {sortedTeamData.map((data, index) => (
          <Container key={index}>
            <motion.div
              id="mem_card"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true,amount:0.5}}
            >
              <Image>
                {data.Image && data.Image.includes("id=") && (
                  <img
                    src={`https://drive.google.com/thumbnail?id=${
                      data.Image.split("id=")[1]
                    }`}
                    alt={data.Name}
                  />
                )}
              </Image>
              <Title>
                <h1 style={{ textWrap: "balance", fontSize: "1.2rem" }}>
                  {data.Name}
                </h1>
                <p>{data.Year} Year</p>
              </Title>
              <SocialMedia>
                <div className="icons">
                  <a
                    href={data.insta_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                  </a>
                </div>
                <div className="icons">
                  <a
                    href={data.fb_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="icon" />
                  </a>
                </div>
                <div className="icons">
                  <a
                    href={data.li_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                  </a>
                </div>
                <div className="icons">
                  <a
                    href={data.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  </a>
                </div>
              </SocialMedia>
            </motion.div>
          </Container>
        ))}
      </CardContainer>
    </StyledContainer>
  );
};

export default OurTeam;
