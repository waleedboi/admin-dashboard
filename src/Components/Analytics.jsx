import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Users } from 'lucide-react';
import "../CSS/Analytics.css";

const earningData = [
  { month: 'Jan', amount: 90, fill: '##A1B5B880' },
  { month: 'Feb', amount: 140, fill: '#A1B5B880' },
  { month: 'Mar', amount: 280, fill: '#076271' },
  { month: 'Apr', amount: 160 ,fill: '#A1B5B880'},
  { month: 'May', amount: 210 ,fill: '#A1B5B880'},
  { month: 'Jun', amount: 180 ,fill: '#A1B5B880'},
  { month: 'Jul', amount: 200 ,fill: '#A1B5B880'},
  { month: 'Aug', amount: 120 ,fill: '#A1B5B880'},
];


const driverData = [
  { name: "John Doe", rating: "4.9", completedDeliveries: "192" },
  { name: "Bob Dove", rating: "4.8", completedDeliveries: "175" },
  { name: "Emily Davis", rating: "4.8", completedDeliveries: "167" },
];

export default function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState('weekly');
  const totalDeliveries = 456;
  const completedDeliveries = 420;
  const cancelledDeliveries = 36;
  const completionRate = Math.round((completedDeliveries / totalDeliveries) * 100);

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="header">
          <h1 className="title">Analytics</h1>
          
          <div className="header-actions">
            <div className="tab-buttons">
              <button 
                className={`tab-button ${activeTab === 'weekly' ? 'active' : ''}`}
                onClick={() => setActiveTab('weekly')}
              >
                Weekly
              </button>
              <button 
                className={`tab-button ${activeTab === 'monthly' ? 'active' : ''}`}
                onClick={() => setActiveTab('monthly')}
              >
                Monthly
              </button>
            </div>
            
            <button className="export-button">
              <span>Export</span>
            </button>
          </div>
        </div>
        
        <div className="dashboard-grid">
          {/* Earning Reports Section */}
          <div className="card earning-reports">
            <div className="card-header">
              <div>
                <h2 className="section-title">Earning Reports</h2>
                <p className="section-subtitle">Yearly Earnings Overview</p>
              </div>
            </div>
            
            <div className="stats-grid">
              <div className="stat">
                <h3 className="stat-value">230k</h3>
                <p className="stat-label">Total Revenue</p>
              </div>
              <div className="stat">
                <h3 className="stat-value positive">8.54%</h3>
                <p className="stat-label">This Week</p>
              </div>
              <div className="stat">
                <h3 className="stat-value">1.42k</h3>
                <p className="stat-label">This Month</p>
              </div>
            </div>
            
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={earningData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis hide={true} />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#076271" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
        
          <div className="card delivery-stats">
            <div className="card-header">
              <h2 className="section-title">Delivery Statistics</h2>
            </div>
            
            <div className="delivery-stats-list">
              <div className="stat-row">
                <p className="stat-label">Total Deliveries</p>
                <p className="stat-value">{totalDeliveries}</p>
              </div>
              <div className="stat-row">
                <p className="stat-label">Completed Deliveries</p>
                <p className="stat-value positive">{completedDeliveries}</p>
              </div>
              <div className="stat-row">
                <p className="stat-label">Cancelled Deliveries</p>
                <p className="stat-value negative">{cancelledDeliveries}</p>
              </div>
            </div>
            
            <div className="progress-chart">
              <div className="progress-circle">
                {/* Circular chart */}
                <svg className="circle-svg" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#E6E6E6"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="10"
                    strokeDasharray={`${2 * Math.PI * 45 * completionRate / 100} ${2 * Math.PI * 45 * (100 - completionRate) / 100}`}
                    strokeDashoffset={2 * Math.PI * 45 * 0.25}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="progress-text">
                  <p className="progress-value">{completionRate}</p>
                  <p className="progress-label">Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Driver Performance Section */}
        <div className="card driver-performance">
          <div className="card-header">
            <h2 className="section-title">Driver Performance</h2>
            <p className="section-subtitle">Top Rated Drivers</p>
          </div>
          
          <div className="table-container">
            <table className="driver-table">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>RATING</th>
                  <th>COMPLETED DELIVERIES</th>
                </tr>
              </thead>
              <tbody>
                {driverData.map((driver, index) => (
                  <tr key={index}>
                    <td className="driver-name">
                      <div className="driver-avatar">
                        <Users size={16} className="avatar-icon" />
                      </div>
                      {driver.name}
                    </td>
                    <td>{driver.rating}</td>
                    <td>{driver.completedDeliveries}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}