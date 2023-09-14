import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from "../images/logoSlimMom.png";

const Header = styled.nav`
  width: 60%;
  height: 135px;
  display: flex;
`;

const Navigationbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Options = styled.div`
  color: #9b9faa;
  margin: 0px 10px 0px;
  font-size: 14px;
  font-weight: 700;
  &:hover,
  &:focus,
  &:active {
    color: #fc842d;
  }
`;

const NavBar = () => {
  return (
    <Header>
      <Navigationbar>
        <img src={logo} alt="LogoSlimMom" />
        <Options>
          <NavLink
            to="/Project-CaloriesCalculator/diario"
            style={{
              textDecoration: 'none',
              color: 'unset',
              active: '#fc842d',
            }}
          >
            DIARIO
          </NavLink>
        </Options>
        <Options>CALCULADORA</Options>
      </Navigationbar>
    </Header>
  );
};

export default NavBar;
