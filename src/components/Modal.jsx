// components/modal.jsx
import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { customModalStyle, ModalWrapper, ModalContent, CloseButton, StartLosingWeightButton } from '../styles/ModalStyles'; // Importa los estilos desde el archivo styles.js

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, onRequestClose, calories, foodRecommendations }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Resultado de Calorías"
      style={customModalStyle}
    >
      <ModalWrapper>
        <h2>Your recommended daily calorie intake is</h2>
        <ModalContent>
          <p style={{ fontFamily: 'Verdana', fontWeight: '700', fontSize: '48px', color: '#264061' }}>
            {calories} <span style={{ fontSize: '24px' }}>kcal</span>
          </p>
          {foodRecommendations && foodRecommendations.recommendations && foodRecommendations.recommendations.length > 0 && (
            <div>
              <h3 style={{ color: '#264061' }}>Foods not recommended:</h3>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {foodRecommendations.recommendations.map((food, index) => (
                  <li
                    key={index}
                    style={{
                      backgroundColor: '#f7f7f7',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      margin: '4px 0',
                      padding: '8px',
                    }}
                  >
                    {food}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ModalContent>
        <CloseButton onClick={onRequestClose}>X</CloseButton>
        <Link to="/register">
          <StartLosingWeightButton>Start Losing Weight</StartLosingWeightButton>
        </Link>
      </ModalWrapper>
    </Modal>
  );
};

export default CustomModal;
