// src/App.js
import React from 'react';
import './App.css';
import backgroundImage from '../src/background.jpg'; // Imagen de fondo

function App() {
  return (
    <div className="App">
      {/* Capa de fondo con transparencia */}
      <div className="background-overlay" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      
      <header className="app-header">
        <h1>Relaciones USM 2.0</h1>
        <nav className="navbar">
          <a href="#inicio">Inicio</a>
          <a href="#becas">Becas y Beneficios</a>
          <a href="#planes">Planes</a>
          <div className="navbar-right">
            <a href="#mi-cuenta">Mi Cuenta</a>
          </div>
        </nav>
      </header>
      
      {/* Pregunta y botón de ingreso */}
      <div className="content">
        <p className="question">¿Quieres conocer tus beneficios?</p>
        <button className="benefits-button">Ingresa aquí</button>
      </div>

      {/* Botón de Soporte en la esquina inferior derecha */}
      <button className="support-button">Soporte</button>
    </div>
  );
}

export default App;
