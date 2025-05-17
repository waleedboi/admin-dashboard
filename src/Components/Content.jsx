import React, { useState } from 'react';
import { Edit } from 'lucide-react';
import '../CSS/Conten.css';

const Content = () => {
  const [policies] = useState([
    {
      id: 1,
      title: 'Terms & Conditions',
      description: 'These terms and conditions outline the rules and regulations for the use of the app.',
      lastUpdated: 'Jan 5, 2025'
    },
    {
      id: 2,
      title: 'Privacy Policy',
      description: 'Your privacy is important to us. This policy outlines how we collect and use information.',
      lastUpdated: 'Jan 5, 2025'
    }
  ]);

  const handleEdit = (id) => {
    console.log(`Editing policy with id: ${id}`);
  };

  return (
    <div className="content-main-wrapper">
      <h1 className="content-heading">Content</h1>
      <div className="content-policy-wrapper">
        {policies.map((policy) => (
          <div key={policy.id} className="policy-card">
            <div className="policy-header">
              <h2 className="policy-title">{policy.title}</h2>
              <button className="edit-button" onClick={() => handleEdit(policy.id)}>
                <Edit size={16} style={{ marginRight: '6px' }} />
                Edit
              </button>
            </div>
            <p className="policy-description">{policy.description}</p>
            <p className="policy-updated">Last updated: {policy.lastUpdated}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;