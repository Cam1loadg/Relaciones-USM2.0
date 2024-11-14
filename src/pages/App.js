import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../layout_pages/App.css';
import backgroundImage from '../images/background.jpg';
import Becas from '../components/Becas';
import Planes from '../components/Planes';
import Ayuda from '../components/Ayuda';
import Cuenta from './Cuenta';

function MainApp() {
  const [section, setSection] = useState("inicio");

  const handleNavigation = (sectionName) => {
    setSection(sectionName);
  };

  return (
    <div className="App">
      {/* Capa de fondo con transparencia */}
      <div className="background-overlay" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      <header className="app-header">
        <h1>Relaciones USM 2.0</h1>
        <nav className="navbar">
          <a href="" onClick={() => handleNavigation("inicio")}>Inicio</a>
          <a href="#becas" onClick={() => handleNavigation("becas")}>Becas y Beneficios</a>
          <a href="#planes" onClick={() => handleNavigation("planes")}>Planes</a>
          <div className="navbar-right">
            <Link to="/cuenta">Mi Cuenta</Link>
          </div>
        </nav>
      </header>

      {section === "becas" && <Becas />}
      {section === "planes" && <Planes />}
      {section === "inicio" && (
        <div className="content">
          <p className="question">¿Quieres conocer tus beneficios?</p>
          <Link to="/cuenta" className="benefits-button">Ingresa aquí</Link>
        </div>
      )}

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
        
        {/* Ruta para el layout de Cuenta */}
        <Route path="/cuenta" element={<Cuenta />} />
        <Route path="/ayuda" element={<Ayuda />} />
      </Routes>
    </Router>
  );
}

export default App;
