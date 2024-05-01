import React, { useState } from "react";
import styled from "styled-components";

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
  background-color: rgb(0,0,0);
  color: rgb(255, 101, 96);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgb(255, 101, 96);
`;
const ButtonOTP = styled.div`
  margin:1rem 0 1rem 0;
  padding: 0.5rem;
  border: 2px solid red;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s;

  &:hover{
    background-color: rgb(255, 101, 96);
    color: white;
  }
`;

const OTPVerificationPopup = ({ onSubmit, onClose }) => {
  const [otp, setOTP] = useState("");

  const handleSubmit = () => {
    onSubmit(otp);

    setTimeout(() => {
      onClose(); 
    }, 1000);
  };

  return (
    <PopupOverlay>
      <PopupContainer>
        <h2
        style={{textAlign:'center'}}>Enter OTP</h2>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          placeholder="Enter OTP"
          style={{height:'2rem'}}
        />
        <div style={{
          display:'flex',
          justifyContent:'space-around',
          textAlign:'center',
          }}>
        <ButtonOTP onClick={handleSubmit}>Submit</ButtonOTP>
        <ButtonOTP onClick={onClose}>Cancel</ButtonOTP>
        </div>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default OTPVerificationPopup;