import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, HeaderNavigationWrapper } from './NavigationStyledHeader';
import Loader from 'components/Loader/spinnerApp';

export const NavigationHeader = ({ isLoggedIn }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // Función para activar/desactivar el spinner
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      {isLoading && <Loader />} {/* Muestra el spinner si isLoading es verdadero */}
      <HeaderNavigationWrapper
        isLoggedIn={isLoggedIn}
        location={location.pathname}
      >
        {isLoggedIn ? (
          <>
            <Link to={`/diary/`}>DIARIO</Link>
            <Link to="/calculate">CALCULADORA</Link>
          </>
        ) : (
          <>
            <Link to="/login" onClick={toggleLoading}>
              INICIAR SESIÓN
            </Link>
            <Link to="/signup" onClick={toggleLoading}>
              CREAR UNA CUENTA
            </Link>
          </>
        )}
      </HeaderNavigationWrapper>
    </>
  );
};
