import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ component, redirectTo }) {
  const isLoggedin = useSelector(selectIsAuthenticated)

  return isLoggedin ? <Navigate to={redirectTo} /> : component;
};

