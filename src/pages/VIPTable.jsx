import React, { useState } from 'react';

const VIPTable = ({ userBalance }) => {
  const vipLevels = [
    { level: 1, minDeposit: 50, dailyRate: 2.0, taskCount: 5 },
    { level: 2, minDeposit: 150, dailyRate: 2.5, taskCount: 8 },
    { level: 3, minDeposit: 500, dailyRate: 3.2, taskCount: 10 },
    { level: 4, minDeposit: 1500, dailyRate: 4.0, taskCount: 12 },
    { level: 5, minDeposit: 5000, dailyRate: 5.5, taskCount: 15 },
    { level: 6, minDeposit: 15000, dailyRate: 7.0, taskCount: 20 },
  ];

  return (
    <div style={{ padding: '15px', backgroundColor: '#121212', borderRadius: '15px', marginTop: '20px' }}>
      <h3 style={{ color: '#00ffcc', textAlign: 'center', marginBottom: '20px' }}>📊 VIP Kazanç Projeksiyonu</h3>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', color: 'white', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #333', textAlign: 'left' }}>
              <th style={thStyle}>Seviye</th>
              <th style={thStyle}>Maliyet</th>
              <th style={thStyle}>Günlük (%)</th>
              <th style={thStyle}>Aylık Kar</th>
            </tr>
          </thead>
          <tbody>
            {vipLevels.map((v) => (
              <tr key={v.level} style={{ 
                borderBottom: '1px solid #222', 
                backgroundColor: userBalance >= v.minDeposit ? 'rgba(0, 255, 204, 0.05)' : 'transparent' 
              }}>
                <td style={tdStyle}>
                  <span style={{ color: userBalance >= v.minDeposit ? '#00ffcc' : 'white' }}>VIP {v.level}</span>
                </td>
                <td style={tdStyle}>{v.minDeposit} USDT</td>
                <td style={tdStyle}>%{v.dailyRate.toFixed(1)}</td>
                <td style={{ ...tdStyle, color: '#00ffcc', fontWeight: 'bold' }}>
                  {(v.minDeposit * (v.dailyRate / 100) * 30).toFixed(2)} USDT
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <p style={{ fontSize: '11px', color: '#666', marginTop: '15px', textAlign: 'center' }}>
        * Aylık kar hesaplaması, anaparanın günlük bileşik faizsiz getirisini temsil eder.
      </p>
    </div>
  );
};

const thStyle = { padding: '12px 8px', color: '#aaa' };
const tdStyle = { padding: '15px 8px' };

export default VIPTable;