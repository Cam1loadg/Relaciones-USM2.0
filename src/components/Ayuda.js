// Ayuda.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../layout_pages/App.css';
import backgroundImage from '../images/background.jpg';

function Ayuda() {
    const navigate = useNavigate(); // Hook para manejar navegación programática

    const faq = [
        { pregunta: "¿Cómo puedo solicitar servicios de salud mental o dental?", respuesta: 'Debes ingresar a la sección de "Planes", en donde según el servicio que requieras deberás seguir los pasos que se presentan a continuación.' },
        { pregunta: "¿Cómo puedo postular a becas y beneficios?", respuesta: 'En la sección de "Becas y Beneficios", se encuentran detalles acerca de estas.' },
        { pregunta: "No puedo acceder a mi perfil, ¿qué puedo hacer?", respuesta: "Consultar con Dirección de Estudios." },
    ];

    const handleBackClick = () => {
        navigate("/"); // Navega a la página de inicio
    };

    return (
        <>
            <div className="background-overlay" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <button className="return-button" onClick={handleBackClick}>
                Volver
            </button>
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