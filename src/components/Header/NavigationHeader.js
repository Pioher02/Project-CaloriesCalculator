import React, { useState } from 'react';
import { Link, HeaderNavigationWrapper } from './NavigationStyledHeader';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader/spinnerApp';

export const NavigationHeader = ({ isloggedin }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // Función para mostrar u ocultar el spinner
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      {isLoading && <Loader />} {/* Mostrar el spinner cuando isLoading sea verdadero */}
      <HeaderNavigationWrapper
        isloggedin={isloggedin}
        location={location.pathname}
      >
        {isloggedin ? (
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