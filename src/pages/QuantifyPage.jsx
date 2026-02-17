import React, { useState } from 'react';

const QuantifyPage = ({ user, setUser }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanText, setScanText] = useState('');

  const startQuantify = () => {
    if (isScanning) return;
    
    setIsScanning(true);
    setScanText('Borsalar taranıyor (Binance, OKX, Coinbase)...');

    // Simülasyon Animasyonu
    setTimeout(() => setScanText('Arbitraj fırsatları aranıyor...'), 1500);
    setTimeout(() => setScanText('İşlem yürütülüyor...'), 3000);

    setTimeout(() => {
      setIsScanning(false);
      setScanText('');
      // Bakiyeyi VIP seviyesine göre artır (Örn: VIP2 için 2.5 USDT)
      const profit = 2.50; 
      setUser({ ...user, balance: user.balance + profit });
      alert(`Kantize Başarılı! Kazanç: ${profit} USDT`);
    }, 5000);
  };

  return (
    <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
      <h2>Akıllı Kantize</h2>
      <div style={circleContainer}>
        {isScanning ? (
          <div className="spinner" style={spinnerStyle}>{scanText}</div>
        ) : (
          <button onClick={startQuantify} style={startButtonStyle}>Kantize Etmeye Başla</button>
        )}
      </div>

      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={statBox}><h4>{user.balance.toFixed(2)}</h4><p>Bakiye</p></div>
        <div style={statBox}><h4>VIP {user.vipLevel}</h4><p>Seviye</p></div>
      </div>
    </div>
  );
};

// CSS stilleri
const circleContainer = { height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #00ffcc', borderRadius: '50%', margin: '20px auto', width: '250px' };
const startButtonStyle = { width: '150px', height: '150px', borderRadius: '50%', border: 'none', backgroundColor: '#00ffcc', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' };
const spinnerStyle = { color: '#00ffcc', padding: '20px' };
const statBox = { backgroundColor: '#1e1e1e', padding: '15px', borderRadius: '10px', width: '45%' };

export default QuantifyPage;