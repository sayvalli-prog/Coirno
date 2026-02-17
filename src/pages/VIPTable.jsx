import React from 'react';

const VIPTable = ({ userBalance }) => {
  const levels = [
    { l: 1, d: 50, r: 2.0 }, { l: 2, d: 150, r: 2.5 }, { l: 3, d: 500, r: 3.2 },
    { l: 4, d: 1500, r: 4.0 }, { l: 5, d: 5000, r: 5.5 }, { l: 6, d: 15000, r: 7.0 }
  ];
  return (
    <div style={{ backgroundColor: '#1a1a1a', borderRadius: '15px', overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white', fontSize: '13px' }}>
        <thead style={{ backgroundColor: '#222' }}>
          <tr><th style={p10}>VIP</th><th style={p10}>Giriş</th><th style={p10}>Günlük</th></tr>
        </thead>
        <tbody>
          {levels.map(v => (
            <tr key={v.l} style={{ borderBottom: '1px solid #333', textAlign: 'center' }}>
              <td style={p10}>VIP {v.l}</td><td>{v.d} USDT</td><td style={{ color: '#00ffcc' }}>%{v.r}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const p10 = { padding: '12px' };
export default VIPTable;