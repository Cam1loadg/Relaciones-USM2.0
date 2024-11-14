import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../layout_components/MainContent_cuenta.css';

function MainContent({ activeSection }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [showHours, setShowHours] = useState(false);

  // Horas disponibles y profesionales
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

  const handleBenefitClick = (benefit) => {
    alert(`Has seleccionado: ${benefit}`);
  };

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

  return (
    <main className="main-content">
      {activeSection === 'Información General' && (
        <div>
          <h2>Información General</h2>
          <p className="bold-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a orci facilisis ligula lacinia mollis. Praesent tellus diam, aliquam vel sagittis convallis, convallis vitae ipsum. Nullam gravida non dolor et egestas. Pellentesque eu enim in nisl condimentum hendrerit in quis turpis. Aenean id lacus ut purus tristique sodales mollis sit amet dui. Fusce placerat mauris a ultrices pellentesque. Etiam dapibus vitae purus eget ultrices. Curabitur ullamcorper velit orci, eget pharetra orci mollis et. Ut sit amet fermentum dolor, non aliquet sapien. Vestibulum luctus rutrum eros sed rutrum. Pellentesque sit amet gravida massa. Sed sed suscipit mauris. Suspendisse sit amet diam id tortor finibus commodo sit amet ac elit. Nunc at blandit tellus, eget lobortis felis. Nunc venenatis dignissim suscipit.</p>
        </div>
      )}
      {activeSection === 'Beneficios del estudiante' && (
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
      )}
      {(activeSection === 'Agendar hora psicólogo' || activeSection === 'Agendar hora dentista') && (
        <div>
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
      )}
    </main>
  );
}

export default MainContent;
