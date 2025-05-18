import React, { useState } from 'react';
import "../CSS/Setting.css";

const UserProfile = () => {
  const [activePage, setActivePage] = useState('account');
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  
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
            <div className="action-buttons">
              <button className="save-btn">Update Password</button>
              <button className="cancel-btn">Cancel</button>
            </div>
          </div>
        )}

        {activePage === 'billing' && (
          <div className="profile-card">
            <h2>Billing & Plans</h2>
            <p>Your billing information and subscription plans will be displayed here.</p>
          </div>
        )}

        {activePage === 'notifications' && (
          <div className="profile-card">
            <h2>Notification Settings</h2>
            <p>Manage your notification preferences here.</p>
          </div>
        )}

        {activePage === 'connections' && (
          <div className="profile-card">
            <h2>Connections</h2>
            <p>Manage your connected accounts and services.</p>
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