// signup.js
import React, { useEffect, useState } from "react";
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


import { gapi } from "gapi-script";
import OTPVerificationPopup from "./OTPVerificationPopup";

const SignUp = () => {
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

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const handleVerify = () => {
    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return; // Exit early if email is invalid
    }
  
    // Proceed with OTP verification process
    setOtpPopup(true); 
  };
  

  const handleOtpSubmit = (otp) => {
    if (otp === "123456") {
      setIsOtpCorrect(true);
      setOtpPopup(false);
      setIsVerified(true);
    } else {
      setIsOtpCorrect(false);
      alert("Incorrect OTP. Please enter the correct OTP.");
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

  const handleSignUp = () => {

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return; 
    }
  
    // Handle sign up logic here
    console.log("Sign Up details:", {
      name,
      college,
      year,
      department,
      roll,
      email,
      phoneNumber
    });
  };
  

  return (
    <CenteredContainer>
    <Title>REGISTRATION BEGINS SOON...STAY TUNED !!!</Title>
      {/* <Cover>
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
      )} */}
    </CenteredContainer>
  );
};

export default SignUp;
