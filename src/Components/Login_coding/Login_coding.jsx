import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  AltLogin,
  AltLoginButton,
  BackgroundImage,
  Container,
  Cover,
  DesktopOptimization,
  FacebookButton,
  GoogleButton,
  IconContainer,
  IconContainerResponsive,
  IconInputResponsive,
  //Input, 
  InputField,
  InputIcon,
  LoginPopup,
  MaxWidth450px,
  MobileIconContainer,
  MobileInputField,
  Page,
  SignUpButton,
  TabletOptimization,
  Text,
  Title,
  Underline,
  
  CenteredContainer,
  Button,
} from "./Login_coding.styled";
// import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [inputList, setinputList] = useState([]);
  const [verificationResults, setVerificationResults] = useState([]);

  const [verifiedCount, setVerifiedCount] = useState(0);

  const handleinputchange = (e) => {
    const { value } = e.target;
    setinputList([...inputList, value]);
    console.log(inputList);
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
        `http://localhost:6001/paridhi/event/coding/allyearcp/${value}`
    );
      if (response.status === 200 && verifiedCount < 2) {
        if(inputList.indexOf(value) === -1) {
          setinputList([...inputList, value]);
          setVerifiedCount(verifiedCount + 1);
          console.log(inputList);
        }

        setVerificationResults((prevResults) => {
          const updatedResults = [...prevResults];
          updatedResults[index] = "valid";
          return updatedResults;
        });
        console.log(`GID ${value} is valid`);
        setVerifiedCount(verifiedCount + 1);
      } else {
        setVerificationResults((prevResults) => {
          const updatedResults = [...prevResults];
          updatedResults[index] = "invalid";
          return updatedResults;
        });
        console.log(`GID ${value} is invalid`);
      }
    } catch (error) {
      console.error("Error verifying GID:", error);
    }
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  }, []);

  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const onSuccess = (e) => {
    alert("User signed in");
    console.log(e);
  };

  const onFailure = (e) => {
    alert("User sign in Failed");
    console.log(e);
  };
  const [val, setVal] = useState("");
  const location = useLocation();
  const eventName = location.pathname.split("/")[3];
  return (
    <CenteredContainer>
      <Cover>
        <Container>
          <Title>{eventName.toUpperCase()}</Title>
          <Underline />

          <IconContainer>
            <InputIcon className="fa fa-user-o" aria-hidden="true"></InputIcon>
            <InputField name="college" type="text" placeholder="Team Name" />
          </IconContainer>

          <IconContainer>
            <InputIcon className="fa fa-user-o" aria-hidden="true"></InputIcon>
            <InputField name="college" placeholder="Team Name"
            type="text"
            onChange={(e) => {
              setVal(e.target.value);
            }}
            // onChange={handleinputchange}
            
          />
          <Button className="Verify" onClick={()=>verifyGID(val)}>Verify</Button>

          </IconContainer>

          {inputList.map((data, idx) => {
            // return <p style={{color:"#fff"}}  key={idx}>{data}</p>;
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
                    ></Button>
                  )}
                </IconContainer>
              );
            }
            return null;
          })}
          <SignUpButton onClick={popup}>Pay Now</SignUpButton>
        </Container>
      </Cover>
    </CenteredContainer>
  );
};

export default Login;


