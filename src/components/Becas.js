import React from 'react';
import '../layout_pages/App.css';




function Becas({user, onLogin}) {
    const handleBenefitClick = (benefit) => {
        alert(`Has seleccionado: ${benefit}`);
    };
    if (!user) {
        return (
            <div className="appointment-container">
            <h2>Mis Beneficios</h2>
            <p>Por favor, inicia sesión para ver tus beneficios.</p>
            <button onClick={onLogin} className="login-button">Iniciar Sesión</button>
            </div>
        );
    }
    return (
        <div className="appointment-container">
            <div className="benefits-list">
                <h2>Beneficios del Estudiante</h2>
                <div className="benefit-item" onClick={() => handleBenefitClick('Beneficio 1')}>
                <p>Beneficio 1</p>
                </div>
                <div className="benefit-item" onClick={() => handleBenefitClick('Beneficio 2')}>
                <p>Beneficio 2</p>
                </div>
                <div className="benefit-item" onClick={() => handleBenefitClick('Beneficio 3')}>
                <p>Beneficio 3</p>
                </div>
            </div>
        </div>
    );
}

export default Becas;