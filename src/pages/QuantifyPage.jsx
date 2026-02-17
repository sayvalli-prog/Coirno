import React, { useState } from 'react';

const QuantifyPage = ({ user, setUser }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanText, setScanText] = useState('');

  // --- BAKİYE VE HAFIZA GÜNCELLEME FONKSİYONU ---
  const updateBalanceAndStorage = (profit) => {
    const updatedUser = { ...user, balance: user.balance + profit };
    
    // 1. Ekrandaki bakiyeyi güncelle
    setUser(updatedUser);
    
    // 2. Tarayıcı hafızasını (localStorage) güncelle
    localStorage.setItem('coirno_user', JSON.stringify(updatedUser));
  };

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
      
      // VIP seviyesine göre kazanç (Örnek: 2.5 USDT)
      const profit = 2.50; 
      
      // HAFIZALI GÜNCELLEME ÇAĞRISI
      updateBalanceAndStorage(profit);
      
      alert(`Kantize Başarılı! Kazanç: ${profit} USDT hesabınıza tanımlandı.`);
    }, 5000);
  };

  return (
    <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
      <h2 style={{ color: '#00ffcc' }}>Akıllı Kantize</h2>
      
      <div style={circleContainer}>
        {isScanning ? (
          <div style={spinnerContainer}>
            <div className="loader"></div>
            <p style={{ marginTop: '15px', fontSize: '14px' }}>{scanText}</p>
          </div>
        ) : (
          <div onClick={startQuantify} style={startButtonStyle}>
            <span style={{ fontSize: '18px' }}>START</span>
          </div>
        )}
      </div>

      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={statBox}>
          <h4 style={{ margin: 0, color: '#00ffcc' }}>{user.balance.toFixed(2)}</h4>
          <p style={{ margin: 0, fontSize: '12px', color: '#aaa' }}>Güncel Bakiye</p>
        </div>
        <div style={statBox}>
          <h4 style={{ margin: 0, color: '#00ffcc' }}>VIP {user.vipLevel}</h4>
          <p style={{ margin: 0, fontSize: '12px', color: '#aaa' }}>Üyelik Tipi</p>
        </div>
      </div>

      <div style={infoBanner}>
        <p style={{ fontSize: '11px', margin: 0 }}>
          ⚠️ Günlük kantize hakkınız: 1 / 1. Yarın tekrar gelin!
        </p>
      </div>
    </div>
  );
};

// --- STİLLER ---
const circleContainer = { 
  height: '260px', width: '260px', 
  display: 'flex', alignItems: 'center', justifyContent: 'center', 
  border: '4px double #00ffcc', borderRadius: '50%', 
  margin: '30px auto', 
  boxShadow: '0 0 20px rgba(0, 255, 204, 0.2)' 
};

const startButtonStyle = { 
  width: '180px', height: '180px', 
  borderRadius: '50%', border: 'none', 
  backgroundColor: '#00ffcc', color: '#000', 
  fontWeight: 'bold', cursor: 'pointer', 
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
};

const spinnerContainer = { color: '#00ffcc', padding: '20px' };
const statBox = { backgroundColor: '#1e1e1e', padding: '15px', borderRadius: '12px', width: '45%', border: '1px solid #333' };
const infoBanner = { marginTop: '30px', padding: '10px', backgroundColor: 'rgba(0, 255, 204, 0.1)', borderRadius: '8px', color: '#00ffcc' };

export default QuantifyPage;