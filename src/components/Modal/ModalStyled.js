// components/Modal/ModalStyled.js
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  zIndex: 9999, 
`;


export const ModalCloseButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding: 16px;
`;


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
    height: '590px',
    margin: 'auto',
    border: '1px solid #E0E0E0',
    backgroundColor: 'white', // Color de fondo blanco
    '@media (maxWidth: 768px)': { // Usar la sintaxis correcta de media query
      padding: '20px', // Cambiar el relleno para tabletas
    },
    '@media(maxWidth: 576px)': { // Usar la sintaxis correcta de media query
      padding: '10px', // Cambiar el relleno para teléfonos móviles
    },
    zIndex: 9999, // Valor alto para el z-index
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
  margin-top: 43px;
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

    @media (maxWidth: 768px) {
    font-size: 20px;
    span {
      font-size: 18px;
    }
  }

  @media (maxWidth: 576px) {
    font-size: 18px;
    span {
      font-size: 16px;
    }
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

    @media (maxWidth: 768px) {
    font-size: 36px;
    margin: 10px 0 0;
    span {
      font-size: 18px;
    }
  }

  @media (maxWidth: 576px) {
    font-size: 24px;
    margin: 5px 0 0;
    span {
      font-size: 16px;
    }
`;


export const ForbiddenFoodsHeading = styled.h3`
  color: #264061;
  font-size: 14px;
  margin-top: 52px;
  padding-top: 90px;
  padding-bottom: 20px;
  text-align: center;
  border-top: 1px solid #E0E0E0;
  padding-top: 10px; /* Ajusta el espaciado superior según tus preferencias */

  @media (maxWidth: 768px) {
    font-size: 12px;
    margin-top: 30px;
    padding-top: 60px;
    padding-bottom: 10px;
  }

  @media (maxWidth: 576px) {
    font-size: 12px;
    margin-top: 20px;
    padding-top: 40px;
    padding-bottom: 5px;
  }
`;

export const FoodList = styled.ul`
  list-style-type: none;
  color: #9B9FAA;
  font-size: 14px;
  padding: 0;

    @media (maxWidth: 768px) {
    font-size: 12px;
  }

  @media (maxWidth: 576px) {
    font-size: 10px;
  }
  
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

   @media (maxWidth: 768px) {
    font-size: 12px;
    padding: 6px;
  }

  @media (maxWidth: 576px) {
    font-size: 10px;
    padding: 4px;
  }
`;

export const CustomFoodListItem = styled.li`
  font-family: Verdana, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17.01px;
  letter-spacing: 4%;
  color: #9B9FAA;
  text-align: left;
  background: none;
  border: none;
  padding: 7px;
  margin-left: 50px;
  list-style: decimal; /* Agrega viñetas en números */
  margin-left: 20px; /* Espacio entre la viñeta y el texto */
`;