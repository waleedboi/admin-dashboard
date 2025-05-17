

import React, { useState } from "react";
import "../CSS/user.css";

const User = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");

  const totalPages = 5;
  const itemsPerPage = 5;

  // Dummy Users List
  const allUsers = [
    { name: "Alex John", email: "alex@gmail.com", method: "Email", rides: 15 },
    { name: "Sara Khan", email: "sara@yahoo.com", method: "Phone", rides: 42 },
    { name: "John Doe", email: "john@google.com", method: "Google", rides: 122 },
    { name: "Emily Rose", email: "emily@gmail.com", method: "Email", rides: 87 },
    { name: "Michael Lee", email: "michael@yahoo.com", method: "Phone", rides: 35 },
  ];

  // Filter by search
  const filteredUsers = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort users
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "rides-asc":
        return a.rides - b.rides;
      case "rides-desc":
        return b.rides - a.rides;
      default:
        return 0;
    }
  });

  // Export to CSV
  const handleExport = () => {
    const headers = ["Name", "Email", "Sign-Up Method", "Total Rides"];
    const rows = sortedUsers.map(user =>
      [user.name, user.email, user.method, user.rides].join(",")
    );
    const csvContent = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "users.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Calculate pagination values
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="user-container">
      <div className="user-header">
        <h2 className="user-title">Users</h2>
      </div>
      
      <div className="users-section">
        <div className="users-header">
          <div className="section-header">
            <h2>Recent Users</h2>
            <span>All the recent users</span>
          </div>
          <div className="toolbar">
  <input
    type="text"
    placeholder="Search"
    className="search-bar"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <div className="sort-dropdown">
    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
      <option value="name-asc">Name ↑</option>
      <option value="name-desc">Name ↓</option>
      <option value="rides-asc">Rides ↑</option>
      <option value="rides-desc">Rides ↓</option>
    </select>
  </div>

  <div className="export-button" onClick={handleExport}>
    <span>Export</span>
    <span role="img" aria-label="download">📥</span>
  </div>
</div>

        </div>

        <div className="table-responsive">
          <table className="users-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Name</th>
                <th>Email</th>
                <th>Sign-Up Method</th>
                <th>Total Rides</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, idx) => (
                <tr key={idx}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="user-info">
                      <img src="/Avatar.svg" className="user-avatar" alt="Avatar" />
                      <span>{user.name}</span>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.method}</td>
                  <td>{user.rides}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn view-btn">View</button>
                      <button className="action-btn history-btn">History</button>
                      <button className="action-btn support-btn">Support</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination-container">
          <p className="pagination-info">
            Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length} entries
          </p>
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
  );
};

export default User;