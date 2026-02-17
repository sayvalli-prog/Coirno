import React, { useState } from 'react';

const TeamPage = ({ user }) => {
  const [copied, setCopied] = useState(false);
  const inviteCode = "C882190"; // Statik örnek kod
  const inviteLink = `https://coirno.vercel.app/register?invite=${inviteCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '20px', color: 'white', backgroundColor: '#121212', minHeight: '100vh' }}>
      <h3 style={{ color: '#00ffcc' }}>Takım Raporu</h3>
      
      {/* Davet Kartı */}
      <div style={inviteCard}>
        <p style={{ fontSize: '14px', color: '#aaa' }}>Davet Kodunuz</p>
        <h2 style={{ margin: '5px 0' }}>{inviteCode}</h2>
        <button onClick={copyToClipboard} style={copyBtn}>
          {copied ? 'Kopyalandı!' : 'Davet Linkini Kopyala'}
        </button>
      </div>

      {/* Komisyon İstatistikleri */}
      <div style={statsGrid}>
        <div style={statBox}>
          <p style={statLabel}>Toplam Takım</p>
          <p style={statValue}>12 Kişi</p>
        </div>
        <div style={statBox}>
          <p style={statLabel}>Takım Kazancı</p>
          <p style={statValue}>145.50 USDT</p>
        </div>
      </div>

      {/* Seviye Listesi */}
      <div style={{ marginTop: '25px' }}>
        {['Level 1', 'Level 2', 'Level 3'].map((lvl, index) => (
          <div key={index} style={levelItem}>
            <span>{lvl}</span>
            <span style={{ color: '#00ffcc' }}>{index === 0 ? '5 Kişi' : '0 Kişi'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const inviteCard = { backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '15px', textAlign: 'center', marginBottom: '20px', border: '1px solid #333' };
const copyBtn = { backgroundColor: '#00ffcc', color: 'black', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', marginTop: '10px' };
const statsGrid = { display: 'flex', gap: '15px' };
const statBox = { flex: 1, backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '10px', textAlign: 'center' };
const statLabel = { fontSize: '12px', color: '#aaa', margin: 0 };
const statValue = { fontSize: '18px', fontWeight: 'bold', margin: '5px 0' };
const levelItem = { display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#1e1e1e', marginBottom: '10px', borderRadius: '10px' };

export default TeamPage;