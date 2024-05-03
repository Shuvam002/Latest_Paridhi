// OTPVerificationPopup.js
import React, { useState } from "react";
import styled from "styled-components";
import { InputField } from "./SignUp.styled";

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  font-family: "Jost", sans-serif;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgb(255, 255, 255);
  /* width: 15%; */
  text-align: center;
`;
const ButtonOTP = styled.div`
  /* margin:0 0 1rem 0; */
  padding: 0.3rem;
  border: 2px solid red;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background-color: rgb(255, 101, 96);
    color: white;
  }
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  border: 2px solid ${({ type }) => (type === "submit" ? "green" : "red")};
  color: ${({ type }) => (type === "submit" ? "green" : "red")};

  &:hover {
    background-color: ${({ type }) => (type === "submit" ? "green" : "red")};
    color: white;
  }
`;

const Paragraph = styled.p`
  font-size: 0.8rem;
`;

const OTPVerificationPopup = ({ onSubmit, onClose }) => {
  const [otp, setOTP] = useState("");

  const handleSubmit = () => {
    onSubmit(otp);

    setTimeout(() => {
      onClose();
    }, 1000);
  };
  console.log("this is signUP");
  return (
    <PopupOverlay>
      <PopupContainer>
        <h2 style={{ textAlign: "center" }}>Enter OTP</h2>
        <InputField
          type="number"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          placeholder="Enter OTP"
          className="placeholderStyle"
          style={{
            height: "2rem",
            width: "80%",
            backgroundColor: "rgb(163, 163, 163)",
            color: "black",
          }}
        />
        <Paragraph>*Please check you email</Paragraph>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
          }}
        >
          <ButtonOTP
            style={{
              border: "2px solid green",
              hover: {
                backgroundColor: "green,",
              },
            }}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </ButtonOTP>

          <ButtonOTP onClick={onClose}>Cancel</ButtonOTP>
        </div>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default OTPVerificationPopup;
