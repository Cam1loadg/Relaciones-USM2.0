// src/components/Sidebar.js
import React from 'react';
import './Sidebar_cuenta.css';

function Sidebar({ onSectionChange }) {
  return (
    <aside className="sidebar">
      <h3>Información del usuario</h3>
      <ul>
        <li onClick={() => onSectionChange('Información General')}>Información General</li>
        <li onClick={() => onSectionChange('Beneficios del estudiante')}>Beneficios del estudiante</li>
        <li onClick={() => onSectionChange('Agendar hora psicólogo')}>Agendar hora psicólogo</li>
        <li onClick={() => onSectionChange('Agendar hora dentista')}>Agendar hora dentista</li>
      </ul>
    </aside>
  );
}

export default Sidebar;