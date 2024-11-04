// src/Planes.js
import React from 'react';
import './App.css';

function Planes() {
  return (
    <div className="planes-container">
      <div className="plan-column">
        <h1>Planes Dentales</h1>
        <img src="/dental.jpg" alt="Imagen de Planes Dentales" className="plan-image" />
      </div>
      <div className="plan-column">
        <h1>Planes Salud Mental</h1>
        <img src="/mental.png" alt="Imagen de Planes Salud Mental" className="plan-image" />
      </div>
    </div>
  );
}

export default Planes;
