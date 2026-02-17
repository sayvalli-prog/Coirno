import React, { useState } from 'react';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import QuantifyPage from './pages/QuantifyPage.jsx';
import HomePage from './pages/HomePage.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user] = useState({ email: 'test@coirno.com', balance: 695.31, vipLevel: 2 });

  if (!isLoggedIn) {
    return currentPage === 'login' 
      ? <LoginPage onLogin={() => setIsLoggedIn(true)} onSwitchToRegister={() => setCurrentPage('register')} />
      : <RegisterPage onRegister={() => setIsLoggedIn(true)} onSwitchToLogin={() => setCurrentPage('login')} />;
  }

  return (
    <div className="App" style={{ paddingBottom: '70px', backgroundColor: '#121212', minHeight: '100vh' }}>
      {currentPage === 'home' && <HomePage user={user} />}
      {currentPage === 'quantify' && <QuantifyPage user={user} />}
      {currentPage === 'team' && <div style={{color: 'white', padding: '20px'}}>Takım Ağı ve Komisyonlar</div>}
      {currentPage === 'mine' && <div style={{color: 'white', padding: '20px'}}>Profil Ayarları ve Destek</div>}
      {currentPage === 'admin' && <AdminPanel />}
      
      <Navbar activeTab={currentPage} setActiveTab={setCurrentPage} />
      
      {/* Gizli Admin Girişi: Navbar'a eklemedik, sadece geliştirici için */}
      <div 
        onClick={() => setCurrentPage('admin')} 
        style={{ position: 'fixed', top: 0, right: 0, width: '40px', height: '40px', cursor: 'pointer' }}
      />
    </div>
  );
}

export default App;