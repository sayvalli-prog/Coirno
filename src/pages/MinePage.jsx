import React from 'react';

const MinePage = ({ user, setPage, onLogout }) => {
  return (
    <div style={{ padding: '20px', color: 'white', backgroundColor: '#121212', minHeight: '100vh' }}>
      {/* Kullanıcı Bilgi Alanı */}
      <div style={userHeader}>
        <div style={avatarStyle}>👤</div>
        <div>
          <h4 style={{ margin: 0 }}>{user.email}</h4>
          <p style={{ color: '#00ffcc', fontSize: '12px', margin: '5px 0' }}>
            ID: 882190 | VIP {user.vipLevel} Üyesi
          </p>
        </div>
      </div>

      {/* Cüzdan Kartı */}
      <div style={balanceCard}>
        <p style={{ margin: 0, fontSize: '14px', color: '#aaa' }}>Toplam Varlıklar</p>
        <h2 style={{ margin: '10px 0', fontSize: '28px' }}>{user.balance.toFixed(2)} USDT</h2>
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <button 
            onClick={() => setPage('deposit')} 
            style={actionBtn}
          >
            Şarj Et
          </button>
          <button 
            onClick={() => setPage('withdraw')} 
            style={{ ...actionBtn, backgroundColor: '#333', color: 'white' }}
          >
            Para Çek
          </button>
        </div>
      </div>

      {/* Menü Listesi */}
      <div style={{ marginTop: '25px' }}>
        <div style={menuItem} onClick={() => alert("Finans kayıtları yükleniyor...")}>
          <span>💳 Finans Kayıtları</span> <span>&gt;</span>
        </div>
        <div style={menuItem} onClick={() => setPage('team')}>
          <span>👥 Takım Raporu</span> <span>&gt;</span>
        </div>
        <div style={menuItem} onClick={() => window.open('https://t.me/coirnosupport', '_blank')}>
          <span>🎧 Müşteri Hizmetleri</span> <span style={{color: '#00ffcc', fontSize: '12px'}}>BAĞLAN</span>
        </div>
        <div style={menuItem} onClick={() => alert("Sürüm: v1.0.4 - Güncel")}>
          <span>📱 Uygulama İndir</span> <span>&gt;</span>
        </div>

        {/* Çıkış Butonu */}
        <button onClick={onLogout} style={logoutBtn}>
          Güvenli Çıkış
        </button>
      </div>
    </div>
  );
};

// --- TASARIM (STİLLER) ---
const userHeader = { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', padding: '10px' };
const avatarStyle = { width: '55px', height: '55px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' };
const balanceCard = { backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '15px', border: '1px solid #333', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' };
const actionBtn = { flex: 1, padding: '12px', border: 'none', borderRadius: '10px', backgroundColor: '#00ffcc', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' };
const menuItem = { display: 'flex', justifyContent: 'space-between', padding: '18px', backgroundColor: '#1a1a1a', marginBottom: '10px', borderRadius: '12px', fontSize: '14px', cursor: 'pointer', border: '1px solid #222' };
const logoutBtn = { width: '100%', padding: '16px', marginTop: '20px', backgroundColor: 'transparent', color: '#ff4444', border: '1px solid #ff4444', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' };

export default MinePage;