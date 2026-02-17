import React from 'react';
import VIPTable from './VIPTable.jsx';

const HomePage = ({ user, setPage }) => {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '15px', borderLeft: '5px solid #00ffcc' }}>
        <p style={{ color: '#aaa', margin: 0 }}>Toplam Bakiye (USDT)</p>
        <h1 style={{ margin: '10px 0' }}>{user.balance.toFixed(2)}</h1>
        <span style={{ backgroundColor: '#333', padding: '4px 10px', borderRadius: '20px', fontSize: '12px' }}>VIP {user.vipLevel} Üyesi</span>
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button onClick={() => setPage('deposit')} style={btnStyle}>Şarj Et</button>
        <button onClick={() => setPage('withdraw')} style={{ ...btnStyle, backgroundColor: '#333' }}>Para Çek</button>
      </div>
      <h3 style={{ marginTop: '30px' }}>VIP Seviyeleri</h3>
      <VIPTable userBalance={user.balance} />
    </div>
  );
};
const btnStyle = { flex: 1, padding: '15px', borderRadius: '10px', border: 'none', backgroundColor: '#00ffcc', fontWeight: 'bold' };
export default HomePage;