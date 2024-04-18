// cards.jsx
import { useState } from "react";
import {
  Background,
  CardContainer1,
  CardContainer2,
  CardWrapper,
  ImageContainer,
} from "./Merchandise.styled";
import whiteFrontImage from "./assets/white-front.png";
import whiteBackImage from "./assets/white-back.png";
import blackFrontImage from "./assets/black-front.png";
import blackBackImage from "./assets/black-back.png";
import { motion } from "framer-motion";

const Merchandise = ({ title, content }) => {
  const [selectedImageIndex1, setSelectedImageIndex1] = useState(0);
  const [selectedImageIndex2, setSelectedImageIndex2] = useState(0);

  const handleDotClick1 = (index) => {
    setSelectedImageIndex1(index);
  };

  const handleDotClick2 = (index) => {
    setSelectedImageIndex2(index);
  };

  const openFormInNewWindow = () => {
    window.open("https://forms.gle/ms67u7MocZEnPJGP7", "_blank");
  };

  return (
    <Background>
      <CardWrapper>
        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ ease: "ease", duration: 0.3, delay: 0.1 }}
        >
          <CardContainer1>
            <ImageContainer>
              <img
                src={whiteFrontImage}
                alt=""
                style={{
                  display: selectedImageIndex1 === 0 ? "block" : "none",
                }}
              />{" "}
              {/* Using the imported image */}
              <img
                src={whiteBackImage}
                alt=""
                style={{
                  display: selectedImageIndex1 === 1 ? "block" : "none",
                }}
              />{" "}
              {/* Using the imported image */}
            </ImageContainer>
            <div>
              <span
                onClick={() => handleDotClick1(0)}
                style={{
                  cursor: "pointer",
                  color: selectedImageIndex1 === 1 ? "grey" : "white",
                  fontSize: "1.5rem",
                }}
              >
                ●
              </span>
              <span
                onClick={() => handleDotClick1(1)}
                style={{
                  cursor: "pointer",
                  marginLeft: "0.5rem",
                  color: selectedImageIndex1 === 0 ? "grey" : "white",
                  fontSize: "1.5rem",
                }}
              >
                ●
              </span>
            </div>
            <div>
              <p>Try this awesome White merchandise</p>
              <div className="price">
                <del> Rs 349</del> Rs 299
              </div>

              <button style={{ cursor: "pointer" }} onClick={openFormInNewWindow}>Buy Now</button>
            </div>
          </CardContainer1>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}
        >
          <CardContainer2>
            <ImageContainer>
              <img
                src={blackFrontImage}
                alt=""
                style={{
                  display: selectedImageIndex2 === 0 ? "block" : "none",
                }}
              />{" "}
              {/* Using the imported image */}
              <img
                src={blackBackImage}
                alt=""
                style={{
                  display: selectedImageIndex2 === 1 ? "block" : "none",
                }}
              />{" "}
              {/* Using the imported image */}
            </ImageContainer>
            <div>
              <span
                onClick={() => handleDotClick2(0)}
                style={{
                  cursor: "pointer",
                  color: selectedImageIndex2 === 1 ? "grey" : "white",
                  fontSize: "1.5rem",
                }}
              >
                ●
              </span>
              <span
                onClick={() => handleDotClick2(1)}
                style={{
                  cursor: "pointer",
                  marginLeft: "0.5rem",
                  color: selectedImageIndex2 === 0 ? "grey" : "white",
                  fontSize: "1.5rem",
                }}
              >
                ●
              </span>
            </div>
            <div>
              <p>Try this awesome Black merchandise</p>
              <div className="price">
                <del>Rs 349</del> Rs 299
              </div>

              <button style={{ cursor: "pointer" }} onClick={openFormInNewWindow}>Buy Now</button>
            </div>
          </CardContainer2>
        </motion.div>
      </CardWrapper>
    </Background>
  );
};

export default Merchandise;
