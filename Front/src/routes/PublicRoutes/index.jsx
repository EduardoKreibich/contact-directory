import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Outlet, Navigate } from "react-router-dom";

export const PublicRoutes = () => {
  const { infoUser } = useContext(UserContext);

  return !infoUser ? <Outlet /> : <Navigate to="/home" />;
};
