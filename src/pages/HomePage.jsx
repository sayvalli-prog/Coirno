import React from 'react';
import VIPTable from './VIPTable.jsx';

const HomePage = ({ user, setPage }) => {
  return (
    <div style={{ padding: '20px', color: 'white', backgroundColor: '#121212', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Üst Bakiye Kartı */}
      <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '15px', borderLeft: '5px solid #00ffcc' }}>
        <p style={{ color: '#aaa', margin: 0 }}>Toplam Varlıklar (USDT)</p>
        <h1 style={{ margin: '10px 0', fontSize: '32px' }}>{user.balance.toFixed(2)}</h1>
        <span style={{ backgroundColor: '#333', padding: '4px 10px', borderRadius: '20px', fontSize: '12px' }}>
          VIP {user.vipLevel} Üyesi
        </span>
      </div>

      {/* İşlem Butonları */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button onClick={() => setPage('deposit')} style={actionButtonStyle}>Şarj Et (Deposit)</button>
        <button onClick={() => setPage('withdraw')} style={{ ...actionButtonStyle, backgroundColor: '#333', color: 'white' }}>Para Çek</button>
      </div>

      {/* Küçük VIP Kartları Grid Yapısı */}
      <h3 style={{ marginTop: '30px' }}>VIP Seviyeleri</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
        {[1, 2, 3, 4, 5, 6].map(level => (
          <div key={level} style={vipCardStyle}>
            <h4>VIP {level}</h4>
            <p style={{ fontSize: '12px', color: '#00ffcc' }}>Günlük %{level * 2} Kazanç</p>
            <button style={{ fontSize: '10px', padding: '5px', borderRadius: '5px' }}>Kilidi Aç</button>
          </div>
        ))}
      </div>

      {/* İŞTE BURASI: Tabloyu döngünün dışına, en alta aldık */}
      <VIPTable userBalance={user.balance} />
      
    </div>
  );
};

const actionButtonStyle = { flex: 1, padding: '15px', borderRadius: '10px', border: 'none', backgroundColor: '#00ffcc', fontWeight: 'bold', cursor: 'pointer' };
const vipCardStyle = { backgroundColor: '#1e1e1e', padding: '15px', borderRadius: '10px', textAlign: 'center', border: '1px solid #333' };

export default HomePage;