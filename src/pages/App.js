import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../layout_pages/App.css';
import backgroundImage from '../images/background.png';
import InfoBecas from '../components/InfoBecas';
import Planes from '../components/Planes';
import Ayuda from '../components/Ayuda';
import Cuenta from '../components/Cuenta';
import Agenda from '../components/Agenda';
import Becas from '../components/Becas';

function MainApp() {
  const qSomos = "La Dirección de Relaciones Estudiantiles contribuye a la formación integral de la comunidad estudiantil de todos los Campus y Sedes de la USM. Provee apoyo psicosocial, asistencial y de fomento a iniciativas del estudiantado, con el objetivo de acompañarlos y ayudarlos durante su vida universitaria, especialmente atendiendo al legado testamentario de nuestro fundador.";
  const qOfrecemos = "Aquí se puede encontrar toda la información al respecto de las necesidades del estudiante de la USM. Además, al iniciar sesión, se obtiene la capacidad de solicitar directamente asistencia dental y psicólogica y poder adquirir beneficios, todo con el fin de mantener las condiciones óptimas para los estudiantes fuera del ámbito académico.";

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
          <div className="navbar-title">Relaciones USM 2.0</div>

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
        <>
          <div className="content">
            <p className="question">¿Quieres conocer tus beneficios?</p>
            <a href="#cuenta" className="benefits-button" onClick={() => handleNavigation("cuenta")}>Ingresa Aquí</a>
          </div>
          <div className='info-container'>
            <div className='detail-container'>
              <p className="detail-title">¿Quiénes somos?</p>
              <div className='detail-text'>{qSomos}</div>
            </div>
            <div className='detail-container'>
              <p className="detail-title">¿Qué ofrecemos?</p>
              <div className='detail-text'>{qOfrecemos}</div>
            </div>
          </div >
        </>
      )}
      {section === "psicologo" && <div className="content"></div> && <Agenda activeSection={"Agendar hora psicólogo"} user={user} onLogin={handleLogin}/>}
      {section === "dentista" && <div className="content"></div> && <Agenda activeSection={"Agendar hora dentista"} user={user} onLogin={handleLogin}/>}

      <a href="#ayuda" className="support-button" onClick={() => handleNavigation("ayuda")}>Ayuda</a>
      {section === "ayuda" && <Ayuda />}
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

