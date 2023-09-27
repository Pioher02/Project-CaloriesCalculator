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
  const [burgeractive, setBurgeractive] = useState(false);

  const bodyEl = document.body;

  const burgerOpen = () => {
    setBurgeractive(true);
    bodyEl.style.overflow = 'hidden';
  };

  const burgerClose = () => {
    setBurgeractive(false);
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
            {burgeractive ? (
              <CrossIconStyled onClick={burgerClose} />
            ) : (
              <BurgerIconStyled onClick={burgerOpen} />
            )}
          </>
        )}
      </HeaderStyled>

      <NavigationBurgerMenu
        burgerState={burgeractive ? burgeractive : undefined}
        burgerClose={burgerClose}
      />
    </>
  );
};
