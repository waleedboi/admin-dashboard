import React, { useState } from "react";
import "../CSS/Dispute.css";

const Dispute = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (value) => {
    setSortOption(value);
  };

  const handleExport = () => {
    const headers = ["Dispute ID", "Delivery ID", "User", "Driver", "Status"];
    const rows = sortedDrivers.map(driver => [
      driver.name,
      driver.vehicle,
      driver.status,
      driver.availability,
      driver.status
    ]);
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "disputes.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const drivers = [
    { name: "DPT12345", vehicle: "TRIP678", status: "John Doe", availability: "Alex Driver" },
    { name: "DPT54321", vehicle: "TRIP345", status: "Michael Smith", availability: "Driver 1" },
    { name: "DPT11111", vehicle: "TRIP999", status: "Sarah Lee", availability: "Driver 2" },
    { name: "DPT22222", vehicle: "TRIP111", status: "John Doe", availability: "Driver 3" },
    { name: "DPT33333", vehicle: "TRIP333", status: "Jane Miller", availability: "Driver 4" }
  ];

  const filteredDrivers = drivers.filter(driver =>
    driver.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedDrivers = [...filteredDrivers].sort((a, b) => {
    const field = sortOption.includes("name") ? "name" : "vehicle";
    const isAsc = sortOption.endsWith("asc");
    return isAsc
      ? a[field].localeCompare(b[field])
      : b[field].localeCompare(a[field]);
  });

  return (
    <div className="main-page">
      <h2 className="userr">Dispute</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="users-section">
          <div className="users-header">
            <div className="section-header">
              <h2>Recent Users</h2>
              <span>All the recent users</span>
            </div>

            <div className="toolbar">
              <div className="search-container">
                <img src="/Icon & Text.svg" alt="Search" className="search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>

              <div className="sort-dropdown">
                <select
                  value={sortOption}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option value="name-asc">Name </option>
                  <option value="name-desc">Name </option>
                  <option value="vehicle-asc">Vehicle </option>
                  <option value="vehicle-desc">Vehicle </option>
                </select>
              </div>

              <button className="export-button" onClick={handleExport}>
                Export 📥
              </button>
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
                <th>Actions</th>
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
                    <div className="td-stack action-buttonss">
                      <button
                        className={`action-btn open-btn ${idx === 1 ? "progress-btn" : "open-btn-bg"}`}
                      >
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
            <p className="pages">Showing 1 to 10 of {drivers.length} entries</p>
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

