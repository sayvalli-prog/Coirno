import React, { useState } from 'react';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import QuantifyPage from './pages/QuantifyPage.jsx';
import HomePage from './pages/HomePage.jsx';
import DepositPage from './pages/DepositPage.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ 
    email: 'test@coirno.com', 
    balance: 695.31, 
    vipLevel: 2 
  });

  if (!isLoggedIn) {
    return currentPage === 'login' 
      ? <LoginPage onLogin={() => setIsLoggedIn(true)} onSwitchToRegister={() => setCurrentPage('register')} />
      : <RegisterPage onRegister={() => setIsLoggedIn(true)} onSwitchToLogin={() => setCurrentPage('login')} />;
  }
// src/App.js içindeki return kısmında Navbar'ın hemen üstüne şunu eklemiş olmalısın:

{currentPage === 'admin' && <AdminPanel />}

{/* GİZLİ GİRİŞ: Sağ üst köşeye 5 kez hızlıca tıklarsan admin açılır gibi düşünebilirsin 
    Şimdilik basit bir görünmez kutu: */}
<div 
  onClick={() => setCurrentPage('admin')} 
  style={{ 
    position: 'fixed', 
    top: 0, 
    right: 0, 
    width: '50px', 
    height: '50px', 
    zIndex: 9999,
    cursor: 'pointer' 
  }} 
/>
  return (
    <div className="App" style={{ paddingBottom: '70px', backgroundColor: '#121212', minHeight: '100vh' }}>
      {currentPage === 'home' && <HomePage user={user} setPage={setCurrentPage} />}
      {currentPage === 'quantify' && <QuantifyPage user={user} setUser={setUser} />}
      {currentPage === 'deposit' && <DepositPage />}
      {currentPage === 'team' && <div style={{color: 'white', padding: '20px'}}>Takım Ağı Aktif Ediliyor...</div>}
      
      <Navbar activeTab={currentPage} setActiveTab={setCurrentPage} />
    </div>
  );
}

export default App;