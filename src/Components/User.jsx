import React, { useState } from "react";
import "../CSS/user.css";

const User = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");

  const itemsPerPage = 5;
  const pageLimit = 5;

  const allUsers = Array.from({ length: 50 }, (_, i) => ({
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    method: i % 2 === 0 ? "Email" : "Phone",
    rides: Math.floor(Math.random() * 100),
  }));

  const filteredUsers = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  const startPage = Math.floor((currentPage - 1) / pageLimit) * pageLimit + 1;
  const endPage = Math.min(startPage + pageLimit - 1, totalPages);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

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

  return (
    <div className="user-container">
        <h2 className="user-title">Users</h2>
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
              <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="name-asc">Name </option>
                <option value="name-desc">Name </option>
                <option value="rides-asc">Rides </option>
                <option value="rides-desc">Rides </option>
              </select>
            </div>

            <button className="export-button" onClick={handleExport}>
            <img src="/public/Masked Icon.svg"></img>  Export 
            </button>
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
                <th>Total Deliveries</th>
                <th></th>
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
            Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, sortedUsers.length)} of {sortedUsers.length} entries
          </p>
          <div className="pagination">
            <button
              className="page-item"
              disabled={currentPage === 1}
              onClick={() => goToPage(1)}
            >
              «
            </button>
            <button
              className="page-item"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
            >
              ‹
            </button>

            {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
              const page = startPage + i;
              return (
                <button
                  key={page}
                  className={`page-item ${currentPage === page ? "active" : ""}`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              );
            })}

            <button
              className="page-item"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
            >
              ›
            </button>
            <button
              className="page-item"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(totalPages)}
            >
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
