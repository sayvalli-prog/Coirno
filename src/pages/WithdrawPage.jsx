import React, { useState } from 'react';

const WithdrawPage = ({ user, setUser }) => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleWithdraw = () => {
    if (parseFloat(amount) > user.balance) {
      alert("Yetersiz bakiye!");
      return;
    }
    if (address.length < 10) {
      alert("Lütfen geçerli bir TRC20 adresi girin.");
      return;
    }
    alert(`Talebiniz alındı! ${amount} USDT, 24 saat içinde ${address} adresine gönderilecektir.`);
    setUser({ ...user, balance: user.balance - parseFloat(amount) });
  };

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h3>Para Çekme (USDT - TRC20)</h3>
      <div style={formBox}>
        <p style={{ fontSize: '12px', color: '#aaa' }}>Çekilebilir Bakiye: {user.balance.toFixed(2)} USDT</p>
        <input 
          type="text" 
          placeholder="USDT TRC20 Cüzdan Adresi" 
          style={inputStyle} 
          onChange={(e) => setAddress(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Çekilecek Tutar" 
          style={inputStyle} 
          onChange={(e) => setAmount(e.target.value)}
        />
        <p style={{ fontSize: '11px', color: '#ff4444' }}>* Kesinti: %3 İşlem Ücreti</p>
        <button onClick={handleWithdraw} style={withdrawBtn}>Para Çekme Talebi Gönder</button>
      </div>
    </div>
  );
};

const formBox = { backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '15px', marginTop: '20px' };
const inputStyle = { width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#111', color: 'white' };
const withdrawBtn = { width: '100%', padding: '15px', backgroundColor: '#00ffcc', color: 'black', border: 'none', borderRadius: '10px', fontWeight: 'bold', marginTop: '10px' };

export default WithdrawPage;