import React, { useEffect } from 'react';
import '../CSS/sidebar.css';
import {
  FaTachometerAlt,
  FaUser,
  FaCar,
  FaRoute,
  FaMoneyCheckAlt,
  FaGavel,
  FaBell,
  FaChartBar,
  FaDesktop,
  FaFileAlt,
  FaHeadset,
  FaCog,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

function Sidebar({ collapsed, toggleSidebar, currentPage, setCurrentPage }) {
  useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.style.marginLeft = collapsed ? '70px' : '18%';
    }
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      if (window.innerWidth <= 768) {
        if (!collapsed) {
          sidebar.classList.add('open');
        } else {
          sidebar.classList.remove('open');
        }
      }
    }

    return () => {
      if (mainContent) {
        mainContent.style.marginLeft = '0';
      }
    };
  }, [collapsed]);
  useEffect(() => {
    const handleResize = () => {
      const sidebar = document.getElementById('sidebar');
      if (sidebar) {
        if (window.innerWidth <= 768) {
          if (!collapsed) {
            sidebar.classList.add('open');
          } else {
            sidebar.classList.remove('open');
          }
        } else {
          sidebar.classList.remove('open');
        }
      }
    };

    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [collapsed]);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`} id="sidebar">
       <div className="logo">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span className="logo-text logo-text-deliver">DELIVER</span>
        <span className="logo-text logo-text-mee">MEE</span>
      </div>
      {collapsed ? (
        <FaAngleDoubleRight className="toggle-icon" onClick={toggleSidebar} />
      ) : (
        <FaAngleDoubleLeft className="toggle-icon" onClick={toggleSidebar} />
      )}
    </div>

      <ul className="menu">
        <li className={`menu-item ${currentPage === 'Overview' ? 'active' : ''}`} onClick={() => setCurrentPage('Overview')}>
          <FaTachometerAlt className="dash" />
          <span className="menu-text">Dashboard</span>
          
        </li>

        <li className={`menu-item ${currentPage === 'User' ? 'active' : ''}`} onClick={() => setCurrentPage('User')}>
          <FaUser className="dash" />
          <span className="menu-text">Users</span>
        </li>
        <li className={`menu-item ${currentPage === 'Driver' ? 'active' : ''}`} onClick={() => setCurrentPage('Driver')}>
          <div className="menu-row">
            <div className="menu-left">
              <FaCar className="dash" />
              <span className="menu-text">Drivers</span>
            </div>
            <span className="badge">24</span>
          </div>
        </li>


        <li className={`menu-item ${currentPage === 'Trips' ? 'active' : ''}`} onClick={() => setCurrentPage('Trips')}>
          <FaRoute className="dash" />
          <span className="menu-text">Trips</span>
        </li>

        <li className={`menu-item ${currentPage === 'FareManagement' ? 'active' : ''}`} onClick={() => setCurrentPage('FareManagement')}>
          <FaMoneyCheckAlt className="dash" />
          <span className="menu-text">Fare Management</span>
        </li>

        <li className={`menu-item ${currentPage === 'Dispute' ? 'active' : ''}`} onClick={() => setCurrentPage('Dispute')}>
          <FaGavel className="dash" />
          <span className="menu-text">Disputes</span>
        </li>

        <li className={`menu-item ${currentPage === 'Notification' ? 'active' : ''}`} onClick={() => setCurrentPage('Notification')}>
          <FaBell className="dash" />
          <span className="menu-text">Notifications</span>
        </li>

        <li className={`menu-item ${currentPage === 'Analytics' ? 'active' : ''}`} onClick={() => setCurrentPage('Analytics')}>
          <FaChartBar className="dash" />
          <span className="menu-text">Analytics</span>
        </li>

        <li className={`menu-item ${currentPage === 'Monitoring' ? 'active' : ''}`} onClick={() => setCurrentPage('Monitoring')}>
          <FaDesktop className="dash" />
          <span className="menu-text">Monitoring</span>
        </li>

        <li className={`menu-item ${currentPage === 'Content' ? 'active' : ''}`} onClick={() => setCurrentPage('Content')}>
          <FaFileAlt className="dash" />
          <span className="menu-text">Content</span>
        </li>

        {!collapsed && <div className="menu-section">ACCOUNT</div>}

        <li className={`menu-item ${currentPage === 'Support' ? 'active' : ''}`} onClick={() => setCurrentPage('Support')}>
          <FaHeadset className="dash" />
          <span className="menu-text">Support</span>
        </li>

        <li className={`menu-item ${currentPage === 'Setting' ? 'active' : ''}`} onClick={() => setCurrentPage('Setting')}>
          <FaCog className="dash" />
          <span className="menu-text">Settings</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;