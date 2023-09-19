// components/Modal/ModalStyled.js
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(NavLink)`
  display: block;
  width: 210px;
  height: 43px;
  margin: 40px auto 0;
  padding: 0;
  border: 0 solid;
  background-color: ${props => props.theme.colors.accent};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border-color: transparent;
  text-decoration: none;
  transition: box-shadow 300ms ease-in, transform 200ms ease-in;
  cursor: pointer;

  :hover,
  :focus {
    box-shadow: 0px 15px 20px rgba(252, 132, 45, 0.4);
    transform: translateY(-7px);
  }
`;

export const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  display: block;
  margin: auto;
  padding: 13px 0;
  width: 160px;
  height: 17px;
  font-weight: 700;
  font-size: 14px;
  line-height: ${props => props.theme.lineHeights.heading};
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

export const customModalStyle = {
  content: {
    width: '90%', // Cambiar el ancho para tabletas y teléfonos móviles
    maxWidth: '672px', // Ancho máximo para mantener una buena legibilidad
    margin: 'auto',
    border: '1px solid #E0E0E0',
    backgroundColor: 'white', // Color de fondo blanco
    '@media (max-width: 768px)': { // Usar la sintaxis correcta de media query
      padding: '20px', // Cambiar el relleno para tabletas
    },
    '@media (max-width: 576px)': { // Usar la sintaxis correcta de media query
      padding: '10px', // Cambiar el relleno para teléfonos móviles
    },
  },
};


export const ModalWrapper = styled.div`
  text-align: center;
  padding: 40px;
  position: relative;

  @media (maxWidth: 768px) {
    padding: 20px; // Ajustar el relleno para tabletas
  }

  @media (maxWidth: 576px) {
    padding: 10px; // Ajustar el relleno para teléfonos móviles
  }
`;

export const ModalContent = styled.div`
  margin: 20px;

  @media (maxWidth: 768px) {
    margin: 10px;
  }

  @media (maxWidth: 576px) {
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

  @media (maxWidth: 768px) {
    top: 5px;
    right: 5px;
    font-size: 14px;
  }

  @media (maxWidth: 576px) {
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

  @media (maxWidth: 768px) {
    width: 160px;
    height: 35px;
    font-size: 12px;
  }

  @media (maxWidth: 576px) {
    width: 120px;
    height: 30px;
    font-size: 10px;
  }
`;

export const ModalHeader = styled.h2`
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 26px;
  color: #264061;
  margin: 0;
  padding: 0;
  span {
    font-size: 24px;
  }
`;

export const CaloriesCount = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  color: #264061;
  margin: 20px 0 0;
  span {
    font-size: 24px;
  }
`;

export const ForbiddenFoodsHeading = styled.h3`
  color: #264061;
  font-size: 14px;
`;

export const FoodList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const FoodListItem = styled.li`
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 4px 0;
  padding: 8px;
  font-weight: normal;
  line-height: normal;
  color: #264061;
`;

