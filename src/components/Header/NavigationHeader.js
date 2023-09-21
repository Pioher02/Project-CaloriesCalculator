import { Link, HeaderNavigationWrapper } from './NavigationStyledHeader';

export const NavigationHeader = ({ isLoggedIn }) => {
  return (
    <HeaderNavigationWrapper>
      {isLoggedIn ? (
        <>
          <Link to="/diary">DIARIO</Link>
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
