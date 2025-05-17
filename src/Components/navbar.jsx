import React, { useState } from 'react';
import "../CSS/Navbar.css";

const Navbar = ({ currentPage, toggleSidebar, sidebarCollapsed }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    console.log('User is searching for:', value);
  };

  const formatPageName = (pageName) => {

    if (pageName === 'overview') return 'Overview';
   
    return pageName;
  };
  
  return (
    <div className={`navbar ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="d-flex align-items-center">
        <span className="mobile-toggle" id="mobileToggle" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </span>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
            <img src="/Text.svg" alt="separator" />
            <li className="breadcrumb-item active" aria-current="page">
              {formatPageName(currentPage)}
            </li>
          </ol>
        </nav>
      </div>
      
      <div className="navbar-right">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="notification-icon">
          <img src="/Group.svg" className="badgess" alt="Notifications" />
        </div>
        <img src="/Avatar.svg" className="user-avatar" alt="User Avatar" />
      </div>
    </div>
  );
};

export default Navbar;