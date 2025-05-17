import React, { useState } from 'react';
import '../CSS/Support.css';

const Support = () => {
  const [status, setStatus] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const ticketData = {
    id: '1124',
    title: 'App crash on login',
    submittedBy: 'John Doe (User)',
    issue: 'When I try to log in with Google, the app crashes immediately on my Android device.',
  };
  const inboxTickets = [
    {
      id: '1124',
      title: 'App crash on login',
      user: 'John Doe',
      status: 'Open'
    },
    {
      id: '1125',
      title: 'Delivery location issue',
      user: 'Ali Khan',
      status: 'In Progress'
    },
    {
      id: '1126',
      title: 'Payment not processed',
      user: 'Sarah Ali',
      status: 'Resolved'
    }
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updating ticket with:', { status, assignTo });
  };

  return (
    <div className="support-container">
      <h1 className="support-header">Support & Issue Resolution</h1>
      
      <div className="support-card">
        <h2 className="inbox-header">Support Inbox</h2>
        
        <div className="ticket-list">
          {inboxTickets.map(ticket => (
            <div key={ticket.id} className="inbox-ticket">
              <div className="ticket-id">#{ticket.id} - {ticket.title}</div>
              <div className="ticket-info">User: {ticket.user} · Status: {ticket.status}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="support-card ticket-detail">
        <h2 className="ticket-title">Ticket #{ticketData.id} - {ticketData.title}</h2>
        
        <div className="ticket-meta">
          <p><strong>Submitted by:</strong> {ticketData.submittedBy}</p>
        </div>
        
        <div className="ticket-content">
          <div className="issue-label">Issue:</div>
          <div className="issue-text">{ticketData.issue}</div>
        </div>
        
        <form onSubmit={handleSubmit} className="ticket-form">
          <div className="form-group">
            <label>Status:</label>
            <select 
              value={status} 
              onChange={(e) => setStatus(e.target.value)}
              className="form-select"
            >
              <option value="">Select</option>
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Assign to:</label>
            <select 
              value={assignTo} 
              onChange={(e) => setAssignTo(e.target.value)}
              className="form-select"
            >
              <option value="">Unassigned</option>
              <option value="support-team">Support Team</option>
              <option value="dev-team">Development Team</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="update-button">Update Ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Support;