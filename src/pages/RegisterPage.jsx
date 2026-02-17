import React from 'react';

const RegisterPage = ({ onRegister, onSwitchToLogin }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ color: '#00ffcc', margin: '0' }}>Coirno'ya Katıl</h2>
        <p style={{ color: '#aaa', fontSize: '14px' }}>Hemen kazanmaya başlamak için hesap oluşturun</p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <input type="email" placeholder="E-posta Adresi" style={inputStyle} />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <input type="password" placeholder="Şifre Belirleyin" style={inputStyle} />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <input type="text" placeholder="Davetiye Kodu (Opsiyonel)" style={inputStyle} />
      </div>

      <button onClick={onRegister} style={buttonStyle}>
        Kayıt Ol ve Başla
      </button>

      <p style={{ marginTop: '20px', textAlign: 'center', color: '#aaa', fontSize: '14px' }}>
        Zaten hesabınız var mı?{' '}
        <span 
          onClick={onSwitchToLogin} 
          style={{ color: '#00ffcc', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Giriş Yap
        </span>
      </p>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '14px',
  borderRadius: '10px',
  border: '1px solid #333',
  backgroundColor: '#222',
  color: 'white',
  boxSizing: 'border-box',
  outline: 'none'
};

const buttonStyle = {
  width: '100%',
  padding: '15px',
  backgroundColor: '#00ffcc',
  color: '#000',
  border: 'none',
  borderRadius: '10px',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '10px',
  boxShadow: '0 4px 15px rgba(0, 255, 204, 0.2)'
};

export default RegisterPage;