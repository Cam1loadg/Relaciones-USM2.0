import React, { useState } from 'react';
import HeaderCuenta from '../components/Header_cuenta'; // Asegúrate de ajustar la ruta si es necesario
import Sidebar from '../components/Sidebar_cuenta';
import MainContent from '../components/MainContent_cuenta';
import '../layout_pages/Cuenta.css';

function Cuenta() {
  const [activeSection, setActiveSection] = useState('Información General');

  const handleSidebarClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="cuenta-layout">
      <HeaderCuenta /> {/* Aquí se utiliza el nuevo header */}
      <div className="content-container">
        <div className="sidebar-and-title">
          <div className="welcome-section">
            <h2>Bienvenido de nuevo estudiante</h2>
            <h3>Sección actual: {activeSection}</h3>
          </div>
          <Sidebar onSectionChange={handleSidebarClick} />
        </div>

        <div className="main-content-container">
          <MainContent activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
}

export default Cuenta;