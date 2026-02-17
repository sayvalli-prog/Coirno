import React from 'react';

const LoginPage = ({ onLogin, onSwitchToRegister }) => {
  return (
    <div style={{ padding: '40px 20px', color: 'white', textAlign: 'center' }}>
      <h2 style={{ color: '#00ffcc' }}>Giriş Yap</h2>
      <input type="text" placeholder="E-posta" style={inputStyle} />
      <input type="password" placeholder="Şifre" style={inputStyle} />
      <button onClick={() => onLogin({email: 'user@test.com'})} style={buttonStyle}>Giriş</button>
      <p onClick={onSwitchToRegister} style={{ marginTop: '20px', fontSize: '14px', color: '#888' }}>Hesabın yok mu? Kayıt Ol</p>
    </div>
  );
};
const inputStyle = { width: '100%', padding: '15px', margin: '10px 0', borderRadius: '10px', backgroundColor: '#222', border: '1px solid #333', color: 'white' };
const buttonStyle = { width: '100%', padding: '15px', backgroundColor: '#00ffcc', border: 'none', borderRadius: '10px', fontWeight: 'bold' };
export default LoginPage;