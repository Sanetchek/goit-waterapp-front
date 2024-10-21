import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ component, redirectTo, ...rest }) {
  const isLoggedin = useSelector(selectIsAuthenticated);

  return isLoggedin ? (
    React.cloneElement(component, { ...rest })
  ) : (
    <Navigate to={redirectTo} />
  );
}
