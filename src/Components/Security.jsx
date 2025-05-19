import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FiCopy } from "react-icons/fi";
import "../CSS/Security.css";


const Security = () => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const toggleVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const keys = [1, 2, 3];

  return (
    <div className="settings-page">
      <h2>Support & Issue Resolution</h2>

      {/* Change Password */}
      <div className="card section">
        <h3>Change Password</h3>
        <form className="form-grid">
          <div className="form-group">
            <label>Current Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword.current ? "text" : "password"}
                placeholder="Current Password"
              />
              <span onClick={() => toggleVisibility("current")}>
                {showPassword.current ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label>New Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword.new ? "text" : "password"}
                placeholder="New Password"
              />
              <span onClick={() => toggleVisibility("new")}>
                {showPassword.new ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label>Confirm New Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword.confirm ? "text" : "password"}
                placeholder="Confirm New Password"
              />
              <span onClick={() => toggleVisibility("confirm")}>
                {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="password-rules">
            <p>Password Requirements:</p>
            <ul>
              <li>Minimum 8 characters long – the more, the better</li>
              <li>At least one lowercase character</li>
              <li>At least one number, symbol, or whitespace character</li>
            </ul>
          </div>

          <div className="form-actions">
            <button type="submit" className="save-btn">Save Changes</button>
            <button type="button" className="reset-btn">Reset</button>
          </div>
        </form>
      </div>

      {/* Two Factor Authentication */}
      <div className="card section">
        <h3>Two-steps verification</h3>
        <p className="status">Two factor authentication is not enabled yet.</p>
        <p className="description">
          Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.{' '}
          <a href="#" className="learn-link">Learn more.</a>
        </p>
        <button className="enable-btn">Enable two-factor authentication</button>
      </div>

      {/* Create API Key */}
      <div className="card section">
        <h3>Create an API key</h3>

        <label className="form-label">Choose the Api key type you want to create</label>
        <select className="form-select">
          <option>Choose Key Type</option>
          <option>Server Key</option>
        </select>

        <label className="form-label">Name the API key</label>
        <input type="text" className="form-input" placeholder="Server key 1" />

        <button className="create-btn">Create key</button>
      </div>

      {/* API Key List */}
      <div className="section">
        <h3>API Key List & Access</h3>
        <p className="description">
          An API key is a simple encrypted string that identifies an application without any principal.
          They are useful for accessing public data anonymously, and are used to associate API requests
          with your project for quota and billing.
        </p>
        {keys.map((key, index) => (
          <div className="api-key" key={index}>
            <div className="api-key-header">
              <strong>Server Key {key}</strong>
              <span className="badge">Full Access</span>
            </div>
            <p className="key">
              23eaf1f0-f4f7-495e-8b86-fad3261282ac  <FiCopy className="copy-icon" />
            </p>
            <p className="created-date">Created on 28 Apr 2021, 18:20 GMT +4:10</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Security;


