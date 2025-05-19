import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import ResetPassword from './Components/ResetPassword';
import Navbar from "./Components/navbar";
import Overview from "./Components/Overview";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Driver from "./Components/Driver";
import Dispute from "./Components/Dispute";
import Content from "./components/Content";
import Analytics from "./Components/Analytics";
import FareManagement from "./Components/FareManagement";
import User from "./Components/User";
import Notification from "./Components/Notification";
import Monitoring from "./Components/monitoring";
import Support from "./Components/Support";
import Setting from "./Components/Setting";
import VerifyEmail from "./Components/VerifyEmail";
import Security from "./Components/Security";
import "./App.css";

function Dashboard({ currentPage, setCurrentPage, sidebarCollapsed, toggleSidebar }) {
  return (
    <div className="app-container" style={{ display: "flex" }}>
      <Sidebar
        toggleSidebar={toggleSidebar}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        collapsed={sidebarCollapsed}
      />

      <div className="main-section" style={{ flexGrow: 1 }}>
        <Navbar currentPage={currentPage} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          {currentPage === "Overview" && <Overview />}
          {currentPage === "Driver" && <Driver />}
          {currentPage === "Dispute" && <Dispute />}
          {currentPage === "Content" && <Content />}
          {currentPage === "Analytics" && <Analytics />}
          {currentPage === "FareManagement" && <FareManagement />}
          {currentPage === "User" && <User />}
          {currentPage === "Notification" && <Notification />}
          {currentPage === "Monitoring" && <Monitoring />}
          {currentPage === "Support" && <Support />}
          {currentPage === "Setting" && <Setting />}
           {currentPage === "Security" && <Security />}
         
        </div>
      </div>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("Overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="security" element={<Security />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/VerifyEmail" element={<VerifyEmail />} />
        <Route
          path="/overview"
          element={
            <Dashboard
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              sidebarCollapsed={sidebarCollapsed}
              toggleSidebar={toggleSidebar}
            />
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
        
     {/* <Route
    path="/security"
    element={
      <Dashboard
        currentPage="Security"
        setCurrentPage={setCurrentPage}
        sidebarCollapsed={sidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />
    }
  /> */}

      </Routes>
    </Router>
  );
}

export default App;

