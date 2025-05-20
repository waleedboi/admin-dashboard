import React, { useState } from "react";
import "../CSS/driver.css";

const statusList = ["Pending", "Verified", "Verified", "Verified", "In Review"];
const availabilityStatus = ["Offline", "Online", "Online", "Online", "Offline"];

const initialDrivers = [
  { name: "Alex John", vehicle: "SUV", status: statusList[0], availability: availabilityStatus[0] },
  { name: "Brian Smith", vehicle: "Truck", status: statusList[1], availability: availabilityStatus[1] },
  { name: "Clara Kent", vehicle: "Van", status: statusList[2], availability: availabilityStatus[2] },
  { name: "Diana Prince", vehicle: "Sedan", status: statusList[3], availability: availabilityStatus[3] },
  { name: "Evan Miles", vehicle: "Bike", status: statusList[4], availability: availabilityStatus[4] },
];

const Driver = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const recordsPerPage = 10;
  const totalPages = Math.ceil(initialDrivers.length / recordsPerPage);

  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
    setCurrentPage(1); // Reset to first page on search
  };

  const toggleSort = () => {
    setSortAsc(!sortAsc);
  };

  const exportToCSV = () => {
    try {
      const headers = ["Driver Name", "Vehicle Type", "Document Status", "Availability"];
      const rows = filteredDrivers.map(d => [d.name, d.vehicle, d.status, d.availability]);
      const csv = [headers, ...rows].map(row => row.join(",")).join("\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "drivers.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error exporting CSV:", error);
      alert("Failed to export data. Please try again.");
    }
  };

  // Filter drivers based on search text
  let filteredDrivers = initialDrivers.filter(driver =>
    driver.name.toLowerCase().includes(searchText)
  );

  // Sort filtered drivers
  if (sortAsc) {
    filteredDrivers = [...filteredDrivers].sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filteredDrivers = [...filteredDrivers].sort((a, b) => b.name.localeCompare(a.name));
  }
  const indexOfLastDriver = currentPage * recordsPerPage;
  const indexOfFirstDriver = indexOfLastDriver - recordsPerPage;
  const currentDrivers = filteredDrivers.slice(indexOfFirstDriver, indexOfLastDriver);

  return (
    <div className="main-containerr">
      <h2 className="userr">Driver</h2>
      <div className="users-section">
        <div className="recent-users-container">
          <div className="section-header">
            <h2>Recent Drivers</h2>
            <span>All the recent drivers</span>
          </div>

          <div className="toolbar">
            <div className="search-container">
                <img src="/Icon & Text.svg" alt="Search" className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                className="search-bar"
                value={searchText}
                onChange={handleSearch}
              />
            </div>

            <div className="toolbar-buttons">
              <button className="toolbar-btn" onClick={toggleSort}>
                <span>Sort {sortAsc ? "A-Z" : "Z-A"}</span>
                <span role="img" aria-label="arrow">{sortAsc ? "▲" : "▼"}</span>
              </button>

              <button className="toolbar-btn" onClick={exportToCSV}>
                <img src="/public/Masked Icon.svg" alt="Export"></img> <span>Export</span>
              </button>
            </div>
          </div>
        </div>

        <table className="users-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Driver Name</th>
              <th>Vehicle Type</th>
              <th>Document Status</th>
              <th>Availability</th>
              <th>Ratings</th>
            </tr>
          </thead>
          <tbody>
            {currentDrivers.map((driver, idx) => (
              <tr key={idx}>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="td-stack">
                    <div className="user-info">
                      <span>{driver.name}</span>
                    </div>
                  </div>
                </td>
                <td><div className="td-stack">{driver.vehicle}</div></td>
                <td>
                  <button className={`status-btn ${driver.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {driver.status}
                  </button>
                </td>
                <td>
                  <div className="td-stack status-with-icon">
                    
                    <span>{driver.availability}</span>
                      <img src="/public/Frame 2766.svg" alt="status arrow" className="status-arrow" />
                  </div>
                </td>
                <td>
                  <div className="td-stack action-buttons">
                    <button className="action-btn view-btn">View</button>
                    <button className="action-btn history-btn">History</button>
                    <button className="action-btn support-btn">Support</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="page-flex">
          <p className="pages">
            Showing {indexOfFirstDriver + 1} to {Math.min(indexOfLastDriver, filteredDrivers.length)} of {filteredDrivers.length} entries
          </p>
          <div className="pagination">
            <div className="page-item" onClick={() => setCurrentPage(1)}>«</div>
            <div className="page-item" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>‹</div>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else {
                const middle = Math.min(Math.max(currentPage, 3), totalPages - 2);
                pageNum = i + middle - 2;
                if (pageNum < 1) pageNum = i + 1;
                if (pageNum > totalPages) pageNum = totalPages - (4 - i);
              }
              
              return (
                <div
                  key={i}
                  className={`page-item ${currentPage === pageNum ? "active" : ""}`}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </div>
              );
            })}
            <div className="page-item" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>›</div>
            <div className="page-item" onClick={() => setCurrentPage(totalPages)}>»</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driver;