import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "demo_token");
    navigate("/");
  };

  return (
    <form className="signup-form login-form" onSubmit={handleSubmit}>
      <img src="/public/DELIVERMEE LOGO 1.svg" alt="Logo" />
      <h2 className="signup">Login</h2>
      <p className="subtitle">Enter Your Account Details to Log In..</p>

      <h4 style={{ fontSize: '24px', fontWeight: '600', color: '#2F2B3DE5', textAlign: "left", marginBottom: "10px" }}>
        Account Information
      </h4>

      <label>Email or Username</label>
      <input type="email" placeholder="Enter your email" required />

      <label>Password</label>
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
          <img src="/eye.svg" alt="Toggle visibility" />
        </span>
      </div>


      <div className="form-options">
  <div className="remember-me">
    <input type="checkbox" id="terms" required />
    <label htmlFor="terms">Remember Me</label>
  </div>
  <Link to="/reset-password" className="forgot-password">Forgot Password?</Link>
</div>


      <button
        type="submit"
        style={{
          backgroundColor: '#076271',
          color: 'white',
          border: 'none',
          padding: '10px 0',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Log in
      </button>

      <p className="login-link">
        New on our platform?{" "}
        <Link to="/signup" style={{ color: "#076271", cursor: "pointer", fontSize: "15px",fontWeight:"400" }}>
          Create an account
        </Link>
      </p>

      <p className="or">or Login with</p>
      <div className="social-icons">
        <img src="/public/Icon left.svg" alt="Google" />
        <img src="/public/Microsoft.svg" alt="Microsoft" />
      </div>
    </form>
  );
};

export default Login;



