import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../layout_pages/App.css';
import backgroundImage from '../images/background.jpg';
import InfoBecas from '../components/InfoBecas';
import Planes from '../components/Planes';
import Ayuda from '../components/Ayuda';
import Cuenta from '../components/Cuenta';
import Agenda from '../components/Agenda';
import Becas from '../components/Becas';

function MainApp() {
  const [section, setSection] = useState("inicio");
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [submenuVisible2, setSubmenuVisible2] = useState(false);
  const [user, setUser] = useState(null); // Estado para manejar el usuario

  const handleNavigation = (sectionName) => {
    setSection(sectionName);
    setSubmenuVisible(false); // Cierra el submenú al navegar
    setSubmenuVisible2(false);
  };

  const handleLogin = () => {
    setUser("usuario"); // Simula iniciar sesión con el usuario "usuario"
  };

  const handleLogout = () => {
    setUser(null); // Simula cerrar sesión
  };

  return (
    <div className="App">
      {/* Capa de fondo con transparencia */}
      <div className="background-overlay" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      <header className="app-header">
        <h1>Relaciones USM 2.0</h1>
        <nav className="navbar">
          <a href="#inicio" onClick={() => handleNavigation("inicio")}>Inicio</a>
          <div
            className="navbar-item-with-submenu"
            onMouseEnter={() => setSubmenuVisible(true)}
            onMouseLeave={() => setSubmenuVisible(false)}
          >
            <span className="menu-item">Becas y Beneficios</span>
            {submenuVisible && (
              <div className="submenu">
                <a href="#infobecas" onClick={() => handleNavigation("infobecas")}>Información sobre las Becas</a>
                <a href="#becas" onClick={() => handleNavigation("becas")}>Mis Beneficios</a>
              </div>
            )}
          </div>
          <div
            className="navbar-item-with-submenu"
            onMouseEnter={() => setSubmenuVisible2(true)}
            onMouseLeave={() => setSubmenuVisible2(false)}
          >
            <span className="menu-item">Agendar Hora</span>
            {submenuVisible2 && (
              <div className="submenu">
                <a href="#psicologo" onClick={() => handleNavigation("psicologo")}>Agendar hora de Psicologo</a>
                <a href="#dentista" onClick={() => handleNavigation("dentista")}>Agendar hora de Dentista</a>
              </div>
            )}
          </div>

          <a href="#planes" onClick={() => handleNavigation("planes")}>Planes</a>


          <div className="navbar-right">
            {user ? (
              <>
                <a href="#cuenta" onClick={() => handleNavigation("cuenta")}>Usuario</a>
                <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
              </>
            ) : (
              <button onClick={handleLogin} className="login-button">Iniciar Sesión</button>
            )}
          </div>
        </nav>
      </header>
      {section === "cuenta" && <Cuenta user={user} onLogin={handleLogin}/>}
      {section === "infobecas" && <InfoBecas />}
      {section === "becas" && <Becas user={user} onLogin={handleLogin}/>}
      {section === "planes" && <Planes />}
      {section === "inicio" && (
        <div className="content">
          <p className="question">¿Quieres conocer tus beneficios?</p>
          <a href="#cuenta" className="benefits-button" onClick={() => handleNavigation("cuenta")}>Ingresa Aquí</a>
        </div>
      )}
      {section === "psicologo" && <div className="content"></div> && <Agenda activeSection={"Agendar hora psicólogo"} user={user} onLogin={handleLogin}/>}
      {section === "dentista" && <div className="content"></div> && <Agenda activeSection={"Agendar hora dentista"} user={user} onLogin={handleLogin}/>}

      {/* Botón de Soporte en la esquina inferior derecha */}
      <Link to="/ayuda" className="support-button">Ayuda</Link>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal que muestra el componente MainApp */}
        <Route path="/" element={<MainApp />} />
        <Route path="/ayuda" element={<Ayuda />} />
      </Routes>
    </Router>
  );
}

export default App;

