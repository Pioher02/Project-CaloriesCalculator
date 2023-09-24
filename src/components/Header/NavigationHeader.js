import { useLocation } from 'react-router-dom';

import { Link, HeaderNavigationWrapper } from './NavigationStyledHeader';

export const NavigationHeader = ({ isLoggedIn }) => {
  const location = useLocation();

  return (
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
          <Link to="/login">INICIAR SESIÓN</Link>
          <Link to="/signup">CREAR UNA CUENTA</Link>
        </>
      )}
    </HeaderNavigationWrapper>
  );
};
