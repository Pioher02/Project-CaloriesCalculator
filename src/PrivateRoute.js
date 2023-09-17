import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../src/redux/selectors/authSelectors';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;

