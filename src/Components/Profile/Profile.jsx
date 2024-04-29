import { useState, useEffect } from "react";
import {
  StyledContainer,
  Domains,
  MainInfo,
  CardsSection,
} from "./Profile.styled";

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
      // const GIDFetch = await fetch(
      //   `http://localhost:6001/megatronix/paridhi/user/profile/${GID}`
      // )
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((data) => {
      //     console.log(data);
      //     setTestUserData(data);
      //     return data;
      //   });
      // console.log(GIDFetch);
      setTestUserData({
        id: 1,
        name: "Atul Kumar Singh",
        college: "Techno",
        year: "2",
        department: "CSE",
        roll: "123",
        email: "cocatul11@gmail.com",
        phoneNumber: "9123766255",
        gid: "paridhi2000021020521024",
        megaArchTid: "paridhi12002105202024",
        setuBandhanTid: "paridhi12002105202024",
        codezenTid: "paridhi12002105202024",
        codeQuestTid: "paridhi12002105202024",
        webMindsTid: null,
        electriQuestTid: "paridhi12002105202024",
        electrical2Tid: null,
        bgmiLanTid: "paridhi12002105202024",
        valorantLanTid: "paridhi12002105202024",
        pesLanTid: "paridhi12002105202024",
        bingeQuizTid: "paridhi12002105202024",
        tableTennisTid: "paridhi12002105202024",
        carromTid: "paridhi12002105202024",
        lineTrekkerTid: "paridhi12002105202024",
        triathlonTid: "paridhi12002105202024",
        roboKlassikerTid: "paridhi12002105202024",
        roboWar8kgTid: "paridhi12002105202024",
        roboWar15kgTid: "paridhi12002105202024",
        trackoteasureTid: "paridhi12002105202024",
      });
    } catch (error) {
      console.error("Error fetching data: >>>>", error);
    }
  };

  useEffect(() => {
    backendRequest();
  }, []);

  console.log(testUserData);
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

  function cardSectionhandle() {
    const domainArr = [
      domainCivil,
      domainCoding,
      domainElectrical,
      domainGaming,
      domainGenral,
      domainRobotics,
    ];
    const result = domainArr.map((domaine) => {
      if (showCardHandler(domaine)) return
    });
    console.log(result);
  }
  cardSectionhandle();

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
        <h1 style={{ color: "white" }}>
          {GID ? "" : "You are not Registered !!"}
        </h1>
      )}
    </StyledContainer>
  );
};

export default Profile;
