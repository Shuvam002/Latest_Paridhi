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
import { useLocation, useParams } from "react-router-dom";

const mapping = {
  codezen: { min: 1, max: 2 },
  "code-quest": { min: 1, max: 2 },
  "web-minds": { min: 1, max: 2 },

  "setu-bandhan": { min: 2, max: 3 },
  "mega-arch": { min: 3, max: 5 },
  tot: { min: 2, max: 3 },

  "electri-quest": { min: 1, max: 2 },

  "binge-quiz": { min: 1, max: 2 },
  "table-tennis": { min: 1, max: 2 },
  carrom: { min: 1, max: 2 },

  valorant: { min: 5, max: 6 },
  bgmi: { min: 4, max: 6 },
  pes: { min: 4, max: 6 },

  "line-trekker": { min: 1, max: 5 },
  "robo-klassiker": { min: 1, max: 5 },
  triathlon: { min: 1, max: 5 },
  "war-8kg": { min: 1, max: 5 },
  "war-15kg": { min: 1, max: 5 },
};
const Codezen = () => {
  const location = useLocation();
  const event = location.pathname.split("/")[3];
  const [inputList, setinputList] = useState([]);
  const [verificationResults, setVerificationResults] = useState([]);
  const [verifiedCount, setVerifiedCount] = useState(0);
  const [val, setVal] = useState("");
  const [showTIDBox, setShowTIDBox] = useState(false); // State to control visibility of TIDDisplayBox
  const [teamname, setTeamname] = useState("");
  const [TID, setTID] = useState(null);
  const [Phone, setPhone] = useState(null);
  const { eventRegName } = useParams();

  const eventRegs = {
    // webMindReg: {
    //   api: "",
    //   min: 1,
    //   max: 2,
    // },
    // codeZenReg: {
    //   api: "",
    //   min: 1,
    //   max: 2,
    // },
    // codeQuest: {
    //   api: "",
    //   min: 1,
    //   max: 2,
    // },
    // triathlonReg:{
    //   api:"",
    //   min:,
    //   max:,
    // },
    // roboKlassikarReg:{
    //   api:"",
    //   min:,
    //   max:,
    // }
    // triathlonReg:{
    //   api:"",
    //   min:,
    //   max:,
    // }

    line_trekkerReg: {
      name: "Line Trekker",
      api: "",
      min: 1,
      max: 2,
    },
  };

  const regData = eventRegs[eventRegName];

  const handleinputchange = (e) => {
    const { value } = e.target;
    setinputList([...inputList, value]);
    console.log(inputList);
  };

  const handleLogin = async () => {
    const [gid1, gid2, gid3, gid4, gid5] = inputList;
    console.log(
      "Data that will be send to  Backend >>>> ",
      " Team Name >>>",
      teamname,
      "gid1 >>>",
      gid1,
      "gid2 >>>",
      gid2,
      "gid3 >>>",
      gid3,
      "gid4 >>>",
      gid4,
      "gid5 >>>",
      gid5,
      "Phone >>> ",
      Phone
    );

    if (!teamname) {
      alert("Please fill Team Name !!!");
    } else if (!gid1) {
      alert("Please give minimum 1 Varified GID !!!");
    } else if (!Phone) {
      alert("Please Enter the Phone number !!!");
    } else {
      try {
        const response = await axios.post(regData.api, {
          teamname: teamname,
          gid1: !gid1 ? null : gid1,
          gid2: !gid2 ? null : gid2,
          gid3: !gid3 ? null : gid3,
          gid4: !gid4 ? null : gid4,
          gid5: !gid5 ? null : gid5,
          phone: Phone,
        });

        console.log("Sign up successful:", response.data);
        setGidResponse(response.data);
        localStorage.setItem("user", response.data);

        console.log("sending the request !!!!!", inputList);
        console.log("this is array of gids", inputList);

        // Setting TID -----

        setTID(response.tid);
        setShowTIDBox(true);
      } catch (error) {
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

  const handleaddclick = () => {
    if (inputList.length < 2) {
      setinputList([...inputList, { name: "" }]);
      setVerificationResults([...verificationResults, null]);
    } else {
      alert("You can only add up to 2 names");
    }
  };

  const verifyGID = async (value, index) => {
    try {
      const response = await axios.get(
        `http://localhost:6001/megatronix/paridhi/user/coding/codezen/${value}`
      );
      console.log(response);
      console.log(response.status);
      console.log(response.data);

      if (response.status === 200) {
        if (!inputList.includes(value)) {
          setinputList([...inputList, value]);

          setVerifiedCount(verifiedCount + 1);
          setVal("");
          console.log(`GID ${value} is valid`);
        } else {
          alert(`GID ${value} is already verified, Enter a new GID`);
        }
      } else {
        alert(`GID ${value} is invalid`);
      }
      return response.data;
    } catch (error) {
      console.error("Error verifying GID:", error);
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
          <Title>{regData.n ame.toUpperCase()}</Title>
          <Underline />

          <IconContainer>
            <InputIcon className="fa fa-user-o" aria-hidden="true"></InputIcon>
            <InputField
              onChange={(e) => {
                setTeamname(e.target.value);
              }}
              name="teamname"
              type="text"
              placeholder="Team Name"
            />
          </IconContainer>

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
                    // console.log(val);
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
