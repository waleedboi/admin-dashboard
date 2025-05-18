// Monitoring.js (Component to be placed in your Components folder)
import React from 'react';
import '../CSS/monitoring.css'; // Make sure to include this CSS file

const Monitoring = () => {
  // Sample delivery data
  const deliveries = [
    {
      id: "DELIVERY-ID: #DV12345",
      driver: "John Doe",
      type: "Food Delivery",
      status: "In Transit"
    },
    {
      id: "DELIVERY-ID: #DV23456",
      driver: "John Doe",
      type: "Food Delivery",
      status: "Waiting Pickup"
    },
    {
      id: "DELIVERY-ID: #DV34567",
      driver: "John Doe",
      type: "Food Delivery",
      status: "Delivered"
    }
  ];

  return (
    <div className="main-content">
      <h3>Monitoring</h3>
      {/* Map Component */}
      <div className="map-section">
        <div className="map-header">
          <div className="map-title">Live Map</div>
        </div>
        <div className="map-container">
          <img 
            src="/public/image 2graph.svg" 
            alt="Map of Montreal" 
            className="map-image" 
          />
          <div className="map-marker">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e74c3c" width="30px" height="30px">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
        </div>
        <div className="map-legend">
          <div className="legend-item">
            <div className="legend-dot orange"></div>
            <span>Active Drivers</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot blue"></div>
            <span>Active Deliveries</span>
          </div>
        </div>
      </div>
      
      {/* Deliveries Section */}
      <div className="deliveries-section">
        <div className="delivery-title">
          Delivery Status Feed
        </div>
        
        {deliveries.map((delivery, index) => (
          <div key={index} className="delivery-item">
            <div className="delivery-info">
              <div className="delivery-id">{delivery.id}</div>
              <div className="delivery-driver">Driver: {delivery.driver} - {delivery.type}</div>
            </div>
            <div className={`delivery-status ${delivery.status === "In Transit" ? "transit" : 
                                            delivery.status === "Waiting Pickup" ? "pickup" : 
                                            delivery.status === "Delivered" ? "delivered" : ""}`}>
              {delivery.status}
            </div>
          </div>
        ))}
        
        <div className="delivery-item">
          <div className="delivery-info">
            <div>Showing 1 to 3 of 25 entries</div>
          </div>
        </div>
        
        {/* Pagination */}
        <div className="pagination">
          <button className="pagination-button arrow disabled">«</button>
          <button className="pagination-button">1</button>
          <button className="pagination-button active">2</button>
          <button className="pagination-button">3</button>
          <button className="pagination-button">...</button>
          <button className="pagination-button">10</button>
          <button className="pagination-button arrow">»</button>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;