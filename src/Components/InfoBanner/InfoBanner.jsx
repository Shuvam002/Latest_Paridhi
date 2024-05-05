import { Link, useLocation, useNavigate } from "react-router-dom";
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

const InfoBanner = ({
  title,
  fee,
  teamSize,
  Descriptions,
  Image,
  rule,
  regLink,
}) => {
  const openRules = () => {
    rule ? window.open(rule) : NaN;
  };
<<<<<<< HEAD
=======

  const navigate = useNavigate();

>>>>>>> c92f65335bd6755e862b2494decf1a6e6f9f5272
  return (
    <Banner>
      <BannerImage $Image={Image}></BannerImage>
      <BannerInfo>
        <Title>{title}</Title>
        <RegFee>Registration Fee: {fee}</RegFee>
        <TeamSize>Team Size: {teamSize}</TeamSize>
        <Description>{Descriptions}</Description>
        <ButtonSection>
          <RegisterBtn  to={regLink}>Register</RegisterBtn>
          {/* <RegisterBtn style={{cursor:"not-allowed"}} to={""}>Registration Starts Soon</RegisterBtn> */}

          {/* <RegisterBtn
              style={{
                background: "#151515",
                cursor: "not-allowed",
                padding: "10px",
              }}

              // disabled

            >
              Registration opens soon
            </RegisterBtn> */}
          {rule != null ? (
            rule == "Rules coming soon" ? (
              <RegisterBtn style={{ cursor: "not-allowed" }}>
                {rule}
              </RegisterBtn>
            ) : (
              <RegisterBtn onClick={openRules}>Rule</RegisterBtn>
            )
          ) : (
            <></>
          )}
        </ButtonSection>
      </BannerInfo>
    </Banner>
  );
};

export default InfoBanner;
