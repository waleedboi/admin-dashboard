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
  const totalPages = 5;

  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const toggleSort = () => {
    setSortAsc(!sortAsc);
  };

  const exportToCSV = () => {
    const headers = ["Driver Name", "Vehicle Type", "Document Status", "Availability"];
    const rows = filteredDrivers.map(d => [d.name, d.vehicle, d.status, d.availability]);
    const csv = [headers, ...rows].map(e => e.join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "drivers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  let filteredDrivers = initialDrivers.filter(driver =>
    driver.name.toLowerCase().includes(searchText)
  );

  if (sortAsc) {
    filteredDrivers = [...filteredDrivers].sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filteredDrivers = [...filteredDrivers].sort((a, b) => b.name.localeCompare(a.name));
  }

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
              <input
                type="text"
                placeholder="Search"
                className="search-bar"
                value={searchText}
                onChange={handleSearch}
              />

            <div className="toolbar-btn" onClick={toggleSort}>
              <span>Sort By</span>
              <span role="img" aria-label="arrow">▼</span>
            </div>

            <div className="toolbar-btn" onClick={exportToCSV}>
              <span>Export</span>
              <span role="img" aria-label="download">📥</span>
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
            {filteredDrivers.map((driver, idx) => (
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
          <p className="pages">Showing 1 to 10 of {filteredDrivers.length} entries</p>
          <div className="pagination">
            <div className="page-item" onClick={() => setCurrentPage(1)}>«</div>
            <div className="page-item" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>‹</div>
            {Array.from({ length: totalPages }, (_, i) => (
              <div
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </div>
            ))}
            <div className="page-item" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>›</div>
            <div className="page-item" onClick={() => setCurrentPage(totalPages)}>»</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driver;