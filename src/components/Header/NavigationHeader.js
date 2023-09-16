import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectUser } from 'redux/auth/selectors';
import { selectCalculateValue } from 'redux/calculate/selectors';
import { Link, HeaderNavigationWrapper } from './NavigationStyledHeader';

export const NavigationHeader = ({ isLoggedIn }) => {
  const location = useLocation();
  const { data } = useSelector(selectUser);
  const { formData } = useSelector(selectCalculateValue);


  return (
    <HeaderNavigationWrapper
      isLoggedIn={isLoggedIn}
      location={location.pathname}
    >
      {isLoggedIn ? (
        (data?.height || formData?.height) && (
          <>
            <Link to="/diary">DIARIO</Link>
            <Link to="/calculate">CALCULADORA</Link>
          </>
        )
      ) : (
        <>
          <Link to="/login">INICIAR SESIÓN</Link>
          <Link to="/signup">CREAR UNA CUENTA</Link>
        </>
      )}
    </HeaderNavigationWrapper>
  );
};
