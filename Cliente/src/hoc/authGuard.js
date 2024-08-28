
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const AuthGuard = (props) => {
  let location = useLocation();

  // Utiliza useSelector para obtener el estado de autenticación
  const users = useSelector((state) => state.users);

  if (!users.auth) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return props.children;
};

export default AuthGuard;