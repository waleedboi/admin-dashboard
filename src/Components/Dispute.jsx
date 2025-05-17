import React, { useState } from "react";
import "../CSS/Dispute.css";

const Dispute = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const toggleSort = () => {
    setSortAsc(!sortAsc);
  };

  const exportToCSV = () => {
    const headers = ["Driver Name", "Vehicle Type", "Document Status", "Availability"];
    const rows = sortedDrivers.map(driver => [
      driver.name,
      driver.vehicle,
      driver.status,
      driver.availability
    ]);
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "drivers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const drivers = [
    { name: "DPT12345", vehicle: "TRIP678", status: "John Doe", availability: "Alex Driver" },
    { name: "Michael Smith", vehicle: "Truck", status: "Verified", availability: "Online" },
    { name: "Sarah Lee", vehicle: "Car", status: "Verified", availability: "Online" },
    { name: "John Doe", vehicle: "Van", status: "Verified", availability: "Online" },
    { name: "Jane Miller", vehicle: "SUV", status: "In Review", availability: "Offline" }
  ];

  const filteredDrivers = drivers.filter(driver =>
    driver.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedDrivers = [...filteredDrivers].sort((a, b) => {
    return sortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return (
    <div className="main-content">
      <h2 className="userr">Dispute</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="users-section">
          <div className="recent-users-container">
            <div className="section-header">
              <h2>Recent Disputes</h2>
              <span>All the recent disputes</span>
            </div>

            <div className="toolbar">
              <div className="search-filter">
                <span role="img" aria-label="search">
                  {/* <img src="/Icon & Text.svg" className="iconss" alt="search icon" /> */}
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="search-bar"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
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
                <th>Dispute ID</th>
                <th>Delivery ID</th>
                <th>User</th>
                <th>Driver</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
  {sortedDrivers.map((driver, idx) => (
    <tr key={idx}>
      <td><input type="checkbox" /></td>
      <td><div className="td-stack"><span>{driver.name}</span></div></td>
      <td><div className="td-stack">{driver.vehicle}</div></td>
      <td><div className="td-stack">{driver.status}</div></td>
      <td><div className="td-stack">{driver.availability}</div></td>
      <td>
        <div className="td-stack action-buttons">
          <button className="action-btn open-btn">
            {idx === 1 ? "In Progress" : "Open"}
          </button>
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
            <p className="pages">Showing 1 to 10 of 50 entries</p>
            <div className="pagination">
              <div className="page-item" onClick={() => goToPage(1)}>«</div>
              <div className="page-item" onClick={() => goToPage(currentPage - 1)}>‹</div>
              {Array.from({ length: totalPages }, (_, i) => (
                <div
                  key={i}
                  className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                  onClick={() => goToPage(i + 1)}
                >
                  {i + 1}
                </div>
              ))}
              <div className="page-item" onClick={() => goToPage(currentPage + 1)}>›</div>
              <div className="page-item" onClick={() => goToPage(totalPages)}>»</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dispute;
