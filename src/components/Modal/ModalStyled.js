// components/Modal/ModalStyled.js
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ModalsHeadStyled = styled.p`
  min-height: 70px;
  margin: 0 auto;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.primary};

  @media (max-width: 320px) {
    padding: 0 20px 0;
    font-size: ${props => props.theme.fontSizes.s};
    text-align: start;
  }
`;

export const CaloriesCountStyled = styled.p`
  min-height: 62px;
  margin: 20px auto 0;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.xxl};
  line-height: ${props => props.theme.lineHeights.heading};
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.count};
`;

export const LineStyled = styled.span`
  display: block;
  margin: auto;
  border-bottom: 1px solid ${props => props.theme.colors.input};
`;

export const FoodListWrapperStyled = styled.div`
  max-width: 330px;
  margin: ${props => props.theme.space[5]}px auto 0;
  padding: 0 20px 0;
`;

export const FoodListTitleStyled = styled.p`
  margin: 12px auto 0;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.heading};
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.xs};
  letter-spacing: 0.04em;

  @media (max-width: 320px) {
    margin: 20px auto 0;
  }
`;

export const FoodListStyled = styled.ol`
  margin: 20px 0 0 0;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  li:not(:first-child) {
    margin: ${props => props.theme.space[4]}px 0 0 0;
  }
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
//return styles

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
