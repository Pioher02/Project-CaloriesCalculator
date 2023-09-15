import React, { useEffect } from 'react';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Suspense} from 'react';
import { FoneImages, Gradient } from './Layout.styled';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { HeaderUnderline } from 'components/Header/HeaderStyled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { refreshCalories } from 'redux/calculate/operations';

export const Layout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    isLoggedIn && !isRefreshing && dispatch(refreshCalories());
  }, [dispatch, isLoggedIn, isRefreshing]);

  return (
    <>
      {!isLoggedIn ? (
        <FoneImages>
          <Header />
          <HeaderUnderline />
          <Suspense>
            <Outlet />
          </Suspense>          
        </FoneImages>
      ) : (
        <Gradient>
          <Header />
          <HeaderUnderline />
          <Suspense>
            <Outlet />
          </Suspense>          
        </Gradient>
      )}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
