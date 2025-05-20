import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { email, password });

    if (email.trim() === "admin@example.com" && password.trim() === "123456") {
      console.log("Login successful, navigating to overview");
      navigate("/overview"); 
    } else {
      console.log("Login failed");
      setError("Invalid email or password");
    }
  };

  return (
    <form className="signup-form login-form" onSubmit={handleSubmit} >
      <img src="/DELIVERMEE LOGO 1.svg" alt="Logo" />
      <h2 className="signup">Login</h2>
      <p className="subtitle">Enter Your Account Details to Log In..</p>

      <h4 style={{ fontSize: '24px', fontWeight: '600', color: '#2F2B3DE5', textAlign: "left", marginBottom: "10px" }}>
        Account Information
      </h4>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <label style={{ marginBottom: -5 }}>Email or Username</label>
<input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  style={{ marginTop: 0 }}
/>

      <label style={{ marginBottom: -5 }}>Password</label>
      <div className="password-field">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          required
          className="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

      <div className="form-options" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '11px' }}>
  <div className="remember-me" style={{ display: 'flex', alignItems: 'center', gap: '4px', transform: 'translateY(2px)' }}>
    <input type="checkbox" id="terms" style={{ margin: 0 }} />
    <label htmlFor="terms" style={{ marginBottom: -5}}>Remember Me</label>
  </div>
  <Link to="/reset-password" className="forgot-password" style={{ color: '#007bff', fontSize: '11px', whiteSpace: 'nowrap', textDecoration: 'none' }}>
    Forgot Password?
  </Link>
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
        <Link to="/signup" style={{ color: "#076271", cursor: "pointer", fontSize: "15px", fontWeight: "400" }}>
          Create an account
        </Link>
      </p>

      <p className="or">or Login with</p>
      <div className="social-icons">
        <img src="/Icon left.svg" alt="Google" />
        <img src="/Microsoft.svg" alt="Microsoft" />
      </div>
    </form>
  );
};

export default Login;





