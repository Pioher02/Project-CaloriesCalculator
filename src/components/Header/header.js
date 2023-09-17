import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Desktop/Logo.png';
import LogoMobile from '../../images/Mobile/logo.png'
import Linea from '../../images/Desktop/Vector 1.png';
import { Container, ContainerHeader, Div, MobileLogo, Ajuste } from './header.styled';

const Header = () => {
  return (
    <Container>
    <ContainerHeader>
      <Ajuste>
        <img className="Logo" src={Logo} alt="Logo" />
        <MobileLogo src={LogoMobile} alt="Logo" />
        <img className="Linea" src={Linea} alt="Linea" style={{ marginLeft: '10px' }} />
        <Div>
          <Link to="/login">INICIAR SESIÓN</Link>
          <Link to="/register">CREAR UNA CUENTA</Link>
        </Div>
      </Ajuste>
    </ContainerHeader>
    </Container>
  );
};

export default Header;
