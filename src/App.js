import React, { useState, useEffect } from 'react';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import QuantifyPage from './pages/QuantifyPage.jsx';
import HomePage from './pages/HomePage.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import TeamPage from './pages/TeamPage.jsx';
import MinePage from './pages/MinePage.jsx';
import WithdrawPage from './pages/WithdrawPage.jsx';
import DepositPage from './pages/DepositPage.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // --- HAFIZA KONTROLÜ (useEffect) ---
  useEffect(() => {
    const savedUser = localStorage.getItem('coirno_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // --- GİRİŞ YAPMA FONKSİYONU ---
  const handleLogin = (userData) => {
    const newUser = { email: userData.email, balance: 695.31, vipLevel: 2 };
    setUser(newUser);
    setIsLoggedIn(true);
    localStorage.setItem('coirno_user', JSON.stringify(newUser)); // Tarayıcıya kaydet
  };

  // --- ÇIKIŞ YAPMA FONKSİYONU ---
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('coirno_user'); // Hafızayı temizle
    setCurrentPage('login');
  };

  if (!isLoggedIn) {
    return currentPage === 'login' 
      ? <LoginPage onLogin={handleLogin} onSwitchToRegister={() => setCurrentPage('register')} />
      : <RegisterPage onRegister={handleLogin} onSwitchToLogin={() => setCurrentPage('login')} />;
  }

  return (
    <div className="App" style={{ paddingBottom: '70px', backgroundColor: '#121212', minHeight: '100vh' }}>
      {currentPage === 'home' && <HomePage user={user} setPage={setCurrentPage} />}
      {currentPage === 'quantify' && <QuantifyPage user={user} setUser={setUser} />}
      {currentPage === 'team' && <TeamPage user={user} />}
      {currentPage === 'mine' && <MinePage user={user} setPage={setCurrentPage} onLogout={handleLogout} />}
      {currentPage === 'withdraw' && <WithdrawPage user={user} setUser={setUser} />}
      {currentPage === 'deposit' && <DepositPage />}
      {currentPage === 'admin' && <AdminPanel />}
      
      <Navbar activeTab={currentPage} setActiveTab={setCurrentPage} />

      {/* Admin Gizli Giriş */}
      <div 
        onClick={() => setCurrentPage('admin')} 
        style={{ position: 'fixed', top: 0, right: 0, width: '40px', height: '40px', zIndex: 9999 }} 
      />
    </div>
  );
}


export default App;
