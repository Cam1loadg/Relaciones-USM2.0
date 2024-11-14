import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../layout_pages/App.css';




function Agenda( {activeSection, user, onLogin} ) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [showHours, setShowHours] = useState(false);

    const psychologistHours = [
        { time: '10:00', professional: 'Psicólogo 1' },
        { time: '11:00', professional: 'Psicólogo 2' },
        { time: '12:00', professional: 'Psicólogo 1' },
    ];

    const dentistHours = [
        { time: '10:00', professional: 'Dentista 2' },
        { time: '11:00', professional: 'Dentista 1' },
        { time: '12:00', professional: 'Dentista 2' },
    ];


    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowHours(true);
        setConfirmationMessage(''); // Limpia el mensaje de confirmación al cambiar la fecha
    };

    const handleHourSelect = (hour) => {
        setSelectedHour(hour);
        setConfirmationMessage(`Has seleccionado ${hour.time} con ${hour.professional}. ¿Deseas confirmar?`);
    };

    const handleConfirm = () => {
        alert(`Cita confirmada para el ${selectedDate.toLocaleDateString()} a las ${selectedHour.time} con ${selectedHour.professional}.`);
        resetFields();
    };

    const handleCancel = () => {
        resetFields();
        alert('La cita no se registró');
    };

    const resetFields = () => {
        setSelectedDate(null);
        setSelectedHour(null);
        setShowHours(false);
        setConfirmationMessage('');
    };

    const renderAvailableHours = () => {
        // Elige las horas según la sección activa
        const hours = activeSection === 'Agendar hora psicólogo' ? psychologistHours : dentistHours;
        return (
        <div className="hours-list">
            <h3>Horas Disponibles para el {selectedDate.toLocaleDateString()}</h3>
            {hours.map((hour, index) => (
            <div key={index} className="hour-item" onClick={() => handleHourSelect(hour)}>
                <p>{hour.time} - {hour.professional}</p>
            </div>
            ))}
        </div>
        );
    };

    if (!user) {
        return (
          <div className="appointment-container">
            <h2>{activeSection}</h2>
            <p>Por favor, inicia sesión para agendar una hora.</p>
            <button onClick={onLogin} className="login-button">Iniciar Sesión</button>
          </div>
        );
      }

  return (
    <div className="appointment-container">
        <h2>{activeSection}</h2>
        <div className="date-picker-container">
            <i className="fa fa-calendar date-picker-icon" aria-hidden="true" style={{ fontSize: '24px' }}></i>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"
                placeholderText="Selecciona una fecha"
                style={{ width: '100%' }} // Asegura que el DatePicker ocupe el 100% del contenedor
            />
        </div>
        {showHours && renderAvailableHours()}
        {confirmationMessage && (
        <div className="confirmation-message">
            <p>{confirmationMessage}</p>
            <button onClick={handleConfirm}>Confirmar</button>
            <button onClick={handleCancel}>Cancelar</button>
        </div>
        )}
    </div>
  );
}

export default Agenda;



