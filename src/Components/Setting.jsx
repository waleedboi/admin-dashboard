import React, { useState } from 'react';
import "../CSS/Setting.css";
import { FiCopy } from "react-icons/fi";


const UserProfile = () => {
  const [activePage, setActivePage] = useState('account');
  const [activeTab, setActiveTab] = useState('account'); 
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [keys] = useState([
    {
      id: 1,
      name: "Server Key 1",
      key: "23eaf1f0-f4f7-495e-8b86-fad3261282ac",
      access: "Full Access",
      created: "28 Apr 2021, 18:20 GMT +4:10",
    },
    {
      id: 2,
      name: "Server Key 2",
      key: "ab12cd34-ef56-7890-ab12-cd34ef567890",
      access: "Read Only",
      created: "10 May 2022, 10:00 GMT +4:10",
    },
  ]);

  const [connections, setConnections] = useState({
    google: true,
    mailchimp: true,
    facebook: true,
    twitter: false,
    linkedin: false,
  });

  const [settings, setSettings] = useState({
    "New for you": { email: true, browser: false, app: false },
    "Account activity": { email: false, browser: true, app: false },
    "When browser session logs in": { email: false, browser: false, app: true },
    "A new device is linked": { email: false, browser: true, app: false }
  });

  const [frequency, setFrequency] = useState("daily");

  const handleToggle = (account) => {
    setConnections(prev => ({
      ...prev,
      [account]: !prev[account]
    }));
  };

  const handleNotificationToggle = (settingType, channel) => {
    setSettings(prev => ({
      ...prev,
      [settingType]: {
        ...prev[settingType],
        [channel]: !prev[settingType][channel]
      }
    }));
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  const handleSaveChanges = () => {
    console.log("Saving settings:", { settings, frequency });
    // Add API logic here
  };

  const handleReset = () => {
    setSettings({
      "New for you": { email: true, browser: false, app: false },
      "Account activity": { email: false, browser: true, app: false },
      "When browser session logs in": { email: false, browser: false, app: true },
      "A new device is linked": { email: false, browser: true, app: false }
    });
    setFrequency("daily");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert(`Copied API Key: ${text}`))
      .catch(() => alert("Failed to copy!"));
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDeleteChange = (e) => {
    setConfirmDelete(e.target.checked);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="container">
        <h1 className="support-issue">Support & Issue Resolution</h1>
      <div className='profile'>
        <div className="profile-cards">
          <div className="nav-tabs" >
            <div 
  className={`tab-item ${activePage === 'checkr' ? 'active' : ''}`} 
  onClick={() => handlePageChange('checkr')}
>
  <span className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v16H4z" />
      <path d="M9 9h6v6H9z" />
    </svg>
  </span>
  <span>Checkr</span>
</div>
            <div  
              className={`tab-item ${activePage === 'account' ? 'active' : ''}`} 
              onClick={() => handlePageChange('account')}
            >
              <span className="icon"id='accountss' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <span id='accountss'>Account</span>
            </div>

            <div 
              className={`tab-item ${activePage === 'security' ? 'active' : ''}`}
              onClick={() => handlePageChange('security')}
            >
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </span>
              <span>Security</span>
            </div>
            
            <div 
              className={`tab-item ${activePage === 'billing' ? 'active' : ''}`}
              onClick={() => handlePageChange('billing')}
            >
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
              </span>
              <span>Billing & Plans</span>
            </div>
            
            <div 
              className={`tab-item ${activePage === 'notifications' ? 'active' : ''}`}
              onClick={() => handlePageChange('notifications')}
            >
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
              </span>
              <span>Notifications</span>
            </div>
            
            <div 
              className={`tab-item ${activePage === 'connections' ? 'active' : ''}`}
              onClick={() => handlePageChange('connections')}
            >
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              </span>
              <span>Connections</span>
            </div>
            
            <div 
              className={`tab-item ${activePage === 'services' ? 'active' : ''}`}
              onClick={() => handlePageChange('services')}
            >
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
              </span>
              <span>External Services Info</span>
            </div>
          </div>
          
          {activePage === 'account' && (
            
            <div className="profile-section">
            
              <div className="profile-photo-section">
                <button
  className={activeTab === 'checkr' ? 'active-tab' : ''}
  onClick={() => setActiveTab('checkr')}
>
  Checkr
</button>
                
                <div className="profile-photo-container">
                
                  <img src="/public/Avatarrr.svg" alt="Profile" className="profile-photo" />
                  
                  <div className="photo-buttons">
                    <button className="upload-btn">Upload New Photo</button>
                    <button className="reset-bttn">Reset</button>
                  </div>
                </div>
                <div className="photo-info">
                  Allowed JPG, GIF or PNG. Max size of 800K.
                </div>
              </div>
            </div>
          )}
        </div>

        {activePage === 'account' && (
          <div className="profile-card">
            <div className="form-grid">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" defaultValue="John" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" defaultValue="Doe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="form-group">
                <label>Organization</label>
                <input type="text" defaultValue="Revocde" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" defaultValue="222 555 0111" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" defaultValue="Address" />
              </div>
              <div className="form-group">
                <label>Province</label>
                <input type="text" defaultValue="California" />
              </div>
              <div className="form-group">
                <label>Postal Code</label>
                <input type="text" defaultValue="23456" />
              </div>

              <div className="form-group">
                <label>Country</label>
                <div className="select-wrapper">
                  <select>
                    <option>Select Country</option>
                  </select>
                  <div className="select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Language</label>
                <div className="select-wrapper">
                  <select>
                    <option>Select Language</option>
                  </select>
                  <div className="select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Time Zone</label>
                <div className="select-wrapper">
                  <select>
                    <option>Select Timezone</option>
                  </select>
                  <div className="select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Currency</label>
                <div className="select-wrapper">
                  <select>
                    <option>Select Currency</option>
                  </select>
                  <div className="select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="action-buttons">
              <button className="save-btn">Save Changes</button>
              <button className="cancel-btn">Cancel</button>
            </div>
            <div className="delete-section">
              <h3 className="delete-heading">Delete Account</h3>

              {!showDeleteConfirmation ? (
                <div className="delete-initial">
                  <button className="delete-btn" onClick={handleDeleteClick}>I want to delete my account</button>
                </div>
              ) : (
                <div className="delete-confirmation">
                  <div className="confirmation-box">
                    <h4>Are you sure you want to delete your account?</h4>
                    <p>Once you delete your account, there is no going back. Please be certain.</p>

                    <div className="confirm-checkbox">
                      <input
                        type="checkbox"
                        id="confirmDelete"
                        checked={confirmDelete}
                        onChange={handleConfirmDeleteChange}
                      />
                      <label htmlFor="confirmDelete">I confirm my account deactivation</label>
                    </div>

                    <button
                      className={`deactivate-btn ${confirmDelete ? 'enabled' : ''}`}
                      disabled={!confirmDelete}
                    >
                      Deactivate account
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activePage === 'security' && (
          <div className="profile-card" id='security-settings-card'>
            <h2>Security Settings</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Current Password</label>
                <input type="password" />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input type="password" />
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <input type="password" />
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
            <div className="action-buttons">
              <button className="save-btn">Update Password</button>
              <button className="cancel-btn">Cancel</button>
            </div>
            <div className="card section">
        <h3>Two-steps verification</h3>
        <p className="status">Two factor authentication is not enabled yet.</p>
        <p className="description">
          Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.{' '}
          <a href="#" className="learn-link">Learn more.</a>
        </p>
        <button className="enable-btn">Enable two-factor authentication</button>
      </div>
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
            <div className="section">
      <h3>API Key List & Access</h3>
      <p className="description">
        An API key is a simple encrypted string that identifies an application
        without any principal. They are useful for accessing public data
        anonymously, and are used to associate API requests with your project
        for quota and billing.
      </p>

      {keys.map(({ id, name, key, access, created }) => (
        <div className="api-key" key={id}>
          <div className="api-key-header">
            <strong>{name}</strong>
            <span className="badge">{access}</span>
          </div>
          <p className="key">
            {key}{" "}
            <FiCopy
              className="copy-icon"
              style={{ cursor: "pointer", marginLeft: "8px" }}
              onClick={() => copyToClipboard(key)}
              title="Copy API Key"
            />
          </p>
          <p className="created-date">Created on {created}</p>
        </div>
      ))}
    </div>
          </div>
          
        )}

        {activePage === 'billing' && (
          <div className="billing-container">
      <h2>Billing & Plans</h2>
      <div className="current-plan-card">
        <div className="plan-left">
          <h2>Current Plan</h2>
          <p className="plan-title">Your Current Plan is Basic</p>
          <p className="plan-desc">A simple start for everyone</p>
          <p className="plan-date" style={{ paddingTop: '10px' }}>
  <strong>Active until Dec 09, 2021</strong>
</p>
          <p className="plan-info" style={{ paddingBottom: '10px' }}>We will send you a notification upon Subscription expiration</p>

          <p className="plan-price">
            $199 Per Month <span className="badge">Popular</span>
          </p>
          <p className="plan-note">Standard plan for small to medium businesses</p>

          <div className="plan-buttons">
            <button className="btn-upgrade">Upgrade Plan</button>
            <button
  style={{
    backgroundColor: '#FF4C5129',
    color: '#FF4C51',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500'
  }}
>
  Cancel Subscription
</button>
          </div>
        </div>

        <div className="plan-right">
          <div className="alert-box">
            <span className="alert-icon">⚠️</span>
            <div>
              <h4>We need your attention!</h4>
              <p>Your plan requires updates</p>
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress-labels">
              <span>Days</span>
              <span>12 of 30 Days</span>
            </div>
            <div className="bar">
              <div className="bar-filled" style={{ width: '40%' }}></div>
            </div>
            <p className="bar-desc">18 days remaining until your plan requires update</p>
          </div>
        </div>
      </div>
      <div className="payment-methods-card">
        <div className="payment-left">
          <h3>Payment Methods</h3>
          <div className="payment-options">
            <label><input type="radio" name="method" defaultChecked /> Credit/Debit/ATM Card</label>
            <label><input type="radio" name="method" /> Apple Pay account</label>
          </div>

          <input type="text" placeholder="Card Number" className="input" />
          <div className="row">
            <input type="text" placeholder="Name" className="input" />
            <input type="text" placeholder="Expiry Date" className="input" />
            <input type="text" placeholder="CVV Code" className="input" />
          </div>

          <label className="save-card">
            <input type="checkbox" />
            Save card for future billing?
          </label>

          <div className="button-group">
            <button className="btn btn-primary">Save Changes</button>
            <button className="btn btn-cancel">Cancel</button>
          </div>
        </div>

        <div className="payment-right">
          <h4>My Cards</h4>

          <div className="card-item">
            <div>
              <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="card" className="card-logo" />
              <div className="card-name">Tom McBride <span className="badge">Primary</span></div>
              <div className="card-number">**** **** **** 9865</div>
            </div>
            <div className="card-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
            <div className="card-expiry">Card expires at 12/24</div>
          </div>

          <div className="card-item">
            <div className="card-name">Mildred Wagner</div>
            <div className="card-number">**** **** **** 5678</div>
            <div className="card-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
            <div className="card-expiry">Card expires at 02/24</div>
          </div>
        </div>
      </div>
      <div className="form-container">
        <h2>Billing Address</h2>
        <form>
          <div className="row">
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" placeholder="Pixinvent" />
            </div>
            <div className="form-group">
              <label>Billing Email</label>
              <input type="email" placeholder="john.doe@example.com" />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Tax ID</label>
              <input type="text" placeholder="Enter Tax ID" />
            </div>
            <div className="form-group">
              <label>HST Number</label>
              <input type="text" placeholder="Enter HST Number" />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Mobile</label>
              <select>
                <option>US (+1)</option>
              </select>
            </div>
            <div className="form-group">
              <label>Country</label>
              <select>
                <option>USA</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Billing Address</label>
            <input type="text" placeholder="Billing Address" />
          </div>

          <div className="row">
            <div className="form-group">
              <label>Province</label>
              <input type="text" placeholder="California" />
            </div>
            <div className="form-group">
              <label>Postal Code</label>
              <input type="text" placeholder="231465" />
            </div>
          </div>

          <div className="button-row">
            <button type="submit" className="save">Save Changes</button>
            <button type="button" className="discard">Discard</button>
          </div>
        </form>
      </div>
    </div>
        )}

        {activePage === 'notifications' && (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="mb-4">
        <h2 className="text-lg font-medium text-gray-900">Recent Devices</h2>
        <p className="text-sm text-gray-500">
          You must permission from your browser to show notifications. <span className="text-blue-500">Manage Browser settings</span>
        </p>
      </div>

      <table className="w-full mb-6">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-2 text-left text-sm font-medium text-gray-500 w-1/3">Type</th>
            <th className="py-2 text-center text-sm font-medium text-gray-500">Email</th>
            <th className="py-2 text-center text-sm font-medium text-gray-500">Browser</th>
            <th className="py-2 text-center text-sm font-medium text-gray-500">App</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(settings).map(([type, channels]) => (
            <tr key={type} className="border-b border-gray-100">
              <td className="py-3 text-sm text-gray-700">{type}</td>
              {['email', 'browser', 'app'].map(channel => (
                <td key={channel} className="py-3 text-center">
                  <div className="flex justify-center">
                    <input
                      type="checkbox"
                      checked={channels[channel]}
                      onChange={() => handleNotificationToggle(type, channel)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          When should we send you notifications?
        </label>
        <select
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={frequency}
          onChange={handleFrequencyChange}
        >
          <option value="immediately">Immediately when received</option>
          <option value="daily">Daily digest</option>
          <option value="weekly">Weekly summary</option>
          <option value="never">Never</option>
        </select>
      </div>

      <div className="flex space-x-3">
        <button
          type="button"
          onClick={handleSaveChanges}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Discard
        </button>
      </div>
    </div>
   
        )}

        {activePage === 'connections' && (
                 <div className="account-connections-container">
      <div className="connections-section">
        <h2>Connected Accounts</h2>
        <p className="section-description">
          Manage your connected accounts to use with this app
        </p>
        
        <div className="account-item">
          <div className="account-info">
            <iv className="account-logo google"><img src="/public/google.svg"></img></iv>
            <div className="account-details">
              <h3>Google</h3>
              <span className="account-service">Google account</span>
            </div>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={connections.google}
              onChange={() => handleToggle('google')}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
        
        <div className="account-item">
          <div className="account-info">
            <div className="account-logo mailchimp">M</div>
            <div className="account-details">
              <h3>MailChimp</h3>
              <span className="account-service">Email marketing service</span>
            </div>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={connections.mailchimp}
              onChange={() => handleToggle('mailchimp')}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>
      
      <div className="connections-section">
        <h2>Social Accounts</h2>
        <p className="section-description">
          Connect your social accounts to use with this app
        </p>
        
        <div className="account-item">
          <div className="account-info">
            <div className="account-logo facebook">f</div>
            <div className="account-details">
              <h3>Facebook</h3>
            </div>
          </div>
          <div className="connection-controls">
            <button className="edit-btn">✏️</button>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={connections.facebook}
                onChange={() => handleToggle('facebook')}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
        
        <div className="account-item">
          <div className="account-info">
            <div className="account-logo twitter">t</div>
            <div className="account-details">
              <h3>Twitter</h3>
            </div>
          </div>
          <div className="connection-controls">
            <button className="edit-btn">✏️</button>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={connections.twitter}
                onChange={() => handleToggle('twitter')}
              />
              <span className={`toggle-slider ${!connections.twitter ? 'disconnected' : ''}`}></span>
            </label>
          </div>
        </div>
        
        <div className="account-item">
          <div className="account-info">
            <div className="account-logo linkedin">in</div>
            <div className="account-details">
              <h3>LinkedIn</h3>
            </div>
          </div>
          <div className="connection-controls">
            <button className="edit-btn">✏️</button>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={connections.linkedin}
                onChange={() => handleToggle('linkedin')}
              />
              <span className={`toggle-slider ${!connections.linkedin ? 'disconnected' : ''}`}></span>
            </label>
          </div>
        </div>
      </div>
    </div>
        )}

        {activePage === 'services' && (
          <div className="profile-card">
            <h2>External Services Info</h2>
            <p>Information about connected external services will appear here.</p>
          </div>
        )}
      </div>


      
      
    </div>
    
  );
};

export default UserProfile;

