import React, { useState } from 'react';
import '../CSS/Notification.css';

const Notifications = () => {
  const [settings, setSettings] = useState({
    newForYou: { email: true, browser: false, app: false },
    accountActivity: { email: false, browser: true, app: false },
    browserLogin: { email: false, browser: false, app: true },
    deviceLinked: { email: false, browser: true, app: false },
  });

  const [notifyTime, setNotifyTime] = useState("online");
  const [message, setMessage] = useState("");

  const handleCheckboxChange = (type, method) => {
    setSettings((prev) => ({
      ...prev,
      [type]: { ...prev[type], [method]: !prev[type][method] }
    }));
  };

  const handleSendNotification = () => {
    alert(`Notification sent to All Users:\n${message}`);
  };

  return (
    <div className="main-content">
    <div className="notification-container">
      <h2>Notifications</h2>

      <div className="notification-card">
        <h3>Recent Devices</h3>
        <p className="subtext">
          We need permission from your browser to show notifications. <span className="link">Request Permission</span>
        </p>

        <table>
          <thead>
            <tr>
              <th>TYPE</th>
              <th>EMAIL</th>
              <th>BROWSER</th>
              <th>APP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>New for you</td>
              <td><input type="checkbox" checked={settings.newForYou.email} onChange={() => handleCheckboxChange("newForYou", "email")} /></td>
              <td><input type="checkbox" checked={settings.newForYou.browser} onChange={() => handleCheckboxChange("newForYou", "browser")} /></td>
              <td><input type="checkbox" checked={settings.newForYou.app} onChange={() => handleCheckboxChange("newForYou", "app")} /></td>
            </tr>
            <tr>
              <td>Account activity</td>
              <td><input type="checkbox" checked={settings.accountActivity.email} onChange={() => handleCheckboxChange("accountActivity", "email")} /></td>
              <td><input type="checkbox" checked={settings.accountActivity.browser} onChange={() => handleCheckboxChange("accountActivity", "browser")} /></td>
              <td><input type="checkbox" checked={settings.accountActivity.app} onChange={() => handleCheckboxChange("accountActivity", "app")} /></td>
            </tr>
            <tr>
              <td>A new browser used to sign in</td>
              <td><input type="checkbox" checked={settings.browserLogin.email} onChange={() => handleCheckboxChange("browserLogin", "email")} /></td>
              <td><input type="checkbox" checked={settings.browserLogin.browser} onChange={() => handleCheckboxChange("browserLogin", "browser")} /></td>
              <td><input type="checkbox" checked={settings.browserLogin.app} onChange={() => handleCheckboxChange("browserLogin", "app")} /></td>
            </tr>
            <tr>
              <td>A new device is linked</td>
              <td><input type="checkbox" checked={settings.deviceLinked.email} onChange={() => handleCheckboxChange("deviceLinked", "email")} /></td>
              <td><input type="checkbox" checked={settings.deviceLinked.browser} onChange={() => handleCheckboxChange("deviceLinked", "browser")} /></td>
              <td><input type="checkbox" checked={settings.deviceLinked.app} onChange={() => handleCheckboxChange("deviceLinked", "app")} /></td>
            </tr>
          </tbody>
        </table>

        <div className="dropdown-row">
          <label>When should we send you notifications?</label>
          <select value={notifyTime} onChange={(e) => setNotifyTime(e.target.value)}>
            <option value="online">Only when I'm online</option>
            <option value="always">Always</option>
            <option value="never">Never</option>
          </select>
        </div>

        <div className="btn-group">
          <button className="save-btn">Save Changes</button>
          <button className="discard-btn">Discard</button>
        </div>
      </div>

      <div className="notification-card">
        <h3>Push Notification</h3>
        <div className="dropdown-row">
          <label>Send to</label>
          <select>
            <option>All Users</option>
            <option>Drivers Only</option>
          </select>
        </div>
        <textarea 
          placeholder="Type your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="send-btn" onClick={handleSendNotification}>Send Notification</button>
      </div>
    </div></div>
  );
};

export default Notifications;
