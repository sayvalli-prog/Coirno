import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import HomePage from './pages/HomePage.jsx';
import QuantifyPage from './pages/QuantifyPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import MinePage from './pages/MinePage.jsx';
import WithdrawPage from './pages/WithdrawPage.jsx';
import DepositPage from './pages/DepositPage.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // --- HAFIZA KONTROLÜ ---
  useEffect(() => {
    const savedUser = localStorage.getItem('coirno_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // --- GİRİŞ YAPMA ---
  const handleLogin = (userData) => {
    const newUser = { email: userData.email, balance: 695.31, vipLevel: 2 };
    setUser(newUser);
    setIsLoggedIn(true);
    localStorage.setItem('coirno_user', JSON.stringify(newUser));
    setCurrentPage('home');
  };

  // --- ÇIKIŞ YAPMA ---
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('coirno_user');
    setCurrentPage('login');
  };

  // --- ŞİFRELİ ADMİN GİRİŞİ ---
  const handleAdminAccess = () => {
    const password = prompt("Yönetici şifresini giriniz:");
    if (password === "admin123") { // Şifreyi buradan değiştirebilirsin
      setCurrentPage('admin');
    } else {
      alert("Hatalı şifre! Erişim reddedildi.");
    }
  };

  // Eğer giriş yapılmamışsa Giriş veya Kayıt sayfasını göster
  if (!isLoggedIn) {
    return currentPage === 'login' 
      ? <LoginPage onLogin={handleLogin} onSwitchToRegister={() => setCurrentPage('register')} />
      : <RegisterPage onRegister={handleLogin} onSwitchToLogin={() => setCurrentPage('login')} />;
  }

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Sayfa İçerikleri */}
      {currentPage === 'home' && <HomePage user={user} setPage={setCurrentPage} />}
      {currentPage === 'quantify' && <QuantifyPage user={user} setUser={setUser} />}
      {currentPage === 'team' && <TeamPage user={user} />}
      {currentPage === 'mine' && <MinePage user={user} setPage={setCurrentPage} onLogout={handleLogout} />}
      {currentPage === 'withdraw' && <WithdrawPage user={user} setUser={setUser} />}
      {currentPage === 'deposit' && <DepositPage />}
      {currentPage === 'admin' && <AdminPanel />}
      
      {/* Alt Menü (Navbar) */}
      <Navbar activeTab={currentPage} setActiveTab={setCurrentPage} />
      
      {/* GİZLİ ADMİN TETİKLEYİCİ (Sağ Üst Köşe - 30x30px Görünmez Alan) */}
      <div 
        onClick={handleAdminAccess} 
        style={{ 
          position: 'fixed', 
          top: 0, 
          right: 0, 
          width: '30px', 
          height: '30px', 
          zIndex: 9999, 
          cursor: 'default',
          backgroundColor: 'transparent' // Tamamen görünmez olması için
        }} 
      />

    </div>
  );
}

export default App;
