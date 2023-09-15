import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectUser } from 'redux/auth/selectors';
import { getSelectedDate } from 'redux/date/selectors';
import { selectCalculateValue } from 'redux/calculate/selectors';
import { initialDate } from 'helpers/constants';

import { Link, HeaderNavigationWrapper } from './NavigationStyledHeader';

export const NavigationHeader = ({ isLoggedIn }) => {
  const location = useLocation();
  const { data } = useSelector(selectUser);
  const { formData } = useSelector(selectCalculateValue);
  const selectedDate = useSelector(getSelectedDate);

  return (
    <HeaderNavigationWrapper
      isLoggedIn={isLoggedIn}
      location={location.pathname}
    >
      {isLoggedIn ? (
        (data?.height || formData?.height) && (
          <>
            <Link
              to={`/diary/${
                selectedDate ? selectedDate.split('.').join('-') : initialDate
              }`}
            >
              DIARIO
            </Link>
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
