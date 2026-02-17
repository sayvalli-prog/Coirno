import React from 'react'; // useState kısmını sildik

const LoginPage = ({ onLogin, onSwitchToRegister }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#1a1a1a', color: 'white', height: '100vh' }}>
      <h2 style={{ color: '#00ffcc', marginBottom: '30px' }}>Coirno Giriş</h2>
      <div style={{ marginBottom: '15px' }}>
        <input type="email" placeholder="E-posta" style={inputStyle} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <input type="password" placeholder="Şifre" style={inputStyle} />
      </div>
      <button onClick={onLogin} style={buttonStyle}>Giriş Yap</button>
      <p onClick={onSwitchToRegister} style={{ marginTop: '20px', color: '#aaa', cursor: 'pointer', textAlign: 'center' }}>
        Hesabınız yok mu? Kayıt olun.
      </p>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#222', color: 'white' };
const buttonStyle = { width: '100%', padding: '14px', backgroundColor: '#00ffcc', color: 'black', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px' };

export default LoginPage;