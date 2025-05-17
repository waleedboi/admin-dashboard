import React, { useEffect } from 'react';
import '../CSS/sidebar.css';

function Sidebar({ collapsed, toggleSidebar, currentPage, setCurrentPage }) {
 
  useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      if (collapsed) {
        mainContent.style.marginLeft = '70px';
      } else {
        mainContent.style.marginLeft = '18%';
      }
    }
    
    return () => {
      if (mainContent) {
        mainContent.style.marginLeft = '0';
      }
    };
  }, [collapsed]);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`} id="sidebar">
      <div className="logo">
        <div>
          <span>DELIVER</span><span>MEE</span>
        </div>
        <img 
          src="/public/chevrons-left.svg" 
          alt="Toggle" 
          onClick={toggleSidebar} 
        />
      </div>
      
      <ul className="menu">
        <li
          id="dashboard-item"
          className={`menu-item ${currentPage === 'Overview' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Overview')}
        >
          <img src="/public/Container.svg" alt="Dashboard" />
          <span>Dashboard</span>
        </li>
        
        <li
          className={`menu-item ${currentPage === 'User' ? 'active' : ''}`}
          onClick={() => setCurrentPage('User')}
        >
          <img src="/public/ListItem6.svg" alt="Users" />
          <span>Users</span>
        </li>
        
        <li
          id="driver-item"
          className={`menu-item ${currentPage === 'Driver' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Driver')}
        >
          <div className="menu-row">
            <div className="menu-left">
              <img src="/public/ListItem5.svg" alt="Drivers" />
              <span>Drivers</span>
            </div>
            <span className="badge">24</span>
          </div>
        </li>
        
        <li
          className={`menu-item ${currentPage === 'Trips' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Trips')}
        >
          <img src="/public/ListItem4.svg" alt="Trips" />
          <span>Trips</span>
        </li>
        
        <li
          className={`menu-item ${currentPage === 'Fare' ? 'active' : ''}`}
          onClick={() => setCurrentPage('FareManagement')}
        >
          <img src="/public/ListItem3.svg" alt="Fare" />
          <span>Fare Management</span>
        </li>
        
        <li
          className={`menu-item ${currentPage === 'Disputes' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Dispute')}
        >
          <img src="/public/ListItem3.svg" alt="Disputes" />
          <span>Disputes</span>
        </li>
        
        <li
          className={`menu-item ${currentPage === 'Notifications' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Notification')}
        >
          <img src="/public/ListItem2.svg" alt="Notifications" />
          <span>Notifications</span>
        </li>
        
        <li
          className={`menu-item ${currentPage === 'Analytics' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Analytics')}
        >
          <img src="/public/ListItem3.svg" alt="Analytics" />
          <span>Analytics</span>
        </li>
        
        <li
          className={`menu-item ${currentPage === 'Monitoring' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Monitoring')}
        >
          <img src="/public/ListItem3.svg" alt="Monitoring" />
          <span>Monitoring</span>
        </li>
        
        <li
          className={`menu-item ${currentPage === 'Content' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Content')}
        >
          <img src="/public/ListItem3.svg" alt="Content" />
          <span>Content</span>
        </li>

        <div className="menu-section">ACCOUNT</div>
        
        <li
          className={`menu-item ${currentPage === 'Support' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Support')}
        >
          <img src="/public/ListItem2.svg" alt="Support" />
          <span>Support</span>
        </li>
        
        <li
          className={`menu-item ${currentPage === 'Setting' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Setting')}
        >
          <img src="/public/ListItem2.svg" alt="Setting" />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;