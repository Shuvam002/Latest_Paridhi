import { useState, useEffect } from "react";
import {
  StyledContainer,
  Domains,
  MainInfo,
  CardsSection,
} from "./Profile.styled";

function showCardHandler(obj) {
  for (let key in obj) {
    if (obj[key]) {
      return true;
    }
  }
  return false;
}

function showOptionsHandler(obj) {
  let elements = [];
  for (let key in obj) {
    if (obj[key] !== null) {
      elements.push(<h1 key={key}>{` ${key} : ${obj[key]}`}</h1>);
    }
  }
  return elements;
}

const Profile = () => {
  let testUserData = null;
  const backendRequest = async () => {
    try {
      const GID = JSON.parse(localStorage.getItem("userGID"));
      const response = await axios.get(`/your-backend-endpoint/${GID}`);
      return (testUserData = JSON.parse(response.data) || null);
    } catch (error) {
      console.error("Error fetching data: >>>>", error);
    }
  };

  useEffect(() => {
    backendRequest();
  }, []);

  const {
    id,
    name,
    college,
    year,
    department,
    roll,
    email,
    phoneNumber,
    gid,
    megaArchTid,
    setuBandhanTid,
    trackoteasureTid,
    cp1styearTid,
    webTid,
    electrical1Tid,
    electrical2Tid,
    roboraceTid,
    roboSoccerTid,
    roboWar8kgTid,
    roboWar15kgTid,
    lfrtid,
    gaming1Tid,
    gaming2Tid,
    gaming3Tid,
  } = testUserData || {};

  const domainCivil = {
    "Mega Arch TID": megaArchTid,
    "SetuBandhan TID": setuBandhanTid,
    "TrackOteasure TID": trackoteasureTid,
  };

  const domainCoding = {
    "CP  1styear TID": cp1styearTid,
    "CP All year TID": cp1styearTid,
    "WEB TID": webTid,
  };

  const domainElectrical = {
    "Electrical-1 TID": electrical1Tid,
    "Electrical-2 TID ": electrical2Tid,
  };

  const domainRobotics = {
    "Roborace TID": roboraceTid,
    "RoboSoccer TID": roboSoccerTid,
    "RoboWar-8kg TID ": roboWar8kgTid,
    "RoboWar-15kg TID": roboWar15kgTid,
    "LFR TID": lfrtid,
  };

  const domainGaming = {
    "Gaming-1 TID": gaming1Tid,
    "Gaming-2 TID": gaming2Tid,
    "Gaming-3 TID ": gaming3Tid,
  };

  return (
    <StyledContainer>
      {testUserData ? (
        <>
          <MainInfo>
            <img
              src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
              alt="Profile Image"
              width="100"
              srcSet="Profile Image "
              style={{ borderRadius: "50px", margin: "auto" }}
            />
            <h1>Name : {name} </h1>
            <h1>GID : {gid} </h1>
            <h1>Year : {year}</h1>
            <h1>Department : {department}</h1>
            <h1>Roll No. : {roll}</h1>
            <h1>E - Mail : {email}</h1>
            <h1>Phone : {phoneNumber}</h1>
            <h1>College : {college} </h1>
          </MainInfo>

          {
            // the cards section
          }
          <CardsSection>
            {showCardHandler(domainCivil) ? (
              <Domains>
                <h1>Civil</h1>
                {showOptionsHandler(domainCivil).map((main) => main)}
              </Domains>
            ) : (
              <></>
            )}
            {showCardHandler(domainCoding) ? (
              <Domains>
                <h1>CODING</h1>
                {showOptionsHandler(domainCoding).map((main) => main)}
              </Domains>
            ) : (
              <></>
            )}
            {showCardHandler(domainGaming) ? (
              <Domains>
                <h1>GAMING</h1>
                {showOptionsHandler(domainGaming).map((main) => main)}
              </Domains>
            ) : (
              <></>
            )}
            {showCardHandler(domainElectrical) ? (
              <Domains>
                <h1>Electricl</h1>
                {showOptionsHandler(domainElectrical).map((main) => main)}
              </Domains>
            ) : (
              <></>
            )}
            {showCardHandler(domainRobotics) ? (
              <Domains>
                <h1>Robotics</h1>
                {showOptionsHandler(domainRobotics).map((main) => main)}
              </Domains>
            ) : (
              <></>
            )}
          </CardsSection>
        </>
      ) : (
        <h1 style={{ color: "white" }}>YOU ARE NOT LOGGED IN !!!</h1>
      )}
    </StyledContainer>
  );
};

export default Profile;
