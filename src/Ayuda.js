// src/Becas.js
import React from 'react';
import './App.css';

function Ayuda() {
    const faq = [
        { pregunta: "¿Cómo puedo solicitar servicios de salud mental o dental?", respuesta: 'Debes ingresar a la sección de "Planes", en donde según el servicio que requieras deberás seguir los pasos que se presentan a continuación.' },
        { pregunta: "¿Cómo puedo postular a becas y beneficios?", respuesta: 'En la sección de "Becas y Beneficios", se encuentran detalles acerca de estas.' },
        { pregunta: "No puedo acceder a mi perfil, ¿qué puedo hacer?", respuesta: "Consultar con Dirección de Estudios" },
    ];
  return (
    <>
        <div className="planes-container">
        <h1>Preguntas frecuentes</h1>
        </div>
        <div className="ayuda-container">
            <ul>
                {faq.map((item, index) => (
                    <li key={index}>
                        <span className="ayuda-barra"></span>
                        <p><strong>Pregunta:</strong> {item.pregunta}</p>
                        <p><strong>Respuesta:</strong> {item.respuesta}</p>
                    </li>
                ))}
            </ul>
        </div>
    </>
  );
}

export default Ayuda;
