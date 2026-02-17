import React, { useState } from 'react';

const QuantifyPage = ({ user, setUser }) => {
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    setTimeout(() => {
      const profit = 2.50;
      const updated = { ...user, balance: user.balance + profit };
      setUser(updated);
      localStorage.setItem('coirno_user', JSON.stringify(updated));
      setLoading(false);
      alert("İşlem Başarılı! +2.50 USDT");
    }, 3000);
  };
  return (
    <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
      <h2>Kantize Paneli</h2>
      <div style={circleStyle}>
        <button onClick={start} disabled={loading} style={startBtn}>{loading ? 'Taranıyor...' : 'BAŞLAT'}</button>
      </div>
      <p>Cüzdan: {user.balance.toFixed(2)} USDT</p>
    </div>
  );
};
const circleStyle = { width: '220px', height: '220px', border: '4px solid #00ffcc', borderRadius: '50%', margin: '40px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const startBtn = { width: '160px', height: '160px', borderRadius: '50%', backgroundColor: '#00ffcc', border: 'none', fontWeight: 'bold' };
export default QuantifyPage;