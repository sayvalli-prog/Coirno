import React, { useState } from 'react';

const AdminPanel = () => {
  // Simüle edilmiş bekleyen çekim talepleri
  const [requests, setRequests] = useState([
    { id: 1, user: 'test@mail.com', amount: 150, date: '2023-10-27', status: 'Bekliyor' },
    { id: 2, user: 'demo@mail.com', amount: 45, date: '2023-10-27', status: 'Bekliyor' }
  ]);

  const approveRequest = (id) => {
    setRequests(requests.filter(req => req.id !== id));
    alert("Ödeme onaylandı ve kullanıcıya gönderildi!");
  };

  return (
    <div style={{ padding: '20px', color: 'white', backgroundColor: '#000', minHeight: '100vh' }}>
      <div style={{ borderBottom: '2px solid #ff4444', marginBottom: '20px', paddingBottom: '10px' }}>
        <h2 style={{ color: '#ff4444', margin: 0 }}>KONTROL PANELİ</h2>
        <p style={{ fontSize: '12px', color: '#888' }}>Sistem Yönetimi ve Finansal Onaylar</p>
      </div>

      {/* İstatistik Özetleri */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
        <div style={statCard}><h4>1,240 USDT</h4><p>Toplam Yatırım</p></div>
        <div style={statCard}><h4>856 USDT</h4><p>Toplam Çekim</p></div>
      </div>

      <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Bekleyen Çekim Talepleri ({requests.length})</h3>

      {requests.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#444', marginTop: '40px' }}>Bekleyen talep bulunamadı.</p>
      ) : (
        requests.map(req => (
          <div key={req.id} style={requestCard}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{req.user}</div>
              <div style={{ fontSize: '12px', color: '#888' }}>{req.date}</div>
              <div style={{ color: '#00ffcc', fontWeight: 'bold', marginTop: '5px' }}>{req.amount} USDT</div>
            </div>
            <button onClick={() => approveRequest(req.id)} style={approveBtn}>ONAYLA</button>
          </div>
        ))
      )}

      <button 
        onClick={() => window.location.reload()} 
        style={{ width: '100%', marginTop: '30px', padding: '10px', backgroundColor: '#222', color: '#888', border: 'none', borderRadius: '5px' }}
      >
        Paneli Kapat (Çıkış)
      </button>
    </div>
  );
};

// --- Admin Stilleri ---
const statCard = { backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '10px', textAlign: 'center', border: '1px solid #333' };
const requestCard = { display: 'flex', alignItems: 'center', backgroundColor: '#111', padding: '15px', borderRadius: '12px', marginBottom: '10px', borderLeft: '4px solid #ff4444' };
const approveBtn = { backgroundColor: '#ff4444', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' };

export default AdminPanel;
