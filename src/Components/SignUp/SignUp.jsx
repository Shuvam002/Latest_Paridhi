// signup.js
import React, { useEffect, useState } from "react";
// import axios from "axios";
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
  Popup,
  CenteredContainer,
  Button,
} from "./SignUp.styled";
import GIDDisplayBox from "./GIDDisplayBox"; 
import axios from "axios";

import { gapi } from "gapi-script";

import OTPVerificationPopup from "./OTPVerificationPopup";


  

const SignUp = () => {
  const [showGIDBox, setShowGIDBox] = useState(false);

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
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [department, setDepartment] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [warning, setWarning] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [otpPopup, setOtpPopup] = useState(false);
  const [isOtpCorrect, setIsOtpCorrect] = useState(false);

  let config = {
    url:`http://localhost:6001/megatronix/paridhi/user/registration/generate-otp?name=${name}&email=${email}`,
    method: "post",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
    }


};

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  

  const handleVerify = async() => {
    
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
       
    }

    else {
      const response = await axios.request(config);
      console.log(response);
      setOtpPopup(true);
    }
   
   
    
  };

  // const handleOtpSubmit = (otp) => {
  //   if (otp === "123456") {
  //     setIsOtpCorrect(true);
  //     setOtpPopup(false);
  //     setIsVerified(true);
  //   } else {
  //     setIsOtpCorrect(false);
  //     alert("Incorrect OTP. Please enter the correct OTP.");
  //   }
  // };

  const handleOtpSubmit = async (otp) => {
    try {
      // Make a POST request to the backend API endpoint to verify OTP
      const response = await axios.post(`http://localhost:6001/megatronix/paridhi/user/registration/verify-otp`, { email, otp });
      console.log(response);
      // Check if the OTP verification is successful
      if (response.status === 200) {
        // If the OTP is correct, set isVerified to true and close the OTP popup
        setIsVerified(true);
        setOtpPopup(false);
      } else {
        // If OTP verification fails, display an error message
        setIsOtpCorrect(false);
        alert("Incorrect OTP. Please enter the correct OTP.");
      }
    } catch (error) {
      // Handle error, such as displaying an alert or logging the error
      console.error("Error verifying OTP:", error);
      alert("Error verifying OTP. Please try again.");
    }
  };
  

  const handleYearChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 4) {
      alert("Year should not be greater than 4");
    } else {
      setWarning("");
      setYear(value);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:6001/megatronix/paridhi/user/registration", {
        name: name,
        college: college,
        year: year,
        department: department,
        roll: roll,
        email: email,
        phoneNumber: phoneNumber,
        emailVerified: isVerified
      });
      console.log("Sign up successful:", response.data);
      localStorage.setItem("user", (response.data));
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  // const handleSignUp = () => {
  //   if (!email.includes("@") || !email.includes(".")) {
  //     alert("Please enter a valid email address.");
  //     return;
  //   }
  //   if (!isVerified) {
  //     alert("Please verify your email address before signing up.");
  //     return;
  //   }

  //   // Handle sign up logic here
  //   console.log("Sign Up details:", {
  //     name,
  //     college,
  //     year,
  //     department,
  //     roll,
  //     email,
  //     phoneNumber,
  //   });
  //   setShowGIDBox(true);
  // };

  return (
    <CenteredContainer>
      <Cover>
        <Container> 
          <Title>Registration</Title>

           <Underline />

          <IconContainer>
            <InputIcon className="fa fa-user-o" aria-hidden="true"></InputIcon>
            <InputField
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </IconContainer>

          <IconContainer>
            <InputIcon
              className="fa fa-university"
              aria-hidden="true"
            ></InputIcon>
            <InputField
              name="college"
              type="text"
              placeholder="College"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            />
          </IconContainer>

          <IconContainer>
            <InputIcon
              className="fa fa-calendar"
              aria-hidden="true"
            ></InputIcon>
            <InputField
              name="year"
              type="number"
              placeholder="Year of studying"
              value={year}
              onChange={handleYearChange}
            />
            {warning && <p style={{ color: "red" }}>{warning}</p>}
          </IconContainer>

          <IconContainer>
            <InputIcon className="fa fa-book" aria-hidden="true"></InputIcon>
            <InputField
              name="department"
              type="text"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </IconContainer>

          <IconContainer>
            <InputIcon
              className="fa fa-id-card-o"
              aria-hidden="true"
            ></InputIcon>
            <InputField
              name="roll"
              type="number"
              placeholder="Roll No."
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
            />
          </IconContainer>

          <IconContainer>
            <InputIcon
              className="fa fa-envelope-o"
              aria-hidden="true"
            ></InputIcon>
            {isVerified ? (
              <InputField
                name="email"
                type="email"
                placeholder="Verified"
                readOnly
                value={email}
              />
            ) : (
              <>
                <InputField
                  name="email"
                  type="email"
                  placeholder="Email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button className="Verify" onClick={handleVerify}>
                  Verify
                </Button>
              </>
            )}
          </IconContainer>

          <IconContainer>
            <InputIcon className="fa fa-phone" aria-hidden="true"></InputIcon>
            <InputField
              name="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </IconContainer>

          <SignUpButton onClick={handleSignUp}>Sign Up</SignUpButton>
        </Container>
      </Cover>

      {otpPopup && (
        <OTPVerificationPopup
          onSubmit={handleOtpSubmit}
          onClose={() => setOtpPopup(false)}
        />
      )}
      {showGIDBox && (
        <GIDDisplayBox
          gid="1234567890" // Dummy GID number
          onClose={() => setShowGIDBox(false)}
        />
      )} 
    </CenteredContainer>
  );
};

export default SignUp;