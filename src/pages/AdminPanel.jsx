import React, { useState } from 'react';

const AdminPanel = () => {
  const [users, setUsers] = useState([
    { id: 1, email: 'test@coirno.com', balance: 695.31, vip: 2, status: 'Aktif' },
    { id: 2, email: 'demo@coirno.com', balance: 10.00, vip: 1, status: 'Pasif' }
  ]);

  const updateBalance = (id) => {
    const amount = prompt("Eklenecek tutarı girin (Örn: 100):");
    if (amount) {
      setUsers(users.map(u => u.id === id ? { ...u, balance: u.balance + parseFloat(amount) } : u));
      alert("Bakiye güncellendi!");
    }
  };

  return (
    <div style={{ padding: '20px', color: 'white', backgroundColor: '#000', minHeight: '100vh', paddingBottom: '100px' }}>
      <h2 style={{ color: '#ff4444', borderBottom: '2px solid #ff4444', paddingBottom: '10px' }}>Yönetici Paneli</h2>
      
      <div style={statsContainer}>
        <div style={statItem}><h4>2</h4><p>Toplam Üye</p></div>
        <div style={statItem}><h4>$705.31</h4><p>Kasa Toplamı</p></div>
      </div>

      <h3>Kullanıcı Listesi</h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: '#222' }}>
              <th style={tdThStyle}>E-posta</th>
              <th style={tdThStyle}>Bakiye</th>
              <th style={tdThStyle}>VIP</th>
              <th style={tdThStyle}>Aksiyon</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} style={{ borderBottom: '1px solid #333' }}>
                <td style={tdThStyle}>{u.email}</td>
                <td style={tdThStyle}>${u.balance.toFixed(2)}</td>
                <td style={tdThStyle}>{u.vip}</td>
                <td style={tdThStyle}>
                  <button onClick={() => updateBalance(u.id)} style={editBtn}>Bakiye Ekle</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '40px', padding: '15px', backgroundColor: '#1a1a1a', borderRadius: '10px' }}>
        <h3 style={{ color: '#00ffcc' }}>Bekleyen Yatırım Talepleri (0)</h3>
        <p style={{ color: '#666', fontSize: '14px' }}>Şu an onay bekleyen işlem bulunmuyor.</p>
      </div>
    </div>
  );
};

const statsContainer = { display: 'flex', gap: '15px', marginBottom: '25px' };
const statItem = { flex: 1, backgroundColor: '#111', padding: '15px', borderRadius: '10px', textAlign: 'center', border: '1px solid #333' };
const tableStyle = { width: '100%', marginTop: '10px', fontSize: '14px' };
const tdThStyle = { padding: '12px', textAlign: 'left' };
const editBtn = { backgroundColor: '#ff4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' };

export default AdminPanel;