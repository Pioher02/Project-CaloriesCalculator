import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isloggedin = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);

    return !isloggedin && !isRefreshing ? (
        <Navigate to={redirectTo} />
    ) : (
        Component
    );
};
