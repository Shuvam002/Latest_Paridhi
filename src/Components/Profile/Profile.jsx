import { useState, useEffect, useCallback } from "react";
import OTPVerificationPopup from "../SignUp/OTPVerificationPopup";
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

const Profile = () => {
  const [emailVerified, setEmailVerified] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [otpPopup, setOtpPopup] = useState(false);
  const [emailFound, setEmailFound] = useState(false);
  const [inCorrectOTP, setInCorrectOTP] = useState(false);
  const [showProfile, setShowProfile] = useState();
  const [userProfileInfo, setUserProfileInfo] = useState([]);
  // Submitting the email to get the Profile Information
  const emailSubmittingHandler = async () => {
    if (!sessionStorage.getItem("email")) {
      alert("Verify The Email First !!!");
    } else {
      try {
        const emmailSendToBackend = sessionStorage.getItem("email")
          ? sessionStorage.getItem("email")
          : userEmail;
        // const response = await axios.get(
        //   `backend End Point ${emmailSendToBackend}`
        // );
        const response = {
          status: 200,
          data: [
            {
              id: 1,
              name: "hello",
              college: "XYZ College",
              year: "2023",
              department: "Computer Science",
              roll: "CS001",
              email: "cocatul11@gmail.com",
              phoneNumber: "9876543210",
              gid: "paridhi2000022020522024",
              megaArchTid: "paridhi12002105202024",
              setuBandhanTid: "paridhi12002105202024",
              codezenTid: null,
              codeQuestTid: null,
              webMindsTid: null,
              electriQuestTid: null,
              electrical2Tid: null,
              bgmiLanTid: "paridhi12002105202024",
              valorantLanTid: null,
              pesLanTid: null,
              bingeQuizTid: null,
              tableTennisTid: null,
              carromTid: null,
              lineTrekkerTid: null,
              triathlonTid: "paridhi22002205202024",
              roboKlassikerTid: "paridhi22002205202024",
              roboWar8kgTid: "paridhi22002205202024",
              roboWar15kgTid: null,
              trackoteasureTid: null,
            },
          ],
        };

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


  const apiUrl=String(import.meta.env.VITE_API_MAIN);


  // Email Verification
  const handleVerify = async () => {
    try {
      if (!userEmail.includes("@") || !userEmail.includes(".")) {
        alert("Please enter a valid email address.");
      } else {
        // Mock response for testing

        // const response = {
        //   status: 200,
        //   data: "Test-Email",
        // };
        const response = await axios.post(`${apiUrl}/generate-otp?name=null&email=${userEmail}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
          }
        });
        console.log(response);



        // const response = {
        //   status: 200,
        //   data: "Test-Email",
        // };
        console.log(response);


        if (response.status === 200) {
          setOtpPopup(true);
          setEmailFound(false);
        } else if (response.status === 404) {
          setEmailFound(true);
        }
      }
    } catch (error) {
      console.log("Email verification ERROR >>> ", error);
      alert("Something Went Wrong Please Try Again !!!");
    }
  };

  // OTP verification
  const handleOtpSubmit = async (otp) => {
    try {
      // Mock response for testing

      // const response = {
      //   status: 200,
      //   data: "test-Verifying-OTP",
      // };
      const response = await axios.post(
        `${apiUrl}/verify-otp`,
        { email:userEmail, otp }
      );    
        console.log(response);

      // const response = {
      //   status: 200,
      //   data: "test-Verifying-OTP",
      // };
      console.log(response);

      // Check if the OTP verification is successful
      if (response.status === 200) {
        // If the OTP is correct, set isVerified to true and close the OTP popup
        setEmailVerified(true);
        sessionStorage.setItem("email", userEmail);
        sessionStorage.setItem("isEmailVarified", true);

        setOtpPopup(false);
        setInCorrectOTP(true);
      } else if (response.status === 404) {
        setInCorrectOTP(false);
      }
      console.log(otp);
    } catch (error) {
      // Handle error, such as displaying an alert or logging the error
      console.error("Error verifying OTP:", error);
      alert(
        "Something Went Wrong while Verifying The OTP Please TRY Again !!!"
      );
    }
  };
<<<<<<< HEAD
=======

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
          `http://localhost:6001/megatronix/paridhi/user/profile/getProfile?email=${emmailSendToBackend}`
        );
        // const response = await axios.get(
        //   `backend End Point ${emmailSendToBackend}`
        // );
        // const response = {
        //   status: 200,
        //   data: [
        //     {
        //       id: 1,
        //       name: "hello",
        //       college: "XYZ College",
        //       year: "2023",
        //       department: "Computer Science",
        //       roll: "CS001",
        //       email: "cocatul11@gmail.com",
        //       phoneNumber: "9876543210",
        //       gid: "paridhi2000022020522024",
        //       megaArchTid: "paridhi12002105202024",
        //       setuBandhanTid: "paridhi12002105202024",
        //       codezenTid: null,
        //       codeQuestTid: null,
        //       webMindsTid: null,
        //       electriQuestTid: null,
        //       electrical2Tid: null,
        //       bgmiLanTid: "paridhi12002105202024",
        //       valorantLanTid: null,
        //       pesLanTid: null,
        //       bingeQuizTid: null,
        //       tableTennisTid: null,
        //       carromTid: null,
        //       lineTrekkerTid: null,
        //       triathlonTid: "paridhi22002205202024",
        //       roboKlassikerTid: "paridhi22002205202024",
        //       roboWar8kgTid: "paridhi22002205202024",
        //       roboWar15kgTid: null,
        //       trackoteasureTid: null,
        //     },
        //   ],
        // };


        if (response.status === 200) {
          const storedEmail = sessionStorage.getItem("email");
          setUserEmail(storedEmail);
          setEmailFound(true);
          setInCorrectOTP(true);
          setEmailVerified(true);
          setShowProfile(true);
          console.log(showProfile);
          setUserProfileInfo(response.data);
          console.log(userProfileInfo);
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

  const userEmailExist = () => {
    if (sessionStorage.getItem("email")) {
      emailSubmittingHandler();
    }
  };

>>>>>>> f6edae26d5361a56efb0454cb2ac57da8201ad81
  useEffect(() => {
    userEmailExist();
  }, []);

  const userEmailExist = useCallback(() => {
    console.log("I'm running !!! >>>>>>>");
    if (sessionStorage.getItem("email")) {
      emailSubmittingHandler();
    }
  }, [emailSubmittingHandler]);

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
                  {!emailVerified ? "Verify" : "Verified"}
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
          <MainInfo to={`/profile/${data.gid}`}>
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
          </MainInfo>
        ))
      )}
    </StyledContainer>
  );
};

export default Profile;