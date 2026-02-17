import React, { useState } from 'react';

const WithdrawPage = ({ user, setUser }) => {
  const [amount, setAmount] = useState('');
  const handle = () => {
    if (amount > user.balance) return alert("Yetersiz bakiye");
    alert("Talebiniz alındı");
    const updated = { ...user, balance: user.balance - amount };
    setUser(updated);
    localStorage.setItem('coirno_user', JSON.stringify(updated));
  };
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h3>Para Çekme</h3>
      <p>Cüzdan: {user.balance.toFixed(2)} USDT</p>
      <input type="text" placeholder="TRC20 Adresi" style={input} />
      <input type="number" placeholder="Miktar" value={amount} onChange={e => setAmount(e.target.value)} style={input} />
      <button onClick={handle} style={btn}>Onayla</button>
    </div>
  );
};
const input = { width: '100%', padding: '15px', margin: '10px 0', backgroundColor: '#222', border: '1px solid #333', color: 'white', borderRadius: '8px' };
const btn = { width: '100%', padding: '15px', backgroundColor: '#00ffcc', border: 'none', borderRadius: '10px', fontWeight: 'bold' };
export default WithdrawPage;