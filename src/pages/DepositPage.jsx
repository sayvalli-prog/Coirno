import React from 'react';

const DepositPage = () => {
  const trc20Address = "TLvS7...KendiAdresiniBurayaYaz..."; // Kendi USDT adresini buraya yaz

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h3>Şarj Et (USDT - TRC20)</h3>
      <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
        <p style={{ fontSize: '12px', color: '#aaa' }}>Cüzdan Adresi:</p>
        <p style={{ wordBreak: 'break-all', color: '#00ffcc', fontWeight: 'bold' }}>{trc20Address}</p>
        <button onClick={() => navigator.clipboard.writeText(trc20Address)} style={copyButton}>Adresi Kopyala</button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <label>Ödeme Kanıtı (Ekran Görüntüsü):</label>
        <input type="file" style={{ display: 'block', marginTop: '10px' }} />
        <button style={submitButton}>Ödemeyi Bildir</button>
      </div>
    </div>
  );
};

const copyButton = { marginTop: '10px', padding: '8px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px' };
const submitButton = { width: '100%', padding: '15px', backgroundColor: '#00ffcc', color: 'black', border: 'none', borderRadius: '10px', marginTop: '20px', fontWeight: 'bold' };

export default DepositPage;