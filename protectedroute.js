// src/ProtectedRoute.js

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Authcontext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
