


import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../public/DELIVERMEE LOGO 1.svg';
import "../CSS/VerifyEmail.css";

const EmailVerification = () => {
  const navigate = useNavigate(); 

  const handleContinue = () => {
    navigate("/login"); 
  };

  return (
    <div className="email-verification-card">
      <img src={logo} alt="Delivermee Logo" className="logo-image" />

      <h2 className="title">Verify your email ✉️</h2>
      <p className="subtitle">
        Account activation code sent to your email address:
        <br />
        <span className="email">john.doe@email.com</span>. Please enter code to continue.
      </p>

      <div className="input-group">
        <label htmlFor="code" >Enter Verification code here</label>
        <input type="text" id="code" placeholder="Code" />
      </div>

      <button className="continue-btn" onClick={handleContinue}>
        Continue
      </button>

      <p className="resend-text">
        Didn't get the mail? <button className="resend-btn">Resend</button>
      </p>
    </div>
  );
};

export default EmailVerification;
