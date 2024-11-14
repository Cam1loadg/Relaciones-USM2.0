import React from 'react';
import '../layout_pages/App.css';
import userimage from '../images/user.jpg'

function Cuenta({user, onLogin}) {
  if (!user) {
      return (
          <div className="appointment-container">
          <h2>Informacion de usuario</h2>
          <p>Por favor, inicia sesión para que puedas revisar tu información de usuario.</p>
          <button onClick={onLogin} className="login-button">Iniciar Sesión</button>
          </div>
      );
  }
  return (
    <div className="profile-container">
      <h1>Información de Usuario</h1>
      
      <div className="profile-info">
        <img src={userimage} alt="Avatar" className="profile-image" />
        <p><strong>Nombre Completo:</strong> Usuario</p>
      
        
        <div className="user-details">
          <p><strong>Contraseña:</strong> ********</p>
          <p><strong>Dirección:</strong> Dirección de estudiante</p>
          <p><strong>Correo Electrónico:</strong> estudiante@usm.cl</p>
        </div>
      </div>
      
    </div>
  );
}

export default Cuenta;