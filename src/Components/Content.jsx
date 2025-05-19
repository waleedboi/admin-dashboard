import React, { useState } from 'react';
import { Edit } from 'lucide-react';
import '../CSS/Conten.css';

const Content = () => {
  const [policies] = useState([
    {
      id: 1,
      title: 'Terms & Conditions',
      description: 'These terms and conditions outline the rules and regulations for the use of the app.',
      lastUpdated: 'Jan 5, 2025',
      content: 'Default terms and conditions text...'
    },
    {
      id: 2,
      title: 'Privacy Policy',
      description: 'Your privacy is important to us. This policy outlines how we collect and use information.',
      lastUpdated: 'Jan 5, 2025',
      content: 'Default privacy policy text...'
    }
  ]);

  const [editingPolicyId, setEditingPolicyId] = useState(null);
  const [termsContent, setTermsContent] = useState('');

  const handleEdit = (id) => {
    const policyToEdit = policies.find(policy => policy.id === id);
    if (policyToEdit) {
      setTermsContent(policyToEdit.content);
      setEditingPolicyId(id);
    }
  };

  const handleSaveChanges = () => {
    alert('Terms and conditions saved successfully!');
    setEditingPolicyId(null);
  };

  const handleCancelEdit = () => {
    setEditingPolicyId(null);
  };

  return (
    <div className="content-main-wrapper">
      {editingPolicyId ? (
        <div className="editor-container">
          <div className="editor-header">
            <h1>Edit {policies.find(p => p.id === editingPolicyId)?.title}</h1>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
          <div className="editor-body">
            <p>
              THESE ARE THE PLATFORM'S {policies.find(p => p.id === editingPolicyId)?.title.toUpperCase()}. PLEASE UPDATE ACCORDINGLY.
            </p>
            <textarea
              value={termsContent}
              onChange={(e) => setTermsContent(e.target.value)}
              placeholder={`Enter your ${policies.find(p => p.id === editingPolicyId)?.title.toLowerCase()} here...`}
            />
            <button onClick={handleSaveChanges}>Save Changes</button>
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Content;
