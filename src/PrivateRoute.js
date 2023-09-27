import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../src/redux/selectors/authSelectors';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isloggedin = useSelector(selectIsLoggedIn);

  return (
    <Route
      {...rest}
      element={isloggedin ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;


