import React, { useState } from 'react';

const AdminPanel = () => {
  const [pendingDeposits, setPendingDeposits] = useState([
    { id: 101, user: 'ali@mail.com', amount: 500, time: '14:20' },
    { id: 102, user: 'veli@mail.com', amount: 1000, time: '15:10' }
  ]);

  const approveDeposit = (id) => {
    setPendingDeposits(pendingDeposits.filter(d => d.id !== id));
    alert("Yatırım başarıyla onaylandı ve bakiyeye eklendi!");
  };

  return (
    <div style={{ padding: '20px', color: 'white', backgroundColor: '#000', minHeight: '100vh' }}>
      <h2 style={{ color: '#ff4444' }}>Yönetici Kontrolü</h2>
      
      <h3 style={{ marginTop: '30px' }}>🔔 Bekleyen Yatırımlar ({pendingDeposits.length})</h3>
      {pendingDeposits.map(dep => (
        <div key={dep.id} style={requestCard}>
          <div>
            <p style={{ margin: 0 }}><strong>{dep.user}</strong></p>
            <p style={{ margin: 0, color: '#00ffcc' }}>{dep.amount} USDT</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => approveDeposit(dep.id)} style={approveBtn}>Onayla</button>
            <button style={rejectBtn}>Reddet</button>
          </div>
        </div>
      ))}

      <h3 style={{ marginTop: '40px' }}>⚙️ Sistem Ayarları</h3>
      <div style={menuItem}>Minimum Çekim: 10 USDT</div>
      <div style={menuItem}>VIP 1 Fiyatı: 50 USDT</div>
    </div>
  );
};

const requestCard = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '10px', marginBottom: '10px', border: '1px solid #333' };
const approveBtn = { backgroundColor: '#00ffcc', border: 'none', padding: '8px 15px', borderRadius: '5px', fontWeight: 'bold' };
const rejectBtn = { backgroundColor: '#ff4444', border: 'none', padding: '8px 15px', borderRadius: '5px', color: 'white' };
const menuItem = { padding: '15px', backgroundColor: '#111', marginBottom: '5px', borderRadius: '5px', fontSize: '14px' };

export default AdminPanel;