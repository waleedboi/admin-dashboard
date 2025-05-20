import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Signup.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // No token is saved
    console.log("Signup form submitted");
    navigate("/VerifyEmail");
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <img src="/DELIVERMEE LOGO 1.svg" alt="Logo" />

      <h2 className="signup">Sign Up</h2>
      <p className="subtitle">Enter Your Account Details.</p>

      <h3>Account Information</h3>

      <label  style={{ marginBottom: -5}}>Username</label>
      <input type="text" placeholder="Enter your username" required />

      <label style={{ marginBottom: -5}}>Email</label>
      <input type="email" placeholder="Enter your email" required />

      <label style={{ marginBottom: -5}}>Password</label>
      <div className="password-field">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          required
          className="password-input"
        />
        <span
          onClick={togglePassword}
          role="button"
          aria-label="Toggle password visibility"
          className="toggle-icon"
        >
          {/* <img src="/eye.svg" alt="Toggle visibility" /> */}
        </span>
      </div>

      <div className="checkbox">
        <input type="checkbox" id="terms" required />
        <label htmlFor="terms" style={{ marginBottom: -5}}>
          I agree to{" "}
          <a href="#" className="privacy">
            privacy policy & terms
          </a>
        </label>
      </div>

      <button type="submit">Sign up</button>

      <p className="login-link">
        Already have an account?{" "}
        <Link to="/login" style={{ color: "#076271", cursor: "pointer" }}>
          Log in
        </Link>
      </p>

      <p className="or">or Sign up with</p>
      <div className="social-icons">
        <img src="/Icon left.svg" alt="Google" />
        <img src="/Microsoft.svg" alt="Microsoft" />
      </div>
    </form>
  );
};

export default Signup;

