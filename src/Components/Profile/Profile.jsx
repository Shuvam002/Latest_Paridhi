import { useState, useEffect, useCallback } from "react";
import OTPVerificationPopup from "../SignUp/OTPVerificationPopup";
import { useNavigate } from "react-router-dom";
import { Loader } from "rsuite";

import axios from "axios";
import {
  StyledContainer,
  MainInfo,
  Container,
  CenteredContainer,
  InputField,
  Button,
  Cover,
  IconContainer,
  SubmitButton,
} from "./Profile.styled";
import { Spinnerdiv2 } from "../Spinner/Spinner.styled";

const Profile = () => {
  const [emailVerified, setEmailVerified] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [otpPopup, setOtpPopup] = useState(false);
  const [emailFound, setEmailFound] = useState(false);
  const [inCorrectOTP, setInCorrectOTP] = useState(false);
  const [showProfile, setShowProfile] = useState();
  const [userProfileInfo, setUserProfileInfo] = useState([]);
  const apiUrl = String(import.meta.env.VITE_API_MAIN);
  const navigate = useNavigate();

  // Email Verification
  const handleVerify = async () => {
    try {
      if (!userEmail.includes("@") || !userEmail.includes(".")) {
        alert("Please enter a valid email address.");
      } else {
        // Mock response for testing
        setEmailVerified("pending");
        const response = await axios.post(
          `${apiUrl}/profile/generate-otp?email=${userEmail}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Credentials": "true",
            },
          }
        );
        // setIsPending(true);
        if (response.status === 200) {
          setOtpPopup(true);
          setEmailVerified(false)
          setEmailFound(false);
          // setIsPending(false);
        } else if (response.status === 404) {
          setEmailFound(true);
        }
      }
    } catch (error) {
      setIsPending(false);
      console.log("Email verification ERROR >>> ", error);
      alert("Something Went Wrong Please Try Again !!!");
    }
  };

  // OTP verification
  const handleOtpSubmit = async (otp) => {
    try {
      // Mock response for testing
      const response = await axios.post(`${apiUrl}/verify-otp`, {
        email: userEmail,
        otp,
      });

      // Check if the OTP verification is successful
      if (response.status === 200) {
        // If the OTP is correct, set isVerified to true and close the OTP popup
        setEmailVerified(true);
        sessionStorage.setItem("email", userEmail);
        sessionStorage.setItem("isEmailVarified", true);

        setOtpPopup(false);
        setInCorrectOTP(true);
      } else if (response.status === 404) {
        setEmailVerified(false)
        setInCorrectOTP(false);
      }
    } catch (error) {
      // Handle error, such as displaying an alert or logging the error
      console.error("Error verifying OTP:", error);
      alert(
        "Something Went Wrong while Verifying The OTP Please TRY Again !!!"
      );
    }
  };

  // Submitting the email to get the Profile Information
  const emailSubmittingHandler = async () => {
    if (!sessionStorage.getItem("email")) {
      alert("Verify The Email First !!!");
    } else {
      try {
        const emmailSendToBackend = sessionStorage.getItem("email")
          ? sessionStorage.getItem("email")
          : userEmail;
        const response = await axios.get(
          `${apiUrl}/profile/getProfile?email=${emmailSendToBackend}`
        );

        if (response.status === 200) {
          const storedEmail = sessionStorage.getItem("email");
          setUserEmail(storedEmail);
          setEmailFound(true);
          setInCorrectOTP(true);
          setEmailVerified(true);
          setShowProfile(true);

          setUserProfileInfo(response.data);
        } else if (response.status === 404) {
          alert("Email not Found  !!!");
        } else {
          alert("Something went wrong !!!");
        }
      } catch (error) {
        console.log("Error while getting the Profile Information >>> ", error);
        alert("Something Went Wrong while getting the Profile Information");
      }
    }
  };

  const userEmailExist = useCallback(() => {
    if (sessionStorage.getItem("email")) {
      emailSubmittingHandler();
    }
  }, [emailSubmittingHandler]);

  useEffect(() => {
    userEmailExist();
  }, []);

  return (
    <StyledContainer>
      {!showProfile ? (
        <CenteredContainer>
          <Cover>
            <Container>
              <h1 style={{ color: "white" }}>Enter Your Email </h1>
              <IconContainer>
                <InputField
                  name="email"
                  type="email"
                  placeholder="Email id"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <Button className="Verify" onClick={handleVerify}>
                  {!emailVerified? (
                    "Verify"
                  ) : emailVerified=="pending" ? (
                    <Spinnerdiv2 />
                  ) : (
                    "Verified"
                  )}
                </Button>
              </IconContainer>
              {!emailFound ? null : (
                <h4 style={{ color: "white" }}>Email Does Not Found </h4>
              )}
              <SubmitButton onClick={emailSubmittingHandler}>
                Submit
              </SubmitButton>
            </Container>
          </Cover>
          {otpPopup && (
            <OTPVerificationPopup
              onSubmit={handleOtpSubmit}
              onClose={() => setOtpPopup(false)}
              wrongOTP={inCorrectOTP}
            />
          )}
        </CenteredContainer>
      ) : (
        userProfileInfo.map((data) => (
          <div
            onClick={() =>
              navigate("/profile/Profile-Informations", { state: data })
            }
          >
            <MainInfo>
              {console.log("this is my data ", data)}
              <img
                src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
                alt="Profile Image"
                width="100"
                srcSet="Profile Image"
                style={{ borderRadius: "50px", margin: "auto" }}
              />
              <h1>Name : {data.name} </h1>
              <h1>GID : {data.gid} </h1>
              <h1>Registration fees : {data.paid ? "paid" : "not paid"}</h1>
            </MainInfo>
          </div>
        ))
      )}
    </StyledContainer>
  );
};

export default Profile;