import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading/Loading";


const RequireAuth = ({ children }) => {

  let location = useLocation();
  

  return children;
};

export default RequireAuth;
