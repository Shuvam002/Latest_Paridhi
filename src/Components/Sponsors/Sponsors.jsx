import React from "react";
import {
  Container,
  Card as StyledCard,
  CardImage,
  CardTitle,
  CardContainer,
  CardText,
  Button,
} from "./Sponsors.styled";
import { motion } from "framer-motion";


const Sponsors2 = () => {
  return (
    <Container>
      <CardContainer className="row row-cols-1 row-cols-md-4 g-5">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}
        >
          <StyledCard data-tilt>
            <CardImage
              src="https://e0.pxfuel.com/wallpapers/66/921/desktop-wallpaper-coca-cola-coca-cola-logo.jpg"
              alt="Aiony Haust"
            />
            <CardTitle>TITLE SPONSER</CardTitle>
            {/* <CardText>Available for Hire</CardText> */}
            {/* <Button href="https://unsplash.com/photos/3TLl_97HNJo" target="_blank" rel="noopener noreferrer">Unsplash</Button> */}
          </StyledCard>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}
        >
          <StyledCard data-tilt>
            <CardImage
              src="https://e0.pxfuel.com/wallpapers/66/921/desktop-wallpaper-coca-cola-coca-cola-logo.jpg"
              alt="Aiony Haust"
            />
            <CardTitle>TITLE SPONSER</CardTitle>
            {/* <CardText>Available for Hire</CardText> */}
            {/* <Button href="https://unsplash.com/photos/3TLl_97HNJo" target="_blank" rel="noopener noreferrer">Unsplash</Button> */}
          </StyledCard>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}
        >
          <StyledCard data-tilt>
            <CardImage
              src="https://e0.pxfuel.com/wallpapers/66/921/desktop-wallpaper-coca-cola-coca-cola-logo.jpg"
              alt="Aiony Haust"
            />
            <CardTitle>TITLE SPONSER</CardTitle>
            {/* <CardText>Available for Hire</CardText> */}
            {/* <Button href="https://unsplash.com/photos/3TLl_97HNJo" target="_blank" rel="noopener noreferrer">Unsplash</Button> */}
          </StyledCard>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}
        >
          <StyledCard data-tilt>
            <CardImage
              src="https://e0.pxfuel.com/wallpapers/66/921/desktop-wallpaper-coca-cola-coca-cola-logo.jpg"
              alt="Aiony Haust"
            />
            <CardTitle>TITLE SPONSER</CardTitle>
            {/* <CardText>Available for Hire</CardText> */}
            {/* <Button href="https://unsplash.com/photos/3TLl_97HNJo" target="_blank" rel="noopener noreferrer">Unsplash</Button> */}
          </StyledCard>
        </motion.div>
      </CardContainer>
    </Container>
  );
};

export default Sponsors2;
