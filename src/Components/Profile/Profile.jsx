import { useState, useEffect } from "react";
import {
  StyledContainer,
  Domains,
  MainInfo,
  CardsSection,
} from "./Profile.styled";
import axios from "axios";
import { gapi } from "gapi-script";

const GID = localStorage.getItem("user");
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

const Profile = () => {
  const [testUserData, setTestUserData] = useState(null);
  const backendRequest = async () => {
    try {
      const GIDFetch = await fetch(


        `http://localhost:6001/megatronix/paridhi/user/profile/${GID}`

      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setTestUserData(data);
          return data;
        });
      console.log(GIDFetch);
    } catch (error) {
      console.error("Error fetching data: >>>>", error);
    }
  };

  useEffect(() => {
    backendRequest();
  }, []);

  console.log(testUserData);
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
  } = testUserData || {};

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
                <h1 style={ domainTitleStyle }>Civil</h1><br />
                {showOptionsHandler(domainCivil).map((main) => main)}
              </Domains>
            ) : (
              <></>
            )}
            {showCardHandler(domainCoding) ? (
              <Domains>
                <h1 style={ domainTitleStyle } >Coding</h1><br />
                {showOptionsHandler(domainCoding).map((main) => main)}
              </Domains>
            ) : (
              <></>
            )}
            {showCardHandler(domainGaming) ? (
              <Domains>
                <h1 style={ domainTitleStyle } >Gaming</h1><br />
                {showOptionsHandler(domainGaming).map((main) => main)}
              </Domains>
            ) : (
              <></>
            )}
            {showCardHandler(domainElectrical) ? (
              <Domains>
                <h1 style={ domainTitleStyle } >Electrical</h1><br />
                {showOptionsHandler(domainElectrical).map((main) => main)}
              </Domains>
            ) : (
              <></>
            )}
            {showCardHandler(domainGenral) ? (
              <Domains>
                <h1 style={ domainTitleStyle } >General</h1><br />
                {showOptionsHandler(domainGenral).map((main) => main)}
              </Domains>
            ) : (
              <></>
            )}
            {showCardHandler(domainRobotics) ? (
              <Domains>
                <h1 style={ domainTitleStyle } >Robotics</h1><br />
                {showOptionsHandler(domainRobotics).map((main) => main)}
              </Domains>
            ) : (
              <></>
            )}
            {showCardHandler(domainGenral) ? (
              <Domains>
                <h1>Genral</h1>
                {showOptionsHandler(domainGenral).map((main) => main)}
              </Domains>
            ) : (
              <></>
            )}
          </CardsSection>
        </>
<<<<<<< HEAD
      )  : <h1 style={{ color: "white" }}>{
        GID ? "": "You are not Registered !!" }</h1>
      }
=======
      ) : (
        <h1 style={{ color: "white" }}>{!testUserData?"YOU are not login !!": "" }</h1>
      )}
>>>>>>> 49cc517c0a766a81f54e69728c4aeb42a750a1e3
    </StyledContainer>
  );
};

export default Profile;
