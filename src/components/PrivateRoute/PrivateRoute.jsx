import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component, redirectTo }) {
  const isLoggedin = useSelector(selectIsAuthenticated);

  return isLoggedin ? component: <Navigate to={redirectTo} />;
}
