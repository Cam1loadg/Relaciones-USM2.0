// src/App.js
import React, { useState } from 'react';
import './App.css';
import backgroundImage from '../src/background.jpg'; // Imagen de fondo
import Becas from './Becas';
import Planes from './Planes';

function App() {
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
          <a href="#inicio" onClick={() => handleNavigation("inicio")}>Inicio</a>
          <a href="#becas" onClick={() => handleNavigation("becas")}>Becas y Beneficios</a>
          <a href="#planes" onClick={() => handleNavigation("planes")}>Planes</a>
          <div className="navbar-right">
            <a href="#mi-cuenta">Mi Cuenta</a>
          </div>
        </nav>
      </header>

      {section === "becas" && <Becas />}
      {section === "planes" && <Planes />}
      {section === "inicio" && (
        <div className="content">
          <p className="question">¿Quieres conocer tus beneficios?</p>
          <button className="benefits-button">Ingresa aquí</button>
        </div>
      )}

      {/* Botón de Soporte en la esquina inferior derecha */}
      <button className="support-button">Ayuda</button>
    </div>
  );
}

export default App;
