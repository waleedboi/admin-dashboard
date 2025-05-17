import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./Components/sidebar";
import ResetPassword from './Components/ResetPassword';


import Navbar from "./Components/navbar";
import Home from "./Components/Home";
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

import "./App.css";

function Dashboard({ currentPage, setCurrentPage, sidebarCollapsed, toggleSidebar }) {
  return (
    <div className="app-container">
      <Sidebar
        toggleSidebar={toggleSidebar}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        collapsed={sidebarCollapsed}
      />

      <div className="main-section">
        
        <Navbar currentPage={currentPage} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          {currentPage === "Home" && <Home />}
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
        </div>
      </div>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [tokenExists, setTokenExists] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // setTokenExists(!!token);

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
       <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/VerifyEmail" element={<VerifyEmail />} />

        <Route
          path="/login"
          element={tokenExists ? <Navigate to="/" /> : <Login onLoginSuccess={() => setTokenExists(true)} />}
        />
        <Route
          path="/signup"
          element={tokenExists ? <Navigate to="/" /> : <Signup onSignupSuccess={() => setTokenExists(true)} />}
        />
        <Route
          path="/"
          element={
            tokenExists ? (
              <Dashboard
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                sidebarCollapsed={sidebarCollapsed}
                toggleSidebar={toggleSidebar}
              />
            ) : (
              <Navigate to="/signup" />
            )
          }
        />
        <Route path="*" element={<Navigate to={tokenExists ? "/" : "/signup"} />} />
      </Routes>
    </Router>
  );
}

export default App;

