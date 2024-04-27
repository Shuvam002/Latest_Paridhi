import { Link, useLocation } from "react-router-dom";
import {
  Banner,
  BannerImage,
  BannerInfo,
  Title,
  RegFee,
  TeamSize,
  Description,
  RegisterBtn,
  ButtonSection,
} from "./InfoBanner.styled";

const InfoBanner = ({ title, fee, teamSize, Descriptions, Image, rule }) => {
  const openRules = () => {
    rule ? window.open(rule) : NaN;
  };

  return (
    <>
      <Banner>
        <BannerImage $Image={Image}></BannerImage>
        <BannerInfo>
          <Title>{title}</Title>
          <RegFee>Registration Fee: {fee}</RegFee>
          <TeamSize>Team Size: {teamSize}</TeamSize>
          <Description>{Descriptions}</Description>
          <ButtonSection>
            {/* <RegisterBtn> */}
            {/* <Link to={register} style={{ whiteSpace: 'nowrap', textDecoration: 'none' }}> */}
            <RegisterBtn
              style={{
                background: "#151515",
                cursor: "not-allowed",
                padding: "10px",
              }}
              disabled
            >
              Registration opens soon
            </RegisterBtn>
            {/* </Link>  */}
            {/* </RegisterBtn> */}
            <RegisterBtn onClick={openRules}>
              {!rule ? "Rules will Be given soon" : "Rule"}
            </RegisterBtn>
          </ButtonSection>
        </BannerInfo>
      </Banner>
    </>
  );
};

export default InfoBanner;
