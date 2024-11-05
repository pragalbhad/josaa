// src/routes/ProtectedRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles }) => {
  //   const { user, role } = useSelector((state) => state.auth);

  let user = "student";
  let role = "student";
  
  if (!user || !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  // Render child routes if user is authorized
  return <Outlet />;
};

export default ProtectedRoute;
