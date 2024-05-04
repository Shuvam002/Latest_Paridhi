import React, { useState, useEffect } from "react";
import {
  StyledContainer,
  Domains,
  MainInfo,
  CardsSection,
} from "./ProfileInformation.styled";
import { useParams } from "react-router-dom";
import axios from "axios";

const domainTitleStyle = {
  textDecoration: "underline",
  textDecorationThickness: "2px",
  textDecorationColor: "red",
};

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

const ProfileInformation = () => {
  const [UserData, setUserData] = useState({});
  const [ShowProfile, setShowProfile] = useState(false);
  const { GID } = useParams();
  //To get the Related Information about Of the GID
  const backendRequest = async () => {
    try {
      const response = await axios.get(
        `http://localhost:6001/megatronix/paridhi/user/profile/getProfile/${GID}`
      );

      // const response = {
      //   status: 200,
      //   data: {
      //     id: 1,
      //     name: "hello",
      //     college: "XYZ College",
      //     year: "2023",
      //     department: "Computer Science",
      //     roll: "CS001",
      //     email: "cocatul11@gmail.com",
      //     phoneNumber: "9876543210",
      //     gid: "paridhi2000024020524024",
      //     megaArchTid: 1234,
      //     setuBandhanTid: 5678,
      //     codezenTid: 9101,
      //     codeQuestTid: 1121,
      //     webMindsTid: 3141,
      //     electriQuestTid: 5161,
      //     electrical2Tid: 7181,
      //     bgmiLanTid: "paridhi12002105202024",
      //     valorantLanTid: 9202,
      //     pesLanTid: 1223,
      //     bingeQuizTid: 4243,
      //     tableTennisTid: 6263,
      //     carromTid: 8283,
      //     lineTrekkerTid: 23304,
      //     triathlonTid: 2324,
      //     roboKlassikerTid: 4344,
      //     roboWar8kgTid: 6364,
      //     roboWar15kgTid: 8384,
      //     trackoteasureTid: 23405,
      //   },
      // };

      // const response = await axios.get(
      //   `https://api.msitparidhi.in/megatronix/paridhi/user/profile/${GID}`
      // )

      console.log(response);
      if (response.status === 200) {
        setUserData(response.data);
        setShowProfile(true);
      } else if (response.status === 404) {
        alert("Profile Information not found !!!");
      } else {
        alert("Something Went Wrong !!!");
      }
    } catch (error) {
      console.error("Error fetching data: >>>>", error);
      alert("Something went Wrong While getting the GID Data !!!");
    }
  };
  useEffect(() => {
    backendRequest();
  }, []);
  const {
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
    codezenTid,
    codeQuestTid,
    webMindsTid,
    electriQuestTid,
    bgmiLanTid,
    valorantLanTid,
    pesLanTid,
    bingeQuizTid,
    tableTennisTid,
    carromTid,
    lineTrekkerTid,
    triathlonTid,
    roboKlassikerTid,
    roboWar8kgTid,
    roboWar15kgTid,
    trackoteasureTid,
  } = UserData || {};
  const domainCivil = {
    "Mega Arch TID": megaArchTid,
    "Setu Bandhan TID": setuBandhanTid,
    "Track O Treasure TID": trackoteasureTid,
  };
  const domainCoding = {
    "Codzen TID ": codezenTid,
    "Code Quest TID": codeQuestTid,
    "Web Minds TID": webMindsTid,
  };
  const domainElectrical = {
    "ElectriQuest TID ": electriQuestTid,
  };
  const domainRobotics = {
    "Robo Klassiker TID": roboKlassikerTid,
    "Triathlon TID": triathlonTid,
    "RoboWar-8kg TID ": roboWar8kgTid,
    "RoboWar-15kg TID": roboWar15kgTid,
    "Line Trekker TID": lineTrekkerTid,
  };
  const domainGaming = {
    "BGMI Lan TID": bgmiLanTid,
    "Valorant Lan TID": valorantLanTid,
    "Pes Lan TID": pesLanTid,
  };
  const domainGenral = {
    "Carrom TID": carromTid,
    "Table Tennis TID": tableTennisTid,
    "Binge Quiz TID": bingeQuizTid,
  };
  return (
    <>
      <StyledContainer>
        {ShowProfile ? (
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
                  <h1 style={domainTitleStyle}>Civil</h1>
                  <br />
                  {showOptionsHandler(domainCivil).map((main) => main)}
                </Domains>
              ) : null}
              {showCardHandler(domainCoding) ? (
                <Domains>
                  <h1 style={domainTitleStyle}>Coding</h1>
                  <br />
                  {showOptionsHandler(domainCoding).map((main) => main)}
                </Domains>
              ) : null}
              {showCardHandler(domainGaming) ? (
                <Domains>
                  <h1 style={domainTitleStyle}>Gaming</h1>
                  <br />
                  {showOptionsHandler(domainGaming).map((main) => main)}
                </Domains>
              ) : null}
              {showCardHandler(domainElectrical) ? (
                <Domains>
                  <h1 style={domainTitleStyle}>Electrical</h1>
                  <br />
                  {showOptionsHandler(domainElectrical).map((main) => main)}
                </Domains>
              ) : null}
              {showCardHandler(domainGenral) ? (
                <Domains>
                  <h1 style={domainTitleStyle}>General</h1>
                  <br />
                  {showOptionsHandler(domainGenral).map((main) => main)}
                </Domains>
              ) : null}

              {showCardHandler(domainRobotics) ? (
                <Domains>
                  <h1 style={domainTitleStyle}>Robotics</h1>
                  <br />
                  {showOptionsHandler(domainRobotics).map((main) => main)}
                </Domains>
              ) : null}
            </CardsSection>
          </>
        ) : (
          <h1 style={{ color: "white" }}></h1>
        )}
      </StyledContainer>
    </>
  );
};

export default ProfileInformation;
