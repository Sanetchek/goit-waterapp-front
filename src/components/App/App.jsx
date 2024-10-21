import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Loading from '../Loading/Loading';
import Layout from '../Layout/Layout';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { refreshUser } from '../../redux/auth/operations';
import {
  selectIsRefreshing,
  selectIsAuthenticated,
} from '../../redux/auth/selectors'; // Import the selector

const WellcomePage = lazy(() =>
  import('../../pages/WellcomePage/WellcomePage')
);
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const SigninPage = lazy(() => import('../../pages/SigninPage/SigninPage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsAuthenticated); // Get logged-in status

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loading />
  ) : (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? ( // If logged in, show HomePage, otherwise show WellcomePage
                <PrivateRoute component={<HomePage />} redirectTo="/login" />
              ) : (
                <WellcomePage />
              )
            }
          />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<SigninPage />} redirectTo="/" />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/"
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Toaster position="top-right" reverseOrder={false} />
    </Layout>
  );
};
