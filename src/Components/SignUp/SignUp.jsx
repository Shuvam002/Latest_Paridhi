// signup.js
import React, { useEffect, useState } from "react";
// import axios from "axios";
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
} from "./SignUp.styled";
import GIDDisplayBox from "./GIDDisplayBox";
import axios from "axios";
// import process



import OTPVerificationPopup from "./OTPVerificationPopup";

const SignUp = () => {
  const [showGIDBox, setShowGIDBox] = useState(false);

 

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
  const [gidResponse, setGidResponse] = useState(null);

  const apiUrl = String(import.meta.env.VITE_API_MAIN);

  let config = {
    url: `${apiUrl}/generate-otp?name=${name}&email=${email}`,
    method: "post",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  };

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const handleVerify = async () => {
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
    } else {
      const response = await axios.post(
        `${apiUrl}/generate-otp?name=${name}&email=${email}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
          },
        }
      );
      
      setOtpPopup(true);
    }
  };

  const handleOtpSubmit = async (otp) => {
    try {
      // Make a POST request to the backend API endpoint to verify OTP
      const response = await axios.post(`${apiUrl}/verify-otp`, { email, otp });
      // console.log(apiUrl)
     
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
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
    }
    if (!isVerified) {
      alert("Please verify your email address before signing up.");
    }
    if (
      !name ||
      !college ||
      !year ||
      !department ||
      !roll ||
      !email ||
      !phoneNumber
    ) {
      alert("Please fill in all required fields.");
    } else {
      try {
        const response = await axios.post(
          `${apiUrl}/registration`,
          {
            name: name,
            college: college,
            year: year,
            department: department,
            roll: roll,
            email: email,
            phoneNumber: phoneNumber,
            emailVerified: isVerified,
          }
        );

        setGidResponse(response.data);
        localStorage.setItem("user", response.data);
        //changed
        setShowGIDBox(true);
        
      } catch (error) {
        console.error("Error signing up:", error);
      }
    }
  };

  return (
    <CenteredContainer>
      <Cover>
        <Container>
          <Title>Register</Title>

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
              type="text"
              placeholder="Year/Class"
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
                <Button  className="Verify" onClick={handleVerify}>
                  Verify
                </Button>
                {/* <Button  className="Verify" style={{cursor:"not-allowed"}}>
                  Verify
                </Button> */}
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

          <SignUpButton  onClick={handleSignUp}>Submit</SignUpButton>
          {/* <SignUpButton disabled style={{cursor:"not-allowed"}}>Submit</SignUpButton> */}
        </Container>
      </Cover>

      {otpPopup && (
        <OTPVerificationPopup
          onSubmit={handleOtpSubmit}
          onClose={() => setOtpPopup(false)}
        />
      )}
      {showGIDBox && (
        <GIDDisplayBox gid={gidResponse} onClose={() => setShowGIDBox(false)} />
      )}

      {/* <Title>Registration begins soon...</Title> */}
    </CenteredContainer>
    // <CenteredContainer>
    //   <Cover>
    //     <Container>
    //       <Title>Registration begins soon...</Title>

    //        <Underline />

    //       <IconContainer>
    //         <InputIcon className="fa fa-user-o" aria-hidden="true"></InputIcon>
    //         <InputField
    //           name="name"
    //           type="text"
    //           placeholder="Name"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //         />
    //       </IconContainer>

    //       <IconContainer>
    //         <InputIcon
    //           className="fa fa-university"
    //           aria-hidden="true"
    //         ></InputIcon>
    //         <InputField
    //           name="college"
    //           type="text"
    //           placeholder="College"
    //           value={college}
    //           onChange={(e) => setCollege(e.target.value)}
    //         />
    //       </IconContainer>

    //       <IconContainer>
    //         <InputIcon
    //           className="fa fa-calendar"
    //           aria-hidden="true"
    //         ></InputIcon>
    //         <InputField
    //           name="year"
    //           type="text"
    //           placeholder="Year/Class"
    //           value={year}
    //           onChange={handleYearChange}
    //         />
    //         {warning && <p style={{ color: "red" }}>{warning}</p>}
    //       </IconContainer>

    //       <IconContainer>
    //         <InputIcon className="fa fa-book" aria-hidden="true"></InputIcon>
    //         <InputField
    //           name="department"
    //           type="text"
    //           placeholder="Department"
    //           value={department}
    //           onChange={(e) => setDepartment(e.target.value)}
    //         />
    //       </IconContainer>

    //       <IconContainer>
    //         <InputIcon
    //           className="fa fa-id-card-o"
    //           aria-hidden="true"
    //         ></InputIcon>
    //         <InputField
    //           name="roll"
    //           type="number"
    //           placeholder="Roll No."
    //           value={roll}
    //           onChange={(e) => setRoll(e.target.value)}
    //         />
    //       </IconContainer>

    //       <IconContainer>
    //         <InputIcon
    //           className="fa fa-envelope-o"
    //           aria-hidden="true"
    //         ></InputIcon>
    //         {isVerified ? (
    //           <InputField
    //             name="email"
    //             type="email"
    //             placeholder="Verified"
    //             readOnly
    //             value={email}
    //           />
    //         ) : (
    //           <>
    //             <InputField
    //               name="email"
    //               type="email"
    //               placeholder="Email id"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //             <Button disabled style={{cursor:"not-allowed"}} className="Verify" onClick={handleVerify}>
    //               Verify
    //             </Button>
    //           </>
    //         )}
    //       </IconContainer>

    //       <IconContainer>
    //         <InputIcon className="fa fa-phone" aria-hidden="true"></InputIcon>
    //         <InputField
    //           name="phoneNumber"
    //           type="tel"
    //           placeholder="Phone Number"
    //           value={phoneNumber}
    //           onChange={(e) => setPhoneNumber(e.target.value)}
    //         />
    //       </IconContainer>

    //       <SignUpButton disabled style={{cursor:"not-allowed"}} onClick={handleSignUp}>Submit</SignUpButton>
    //     </Container>
    //   </Cover>

    //   {otpPopup && (
    //     <OTPVerificationPopup
    //       onSubmit={handleOtpSubmit}
    //       onClose={() => setOtpPopup(false)}
    //     />
    //   )}
    //   {showGIDBox && (
    //     <GIDDisplayBox

    //       gid={gidResponse}
    //       onClose={() => setShowGIDBox(false)}
    //     />
    //   )}
    // </CenteredContainer>
  );
};

export default SignUp;