// src/components/HeaderCuenta.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header_cuenta.css';

function HeaderCuenta() {
  return (
    <header className="app-header">
      <div className="title-container">
        <h1>Relaciones USM 2.0</h1> {/* Título centrado */}
      </div>
      <nav className="navbar">
        <Link to="/" className="home-button">Inicio</Link> {/* Botón de Inicio alineado a la izquierda */}
      </nav>
    </header>
  );
}

export default HeaderCuenta;
