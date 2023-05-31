import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spninner from "../Utils/Spninner";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spninner />;
  }
  if (!user) {
  return <Navigate to="/login" state={{from: location }}></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
