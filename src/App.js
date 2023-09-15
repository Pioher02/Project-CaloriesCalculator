import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing, selectUser } from 'redux/auth/selectors';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout/Layout';
import { routes } from 'helpers/constants';
import DiaryPage from 'pages/Diary';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const CalculatorPage = lazy(() =>
  import('pages/CalculatorPage/CalculatorPage')
);

export const App = () => {
  const dispatch = useDispatch();
  const { calorie } = useSelector(selectUser);
  const { isRefreshing } = useSelector(selectIsRefreshing);
  const noFormDataDirect = !calorie ? routes.calculate : routes.diaryToday;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={routes.main} element={<Layout />}>
        <Route path="/Project-CaloriesCalculator/diario" element={<DiaryPage />}></Route>
          <Route
            path={routes.main}
            element={
              <RestrictedRoute
                redirectTo={noFormDataDirect}
                component={<MainPage />}
              />
            }
          />
          <Route
            path={routes.calculate}
            element={
              <PrivateRoute
                redirectTo={!calorie ? routes.main : routes.login}
                component={<CalculatorPage />}
              />
            }
          />
        </Route>

        <Route path="*" element={<Navigate to={routes.main} replace />}></Route>
      </Routes>
    </>
  );
};
