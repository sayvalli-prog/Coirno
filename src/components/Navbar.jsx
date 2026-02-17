import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Ana Sayfa', icon: '🏠' },
    { id: 'quantify', label: 'Kantize', icon: '📊' },
    { id: 'team', label: 'Takım', icon: '👥' },
    { id: 'mine', label: 'Profil', icon: '👤' }
  ];

  return (
    <nav style={navStyle}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          style={{
            ...navItemStyle,
            color: activeTab === tab.id ? '#00ffcc' : '#888'
          }}
        >
          <span style={{ fontSize: '20px' }}>{tab.icon}</span>
          <span style={{ fontSize: '12px', marginTop: '4px' }}>{tab.label}</span>
        </div>
      ))}
    </nav>
  );
};

const navStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '70px',
  backgroundColor: '#1a1a1a',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderTop: '1px solid #333',
  zIndex: 1000
};

const navItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

export default Navbar;