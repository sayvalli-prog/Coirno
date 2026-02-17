import React from 'react';

const MinePage = ({ user, setPage, onLogout }) => {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ fontSize: '40px', backgroundColor: '#333', borderRadius: '50%', padding: '10px' }}>👤</div>
        <div><h3>{user.email}</h3><p>VIP {user.vipLevel}</p></div>
      </div>
      <div style={{ marginTop: '30px' }}>
        <div onClick={() => setPage('deposit')} style={item}>💰 Para Yatır <span>></span></div>
        <div onClick={() => setPage('withdraw')} style={item}>💸 Para Çek <span>></span></div>
        <div onClick={() => setPage('team')} style={item}>👥 Takımım <span>></span></div>
        <button onClick={onLogout} style={logoutBtn}>Güvenli Çıkış</button>
      </div>
    </div>
  );
};
const item = { display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#1a1a1a', marginBottom: '10px', borderRadius: '12px' };
const logoutBtn = { width: '100%', padding: '15px', marginTop: '20px', backgroundColor: 'transparent', color: '#ff4444', border: '1px solid #ff4444', borderRadius: '12px' };
export default MinePage;