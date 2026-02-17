import React from 'react';

const DepositPage = () => {
  return (
    <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
      <h3>Yatırım Yap (TRC20)</h3>
      <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '10px', width: '150px', margin: '20px auto' }}>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TYourTRC20Address" alt="QR" />
      </div>
      <p style={{ fontSize: '12px', wordBreak: 'break-all' }}>TYourTRC20AddressXXXXXXXXXXXX</p>
      <button style={{ backgroundColor: '#333', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>Kopyala</button>
      <p style={{ marginTop: '20px', color: '#888', fontSize: '12px' }}>* Gönderim sonrası otomatik onaylanır.</p>
    </div>
  );
};
export default DepositPage;