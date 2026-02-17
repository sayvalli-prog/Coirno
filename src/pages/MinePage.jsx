import React from 'react';

const MinePage = ({ user, setPage }) => {
  return (
    <div style={{ padding: '20px', color: 'white', backgroundColor: '#121212', minHeight: '100vh' }}>
      <div style={userHeader}>
        <div style={avatarStyle}>👤</div>
        <div>
          <h4>{user.email}</h4>
          <p style={{ color: '#00ffcc', fontSize: '12px' }}>ID: 882190 | VIP {user.vipLevel}</p>
        </div>
      </div>

      <div style={balanceCard}>
        <p style={{ margin: 0, fontSize: '14px', color: '#aaa' }}>Çekilebilir Bakiye</p>
        <h2 style={{ margin: '10px 0' }}>{user.balance.toFixed(2)} USDT</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => setPage('deposit')} style={actionBtn}>Şarj Et</button>
          <button onClick={() => alert("Para Çekme Talebi Alındı!")} style={{ ...actionBtn, backgroundColor: '#333', color: 'white' }}>Para Çek</button>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <div style={menuItem}>💳 Finans Kayıtları <span>></span></div>
        <div style={menuItem}>🔐 Şifre Değiştir <span>></span></div>
        <div style={menuItem}>🎧 Müşteri Hizmetleri <span>></span></div>
        <button style={logoutBtn}>Güvenli Çıkış</button>
      </div>
    </div>
  );
};

const userHeader = { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' };
const avatarStyle = { width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' };
const balanceCard = { backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '15px', border: '1px solid #333' };
const actionBtn = { flex: 1, padding: '12px', border: 'none', borderRadius: '8px', backgroundColor: '#00ffcc', fontWeight: 'bold', cursor: 'pointer' };
const menuItem = { display: 'flex', justifyContent: 'space-between', padding: '18px', backgroundColor: '#1a1a1a', marginBottom: '10px', borderRadius: '10px', fontSize: '14px' };
const logoutBtn = { width: '100%', padding: '15px', marginTop: '20px', backgroundColor: 'transparent', color: '#ff4444', border: '1px solid #ff4444', borderRadius: '10px' };

export default MinePage;