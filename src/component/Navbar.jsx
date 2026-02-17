import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Ana Sayfa', icon: '🏠' },
    { id: 'quantify', label: 'Kantize', icon: '📊' },
    { id: 'team', label: 'Takım', icon: '👥' },
    { id: 'mine', label: 'Benim', icon: '👤' }
  ];

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#222', display: 'flex', justifyContent: 'around', padding: '10px 0', borderTop: '1px solid #333' }}>
      {tabs.map(tab => (
        <div key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ flex: 1, textAlign: 'center', color: activeTab === tab.id ? '#00ffcc' : '#aaa' }}>
          <div style={{ fontSize: '20px' }}>{tab.icon}</div>
          <div style={{ fontSize: '12px' }}>{tab.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;