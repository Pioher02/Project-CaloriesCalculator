// Modalstyles.js
import styled from 'styled-components';

export const customModalStyle = {
  content: {
    width: '90%', // Cambiar el ancho para tabletas y teléfonos móviles
    maxWidth: '672px', // Ancho máximo para mantener una buena legibilidad
    margin: 'auto',
    border: '1px solid #E0E0E0',
    '@media (max-width: 768px)': {
      padding: '20px', // Cambiar el relleno para tabletas
    },
    '@media (max-width: 576px)': {
      padding: '10px', // Cambiar el relleno para teléfonos móviles
    },
  },
};

export const ModalWrapper = styled.div`
  text-align: center;
  padding: 40px;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px; // Ajustar el relleno para tabletas
  }

  @media (max-width: 576px) {
    padding: 10px; // Ajustar el relleno para teléfonos móviles
  }
`;

export const ModalContent = styled.div`
  margin: 20px;

  @media (max-width: 768px) {
    margin: 10px;
  }

  @media (max-width: 576px) {
    margin: 5px;
  }
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 768px) {
    top: 5px;
    right: 5px;
    font-size: 14px;
  }

  @media (max-width: 576px) {
    top: 2px;
    right: 2px;
    font-size: 12px;
  }
`;

export const StartLosingWeightButton = styled.button`
  background-color: #FC842D;
  width: 210px;
  height: 43px;
  border: none;
  border-radius: 30px;
  color: white;
  font-family: Verdana, sans-serif;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #E0601A;
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 35px;
    font-size: 12px;
  }

  @media (max-width: 576px) {
    width: 120px;
    height: 30px;
    font-size: 10px;
  }
`;
