import { Logo } from 'components/Logo/Logo';
import {
  BurgerIconStyled,
  HeaderStyled,
  CrossIconStyled,
} from 'components/Header/HeaderStyled';
import { NavigationHeader } from './NavigationHeader';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { useState } from 'react';
import { NavigationBurgerMenu } from '../../components/Navigation/NavigationBurgerMenu';

export const Header = () => {
  const isloggedin = useSelector(selectIsLoggedIn);
  const [burgerActive, setBurgerActive] = useState(false);

  const bodyEl = document.body;

  const burgerOpen = () => {
    setBurgerActive(true);
    bodyEl.style.overflow = 'hidden';
  };

  const burgerClose = () => {
    setBurgerActive(false);
    bodyEl.style.overflow = 'unset';
  };

  return (
    <>
      <HeaderStyled>
        <Logo />
        {!isloggedin ? (
          <NavigationHeader isloggedin={isloggedin} />
        ) : (
          <>
            <NavigationHeader isloggedin={isloggedin} />
            <UserInfo />
            {burgerActive ? (
              <CrossIconStyled onClick={burgerClose} />
            ) : (
              <BurgerIconStyled onClick={burgerOpen} />
            )}
          </>
        )}
      </HeaderStyled>

      <NavigationBurgerMenu
        burgerState={burgerActive}
        burgerClose={burgerClose}
      />
    </>
  );
};
