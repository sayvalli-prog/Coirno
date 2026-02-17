import React from 'react';

const AdminPanel = () => {
  return (
    <div style={{ padding: '20px', color: 'white', backgroundColor: '#000', minHeight: '100vh' }}>
      <h2 style={{ color: '#ff4444' }}>Yönetici Paneli</h2>
      <div style={statBox}>
        <p>Toplam Üye: 1</p>
        <p>Bekleyen Çekim: 0</p>
      </div>
      
      <h3>Kullanıcı Yönetimi</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #333' }}>
            <th style={{ textAlign: 'left', padding: '10px' }}>User</th>
            <th style={{ textAlign: 'left' }}>Bakiye</th>
            <th>Aksiyon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px' }}>test@coirno.com</td>
            <td>695.31</td>
            <td><button style={{ color: '#00ffcc', background: 'none', border: '1px solid #00ffcc' }}>Düzenle</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const statBox = { backgroundColor: '#222', padding: '15px', borderRadius: '10px', marginBottom: '20px' };

export default AdminPanel;