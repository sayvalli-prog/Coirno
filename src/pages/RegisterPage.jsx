import React from 'react';

const RegisterPage = ({ onRegister, onSwitchToLogin }) => {
  return (
    <div style={{ padding: '40px 20px', color: 'white', textAlign: 'center' }}>
      <h2 style={{ color: '#00ffcc' }}>Kayıt Ol</h2>
      <input type="text" placeholder="E-posta" style={inputStyle} />
      <input type="password" placeholder="Şifre" style={inputStyle} />
      <input type="text" placeholder="Davetiye Kodu" style={inputStyle} />
      <button onClick={() => onRegister({email: 'user@test.com'})} style={buttonStyle}>Hesap Oluştur</button>
      <p onClick={onSwitchToLogin} style={{ marginTop: '20px', fontSize: '14px', color: '#888' }}>Zaten üye misin? Giriş Yap</p>
    </div>
  );
};
const inputStyle = { width: '100%', padding: '15px', margin: '10px 0', borderRadius: '10px', backgroundColor: '#222', border: '1px solid #333', color: 'white' };
const buttonStyle = { width: '100%', padding: '15px', backgroundColor: '#00ffcc', border: 'none', borderRadius: '10px', fontWeight: 'bold' };
export default RegisterPage;