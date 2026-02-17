import React, { useState } from 'react';

const AdminPanel = () => {
  const [reqs] = useState([{ id: 1, user: 'ali@mail.com', amount: 100, status: 'Bekliyor' }]);
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h2 style={{ color: '#ff4444' }}>Admin Panel</h2>
      {reqs.map(r => (
        <div key={r.id} style={{ backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <div><p>{r.user}</p><strong>{r.amount} USDT</strong></div>
          <button style={{ backgroundColor: '#00ffcc', border: 'none', borderRadius: '5px', padding: '10px' }}>Onayla</button>
        </div>
      ))}
    </div>
  );
};
export default AdminPanel;