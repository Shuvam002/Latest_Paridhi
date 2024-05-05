import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Cover,
  IconContainer,
  InputField,
  InputIcon,
  SignUpButton,
  Title,
  Underline,
  CenteredContainer,
  Button,
} from "./Login_coding.styled";
import TIDDisplayBox from "./TIDDisplayBox";
import { useParams } from "react-router-dom";

const Codezen = () => {
  const [inputList, setinputList] = useState([]);
  const [verifiedCount, setVerifiedCount] = useState(0);
  const [val, setVal] = useState("");
  const [showTIDBox, setShowTIDBox] = useState(false);
  const [teamname, setTeamname] = useState("");
  const [TID, setTID] = useState(null);
  const [Phone, setPhone] = useState(null);
  const { eventRegName } = useParams();

  const apiUrl = String(import.meta.env.VITE_API_MAIN);

  const eventRegs = {
    war_8kgReg: {
      name: "Throne of Bots(8kg)",
      gidVerifyApi: `${apiUrl}/robotics/war-8kg/`,
      getTidApi: `${apiUrl}/robotics/war-8kg`,
      min: 1,
      max: 5,
      teamname: true,
    },
    war_15kgReg: {
      name: "Throne of Bots(15kg)",
      gidVerifyApi: `${apiUrl}/robotics/war-15kg/`,
      getTidApi: `${apiUrl}/robotics/war-15kg`,
      min: 1,
      max: 5,
      teamname: true,
    },

    line_trekkerReg: {
      name: "Line Trekker",
      gidVerifyApi: `${apiUrl}/robotics/line-trekker/`,
      getTidApi: `${apiUrl}/robotics/line-trekker`,
      min: 1,
      max: 2,
      teamname: true,
    },
    robo_klassikerReg: {
      name: "Robo Klassiker",
      gidVerifyApi: `${apiUrl}/robotics/robo-klassiker/`,
      getTidApi: `${apiUrl}/robotics/robo-klassiker`,
      min: 1,
      max: 5,
      teamname: true,
    },
    triathlonReg: {
      name: "Triathlon",
      gidVerifyApi: `${apiUrl}/robotics/triathlon/`,
      getTidApi: `${apiUrl}/robotics/triathlon`,
      min: 1,
      max: 5,
      teamname: true,
    },

    combowar8_15: {
      name: "War 8kg + 15kg",
      gidVerifyApi: `${apiUrl}/robotics/war-combo/`,
      getTidApi: `${apiUrl}/robotics/war-combo`,
      min: 1,
      max: 5,
      teamname: true,
    },
    race_soccer: {
      name: "Race + Soccer",
      gidVerifyApi: `${apiUrl}/robotics/robotics-combo/`,
      getTidApi: `${apiUrl}/robotics/robotics-combo`,
      min: 1,
      max: 5,
      teamname: true,
    },
    race_soccer_8kg: {
      name: "Race + Soccer + 8 kg",
      gidVerifyApi: `${apiUrl}/robotics/robotics-and-war-8kg-combo/`,
      getTidApi: `${apiUrl}/robotics/robotics-and-war-8kg-combo`,
      min: 1,
      max: 5,
      teamname: true,
    },
    race_soccer_15kg: {
      name: "Race Soccer + 15kg",
      gidVerifyApi: `${apiUrl}/robotics/robotics-and-war-15kg-combo/`,
      getTidApi: `${apiUrl}/robotics/robotics-and-war-15kg-combo`,
      min: 1,
      max: 5,
      teamname: true,
    },
    race_soccer_8_15kg: {
      name: "Race Soccer + War (8 + 15)kg",
      gidVerifyApi: `${apiUrl}/robotics/total-robotics-combo/`,
      getTidApi: `${apiUrl}/robotics/total-robotics-combo`,
      min: 1,
      max: 5,
      teamname: true,
    },

    mega_archReg: {
      name: "Mega Arch",
      gidVerifyApi: `${apiUrl}/civil/mega-arch/`,
      getTidApi: `${apiUrl}/civil/mega-arch`,
      min: 3,
      max: 5,
      teamname: false,
    },
    setu_bandhanReg: {
      name: "Setu Bandhan",
      gidVerifyApi: `${apiUrl}/civil/setu-bandhan/`,
      getTidApi: `${apiUrl}/civil/setu-bandhan`,
      min: 2,
      max: 3,
      teamname: false,
    },
    totReg: {
      name: "TOT",
      gidVerifyApi: `${apiUrl}/civil/tot/`,
      getTidApi: `${apiUrl}/civil/tot`,
      min: 2,
      max: 3,
      teamname: false,
    },
    Setu_bandhan_TOTReg: {
      name: "Setu Bandhan + TOT",
      gidVerifyApi: `${apiUrl}/civil/setu-tot-combo/`,
      getTidApi: `${apiUrl}/civil/setu-tot-combo`,
      min: 2,
      max: 3,
      teamname: false,
    },
    code_zenReg: {
      name: "Code Zen",
      gidVerifyApi: `${apiUrl}/coding/codezen/`,
      getTidApi: `${apiUrl}/coding/codezen`,
      min: 1,
      max: 2,
      teamname: true,
    },
    code_questReg: {
      name: "Code Quest",
      gidVerifyApi: `${apiUrl}/coding/code-quest/`,
      getTidApi: `${apiUrl}/coding/code-quest`,
      min: 1,
      max: 2,
      teamname: true,
    },
    web_mindsReg: {
      name: "Web Minds",
      gidVerifyApi: `${apiUrl}/coding/web-minds/`,
      getTidApi: `${apiUrl}/coding/web-minds`,
      min: 1,
      max: 2,
      teamname: true,
    },
    electri_questReg: {
      name: "Electri Quest",
      gidVerifyApi: `${apiUrl}/electrical/electri-quest/`,
      getTidApi: `${apiUrl}/electrical/electri-quest`,
      min: 1,
      max: 2,
      teamname: false,
    },
    table_tennisReg: {
      name: "Table Tennis",
      gidVerifyApi: `${apiUrl}/general/table-tennis/`,
      getTidApi: `${apiUrl}/general/table-tennis`,
      min: 1,
      max: 2,
      teamname: false,
    },
    carromReg: {
      name: "Carrom",
      gidVerifyApi: `${apiUrl}/general/carrom/`,
      getTidApi: `${apiUrl}/general/carrom`,
      min: 1,
      max: 2,
      teamname: false,
    },
    valorantReg: {
      name: "Valorant",
      gidVerifyApi: `${apiUrl}/gaming/valorant/`,
      getTidApi: `${apiUrl}/gaming/valorant`,
      min: 5,
      max: 6,
      teamname: true,
    },
    bgmiReg: {
      name: "BGMI",
      gidVerifyApi: `${apiUrl}/gaming/bgmi/`,
      getTidApi: `${apiUrl}/gaming/bgmi`,
      min: 4,
      max: 6,
      teamname: true,
    },
    pesReg: {
      name: "PES",
      gidVerifyApi: `${apiUrl}/gaming/pes/`,
      getTidApi: `${apiUrl}/gaming/pes`,
      min: 4,
      max: 6,
      teamname: true,
    },
    binge_quizReg: {
      name: "Binge Quiz",
      gidVerifyApi: `${apiUrl}/general/binge-quiz/`,
      getTidApi: `${apiUrl}/general/binge-quiz`,
      min: 1,
      max: 2,
      teamname: false,
    },
  };

  const regData = eventRegs[eventRegName];

  const handleLogin = async () => {
    const [gid1, gid2, gid3, gid4, gid5] = inputList;

    if (regData.teamname) {
      if (!teamname) {
        alert("Please fill Team Name !!!");
      } else if (inputList.length < regData.min) {
        alert(`Please give minimum ${regData.min} Verified GID !!!`);
      } else if (!Phone) {
        alert("Please Enter the Phone number !!!");
      } else {
        try {
          console.log("iama run team");
          const response = await axios.post(regData.getTidApi, {
            teamname: !teamname ? null : teamname,
            gid1: !gid1 ? null : gid1,
            gid2: !gid2 ? null : gid2,
            gid3: !gid3 ? null : gid3,
            gid4: !gid4 ? null : gid4,
            gid5: !gid5 ? null : gid5,
            phone: Phone,
          });

          // Setting TID -----
          setTID(response.data);
          setShowTIDBox(true);
        } catch (error) {
          alert("Something went wrong !!!");
          console.error("Error signing up:", error);
        }
      }
    } else if (inputList.length < regData.min) {
      alert(`Please give minimum ${regData.min} Verified GID !!!`);
    } else if (!Phone) {
      alert("Please Enter the Phone number !!!");
    } else {
      try {
        console.log("iama run");
        const response = await axios.post(regData.getTidApi, {
          teamname: !teamname ? null : teamname,
          gid1: !gid1 ? null : gid1,
          gid2: !gid2 ? null : gid2,
          gid3: !gid3 ? null : gid3,
          gid4: !gid4 ? null : gid4,
          gid5: !gid5 ? null : gid5,
          phone: Phone,
        });

        // Setting TID -----
        setTID(response.data);
        setShowTIDBox(true);
      } catch (error) {
        alert("Something went wrong !!!");
        console.error("Error signing up:", error);
      }
    }
  };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
    setVerifiedCount(verifiedCount - 1);
  };

  const verifyGID = async (value, index) => {
    try {
      const response = await axios.get(`${regData.gidVerifyApi}${value}`);

      if (response.status === 200) {
        if (!inputList.includes(value)) {
          setinputList([...inputList, value]);

          setVerifiedCount(verifiedCount + 1);
          setVal("");
        } else {
          alert(`GID ${value} is already verified, Enter a new GID`);
        }
      } else {
        alert(`GID ${value} is invalid`);
      }
      return response.data;
    } catch (error) {
      alert("Something Went Wrong!!!\n"+error.response.data.split(":")[1]);
      console.error("Error verifying GID:",error);
      console.log(error.response.data);
    }
  };

  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  // Function to show TIDDisplayBox

  const showTIDBoxHandler = () => {
    if (verifiedCount === 2) {
      setShowTIDBox(true);
    } else {
      alert("Please verify both GIDs before generating TID");
    }
  };

  return (
    <CenteredContainer>
      <Cover>
        <Container>
          <Title>{regData.name.toUpperCase()}</Title>
          <Underline />

          {regData.teamname ? (
            <IconContainer>
              <InputIcon
                className="fa fa-user-o"
                aria-hidden="true"
              ></InputIcon>
              <InputField
                onChange={(e) => {
                  setTeamname(e.target.value);
                }}
                name="teamname"
                type="text"
                placeholder="Team Name"
              />
            </IconContainer>
          ) : null}

          {regData.max > verifiedCount && (
            <IconContainer>
              <InputIcon
                className="fa fa-id-card-o"
                aria-hidden="true"
              ></InputIcon>
              <InputField
                name="GID"
                placeholder="Enter GID"
                type="text"
                value={val}
                onChange={(e) => {
                  setVal(e.target.value);
                }}
              />
              <Button
                className="Verify"
                onClick={() => {
                  if (inputList.length < regData.max) {
                    verifyGID(val);
                  } else {
                    alert("You can only verify up to 2 GIDs.");
                  }
                }}
              >
                Verify
              </Button>
            </IconContainer>
          )}
          {inputList.map((data, idx) => {
            if (verifiedCount >= idx + 1) {
              return (
                <IconContainer key={idx}>
                  <InputIcon
                    className="fa fa-id-card-o"
                    aria-hidden="true"
                  ></InputIcon>
                  <InputField
                    name={`gid-${idx + 1}`}
                    type="text"
                    placeholder={`GID ${idx + 1}`}
                    value={data}
                    disabled
                  />
                  {verifiedCount > 0 && (
                    <Button
                      className="fa fa-minus"
                      onClick={() => handleremove(idx)}
                    >
                      <i className="ri-subtract-line"></i>
                    </Button>
                  )}
                </IconContainer>
              );
            }
            return null;
          })}
          <IconContainer>
            <InputIcon
              className="fa fa-id-card-o"
              aria-hidden="true"
            ></InputIcon>
            <InputField
              name="GID"
              placeholder="Phone "
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <Button className="Verify" onClick={() => {}} />
          </IconContainer>

          <SignUpButton onClick={handleLogin}>Generate TID</SignUpButton>
          {showTIDBox && (
            <TIDDisplayBox TID={TID} onClose={() => setShowTIDBox(false)} />
          )}
        </Container>
      </Cover>
    </CenteredContainer>
  );
};

export default Codezen;