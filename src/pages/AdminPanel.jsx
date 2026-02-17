import React, { useState } from 'react';

const AdminPanel = () => {
  // Simüle edilmiş çekim talepleri
  const [withdrawRequests, setWithdrawRequests] = useState([
    { id: 201, user: 'mehmet@mail.com', amount: 150, address: 'TRC20...xyz789', status: 'Bekliyor' },
    { id: 202, user: 'ayse@mail.com', amount: 45, address: 'TRC20...abc456', status: 'Bekliyor' }
  ]);

  const handleAction = (id, action) => {
    setWithdrawRequests(withdrawRequests.map(req => 
      req.id === id ? { ...req, status: action === 'approve' ? 'Onaylandı' : 'Reddedildi' } : req
    ));
    alert(action === 'approve' ? "Ödeme onaylandı, kullanıcıya bildirim gitti." : "Talep reddedildi.");
  };

  return (
    <div style={{ padding: '20px', color: 'white', backgroundColor: '#000', minHeight: '100vh', paddingBottom: '100px' }}>
      <h2 style={{ color: '#ff4444', borderBottom: '2px solid #ff4444', paddingBottom: '10px' }}>Yönetim Merkezi</h2>

      {/* Para Çekme Talepleri Bölümü */}
      <h3 style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        💸 Para Çekme Talepleri 
        <span style={badgeStyle}>{withdrawRequests.filter(r => r.status === 'Bekliyor').length}</span>
      </h3>

      {withdrawRequests.map(req => (
        <div key={req.id} style={{ ...cardStyle, borderLeft: req.status === 'Onaylandı' ? '5px solid #00ffcc' : '5px solid #ff4444' }}>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>{req.user}</p>
            <p style={{ margin: '5px 0', color: '#00ffcc', fontSize: '18px' }}>{req.amount} USDT</p>
            <p style={{ margin: 0, fontSize: '11px', color: '#888' }}>Adres: {req.address}</p>
            <p style={{ margin: '5px 0', fontSize: '12px', fontStyle: 'italic' }}>Durum: {req.status}</p>
          </div>
          
          {req.status === 'Bekliyor' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <button onClick={() => handleAction(req.id, 'approve')} style={approveBtn}>Onayla</button>
              <button onClick={() => handleAction(req.id, 'reject')} style={rejectBtn}>Reddet</button>
            </div>
          )}
        </div>
      ))}

      {/* Hızlı İstatistikler */}
      <div style={{ marginTop: '40px', backgroundColor: '#111', padding: '15px', borderRadius: '10px' }}>
        <h4>⚙️ Sistem Özeti</h4>
        <div style={statLine}>Bugünkü Toplam Çekim: <span style={{color: '#ff4444'}}>$195.00</span></div>
        <div style={statLine}>Onay Bekleyen Toplam: <span style={{color: '#00ffcc'}}>$195.00</span></div>
      </div>
    </div>
  );
};

// Stiller
const cardStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '10px', marginBottom: '15px' };
const approveBtn = { backgroundColor: '#00ffcc', color: 'black', border: 'none', padding: '8px 12px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' };
const rejectBtn = { backgroundColor: 'transparent', color: '#ff4444', border: '1px solid #ff4444', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' };
const badgeStyle = { backgroundColor: '#ff4444', color: 'white', fontSize: '12px', padding: '2px 8px', borderRadius: '10px' };
const statLine = { display: 'flex', justifyContent: 'space-between', fontSize: '14px', margin: '10px 0', color: '#ccc' };

export default AdminPanel;