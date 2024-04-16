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

const InfoBanner = ({ title, fee, teamSize, Descriptions, Image }) => {
  const openRegistration = (event) => {
    event.preventDefault();
    window.location.href = "/login";
  };
  const openRules = () => {
    window.open("https://www.google.com");
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
            <RegisterBtn onClick={openRegistration}>Register Now</RegisterBtn>
            <RegisterBtn onClick={openRules}>Rules</RegisterBtn>
          </ButtonSection>
        </BannerInfo>
      </Banner>
    </>
  );
};

export default InfoBanner;
