import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStateContext } from "../../contexts/AuthStateContext";

interface ProtectedRouteProps {
  element: ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element: Component,
}) => {
  const { isLoggedIn } = useAuthStateContext();
  return isLoggedIn ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
