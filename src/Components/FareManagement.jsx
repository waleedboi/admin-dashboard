import React, { useState } from 'react';
import '../CSS/faremanagement.css'; 

const FareManagement = () => {
  const [fees, setFees] = useState({
    serviceFee: 10,
    driverPayment: 10,
    deliverMeePayment: 10,
    handlingFee: 10,
    hstFee: 10,
  });

  const handleFeeChange = (key, value) => {
    setFees({ ...fees, [key]: Number(value) });
  };

  const vehicleData = [
    { type: 'SUV', baseFee: 10, pricePerKm: 8 },
    { type: 'Pickup Truck', baseFee: 10, pricePerKm: 8 },
    { type: 'Van', baseFee: 10, pricePerKm: 8 },
    { type: 'Box Truck', baseFee: 10, pricePerKm: 8 },
    { type: 'Car', baseFee: 10, pricePerKm: 8 },
  ];

  const handleEdit = (index) => {
    console.log(`Edit clicked for index ${index}`);
  };

  return (
    <div className="main-container">  
      <h2 className="fare-title">Fare Management</h2>

      <div className="fee-card-wrapper">
        <FeeCard title="Service Fee" symbol="%" value={fees.serviceFee} onChange={(e) => handleFeeChange('serviceFee', e.target.value)} />
        <FeeCard title="Driver Payment" symbol="%" value={fees.driverPayment} onChange={(e) => handleFeeChange('driverPayment', e.target.value)} />
        <FeeCard title="DeliverMee Payment" symbol="%" value={fees.deliverMeePayment} onChange={(e) => handleFeeChange('deliverMeePayment', e.target.value)} />
        <FeeCard title="Handling Fee" symbol="$" value={fees.handlingFee} onChange={(e) => handleFeeChange('handlingFee', e.target.value)} />
        <FeeCard title="HST Fee Section" symbol="%" value={fees.hstFee} onChange={(e) => handleFeeChange('hstFee', e.target.value)} />
      </div>

      <div className="vehicle-pricing">
        <h3 className="pricing-title">Vehicle-Based Pricing</h3>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Vehicle Type</th>
              <th>Base Fee ($)</th>
              <th>Price per km ($)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vehicleData.map((vehicle, idx) => (
              <tr key={idx}>
                <td>{vehicle.type}</td>
                <td>{vehicle.baseFee}</td>
                <td>{vehicle.pricePerKm}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(idx)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FeeCard = ({ title, symbol, value, onChange }) => {
  return (
    <div className="fee-card">
      <h4>{title}</h4>
      <div className="fee-input-group">
        <input
          type="number"
          value={value}
          onChange={onChange}
        />
        <span>{symbol}</span>
      </div>
      <button className="update-btn">Update</button>
    </div>
  );
};

export default FareManagement;
