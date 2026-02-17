import React from 'react';

const TeamPage = ({ user }) => {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h3>Takım Raporu</h3>
      <div style={card}>
        <p>Davet Kodun: <strong>C882190</strong></p>
        <button style={btn}>Linki Kopyala</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px' }}>
        <div style={stat}><h4>12</h4><p>Takım Sayısı</p></div>
        <div style={stat}><h4>145.50</h4><p>Komisyon</p></div>
      </div>
    </div>
  );
};
const card = { backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '15px', textAlign: 'center' };
const stat = { backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '10px', textAlign: 'center' };
const btn = { backgroundColor: '#00ffcc', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold' };
export default TeamPage;