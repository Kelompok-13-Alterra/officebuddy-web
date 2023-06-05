import React from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

/* eslint-disable react/prop-types */
const PrivateRoute = ({ children }) => {
  const authCheck = () => {
    const accessToken = sessionStorage.getItem("access_token");
    if (accessToken) {
      try {
        const userData = jwtDecode(accessToken);
        if (userData.role === 1) {
          return true;
        }
      } catch (error) {
        console.log("AUTH CHECK ERROR >>>", error.message);
        return false;
      }
    }
    return false;
  };

  if (authCheck()) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
