// OTPVerificationPopup.js
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./SignUp.styled";

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const OTPVerificationPopup = ({ onSubmit, onClose }) => {
  const [otp, setOTP] = useState("");

  const handleSubmit = () => {
    // Call the onSubmit function with the entered OTP
    onSubmit(otp);
    // Simulating OTP verification success
    // You can replace this with your actual OTP verification logic
    setTimeout(() => {
      onClose(); // Close the popup after submission
    }, 1000);
  };

  return (
    <PopupOverlay>
      <PopupContainer>
        <h2>Enter OTP</h2>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          placeholder="Enter OTP"
        />
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={onClose}>Cancel</Button>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default OTPVerificationPopup;
